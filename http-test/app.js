const http = require('http')

const querystring = require('querystring')  


const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1]) //querystring.parse 处理url后面的参数转化为对象格式
    res.setHeader('Content-type', 'application/json')
    const resData = {
        method,
        url,
        path,
        query
    }
    if(method === 'GET') {
        res.end(JSON.stringify(resData))
    }
    if(method === 'POST') {
        let postData = ''
        req.on('data', chunk => { //post传递参数是持续性的，数据来就会持续触发这个函数
            postData += chunk.toString()
        })
        req.on('end', () => { //这是数据传递结束
            console.log(postData)
            resData.postData = postData
            res.end(resData.postData)
        })
        
    }
})
server.listen(3000)
console.log('OKs')