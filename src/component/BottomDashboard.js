import React, { useEffect, useRef, useState, Fragment } from "react";
import "../CSS/Dashboard.css";
import Question from "./Question";
import QuestionList from "./Question.json";
import app from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function BottomDashboard({ email, setLogin, sethandleEmail }) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
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
    console.log(answer);
    addDoc(coll, {
      id: email,
      answers: answer,
    }).then(() => {
      sethandleEmail("");
      setLogin(false);
    });
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
          <>
            <button
              type="button"
              onClick={() => {
                setOpen(true);
              }}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </>
        )}
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Submit Details
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to Submit?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setOpen(false);
                        handleSubmit();
                      }}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default BottomDashboard;
