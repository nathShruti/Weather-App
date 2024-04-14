// import { useEffect, useState } from "react";
// import axios from 'axios';

export default function ImgDesc({weatherData}) {
  // console.log(weatherData);
    return (
      <div className="flex flex-col-reverse items-center lg:items-right text-white lg:justify-stretch w-auto h-auto">
        <div className="w-auto">
        <img src={weatherData?.weather?.length && `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`} ></img>
        </div>
        <div className="">
           <h2 className="font-semibold text-xl text-center tracking-wide">{weatherData?.weather?.length && weatherData?.weather[0]?.description}</h2>
        </div>
      </div>
    )
}