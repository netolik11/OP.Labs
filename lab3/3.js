'use strict'

function moveIP(ip = '127.0.0.1') {
  const bytes = ip.split('.').map(Number)
  return bytes.reduce((sum, byte) => (sum << 8) + byte, 0)
}
console.log(moveIP('10.0.0.1'))
console.log(moveIP('192.168.0.1')) /// мій айпі бтв
console.log(moveIP())