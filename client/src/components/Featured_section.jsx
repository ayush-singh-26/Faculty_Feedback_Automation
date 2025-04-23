import React from 'react'
import Faculty_Card from './Faculty_Card';
import { UserIcon, MagnifyingGlassIcon as SearchIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';


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

const stats = [
    { name: 'Total Feedback', value: '1,240' },
    { name: 'Average Rating', value: '4.5/5' },
    { name: 'Active Faculty', value: '42' },
    { name: 'Departments', value: '8' }
];

const steps = [
    {
        name: 'Login',
        description: 'Sign in with your university credentials',
        icon: UserIcon
    },
    {
        name: 'Search Faculty',
        description: 'Find faculty by name or department',
        icon: SearchIcon
    },
    {
        name: 'Submit Feedback',
        description: 'Provide your feedback through our simple form',
        icon: DocumentTextIcon
    },
    {
        name: 'View Analytics',
        description: 'See aggregated feedback statistics',
        icon: ChartBarIcon
    }
];

function Featured_section() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Featured Faculty
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Our top-rated faculty members based on student feedback
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyData.map((faculty) => (
                        <Faculty_Card key={faculty.id} faculty={faculty} />
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-100 dark:bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            How It Works
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                            Simple steps to provide your valuable feedback
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
                                >
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                                        {step.name}
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Feedback Statistics
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Real-time insights from our feedback system
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                                        {stat.name}
                                    </dt>
                                    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </dd>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured_section
