'use strict'

function sum(...args) {
    return args.reduce(function (acc, value) {
        return acc + value
    }, 0)
}
console.log(sum(4, 5, 6))
console.log(sum(7))
console.log(sum())
console.log(sum(2, -2, 2))