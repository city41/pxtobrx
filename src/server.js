/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import './core/Dispatcher';
import './stores/AppStore';
import App from './components/App';

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

let htmlCache = {};

server.get('*', async (req, res, next) => {
  let userAgent = req.headers['user-agent'];

  if (htmlCache[userAgent]) {
    res.send(htmlCache[userAgent]);
    return;
  }

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

    let app = (<App
      context={{
        onInsertCss: value => css.push(value),
        onSetMeta: (key, value) => data[key] = value
      }}
      userAgent={userAgent}
    />);

    data.body = React.renderToString(app);
    data.css = css.join('');

    htmlCache[userAgent] = template(data);

    res.send(htmlCache[userAgent]);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
