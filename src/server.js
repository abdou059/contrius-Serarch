const http = require('http');

const server = http.createServer();

const port = 9000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port  ${port}`);
});
