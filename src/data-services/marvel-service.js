const {marvelData} = require('../hero-data');

const getMarvelData = async () => {
    return marvelData.getMarvelHeroes();
}

module.exports = {getMarvelData};