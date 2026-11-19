'use strict'

const pipe = (...fns) => {
    for (const key of fns) {
        if (typeof key !== 'function')
            throw new Error('Not a function!')
    }
    return (x) => fns.reduce((acc, fn) => fn(acc), x)
}
const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3
const f = pipe(inc, twice, cube)
const x = f(5)
console.log(x)
const f2 = pipe(inc, inc)
const x2 = f2(7)
console.log(x2)
try {
    const f3 = pipe(inc, 7, cube)
    console.log(f3(5))
} catch (e) {
    console.log(e.message)
}