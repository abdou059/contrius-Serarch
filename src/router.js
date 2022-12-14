const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', '/public', 'index.html');
    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (endpoint === '/stayl.css') {
    const filePath = path.join(__dirname, '..', '/public', 'stayl.css');

    // eslint-disable-next-line consistent-return
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('Server Error');
        res.end();
        return '';
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.write('server Error');
    res.end();
  }
};
module.exports = router;
