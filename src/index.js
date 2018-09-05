import _ from 'lodash'
// import Print from './print'

function component () {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['hello', 'Webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  // btn.onclick = Print.bind(null, 'Hello Webpack')

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
