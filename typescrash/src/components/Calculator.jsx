import * as React from 'react';

const Calculator = () => {
  const [num1, setNum1] = React.useState(0)
  const [num2, setNum2] = React.useState(0)
  return (
    <form>
      <input
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input
        value={num2}
        onChange={e => setNum2(e.target.value)}
      />

    {Number(num1) + Number(num2)}
    </form>
  )
}

export default Calculator