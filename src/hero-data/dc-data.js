const justiceLeagueMembers = [
    {
        name: 'Batman',
        powers: ['rich', 'handsome']
    },
    {
        name: 'Superman',
        powers: ['flight', 'laser vision', 'x-ray vision', 'super strength', 'bullet-proof']
    },
    {
        name: 'Flash',
        powers: ['speed', 'time-travel']
    },
    {
        name: 'Cyborg',
        power: ['cyborg', 'mobile hotspot', 'master coder']
    },
    {
        name: 'Wonder Woman',
        power: ['super strength', 'whip', 'flight']
    },
    {
        name: 'Green Lantern',
        power: ['energy projection', 'flight', 'generational insight']
    }
];


function getDcHeroes() {
    return {justiceLeague: justiceLeagueMembers};
}

module.exports = {
    getDcHeroes
};