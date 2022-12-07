import React, {useState} from 'react';

export function BumpsChartFilter({ chart, placeholder="Highlight", type = 'text', ...props }) {
  const [input, setInput] = useState("");

  function refreshView() {
    let year = parseInt(document.getElementById("start-year-selector").value);
    let numberOfYears = parseInt(document.getElementById("number-of-years-selector").value);
    let highlightTerm = document.getElementById("highlight-term-selector").value;
    chart.current.viewPeriodWithHighlight(year, numberOfYears, highlightTerm);
  }

  return (
    <div>
      <input
        id="highlight-term-selector"
        type={type}
        placeholder="Enter highlight term"
        {...props}
        className="inline appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
      <input
        id="start-year-selector"
        type="text"
        placeholder="Enter year"
        {...props}
        className="inline appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
      <input
        id="number-of-years-selector"
        type="text"
        defaultValue="10"
        {...props}
        className="inline appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
      <button type="button"
        onClick={refreshView}>Update</button>
    </div>
  )
}
