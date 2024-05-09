import React from 'react';
import { MdKeyboardBackspace } from "react-icons/md";

function HistoryDisplay({ history, onClear, onCutExpression, onBackIcon }) {
  return (
    <>
      <div className="flex items-center mb-4">
        <MdKeyboardBackspace className='text-blue-500 mr-2 cursor-pointer' onClick={onBackIcon} />
        <h2 className="text-gray-200 text-lg font-bold mb-2 ">History</h2>
      </div>
      {history.length > 0 ? (
        <>
          <table className="text-gray-200 border-collapse border border-gray-400 w-auto h-auto">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Expression</th>
                <th className="border border-gray-400 px-4 py-2">Result</th>
                <th className="border border-gray-400 px-4 py-2">Cut</th> 
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{item.expression}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.result}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      <button className="text-red-500" onClick={() => onCutExpression(item)}>X</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="text-blue-500 mt-2" onClick={onClear}>Clear</button>
        </>
      ) : (
        <p className="text-blue-500 text-lg">History is empty</p>
      )}
    </>
  );
}

export default HistoryDisplay;
