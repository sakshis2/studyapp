import React, { useEffect, useRef, useState } from "react";
import BottomDashboard from "./BottomDashboard";
import "../CSS/Dashboard.css";
import { createClient } from "pexels";
// import parse from "html-react-parser";

function DashBoard({ email }) {
  const videoOneRef = useRef();
  const videoTwoRef = useRef();

  const client = createClient(
    "563492ad6f91700001000001db018554f3334f51822eb82cd780e101"
  );
  const [natureVideo, setNatureVideo] = useState("");
  const [playPause, setPlayPause] = useState({
    videoOne: false,
    videoTwo: false,
  });
  useEffect(() => {
    try {
      const pixelApi = async () => {
        let data = await client.videos
          .popular({
            min_width: 1920,
            landscape: "true",
          })
          .then()
          .catch((err) => console.log(err));

        data = await data?.videos;
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
      };
      pixelApi();
    } catch (err) {
      console.log(err);
    }

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "b6cf77fb79msh26a7e107983fd41p1dde5bjsnf78a945546e1",
    //     "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    //   },
    // };
    // const fetchData = async () => {
    //   try {
    //     let data = await fetch(
    //       "https://free-football-soccer-videos.p.rapidapi.com/",
    //       options
    //     );
    //     let apiData = await data.json(0);
    //     let videoStringArr = [];
    //     setVideosData((prev) => {
    //       apiData.map((e) => {
    //         videoStringArr.push(e?.videos[0].embed);
    //       });
    //       return videoStringArr;
    //     });
    //     // let src = apiData[0]?.videos[0].embed;
    //     // console.log(src);
    //     // let src = apiData[0]?.videos[0]?.embed;
    //     // src = src.split(" ");
    //     // for (let i = 0; i < src.length; i++) {
    //     //   if (src[i].includes("src")) {
    //     //     src = src[i];
    //     //     break;
    //     //   }
    //     // }
    //     // src = src.slice(5, -1);
    //     // console.log(videosData);

    //     // console.log(typeof src);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
  }, []);
  // const videoOne = parse(videosData[0]);
  // const videoTwo = parse(videosData[1]);
  return (
    <>
      {natureVideo === "" ? (
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
            {natureVideo !== "" ? (
              <>
                <div className="flex justify-center flex-col items-center">
                  <video
                    className="rounded-lg"
                    ref={videoOneRef}
                    src={natureVideo !== "" ? natureVideo[0][0]?.link : ""}
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
                    src={natureVideo !== "" ? natureVideo[1][0]?.link : ""}
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
            ) : (
              <div
                role="status"
                className="col-span-2 text-center flex justify-center"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>

              // <h1 className="text-9xl bg-black  text-center text-white w-full h-full">
              //   LOADING PLEASE WAIT
              // </h1>
            )}
          </div>
          <div className="h-full bg-violet-700 w-full">
            <BottomDashboard email={email} />
          </div>
        </div>
      )}

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
