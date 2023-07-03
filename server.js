const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Set the cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue');
  res.send('Cookie set!');
});

// Fetch the cookie
app.get('/fetch-cookie', (req, res) => {
  const myCookie = req.cookies.myCookie;
  res.send(`Cookie value: ${myCookie}`);
});
app.get('/', (req, res) => {
    res.send(`up and running`);
  });
  

app.listen(process.env.PORT || 4000, () => {
  console.log('Server listening on port 4000');
});