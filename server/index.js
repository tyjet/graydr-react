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
app.get('/.well-known/acme-challenge/Pw949ZGbMG6jqmrxl7NY2OzbZdjikRekTL61BpIKWeM', function (_, res) { res.send('Pw949ZGbMG6jqmrxl7NY2OzbZdjikRekTL61BpIKWeM.oDxjYQTlNZeMmPaxPcCS0vfu0bq8ea2SWxBqahXFsbM') })

app.listen(port)
console.log(`Listening at http://localhost:${port}`)