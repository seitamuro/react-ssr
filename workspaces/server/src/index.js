import { App } from "@react-ssr/client/src/app";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  const app = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
        <html lang="en">
        <head>
            <script src="client.js" defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
});

app.use(express.static("../client/dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
