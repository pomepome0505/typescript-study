// 部分型
type Foo = {
  name: string;
  age: number;
}

type FooBar = {
  name: string;
  age: number;
  postCode: string;
}

const obj: FooBar = {
  name: '田中太郎',
  age: 18,
  postCode: '000-1111',
}
console.log(obj)

// FooBar型であるobjをFooの型でobj2に代入しているがエラーが発生しない
// これは部分型であるため
const obj2: Foo = obj;
console.log(obj2)

type Animal = {
  species: string 
}

type Human = {
  name: string
}

type User = Animal | Human

const obj3: User = {
  name: '田中 太郎'
}

console.log(obj3)

const foobar = (age: number | undefined) => console.log(`年齢：${age}`)
foobar(18)
foobar(undefined)