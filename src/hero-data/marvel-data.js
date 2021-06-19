const xMenMembers = [
    {
        name: 'Cyclops',
        power: 'Optical blast'
    },
    {
        name: 'Wolverine',
        power: 'Healing'
    },
    {
        name: 'Professor X',
        power: 'Telepathy'
    }
];

const avengersMembers = [
    {
        name: 'Captain America',
        power: 'Strength'
    },
    {
        name: 'Iron Man',
        power: 'Rich'
    },
    {
        name: 'Ant-Man',
        power: 'Shink'
    },
    {
        name: 'Thor',
        power: 'Thunder'
    }
]

function getMarvelHeroes() {
    return {xmen: xMenMembers, avengers: avengersMembers};
}

module.exports = {
    getMarvelHeroes
};