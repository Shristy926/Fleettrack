import React from 'react';

const JobInformation = () => {
  const total = 3000;
  const completed = 1000;
  const running = 1500;
  const notStarted = 500;

  const getBarWidth = (value: number) => `${(value / total) * 100}%`;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full text-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-semibold text-gray-800">Job Information</h2>
        <span className="text-xl font-bold text-green-700">Total {total}</span>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <div className="flex justify-between text-gray-600">
            <span>Completed</span>
            <span>{completed}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: getBarWidth(completed) }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-gray-600">
            <span>Running</span>
            <span>{running}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: getBarWidth(running) }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-gray-600">
            <span>Not Started</span>
            <span>{notStarted}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: getBarWidth(notStarted) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
