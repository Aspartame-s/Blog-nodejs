const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const blogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if(method == 'GET' && path == '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData, '调用成功')
    }
    if(method == 'GET' && path == '/api/blog/detail') {
        return {
            msg: '这是获取博客详情的接口'
        }
    }
    if(method == 'POST' && path == '/api/blog/new') {
        return {
            msg: '这是新建博客接口'
        }
    }
    if(method == 'POST' && path == '/api/blog/update') {
        return {
            msg: '这是更新博客接口'
        }
    }
    if(method == 'POST' && path == '/api/blog/delete') {
        return {
            msg: '这是删除博客接口'
        }
    }
}
module.exports = blogRouter