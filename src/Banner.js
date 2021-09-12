import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import CloseIcon from "@material-ui/icons/Close";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [invalidTrailerUrl, setInvalidTrailerUrl] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const handleClickPlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        /* movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title ||
          "" ) */

        .then((url) => {
          /* https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment */
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => {
          setInvalidTrailerUrl(true);
          console.log(invalidTrailerUrl);
        });
    }
  };

  const opts = {
    height: "300px",
    width: "95%",
    playerVars: {
      autoplay: 1,
    },
  };

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
          <button
            onClick={() => handleClickPlay(movie)}
            className="banner__button"
          >
            {trailerUrl ? (
              <span>
                <CloseIcon />
                Close
              </span>
            ) : (
              <span>
                <PlayArrow />
                Play
              </span>
            )}
          </button>
          <button className="banner__button banner__moreInfo">
            <InfoOutlined />
            More info
          </button>
        </div>
        {trailerUrl && (
          <YouTube
            className="banner__youtube"
            videoId={trailerUrl}
            opts={opts}
          />
        )}
        {invalidTrailerUrl && (
          <h2 className="banner__noTrailer">No trailer Available</h2>
        )}

        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
