// Buttons.js
import React, { useState } from "react";
import Inputdisplay from "./inputdisplay";
import HistoryDisplay from "./history";

function Buttons() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setValue("");
    } else if (buttonValue === "=") {
      const result = eval(value);
      setValue(result);
      setHistory([...history, { expression: value, result }]);
    } else if (buttonValue === "X") {
      setValue(value.slice(0, -1));
    } else if (buttonValue === "%") {
      if (value) {
        const percentage= value/100
        setValue(percentage);
        setHistory([...history,{expression: `${value}%`,result:percentage}])
      } else {
        setValue("Error");
      }
    } else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  };

  const handleHistoryIconClick = () => {
    setShowHistory(!showHistory);
  };
  const handleBackIconClick = () => {
    setShowHistory(!showHistory);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };
  
  
  const handleCutExpression=()=>{
    setHistory(history.slice(0,-1));
  }

  return (
    <>
      <Inputdisplay
        value={value}
        onHistoryIconClick={handleHistoryIconClick}
      />
      <form className="mt-4 bg-gray-800 text-2xl p-4 w-auto h-auto">
        {showHistory && <HistoryDisplay history={history} onClear={handleClearHistory} onCutExpression={handleCutExpression} onBackIcon={handleBackIconClick}
 />}
        {!showHistory && (
          <div className="flex ">
            <div className="grid grid-cols-3 bg-gray-800 w-[20rem] ml-6 h-[20rem]">
              {["C", "/", "*", "7", "8", "9", "4", "5", "6", "1", "2", "3", "%", "0", "."].map((buttonValue, index) => (
                <input
                  key={index}
                  type="button"
                  value={buttonValue}
                  className={`btn ${buttonValue === "C" || buttonValue === "/" || buttonValue === "*" ? "text-blue-700" : "text-white"} bg-gray-800`}
                  onClick={() => handleButtonClick(buttonValue)}
                />
              ))}
            </div>
            <div className="ml-10 h-[20rem] mr-4 flex flex-col">
              {["X", "-", "+", "="].map((buttonValue, index) => (
                <input
                  key={index}
                  type="button"
                  value={buttonValue}
                  className={`btn mt-${index === 0 ? "4" : "4"} ${index === 3 ? "h-[7rem] mt-[2rem] w-[5rem] rounded-md bg-blue-700 text-white" : "bg-gray-800 text-blue-700"}`}
                  onClick={() => handleButtonClick(buttonValue)}
                />
              ))}
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default Buttons;
