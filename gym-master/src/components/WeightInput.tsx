import {useState} from "react"

const WeightInput = () => {
  const [weight, setWeight] = useState(0)

  return (
    <div>
      <button onClick={() => setWeight(weight + 1)}>+</button>
      {weight}
      <button onClick={() => setWeight(weight - 1)}>-</button>
    </div>
  )
}

export default WeightInput
