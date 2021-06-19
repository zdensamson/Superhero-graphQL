const justiceLeagueMembers = [
    {
        name: 'Batman'
    },
    {
        name: 'Superman'
    },
    {
        name: 'Flash'
    },
    {
        name: 'Cyborg'
    },
    {
        name: 'Wonder Woman'
    },
    {
        name: 'Green Lantern'
    }
];


function getDcHeroes() {
    return {justiceLeague: justiceLeagueMembers};
}

module.exports = {
    getDcHeroes
};