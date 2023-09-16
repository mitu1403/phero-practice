import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count+1) 
  }
  const handleReduce = () => {
    setCount(count-1) 
  }
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </>
  )
}

export default Counter