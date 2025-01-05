import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddSubjectModalProps {
  onClose: () => void;
  onAdd: (name: string, credits: number) => void;
}

export const AddSubjectModal: React.FC<AddSubjectModalProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && credits > 0) {
      onAdd(name.trim(), credits);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Add New Subject</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700">
              Subject Name
            </label>
            <input
              type="text"
              id="subjectName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="e.g., Mathematics"
              required
            />
          </div>
          <div>
            <label htmlFor="credits" className="block text-sm font-medium text-gray-700">
              Credits
            </label>
            <input
              type="number"
              id="credits"
              value={credits}
              onChange={(e) => setCredits(Number(e.target.value))}
              min="1"
              max="5"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Add Subject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};