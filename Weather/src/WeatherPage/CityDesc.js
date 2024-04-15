// import { useEffect, useState } from "react";
// import axios from 'axios';

export default function ImgDesc({weatherData}) {
  // console.log(weatherData);
    return (
      <div className="flex flex-col-reverse sm:flex-col sm:pr-8 sm:py-2 lg:py-1 xl:pr-10 xl:py-8 items-center lg:items-right text-white lg:justify-stretch w-auto h-auto">
        <div className="w-auto">
        <img src={weatherData?.weather?.length && `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`} alt="desc"></img>
        </div>
        <div className="w-auto">
           <h2 className="font-semibold text-xl xl:text-2xl text-center tracking-wide">{weatherData?.weather?.length && weatherData?.weather[0]?.description}</h2>
        </div>
      </div>
    )
}