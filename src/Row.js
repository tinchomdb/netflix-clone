import React, { useState, useEffect } from "react";
import axios from "./axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
/* import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons"; */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Row.css";

/* import { Swiper, SwiperSlide } from "swiper/react"; */
/* import "swiper/css"; */

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  /*  const [slideNumber, setSlideNumber] = useState(0); */
  /* const [isMoved, setIsMoved] = useState(false); */

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const baseImgURL = "https://image.tmdb.org/t/p/w300/";

  /* console.log(movies); */

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title ||
          ""
      )
        .then((url) => {
          /* https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment */
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  /* const listRef = useRef(); */

  /* const handleSliderClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 10;
    if ((direction === "left" && slideNumber > 0) || distance < 0) {
      setIsMoved(true);
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform =
        "translateX(" + (200 + distance) + "px)";
    }
    if (direction === "right" && slideNumber < 20) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform =
        "translateX(" + (-220 + distance) + "px)";
    }
    console.log(distance);
  }; */

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      {/* <div className="wrapper"> */}
      {/* <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleSliderClick("left")}
          style={{ display: !isMoved && "none" }}
        /> */}
      {/* <div className="row__posters" ref={listRef}> */}
      {/*<div className="row__wrapper"  */}
      <Slider {...settings}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={
                  baseImgURL +
                  (isLargeRow ? movie.poster_path : movie.backdrop_path)
                }
                alt={movie.name}
              ></img>
            )
        )}
      </Slider>
      {/*</div> */}
      {/* </div> */}
      {/* <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleSliderClick("right")}
        /> */}
      {/* </div> */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
