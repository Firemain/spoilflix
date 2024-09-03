import React from 'react';
import { BoltIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

const SpoilSerieItem = ({ spoil }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4 flex flex-col">
            <div className="flex justify-between items-center">
                {/* Series Name and Episode/Season */}
                <div>
                    <h3 className="text-lg font-bold">{spoil.seriesName}</h3>
                    <p className="text-sm text-gray-400">
                        Season {spoil.season}, Episode {spoil.episode}
                    </p>
                </div>

                {/* Spoil Severity Icons */}
                <div className="flex items-center space-x-1">
                    {getSeverityIcons(spoil.severity).map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}
                </div>
            </div>

            {/* Spoil Content */}
            <div className="mt-4">
                <p className="text-sm italic">{spoil.content}</p>
            </div>

            {/* Spoil Footer: Creator and Upvote Button */}
            <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-400">
                    <p>By: {spoil.creator}</p>
                </div>
                <div className="flex items-center">
                    <button 
                        className="flex items-center text-yellow-400 hover:text-yellow-500 transition duration-300"
                        onClick={() => handleUpvote(spoil.id)}
                    >
                        <ArrowUpIcon className="h-5 w-5 mr-1" />
                        <span>{spoil.upvotes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper function to generate BoltIcon components based on severity
const getSeverityIcons = (severity) => {
    const colors = ['text-pink-500', 'text-purple-500', 'text-purple-800'];
    let iconCount;

    switch (severity) {
        case 'Low':
            iconCount = 1;
            break;
        case 'Medium':
            iconCount = 2;
            break;
        case 'High':
            iconCount = 3;
            break;
        default:
            iconCount = 1;
    }

    return Array(iconCount).fill(null).map((_, index) => (
        <BoltIcon key={index} className={`h-6 w-6 ${colors[index]}`} />
    ));
};

// Example function to handle upvotes
const handleUpvote = (spoilId) => {
    console.log(`Upvoted spoil with ID: ${spoilId}`);
    // Implement the upvote logic here (e.g., call an API to register the upvote)
};

export default SpoilSerieItem;
