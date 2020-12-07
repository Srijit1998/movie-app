import React from 'react'
import { Table } from 'react-bootstrap'

function TableData({ movies }) {

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>  
                        <tr>
                            <td>{movie.name}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.duration}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default TableData
