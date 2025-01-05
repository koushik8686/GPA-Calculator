import React, { useEffect, useState } from 'react';
import { Grade, Semester } from './types';
import { calculateOverallGPA } from './utils/gradeCalculator';
import { SemesterAccordion } from './components/SemesterAccordion';
import { AddSemesterModal } from './components/AddSemesterModal';
import { AddSubjectModal } from './components/AddSubjectModal';
import { Plus } from 'lucide-react';
import { initialSemesters } from './data/initialSemesters';
import { Header } from './components/Header';
import { GPADisplay } from './components/GPADisplay';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const [semesters, setSemesters] = useState<Semester[]>(() => {
    const saved = localStorage.getItem('semesters');
    return saved ? JSON.parse(saved) : initialSemesters;
  });

  const [openSemesterId, setOpenSemesterId] = useState<string>(semesters[0]?.id || '');
  const [showAddSemester, setShowAddSemester] = useState(false);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [selectedSemesterId, setSelectedSemesterId] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('semesters', JSON.stringify(semesters));
  }, [semesters]);

  const handleGradeChange = (semesterId: string, subjectId: string, grade: Grade) => {
    setSemesters(prevSemesters =>
      prevSemesters.map(semester =>
        semester.id === semesterId
          ? {
              ...semester,
              subjects: semester.subjects.map(subject =>
                subject.id === subjectId ? { ...subject, grade } : subject
              ),
            }
          : semester
      )
    );
  };

  const handleDeleteSemester = (semesterId: string) => {
    setSemesters(prevSemesters => prevSemesters.filter(sem => sem.id !== semesterId));
  };

  const handleDeleteSubject = (semesterId: string, subjectId: string) => {
    setSemesters(prevSemesters =>
      prevSemesters.map(semester =>
        semester.id === semesterId
          ? {
              ...semester,
              subjects: semester.subjects.filter(subject => subject.id !== subjectId),
            }
          : semester
      )
    );
  };

  const handleAddSemester = (name: string) => {
    const newSemester: Semester = {
      id: `sem-${Date.now()}`,
      name,
      subjects: [],
    };
    setSemesters(prev => [...prev, newSemester]);
    setOpenSemesterId(newSemester.id);
  };

  const handleAddSubject = (name: string, credits: number) => {
    setSemesters(prevSemesters =>
      prevSemesters.map(semester =>
        semester.id === selectedSemesterId
          ? {
              ...semester,
              subjects: [
                ...semester.subjects,
                {
                  id: `subject-${Date.now()}`,
                  name,
                  credits,
                  grade: null,
                },
              ],
            }
          : semester
      )
    );
  };

  const overallGPA = calculateOverallGPA(semesters);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <ThemeToggle />
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <Header />
        <GPADisplay gpa={overallGPA} />

        <div className="space-y-4">
          {semesters.map((semester) => (
            <SemesterAccordion
              key={semester.id}
              semester={semester}
              isOpen={openSemesterId === semester.id}
              onToggle={() => setOpenSemesterId(openSemesterId === semester.id ? '' : semester.id)}
              onGradeChange={(subjectId, grade) => handleGradeChange(semester.id, subjectId, grade)}
              onDelete={() => handleDeleteSemester(semester.id)}
              onDeleteSubject={(subjectId) => handleDeleteSubject(semester.id, subjectId)}
              onAddSubject={() => {
                setSelectedSemesterId(semester.id);
                setShowAddSubject(true);
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setShowAddSemester(true)}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center justify-center space-x-2 shadow-md dark:from-indigo-500 dark:to-purple-500"
        >
          <Plus className="w-5 h-5" />
          <span className="font-semibold">Add New Semester</span>
        </button>

        {showAddSemester && (
          <AddSemesterModal
            onClose={() => setShowAddSemester(false)}
            onAdd={handleAddSemester}
          />
        )}

        {showAddSubject && (
          <AddSubjectModal
            onClose={() => setShowAddSubject(false)}
            onAdd={handleAddSubject}
          />
        )}
      </div>
    </div>
  );
}