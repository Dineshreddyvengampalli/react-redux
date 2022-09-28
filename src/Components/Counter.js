// import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { redFunctions} from '../Store/store'

function Counter() {
  console.log(redFunctions)
    // let [input,setInput] = useState(0)
    let dispatch = useDispatch()
    const count = useSelector(state => state.counter)
    let incrementHandler = ()=>{
        dispatch()
    }
    // let decrementHandler = ()=>{
    //     dispatch({type : "decrement"})
    // }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementHandler}>increment</button>
        {/* <button onClick={decrementHandler}>decrement</button> */}
        {/* <input type='number' placeholder='increment by' onChange={(e)=>setInput(e.target.value)} ></input> */}
    </div>
  )
}

export default Counter