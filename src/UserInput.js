import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import data from './fakeAPI';
import Header from './Header';
import TableData from './TableData';

export const handleSearchContext = React.createContext()
export const userSearchContext = React.createContext()
export const setUserSearchContext = React.createContext()

function UserInput() {

    const [movieName , setMovieName] = useState('');
    const [rating , setRating] = useState('');
    const [duration , setDuration] = useState('');
    const [movies , setMovies] = useState(data);
    const [userSearch , setUserSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <handleSearchContext.Provider value={handleSearchSubmit}>
                <userSearchContext.Provider value={userSearch}>
                    <setUserSearchContext.Provider value={setUserSearch}>
                        <Header />
                    </setUserSearchContext.Provider>
                </userSearchContext.Provider>
            </handleSearchContext.Provider>

            <Row>
                <Col md={9}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label><h4>Movie Name</h4></Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter movie name" 
                                onChange={(e) => setMovieName(e.target.value)}
                                value={movieName}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><h4>Rating</h4></Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter rating" 
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><h4>Duration</h4></Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter duration" 
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                            />
                        </Form.Group>

                        <Button type="submit" variant="dark">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={3}>
                    <Image src="https://cdn1.iconfinder.com/data/icons/video-25/24/clapper_clip_movie_cut_add-512.png" 
                            rounded fluid />
                </Col>
            </Row>
            <br></br>
            <br></br>
            <TableData 
                movies={movies}
            />
        </div>
    )
}

export default UserInput
