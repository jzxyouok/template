const express = require('express');
const path = require('path');

const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static(path.resolve('./')));
app.get('/', (req, res) => {
  res.sendfile(path.resolve('./dist/html/index.html'));
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});
