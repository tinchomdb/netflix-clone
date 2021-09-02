import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const imgURL = "https://image.tmdb.org/t/p/w1280/" + movie?.backdrop_path;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(" + imgURL + ")",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button banner__moreInfo">More info</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
