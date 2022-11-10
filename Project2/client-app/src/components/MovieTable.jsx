import React from 'react';

export const MovieTable = (props) => {
    return (
        <table>
            <caption>Movies</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody id="movie-table">
                {props.movies.map(movie =>
                    <tr key={movie.id} className={movie.isBold 
                    ? `table-${movie.color} table-bold` : `table-${movie.color}`}>
                        <td>
                            {movie.title}
                        </td>
                        <td>
                            {movie.director}
                        </td>
                        <td className="table-year">
                            {movie.year}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}