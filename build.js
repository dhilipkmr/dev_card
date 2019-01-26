'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('                     DHILIP KUMAR'),
  work: chalk.hex('#be8d30')('Senior Software Engineer ') +  chalk.white('@ ') + chalk.hex('#f26722')('go') + chalk.hex('#2C67B3')('ibibo'),
  github: chalk.green('https://github.com/dhilipkmr'),
  linkedin: chalk.cyan('https://linkedin.com/in/dhilipkmr'),
  medium: chalk.hex('#adadad')(' https://medium.com/@dhilipkmr'),
  npm: chalk.red('https://www.npmjs.com/~dhilipkmr'),
  web: chalk.hex('#cbdc00')(' https://dhilipkmr.surge.sh'),
  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelMedium: chalk.white.bold('     Medium:'),
  labelNpm: chalk.white.bold('        Npm:'),
  labelWeb: chalk.white.bold('        Web:')
}

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const mediumBlogging = `${data.labelMedium} ${data.medium}`;
const npming = `${data.labelNpm} ${data.npm}`;
const webing = `${data.labelWeb} ${data.web}`;

const output = heading +
               newline + newline +
               working + newline +
               githubing + newline +
               linkedining + newline +
               mediumBlogging + newline +
               npming + newline +
               webing;

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
