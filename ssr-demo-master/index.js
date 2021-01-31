const express = require("express");
const app = express();
let path = require("path");
const fs = require('fs')
const serverBundle = require(path.resolve(__dirname, './vue/dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, './vue/dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname, './vue/dist/index.ssr.html'), 'utf-8');

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});

app.get('*', async (request, response) => {
  response.status(200);
  response.setHeader("Content-type", "text/html", "charset-utf-8");
  let html = await new Promise((resolve, reject) => {
    renderer.renderToString((err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
  response.end(html);
})

app.listen(3001, () => {
  console.log('服务已开启')
})