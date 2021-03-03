const {users} = require ("./data.js");
 
const year = '1995';

const existUser = users.some(item => item.yearOfBirth == year);

 if(existUser) console.log(`There is user born in ${year}`)
 else console.log(`No user born in ${year}`)