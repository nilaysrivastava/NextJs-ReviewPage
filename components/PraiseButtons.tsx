"use client";

import React, { useState } from "react";

function PraiseButtons(props) {
  const [isGreen, setIsGreen] = useState(false);

  const handleOnClick = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div>
      <button
        className="praise-button px-2 py-1 m-1"
        style={{
          border: "1px solid",
          borderColor: isGreen ? "white" : "black",
          borderRadius: "8px",
          backgroundColor: isGreen ? "green" : "white",
          color: isGreen ? "white" : "black",
          fontSize: "0.9rem",
        }}
        onClick={handleOnClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default PraiseButtons;
