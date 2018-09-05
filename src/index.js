import _ from 'lodash';

function component () {
  let element = document.createElement('pre')

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ')

  return element
}

document.body.appendChild(component())
