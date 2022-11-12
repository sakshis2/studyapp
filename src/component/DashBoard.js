import React from "react";
import BottomDashboard from "./BottomDashboard";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import "../CSS/Dashboard.css";
import TestComponent from "./TestComponent";
import "../CSS/videoButton.css";

function DashBoard({ email }) {
  // const videoElement = document.querySelector("video");
  // const playPauseButton = document.querySelector("button");

  // playPauseButton.addEventListener("click", () => {
  //   playPauseButton.classList.toggle("playing");
  //   if (playPauseButton.classList.contains("playing")) {
  //     videoElement.play();
  //   } else {
  //     videoElement.pause();
  //   }
  // });

  // videoElement.addEventListener("ended", () => {
  //   playPauseButton.classList.remove("playing");
  // });

  return (
    //baccha mai khana kha ke aata hu
    <>
      <div className="h-screen flex flex-col ">
        <div className="bg-violet-500 flex md:flex-row justify-between gap-4 p-4 flex-col ">
          <div className="video-container">
            <video className="" controls>
              <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
              />
            </video>

            {/* <button className="video-control">
              <span className="video-control-play">
                <span className="video-control-symbol" aria-hidden="true">
                  ▶️
                </span>
                <span className="video-control-label">Play</span>
              </span>
              <span className="video-control-pause">
                <span className="video-control-symbol" aria-hidden="true">
                  ⏸
                </span>
                <span className="video-control-label">Pause</span>
              </span>
            </button> */}
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
