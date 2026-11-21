'use strict'

const difference = (array1, array2) => {
    const result = [];
    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item)
        }
    }
    return result
}
const a1 = [7, -2, 10, 5, 0]
const a2 = [0, 10]
console.log(difference(a1, a2))
const b1 = ['Novyi Buh', 'Kiev']
const b2 = ['Kiev', 'Mykolaiv', 'Odesa']
console.log(difference(b1, b2))