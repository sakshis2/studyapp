import React, { useEffect, useState } from "react";
import "../CSS/Dashboard.css";

function Question({ ques, sAns }) {
  const submitAnswer = (e) => {
    sAns(ques.id, e.target.value);
  };
  useEffect(() => {
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;
  }, [ques.id]);

  return (
    <div className="flex bg-sky-500 m-4">
      <div className="w-full p-2">{ques.Name}</div>
      <div className="flex w-fit gap-4">
        <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            type="radio"
            defaultValue=""
            id="no"
            name={ques.id}
            value="no"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="no"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            No
          </label>
        </div>
        <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            defaultChecked=""
            type="radio"
            defaultValue=""
            id="yes"
            name={ques.id}
            value="yes"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="yes"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Yes
          </label>
        </div>
      </div>
    </div>

    // <div className='questions'>
    //     <div className='question'>
    //         <input className = 'question' type="text" readOnly placeholder={ques.Name}></input>
    //     </div>
    //     <div className='answer' onChange={(e)=>submitAnswer(e)}>
    //         Yes <input type="radio"  id="yes" name={ques.id} value="yes" ></input>
    //         No <input type="radio"  id="no" name={ques.id} value="no" ></input>
    //     </div>
    // </div>
  );
}

export default Question;
