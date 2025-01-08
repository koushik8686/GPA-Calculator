import React from 'react';
import { ChevronDown, ChevronUp, Trash, Plus } from 'lucide-react';
import { Semester , Grade } from '../types';
import { SubjectRow } from './SubjectRow';
import { calculateGPA } from '../utils/gradeCalculator';

interface SemesterAccordionProps {
  semester: Semester;
  isOpen: boolean;
  onToggle: () => void;
  onGradeChange: (subjectId: string, grade: Grade) => void;
  onDelete: () => void;
  onDeleteSubject: (subjectId: string) => void;
  onAddSubject: () => void;
}


export const SemesterAccordion: React.FC<SemesterAccordionProps> = ({
  semester,
  isOpen,
  onToggle,
  onGradeChange,
  onDelete,
  onDeleteSubject,
  onAddSubject,
}) => {
  const semesterGPA = calculateGPA(semester.subjects);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center">
        <button
          onClick={onToggle}
          className="flex-1 px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{semester.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">GPA:</span>
              <span className="text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">
                {semesterGPA}
              </span>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        <div className="pr-4 flex items-center space-x-2">
          <button
            onClick={onAddSubject}
            className="p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:opacity-100 transition-opacity"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 group-hover:opacity-100 transition-opacity"
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-4 space-y-4">
          {semester.subjects.map((subject) => (
            <SubjectRow
              key={subject.id}
              subject={subject}
              onGradeChange={(grade) => onGradeChange(subject.id, grade)}
              onDelete={() => onDeleteSubject(subject.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};