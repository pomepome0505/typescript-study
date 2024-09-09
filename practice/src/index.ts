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

type FooObject = {
  name: string,
  age: number
}

const obj: FooObject = {
  name: '田中太郎',
  age: 18
}

console.log(obj)

type BarObject = {
  [key: string]: number
}

const obj2: BarObject = {
  apple: 1,
  peach: 2
}

console.log(obj2)

const num = 1
console.log(111)
console.log(num)

function foobar(num2) {
  console.log(num2)
}