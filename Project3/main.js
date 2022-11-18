class Movie {
    constructor(title, director, year, isBold, color) {
        this.title = title
        this.director = director
        this.year = year
        this.isBold = isBold
        this.color = color
    }
}

const movies = [
    new Movie("The Shawshank Redemption", "Frank Darabont", 1994),
    new Movie("The Hateful Eight", "Quentin Tarantino", 2015),
    new Movie("Titanic", "James Cameron", 1997),
    new Movie("Gladiator", "Ridley Scott", 2000),
    new Movie("Inception", "Christopher Nolan", 2010),
    new Movie("Troy", "Wolfgang Petersen", 2004)
]

let table = document.getElementById("movie-table")

const movieRows = movies.map(movie => `
    <tr>
        <td>
            ${movie.title}
        </td>
        <td>
            ${movie.director}
        </td>
        <td class="table-year">
            ${movie.year}
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

const handleMovieSubmit = (event) => {
    event.preventDefault()
    let row = table.insertRow();

    if (isBold.checked) {
        row.classList.add(`table-bold`)
    }

    let titleCell = row.insertCell();
    titleCell.innerText = newTitle.value
    let directorCell = row.insertCell();
    directorCell.innerText = newDirector.value
    let yearCell = row.insertCell();
    yearCell.innerText = newYear.value
    yearCell.classList.add("table-year")
}

const movieForm = document.querySelector("#movie-form")
movieForm.addEventListener("submit", handleMovieSubmit)

let isAuth = false;

const auth = () => {
    if (isAuth) {
        authBtn.classList = "btn btn-outerline-info"
        authBtn.innerText = "Log Out"
        isAuth = false
    }
    else {
        authBtn.classList = "btn btn-info"
        authBtn.innerText = "Log In"
        isAuth = true
    }
}

auth()
