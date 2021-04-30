const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname});
})
app.use('/', (req, res) => {
  res.send(`
  <h1>404</>
  `)
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})