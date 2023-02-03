import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, reset } from '../actions'

import Counter from './counter'

const CounterItem = () => {
  const count = useSelector((state) => state.count)
  const counterList =useSelector((state) =>state.counterList) 
  const dispatch = useDispatch()

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      
      <div>
      {counterList.map(counter=>
        <Counter/>
      //   key = {counterList.id}
      //  onDelete = {onDelete}
      //  onIncrement = {onIncrement}
      //  onDecrement = {onDecrement}
      //  counter = {counterList.value}
      ///>
    
      /*<div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>*/
      )
    }
        
       
      </div>

    </div>
    
  )
}

export default CounterItem
