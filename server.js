const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(function noCachePlease(req, res, next) {
  if (req.url === '/') {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    console.log('set headers');
  }

  next();
});

app.use(express.static('./dist'));

app.get('*', (req, res) => {
  console.log('main get');

  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
})