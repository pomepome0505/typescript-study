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

type Human = {
  height: number;
  weight: number;
}

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2
}

console.log(calcBMI({height: 1.75, weight: 69}))

const calcBMI2 = function (human: { weight: number, height: number}): number {
  return human.weight / human.height ** 2
}

console.log(calcBMI2({height: 1.75, weight: 69}))