const queryString = window.location.href;

let x = queryString.lastIndexOf("/")
const id = queryString.slice(x + 1)

const movie = await axios
    .get(`../api/getSingleMovie/${id}`)
    .then(res => res.data)

let currId = document.querySelector("#movie-id")
let newTitle = document.querySelector("#movie-title")
let newDirector = document.querySelector("#movie-director")
let newYear = document.querySelector("#movie-year")
let newIsBold = document.querySelector("#movie-bold")
let newColor = document.querySelector("#movie-color")

currId.value = movie.id
newTitle.value = movie.title
newDirector.value = movie.director
newYear.value = movie.year
newIsBold.checked = movie.isBold
newColor.value = movie.color.toString()

currId.disabled = true

const handleMovieSubmit = async (event) => {
    event.preventDefault()

    await axios
        .put("../api/updateMovie", {
            id: id,
            title: newTitle.value,
            director: newDirector.value,
            year: newYear.value,
            isBold: newIsBold.checked,
            color: newColor.value
        })
}

const movieForm = document.querySelector("#movie-form")
movieForm.addEventListener("submit", handleMovieSubmit)