import React, { useEffect, useState } from "react";
// import "../CSS/Dashboard.css";

function Question({ ques, sAns }) {
  const submitAnswer = (e) => {
    sAns(ques.id, e.target.value);
  };
  useEffect(() => {
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;
  }, [ques.id]);

  return (
    <div className="flex flex-col bg-sky-500 m-4 sm:flex-row p-2">
      {/* {console.log(ques.id)} */}
      <div className="w-full flex m-4 self-center ">{ques.Name}</div>
      <div className="flex w-fit gap-4">
        <div className="flex m-4 items-center mr-0 pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            type="radio"
            // defaultValue=""
            id="no"
            name={ques.id}
            value="no"
            className=" w-10  h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={ques.id}
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            No
          </label>
        </div>
        <div className="flex m-4 ml-0 items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            // defaultChecked=""
            type="radio"
            // defaultValue=""
            id="yes"
            name={ques.id}
            value="yes"
            className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={ques.id}
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Yes
          </label>
        </div>

        {/* <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                defaultValue=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                defaultValue=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>
          </li>
        </ul> */}
      </div>
    </div>

    // <div className="questions">
    //   <div className="question">
    //     <input
    //       className="question"
    //       type="text"
    //       readOnly
    //       placeholder={ques.Name}
    //     ></input>
    //   </div>
    //   <div className="answer" onChange={(e) => submitAnswer(e)}>
    //     Yes <input type="radio" id="yes" name={ques.id} value="yes"></input>
    //     No <input type="radio" id="no" name={ques.id} value="no"></input>
    //   </div>
    // </div>
  );
}

export default Question;
