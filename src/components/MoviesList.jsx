import React,{ useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import sampleimage from '../assets/moviesample.jpg';
import './MovieList.styles.css'

const MovieList = () => {

    
    const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const getMovieReq = async () => {
   try {
    const res= await fetch(`https://api.tvmaze.com/search/shows?q=all`);
    const resjson= await res.json();
    // console.log(resjson[1].show.image.medium);
    setMovies(resjson);
   } catch (error) {
    console.log(error);
   }
  }

  getMovieReq();
  },[]);
 
    console.log(movies);

    return (
        <div className='main'>
            <h1 style={{color:"Orange",display:"block",}}> QuadB Tech ReactJs Assignment</h1>
        {movies?.map(({score,show})=>(
            <div className="movie-section">
                
                <div className="image">
                    {show.image ?
                <img alt="image" src={show.image.medium} />:
                <img alt='image' style={{ width: 210, height: 295 }} src={sampleimage}/>
                }
                </div>

                <div className="details">
                    <h2>{show.name}</h2>
                   <h5> Language: {show.language}</h5>
                  <h5> Realeased On:   {show.premiered}</h5>
                  <h5> Genres: {show.genres}</h5>
                <h5>IMDB Score: {score}</h5>
                <div className="button-con">
                <Link className="summary-button" to='/summary' state={{show:show,score:score}}> Show Summary</Link>
                </div>
                </div>
            </div>
        ))}

        </div>
    )

}

export default MovieList;