'use strict'

const compose = (...fns) => {
    for (const key of fns) {
        if (typeof key !== 'function')
            throw new Error('Not a function!')
    }
    const errorHandlers = []
    const f = (x) => {
        try {
            let result = x
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result)
            }
            return result
        } catch (e) {
            for (const handler of errorHandlers) {
                handler(e)
            }
            return undefined
        }
    }
    f.on = (name, handler) => {
        if (name === 'error') {
            errorHandlers.push(handler)
        }
    }
    return f
}
const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3
const f = compose(inc, twice, cube);
console.log(f(5))
const bad = compose(inc, () => { throw new Error('Oops') }, cube)
bad.on('error', e => {
    console.log('Error:', e.message)
})
console.log(bad(5))