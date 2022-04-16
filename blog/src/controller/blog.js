const {exec} = require('../db/mysql')

//获取博客列表
const getList = (author, keyword) => {
   let sql = `select * from blogs where 1=1 `
   if(author) {
       sql += `and author='${author}' `
   }
   if(keyword) {
       sql += `and title like '%${keyword}%' `
   }
   sql += `order by createtime desc;`

   //返回promise
   return exec(sql)
}

//获取博客详情
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}' order by createtime desc`
    return exec(sql)
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
    getDetail,
    createNewBlog,
    updateBlog,
    delBlog
}