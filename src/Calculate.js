import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Calculate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0,
            firstNumber: 0,
            secoundNumber: 0,
            pointer: 0,
            total: 0,
            formula: '+'

        };
    }
    componentDidMount() {
        // this.timerID = setInterval(() => this.tick(),
        //   1000); 
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    insertNumber(number) {

        if (this.state.pointer == 0) {

            var Temp = this.state.firstNumber;
            if ((Temp + '').length < 5) {
                if (Temp == 0) {
                    Temp = number;
                }
                else {
                    Temp = Temp * 10 + number;
                }
            }
            this.state.firstNumber = Temp;
            this.setState({ firstNumber: this.state.firstNumber });
        }
        else {
            var Temp = this.state.secoundNumber;
            if ((Temp + '').length < 5) {
                if (Temp == 0) {
                    Temp = number;
                }
                else {
                    Temp = Temp * 10 + number;
                }
            }
            this.state.secoundNumber = Temp;
            this.setState({ secoundNumber: this.state.secoundNumber });
        }



    }
    
    reset() {

        this.setState({ firstNumber: 0,
                        secoundNumber: 0 ,
                        total: 0  ,
                        pointer: 0 });

    }
    resetfirstcolumn() {

        this.setState({ firstNumber: 0,
                        pointer: 0  });

    }
    resetsecoundcolumn() {

        this.setState({ secoundNumber: 0 , 
                        pointer: 1 });


    }
    resetlastcolumn(){
        this.setState({ total: 0 ,
                         pointer: 0 });
    }
    calculate() {
        switch (this.state.formula) {
            case '+': this.setState({ total: this.state.firstNumber + this.state.secoundNumber }); break;
            case '-': this.setState({ total: this.state.firstNumber - this.state.secoundNumber }); break;
            case '*': this.setState({ total: this.state.firstNumber * this.state.secoundNumber }); break;
            case '/': this.setState({ total: this.state.firstNumber / this.state.secoundNumber }); break;

        }

    }
    insertformula(formula) {
        this.setState({ formula: formula, 
                        pointer:1});

    }
    handleClick = () => {
        this.setState({ count: ++this.state.count });
        if (this.state.count % 5 == 0)
            this.setState({
                date: new Date()
            })

        //clearInterval(this.timerID);
        //this.state.date.toLocaleTimeString();
        //console.log('this is:', this);
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Hello, Tong!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

                <table border="1">
                    <tr>
                        <td colspan="3"> <button   class="long" onClick={() => this.resetfirstcolumn()}>
                            {this.state.firstNumber}
                        </button></td>
                        <td ><button class="specialbutton">

                            {this.state.formula}

                        </button></td>
                    </tr>

                    <tr>
                        <td colspan="3"> <button  class="long" onClick={() => this.resetsecoundcolumn()}>
                            {this.state.secoundNumber}
                        </button></td>
                        <td ><button onClick={() => this.reset()}>

                            c

                        </button></td>
                    </tr>
                    <tr>
                        <td colspan="4"> <button onClick={() => this.resetlastcolumn()}>
                            {this.state.total}
                        </button></td>
                    </tr>
                    <tr>
                        <td> <button onClick={() => this.insertNumber(1)}>
                            1
                        </button></td>
                        <td>  <button onClick={() => this.insertNumber(2)}>
                            2
                        </button></td>
                        <td><button onClick={() => this.insertNumber(3)}>
                            3
                        </button></td>
                        <td rowspan="4"><button onClick={() => this.insertformula('+')}>
                            +
                        </button>
                            <br />
                            <button onClick={() => this.insertformula('-')}>
                                -
                            </button>
                            <br />
                            <button onClick={() => this.insertformula('*')}>
                                *
                            </button>
                            <br />
                            <button onClick={() => this.insertformula('/')}>
                                .
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.insertNumber(4)}>
                            4
                        </button></td>
                        <td><button onClick={() => this.insertNumber(5)}>
                            5
                        </button></td>
                        <td><button onClick={() => this.insertNumber(6)}>
                            6
                        </button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.insertNumber(7)}>
                            7
                        </button></td>
                        <td><button onClick={() => this.insertNumber(8)}>
                            8
                        </button></td>
                        <td><button onClick={() => this.insertNumber(9)}>
                            9
                        </button></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button onClick={() => this.calculate()}>
                                Submit
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.insertNumber(0)}>
                                0
                            </button>
                        </td>
                    </tr>

                </table>

                {/*<h2>This is my number of Click:{this.state.count}</h2>*/}
                {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
            </div>
        );
    }
}
export default Calculate;