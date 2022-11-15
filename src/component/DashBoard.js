import React, { useEffect, useRef, useState } from "react";
import BottomDashboard from "./BottomDashboard";
import { createClient } from "pexels";

function DashBoard({ email, setLogin, sethandleEmail }) {
  const videoOneRef = useRef();
  const videoTwoRef = useRef();

  const client = createClient(
    "563492ad6f91700001000001db018554f3334f51822eb82cd780e101"
  );
  const [natureVideo, setNatureVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [someThingWentWrong, setsomeThingWentWrong] = useState(false);
  const [playPause, setPlayPause] = useState({
    videoOne: false,
    videoTwo: false,
  });
  useEffect(() => {
    const pixelApi = () => {
      setIsLoading(true);
      client.videos
        .popular({
          min_width: 1920,
          landscape: "true",
        })
        .then((e) => {
          let data = e?.videos;
          setNatureVideo((prev) => {
            return data
              .map((e) => {
                return e.video_files.filter((e) => {
                  return e.width === 1920;
                });
              })
              .filter((e) => {
                return e.length !== 0;
              })
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value);
          });
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setsomeThingWentWrong(true);
        })
        .finally((e) => {
          console.log(natureVideo);
        });
    };
    pixelApi();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="flex flex-col">
            <div className="flex space-x-24">
              <div className="container space-y-10 relative">
                <div className="flex flex-col">
                  <div
                    className="w-12 h-12 rounded-full animate-spin
            border-y-8 border-solid border-purple-500 border-t-transparent shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col ">
          <div className="bg-violet-500 grid grid-cols-1 md:grid-cols-2 justify-between gap-4 p-4 flex-col  ">
            {someThingWentWrong ? (
              <h1 className="col-span-2 text-4xl  text-red-500 flex justify-center ">
                Some thing Went wrong :(
              </h1>
            ) : (
              <>
                <div className="flex justify-center flex-col items-center">
                  <video
                    className="rounded-lg"
                    ref={videoOneRef}
                    src={
                      natureVideo.length !== 0 ? natureVideo[0][0]?.link : ""
                    }
                    // src={
                    //   "https://media.istockphoto.com/id/1337177460/video/camera-slowly-moving-through-alpine-meadow-with-colorful-flowers.mp4?s=mp4-640x640-is&k=20&c=3aLBWza8GzZV7eOL9ooLgJG9JCGP-Mb8cyoQKvE6yDA="
                    // }
                    // controls
                    autoPlay={false}
                    loop
                  ></video>
                  <div
                    className="bg-violet-600 rounded-md mt-4 p-2"
                    onClick={(e) => {
                      if (playPause.videoOne) {
                        videoOneRef.current.pause();
                      } else {
                        videoOneRef.current.play();
                      }

                      setPlayPause((ele) => ({
                        ...ele,
                        videoOne: !ele.videoOne,
                      }));
                    }}
                  >
                    {playPause.videoOne ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path d="M28.25 38.55V9.45h8.55v29.1Zm-17.05 0V9.45h8.55v29.1Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path d="M15.7 38.4V9.3l22.85 14.55Zm3.4-14.55Zm0 8.35 13.15-8.35L19.1 15.5Z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <video
                    className="rounded-lg"
                    ref={videoTwoRef}
                    src={
                      natureVideo.length !== 0 ? natureVideo[1][0]?.link : ""
                    }
                    // controls
                    // src={
                    //   "https://media.istockphoto.com/id/1337177460/video/camera-slowly-moving-through-alpine-meadow-with-colorful-flowers.mp4?s=mp4-640x640-is&k=20&c=3aLBWza8GzZV7eOL9ooLgJG9JCGP-Mb8cyoQKvE6yDA="
                    // }
                    autoPlay={false}
                    loop
                  ></video>
                  <div
                    className="bg-violet-600 rounded-md mt-4 p-2"
                    onClick={() => {
                      if (playPause.videoTwo) {
                        videoTwoRef.current.pause();
                      } else {
                        videoTwoRef.current.play();
                      }

                      setPlayPause((ele) => ({
                        ...ele,
                        videoTwo: !ele.videoTwo,
                      }));
                    }}
                  >
                    {playPause.videoTwo ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path d="M28.25 38.55V9.45h8.55v29.1Zm-17.05 0V9.45h8.55v29.1Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path d="M15.7 38.4V9.3l22.85 14.55Zm3.4-14.55Zm0 8.35 13.15-8.35L19.1 15.5Z" />
                      </svg>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="h-full bg-violet-700 w-full">
            <BottomDashboard
              email={email}
              sethandleEmail={sethandleEmail}
              setLogin={setLogin}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DashBoard;
