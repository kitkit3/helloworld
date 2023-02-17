import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementItem, decrementItem, resetItem } from '../actions'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './counter.css';

// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {

  const counters =useSelector((state) =>state.counters) 

  const count = counters.filter(counter => counter.id === props.id)[0];
// console.log('value', value, props.id)
 // const counterList =useSelector((state) =>state. counterList) 
  const dispatch = useDispatch()
  //const [id,value]=this.prop;
     /* <div className='button-box2'>
      <span className = {this.getBadgeClasses()} class ="show">{this.formatCount()}</span>
      <button onClick = {() => this.props.onIncrement(this.props.counter)}
      className = "Pbutton" >+</button>
      <button onClick = {() => this.props.onDecrement(this.props.counter)}
      className = "Mbutton">-</button>
      <button onClick = {() => this.props.onDelete(this.props.counter.id)}
        className="delete"> <i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>*/

      console.log('rendering counter: ', props.id)
      return (
      <div>
      
      {<span>{ count.value==0?'zero':count.value}</span>}
      <AwesomeButton onPress={() => dispatch(incrementItem(count))} type="primary"> +1</AwesomeButton>
      <AwesomeButton onPress={() =>{if(count.value>0)dispatch(decrementItem(count))}}>-1</AwesomeButton>
      <AwesomeButton onPress={() => dispatch(resetItem(count))}type="danger" >Reset</AwesomeButton>
      </div>
    
  
      )




 /* getBadgeClasses() {
    let classes = "show";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }


  formatCount() {
    const {value } = this.props.counter;
    return value === 0 ? "zero" : value ;
  }*/
}

export default Counter;
