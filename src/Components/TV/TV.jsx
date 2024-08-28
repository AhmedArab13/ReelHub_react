import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TV() {


  
  const [tvSeries, setTvSeries] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);



  

  function getTvSeries(TvItems, func) {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${TvItems}?api_key=ace717a114ddbadf2b9c19aa6022f8ac`
      )
      .then((response) => {
        func(response.data.results);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    getTvSeries("airing_today", setTvSeries);
    getTvSeries("on_the_air", setOnTheAir);
    getTvSeries("popular", setPopular);
    getTvSeries("top_rated", setTopRated);
  }, []);


  const maxVotedMovie = popular.reduce((max, current) => {
    return current.vote_average > max.vote_average ? current : max;
  },{vote_average: 0});


 

  return (
    <>
      <div className="">
        <div className="row align-items-center " style={{ backgroundImage : 'url(https://image.tmdb.org/t/p/w500/'+ maxVotedMovie.backdrop_path +')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',

        }
      
      }>

        {
          maxVotedMovie.vote_average  ? (
            <div className=" ps-5  d-flex justify-content-center align-items-start flex-column flex-grow-0 ">
       
              <h1 className="">  {maxVotedMovie.name }</h1>
              <h2 className="h4">
                Trending <br /> TV <br /> To Watch Right Now
              </h2>
              <p className=" py-3"> Most Watched Movies By Days</p>

            </div>
          ) : (
            <div className="col-lg-4">
              <hr className="w-25" />
              <h2 className="h4">
                Trending <br /> TV <br /> To Watch Right Now
              </h2>
              <p className="text-muted py-3"> Most Watched Movies By Days</p>
              <hr />
            </div>
          )
        }

        </div>
      </div>



      <div className="col-lg-4 my-5">
              <hr className="w-25" />
              <h2 className="h4">
                Popular
              </h2>
              <hr />
            </div>


      <div className="row align-items-center ">
        {popular.map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/movie"}>
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





      <div className="col-lg-4 my-5">
              <hr className="w-25" />
              <h2 className="h4">
              On The Air
              </h2>
              <hr />
            </div>


      <div className="row align-items-center ">
        {onTheAir.map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/movie"}>
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






      <div className="col-lg-4 my-5">
              <hr className="w-25" />
              <h2 className="h4">
              Top Rated
              </h2>
              <hr />
            </div>


      <div className="row align-items-center ">
        {topRated.map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/movie"}>
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



      <div className="col-lg-4 my-5">
              <hr className="w-25" />
              <h2 className="h4">
              Tv Series
              </h2>
              <hr />
            </div>


      <div className="row align-items-center ">
        {tvSeries.map((movie, index) => (
          <>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <Link to={"/moviedetails/" + movie.id + "/movie"}>
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




    </>
  );
}
