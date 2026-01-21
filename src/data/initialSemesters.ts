import { Semester } from '../types';

export const initialSemesters: Semester[] = [
  {
    id: 'sem-1',
    name: 'Semester 1',
    subjects: [
      { id: 'cp', name: 'Computer Programming', credits: 4, grade: 'B' },
      { id: 'dsma', name: 'Discrete Structures and Matrix Algebra', credits: 4, grade: 'A' },
      { id: 'ocw', name: 'Overview of Computers Workshop', credits: 4, grade: 'B' },
      { id: 'ee', name: 'Energy and Environment', credits: 2, grade: 'C' },
      { id: 'dld', name: 'Digital Logic Design', credits: 4, grade: 'C' },
    ],
  },
  {
    id: 'sem-2',
    name: 'Semester 2',
    subjects: [
      { id: 'ps', name: 'Probability and Statistics', credits: 4, grade: 'C' },
      { id: 'dsa', name: 'Data Structures and Algorithms', credits: 4, grade: 'B' },
      { id: 'ca', name: 'Computer Architecture', credits: 4, grade: 'C' },
      { id: 'oc', name: 'Operational Communication', credits: 2, grade: 'B' },
      { id: 'fhv', name: 'Foundations in Human Values and Ethics', credits: 2, grade: 'D' },
      { id: 'ss', name: 'Signals and Systems', credits: 4, grade: 'B' },
    ],
  },
  {
    id: 'sem-3',
    name: 'Semester 3',
    subjects: [
      { id: 'ranc', name: 'Real Analysis, Numerical Analysis, and Calculus', credits: 4, grade: 'D' },
      { id: 'oop', name: 'Object Oriented Programming', credits: 4, grade: 'C' },
      { id: 'adsa', name: 'Advanced Data Structures and Algorithms', credits: 4, grade: 'A' },
      { id: 'dbms', name: 'Database Management Systems', credits: 4, grade: 'B' },
      { id: 'os', name: 'Operating Systems', credits: 4, grade: 'B' },
      { id: 'pc', name: 'Professional Communication', credits: 2, grade: 'C' },
      { id: 'cci', name: 'Climate Change and Its Implications', credits: 2, grade: 'B' },
    ],
  },
  {
    id: 'sem-4',
    name: 'Semester 4',
    subjects: [
      { id: 'ccn', name: 'Computer and Communication Networks', credits: 4, grade: 'B' },
      { id: 'ai', name: 'Artificial Intelligence', credits: 4, grade: 'D' },
      { id: 'toc', name: 'Theory of Computation', credits: 4, grade: 'A' },
      { id: 'acs', name: 'Advanced Communication Skills', credits: 2, grade: 'C' },
      { id: 'qic', name: 'Quantum Information and Computing', credits: 2, grade: 'C' },
      { id: 'ffsd', name: 'Fundamentals of Full Stack Development', credits: 4, grade: 'A' },
    ],
  },
  {
    id: 'sem-5',
    name: 'Semester 5',
    subjects: [
      { id: 'cc', name: 'Cloud Computing', credits: 3, grade: 'A' },
      { id: 'ics', name: 'Introduction to Cyber Security', credits: 3, grade: 'B' },
      { id: 'ml', name: 'Machine Learning', credits: 3, grade: 'D' },
      { id: 'nlp', name: 'Natural Language Processing', credits: 3, grade: 'D' },
      { id: 'se', name: 'Skills for Employability', credits: 2, grade: 'C' },
      { id: 'qra', name: 'Quantitative and Reasoning Aptitude', credits: 2, grade: 'A' },
      { id: 'fdfed', name: 'Framework Driven Front-End Development', credits: 4, grade: 'O' },
    ],
  },
  {
    id: 'sem-6',
    name: 'Semester 6',
    subjects: [
      { id: 'ms', name: 'Multimedia Systems', credits: 3, grade: 'A' },
      { id: 'ccog', name: 'Cognitive Computing', credits: 3, grade: 'D' },
      { id: 'lpgt', name: 'Linear Programming and Game Theory', credits: 3, grade: 'D' },
      { id: 'is', name: 'Internet Security', credits: 3, grade: 'B' },
      { id: 'gta', name: 'Geospatial Technologies and Applications', credits: 3, grade: 'C' },
      { id: 'ie', name: 'Innovation and Entrepreneurship', credits: 2, grade: 'D' },
      { id: 'wsbd', name: 'Webservices and Backend Development', credits: 4, grade: 'A' },
      { id: 'btp1', name: 'BTP-1', credits: 4, grade: 'B' },
    ],
  },
];
