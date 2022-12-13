import React  from 'react';

import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = () => {

    const { loading, movies, error } = useSelector(state => state.movies)

    if(loading){
    return <>loading.....</>
    }

    return (
        <>

            {
                <ul className="movies">
                    {movies?.length > 0 ? movies.map((movie) => (
                        <li className="movies1" key={movie.imdbID}>
                            <MovieItem {...movie} />
                        </li>
                    )) : error ? <h1>error</h1> : <>Please enter name of the film</>}
                </ul>

            }

        </>
     
    );

}

export default Movies;