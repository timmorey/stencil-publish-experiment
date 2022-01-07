'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ddf1e53f.js');

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("p", null, "Howdy")));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
