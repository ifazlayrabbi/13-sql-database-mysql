
const makeRequest = location => {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ?`, [location])

    if (location == 'Google')
      resolve('Succeed')
    else
      reject('Failed')
  })
}

const processResponse =  response => {
  return new Promise((resolve, reject) => {
    console.log('Processing Response.')
    resolve('' + response)
  })
}

let info = 'Yahoo'
makeRequest(info).then(resolveMsg => {
  console.log('Promise resolved.')
  console.log('Response Msg: ', resolveMsg)
  processResponse(resolveMsg).then(responseMsg => console.log(responseMsg))

}).catch(rejectMsg => {
  console.log('Promise rejected.')
  console.log('Response Msg: ', rejectMsg)
  processResponse(rejectMsg).then(responseMsg => console.log(responseMsg))
})


