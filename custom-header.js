'use strict';
import LitMixin from '/node_modules/backed/mixins/lit-mixin.js';

export default (() => {
  class CustomHeader extends LitMixin(HTMLElement) {
    constructor() {
      super();
    }
    render() {
      return html`
        <style>
          :host {
            display: block;
            height: var(--custom-header-height, 48px);
            background: var(--custom-header-background, #46484f);
            width: 100%;
            box-shadow: 0px 3px 5px 0px #777;
          }
        </style>
        <slot></slot>
        <slot name="toolbar"></slot>
      `;
    }
  };
  customElements.define('custom-header', CustomHeader)
})();
