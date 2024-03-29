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
    ds-spinner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ds-spinner > .ds-loading-svg {
      width: 100%;
      height: auto;
      max-width: 12rem;
    }
    
  `;
  template = `
    <style>${this.style}</style>
    
      <svg class="ds-loading-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <style>
          .ds-spinner-path {
            fill: var(--color);
          }
          .ds-spinner-dot {
            fill: var(--dark-steel);
            
          }
          .ds-spinner-dots {
            animation: encircle 3s linear infinite;
            transform-origin: 50% 50%;
          }
          @keyframes encircle {
            0% { 
              transform: rotate(0); 
            }
            100% { 
              transform: rotate(359deg);
            }
          }

        </style>
        <path class="ds-spinner-path" d="M11.7501 13.5C11.7501 13.6381 11.862 13.75 12.0001 13.75C12.1381 13.75 12.2501 13.6381 12.2501 13.5H11.7501ZM9.00005 14.1501C8.86198 14.1501 8.75005 14.262 8.75005 14.4001C8.75005 14.5381 8.86198 14.6501 9.00005 14.6501V14.1501ZM15.0001 14.6501C15.1381 14.6501 15.2501 14.5381 15.2501 14.4001C15.2501 14.262 15.1381 14.1501 15.0001 14.1501V14.6501ZM9.00005 14.7501C8.86198 14.7501 8.75005 14.862 8.75005 15.0001C8.75005 15.1381 8.86198 15.2501 9.00005 15.2501V14.7501ZM15.0001 15.2501C15.1381 15.2501 15.2501 15.1381 15.2501 15.0001C15.2501 14.862 15.1381 14.7501 15.0001 14.7501V15.2501ZM9.00005 15.3501C8.86198 15.3501 8.75005 15.462 8.75005 15.6001C8.75005 15.7381 8.86198 15.8501 9.00005 15.8501V15.3501ZM15.0001 15.8501C15.1381 15.8501 15.2501 15.7381 15.2501 15.6001C15.2501 15.462 15.1381 15.3501 15.0001 15.3501V15.8501ZM12.2501 6.8175C12.2501 6.67943 12.1381 6.5675 12.0001 6.5675C11.862 6.5675 11.7501 6.67943 11.7501 6.8175H12.2501ZM11.7501 7.30877C11.7501 7.44684 11.862 7.55877 12.0001 7.55877C12.1381 7.55877 12.2501 7.44684 12.2501 7.30877H11.7501ZM12.2501 8.29129C12.2501 8.15322 12.1381 8.04129 12.0001 8.04129C11.862 8.04129 11.7501 8.15322 11.7501 8.29129H12.2501ZM12.9826 8.05003C13.1207 8.05003 13.2326 7.9381 13.2326 7.80003C13.2326 7.66196 13.1207 7.55003 12.9826 7.55003V8.05003ZM12.4913 7.55003C12.3533 7.55003 12.2413 7.66196 12.2413 7.80003C12.2413 7.9381 12.3533 8.05003 12.4913 8.05003V7.55003ZM11.5088 8.05003C11.6469 8.05003 11.7588 7.9381 11.7588 7.80003C11.7588 7.66196 11.6469 7.55003 11.5088 7.55003V8.05003ZM11.0175 7.55003C10.8795 7.55003 10.7675 7.66196 10.7675 7.80003C10.7675 7.9381 10.8795 8.05003 11.0175 8.05003V7.55003ZM13.3061 13.3423C13.219 13.4495 13.2352 13.6069 13.3423 13.694C13.4495 13.7811 13.6069 13.7649 13.694 13.6578L13.3061 13.3423ZM15.0001 10.25C14.862 10.25 14.7501 10.362 14.7501 10.5C14.7501 10.6381 14.862 10.75 15.0001 10.75V10.25ZM14.8208 13.3258C14.7246 13.4248 14.7268 13.5831 14.8258 13.6793C14.9248 13.7756 15.0831 13.7733 15.1793 13.6743L14.8208 13.3258ZM10.3061 13.6578C10.3932 13.7649 10.5507 13.7811 10.6578 13.694C10.7649 13.6069 10.7811 13.4495 10.694 13.3423L10.3061 13.6578ZM9.00005 10.75C9.13812 10.75 9.25005 10.6381 9.25005 10.5C9.25005 10.362 9.13812 10.25 9.00005 10.25V10.75ZM8.82078 13.6743C8.91702 13.7733 9.07529 13.7756 9.1743 13.6793C9.27331 13.5831 9.27556 13.4248 9.17932 13.3258L8.82078 13.6743ZM12.2501 13.5V10.2H11.7501V13.5H12.2501ZM9.00005 14.6501H15.0001V14.1501H9.00005V14.6501ZM9.00005 15.2501H15.0001V14.7501H9.00005V15.2501ZM9.00005 15.8501H15.0001V15.3501H9.00005V15.8501ZM11.7501 6.8175V7.30877H12.2501V6.8175H11.7501ZM11.7501 8.29129V8.78255H12.2501V8.29129H11.7501ZM12.9826 7.55003H12.4913V8.05003H12.9826V7.55003ZM11.5088 7.55003H11.0175V8.05003H11.5088V7.55003ZM12.1992 10.3512C12.2739 10.2528 12.4752 10.0481 12.765 9.86913C13.0529 9.69133 13.4102 9.55004 13.8001 9.55004V9.05004C13.2899 9.05004 12.842 9.23392 12.5023 9.44371C12.1644 9.65237 11.9157 9.89764 11.8009 10.0489L12.1992 10.3512ZM13.8001 9.55004C14.1895 9.55004 14.4088 9.67613 14.5395 9.84581C14.6794 10.0274 14.7501 10.3006 14.7501 10.6482H15.2501C15.2501 10.2468 15.1707 9.84592 14.9356 9.54069C14.6913 9.22354 14.3107 9.05004 13.8001 9.05004V9.55004ZM14.7501 10.6482C14.7501 11.0371 14.6099 11.444 14.3528 11.8939C14.0953 12.3442 13.7318 12.8188 13.3061 13.3423L13.694 13.6578C14.121 13.1327 14.5074 12.6308 14.7868 12.142C15.0665 11.6528 15.2501 11.158 15.2501 10.6482H14.7501ZM15.0001 10.75C15.366 10.75 15.6039 10.8292 15.7449 10.9381C15.8763 11.0396 15.9501 11.187 15.9501 11.4H16.4501C16.4501 11.0537 16.3207 10.751 16.0505 10.5424C15.7899 10.3411 15.4277 10.25 15.0001 10.25V10.75ZM15.9501 11.4C15.9501 11.6159 15.8544 11.9104 15.6538 12.2567C15.4562 12.5978 15.1698 12.9668 14.8208 13.3258L15.1793 13.6743C15.5504 13.2926 15.864 12.8913 16.0864 12.5074C16.3057 12.1288 16.4501 11.7436 16.4501 11.4H15.9501ZM12.1992 10.0489C12.0844 9.89764 11.8358 9.65237 11.4979 9.44371C11.1581 9.23392 10.7102 9.05004 10.2001 9.05004V9.55004C10.59 9.55004 10.9472 9.69133 11.2352 9.86913C11.5249 10.0481 11.7262 10.2528 11.8009 10.3512L12.1992 10.0489ZM10.2001 9.05004C9.68947 9.05004 9.30881 9.22354 9.06451 9.54069C8.82939 9.84592 8.75006 10.2468 8.75006 10.6482H9.25006C9.25006 10.3006 9.32073 10.0274 9.46062 9.84581C9.59132 9.67613 9.81066 9.55004 10.2001 9.55004V9.05004ZM8.75006 10.6482C8.75006 11.158 8.93361 11.6528 9.21329 12.142C9.49271 12.6308 9.87916 13.1327 10.3061 13.6578L10.694 13.3423C10.2683 12.8188 9.90479 12.3442 9.64737 11.8939C9.39021 11.444 9.25006 11.0371 9.25006 10.6482H8.75006ZM9.00005 10.25C8.57237 10.25 8.21024 10.3411 7.94962 10.5424C7.67946 10.751 7.55005 11.0537 7.55005 11.4H8.05005C8.05005 11.187 8.12381 11.0396 8.25524 10.9381C8.39622 10.8292 8.63408 10.75 9.00005 10.75V10.25ZM7.55005 11.4C7.55005 11.7436 7.69439 12.1288 7.91373 12.5074C8.13614 12.8913 8.44974 13.2926 8.82078 13.6743L9.17932 13.3258C8.83036 12.9668 8.54396 12.5978 8.34637 12.2567C8.14571 11.9104 8.05005 11.6159 8.05005 11.4H7.55005ZM12.3201 9.35254C12.3201 9.52928 12.1768 9.67255 12.0001 9.67255V10.1725C12.453 10.1725 12.8201 9.80542 12.8201 9.35254H12.3201ZM12.0001 9.67255C11.8234 9.67255 11.6801 9.52928 11.6801 9.35254H11.1801C11.1801 9.80542 11.5472 10.1725 12.0001 10.1725V9.67255ZM11.6801 9.35254C11.6801 9.1758 11.8233 9.03255 12.0001 9.03255V8.53255C11.5472 8.53255 11.1801 8.89968 11.1801 9.35254H11.6801ZM12.0001 9.03255C12.1768 9.03255 12.3201 9.17583 12.3201 9.35254H12.8201C12.8201 8.89965 12.4529 8.53255 12.0001 8.53255V9.03255Z" />
        <g class="ds-spinner-dots">
          <path class="ds-spinner-path ds-spinner-dot" d="M12 3.60001C12.9941 3.60001 13.8 2.79412 13.8 1.8C13.8 0.80589 12.9941 0 12 0C11.0058 0 10.2 0.80589 10.2 1.8C10.2 2.79412 11.0058 3.60001 12 3.60001Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M12 24.0001C12.9941 24.0001 13.8 23.1942 13.8 22.2001C13.8 21.2059 12.9941 20.4001 12 20.4001C11.0058 20.4001 10.2 21.2059 10.2 22.2001C10.2 23.1942 11.0058 24.0001 12 24.0001Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M22.2 13.8C23.1941 13.8 24 12.9941 24 12C24 11.0059 23.1941 10.2 22.2 10.2C21.2059 10.2 20.4 11.0059 20.4 12C20.4 12.9941 21.2059 13.8 22.2 13.8Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M1.80001 13.8C2.79412 13.8 3.60001 12.9941 3.60001 12C3.60001 11.0059 2.79412 10.2 1.80001 10.2C0.80589 10.2 0 11.0059 0 12C0 12.9941 0.80589 13.8 1.80001 13.8Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M19.2 6.60002C20.1941 6.60002 21 5.79413 21 4.80002C21 3.8059 20.1941 3.00002 19.2 3.00002C18.2059 3.00002 17.4 3.8059 17.4 4.80002C17.4 5.79413 18.2059 6.60002 19.2 6.60002Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M4.8 21.0001C5.79412 21.0001 6.60001 20.1942 6.60001 19.2C6.60001 18.2059 5.79412 17.4 4.8 17.4C3.80589 17.4 3 18.2059 3 19.2C3 20.1942 3.80589 21.0001 4.8 21.0001Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M19.2 21.0001C20.1941 21.0001 21 20.1942 21 19.2C21 18.2059 20.1941 17.4 19.2 17.4C18.2059 17.4 17.4 18.2059 17.4 19.2C17.4 20.1942 18.2059 21.0001 19.2 21.0001Z"/>
          <path class="ds-spinner-path ds-spinner-dot" d="M4.8 6.60002C5.79412 6.60002 6.60001 5.79413 6.60001 4.80002C6.60001 3.8059 5.79412 3.00002 4.8 3.00002C3.80589 3.00002 3 3.8059 3 4.80002C3 5.79413 3.80589 6.60002 4.8 6.60002Z"/>
        <g>
      </svg>
  `;
  static get observedAttributes() {
    return [
      "hidden"
    ];
  }
  constructor() {
    super();
  }
  createDOM() {
    this.innerHTML = this.template;
  }
  connectedCallback() {
    this.createDOM();
  }
};

// src/components/tabs.js
var Tabs = class extends HTMLElement {
  constructor() {
    super();
    this.tabTitles = [];
    this.tabContents = [];
    this.activeIndex = 0;
    this.componentId = Math.floor(Math.random() * 1e3);
  }
  connectedCallback() {
    const idx = Number(this.getAttribute("data-selected"));
    if (idx >= 0 && idx < this.childElementCount) {
      this.activeIndex = idx;
    }
    this.setupTabs();
    this.render();
  }
  setupTabs() {
    const tabs = Array.from(this.children);
    tabs.forEach((tab, index) => {
      const title = tab.getAttribute("title");
      const tabTitleButton = document.createElement("button");
      tabTitleButton.textContent = title;
      tabTitleButton.setAttribute("role", "tab");
      tabTitleButton.setAttribute("aria-selected", index === this.activeIndex);
      tabTitleButton.setAttribute(
        "aria-controls",
        `tabpanel-${this.componentId}-${index}`
      );
      tabTitleButton.addEventListener(
        "click",
        () => this.switchTab(index)
      );
      this.tabTitles.push(tabTitleButton);
      const tabContent = document.createElement("div");
      tabContent.className = "tab-content";
      tabContent.id = `tabpanel-${this.componentId}-${index}`;
      tabContent.setAttribute("role", "tabpanel");
      tabContent.setAttribute("aria-labelledby", `tab-${this.componentId}-${index}`);
      tabContent.style.display = index === this.activeIndex ? "block" : "none";
      tabContent.appendChild(tab);
      this.tabContents.push(tabContent);
    });
  }
  switchTab(index) {
    this.tabTitles[this.activeIndex].setAttribute("aria-selected", false);
    this.tabTitles[index].setAttribute("aria-selected", true);
    this.tabContents[this.activeIndex].style.display = "none";
    this.tabContents[index].style.display = "block";
    this.activeIndex = index;
    const tabChangeEvent = new CustomEvent("tabchange", {
      detail: {
        index,
        title: this.tabTitles[index].textContent
      },
      bubbles: true
    });
    this.dispatchEvent(tabChangeEvent);
  }
  render() {
    const styleContainer = document.createElement("style");
    styleContainer.textContent = this.styles;
    this.appendChild(styleContainer);
    const tabsContainer = document.createElement("div");
    tabsContainer.className = "ds-tabs-header";
    this.tabTitles.forEach((tabTitle, index) => {
      tabTitle.id = `tab-${this.componentId}-${index}`;
      tabsContainer.appendChild(tabTitle);
    });
    this.appendChild(tabsContainer);
    const tabContentContainer = document.createElement("div");
    tabContentContainer.className = "ds-tabs-body";
    this.tabContents.forEach((tabContent) => {
      tabContent.className = "tabpanel";
      tabContentContainer.appendChild(tabContent);
    });
    this.appendChild(tabContentContainer);
  }
};
customElements.define("ds-tabs", Tabs);

// src/components/popover.js
var ToggleEvent = class extends Event {
  constructor(type, { oldState = "", newState = "", ...init } = {}) {
    super(type, init);
    this.oldState = String(oldState || "");
    this.newState = String(newState || "");
  }
};
var popoverToggleTaskQueue = /* @__PURE__ */ new WeakMap();
function queuePopoverToggleEventTask(element, oldState, newState) {
  popoverToggleTaskQueue.set(
    element,
    setTimeout(() => {
      if (!popoverToggleTaskQueue.has(element))
        return;
      element.dispatchEvent(
        new ToggleEvent("toggle", {
          cancelable: false,
          oldState,
          newState
        })
      );
    }, 0)
  );
}
var ShadowRoot = globalThis.ShadowRoot || function() {
};
var HTMLDialogElement = globalThis.HTMLDialogElement || function() {
};
var topLayerElements = /* @__PURE__ */ new WeakMap();
var autoPopoverList = /* @__PURE__ */ new WeakMap();
var visibilityState = /* @__PURE__ */ new WeakMap();
function getPopoverVisibilityState(popover) {
  return visibilityState.get(popover) || "hidden";
}
var popoverInvoker = /* @__PURE__ */ new WeakMap();
function popoverTargetAttributeActivationBehavior(element) {
  const popover = element.popoverTargetElement;
  if (!popover) {
    return;
  }
  const visibility = getPopoverVisibilityState(popover);
  if (element.popoverTargetAction === "show" && visibility === "showing") {
    return;
  }
  if (element.popoverTargetAction === "hide" && visibility === "hidden")
    return;
  if (visibility === "showing") {
    hidePopover(popover, true, true);
  } else if (checkPopoverValidity(popover, false)) {
    popoverInvoker.set(popover, element);
    showPopover(popover);
  }
}
function checkPopoverValidity(element, expectedToBeShowing) {
  if (element.popover !== "auto" && element.popover !== "manual") {
    return false;
  }
  if (!element.isConnected)
    return false;
  if (expectedToBeShowing && getPopoverVisibilityState(element) !== "showing") {
    return false;
  }
  if (!expectedToBeShowing && getPopoverVisibilityState(element) !== "hidden") {
    return false;
  }
  if (element instanceof HTMLDialogElement && element.hasAttribute("open")) {
    return false;
  }
  if (document.fullscreenElement === element)
    return false;
  return true;
}
function getStackPosition(popover) {
  if (!popover)
    return 0;
  return Array.from(autoPopoverList.get(popover.ownerDocument) || []).indexOf(
    popover
  ) + 1;
}
function topMostClickedPopover(target) {
  const clickedPopover = nearestInclusiveOpenPopover(target);
  const invokerPopover = nearestInclusiveTargetPopoverForInvoker(target);
  if (getStackPosition(clickedPopover) > getStackPosition(invokerPopover)) {
    return clickedPopover;
  }
  return invokerPopover;
}
function topMostAutoPopover(document2) {
  const documentPopovers = autoPopoverList.get(document2);
  for (const popover of documentPopovers || []) {
    if (!popover.isConnected) {
      documentPopovers.delete(popover);
    } else {
      return popover;
    }
  }
  return null;
}
function getRootNode(node) {
  if (typeof node.getRootNode === "function") {
    return node.getRootNode();
  }
  if (node.parentNode)
    return getRootNode(node.parentNode);
  return node;
}
function nearestInclusiveOpenPopover(node) {
  while (node) {
    if (node instanceof HTMLElement && node.popover === "auto" && visibilityState.get(node) === "showing") {
      return node;
    }
    node = node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot)
      node = node.host;
    if (node instanceof Document)
      return;
  }
}
function nearestInclusiveTargetPopoverForInvoker(node) {
  while (node) {
    const nodePopover = node.popoverTargetElement;
    if (nodePopover)
      return nodePopover;
    node = node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot)
      node = node.host;
    if (node instanceof Document)
      return;
  }
}
function topMostPopoverAncestor(newPopover) {
  const popoverPositions = /* @__PURE__ */ new Map();
  let i = 0;
  const document2 = newPopover.ownerDocument;
  for (const popover of autoPopoverList.get(document2) || []) {
    popoverPositions.set(popover, i);
    i += 1;
  }
  popoverPositions.set(newPopover, i);
  i += 1;
  let topMostPopoverAncestor2 = null;
  function checkAncestor(candidate) {
    const candidateAncestor = nearestInclusiveOpenPopover(candidate);
    if (candidateAncestor === null)
      return null;
    const candidatePosition = popoverPositions.get(candidateAncestor);
    if (topMostPopoverAncestor2 === null || popoverPositions.get(topMostPopoverAncestor2) < candidatePosition) {
      topMostPopoverAncestor2 = candidateAncestor;
    }
  }
  checkAncestor(newPopover?.parentElement);
  return topMostPopoverAncestor2;
}
function isFocusable(focusTarget) {
  if (focusTarget.hidden)
    return false;
  if (focusTarget instanceof HTMLButtonElement || focusTarget instanceof HTMLInputElement || focusTarget instanceof HTMLSelectElement || focusTarget instanceof HTMLTextAreaElement || focusTarget instanceof HTMLOptGroupElement || focusTarget instanceof HTMLOptionElement || focusTarget instanceof HTMLFieldSetElement) {
    if (focusTarget.disabled)
      return false;
  }
  if (focusTarget instanceof HTMLInputElement && focusTarget.type === "hidden") {
    return false;
  }
  if (focusTarget instanceof HTMLAnchorElement && focusTarget.href === "") {
    return false;
  }
  return focusTarget.tabIndex !== -1;
}
function focusDelegate(focusTarget) {
  if (focusTarget.shadowRoot && focusTarget.shadowRoot.delegatesFocus !== true) {
    return null;
  }
  let whereToLook = focusTarget;
  if (whereToLook.shadowRoot) {
    whereToLook = whereToLook.shadowRoot;
  }
  const autoFocusDelegate = whereToLook.querySelector("[autofocus]");
  if (autoFocusDelegate) {
    return autoFocusDelegate;
  }
  const walker = focusTarget.ownerDocument.createTreeWalker(
    whereToLook,
    NodeFilter.SHOW_ELEMENT
  );
  let descendant = walker.currentNode;
  while (descendant) {
    if (isFocusable(descendant)) {
      return descendant;
    }
    descendant = walker.nextNode();
  }
}
function popoverFocusingSteps(subject) {
  focusDelegate(subject)?.focus();
}
var previouslyFocusedElements = /* @__PURE__ */ new WeakMap();
function showPopover(element) {
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  const document2 = element.ownerDocument;
  if (!element.dispatchEvent(
    new ToggleEvent("beforetoggle", {
      cancelable: true,
      oldState: "closed",
      newState: "open"
    })
  )) {
    return;
  }
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  let shouldRestoreFocus = false;
  if (element.popover === "auto") {
    const originalType = element.getAttribute("popover");
    const ancestor = topMostPopoverAncestor(element) || document2;
    hideAllPopoversUntil(ancestor, false, true);
    if (originalType !== element.getAttribute("popover") || !checkPopoverValidity(element, false)) {
      return;
    }
  }
  if (!topMostAutoPopover(document2)) {
    shouldRestoreFocus = true;
  }
  previouslyFocusedElements.delete(element);
  const originallyFocusedElement = document2.activeElement;
  element.classList.add("popover-open");
  visibilityState.set(element, "showing");
  if (!topLayerElements.has(document2)) {
    topLayerElements.set(document2, /* @__PURE__ */ new Set());
  }
  topLayerElements.get(document2).add(element);
  popoverFocusingSteps(element);
  if (element.popover === "auto") {
    if (!autoPopoverList.has(document2)) {
      autoPopoverList.set(document2, /* @__PURE__ */ new Set());
    }
    autoPopoverList.get(document2).add(element);
    setInvokerAriaExpanded(popoverInvoker.get(element), true);
  }
  if (shouldRestoreFocus && originallyFocusedElement && element.popover === "auto") {
    previouslyFocusedElements.set(element, originallyFocusedElement);
  }
  queuePopoverToggleEventTask(element, "closed", "open");
}
function hidePopover(element, focusPreviousElement = false, fireEvents = false) {
  if (!checkPopoverValidity(element, true)) {
    return;
  }
  const document2 = element.ownerDocument;
  if (element.popover === "auto") {
    hideAllPopoversUntil(element, focusPreviousElement, fireEvents);
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  setInvokerAriaExpanded(popoverInvoker.get(element), false);
  popoverInvoker.delete(element);
  if (fireEvents) {
    element.dispatchEvent(
      new ToggleEvent("beforetoggle", {
        oldState: "open",
        newState: "closed"
      })
    );
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  topLayerElements.get(document2)?.delete(element);
  autoPopoverList.get(document2)?.delete(element);
  element.classList.remove("popover-open");
  visibilityState.set(element, "hidden");
  if (fireEvents) {
    queuePopoverToggleEventTask(element, "open", "closed");
  }
  const previouslyFocusedElement = previouslyFocusedElements.get(element);
  if (previouslyFocusedElement) {
    previouslyFocusedElements.delete(element);
    if (focusPreviousElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function closeAllOpenPopovers(document2, focusPreviousElement = false, fireEvents = false) {
  let popover = topMostAutoPopover(document2);
  while (popover) {
    hidePopover(popover, focusPreviousElement, fireEvents);
    popover = topMostAutoPopover(document2);
  }
}
function hideAllPopoversUntil(endpoint, focusPreviousElement, fireEvents) {
  const document2 = endpoint.ownerDocument || endpoint;
  if (endpoint instanceof Document) {
    return closeAllOpenPopovers(document2, focusPreviousElement, fireEvents);
  }
  let lastToHide = null;
  let foundEndpoint = false;
  for (const popover of autoPopoverList.get(document2) || []) {
    if (popover === endpoint) {
      foundEndpoint = true;
    } else if (foundEndpoint) {
      lastToHide = popover;
      break;
    }
  }
  if (!foundEndpoint) {
    return closeAllOpenPopovers(document2, focusPreviousElement, fireEvents);
  }
  while (lastToHide && getPopoverVisibilityState(lastToHide) === "showing" && autoPopoverList.get(document2)?.size) {
    hidePopover(lastToHide, focusPreviousElement, fireEvents);
  }
}
var popoverPointerDownTargets = /* @__PURE__ */ new WeakMap();
function lightDismissOpenPopovers(event) {
  if (!event.isTrusted)
    return;
  const target = event.composedPath()[0];
  if (!target)
    return;
  const document2 = target.ownerDocument;
  const topMostPopover = topMostAutoPopover(document2);
  if (!topMostPopover)
    return;
  const ancestor = topMostClickedPopover(target);
  if (ancestor && event.type === "pointerdown") {
    popoverPointerDownTargets.set(document2, ancestor);
  } else if (event.type === "pointerup") {
    const sameTarget = popoverPointerDownTargets.get(document2) === ancestor;
    popoverPointerDownTargets.delete(document2);
    if (sameTarget) {
      hideAllPopoversUntil(ancestor || document2, false, true);
    }
  }
}
var initialAriaExpandedValue = /* @__PURE__ */ new WeakMap();
function setInvokerAriaExpanded(el, force = false) {
  if (!el)
    return;
  if (!initialAriaExpandedValue.has(el)) {
    initialAriaExpandedValue.set(el, el.getAttribute("aria-expanded"));
  }
  const popover = el.popoverTargetElement;
  if (popover && popover.popover === "auto") {
    el.setAttribute("aria-expanded", String(force));
  } else {
    const initialValue = initialAriaExpandedValue.get(el);
    if (!initialValue) {
      el.removeAttribute("aria-expanded");
    } else {
      el.setAttribute("aria-expanded", initialValue);
    }
  }
}
var ShadowRoot2 = globalThis.ShadowRoot || function() {
};
function isSupported() {
  return typeof HTMLElement !== "undefined" && typeof HTMLElement.prototype === "object" && "popover" in HTMLElement.prototype;
}
function patchSelectorFn(object, name, mapper) {
  const original = object[name];
  Object.defineProperty(object, name, {
    value(selector) {
      return original.call(this, mapper(selector));
    }
  });
}
var nonEscapedPopoverSelector = /(^|[^\\])popover-open\b/g;
function apply() {
  window.ToggleEvent = window.ToggleEvent || ToggleEvent;
  function rewriteSelector(selector) {
    if (selector?.includes("popover-open")) {
      selector = selector.replace(
        nonEscapedPopoverSelector,
        "$1.\\popover-open"
      );
    }
    return selector;
  }
  patchSelectorFn(Document.prototype, "querySelector", rewriteSelector);
  patchSelectorFn(Document.prototype, "querySelectorAll", rewriteSelector);
  patchSelectorFn(Element.prototype, "querySelector", rewriteSelector);
  patchSelectorFn(Element.prototype, "querySelectorAll", rewriteSelector);
  patchSelectorFn(Element.prototype, "matches", rewriteSelector);
  patchSelectorFn(Element.prototype, "closest", rewriteSelector);
  patchSelectorFn(
    DocumentFragment.prototype,
    "querySelectorAll",
    rewriteSelector
  );
  patchSelectorFn(
    DocumentFragment.prototype,
    "querySelectorAll",
    rewriteSelector
  );
  Object.defineProperties(HTMLElement.prototype, {
    popover: {
      enumerable: true,
      configurable: true,
      get() {
        if (!this.hasAttribute("popover"))
          return null;
        const value = (this.getAttribute("popover") || "").toLowerCase();
        if (value === "" || value == "auto")
          return "auto";
        return "manual";
      },
      set(value) {
        this.setAttribute("popover", value);
      }
    },
    showPopover: {
      enumerable: true,
      configurable: true,
      value() {
        showPopover(this);
      }
    },
    hidePopover: {
      enumerable: true,
      configurable: true,
      value() {
        hidePopover(this, true, true);
      }
    },
    togglePopover: {
      enumerable: true,
      configurable: true,
      value(force) {
        if (visibilityState.get(this) === "showing" && force === void 0 || force === false) {
          hidePopover(this, true, true);
        } else if (force === void 0 || force === true) {
          showPopover(this);
        }
      }
    }
  });
  const popoverTargetAssociatedElements = /* @__PURE__ */ new WeakMap();
  function applyPopoverInvokerElementMixin(ElementClass) {
    Object.defineProperties(ElementClass.prototype, {
      popoverTargetElement: {
        enumerable: true,
        configurable: true,
        set(targetElement) {
          if (targetElement === null) {
            this.removeAttribute("popovertarget");
            popoverTargetAssociatedElements.delete(this);
          } else if (!(targetElement instanceof Element)) {
            throw new TypeError(
              `popoverTargetElement must be an element or null`
            );
          } else {
            this.setAttribute("popovertarget", "");
            popoverTargetAssociatedElements.set(this, targetElement);
          }
        },
        get() {
          if (this.localName !== "button" && this.localName !== "input") {
            return null;
          }
          if (this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button") {
            return null;
          }
          if (this.disabled) {
            return null;
          }
          if (this.form && this.type === "submit") {
            return null;
          }
          const targetElement = popoverTargetAssociatedElements.get(this);
          if (targetElement && targetElement.isConnected) {
            return targetElement;
          } else if (targetElement && !targetElement.isConnected) {
            popoverTargetAssociatedElements.delete(this);
            return null;
          }
          const root = getRootNode(this);
          const idref = this.getAttribute("popovertarget");
          if ((root instanceof Document || root instanceof ShadowRoot2) && idref) {
            return root.getElementById(idref) || null;
          }
          return null;
        }
      },
      popoverTargetAction: {
        enumerable: true,
        configurable: true,
        get() {
          const value = (this.getAttribute("popovertargetaction") || "").toLowerCase();
          if (value === "show" || value === "hide")
            return value;
          return "toggle";
        },
        set(value) {
          this.setAttribute("popovertargetaction", value);
        }
      }
    });
  }
  applyPopoverInvokerElementMixin(HTMLButtonElement);
  applyPopoverInvokerElementMixin(HTMLInputElement);
  const handleInvokerActivation = (event) => {
    if (!event.isTrusted)
      return;
    const target = event.composedPath()[0];
    if (!(target instanceof Element) || target?.shadowRoot) {
      return;
    }
    const root = getRootNode(target);
    if (!(root instanceof ShadowRoot2 || root instanceof Document)) {
      return;
    }
    const invoker = target.closest("[popovertargetaction],[popovertarget]");
    if (invoker) {
      popoverTargetAttributeActivationBehavior(invoker);
      return;
    }
  };
  const onKeydown = (event) => {
    const key = event.key;
    const target = event.target;
    if (target && (key === "Escape" || key === "Esc")) {
      hideAllPopoversUntil(target.ownerDocument, true, true);
    }
  };
  const addEventListeners = (root) => {
    root.addEventListener("click", handleInvokerActivation);
    root.addEventListener("keydown", onKeydown);
    root.addEventListener("pointerdown", lightDismissOpenPopovers);
    root.addEventListener("pointerup", lightDismissOpenPopovers);
  };
  addEventListeners(document);
}
function popoverPolyfill() {
  if (!isSupported()) {
    console.log("polyfilling popover");
    apply();
  } else {
    console.log("not polyfilling popover");
  }
}

// src/components/toast.js
function showToast({ message, target = "body", duration = 5e3 }) {
  const newToast = document.createElement("div");
  newToast.className = "ds-toast-item";
  newToast.innerText = message;
  document.querySelector(target).append(newToast);
  setTimeout(function() {
    newToast.remove();
  }, duration);
}

// src/components/apicheck.js
function apiCheck(endpoint, message) {
  return fetch(endpoint).then(function(response) {
    if (!response.ok) {
      if (message) {
        alert(message);
      }
      throw new Error();
    } else {
      return true;
    }
  }).catch(function(error) {
    throw new Error(error);
  });
}
export {
  Spinner,
  Tabs,
  ToggleBtn,
  TogglePanel,
  apiCheck,
  popoverPolyfill,
  showToast
};
