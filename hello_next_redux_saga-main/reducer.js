import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const closeState = {
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  row:0,
  
  counters : [
    {id : 1, value : 0},
    {id : 2, value : 0},
    {id : 3, value : 0},
    {id : 4, value : 0},
    {id : 5, value : 0},
  ]
}

function reducer(state = closeState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count:state.count  + 1 },
        
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }
      case actionTypes.INCREMENTITEM:
        // console.log("INCREMENTITEM"+JSON.stringify(state))
        // console.log("ACTION"+JSON.stringify(action))

        let newCounter = state.counters.map(function(d){
          if (d.id === action.counter.id) {
            d.value = d.value + 1
          }
          return d
        })
        // console.log("newCounter"+ JSON.stringify(newCounter))

       /* state.counters.map(counter=>
            counters.id===action.counter.id
            ?{...counter.id,value:counter.value+1}
            :{...counter.id,})*/



        return {
          ...state,
          ... {counters: newCounter}
        //  ...{ value: state.counters.value +1 },

          //...{ value: action.counter.value+1},

          //...state,
         // ...{ value: state.counterList[row].value + 1 },
          
            
        }
  
      case actionTypes.DECREMENTITEM:


      let newCounter1 = state.counters.map(function(d){
        if (d.id === action.counter.id) {
          d.value = d.value - 1
        }
        return d
      })
        return {
          ...state,
          ...{ counters: newCounter1},
          ...console.log(action.counter.value),
        }
  
      case actionTypes.RESETITEM:

      let newCounter2 = state.counters.map(function(d){
        if (d.id === action.counter.id) {
          d.value = 0
        }
        return d
      })
        return {
          ...state,
          ...{counters: newCounter2},
        }
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

export default reducer
