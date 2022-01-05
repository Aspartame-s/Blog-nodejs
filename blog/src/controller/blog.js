const getList = (author, keyword) => {
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
}

module.exports = {
    getList
}