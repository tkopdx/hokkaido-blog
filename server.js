const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

const posts = require('./src/assets/posts/posts.json');

app.disable('etag');
app.use(express.static('./dist'));

app.get('/posts', (req, res) => {
  console.log('posts get');

  console.log(posts);
    
  res.send(posts);
});

// app.get('post/:id', (req, res) => { 
//   res.send(posts);
// });

app.get('*', (req, res) => {
  console.log('main get');

  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
})