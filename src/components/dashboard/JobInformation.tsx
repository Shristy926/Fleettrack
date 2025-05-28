import React from "react";

const JobInformation: React.FC = () => {
  const total = 3000;
  const completed = 1000;
  const running = 1500;
  const notStarted = 500;

  const getPercentage = (count: number) => (count / total) * 100;

  return (
    <div className="bg-white rounded-xl p-3 shadow-md w-[360px] text-sm">
      <div className="flex justify-between items-start mb-2">
        <h2 className="font-semibold text-sm">Job Information</h2>
        <div className="text-right">
          <p className="text-xs text-gray-500">Total</p>
          <p className="text-xl font-semibold text-teal-600">{total}</p>
        </div>
      </div>

      <div className="space-y-2">
        {/* Completed */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-700 w-24">Completed</span>
          <div className="flex-1 h-3 bg-gray-200 rounded-full mx-2">
            <div
              className="h-3 bg-green-500 rounded-full"
              style={{ width: `${getPercentage(completed)}%` }}
            />
          </div>
          <span className="text-xs text-green-600">{completed}</span>
        </div>

        {/* Running */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-700 w-24">Running</span>
          <div className="flex-1 h-3 bg-gray-200 rounded-full mx-2">
            <div
              className="h-3 bg-blue-500 rounded-full"
              style={{ width: `${getPercentage(running)}%` }}
            />
          </div>
          <span className="text-xs text-blue-600">{running}</span>
        </div>

        {/* Not Started */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-700 w-24">Not Started</span>
          <div className="flex-1 h-3 bg-gray-200 rounded-full mx-2">
            <div
              className="h-3 bg-gray-500 rounded-full"
              style={{ width: `${getPercentage(notStarted)}%` }}
            />
          </div>
          <span className="text-xs text-gray-600">{notStarted}</span>
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
