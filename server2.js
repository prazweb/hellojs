require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Fetching user with ID: ${id}`);
  res.json({ userId: id });
});

app.get('/search', (req, res) => {
  const search = req.query;
  console.log(search);
  res.json({ search: search });
});

app.post('/echo', (req, res) => {
    res.json({ echoed: req.body });
});

app.get('/home', (req, res) => {
    res.send('hello there');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
