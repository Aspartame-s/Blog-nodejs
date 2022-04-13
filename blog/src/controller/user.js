const loginCheck = (username, password) => {
    if(username === 'jth' && password === '123456') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}