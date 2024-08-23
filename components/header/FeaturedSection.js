import React from 'react';
import Image from 'next/image';
import { PlayIcon, BoltIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
import { getBackdrop, getTopMovies } from '@/actions/ApiTMDB';

export default async function FeaturedSection ({movie}) {
    

    const backdrop = await getBackdrop(movie.id);
    console.log(backdrop);

    //const backdrop = "/plwwDG2lC2BKPgFYYVOOcIjtuB8.jpg";

    return (
        <div className="relative w-full h-screen z-10">
            {/* Background Image */}
            <Image 
                src={`https://image.tmdb.org/t/p/original${backdrop}`} // Replace with your background image path
                alt="Featured Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full max-w-4xl mx-auto px-4 text-white">
                {/* Branding */}
                <div className="mb-6">
                    <span className="text-purple-600 font-semibold text-xl">Film</span>
                    <h1 className="text-6xl font-bold">{movie.title}</h1>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-white text-purple-900 font-semibold py-2 px-6 rounded flex items-center hover:bg-purple-950 hover:text-white transition duration-500">
                        <PlayIcon className="h-6 w-6 mr-2" />
                        Spoil express
                    </button>
                    <button className="bg-gray-700 text-white font-semibold py-2 px-6 rounded flex items-center hover:bg-purple-950 hover:text-white transition duration-500">
                           <BoltIcon className="h-6 w-6 mr-2" /> 
                        Plus d&apos;infos
                    </button>
                </div>
            </div>

            {/* Bottom Right Icons */}
            <div className="absolute bottom-4 right-4 flex space-x-2 items-center z-20">
                <button className="bg-purple-900 p-2 rounded-full">
                    <SpeakerWaveIcon className="h-6 w-6 text-white" />
                </button>
                <div className="bg-white text-purple-900 py-1 px-3 font-bold rounded">
                    16+
                </div>
            </div>
        </div>
    );
};
