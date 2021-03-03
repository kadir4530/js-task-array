const { users } = require('./data')

const usersInIstanbul = users.find(u => u.city === "Istanbul");

console.log(usersInIstanbul)
