const MovieTickets = require("../MongoModels/MovieModel")
const CreateMovieController = async (req, res) => {
    try {
        const { movieId, MovieName, MovieDescription, MovieImage, MovieRating, MovieReleaseDate, MovieGenre, MovieLanguage } = req.body
        const createMovie = MovieTickets.create({
            movieId,
            MovieName,
            MovieDescription,
            MovieImage,
            MovieRating,
            MovieReleaseDate,
            MovieGenre,
            MovieLanguage
        })
        res.status(201).send({
            status: true,
            message: "Movie Created Successfully",
            flage: "Y",
            data: createMovie
        })

    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Error Occured",
            flage: "N"
        })
    }
}
module.exports = { CreateMovieController }