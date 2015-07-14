// import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import React from 'react';
import './core/Dispatcher';
import './stores/AppStore';
import App from './components/App';

const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

export default function buildIndex(outputPath) {
  try {
    let css = [];
    let data = {
      title: 'pxtobrx',
      description: 'Convert video game sprites into Lego mosaics',
      longDescription: 'Take your favorite game characters and get instructions and a piece list for building them out of Lego. Or be amazed at how expensive (and large!) entire screenshots are when made out of Lego!',
      imageUrl: 'http://www.pxtobrx.com/img/metaImage.png',
      imageWidth: 1200,
      imageHeight: 630,
      twitterName: '@cityfortyone'
    };

    // only building App to gather all the css
    let app = (<App  // eslint-disable-line no-unused-vars
      context={{
        onInsertCss: value => css.push(value),
        onSetMeta: (key, value) => data[key] = value
      }}
    />);

    data.body = React.renderToString(app);
    data.css = css.join('');

    let html = template(data);

    fs.writeFileSync(outputPath, html);
  } catch(e) {
    console.error('Failed to build: ' + e);
  }
}
