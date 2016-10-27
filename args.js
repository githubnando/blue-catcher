module.exports = require('yargs')
    .option('owner', {
        alias: 'o',
        demand: true,
        describe: 'Owner of',
        type: 'string'
    })
    .option('username', {
        alias: 'u',
        demand: true,
        describe: 'username for authentication',
        type: 'string'
    })
    .option('password', {
        alias: 'p',
        demand: true,
        describe: 'password for authentication',
        type: 'string'
    })
    .help('help')
    .argv;
