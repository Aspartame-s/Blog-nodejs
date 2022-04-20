const loginCheck = (username, password) => {
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

module.exports = {
    loginCheck
}