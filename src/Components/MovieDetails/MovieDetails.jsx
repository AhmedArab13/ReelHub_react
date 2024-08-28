import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieDetails() {
  let params = useParams();

  const [itemDetails, setItemDetails] = useState(null);
  const [similarItems, setSimilarItems] = useState([])
  function getItemDetails() {
    // fetch movie details from API using movie id
    axios
      .get(
        `https://api.themoviedb.org/3/${params.mediatype}/${params.id}?api_key=ace717a114ddbadf2b9c19aa6022f8ac`
      )
      .then((response) => {
        setItemDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {});
  }

  function getSimilarItems() {
    // fetch movie details from API using movie id
    axios
      .get(
        `https://api.themoviedb.org/3/${params.mediatype}/${params.id}/similar?api_key=ace717a114ddbadf2b9c19aa6022f8ac`
      )
      .then((response) => {
        setSimilarItems(response.data.results);
        console.log(response.data);
      })
      .catch((error) => {});
  }


  useEffect(() => {
    getItemDetails();
    getSimilarItems();

    console.log(similarItems)
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          {params.mediatype === "person" ? (
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500/${itemDetails?.profile_path}`}
              alt={itemDetails?.title}
            />
          ) : (
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500/${itemDetails?.backdrop_path}`}
              alt={itemDetails?.title}
            />
          )}
        </div>

        <div className="col-lg-8">
          <h1 className="h3">{itemDetails?.name} {itemDetails?.title}</h1>
          <p className="text-white-50"> {itemDetails?.overview} {itemDetails?.biography}</p>
          {

            <span className="bg-info rounded-3 text-center px-2">{ itemDetails?.genres[0].name}</span>
         
         }

         <h5 className="my-4">
           vote :  {itemDetails?.vote_average.toFixed(1)}
         </h5>
         <h5 className="my-4">
           vote Count :  {itemDetails?.vote_count.toFixed(1)}
         </h5>
         <h5 className="my-4">
           Popularity :  {itemDetails?.popularity.toFixed(1)}
         </h5>
        </div>
      </div>


      <div className="row align-items-center ">
        
        <br />
        <h3 className="pt-5">Similar</h3>

        {similarItems.slice(0,6).map((movie, index) => (
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


    </>
  );
}
