"use server";

export async function getMoviesNowPlaying() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
}

export async function getTopMovies() {
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
}

export async function getTopSeries() {
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return data.results;
}

export async function getBackdrop(movieId) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return data.backdrops[0].file_path;
}
