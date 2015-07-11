import 'babel/polyfill';
import React from 'react';
import FastClick from 'fastclick';
import App from './components/App';

function run() {
  // Render the top-level React component
  let props = {
    context: {
      onSetTitle: value => document.title = value
    }
  };
  let element = React.createElement(App, props);
  React.render(element, document.getElementById('app'), () => {
    let css = document.getElementById('css');
    css.parentNode.removeChild(css);
  });
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(run);
