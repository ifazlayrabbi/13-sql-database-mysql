
const makeRequest = para1 => {
  return new Promise((resolve, reject) => {
    console.log('Making Request to ' + para1)

    if (para1 == 'Google')
      resolve('Succeed')
    else
      reject('Failed')
  })
}

const processResponse =  para2 => {
  return new Promise((resolve, reject) => {
    console.log('Processing Response.')
    resolve('Response Msg: ' + para2)
  })
}

let value = 'Yahoo'
// let value = 'Google'

// makeRequest(value).then(resolveMsg => {
//   console.log('Promise resolved.')
//   processResponse(resolveMsg).then(responseMsg => console.log('Response Msg: ', responseMsg))

// }).catch(rejectMsg => {
//   console.log('Promise rejected.')
//   processResponse(rejectMsg).then(responseMsg => console.log('Response Msg: ', responseMsg))
// })

// makeRequest(value).then(resolveMsg => {
//   console.log('Promise resolved.')
//   return processResponse(resolveMsg)
// }).then(responseMsg => console.log('Response Msg: ', responseMsg)

// ).catch(rejectMsg => {
//   console.log('Promise rejected.')
//   console.log('Response Msg: ', rejectMsg)
// })



// const func1 = async () => {
//   try {
//     const resp1 = await makeRequest(value)   // every promise function is an asynchronus function, here, 'await f(para1)' is supposed to store the 'resolve value', if this asynchronous function returns 'reject value' then to store that value, we have to use catch function 
//     console.log('Response Received.')
//     const resp2 = await processResponse(resp1)
//     console.log('Response Msg: ', resp2)

//   } catch (resp1) {
//     console.log('Response Received.')
//     const resp2 = await processResponse(resp1)
//     console.log('Response Msg: ', resp2)
//   }
// }
// func1()



// const func1 = async () => {
//   try {
//     const resp1 = await makeRequest(value)
//     console.log('Response Received.')
//     const resp2 = await processResponse(resp1)
//     console.log('Response Msg: ', resp2)

//   } catch (resp1) {
//     console.log('Response Received.')
//     console.log('Response Msg: ', resp1)
//   }
// }
// func1()











// console.log(makeRequest(value))    // Result: Promise { 'Succeed' }

// makeRequest(value)
// .then(para1 => console.log(para1))
// .catch(para1 => console.log(para1))


// console.log(await makeRequest(value))    // Result: Uncaught Exception

// try {
//   console.log(await makeRequest(value))
// } catch (response) {
//   console.log(response)
// }











// const func1 = async () => {
//   try {
//     console.log(await processResponse(await makeRequest(value)))
//   } catch (response) {
//     console.log(await processResponse(response))
//   }
// }
// func1()

try {
  console.log(await processResponse(await makeRequest(value)))
} catch (response) {
  console.log(await processResponse(response))
}

// makeRequest(value)
// .then(para1 => processResponse(para1))
// .then(para1 => console.log(para1))
// .catch(para1 => processResponse(para1))
// .then(para1 => console.log(para1))

