import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-3xl  font-bold '>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className=' bg-white text-black  rounded-lg text-white p-4 px-12 mx-4 text-xl hover:bg-opacity-80'>
          <PlayArrowIcon /> Play
        </button>
        <button className=' bg-gray-500 bg-opacity-50 rounded-lg text-white p-4 px-14  text-xl'>
          <InfoIcon /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
