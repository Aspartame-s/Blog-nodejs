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

module.exports = {
    getList
}