import React from "react";

export default function TestComponent() {
  return (
    <div>
      <video
        height={200}
        width={200}
        style={{ position: "absolute", zIndex: 10 }}
        controls
      >
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
