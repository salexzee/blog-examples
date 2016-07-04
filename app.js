'use strict'
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'jade')
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/parallax', (req, res) => {
  res.render('parallax')
})

console.log('Listening on port 3000')
app.listen(PORT)
