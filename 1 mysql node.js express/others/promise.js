// let promise = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a == 2) {
//     resolve('Succeed')
//   } else {
//     reject('Failed')
//   }
// })

// promise.then((message) => {
//   console.log('Promise is ' + message)
// }).catch((message) => {
//   console.log('Promise is ' + message)
// })



new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Succeed')
  } else {
    reject('Failed')
  }
})
.then((message) => {
  console.log('Promise is ' + message)
})
.catch((message) => {
  console.log('Promise is ' + message)
})