import React from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to My React App</h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                This is a simple landing page using React, Tailwind CSS, and Material UI.
            </p>
            <ThemeToggleButton />
        </div>
    );
};

export default LandingPage;