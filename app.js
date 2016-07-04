'use strict'
const express = require('express')

const app = express();

app.set('view engine', 'jade')
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/parallax', (req, res) => {
  res.render('parallax')
})

console.log('Listening on port 3000')
app.listen(3000)
