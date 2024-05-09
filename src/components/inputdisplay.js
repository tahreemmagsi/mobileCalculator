
import React from 'react';
import { FaHistory } from 'react-icons/fa';

function Inputdisplay({ value, onHistoryIconClick}) {
  return (
    <div className="relative bg-black p-4 h-[5rem] text-gray-200 text-2xl font-mono">
      <FaHistory className="absolute top-1 left-1 text-md text-white mt-1 ml-1 cursor-pointer" onClick={onHistoryIconClick} />
      {value}
    </div>
  );
}

export default Inputdisplay;
