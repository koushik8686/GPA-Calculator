import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Header = () => (
  <div className="text-center animate-fadeIn relative">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5 -z-10"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80")' }}
    />
    <div className="inline-flex items-center justify-center space-x-2">
      <GraduationCap className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">GPA Calculator</h1>
    </div>
    <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">Track your academic journey with ease</p>
  </div>
);