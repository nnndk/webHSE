import React from 'react';
import Movie from '../data/Movie';

export const AddMovieForm = (props) => {
    const [newMovie, setNewMovie] = React.useState(new Movie(props.newId, "", "", 2000, false, "white"));

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setNewMovie(prevMovie => {
            return {
                ...prevMovie,
                [name]: type == "checkbox" ? checked : value,
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.setMovies(prevMovies => [
            ...prevMovies,
            newMovie
        ]);
    }

    return (
        <form id="movie-form" onSubmit={handleSubmit}>
            <div className="form-block">
                <label>Title</label><br />
                <input type="text" id="movie-title" name="title" value={newMovie.title} 
                    onChange={handleChange} /><br />
            </div>
            <div className="form-block">
                <label>Director</label><br />
                <input type="text" id="movie-director" name="director" value={newMovie.director} 
                    onChange={handleChange} /><br />
            </div>
            <div className="form-block">
                <label>Year</label><br />
                <input type="number" id="movie-year" name="year" value={newMovie.year}
                    onChange={handleChange} /><br />
            </div>
            <div className="form-block">
                <label>Bold?</label>
                <input type="checkbox" id="movie-bold" name="isBold" checked={newMovie.isBold}
                    onChange={handleChange} /><br />
            </div>
            <div className="form-block">
                <label>Color:</label><br />
                <select name="color" id="movie-color" value={newMovie.color} onChange={handleChange}>
                    <option value="white">White</option>
                    <option value="gold">Gold</option>
                    <option value="gray">Gray</option>
                    <option value="blue">Blue</option>
                </select>
                <br />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}
