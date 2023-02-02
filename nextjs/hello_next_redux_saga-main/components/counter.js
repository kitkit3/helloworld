import React from 'react';
import './counters.css'
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Counter extends React.Component {
  render(){
    return(
      <div className='button-box2'>
      <span className = {this.getBadgeClasses()} class ="show">{this.formatCount()}</span>
      <button onClick = {() => this.props.onIncrement(this.props.counter)}
      className = "Pbutton" >+</button>
      <button onClick = {() => this.props.onDecrement(this.props.counter)}
      className = "Mbutton">-</button>
      <button onClick = {() => this.props.onDelete(this.props.counter.id)}
        className="delete"> <i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>

    );
  }
  




  getBadgeClasses() {
    let classes = "show";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }


  formatCount() {
    const {value } = this.props.counter;
    return value === 0 ? "zero" : value ;
  }
}

export default Counter;
