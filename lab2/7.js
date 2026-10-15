'use strict'
const phoneBook = [
  { name: 'Tolik', phone: '+380681161089' },
  { name: 'Bohdan', phone: '+380668886720' },
  { name: 'Vlad', phone: '+380984789432' },
]
function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone
    }
  }
}
console.log(findPhoneByName('Tolik'))