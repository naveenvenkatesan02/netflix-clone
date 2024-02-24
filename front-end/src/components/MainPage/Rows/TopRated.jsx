import { useEffect, useState } from "react";
import "./NowPlaying.css";
import axios from "axios";
import './TopRated.css'
function TopRated(props) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTk3ZGE5OGVmNWM0Nzg5ZDFiZTE5ODMxYjE3NThiOSIsInN1YiI6IjY1YzlmYzE5OTQ1MWU3MDE4NDdkNmY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlFR4xJufzW6sg1_ASsKKa54n9eIFPrGPX-X5Ebs0oQ'
        }
      };
      

    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=7",
        options
      )
      .then((response) => {
        setVideos(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row-3">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div id={"slider"} className="slider3">
        {videos.map((item, id) => (
          <div className="img-3-main ">
            <img
              className="img-3-src"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />
            <div className="title-main-3">
              <p className="title-main3">
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
