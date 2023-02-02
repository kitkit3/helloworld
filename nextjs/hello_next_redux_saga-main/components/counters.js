import React from 'react';
import Counter from './counter(old)';
//import './counters.css'
// import { faRecycle } from "@fortawesome/free-solid-svg-icons";
// import { faRedo } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


class Counters extends React.Component{

  refreshPage() {
    window.location.reload();
  }
  render(){
   // const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props;
  
    return(
      <div>
       {counters.map(counter =>
        <Counter
         key = {counter.id}
      //  onDelete = {onDelete}
      //  onIncrement = {onIncrement}
      //  onDecrement = {onDecrement}
        counter = {counter}
        />)}
        
       
      </div>
    );
  }
  // formatCount() {
  //   const {value } = this.props.counter;
  //   return value === 0 ? "zero" : value ;
  // }
  
}

export default Counters;
