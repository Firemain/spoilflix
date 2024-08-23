import MovieGrid from "@/components/display/MovieGrid";
import { getSearchMovies } from "@/lib/ApiTMDB";

export default async function QuearyPage({params}) {

  async function getQuery(query) {
    const queryResult = await getSearchMovies(query);
    return queryResult;
  }

  const moviesResult = await getQuery(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1>Recherche de film : {params.slug}</h1>

        <MovieGrid movies={moviesResult}></MovieGrid>
    
    </main>
  );
}