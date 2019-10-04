import App from "../views/components/app";
import React from "react";
import { renderToString } from "react-dom/server";
import { compile } from "handlebars";
import config from "../config";

export async function render(req, res) {
  const theHtml = `
    <html>
    <head><title>${config.APP_NAME}</title>
    </head> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/app.css">
    
    <body>
    <div id="app">{{{reactele}}}</div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
    `;
  const hbsTemplate = compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
}
