const { users } = require('./data')

const usersInBursa = users.filter(u => u.city === "Bursa");

console.log(usersInBursa)