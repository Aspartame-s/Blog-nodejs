const {exec} = require('../db/mysql')

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