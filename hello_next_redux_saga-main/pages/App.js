import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';

class App extends Component {
 
  state = {
    counters : [
      {id : 1, ready : 0, value : 0},
      {id : 1, ready : 0, value : 0},
      {id : 1, ready : 0, value : 0},
      {id : 1, ready : 0, value : 0},
      {id : 1, ready : 0, value : 0}
    ]
  };
  
    handleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
    counters[index].value++;
      console.log(this.state.counters[index]);
      this.setState({counters});
      const countid = counters.filter(counters => counters.id > 0);

    };

    
    handleDecrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
    counters[index].value--;
      console.log(this.state.counters[index]);
      this.setState({counters});
    };
  

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;

    });
    this.setState({counters});
  };
  render() {
    return (
      <div>
    <main className = "container">
    <Counters
    counters = {this.state.counters}
    onReset = {this.handleReset}
    onIncrement = {this.handleIncrement}
    onDecrement = {this.handleDecrement}
    onDelete ={this.handleDelete}/>
    </main>
    </div>
    );
  }
}

export default App;
