'use strict'

const sum = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
};
console.log(sum(4, 5, 6))
console.log(sum(7))
console.log(sum())
console.log(sum(2, -2, 2))