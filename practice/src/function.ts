function range(min: number, max: number): number[] {
  const result = []
  for (let i = min; i < max; i++) {
    result.push(i)
  }
  return result
}

console.log(range(0, 10))

function helloWorld(): void {
  console.log('Hello,World')
}

helloWorld()