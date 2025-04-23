import { StarIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';


const Faculty_Card = ({ faculty }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300"
        >
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <img
                        className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900"
                        src={faculty.profilePic}
                        alt={faculty.name}
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faculty.name}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400">{faculty.department}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{faculty.email}</p>
                    <div className="mt-2 flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(faculty.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                            ({faculty.rating.toFixed(1)} from {faculty.feedbackCount} reviews)
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Subjects:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {faculty.subjects.map((subject, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Faculty_Card