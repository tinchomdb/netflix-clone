import React from "react";
import "./HomeScreen.css";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
