import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import requests from "../utils/requests";
import { POSTER_URL } from "../utils/helpers";
import { truncate } from "../utils/helpers";

import '../css/banner.scss';

const Banner = () => {
  const [randomMovie, setRandomMovie] = useState({});

  const { movies } = useFetch(requests.fetchNetflixOriginals);




  useEffect(() => {
    const random = Math.floor(Math.random() * movies.length - 1);
    setRandomMovie(movies[random]);
  }, [movies]);



  if(!randomMovie || Object.keys(randomMovie).length === 0){
    return <div>Loading...</div>
  }

  const {
    name,
    original_name,
    backdrop_path,
    poster_path,
    overview,
 
  } = randomMovie;


const bannerStyles = {
  backgroundImage: `url(${POSTER_URL}${backdrop_path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
}
 
  return (
      <header className="banner" style={bannerStyles}>
        <div className="banner__content">
          <h1>{name || original_name}</h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">Add to List</button>
          </div>

          <div className="banner_description">
            <h3>{truncate(overview, 150)}</h3>
          </div>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
  
  
  )
};

export default Banner;
