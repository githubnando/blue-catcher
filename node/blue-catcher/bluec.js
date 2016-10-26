#!/usr/bin/node

const request = require('request');
const exec = require('child_process').exec;
const sys = require('sys');

const argv = require('yargs')
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

const owner =  argv.owner;
const options = {
    url: `https://bitbucket.org/!api/1.0/users/${owner}`,
    auth: {
      user: argv.username,
      pass: argv.password
    }
};


request(options, function (error, response, body) {
  if (error !== null) {
    throw error
  }

  JSON.parse(body).repositories.map(function(repo) {
    // clone the repository
  })
});
