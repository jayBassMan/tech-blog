const { User } = require('../models');

const userData = [{
        username: 'john',
        password: 'password'

    },
    {
        username: 'joe',
        password: 'passward'
    },
    {
        username: 'doe',
        password: 'passwerd'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;