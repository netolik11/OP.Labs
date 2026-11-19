'use strict'

function seq(...args) {
    const fns = [...args]
    function next(arg) {
        if (typeof arg === 'number') {
            let result = arg
            for (const fn of fns) {
                result = fn(result)
            }
            return result
        }
        fns.push(arg)
        return next
    }
    return next
}
console.log(seq(x => x + 7)(x => x * 2)(5))
console.log(seq(x => x * 2)(x => x + 7)(5))
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7))