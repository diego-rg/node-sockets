process.on('unhandledRejection', (err, p) => {
    console.log('Error: An unhandledRejection occurred')
    console.log(`Error: Rejection: ${err}`)
  })
  
  process.on('uncaughtException', err => {
    console.log('Error: An uncaughtException occurred')
    console.log(`Error: Rejection: ${err}`)
  })
  
  
//   Promise(resolve => JSON.pasre({ color: 'azul' }))
test()