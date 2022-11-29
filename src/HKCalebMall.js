import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





 class HKCalebMall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

            firstNumber:0,
            secondNumber:0 ,
            thirdNumber: 0,
            forthNumber: 0,// record the number 
    
            total: 0,// total number of row that detele 

            firstRow:true,
            secondRow:true,
            thirdRow:true,
            forthRow:true, //show or hidden the row in the different row 
            
            firstZero:"yellowZero",
            secondZero:"yellowZero",
            thirdZero:"yellowZero",
            forthZero:"yellowZero", //set zero when the start menu and reset number after pressing the button
            
            additionButton1:"additionbutton",
            additionButton2:"additionbutton",
            additionButton3:"additionbutton",
            additionButton4:"additionbutton",// the style of row 1-4"+"button
            
            subtractionButton1:"subtractionlock",
            subtractionButton2:"subtractionlock",
            subtractionButton3:"subtractionlock",
            subtractionButton4:"subtractionlock",
            setZerobutton:"setZerobutton",// the style of setZerobutton
            resetbutton:"resetbuttonlock",

            Zero:"Zero",// the yellowKeyWord
            item:0,

            
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);//add mousedownlistener 
        
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);//remove mousedownlistener
      }


     increaseRow(row) {
        switch (row) {//increase the different row of the number box number 
            case 1: this.setState({ firstNumber: ++this.state.firstNumber ,
                                    firstZero:"nonzerobutton",
                                    additionButton1:"additionbuttonclick",
                                    subtractionButton1:"subtractionbutton",
                                    }); break;

            case 2: this.setState({ secondNumber:++this.state.secondNumber ,
                                    secondZero:"nonzerobutton",
                                    additionButton2:"additionbuttonclick",
                                    subtractionButton2:"subtractionbutton",
                                    }); break;

            case 3: this.setState({ thirdNumber: ++this.state.thirdNumber ,
                                    thirdZero:"nonzerobutton",
                                    additionButton3:"additionbuttonclick",
                                    subtractionButton3:"subtractionbutton",
                                     }); break;

            case 4: this.setState({ fourthNumber:++this.state.forthNumber ,
                                    forthZero:"nonzerobutton",
                                    additionButton4:"additionbuttonclick",
                                    subtractionButton4:"subtractionbutton",
                                    }); break;
        }
        this.setState({item:this.countitem()});
     }
     decreaseRow(row){
        switch (row) {// decrease the different row of the number box number 
            case 1: if(this.state.firstNumber>0 )this.setState({ firstNumber:--this.state.firstNumber ,subtractionButton1:"subtractionbuttonclick"}); 
                    if(this.state.firstNumber==0 )this.setState({ firstZero:"yellowZero",subtractionButton1:"subtractionlock"});
                    break;
            case 2: if(this.state.secondNumber>0 )this.setState({ secondNumber: --this.state.secondNumber,subtractionButton2:"subtractionbuttonclick"}); 
                     if(this.state.secondNumber==0 )this.setState({ secondZero:"yellowZero",subtractionButton2:"subtractionlock"}); 
                     break;
            case 3: if(this.state.thirdNumber>0 )this.setState({thirdNumber: --this.state.thirdNumber,subtractionButton3:"subtractionbuttonclick"}); 
                    if(this.state.thirdNumber==0 )this.setState({thirdZero:"yellowZero",subtractionButton3:"subtractionlock" }); 
                    break;
            case 4: if(this.state.forthNumber>0 )this.setState({ fourthNumber: --this.state.forthNumber,subtractionButton4:"subtractionbuttonclick"}); 
                    if(this.state.forthNumber==0 )this.setState({forthZero:"yellowZero",subtractionButton4:"subtractionlock"}); 
                    break;

        }
        this.setState({item:this.countitem()});
    }
    countitem(){

        this.state.item=0;

        if(this.state.firstNumber!=0)
        {      
            ++this.state.item;      
        }
        if(this.state.secondNumber!=0)
            ++this.state.item;
        if(this.state.thirdNumber!=0)
            ++this.state.item;
        if(this.state.forthNumber!=0)
            ++this.state.item;
            
            return this.state.item;
            
    }

    
    deteleRow(row){ //hiddin the seleted row
         this.setState({total:++this.state.total});
         
        switch(row){
            case 1: if(this.state.firstNumber>0)this.setState({item:--this.state.item});
                    this.setState({firstRow:false,firstNumber:0});
                    break;
                    
            case 2: if(this.state.secondNumber>0)this.setState({item:--this.state.item});
                    this.setState({secondRow:false,secondNumber:0}); break;
            case 3: if(this.state.thirdNumber>0)this.setState({item:--this.state.item});
                    this.setState({thirdRow:false,thirdNumber:0}); break;
            case 4: if(this.state.forthNumber>0)this.setState({item:--this.state.item});
                    this.setState({forthRow:false,forthNumber:0}); break;
        }
     

        if(this.state.total==4)
        {
            this.setState({setZerobutton:"setZerobuttonlock",
                             resetbutton:"resetbutton"
            });
            
        }
        
    }
    resetNumber(){ //reset the Number
        this.setState({
            firstNumber:0,
            secondNumber:0,
            thirdNumber:0,
            forthNumber:0,
            firstZero:"yellowZero",
            secondZero:"yellowZero",
            thirdZero:"yellowZero",
            forthZero:"yellowZero",
            subtractionButton1:"subtractionlock",
            subtractionButton2:"subtractionlock",
            subtractionButton3:"subtractionlock",
            subtractionButton4:"subtractionlock",
            item:0,
            setZerobutton:"setZerobuttonclick"
        });
        if(this.state.total==4)
        {
            this.setState({setZerobutton:"setZerobuttonlock",
            });
            
        }
    }
  
    
    reset(){// show all the hidden row and reset all the attribute
        if(this.state.total==4)
        {
        this.setState({firstNumber:0,
                       secondNumber:0,
                       thirdNumber:0,
                       forthNumber:0,
                       firstRow:true,
                       secondRow:true,
                       thirdRow:true,
                       forthRow:true,
                       firstZero:"yellowZero",
                       secondZero:"yellowZero",
                       thirdZero:"yellowZero",
                       forthZero:"yellowZero",
                       subtractionButton1:"subtractionlock",
                       subtractionButton2:"subtractionlock",
                       subtractionButton3:"subtractionlock",
                       subtractionButton4:"subtractionlock",
                       total:0,
                       item:0,
                       resetbutton:"resetbuttonlock",
                       setZerobutton:"setZerobutton",
        });
        }
    }
    myRef = React.createRef();

    handleClickOutside= e => {

     
        this.setState({ 
            clickedOutside: true ,
            additionButton1:"additionbutton",
            additionButton2:"additionbutton",
            additionButton3:"additionbutton",
            additionButton4:"additionbutton",
            
        });
        if(this.state.total==4)
        {
            this.setState({setZerobutton:"setZerobuttonlock",
                             resetbutton:"resetbutton"
            });
        }
        else {
            this.setState({resetbutton:"resetbuttonlock",
                          setZerobutton:"setZerobutton",
        }); 
            
        }
        
        if(this.state.firstNumber==0 ){this.setState({ subtractionButton1:"subtractionlock"});}
             else 
         this.setState({ subtractionButton1:"subtractionbutton"});

        if(this.state.secondNumber==0 )this.setState({ subtractionButton2:"subtractionlock"});
            else 
        this.setState({ subtractionButton2:"subtractionbutton"});

        if(this.state.thirdNumber==0 )this.setState({subtractionButton3:"subtractionlock" });
            else
         this.setState({ subtractionButton3:"subtractionbutton"}); 

        if(this.state.forthNumber==0 )this.setState({subtractionButton4:"subtractionlock"}); 
            else 
        this.setState({ subtractionButton4:"subtractionbutton"});  

        
      
    };

    render() {

        console.log('render');

        const first=this.state.firstRow;
        const secound=this.state.secondRow;
        const third=this.state.thirdRow;
        const forth=this.state.forthRow;
        const firstZero=this.state.firstZero;
        const secondZero=this.state.secondZero;
        const thirdZero=this.state.thirdZero;
        const forthZero=this.state.forthZero;
        
        const a=this.state.firstNumber==0?"yellowZero":"nonzerobutton";
        return (
            
            <div class="body1" ref={this.myRef} >
            <div >
            <h1>Wecome to HKCalebMall</h1>
            <table><tr><td><img class="shoppingcart" src={require('./img/shopping_cart.png')} alt="cart" /></td>
            <td><button id="total">{this.state.item}</button><br/>
            </td><td><font >item</font>
            </td></tr>
            </table>
                <button class={this.state.setZerobutton} onClick={()=>this.resetNumber()}>
                {<img src={require('./img/setzero.png')} alt="Zero" />}
                </button>
                <button class={this.state.resetbutton}  onClick={()=>this.reset()}>
                {<img src={require('./img/reset.png')} alt="rest" />}
                </button>
                <br />
            </div>
            <div>
            <table border="1">
                    {first&&<tr>
                        <td> <button class={a}>
                        {this.state.firstNumber==0?this.state.Zero:this.state.firstNumber}
                        </button></td>
                        <td> <button class={this.state.additionButton1}  onClick={() => this.increaseRow(1)} >
                        {<img src={require('./img/addition.png')} alt="+" />}
                        </button></td>
                        <td><button class={this.state.subtractionButton1} onClick={() => this.decreaseRow(1)}>
                        {<img src={require('./img/subtraction.png')} alt="-" />}
                        </button></td>
                        <td><button class="recyclebinbutton" onClick={() => this.deteleRow(1)}>
                        {<img src={require('./img/recyclebin.png')} alt="" />}
                        </button></td>
                    </tr>
                    }
                    {secound&&<tr>
                        <td><button class={secondZero}>
                        {this.state.secondNumber==0?this.state.Zero:this.state.secondNumber}
                        </button></td>
                        <td><button class={this.state.additionButton2} onClick={() =>this.increaseRow(2)}>
                        {<img src={require('./img/addition.png')} alt="+" />}
                        </button></td>
                        <td><button class={this.state.subtractionButton2} onClick={() => this.decreaseRow(2)}>
                        {<img src={require('./img/subtraction.png')} alt="-" />}
                        </button></td>
                        <td><button class="recyclebinbutton" onClick={() => this.deteleRow(2)}>
                        {<img src={require('./img/recyclebin.png')} alt="" />}
                        </button></td>
                    </tr>
                      }
                    {third&&<tr>
                        <td><button class={thirdZero}>
                        {this.state.thirdNumber==0?this.state.Zero:this.state.thirdNumber}
                        </button></td>
                        <td><button class={this.state.additionButton3} onClick={() =>this.increaseRow(3)}>
                        {<img src={require('./img/addition.png')} alt="+" />}
                        </button></td>
                        <td><button class={this.state.subtractionButton3} onClick={() => this.decreaseRow(3)}>
                        {<img src={require('./img/subtraction.png')} alt="-" />}
                        </button></td>
                        <td><button class="recyclebinbutton" onClick={() => this.deteleRow(3)}>
                        {<img src={require('./img/recyclebin.png')} alt="" />}
                        </button></td>
                    </tr>
                    }
                    {forth&&<tr>
                        
                        <td><button class={forthZero}>
                        {this.state.forthNumber==0?this.state.Zero:this.state.forthNumber}
                        </button></td>
                        <td><button class={this.state.additionButton4} onClick={() => this.increaseRow(4)}>
                        {<img src={require('./img/addition.png')} alt="+" />}
                        </button></td>
                        <td><button class={this.state.subtractionButton4} onClick={() => this.decreaseRow(4)}>
                        {<img src={require('./img/subtraction.png')} alt="-" />}
                        </button></td>
                        <td><button class="recyclebinbutton" onClick={() => this.deteleRow(4)}>
                        {<img src={require('./img/recyclebin.png')} alt="" />}
                        </button></td>
                        
                    </tr>
                    }
                </table>
            </div>
            </div>
        );
    }
}
export default HKCalebMall;

