const { users } = require('./data')

const city = 'Mugla';
const findUser = users.findIndex(item => item.city === city)

if (findUser === -1) console.log(`No user in ${city}`)
else console.log(`There is user in ${city}`)