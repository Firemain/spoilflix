import Image from 'next/image';

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      {movies
        .filter((movie) => movie.poster_path !== null) // Filtre les films avec poster_path non null
        .map((movie) => (
          <div key={movie.id} className="relative w-full h-full">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md object-cover"
              layout="responsive" // Cette option fait en sorte que l'image s'ajuste proportionnellement à la largeur du conteneur
              width={200}
              height={300}
            />
          </div>
        ))}
    </div>
  );
}
