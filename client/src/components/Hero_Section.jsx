import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';
import Faculty_Card from './Faculty_Card';

const facultyData = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        department: 'Computer Science',
        email: 's.johnson@university.edu',
        profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
        subjects: ['Data Structures', 'Algorithms', 'Machine Learning'],
        rating: 4.7,
        feedbackCount: 128
    },
    {
        id: 2,
        name: 'Prof. Michael Chen',
        department: 'Mathematics',
        email: 'm.chen@university.edu',
        profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
        subjects: ['Calculus', 'Linear Algebra', 'Discrete Math'],
        rating: 4.5,
        feedbackCount: 95
    },
    {
        id: 3,
        name: 'Dr. Emily Wilson',
        department: 'Physics',
        email: 'e.wilson@university.edu',
        profilePic: 'https://randomuser.me/api/portraits/women/68.jpg',
        subjects: ['Quantum Mechanics', 'Thermodynamics'],
        rating: 4.3,
        feedbackCount: 87
    }
];

function Hero_Section() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }
        const results = facultyData.filter(faculty =>
            faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faculty.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faculty.subjects.some(subject =>
                subject.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setSearchResults(results);
    };

    return (
        <div className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            < div className="bg-indigo-700 dark:bg-indigo-900" >
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Faculty Feedback Automation System
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 max-w-lg mx-auto text-xl text-indigo-100"
                    >
                        Streamline faculty feedback collection with real-time analytics and secure, student-friendly design.
                    </motion.p>
                </div>
            </div >

            {/* Search Section */}
            < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10" >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                >
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Search faculty by name, department, or subject..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </form>

                    {/* Search Results */}
                    <AnimatePresence>
                        {searchResults.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 space-y-4"
                            >
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Search Results</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {searchResults.map((faculty) => (
                                        <Faculty_Card key={faculty.id} faculty={faculty} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div >

        </div>
    )
}

export default Hero_Section
