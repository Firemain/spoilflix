import Image from 'next/image';
import { PlayIcon, ChevronDownIcon, BoltIcon } from '@heroicons/react/24/solid';

export default function MovieCard({ movie, height, width }) {
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="relative movie-card w-1/3 sm:w-1/5 lg:w-1/6 overflow-hidden shadow-lg transition-transform duration-300">
      
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={300}
        height={450}
        className="rounded-md object-cover"
      />
      
      {/* Info Popup on Hover */}
      <div className="absolute top-0 left-0 right-0 h-full z-10 p-4 bg-black bg-opacity-70 text-white shadow-lg rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">Rating: {Math.round(10*vote_average)/10}</p>
        
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center bg-white text-purple-950 hover:bg-purple-950 hover:text-white transition duration-300 py-1 px-2 rounded ">
            <PlayIcon className="h-5 w-5 mr-2" />
            Spoil
          </button>
          <button className="flex items-center bg-purple-950 text-white hover:bg-white hover:text-purple-950 py-1 px-2 rounded">
            <BoltIcon className="h-5 w-5" />
          </button>
        </div>

        <p className="text-xs mt-4">
          {movie.overview.length > 100 ? movie.overview.substring(0, 100) + "..." : movie.overview}
        </p>
      </div>
    </div>
  );
}
