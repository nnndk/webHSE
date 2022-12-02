const movies = await axios
    .get("api/getAllMovies")
    .then(res => res.data)

let table = document.getElementById("movie-table")

const movieRows = movies.map(movie => `
    <tr class=${"table-" + movie.colorName}>
        <td class="table-center">
            ${movie.isBold ? "<b>" : ""}${movie.id}${movie.isBold ? "</b>" : ""}
        </td>
        <td>
            ${movie.isBold ? "<b>" : ""}${movie.title}${movie.isBold ? "</b>" : ""}
        </td>
        <td>
            ${movie.isBold ? "<b>" : ""}${movie.director}${movie.isBold ? "</b>" : ""}
        </td>
        <td class="table-center">
            ${movie.isBold ? "<b>" : ""}${movie.year}${movie.isBold ? "</b>" : ""}
        </td>
        <td class="table-center">
            <a href="/updateMovie/${movie.id}">Upd</a>
        </td>
        <td class="table-center">
            <button id=${movie.id} onclick="deleteMovie(${movie.id})">Del</button>
        </td>
    </tr>`
)

for (let i = 0; i < movieRows.length; i++) {
    table.innerHTML += movieRows[i]
}

let newTitle = document.querySelector("#movie-title")
let newDirector = document.querySelector("#movie-director")
let newYear = document.querySelector("#movie-year")
let isBold = document.querySelector("#movie-bold")
let color = document.querySelector("#movie-color")

const handleMovieSubmit = async (event) => {
    event.preventDefault()

    await axios
        .post("api/addMovie", {
            title: newTitle.value,
            director: newDirector.value,
            year: newYear.value,
            isBold: isBold.checked,
            color: color.value
        })
}

const movieForm = document.querySelector("#movie-form")
movieForm.addEventListener("submit", handleMovieSubmit)
