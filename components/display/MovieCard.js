import Image from 'next/image';
import { PlayIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export default function MovieCard({ movie, height, width }) {
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="relative movie-card w-1/3 sm:w-1/5 lg:w-1/6 px-2 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        layout="responsive"
        width={300}
        height={450}
        className="rounded-md object-cover"
      />
      
      {/* Info Popup on Hover */}
      <div className="absolute top-0 left-0 right-0 h-full z-10 p-4 bg-[#23043c] bg-opacity-90 text-white shadow-lg rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">Rating: {vote_average}</p>
        
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center bg-white text-black py-1 px-2 rounded ">
            <PlayIcon className="h-5 w-5 mr-2" />
            Spoil
          </button>
          <button className="flex items-center bg-gray-700 text-white py-1 px-2 rounded">
            <ChevronDownIcon className="h-5 w-5" />
          </button>
        </div>

        <p className="text-xs mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.
        </p>
      </div>
    </div>
  );
}
