import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, reset } from '../actions'

import Counter from './counter'

const CounterItem = () => {
  // const count = useSelector((state) => state.count)
  const counters =useSelector((state) =>state.counters) 
  const dispatch = useDispatch()

  const count = counters.filter(counters => counters.value > 0).length;


  return (
   /* <div>
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
         */
    <div>
        <h1>
        total: <span>{count}</span>
      </h1>
      <div>
  
      {counters.map(counter=>
       
        <Counter key={counter.id} id={counter.id}/>
        
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
