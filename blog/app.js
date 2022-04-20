const blogRouter = require('./src/router/blog')
const userRouter = require('./src/router/user')
const querystring = require('querystring')

//用于处理post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => { //post传递参数是持续性的，数据来就会持续触发这个函数
            postData += chunk.toString()
        })
        req.on('end', () => { //这是数据传递结束
            if(!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
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
    

    getPostData(req).then(postData => {
        req.body = postData
        const blogResult = blogRouter(req, res)
        if(blogResult) {
            blogResult.then(blogData => {
                // console.log(blogData, 'blogData')
                // console.log(blogResult, 'blogResult')
                    res.end(JSON.stringify(blogData))
                    // res.end(JSON.stringify(req.query.author))
            })
            return
        }
        const userResult = userRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                res.end(JSON.stringify(userData))
            })
            return
        }
        res.writeHead(404, { "Content-type": 'text/plain' })
        res.write("404 Not Found\n")
        res.end()
    })


}
module.exports = serverHandle