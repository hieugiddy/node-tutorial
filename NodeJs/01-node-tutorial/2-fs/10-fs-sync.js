const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `01: ${first}, 02: ${second}`,
  { flag: 'a' }
)  //k co flag thi se ghi de file lai tu dau, neu co flag thi se ghi tiep tuc


const output = readFileSync('./content/result-sync.txt', 'utf8')
console.log(output)
