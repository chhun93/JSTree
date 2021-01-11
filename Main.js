const http = require("http");
const url = require("url");
const qs = require("querystring");

const template = (body) => {
  return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>JS TREE</title>
            </head>
            <body>
                <h1 id="homeName"> JS TREE </h1>
                ${body}

                <style>${GetStyle()}</style>
            </body>
        </html>
         `;
};
const GetStyle = () => {
  return `
    #homeName { text-align: center; }
    #createTextBox { width : 25rem; height: 2rem; }
`;
};
const CreateTextBox = () => {
  return `
  <p><input id="createTextBox" type="text" placeholder="CONTENT"> </p>
`;
};
const CreateButton = () => {
  return `

`;
};
const UpdateButton = () => {
  return `

`;
};
const DeleteButton = () => {
  return `

`;
};
const app = http.createServer((req, res) => {
  const reqUrl = req.url;
  const queryData = url.parse(reqUrl, true).query;
  const pathName = url.parse(reqUrl, true).pathname;

  if (pathName === "/") {
    var html = template(CreateTextBox());

    res.writeHead(200);
    res.end(html);
  }
});

app.listen(3000);
