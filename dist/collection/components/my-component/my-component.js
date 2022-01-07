import { Component, Host, h } from '@stencil/core';
export class MyComponent {
  render() {
    return (h(Host, null,
      h("p", null, "Howdy")));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
}
