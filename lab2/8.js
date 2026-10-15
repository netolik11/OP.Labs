'use strict'

const hash = {
  'Tolik': '+380681161089',
  'Bohdan': '+380668886720',
  'Vlad': '+380984789432',
}
function findPhoneByName(name) {
  return hash[name]
}
console.log(findPhoneByName('Bohdan'))