'use strict'

const sum = (...args) => {
    let total = 0
    let i = 0
    if (args.length === 0) return 0
    do {
        total += args[i]
        i++
    } while (i < args.length)
    return total
}
console.log(sum(4, 5, 6))
console.log(sum(7))
console.log(sum())
console.log(sum(2, -2, 2))