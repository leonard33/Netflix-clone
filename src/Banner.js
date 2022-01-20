import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Requests';


function Banner() {
    const[movies, setMovies]= useState([]);

    useEffect(()=> {
        async function fetchdata(){
            const request = await  axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)
             ]
            );
            return request;
        }
        fetchdata();
    }, []);
    console.log(movies);

    // truncating words functions to less
     function truncate(string, n){
       return string?.length > n? string.substr(0, n-1)+'...': string;
     }

    return (
        <header 
            className='banner' 
            style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:"center center"
        }} >
          <div className='banner_content'>
            <h1 className='banner_title'>{movies?.title || movies?.name || movies?.oriinal_name}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My list</button>
                <h1 className='banner_description'>
                  { truncate (movies?.overview,150)}
                </h1>
                
            </div>
          </div>
          <div className='banner--fadeBottom'/>
        </header>
    )
}

export default Banner
