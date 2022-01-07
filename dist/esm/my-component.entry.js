import { r as registerInstance, h, H as Host } from './index-298a389f.js';

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("p", null, "Howdy")));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
