const { getList, createNewBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const blogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const id = req.query.id
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
        const blogData = req.body
        const data = createNewBlog(blogData)
        return data
    }
    if(method == 'POST' && path == '/api/blog/update') {
        const updateData = updateBlog(req.body)
        return new SuccessModel(updateData)
    }
    if(method == 'POST' && path == '/api/blog/delete') {
        const result = delBlog(id)
        if(result) {
            return new SuccessModel()
        }
        return new ErrorModel()
    }
}
module.exports = blogRouter