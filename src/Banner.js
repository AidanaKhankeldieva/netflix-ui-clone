import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const img_base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    };
    fetchData();
  }, []);

  //trancate the desription length
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  //   console.log("movie:", movie);
  //banner styling
  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${img_base_url}${movie?.backdrop_path})`,
    backgroundPosition: "center center",
  };
  return (
    <header className='banner' style={bannerStyle}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* {movie title} */}
      {/* {div > 2 buttons} */}
      {/* {movie description} */}
      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
