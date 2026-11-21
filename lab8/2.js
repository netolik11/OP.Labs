'use strict'

const store = (value) => {
    const f = () => {
        return value
    };
    return f
}
const read = store(42)
const value = read()
console.log(value)