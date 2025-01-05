import React from 'react';
import { Grade , Subject } from '../types'; // Removed unused import 'Subject'
import { gradePoints } from '../utils/gradeCalculator';
import { Trash } from 'lucide-react';

interface SubjectRowProps {
  subject: Subject;
  onGradeChange: (grade: Grade) => void;
  onDelete: () => void;
}

export const SubjectRow: React.FC<SubjectRowProps> = ({ subject, onGradeChange, onDelete }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn group">
      <div className="flex-1">
        <h3 className="font-medium text-gray-800 dark:text-white">{subject.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subject.credits} credits</p>
      </div>
      <select
        value={subject.grade || ''}
        onChange={(e) => onGradeChange(e.target.value ? (e.target.value as Grade) : null)}
        className="p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
      >
        <option value="">Select Grade</option>
        {Object.entries(gradePoints).map(([grade]) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <button 
        onClick={onDelete}
        className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash className="w-4 h-4" />
      </button>
    </div>
  );
};