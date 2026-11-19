'use strict'

const sum = (...args) => {
    let total = 0
    for (const value of args) {
        total += value
    }
    return total
}
console.log(sum(4, 5, 6))
console.log(sum(7))
console.log(sum())
console.log(sum(2, -2, 2))