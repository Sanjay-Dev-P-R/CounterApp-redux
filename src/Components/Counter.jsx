import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../Redux/counterSlice'


function Counter() {
    const counter = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Counter App</h2>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())}>Incremnet</button>
        <button onClick={()=>dispatch(decrement())}>Decremnet</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter