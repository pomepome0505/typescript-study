const message: string = 'Hello World'

console.log(message)

const ary: Array<string> = ['test']
console.log(ary)

const ary2: Array<{ name: string, age: number }> = [
  {
    name: 'foo',
    age: 18,
  }
]
console.log(ary2)

const ary3: readonly number[] = [1, 2, 3]
console.log(ary3)
