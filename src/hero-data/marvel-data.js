const xMenMembers = [
    {
        name: 'Cyclops',
        powers: ['optical blast', 'leadership skills']
    },
    {
        name: 'Wolverine',
        powers: ['healing', 'adamantium claws', 'idyllic hairline']
    },
    {
        name: 'Professor X',
        powers: ['telepathy', 'cerebro', 'mutant soul version control']
    }
];

const avengersMembers = [
    {
        name: 'Captain America',
        powers: ['strength', 'privilege', 'co-opted shield']
    },
    {
        name: 'Iron Man',
        powers: ['rich', 'super-suits']
    },
    {
        name: 'Ant-Man',
        powers: ['shrink', 'grow', 'time-travel']
    },
    {
        name: 'Thor',
        powers: ['thunder', 'love', 'hammer']
    }
]

function getMarvelHeroes() {
    return {xmen: xMenMembers, avengers: avengersMembers};
}

module.exports = {
    getMarvelHeroes
};