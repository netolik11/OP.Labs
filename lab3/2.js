'use strict'

function generateKey(length, characters) {
  let key = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length)
    key += characters[index]
  }
  return key
}
const symbols = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const code = generateKey(10, symbols)
console.log(code)