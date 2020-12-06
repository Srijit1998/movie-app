import React from 'react'

function TableData({ movies }) {

    return (
        <div>
            <table style={{margin: "0 auto"}}>
                <tr>
                    <th style={{columnSpan: "2"}}>Name</th>
                    <th>Rating</th>
                    <th>Duration</th>
                </tr>
                {movies.map(movie =>  
                    <tr>
                        <td>{movie.name}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.duration}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default TableData
