import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return (
      <div className='text-white'>
        <p>No Image Found</p>
      </div>
    );
  }

  return (
    <div>
      <img
        className='w-48 pr-4'
        alt='Movie card'
        src={IMG_CDN_URL + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;
