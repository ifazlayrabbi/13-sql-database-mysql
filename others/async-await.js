
const makeRequest = para1 => {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ?`, [para1])

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
//   processResponse(resolveMsg).then(responseMsg => console.log(responseMsg))

// }).catch(rejectMsg => {
//   console.log('Promise rejected.')
//   processResponse(rejectMsg).then(responseMsg => console.log(responseMsg))
// })



// makeRequest(value).then(resolveMsg => {
//   console.log('Promise resolved.')
//   return processResponse(resolveMsg)
// }).then(responseMsg => console.log(responseMsg)

// ).catch(rejectMsg => {
//   console.log('Promise rejected.')
//   console.log('Response Msg: ', rejectMsg)
// })



// const func1 = async () => {
//   try {
//     const make_request = await makeRequest(value)
//     console.log('Response Received.')
//     const process_response = await processResponse(make_request)
//     console.log(process_response)
//   } catch (response) {
//     console.log(response)
//   }
// }
// func1()



// console.log(makeRequest(value))
// Promise { 'Succeed' }

// makeRequest(value)
// .then(para1 => console.log(para1))
// .catch(para1 => console.log(para1))

// try {
//   console.log(await makeRequest(value))
// } catch (response) {
//   console.log(response)
// }



// const func1 = async () => {
//   try {
//     const request = await makeRequest(value)
//     const response = await processResponse(request)
//     console.log(response)
//   } catch (response) {
//     console.log(response)
//   }
// }
// func1()

const func1 = async () => {
  try {
    console.log(await processResponse(await makeRequest(value)))
  } catch (response) {
    console.log(await processResponse(response))
  }
}
func1()

// makeRequest(value)
// .then(para1 => processResponse(para1))
// .then(para1 => console.log(para1))
// .catch(para1 => processResponse(para1))
// .then(para1 => console.log(para1))

