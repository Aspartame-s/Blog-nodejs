const userRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if(method == 'POST' && path == '/api/user/login') {
        return {
            msg: '这是博客登陆接口'
        }
    }
}
module.exports = userRouter