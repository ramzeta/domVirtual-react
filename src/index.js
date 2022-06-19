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

const title = <h1 className="title">Hola Mundo</h1>;

function render(node) {
  //creando el elemento en el DOM
  const element = document.createElement(node.type);

  if (node.props) {
    if (node.props.className) {
      element.setAttribute("class", node.props.className);
    }
  }

  element.appendChild(document.createTextNode(node.children));
  return element;
}

document.body.appendChild(render(title));
console.log(title);
