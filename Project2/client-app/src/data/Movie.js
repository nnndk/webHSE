class Movie {
    constructor(id, title, director, year=2000, isBold = false, color = "white") {
        this.id = id
        this.title = title
        this.director = director
        this.year = year
        this.isBold = isBold
        this.color = color
    }
}

export default Movie;