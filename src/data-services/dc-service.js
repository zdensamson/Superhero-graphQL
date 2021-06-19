const {dcData} = require('../hero-data');

const getDcData = async () => {
    return dcData.getDcHeroes();
}

module.exports = {getDcData};