const express = require('express')
const path = require('path')
const app = express()
const port = 3001
test = path.join(__dirname, 'build', 'index.html')

app.use(express.static('build'))
app.use(express.static('public'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`serving from: ${test}`)
    console.log(`Listening on port ${port}`)
})