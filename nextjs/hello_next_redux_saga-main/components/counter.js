import { useSelector, useDispatch } from 'react-redux'
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
 // const counterList =useSelector((state) =>state. counterList) 
  //const dispatch = useDispatch()
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
      return (
      <div>
      {/*<h1>
        //Count: <span>{count}</span>
</h1>*/}
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>test</button>
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
