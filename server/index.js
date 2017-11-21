const path = require('path')
const express = require('express')

if (process.env.NODE_ENV !== 'production') {
  throw 'Hey! I should only be used for production!'
}

const port = (process.env.PORT || 8080)
const app = express()

const indexPath = path.join(__dirname, '../dist/index.html')
const publicPath = express.static(path.join(__dirname, '../dist'))

app.use(publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(port)
console.log(`Listening at http://localhost:${port}`)