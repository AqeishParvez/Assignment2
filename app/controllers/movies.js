//File Name: movies.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023
import movieModel from '../models/movies.js';
import { UserDisplayName } from '../utils/index.js';


//R ead operations
export function DisplayMoviesList(req, res, next){
    movieModel.find(function (error, movieCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(movieCollection);

        res.render('index', {title: 'Movie List', page: 'movies/list', movies: movieCollection, displayName: UserDisplayName(req)})
    })
}


//C reate operations
export function DisplayMoviesAddPage(req, res, next){
    res.render('index', {title: 'Add Movie', page: 'movies/edit', movie: {}, displayName: UserDisplayName(req)})
}

export function ProcessMoviesAddPage(req, res, next){
    let newMovie = movieModel({
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre,
        runtime: req.body.runtime
    });

    movieModel.create(newMovie, function(error, Movie){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/movie-list');

    })
}

//U pdate operations
export function DisplayMoviesEditPage(req, res, next){

    let id = req.params.id;

    movieModel.findById(id, function(error, movie){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', {title: 'Edit Movie', page: 'movies/edit', movie, displayName: UserDisplayName(req)})
    })
    
}

export function ProcessMoviesEditPage(req, res, next){

    let id = req.params.id;

    let newMovie = movieModel({
        _id: req.body.id,
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre,
        runtime: req.body.runtime
    });

    movieModel.updateOne({_id: id}, newMovie, function(error, Movie){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/movie-list');

    })
}

//D elete operations
export function ProcessMoviesDelete(req, res, next){
    let id = req.params.id

    movieModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/movie-list');

    })
}