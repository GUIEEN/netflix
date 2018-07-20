import { person, sayHello } from './lib'
import './styles/app.css' // For the webpack to know that the app.css is our dependency, we need to import the file in our dependency tree.

console.log(person.name)
console.log(sayHello('seung'))
// var html = require('./index.pug')
