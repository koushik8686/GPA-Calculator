import { Semester } from '../types';
import { calculateOverallGPA } from './gradeCalculator';

export function calculateCumulativeGPAs(semesters: Semester[]) {
  const cumulativeData = [];
  const semestersCumulative = [];

  for (let i = 0; i < semesters.length; i++) {
    semestersCumulative.push(semesters[i]);
    const cumulativeGPA = calculateOverallGPA(semestersCumulative);
    
    cumulativeData.push({
      semester: semesters[i].name,
      gpa: Number(cumulativeGPA.toFixed(2)),
    });
  }

  return cumulativeData;
}

