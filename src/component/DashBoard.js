import React from "react";
import BottomDashboard from "./BottomDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import "../CSS/Dashboard.css";
import TestComponent from "./TestComponent";

function DashBoard({ email }) {
  return (
    //baccha mai khana kha ke aata hu
    <>
      <div className="h-screen flex flex-col ">
        <div className="bg-violet-500 flex md:flex-row justify-between gap-4 p-4 flex-col ">
          <div>
            <video className="" controls>
              <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <video className="" controls>
              <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="h-full bg-violet-800 w-full">
          <BottomDashboard email={email} />
        </div>
      </div>

      {/* <div className="backgroundDashboard">
        <div className="leftDashboard">
          <LeftDashboard />
        </div>
        <div class="play-button-outer">
          <div class="play-button"></div>
        </div>
        <div className="rightDashboard">
          <RightDashboard />
        </div>
        <div className="bottomDashboard">
        </div>
      </div> */}
    </>
  );
}

export default DashBoard;
