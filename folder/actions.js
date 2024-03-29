export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENTITEM:'INCREMENTITEM',
  DECREMENTITEM: 'DECREMENTITEM',
  RESETITEM: 'RESETITEM',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  HYDRATE: 'HYDRATE',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}

export function reset() {
  return { type: actionTypes.RESET }
}
export function resetItem(counter1) {
  return { type: actionTypes.RESETITEM,
    counter:counter1,
    }
}
export function incrementItem(counter1) {
  return { type: actionTypes.INCREMENTITEM,
  counter:counter1, 
  }
}

export function decrementItem(counter1) {
  return { type: actionTypes.DECREMENTITEM,
  counter:counter1, 
  }
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA,
  }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}

export function startClock() {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}
