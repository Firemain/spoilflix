import { getMoviesNowPlaying, getTopMovies, getTopSeries } from "@/lib/ApiTMDB";
import Navbar from "@/components/header/navbar";  
import SwiperPerView from "@/components/SwiperPerView";
import FeaturedSection from "@/components/header/FeaturedSection";

async function fetchMoviesNowPlaying() {
  const movies = await getMoviesNowPlaying();
  return movies;
}

async function fetchTopMovies() {
  const movies = await getTopMovies();
  return movies;
}

async function fetchTopSeries() {
  const series = await getTopSeries();
  return series;
}

export default async function Home() {

  function getRandomMovie(topMovies) {
    const randomIndex = Math.floor(Math.random() * topMovies.length);
    return topMovies[randomIndex];
}

  const nowPlaying = await fetchMoviesNowPlaying();
  const topMovies = await fetchTopMovies();
  const topSeries = await fetchTopSeries();

  console.log(topMovies);

  const randomMovie = getRandomMovie(topMovies);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

      <FeaturedSection movie={randomMovie}></FeaturedSection>

      <div className="mt-2 md:mt-0">

      <div className="max-w-full py-6">
        <SwiperPerView movies={nowPlaying} title={"En ce moment au cinéma"}></SwiperPerView>          
        </div>
    
        <div className="max-w-full py-6">
        <SwiperPerView movies={topMovies} title={"Top movies spoiled"}></SwiperPerView>          
        </div>

        <div className="max-w-full py-6">
        <SwiperPerView movies={topSeries} title={"Top series spoiled"}></SwiperPerView>
        </div>

      </div>

        
    
    </main>
  );
}
