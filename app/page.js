import { getMoviesNowPlaying, getTopMovies, getTopSeries } from "@/actions/ApiTMDB";
import Navbar from "../components/header/navbar";  
import SwiperPerView from "@/components/SwiperPerView";
import FeaturedSection from "@/components/header/FeaturedSection";

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1>Bienvenue sur spoilflix !</h1>
    
    </main>
  );
}
