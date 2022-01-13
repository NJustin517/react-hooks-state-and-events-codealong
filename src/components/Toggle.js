import React, { useState } from "react";

function Toggle() {
  const [isOn, setOn] = useState(false);
  return (
    <button
      style={isOn ? { background: "white" } : { background: "red" }}
      onClick={() => setOn(!isOn)}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
