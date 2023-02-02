// src/components/tab.js
var Tabs = class {
  tabs;
  tab_buttons;
  tab_panels;
  constructor(target) {
    this.tabs = target;
    this.tab_buttons = this.tabs.querySelectorAll(".ds-nav-tabs a");
    this.tab_panels = this.tabs.querySelectorAll(".ds-tab-panel");
    this.render(this.tab_panels[0].id);
    this.tabs.querySelector(".ds-nav-tabs").addEventListener("click", (event) => {
      this.render(event.target.getAttribute("href"));
    });
  }
  render(id) {
    this.tab_panels.forEach(function(panel) {
      if (panel.id === id) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    });
    this.tab_buttons.forEach((btn) => {
      if (btn.href.includes(id)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
};

// src/components/toggle.js
var ToggleBtn = class {
  constructor(element) {
    const event = new Event(`toggle-${element.getAttribute("aria-controls")}`, { bubbles: true, composed: true });
    element.addEventListener("click", () => {
      element.dispatchEvent(event);
    });
  }
};
var TogglePanel = class extends HTMLElement {
  style = `
    :host([hidden]) {
      display: block !important;
      transform: translate(-100%);
    }
    :host {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      max-width: 100%;
      background-color: var(--background-color);
      padding: var(--padding);
      transition: transform 0.3s;
      transform: translate(0);
    }
  `;
  template = `
    <style>${this.style}</style>
    <slot>
      <p>This is the default content to toggle</p>
    </slot>
  `;
  static get observedAttributes() {
    return [
      "hidden"
    ];
  }
  constructor() {
    super();
  }
  createShadowDOM() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.template;
  }
  connectedCallback() {
    this.createShadowDOM();
    this.hidden = true;
    document.body.addEventListener(`toggle-${this.id}`, () => {
      this.hidden = !this.hidden;
    });
  }
};

// src/components/spinner.js
var Spinner = class extends HTMLElement {
  style = `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: auto;
    }
    
  `;
  template = `
    <style>${this.style}</style>
    <svg class="ds-loading-svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        .ds-loading-svg .ds-loading-circle {
          fill: hsl(186,100%,12%);
          animation: 2s infinite alternate pulse;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(1) {
          animation-delay: 1.75s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(2) {
          animation-delay: 1.5s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(3) {
          animation-delay: 1.25s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(4) {
          animation-delay: 1s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(5) {
          animation-delay: 0.75s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(6) {
          animation-delay: 0.5s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(7) {
          animation-delay: 0.25s;
        }

        @keyframes pulse {
          from {
            fill: hsl(186,100%,12%);
          }
          to {
            fill: hsla(0,100%,100%);
          }
        }
      </style>
      <circle class="ds-loading-circle" cx="50" cy="50" r="45" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="40" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="35" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="30" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="25" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="20" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="15" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="10" />
    </svg>
  `;
  static get observedAttributes() {
    return [
      "hidden"
    ];
  }
  constructor() {
    super();
    this.createShadowDOM();
  }
  createShadowDOM() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.template;
  }
};
export {
  Spinner,
  Tabs,
  ToggleBtn,
  TogglePanel
};
