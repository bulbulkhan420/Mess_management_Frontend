import React from 'react';

export default function Button({ text, width }) {
  const wv = width || "80px";

  return (
    <div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-3 py-1 transition-colors duration-300"
        style={{ width: wv, margin: '5px 0' , fontSize: '10px'}}
      >
        {text}
      </button>
    </div>
  );
}
