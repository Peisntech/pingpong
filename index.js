const express = require('express')
const app = express()
let counter = 0

app.get('/pingpong', (req, res) => {
  res.send(`pong ${counter}`)
  counter++
})

app.listen(3001, () => console.log('pingpong on 3001'))