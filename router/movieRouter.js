let express = require('express');
let MovieStore = require('./moviestore');
let paginate = require('../util').paginate;

const datastore = require('./datastore.json');

let movieStore = new MovieStore();
let movieRouter = express.Router(); 

movieRouter.get('/', (req, res) => {

    // var: Title not title Get the req.query console.log('Query: ', req.query);

    if (!req.query.Title) {
        return res.json({
            payload: movieStore.all()
        })
    }

    // Paging: 2 pararmeters:  page and size with default value: 1 & 4

    let page = parseInt(req.query.page) || 1,
        size = parseInt(req.query.size) || 4;
    let movies = movieStore.search(req.query.Title);

    let results = paginate(movies, size, page);

    return res.json({
        title: req.query.Title, 
        totalPage: parseInt(movies.length / size + 1), 
        page: page, 
        size: size, 
        payload: results
    });
});

// /movies/The Game route parameters

movieRouter.get('/:title', (req, res) => {
    
    // console.log(req.params);
    let foundMovies = movieStore.find(req.params.title);

    if (foundMovies.length < 1) {
        res.statusCode = 404;
        return res.json({message: "Movie not found..."});
    }

    res.statusCode = 200;
    return res.json({
        message: 'found movie',
        payload: foundMovies.pop()
    });
})

movieRouter.delete('/:title', (req, res) => {

    if (!movieStore.has(req.params.title)) {
        res.statusCode = 404;
        return res.json({message: 'The movie is not exist'});
    }

    movieStore.remove(req.params.title);

    return res.json({message: "Delete movie successfully!"})
});

movieRouter.put('/:title', (req, res) => {

    // console.log("Title: ",  req.params.title);
    if (!movieStore.update(req.params.title, req.body)) {
        res.statusCode = 500; // Internal server error.
        return res.json({message: 'Failed to update movie info'})
    }

    return res.json({message: 'update movie successfull!'});
});

movieRouter.post('/', (req, res) => {

    console.log('Body: ', req.body);

    // Validation
    if (!req.body.Title || req.body.Title.trim().length < 1) {
        res.statusCode = 400;
        return res.json({message: "missing invalid title!"})
    }

    if (movieStore.has(req.body.Title)) {
        res.statusCode = 400;
        return res.json({message: "movie already existed!"})
    }

    // Add movie
    movieStore.add(req.body);
    return res.json({message: "movie added successfully!"});
});


module.exports = movieRouter;