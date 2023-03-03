import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, reset } from '../actions'

import Counter from './counter'

const CounterItem = () => {
  // const count = useSelector((state) => state.count)
  const counters =useSelector((state) =>state.counters) 
  const dispatch = useDispatch()

  console.log("ACTION"+JSON.stringify(counters))

  
  const arr = counters || [];

  const count = arr.filter((counters) => counters.value > 0).length;
  
  {counters && counters.map(counter => <Counter key={counter.id} id={counter.id} />)}
      
  // Using an if check
  if (!counters) {
      return null
  }
  

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
      

      // Here post will not be undefined anymore

   

    <div>
        <h1>
        total: <span>{count}</span>
      </h1>
      <div>
      

              {counters.map(counter=><Counter key={counter.id} id={counter.id}/>)}
       
      </div>

    </div>
    
  )
}

export default CounterItem
