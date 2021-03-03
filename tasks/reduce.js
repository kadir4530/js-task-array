const { users } = require("./data.js");

const usersInfo = data => {
    return data.reduce((toplam, item) => {
        toplam[item.id] = {
            firstNAme: item.firstNAme,
            lastName: item.lastName,
            email: item.email
        };
        return toplam;
    }, {});
};

console.log(getMapFromArray(usersInfo));