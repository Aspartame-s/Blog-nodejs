const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const userRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if(method == 'POST' && path == '/api/user/login') {
        const {username, password} = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if(data.username) {
                return new SuccessModel()
            }
            return new ErrorModel('登陆失败')
        })
        // if(result) {
        //     return new SuccessModel()
        // }
        // return new ErrorModel("用户名或密码错误")
    }
}
module.exports = userRouter
