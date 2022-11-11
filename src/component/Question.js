import React,{useEffect, useState} from 'react'
import '../CSS/Dashboard.css' 

function Question({ques,sAns}) {
   
    const submitAnswer = (e) =>{
        sAns(ques.id,e.target.value)
    }
    useEffect(()=>{
        document.getElementById('yes').checked = false;
        document.getElementById('no').checked = false;
    },[ques.id])

  return (
    <div className='questions'>
        <div className='question'>
            <input className = 'question' type="text" readOnly placeholder={ques.Name}></input>
        </div>
        <div className='answer' onChange={(e)=>submitAnswer(e)}>
            Yes <input type="radio"  id="yes" name={ques.id} value="yes" ></input>
            No <input type="radio"  id="no" name={ques.id} value="no" ></input>
        </div>
    </div>
  )
}

export default Question