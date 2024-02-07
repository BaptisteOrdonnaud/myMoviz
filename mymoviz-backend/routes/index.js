var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=a53299a08447702899fd8aacef3893f2')
        .then(response => response.json())
        .then(movie => {
            res.json({ movies: movie.results })
        })
})

module.exports = router;
