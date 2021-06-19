const justiceLeagueMembers = [
    {
        name: 'Batman',
        power: 'Rich'
    },
    {
        name: 'Superman',
        power: 'Flight'
    },
    {
        name: 'Flash',
        name: 'Speed'
    },
    {
        name: 'Cyborg',
        power: 'cyborg'
    },
    {
        name: 'Wonder Woman',
        power: 'Strong'
    },
    {
        name: 'Green Lantern',
        power: 'Energy projection'
    }
];


function getDcHeroes() {
    return {justiceLeague: justiceLeagueMembers};
}

module.exports = {
    getDcHeroes
};