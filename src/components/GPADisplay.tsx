import React from 'react';

interface GPADisplayProps {
  gpa: number;
}

export const GPADisplay: React.FC<GPADisplayProps> = ({ gpa }) => (
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 p-8 rounded-lg shadow-lg animate-slideUp text-white">
    <h2 className="text-3xl font-bold text-center">
      Overall GPA
    </h2>
    <div className="text-5xl font-bold text-center mt-2">
      {gpa}
    </div>
  </div>
);