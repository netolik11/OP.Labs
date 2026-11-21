'use strict'

const iterate = (object, callback) => {
    for (const key in object) {
        const value = object[key]
        callback(key, value, object)
    }
}
const obj = { x: 10, y: 20, z: 30 }
iterate(obj, (key, value) => {
    console.log({ key, value })
})