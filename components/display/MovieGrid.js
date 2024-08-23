import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      {movies
        .filter((movie) => movie.poster_path && movie.vote_average >= 3) // Filtre les films avec poster_path non null ou undefined et un rating >= 3
        .map((movie) => (
          <div key={movie.id} className="relative w-full h-full group">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name} // Utilise title ou name selon ce qui est disponible
              className="rounded-md object-cover"
              width={200}
              height={300}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-md">
              <h3 className="text-white text-lg font-bold">{movie.title || movie.name}</h3> {/* Affiche le titre ou le nom */}
              <p className="text-white text-sm">Rating: {movie.vote_average}</p>
              <button className="flex items-center bg-white text-purple-950 hover:bg-purple-950 hover:text-white transition duration-300 py-1 px-2 rounded mt-2">
                <PlayIcon className="h-5 w-5 mr-2" />
                Spoil
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

