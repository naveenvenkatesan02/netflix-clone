import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../Assests/netflix-logo.png";
import { PageTitle } from "../Utils/PageTitle";

function Main() {
  PageTitle('Netflix Home')
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTk3ZGE5OGVmNWM0Nzg5ZDFiZTE5ODMxYjE3NThiOSIsInN1YiI6IjY1YzlmYzE5OTQ1MWU3MDE4NDdkNmY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlFR4xJufzW6sg1_ASsKKa54n9eIFPrGPX-X5Ebs0oQ",
      },
    };
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);


  return (
    <div className="main-bg">
      <div className="header1">
        <div className="logo">
          <img src={logo} alt="logo" height={40} />
        </div>
        <div className="sign-in1 ">
          <Link to={"/sign-in"}>
            <button type="submit">Sign out</button>
          </Link>
        </div>
      </div>
      <div className="backdrop-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        ></img>
      </div>
      <div className="backdrop-content">
        <h1>{movie?.title}</h1>
      </div>
      <div className="backdrop-btn">
        <button>Play</button>
        <button>Watch Later</button>
      </div>
    </div>
  );
}

export default Main;
