// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/* eslint-disable rulesdir/no_underscored_properties */

import * as Coverage from '../coverage/coverage.js';
import * as Formatter from '../formatter/formatter.js';
import * as i18n from '../i18n/i18n.js';
import * as SDK from '../sdk/sdk.js';
import * as SourceFrame from '../source_frame/source_frame.js';  // eslint-disable-line no-unused-vars
import * as UI from '../ui/ui.js';
import * as Workspace from '../workspace/workspace.js';  // eslint-disable-line no-unused-vars

import {Plugin} from './Plugin.js';

const UIStrings = {
  /**
  *@description Text for Coverage Status Bar Item in Sources Panel
  */
  clickToShowCoveragePanel: 'Click to show Coverage Panel',
  /**
  *@description Text for Coverage Status Bar Item in Sources Panel
  */
  showDetails: 'Show Details',
  /**
  *@description Text to show in the status bar if coverage data is available
  *@example {12.3} PH1
  */
  coverageS: 'Coverage: {PH1} %',
  /**
  *@description Text to be shown in the status bar if no coverage data is available
  */
  coverageNa: 'Coverage: n/a',
};
const str_ = i18n.i18n.registerUIStrings('sources/CoveragePlugin.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
export class CoveragePlugin extends Plugin {
  _textEditor: SourceFrame.SourcesTextEditor.SourcesTextEditor;
  _uiSourceCode: Workspace.UISourceCode.UISourceCode;
  _originalSourceCode: Workspace.UISourceCode.UISourceCode;
  _text: UI.Toolbar.ToolbarButton;
  _model: Coverage.CoverageModel.CoverageModel|null|undefined;
  _coverage: Coverage.CoverageModel.URLCoverageInfo|null|undefined;
  constructor(
      textEditor: SourceFrame.SourcesTextEditor.SourcesTextEditor, uiSourceCode: Workspace.UISourceCode.UISourceCode) {
    super();

    this._textEditor = textEditor;
    this._uiSourceCode = uiSourceCode;

    this._originalSourceCode =
        Formatter.SourceFormatter.SourceFormatter.instance().getOriginalUISourceCode(this._uiSourceCode);

    this._text = new UI.Toolbar.ToolbarButton(i18nString(UIStrings.clickToShowCoveragePanel));
    this._text.setSecondary();
    this._text.addEventListener(UI.Toolbar.ToolbarButton.Events.Click, () => {
      UI.ViewManager.ViewManager.instance().showView('coverage');
    });

    const mainTarget = SDK.SDKModel.TargetManager.instance().mainTarget();
    if (mainTarget) {
      this._model = mainTarget.model(Coverage.CoverageModel.CoverageModel);
      if (this._model) {
        this._model.addEventListener(Coverage.CoverageModel.Events.CoverageReset, this._handleReset, this);

        this._coverage = this._model.getCoverageForUrl(this._originalSourceCode.url());
        if (this._coverage) {
          this._coverage.addEventListener(
              Coverage.CoverageModel.URLCoverageInfo.Events.SizesChanged, this._handleCoverageSizesChanged, this);
        }
      }
    }

    this._updateStats();
  }

  dispose(): void {
    if (this._coverage) {
      this._coverage.removeEventListener(
          Coverage.CoverageModel.URLCoverageInfo.Events.SizesChanged, this._handleCoverageSizesChanged, this);
    }
    if (this._model) {
      this._model.removeEventListener(Coverage.CoverageModel.Events.CoverageReset, this._handleReset, this);
    }
  }

  static accepts(uiSourceCode: Workspace.UISourceCode.UISourceCode): boolean {
    return uiSourceCode.contentType().isDocumentOrScriptOrStyleSheet();
  }

  _handleReset(): void {
    this._coverage = null;
    this._updateStats();
  }

  _handleCoverageSizesChanged(): void {
    this._updateStats();
  }

  _updateStats(): void {
    if (this._coverage) {
      this._text.setTitle(i18nString(UIStrings.showDetails));
      this._text.setText(i18nString(UIStrings.coverageS, {PH1: this._coverage.usedPercentage().toFixed(1)}));
    } else {
      this._text.setTitle(i18nString(UIStrings.clickToShowCoveragePanel));
      this._text.setText(i18nString(UIStrings.coverageNa));
    }
  }

  async rightToolbarItems(): Promise<UI.Toolbar.ToolbarItem[]> {
    return [this._text];
  }
}