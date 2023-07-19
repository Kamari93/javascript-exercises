const getTheTitles = function (arr) {
    let bookList = arr.map((obj) => {
        return obj.title;
    });
    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
