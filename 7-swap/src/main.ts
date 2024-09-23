import swapKeysAndValues from './utils/swap.ts'

const original = { A: 1, B: 2, C: 3 }
const swapped = swapKeysAndValues(original)
console.log(swapped) // { 1: 'A', 2: 'B', 3: 'C' }
