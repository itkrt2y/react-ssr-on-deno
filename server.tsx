import { Application } from "oak";
import React from "react";
import ReactDomServer from "react-dom/server";
import { App } from "./components/App.tsx";

const html = ReactDomServer.renderToString(
  <html>
    <body>
      <App />

      {/*
        How can I load a script?
        <script src="xxx" type="module"></script>
      */}
    </body>
  </html>
);

const app = new Application();
app.use(ctx => {
  ctx.response.body = html;
});
console.log("Start http://localhost:8000");
await app.listen("127.0.0.1:8000");
