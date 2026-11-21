'use strict'

const contract = (fn, ...types) => {
    const f = (...args) => {
        for (let i = 0; i < args.length; i++) {
            if (args[i].constructor !== types[i]) {
                throw new TypeError('Wrong argument type')
            }
        }
        const result = fn(...args)
        const lastType = types[types.length - 1]
        if (result.constructor !== lastType) {
            throw new TypeError('Wrong result type')
        }
        return result
    }
    return f
}
const add = (a, b) => a + b
const addNumbers = contract(add, Number, Number, Number)
const res1 = addNumbers(8, 15)
console.dir(res1)
const concat = (s1, s2) => s1 + s2
const concatStrings = contract(concat, String, String, String)
const res2 = concatStrings('Hello ', 'world!')
console.dir(res2)