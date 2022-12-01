const { Pool, Client } = require("pg");

class movieDbClient {
    constructor() {
        this.credentials = {
            user: "postgres",
            host: "localhost",
            database: "WebHseDb",
            password: "125736546",
            port: 5432
        }
    }

    async #request(query) {
        const pool = new Pool(this.credentials);
        const result = await pool.query(query);
        await pool.end();

        return result;
    }

    async getSingleMovie(id) {
        return await this.#request(`SELECT "Movie".*, "Color".color AS "colorName" FROM "Movie" INNER JOIN "Color" ON "Movie".color = "Color".id WHERE "Movie".id = ${id}`)
    }

    async getAllMovies() {
        return await this.#request('SELECT "Movie".*, "Color".color AS "colorName" ' +
            'FROM "Movie" INNER JOIN "Color" ' +
            'ON "Movie".color = "Color".id ' +
            'ORDER BY "Movie".id')
    }

    async addMovie(newMovie) {
        return await this.#request(`INSERT INTO "Movie" ("title", "director", "year", "isBold", "color") ` +
            `VALUES ('${newMovie.title}', '${newMovie.director}', ${newMovie.year}, ${newMovie.isBold}, ${newMovie.color})`)
    }

    async deleteMovie(id) {
        return await this.#request(`DELETE FROM "Movie" WHERE id = ${id}`)
    }

    async updateMovie(movie) {
        return await this.#request(`UPDATE "Movie" SET "title" = '${movie.title}', "director" = '${movie.director}', "year" = '${movie.year}', "isBold" = '${movie.isBold}', "color" = '${movie.color}' WHERE id = ${movie.id}`)
    }
}

module.exports = new movieDbClient();
