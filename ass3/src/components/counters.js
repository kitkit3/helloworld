import React from 'react';
import Counter from './counter';
import './counters.css'
// import { faRecycle } from "@fortawesome/free-solid-svg-icons";
// import { faRedo } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


class Counters extends React.Component{

  refreshPage() {
    window.location.reload();
  }
  render(){
    const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props;
  
    return(
      <div className='button-box'>

<i class="fa fa-shopping-cart" aria-hidden="true" >   <span> </span><span className='idcount'>0</span>  Items
</i><br />        <br></br>

      <button onClick = {onReset}className="reset" ><i class="fa fa-redo" aria-hidden="true"></i></button>
      {"    "}      {"    "}      {"    "}


      <button onClick={() => window.location.reload()} className="reload" ><i class="fa fa-recycle" aria-hidden="true"></i></button>
      {counters.map(counter =>
        <Counter
         key = {counter.id}
        onDelete = {onDelete}
        onIncrement = {onIncrement}
        onDecrement = {onDecrement}
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
