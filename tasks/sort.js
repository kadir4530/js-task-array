const { users } = require("./data.js");

const data = users.map(item => item.yearOfBirth);

const sortedData = data.sort((a, b) => (b - a));

console.table(sortedData);