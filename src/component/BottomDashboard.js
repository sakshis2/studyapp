import React, { useEffect, useState } from "react";
import "../CSS/Dashboard.css";
import Question from "./Question";
import QuestionList from "./Question.json";
import app from "../firebase";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

function BottomDashboard({ email }) {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [curr, setCurr] = useState(0);
  const db = getFirestore(app);
  const coll = collection(db, "answers");
  useEffect(() => {
    let newQuestion = QuestionList.ques.slice(curr, curr + 3);
    setQuestion(newQuestion);
  }, [curr]);
  const handleNext = () => {
    setCurr(curr + 3);
  };
  const handlePrev = () => {
    setCurr(curr - 3);
  };
  const handleSubmit = () => {
    addDoc(coll, {
      id: email,
      answers: answer,
    }).then(() => console.log(answer));
  };
  const submitedAnswer = (qId, ans) => {
    if (answer.length) {
      let i = 0;
      for (i = 0; i < answer.length; i++) {
        if (answer[i].qId === qId) break;
      }
      if (i < answer.length) {
        answer[i].ans = ans;
        setAnswer(answer);
      } else {
        setAnswer([...answer, { qId: qId, ans: ans }]);
      }
    } else setAnswer([...answer, { qId: qId, ans: ans }]);
    //console.log(answer)
  };
  return (
    <div className="">
      {question.map((que) => (
        <Question key={que.id} ques={que} sAns={submitedAnswer} />
      ))}
      <div className="flex justify-end mr-4">
        {QuestionList.ques[0]?.id !== question[0]?.id && (
          <button
            onClick={handlePrev}
            type="button"
            // disabled={QuestionList.ques[0]?.id === question[0]?.id}
            className="text-white bg-gradient-to-r from-purple-500  to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Prev
          </button>
        )}
        {QuestionList.ques[QuestionList.ques.length - 1]?.id !==
        question[question.length - 1]?.id ? (
          <button
            type="button"
            onClick={handleNext}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default BottomDashboard;
