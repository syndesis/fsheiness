#!/usr/bin/env node
const {white, cyan, green,bold, blue} = require("colorette")

// Text + chalk definitions
var work = white(`${blue('Charter Communications')}, Software + Network Automation`)
var twitter = cyan('https://twitter.com/franksheiness')
var github = cyan('https://github.com/syndesis')
var npx = white('npx fsheiness')

var newline = '\n'
var heading = `${white('  Frank Sheiness /')} ${cyan('fsheiness')}`
var working = `${white(bold('     Work:'))}  ${work}`
var twittering = `${white(bold('  Twitter:'))}  ${twitter}`
var githubing = `${white(bold('   GitHub:'))}  ${github}`
var carding = `${white(bold('     Card:'))}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + newline + carding


console.log(output)
