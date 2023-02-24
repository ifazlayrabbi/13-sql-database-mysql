
const makeRequest = location => {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ?.`, [location])

    if (location == 'Google')
      resolve('Succeed')
    else
      reject('Failed')
  })
}

const processRequest =  response => {
  return new Promise((resolve, reject) => {
    console.log('Processing Response.')
    resolve(`?`, [response])
  })
}


