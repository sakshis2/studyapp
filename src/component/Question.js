import React, { useEffect, useRef } from "react";

function Question({ ques, sAns }) {
  const Radioinput = useRef(null);
  const submitAnswer = (e) => {
    sAns(ques.id, e.target.value);
  };
  useEffect(() => {
    Radioinput.current.checked = false;
  }, [ques.id]);

  return (
    <div
      onChange={(e) => submitAnswer(e)}
      className="flex flex-col bg-sky-500 m-4 sm:flex-row p-2"
    >
      <div className="w-full flex m-4 self-center ">{ques.Name}</div>

      <div className="flex w-fit gap-4">
        <div className="flex justify-center h-12 items-center rounded border border-gray-200 dark:border-gray-700">
          <label className="w-full text-sm items-center m-6 flex font-medium text-gray-900 dark:text-gray-300 ">
            <input
              ref={Radioinput}
              type="radio"
              id="no"
              name={ques.id}
              value="no"
              className="w-4 h-4 text-blue-600 mr-2"
            />
            No
          </label>
        </div>
        <div className="flex w-fit gap-4">
          <div className="flex justify-center h-12 items-center rounded border border-gray-200 dark:border-gray-700">
            <label className="w-full text-sm items-center m-6 flex font-medium text-gray-900 dark:text-gray-300 ">
              <input
                ref={Radioinput}
                type="radio"
                id="yes"
                name={ques.id}
                value="yes"
                className="w-4 h-4 text-blue-600 mr-2"
              />
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;

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
