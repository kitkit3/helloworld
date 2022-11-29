import React, { useState,createContext,useContext,Fragment,useCallback, useMemo } from 'react';
import '../index.css';
import Button from '@mui/material/Button';




const UserContext= createContext(null);

function Apps(){
    
    
    const[ numbers,setNumber] =useState(
        [{id:1,ready:true,data:0},
        {id:2,ready:true,data:0},
        {id:3,ready:true,data:0},
        //{id:4,ready:true,data:0}
    ]);

   
    const[total]= useState(0);
         //   console.log(props.children);
         //   const element = document.getElementById(props.children);
         //   element.remove(); 
         const setAllZero= useCallback(
            () => { setNumber(
                numbers.map((number) =>
                true
                    ? { ...number, data:0 }
                    : { ...number }
            )
          );
        })
        const reset= useCallback(
            () => { 
                let nonready=0;
                numbers.map((number) =>{
                if(number.ready==false)
                    nonready+=1;
                }
                );
                console.log(nonready);
                if(nonready==numbers.length)
                setNumber(numbers.map((number) =>
                true
                    ? { ...number, ready: true }
                    : { ...number }        
                ))
        })
        
    


        return(
        <div className="body1">
            <div>
                
            <UserContext.Provider value={[numbers,setNumber]}>
                <Menu setAllZero={setAllZero} reset={reset}/>
            </UserContext.Provider>
            <Button variant="contained">Hello World</Button>;
            </div>
            <div>
            
  
            
                
                {numbers.map((number,index)=>{
                return(
                <div id= {number.id} key={index} className="MenuItem">
                    {console.log('id '+ number.id)}
                    <UserContext.Provider value={[numbers,setNumber]}>
                    <MenuItem1 index={index} ></MenuItem1>
                    </UserContext.Provider>
                </div>    
                )})}
            </div>
                    
        </div>
        
    );
     
}
function MenuItem1({index}){
    
    console.log(index);
    const[numbers, setNumber]=useContext(UserContext);
    console.log(numbers[index]);
    const[Zero]=useState("Zero");
    const[Add]=useState("additionbutton");
   // Add=goods==0?"additionbutton":"additionbutton";
    
    const isGoodsZero=numbers[index].data==0?"yellowZero":"nonzerobutton";
    const subtraction=numbers[index].data==0?"subtractionlock":"subtractionbutton";
    const ZeroWord=numbers[index].data==0?Zero:numbers[index].data;

    const deleteRow = () => {

        setNumber(numbers.map((number) =>
        
        number.id === index+1
            ? { ...number, ready: false , data:0}
            : { ...number }
    )
);

    };


    const increaseGoods = ()=>  {

         setNumber(numbers.map((number) =>
                number.id === index+1
                    ? { ...number, data: number.data+1 }
                    : { ...number }
            )
        );
    };
    const decreaseGoods = () => {
          if(numbers[index].data>0)  
        setNumber(numbers.map((number) =>
        number.id === index+1

            ? { ...number, data: number.data-1 }
            : { ...number }
    )
);
              
    };

    return( 
        numbers[index].ready&&<Fragment>
    <button className={isGoodsZero}>
    {ZeroWord}
    </button>
    <button className= {Add} onClick={increaseGoods}>
    {<img src={require('../img/addition.png')} alt="+" />}
    </button>
    <button  className={subtraction} onClick={decreaseGoods}>
    {<img src={require('../img/subtraction.png')} alt="-" />}
    </button>
    <button className="recyclebinbutton" onClick={deleteRow}>
    {<img src={require('../img/recyclebin.png')} alt="" />}
    </button>
    </Fragment>);
    //<li>{props.children}</li>;

}
function Menu({setAllZero,reset}){

    const[numbers]=useContext(UserContext);

    const total = useMemo(()=>{
        let count=0;
        numbers.map((number)=>{
            if(number.data>0)
                count+=1;
        })
        return count;
    })

    return(
        <div >
        <h1>Wecome to HKCalebMall</h1>
        <div><img className="shoppingcart" src={require('../img/shopping_cart.png')} alt="cart" />
        <button id="total">{total}</button>
        <font >item</font>
        </div>
            <button className={"setZerobutton"} onClick={setAllZero}>
            {<img src={require('../img/setzero.png')} alt="Zero" />}
            </button>
            <button className={"resetbuttonlock"} onClick={reset}>
            {<img src={require('../img/reset.png')} alt="reset" />}
            </button>
            <br />
        </div>
    );
    }

export default Apps;