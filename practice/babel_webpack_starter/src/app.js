import { person, sayHello } from './lib'

console.log(person.name)

console.log(sayHello('seung'))

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const data = await response.json()
  return data
}

getPosts().then(post => console.log(post))
// regeneratorRuntime is not defined
// -> babel-polyfill to get async / await working
