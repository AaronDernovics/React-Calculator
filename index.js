

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Button.css';


function Example() {
  
  let [input, setInput] =useState("0")
  let [firstNumb, setfirstNumb] = useState(0.0);
  let [secondNumb, setsecondNumb] = useState(0.0);
  let [sign, setSign] = useState("");
  let [history, setHistory] = useState("");
  let [bool, setBool] = useState(false);
  
  const one =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="1");
        setHistory(history="1")
      }
      else{
        setInput(input +="1");
        setHistory(history+="1")
      }
    }
    else{
      setInput(input ="1");
      setHistory(history="1")
      setBool(bool=false)
    }
  };

  const two =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="2");
        setHistory(history="2")
      }
      else{
        setInput(input +="2");
        setHistory(history+="2")
      }
    }
    else{
      setInput(input ="2");
      setHistory(history="2")
      setBool(bool=false)
    }
  };

  const three =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="3");
        setHistory(history="3")
      }
      else{
        setInput(input +="3");
        setHistory(history+="3")
      }
    }
    else{
      setInput(input ="3");
      setHistory(history="3")
      setBool(bool=false)
    }
  };

  const four =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="4");
        setHistory(history="4")
      }
      else{
        setInput(input +="4");
        setHistory(history+="4")
      }
    }
    else{
      setInput(input ="4");
      setHistory(history="4")
      setBool(bool=false)
    }
  };

  const five =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="5");
        setHistory(history="5")
      }
      else{
        setInput(input +="5");
        setHistory(history+="5")
      }
    }
    else{
      setInput(input ="5");
      setHistory(history="5")
      setBool(bool=false)
    }
  };

  const six =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="6");
        setHistory(history="6")
      }
      else{
        setInput(input +="6");
        setHistory(history+="6")
      }
    }
    else{
      setInput(input ="6");
      setHistory(history="6")
      setBool(bool=false)
    }
  };

  const seven =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="7");
        setHistory(history="7")
      }
      else{
        setInput(input +="7");
        setHistory(history+="7")
      }
    }
    else{
      setInput(input ="7");
      setHistory(history="7")
      setBool(bool=false)
    }
  };

  const eight =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="8");
        setHistory(history="8")
      }
      else{
        setInput(input +="8");
        setHistory(history+="8")
      }
    }
    else{
      setInput(input ="8");
      setHistory(history="8")
      setBool(bool=false)
    }
  };

  const nine =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="9");
        setHistory(history="9")
      }
      else{
        setInput(input +="9");
        setHistory(history+="9")
      }
    }
    else{
      setInput(input ="9");
      setHistory(history="9")
      setBool(bool=false)
    }
  };

  const zero =() =>{
    if(!bool){
      if(input=="0"){
        setInput(input ="0");
        setHistory(history="0")
      }
      else{
        setInput(input +="0");
        setHistory(history+="0")
      }
    }
    else{
      setInput(input ="0");
      setHistory(history="0")
      setBool(bool=false)
    }
  };
   
  const point =() =>{
    if(!input.includes("."))
    {
      setInput(input+=".")
      setHistory(history+=".")
    }
  };

  const multiply =() =>{
    setSign(sign="*")
    setfirstNumb(firstNumb = parseFloat(input))
    setInput(input="")
    setHistory(history+="x")

  };
  const divide =() =>{
    setSign(sign="/")
    setfirstNumb(firstNumb = parseFloat(input))
    setInput(input="")
    setHistory(history+=sign)

  };
  const minus =() =>{
    setSign(sign="-")
    setfirstNumb(firstNumb = parseFloat(input))
    setInput(input="")
    setHistory(history+=sign)
  };
  
  const minusplus =() =>{
    if(input.includes("-")){
      setInput(input=input.replace(/[^a-zA-Z0-9 ]/, ''));
      setHistory(history=history.replace(/[^a-zA-Z0-9 ]/, ''));
    }
    else{
      setInput(input="-"+input)
      setHistory(history="-"+history)
    }
  };

  const plus =() =>{
    setSign(sign="+")
    setfirstNumb(firstNumb = parseFloat(input))
    setInput(input="")
    setHistory(history+=sign)
  };


  const equal =() =>{
      if(sign === "+")
      {
        if(!bool)
        {
          setsecondNumb(secondNumb=parseFloat(input))
          setInput(input =firstNumb  + secondNumb)
          setHistory(history=  firstNumb + "+" + secondNumb + "=" + input)
        }
        else
        {
          setInput(input += secondNumb)
          setsecondNumb(secondNumb=2*secondNumb)
          setHistory(history=  firstNumb + "+" + secondNumb + "=" + input)
      
        }
      }
      else if(sign === "-")
      {
        if(!bool)
        {
          setsecondNumb(secondNumb=parseFloat(input))
          setInput(input =firstNumb -secondNumb)
          setHistory(history=  firstNumb + "-" + secondNumb + "=" + input)
        }
        else
        {
          setInput(input -= secondNumb)
          setsecondNumb(secondNumb=2*secondNumb)
          setHistory(history=  firstNumb + "-" + secondNumb + "=" + input)
        }
      }
      else if(sign === "*")
      { 
        if(!bool)
        {
          setsecondNumb(secondNumb=parseFloat(input))
          setInput(input =firstNumb  * secondNumb)
          setHistory(history=  firstNumb + "x" + secondNumb + "=" + input)
        }
        else
        {
          setInput(input *= secondNumb)
          setsecondNumb(secondNumb=2*secondNumb)
          setHistory(history=  firstNumb + "x" + secondNumb + "=" + input)
        }
      }
      else if(sign === "/")
      { 
        if(!bool)
        {
          setsecondNumb(secondNumb=parseFloat(input))
          setInput(input =firstNumb  / secondNumb)
          setHistory(history=  firstNumb + "/" + secondNumb + "=" + input)
        }
        else
        {
          setInput(input /= secondNumb)
          setsecondNumb(secondNumb=2*secondNumb)
          setHistory(history=  firstNumb + "/" + secondNumb + "=" + input)
        }
      }
      setBool(bool=true)
    
  };

  const reset =() =>{
    if(input=="0")
    {
      setHistory(history="");
    }
    setInput(input ="0")
    


  };

  return (
    <>
      <div className='container'>
      <input className='history' value={history} />
      <br />
      <input className='result' value={input} />
      <br/>
      <button className='btn-del' onClick={reset}>Del</button>
      <button className='btn' onClick={point}>.</button>
      <button className='btn' onClick={minus}>-</button>
      <br/>
      <button className='btn' onClick={seven}>7</button>
      <button className='btn' onClick={eight}>8</button>
      <button className='btn' onClick={nine}>9</button>
      <button className='btn' onClick={multiply}>x</button>
      <br />
      <button className='btn' onClick={four}>4</button>
      <button className='btn' onClick={five}>5</button>
      <button className='btn' onClick={six}>6</button>
      <button className='btn' onClick={divide}>/</button>
      <br/>
      <button className='btn' onClick={one}>1</button>
      <button className='btn' onClick={two}>2</button>
      <button className='btn' onClick={three}>3</button>
      <button className='btn' onClick={plus}>+</button>
      <br />
      <button className='btn' onClick={minusplus}>+/-</button>
      <button className='btn' onClick={zero}>0</button>
      <button className='btn-equal' onClick={equal}>=</button>
    </div>
   
    </>
  );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Example />);



