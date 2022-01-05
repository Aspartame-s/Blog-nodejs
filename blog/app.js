const blogRouter = require('./src/router/blog')
const userRouter = require('./src/router/user')
const querystring = require('querystring')
const getPostData = (req) => {
   const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST') {
        resolve({})
        return
    }
    if(req.headers['content-type'] !== 'application/json') {
        resolve({})
        return
    }
    
   })
   return promise
}
const serverHandle = (req, res) => {
    //设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    //获取path 
    const url = req.url
    req.path = url.split('?')[0]

    //获取query
    req.query = querystring.parse(url.split('?')[1])
    // const qs = querystring.parse(url.split('?')[1])
    // const qs = new URLSearchParams(url.split('?')[1]);
    // const qq = qs.toString()

    getPostData(req).then(postData => {
        req.body = postData

        const blogData = blogRouter(req, res)
        if(blogData) {
            res.end(JSON.stringify(blogData))
            // res.end(JSON.stringify(req.query.author))
            return
        }

        const userData = userRouter(req, res)
        if(userData) {
            res.end(JSON.stringify(userData))
            return
        }
        res.writeHead(404, {"Content-type": 'text/plain'})
        res.write("404 Not Found\n")
        res.end()
    })

    
}
console.log('OKs')
module.exports = serverHandle