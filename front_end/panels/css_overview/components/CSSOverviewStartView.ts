// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as i18n from '../../../core/i18n/i18n.js';
import * as Buttons from '../../../ui/components/buttons/buttons.js';
import * as ComponentHelpers from '../../../ui/components/helpers/helpers.js';
import * as PanelFeedback from '../../../ui/components/panel_feedback/panel_feedback.js';
import * as LitHtml from '../../../ui/lit-html/lit-html.js';

import cssOverviewStartViewStyles from './cssOverviewStartView.css.js';

const UIStrings = {
  /**
  *@description Label for the capture button in the CSS Overview Panel
  */
  captureOverview: 'Capture overview',
  /**
  *@description Header for the summary of CSS Overview
  */
  identifyCSSImprovements: 'Identify potential CSS improvements',
  /**
  *@description First point of the summarized features of CSS Overview
  */
  capturePageCSSOverview: 'Capture an overview of your page’s CSS',
  /**
  *@description Second point of the summarized features of CSS Overview
  */
  identifyCSSImprovementsWithExampleIssues:
      'Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)',
  /**
  *@description Third point of the summarized features of CSS Overview
  */
  locateAffectedElements: 'Locate the affected elements in the Elements panel',
  /**
  *@description Title of the link to the quick start video and documentation to CSS Overview panel
  */
  quickStartWithCSSOverview: 'Quick start: get started with the new CSS Overview panel',
};
const str_ = i18n.i18n.registerUIStrings('panels/css_overview/components/CSSOverviewStartView.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);

const {render, html} = LitHtml;

const FEEDBACK_LINK = 'https://goo.gle/css-overview-feedback';
const DOC_LINK = 'https://developer.chrome.com/docs/devtools/css-overview';
export class OverviewStartRequestedEvent extends Event {
  static readonly eventName = 'overviewstartrequested';

  constructor() {
    super(OverviewStartRequestedEvent.eventName);
  }
}

export class CSSOverviewStartView extends HTMLElement {
  static readonly litTagName = LitHtml.literal`devtools-css-overview-start-view`;
  readonly #shadow = this.attachShadow({mode: 'open'});

  connectedCallback(): void {
    this.#shadow.adoptedStyleSheets = [cssOverviewStartViewStyles];
    this.render();
  }

  show(): void {
    this.classList.remove('hidden');
  }

  hide(): void {
    this.classList.add('hidden');
  }

  private onStartCaptureClick(): void {
    this.dispatchEvent(new OverviewStartRequestedEvent());
  }

  private render(): void {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html`
      <div class="css-overview-start-view">
        <h1 class="summary-header">${i18nString(UIStrings.identifyCSSImprovements)}</h1>
        <ol class="summary-list">
          <li>${i18nString(UIStrings.capturePageCSSOverview)}</li>
          <li>${i18nString(UIStrings.identifyCSSImprovementsWithExampleIssues)}</li>
          <li>${i18nString(UIStrings.locateAffectedElements)}</li>
        </ol>
        <div class="start-capture-wrapper">
          <${Buttons.Button.Button.litTagName}
            class="start-capture"
            .variant=${Buttons.Button.Variant.PRIMARY}
            @click=${this.onStartCaptureClick}>
            ${i18nString(UIStrings.captureOverview)}
          </${Buttons.Button.Button.litTagName}>
        </div>
        <${PanelFeedback.PanelFeedback.PanelFeedback.litTagName} .data=${{
            feedbackUrl: FEEDBACK_LINK,
            quickStartUrl: DOC_LINK,
            quickStartLinkText: i18nString(UIStrings.quickStartWithCSSOverview),
          } as PanelFeedback.PanelFeedback.PanelFeedbackData}>
        </${PanelFeedback.PanelFeedback.PanelFeedback.litTagName}>
        <${PanelFeedback.FeedbackButton.FeedbackButton.litTagName} .data=${{
          feedbackUrl: FEEDBACK_LINK,
          } as PanelFeedback.FeedbackButton.FeedbackButtonData}>
        </${PanelFeedback.FeedbackButton.FeedbackButton.litTagName}>
      </div>
    `, this.#shadow, {
      host: this,
    });
    // clang-format on

    const startButton = this.#shadow.querySelector<HTMLElement>('.start-capture');
    if (startButton) {
      startButton.focus();
    }
  }
}

ComponentHelpers.CustomElements.defineComponent('devtools-css-overview-start-view', CSSOverviewStartView);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLElementTagNameMap {
    'devtools-css-overview-start-view': CSSOverviewStartView;
  }
}
