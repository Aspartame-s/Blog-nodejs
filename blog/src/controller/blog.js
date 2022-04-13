const getList = (author, keyword) => {
    if(author && keyword) {
        return [
            {
                id: 1,
                content: '内容A',
                author: 'zhangsan',
            },
            {
                id: 2,
                content: '内容B',
                author: 'lisi',
            }
        ]
    }else {
        return '参数错误'
    }
}
//新建博客
const createNewBlog = (blogData) => {
   return {
       id: 1
   }
}
//更新博客
const updateBlog = (updateData) => {
    return {
        updateId: 2
    }
}
//删除博客
const delBlog = (id) => {
    console.log(id)
    return true
}

module.exports = {
    getList,
    createNewBlog,
    updateBlog,
    delBlog
}