const App = () =>{
   // const desc= `I see you`

   let operator="";
   let upper = document.querySelector('#record')
   let down = document.querySelector('#bar')
   let firstnumber;
   let secondnumber;
   const number=(parameter)=>{
       down=document.getElementById('bar');
       down.innerHTML+=parameter
}
   const op=(signs)=>{
   if (operator!==""){
       return
   }
down=document.getElementById('bar')
upper=document.getElementById('record')
   firstnumber = down.innerHTML
   upper.innerHTML = firstnumber + signs
   down.innerHTML=('')
   operator = signs
   }
  function put()
   {
       secondnumber = parseInt(document.querySelector('#bar').innerHTML)
      
   }
   const equals=()=>{
     
       if (operator === '+'){
           upper.innerHTML+=down.innerHTML + '='
      document.querySelector('#bar').innerHTML=Number(firstnumber) + Number(secondnumber)
       }
   else  if(operator === '-'){
   
   
   upper.innerHTML+=down.innerHTML + '='
   document.querySelector('#bar').innerHTML=Number(firstnumber) - Number(secondnumber)
   
   
   }
   else  if(operator === '*'){
   
   upper.innerHTML+=down.innerHTML + '='
           document.querySelector('#bar').innerHTML=Number(firstnumber) * Number(secondnumber)
   
   
   }
   else  if(operator === '/'){
   
   upper.innerHTML+=down.innerHTML + '='
           document.querySelector('#bar').innerHTML=Number(firstnumber) / Number(secondnumber)
   
   
   }
   else  if(operator === '%'){
   
   upper.innerHTML+=down.innerHTML + '='
           document.querySelector('#bar').innerHTML=Number(firstnumber)/100 * Number(secondnumber)
   
   
   }
    
   operator='';
   
 }
   const everything=()=>{
   down.innerHTML="";
   upper.innerHTML="";
   
   document.getElementById('space').style.border=''
   }
   const del=(parameter)=>{
   if(upper.innerHTML!==""){
       upper.innerHTML="";
       return
   }
   
   down.innerHTML=down.innerHTML.slice(0,-1)
   }
   




   return(
      <div className="main" id="calculator" >
         {/* <h1 style={{color: ""}}>Solana</h1>
         <input type="text" name="" id="first" />
         <input type="text" name="" id="Second" />
         <input type="text" name="" id="Third" /> */}
         {/* <button className="btn btn-danger" onClick={()=> showNumber("Oluwagbemiga")}>Login</button> */}
         {/* <p id="final"></p>
         <button onClick={showNumber} className="btn btn-warning">ADD</button> */}
{/* <h3 className="header">Calculator</h1> */}
<h3 className="header">Calculator</h3>
<div  id="space" className="space">
 <h3 id="record"></h3>
    <h1   id="bar"></h1></div>

<button className="ms">MC</button>
<button className="ms">MR</button>
<button className="ms">M+</button>
<button className="ms">M-</button>
<button className="ms">MS</button>
<button className="ms">M </button>

    <button onClick={()=> op('%')} style={{marginLeft: "5px"}} className="functions">%</button>

<button onClick={everything} className="functions">CE</button>

<button className="functions">C</button>

<button onClick={del}  className="functions">DEL</button>


<button style={{marginLeft: "5px"}} className="functions1">⅟x</button>

<button className="functions1">X</button>

<button className="functions1">√</button>

<button onClick={()=> op('/')}  className="functions1">÷</button>


<button onClick={()=> number("7")} style={{marginLeft: "5px"}} className="functions2"><strong className="strong">7</strong></button>

<button onClick={()=> number(8)} className="functions2"><strong className="strong">8</strong></button>

<button onClick={()=> number(9)} className="functions2"><strong className="strong">9</strong></button>

<button onClick={()=> op('*')}  className="functions2"><strong className="strong">x</strong></button>


<button onClick={()=> number(4)} style={{marginLeft: "5px"}} className="functions3"><strong className="strong">4</strong></button>

<button onClick={()=> number(5)} className="functions3"><strong className="strong">5</strong></button>

<button onClick={()=> number(6)} className="functions3"><strong className="strong">6</strong></button>

<button onClick={()=> op('-')}  className="functions3"><strong className="strong">-</strong></button>


<button onClick={()=> number(1)} style={{marginLeft: "5px"}} className="functions4"><strong className="strong">1</strong></button>

<button onClick={()=> number(2)} className="functions4"><strong className="strong">2</strong></button>

<button onClick={()=> number(3)} className="functions4"><strong className="strong">3</strong></button>

<button onClick={()=> op('+')} className="functions4"><strong className="strong">+</strong></button>


<button style={{marginLeft: "5px"}} className="functions5"><strong className="strong">±</strong></button>

<button onClick={()=> number(0)} className="functions5"><strong className="strong">0</strong></button>

<button  className="functions5"><strong className="strong">.</strong></button>

<button onClick={()=> equals('=')} className="functions6"><strong className="strong">=</strong></button>

{/* <input type="text" id="one"/>

<input type="text" id="two"/>
<button onClick={add}></button>
<p>ans: <span id="fin"></span></p> */}
      </div>
         )
}


export default App;