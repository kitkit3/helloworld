import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState,createContext,useContext,Fragment,useCallback, useMemo } from 'react';

const inter = Inter({ subsets: ['latin'] })


const UserContext= createContext(null);
export default function Home() {
   
  const[ numbers,setNumber] =useState(
    [{id:1,ready:true,data:0},
    {id:2,ready:true,data:0},
    {id:3,ready:true,data:0},
    {id:4,ready:true,data:0}
]);
var randomColor = require('randomcolor')

/*if(!savefirstcolor)
    {
        color= randomColor({
        hue: 'green',
        luminosity: 'light',
        alpha:'0.3'
    }
    );
    savefirstcolor=true;
}*/


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
    
  return (
    <div>

        <div className="body1">
            <div>
                
            <UserContext.Provider value={[numbers,setNumber]}>
                <Menu setAllZero={setAllZero} reset={reset}/>
            </UserContext.Provider>
            
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
        </div>
    /*<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>*/
  )
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
     <Image
        src={require('./img/addition.png')}  alt="+"
        width={400} height={400}
        priority={true}
      />
  </button>
  <button  className={subtraction} onClick={decreaseGoods}>
  <Image
        src={require('./img/subtraction.png')}  alt="-"
        width={300} height={300}
        priority={true}
      />
  </button>
  <button className="recyclebinbutton" onClick={deleteRow}>
    <Image
        src={require('./img/recyclebin.png')}  alt=" "
        width={300} height={300}
        priority={true}
      />
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
      <div>
      <Image
      className="shoppingcart"
        src={require('./img/shopping_cart.png')}  alt="cart"
        width={300} height={300}
        priority={true}
      />
      <button id="total">{total}</button>
      <font >item</font>
      </div>
          <button className={"setZerobutton"} onClick={setAllZero}>
          <Image
          src={require('./img/setzero.png')}  alt="0"
        width={300} height={300}
        priority={true}
           />
          </button>
          <button className={"resetbuttonlock"} onClick={reset}>
          <Image
          src={require('./img/reset.png')}  alt="0"
            width={300} height={300}
          priority={true}
            />
          </button>
          <br />
          
      </div>
  );
  }