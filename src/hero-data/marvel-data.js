const xMenMembers = [
    {
        name: 'Cyclops'
    },
    {
        name: 'Wolverine'
    },
    {
        name: 'Professor X'
    }
];

const avengersMembers = [
    {
        name: 'Captain America'
    },
    {
        name: 'Iron Man'
    },
    {
        name: 'Ant-Man'
    },
    {
        name: 'Thor'
    }
]

function getMarvelHeroes() {
    return {xmen: xMenMembers, avengers: avengersMembers};
}

module.exports = {
    getMarvelHeroes
};