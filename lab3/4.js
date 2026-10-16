'use strict'

const iface = {
    m1: x => [x],

    m2: function (x, y) {
    return [x, y]; },

    m3(x, y, z) {
    return [x, y, z] }
}
const value = (iface) => {
    const final = []
    const keys = Object.keys(iface)
    for (const a of keys) {
        if (typeof iface[a] === 'function') {
            final.push([a, iface[a].length])
        }
    }
    return final
}
console.log(value(iface))