import { Grade, Subject, Semester } from '../types';

export const gradePoints: { [key in Exclude<Grade, null>]: number } = {
  'O': 10,
  'A': 9,
  'B': 8,
  'C': 7,
  'D': 6,
  'P': 5,
  'F': 0
};

export const calculateGPA = (subjects: Subject[]): number => {
  const validSubjects = subjects.filter(subject => subject.grade !== null);
  if (validSubjects.length === 0) return 0;

  const totalCredits = validSubjects.reduce((sum, subject) => sum + subject.credits, 0);
  const totalPoints = validSubjects.reduce((sum, subject) => 
    sum + (subject.credits * (subject.grade ? gradePoints[subject.grade] : 0)), 0);
  
  return totalCredits ? Number((totalPoints / totalCredits).toFixed(4)) : 0;
};

export const calculateOverallGPA = (semesters: Semester[]): number => {
  const allSubjects = semesters.flatMap(semester => semester.subjects);
  return calculateGPA(allSubjects);
};