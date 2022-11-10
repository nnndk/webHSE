import React from 'react';
import { MovieTable } from './MovieTable';
import { data } from '../data/data';
import { AddMovieForm } from './AddMovieForm';

export const Main = () => {
    const [movies, setMovies] = React.useState(data);

    return (
        <main>
            <MovieTable movies={movies} />
            <AddMovieForm setMovies={setMovies} newId={movies.length} />
        </main>
    )
}