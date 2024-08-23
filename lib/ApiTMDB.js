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
        `https://api.themoviedb.org/3/trending/movie/week?api_key=1a9b79b5ff845d831d19c022f78a8cee`
    );
    const data = await res.json();
    return data.results;
}
export async function getTopSeries() {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching top series:', error);
        return [];
    }
}


export async function getBackdrop(movieId) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    return data.backdrops[0].file_path;
}

export async function getSearchMovies(query) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!res.ok) {
        throw new Error(`Failed to fetch movies: ${res.statusText}`);
    }
    const data = await res.json();
    return data.results;
}

