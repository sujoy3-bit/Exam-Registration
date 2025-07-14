import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">About Exam Registration System</h1>
                <p className="text-gray-700 text-lg mb-4">
                    Our Exam Registration System is a modern digital platform designed to simplify and streamline the process of exam enrollment for students and administrators.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    It allows students to register for exams online, view schedules, download admit cards, and track registration status in real-time. Admins can manage subjects, student records, exam centers, and generate reports efficiently.
                </p>
                <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">Key Features:</h2>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                    <li>User-friendly dashboard for students and admins</li>
                    <li>Secure login and authentication system</li>
                    <li>Real-time exam status and notifications</li>
                    <li>PDF admit card generation</li>
                    <li>Admin panel for managing exams, users, and reports</li>
                </ul>
                <p className="text-gray-700 text-lg mt-6">
                    This system aims to reduce paperwork, eliminate human error, and save time, making the exam registration process seamless and efficient.
                </p>
            </div>
        </div>
    );
};

export default About;
