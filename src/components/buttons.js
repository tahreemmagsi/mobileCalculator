import React, { useState } from "react";
import Inputdisplay from "./inputdisplay";

function Buttons() {
  const [value, setValue] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setValue("");
    } else if (buttonValue === "=") {
      setValue(eval(value));
    } else if (buttonValue === "X") {
      setValue(value.slice(0, -1));
    } else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  };

  const handlePercentageClick = () => {
    if (value) {
      setValue(value / 100);
    } else {
      setValue("Error");
    }
  };

  return (
    <>
      <Inputdisplay value={value} />
      <form className="mt-4 bg-gray-800 text-2xl p-4">
        <div className="flex">
          <div className="grid grid-cols-3 bg-gray-800 w-[20rem] ml-6  h-[20rem]  ">
            {["C", "/", "*", "7", "8", "9", "4", "5", "6", "1", "2", "3", "%", "0", "."].map((buttonValue, index) => (
              <input
                key={index}
                type="button"
                value={buttonValue}
                className={`btn ${buttonValue === "C" || buttonValue === "/" || buttonValue === "*" ? "text-blue-700" : "text-white"} bg-gray-800`}
                onClick={() => (buttonValue === "%" ? handlePercentageClick() : handleButtonClick(buttonValue))}
              />
            ))}
          </div>
          <div className="ml-10  h-[20rem] mr-4 flex flex-col ">
            {["X", "-", "+", "="].map((buttonValue, index) => (
              <input
                key={index}
                type="button"
                value={buttonValue}
                className={`btn mt-${index === 0 ? "4" : "[2rem]"} ${index === 3 ? "h-[7rem] w-[5rem] rounded-md bg-blue-700 text-white" : "bg-gray-800 text-blue-700"}`}
                onClick={() => handleButtonClick(buttonValue)}
              />
            ))}
          </div>
        </div>
      </form>
    </>
  );
}

export default Buttons;
