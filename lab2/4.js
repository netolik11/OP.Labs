//'use strict'

//function fn() {
 // const obj1 = { name: 'Alice' }
 // let obj2 = { name: 'Bob' }

  //obj1.name = 'Anna'
  //obj2.name = 'Boris'
//} ==== помилка бо константу не можна перенаписати
'use strict'

function fn() {
  const obj1 = { name: 'Tolik' }
  let obj2 = { name: 'Danya' }
  obj2 = { name: 'Andrii' }
console.log(obj1)
  console.log(obj2)
}

fn()
