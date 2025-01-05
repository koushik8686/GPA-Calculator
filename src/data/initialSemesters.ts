import { Semester } from '../types';

export const initialSemesters: Semester[] = [
  {
    id: 'sem-1',
    name: 'Semester 1',
    subjects: [
      { id: 'dsma', name: 'Discrete Structures and Matrix Algebra', credits: 4, grade: 'A' },
      { id: 'cp', name: 'Computer Programming', credits: 4, grade: 'B' },
      { id: 'dld', name: 'Digital Logic Design', credits: 4, grade: 'C' },
      { id: 'ocw', name: 'Overview of Computers Workshop', credits: 4, grade: 'B' },
      { id: 'ee', name: 'Energy and Environment', credits: 2, grade: 'C' },
    ],
  },
  {
    id: 'sem-2',
    name: 'Semester 2',
    subjects: [
      { id: 'ps', name: 'Probability and Statistics', credits: 4, grade: 'C' },
      { id: 'dsa', name: 'Data Structures and Algorithms', credits: 4, grade: 'B' },
      { id: 'ss', name: 'Signals and Systems', credits: 4, grade: 'B' },
      { id: 'ca', name: 'Computer Architecture', credits: 4, grade: 'C' },
      { id: 'oc', name: 'Operational Communication', credits: 2, grade: 'B' },
      { id: 'fhv', name: 'Foundation in Human Values and Ethics', credits: 2, grade: 'D' },
    ],
  },
  {
    id: 'sem-3',
    name: 'Semester 3',
    subjects: [
      { id: 'oop', name: 'Object Oriented Programming', credits: 4, grade: 'C' },
      { id: 'ranc', name: 'Real Analysis, Numerical Analysis, and Calculus', credits: 4, grade: 'D' },
      { id: 'dbms', name: 'Data Base Management System', credits: 4, grade: 'B' },
      { id: 'adsa', name: 'Advanced Data Structures and Algorithms', credits: 4, grade: 'A' },
      { id: 'os', name: 'Operating Systems', credits: 4, grade: 'B' },
      { id: 'cci', name: 'Climate Change and Implication', credits: 2, grade: 'B' },
      { id: 'pc', name: 'Professional Communication', credits: 2, grade: 'C' },
    ],
  },
  {
    id: 'sem-4',
    name: 'Semester 4',
    subjects: [
      { id: 'ccn', name: 'Computer and Communication Networks', credits: 4, grade: 'B' },
      { id: 'ffsd', name: 'Fundamentals of Full Stack Development', credits: 4, grade: 'A' },
      { id: 'ai', name: 'Artificial Intelligence', credits: 4, grade: 'D' },
      { id: 'toc', name: 'Theory of Computation', credits: 4, grade: 'A' },
      { id: 'acs', name: 'Advanced Communication Skills', credits: 2, grade: 'C' },
      { id: 'qic', name: 'Quantum Information and Computing', credits: 2, grade: 'C' },
    ],
  },
  {
    id: 'sem-5',
    name: 'Semester 5',
    subjects: [
      { id: 'fdfed', name: 'FDFED', credits: 4, grade: null },
      { id: 'ics', name: 'ICS', credits: 3, grade: null },
      { id: 'ml', name: 'ML', credits: 3, grade: null },
      { id: 'cc', name: 'CC', credits: 3, grade: null },
      { id: 'nlp', name: 'NLP', credits: 3, grade: null },
      { id: 'qra', name: 'QRA', credits: 2, grade: null },
      { id: 'se', name: 'SE', credits: 2, grade: null },
    ],
  },
];