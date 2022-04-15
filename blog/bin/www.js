const http = require('http')
const PORT = 8000
const serverHandle = require('../app')
console.log('ok')
const server = http.createServer(serverHandle)
server.listen(PORT)
