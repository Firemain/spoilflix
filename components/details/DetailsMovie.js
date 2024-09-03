"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DetailsMovie = ({ movieId }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`);
                const data = await response.json();
                setMovie(data);
                console.log('Movie details:', data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            {/* Backdrop Image */}
            {movie.backdrop_path && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-50"
                    />
                </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 z-10"></div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-4 lg:p-12">
                {/* Poster Image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="rounded-lg"
                    />
                </div>

                {/* Movie Details */}
                <div className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-12">
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-lg italic text-gray-300 mb-4">{movie.tagline}</p>
                    <p className="text-lg mb-4">{movie.overview}</p>

                    <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-300 mb-4">
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span>•</span>
                        <span>{movie.runtime} min</span>
                        <span>•</span>
                        <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-yellow-400 font-bold text-xl">
                            {movie.vote_average.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-400">
                            {movie.vote_count} reviews
                        </span>
                    </div>

                    <div className="flex space-x-4">
                        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-800 transition duration-300">
                            Watch Trailer
                        </button>
                        <button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                            Add to Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsMovie;
