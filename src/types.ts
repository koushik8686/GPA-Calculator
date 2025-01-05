export type Grade = 'O' | 'A' | 'B' | 'C' | 'D' | 'P' | 'F' | null;

export interface Subject {
  id: string;
  name: string;
  credits: number;
  grade: Grade;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface GradePoints {
  [key: string]: number;
}