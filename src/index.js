/** @jsx ramidom */

import "./styles.css";
// desestructuramos los argumentos para tratarlos como array
function ramidom(type, props, ...args) {
  const children = [].concat(...args);
  return {
    type,
    props,
    children
  };
}

const title = (
  <h1 class="title" style="text-decoration: underline">
    Hola Mundo
  </h1>
);

function render(node) {
  //creando el elemento en el DOM
  const element = document.createElement(node.type);
  if (node.props) {
    // applyClass(element, node);
    Object.keys(node.props).map((key) => {
      element.setAttribute(key, node.props[key]);
    });
  }
  element.appendChild(document.createTextNode(node.children));
  return element;
}

// function applyClass(element, node) {
//   if (node.props.className) {
//     element.setAttribute("class", node.props.className);
//   }
// }
document.body.appendChild(render(title));
console.log(title);
