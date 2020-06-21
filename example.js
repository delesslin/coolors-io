const { parse } = require('./lib/index')

const exampleCoolor = 'https://coolors.co/243cf2-9e8f19-a81470-4553bf-4a5396'

parse(exampleCoolor)
  // returns [ '#898952', '#b2945b', '#d0e562', '#b6d369', '#93c48b' ]
  .then(console.log)

const { gen } = require('./lib/index')

const exampleArray = ['feffef', '#ffeffe']

gen(exampleArray)
  // returns https://coolors.co/feffef-ffeffe
  .then(console.log)
