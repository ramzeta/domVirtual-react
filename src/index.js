/** @jsx ramidom */

import "./styles.css";

function ramidom(type, props, ...args) {
  const children = [].concat(...args);
  return {
    type,
    props,
    children
  };
}

const title = <h1>Hola Mundo</h1>;

function render(node) {
  //creando el elemento en el DOM
  const element = document.createElement(node.type);
  element.appendChild(document.createTextNode(node.type));
  return element;
}

document.body.appendChild(render(title));
console.log(title);
