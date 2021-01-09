const http = require("http");
const url = require("url");

const template = (body) => {
  return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>JS TREE</title>
            </head>
            <body>
                ${body}
            </body>
        </html>        
    `;
};

const app = http.createServer((req, res) => {
  var html = template(`<h1> HELLO </h1>`);
  res.writeHead(200);
  res.end(html);
});

app.listen(3000);
