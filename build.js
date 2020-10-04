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
  name: chalk.white.bold('                     Dhilip Kumar'),
  work: chalk.hex('#be8d30')('Software Engineer') + chalk.white(' @ ') + chalk.hex('#f35325')('Mi') + chalk.hex('#81bc09')('cro') + chalk.hex('#07a6f0')('so') + chalk.hex('#ffba12')('ft'),
  github: chalk.green('https://www.github.com/dhilipkmr'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/dhilipkmr'),
  blog: chalk.hex('#adadad')(' https://www.dev.to/dhilipkmr'),
  npm: chalk.red(' https://www.npmjs.com/~dhilipkmr'),
  web: chalk.hex('#cbdc00')(' https://www.dhilipkmr.dev'),
  labelWork:      chalk.white.bold('       Work:'),
  labelGitHub:    chalk.white.bold('     GitHub:'),
  labelLinkedIn:  chalk.white.bold('   LinkedIn:'),
  labelDev:       chalk.white.bold('      Blogs:'),
  labelNpm:       chalk.white.bold('        Npm:'),
  labelWeb:       chalk.white.bold('    Website:')
}

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const devBlogging = `${data.labelDev} ${data.blog}`;
const npming = `${data.labelNpm} ${data.npm}`;
const webing = `${data.labelWeb} ${data.web}`;

const output = heading +
               newline + newline +
               working + newline +
               webing + newline +
               linkedining + newline +
               githubing + newline +
               devBlogging + newline +
               npming + newline;
               

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
