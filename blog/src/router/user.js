const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const userRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if(method == 'GET' && path == '/api/user/login') {
        // const {username, password} = req.body
        const {username, password} = req.query
        const result = login(username, password)
        return result.then(data => {
            if(data.username) {
                res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly;`)
                return new SuccessModel()
            }
            return new ErrorModel('登陆失败')
        })
        // if(result) {
        //     return new SuccessModel()
        // }
        // return new ErrorModel("用户名或密码错误")
    }

    if(method == "GET" && path == '/api/user/login-test') {
        console.log(req.cookie)
        if(req.cookie.username) {
            return Promise.resolve(new SuccessModel('登录成功'))
        }
        return Promise.resolve(new ErrorModel('请登录'))
    }
}
module.exports = userRouter
