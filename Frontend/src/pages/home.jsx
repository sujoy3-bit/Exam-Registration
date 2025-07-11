import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../public/sexy-anime-background.jpg'; // Make sure this image exists

const Home = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-2 md:px-20 py-16 bg-white shadow-md relative">

                <div>
                    <img
                        src={heroImg}
                        alt="Exam Illustration"
                        className="w-screen md:h-[35rem]"
                    />
                </div>
                <div className="max-w-xl absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
                        Welcome to the Official Exam Registration Portal
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        An all-in-one platform to register for exams, check results, and stay updated with important notices from the institution.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
                            Register Now
                        </Link>
                        <Link to="/result" className="border border-blue-600 text-blue-600 px-6 py-3 rounded shadow hover:bg-blue-50 transition">
                            Check Result
                        </Link>
                    </div>
                </div>

            </section>

            {/* Notice Board / Blog Section */}
            <section className="px-6 md:px-20 py-16 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">Latest Announcements</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((id) => (
                        <div key={id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Notice Title {id}</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem vitae lacus dictum lacinia.
                            </p>
                            <Link to="#" className="text-blue-500 mt-4 inline-block hover:underline">Read More</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Portal */}
            <section className="px-6 md:px-20 py-16 bg-white">
                <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">About the Portal</h2>
                <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
                    Our exam registration system is built to provide a smooth and reliable experience for students. With real-time updates, quick registration, and instant result checking, students can manage their academic exams with ease and confidence.
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-700 text-white py-6 text-center">
                &copy; {new Date().getFullYear()} Your Institute Name. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
