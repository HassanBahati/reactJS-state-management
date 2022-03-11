import React, { useState, useEffect } from "react";

function App() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    console.log("btn 1 has changed ");
    console.log(btn1)
    console.log(btn2)
    console.log(btn3)
    console.log(btn4)
    if (clickedButton === "btn1") {
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
      console.log("btn 1 has changed ");
    }

    if (clickedButton === "btn2") {
      setBtn1(false);
      setBtn3(false);
      setBtn4(false);
    }

    if (clickedButton === "btn3") {
      setBtn2(false);
      setBtn1(false);
      setBtn4(false);
    }

    if (clickedButton === "btn4") {
      setBtn1(false);
      setBtn3(false);
      setBtn2(false);
    }
  }, [btn1, btn2, btn3, btn4]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setBtn1(true);
          setClickedButton("btn1")
        }}
      >
        Button 1 {btn1 ? "true" : "false"} {btn1}
      </button>
      <br />

      <button
        onClick={() => {
          setBtn2(true);
          setClickedButton("btn2")
        }}
      >
        Button 2 {btn2 ? "true" : "false"}
        {btn2}
      </button>
      <br />

      <button
        onClick={() => {
          setBtn3(true);
          setClickedButton("btn3")
        }}
      >
        Button 3 {btn3 ? "true" : "false"}
        {btn3}
      </button>
      <br />

      <button
        onClick={() => {
          setBtn4(true);
          setClickedButton("btn4")
        }}
      >
        {/* input field, button, etc */}
        Button 4{btn4 ? "true": "false"}
     
      </button>
      <br />
    </div>
  );
}

export default App;
