// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as SDK from '../../core/sdk/sdk.js';
import * as UI from '../../ui/legacy/legacy.js';
import * as ApplicationComponents from './components/components.js';
import type * as Protocol from '../../generated/protocol.js';

import {ReportingApiReportsView} from './ReportingApiReportsView.js';

export class ReportingApiView extends UI.SplitWidget.SplitWidget {
  private readonly endpointsGrid = new ApplicationComponents.EndpointsGrid.EndpointsGrid();
  private endpoints: Map<string, Protocol.Network.ReportingApiEndpoint[]>;

  constructor() {
    super(/* isVertical: */ false, /* secondIsSidebar: */ true);
    this.endpoints = new Map();
    const mainTarget = SDK.TargetManager.TargetManager.instance().mainTarget();
    const networkManager = mainTarget && mainTarget.model(SDK.NetworkManager.NetworkManager);
    if (networkManager) {
      networkManager.addEventListener(
          SDK.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin,
          event => this.onEndpointsChangedForOrigin(event.data), this);

      const reportingApiReportsView = new ReportingApiReportsView(networkManager);
      const reportingApiEndpointsView = new UI.Widget.VBox();
      reportingApiEndpointsView.setMinimumSize(0, 40);
      reportingApiEndpointsView.contentElement.appendChild(this.endpointsGrid);
      this.setMainWidget(reportingApiReportsView);
      this.setSidebarWidget(reportingApiEndpointsView);
      networkManager.enableReportingApi();
    }
  }

  private onEndpointsChangedForOrigin(data: Protocol.Network.ReportingApiEndpointsChangedForOriginEvent): void {
    this.endpoints.set(data.origin, data.endpoints);
    this.endpointsGrid.data = {endpoints: this.endpoints};
  }
}
