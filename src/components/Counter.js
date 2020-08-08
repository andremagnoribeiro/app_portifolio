import React from 'react'

import {useSelector,useDispatch} from 'react-redux'

import {actions} from '../actions/counter'
import {selectors} from '../selector/counter'

const Counter = ()=>{
  const counter = useSelector(selectors.getCounter)
  const dispatch = useDispatch()

  const handDecrement = () => dispatch(actions.decrement())
  const handIncrement = () => dispatch(actions.increment())

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ul>
        <li><button onClick={handDecrement}>Decremetar</button></li>
        <li><button onClick={handIncrement}>Incremetar</button></li>
      </ul>
    </div>
);

}



export default Counter