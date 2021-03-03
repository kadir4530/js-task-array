const { users } = require('./data')

const usersEmails = users.map(item => {
    return item.email
})

console.log(usersEmails)