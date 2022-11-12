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
        <i className="bx bxs-volume-full"></i>
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

        {/* <>
          <button
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            data-modal-toggle="popup-modal"
          >
            Toggle modal
          </button>
          <div
            id="popup-modal"
            tabIndex={-1}
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
            aria-hidden="true"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </> */}
      </div>
    </div>
  );
}

export default BottomDashboard;
