import React, { useState } from 'react'
import TableData from './TableData';

function UserInput() {

    const [movieName , setMovieName] = useState('');
    const [rating , setRating] = useState('');
    const [duration , setDuration] = useState('');
    const [movies , setMovies] = useState([]);
    const [userSearch , setUserSearch] = useState('');

    const handleSubmit = () => {
        const movie = movies.filter(movie => movieName !== movie.name && movie) 
        if(movie.length !== 0){
            console.log(movie)
            setMovies([
                ...movie,
                {
                    name: movieName,
                    rating: rating,
                    duration: duration
                }
            ])
        }else{
            setMovies([
                ...movies,
                {
                    name: movieName,
                    rating: rating,
                    duration: duration
                }
            ])
        }
        setMovieName('');
        setRating('');
        setDuration('');
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const movie = movies.filter(movie => userSearch === movie.name)
        console.log(movie)
        if(movie){
            setMovies(movie)
        }else{
            setMovies([])
        }
    }

    return (
        <div>
            <h2>Movie Name</h2>
            <input 
                type="text"
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
            />
            <h2>Rating</h2>
            <input 
                type="text"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
            />
            <h2>Duration</h2>
            <input 
                type="text"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
            />
            <br></br>
            <button onClick={handleSubmit} >Submit</button>
            <form onSubmit={handleSearchSubmit}>
                <h2>Search</h2>
                <input 
                    type="text"
                    onChange={(e) => setUserSearch(e.target.value)}
                    value={userSearch}
                />
            </form>
            <br></br>
            <br></br>
            <TableData 
                movies={movies}
            />
        </div>
    )
}

export default UserInput
