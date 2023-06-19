const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('hieu', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('hieu', () => {
  console.log('some other logic here')
})

customEmitter.emit('hieu', 'john', 34)
