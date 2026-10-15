'use strict'

function createUser(name, city) {
  const user = { name: name, city: city }
  return user
}

console.log(createUser('Tolik', 'Noviy Buh'))