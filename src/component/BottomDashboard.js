import React,{useEffect, useState} from 'react'
import '../CSS/Dashboard.css'
import Question from './Question';
import QuestionList from './Question.json';
import app  from '../firebase'
import {getFirestore,collection,getDocs, addDoc} from "firebase/firestore"



function BottomDashboard({email}) {
  const [question,setQuestion] = useState([]);
  const [answer,setAnswer] = useState([])
  const [curr,setCurr] = useState(0)
  const db = getFirestore(app);
  const coll = collection(db,'answers');
  useEffect(()=>{
    let newQuestion = QuestionList.ques.slice(curr,curr+3);
    setQuestion(newQuestion);
  },[curr])
  const handleNext=()=>{
    setCurr(curr+3);
  }
  /*const handlePrev = () =>{
    setCurr(curr-3);
  }*/
  const handleSubmit = () =>{
    addDoc(coll,{
      id:email,
      answers:answer
    }).then(()=>console.log(answer))
    
  }
  const submitedAnswer = (qId,ans) =>{
    if(answer.length){
      let i=0;
      for(i=0;i<answer.length;i++){
        if(answer[i].qId===qId)
        break;
      }
      if(i<answer.length)
      {
        answer[i].ans=ans;
        setAnswer(answer);
        
      }else{
        setAnswer([...answer,{"qId":qId,"ans":ans}])
      }
    }
    else
    setAnswer([...answer,{"qId":qId,"ans":ans}])
    //console.log(answer)
  }
  return (
    <div className='BottomDashboard'>
      {question.map((que)=><Question ques={que} sAns={submitedAnswer}/>)}
      {/*<button onClick={handlePrev}>Prev</button>*/}
      <button onClick={handleNext}>Next</button>
      <button onClick={handleSubmit}>Submit</button>

    </div>
    
  )
}

export default BottomDashboard