import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  function getTrending(movieItems, func) {
    // let { data } = await
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${movieItems}?api_key=ace717a114ddbadf2b9c19aa6022f8ac`
      )
      .then((response) => {
        func(response.data.results);
      })
      .catch((err) => console.log(err));

    // func(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTV);
    getTrending("person", setTrendingPerson);
  }, []);

  return (
    <>
      <div className="row align-items-center ">
        <div className="col-lg-4">
          <hr className="w-25" />
          <h2 className="h4">
            Trending <br /> Movies <br /> To Watch Right Now
          </h2>
          <p className="text-muted py-3"> Most Watched Movies By Days</p>
          <hr />
        </div>

        {trendingMovies.slice(0, 10).map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/movie" }>
                <div className="position-relative">
                  <img
                    className="w-100 img-responsive"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />

                  <div className="position-absolute top-0 end-0 bg-info p-2">
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
                <h2 className="h6 text-center  " key={index}>
                  {movie.title}
                </h2>
              </Link>
            </div>
          </>
        ))}
      </div>

      <br />

      <div className="row align-items-center ">
        <div className="col-lg-4">
          <hr className="w-25" />
          <h2 className="h4">
            Trending <br /> TV Series <br /> To Watch Right Now
          </h2>
          <p className="text-muted py-3"> Most Watched Movies By Days</p>
          <hr />
        </div>

        {trendingTV.slice(0, 10).map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/tv"}>
                <div className="position-relative">
                  <img
                    className="w-100 img-responsive"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />

                  <div className="position-absolute top-0 end-0 bg-info p-2">
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
                <h2 className="h6 text-center  " key={index}>
                  {movie.name}
                </h2>
              </Link>
            </div>
          </>
        ))}
      </div>



      <div className="row align-items-center ">
        <div className="col-lg-4">
          <hr className="w-25" />
          <h2 className="h4">
            Trending <br /> Actors <br /> To Watch Right Now
          </h2>
          <p className="text-muted py-3"> Most Watched Movies By Days</p>
          <hr />
        </div>

        {trendingPerson.slice(0, 10).map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">

              {/* /moviedetails/" + movie.id + "/person */}
              <Link to={""}>
                <div className="position-relative">
                  <img
                    className="w-100 img-responsive"
                    src={"https://image.tmdb.org/t/p/w500" + movie.profile_path}
                  />

                 
                </div>
                <h2 className="h6 text-center  " key={index}>
                  {movie.name}
                </h2>
              </Link>
            </div>
          </>
        ))}
      </div>



    </>
  );
}

