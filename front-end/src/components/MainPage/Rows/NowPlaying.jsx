import { useEffect, useState } from "react";
import "./NowPlaying.css";
import axios from "axios";
function NowPlaying(props) {
  const [videos, setVideos] = useState([]);
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
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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
    <div className="row-1">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div id={"slider"} className="slider1">
        {videos.map((item, id) => (
          <div className="img-1-main ">
            <img
              className="img-1-src"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />
            <div className="title-main-1">
              <p className="title-main1">
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;
