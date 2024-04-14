import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function CityDeets({weatherData, countryName}) {
  

    return (
      <div className="py-5 pl-5clg:items-left lg:justify-between w-full h-full">
          <h3 className="text-5xl font-bold text-white py-3 text-center sm:truncate sm:tracking-tight">
            {weatherData.name}
          </h3>
          <h3 className="text-3xl text-white text-center sm:truncate py-2 sm:text-3xl sm:tracking-tight">
            {countryName}
          </h3>
          <div className="text-xl text-white text-center lat-long row-span-1 gap-3 my-2">
            <div>Lat: {weatherData?.coord?.lat}°</div>
            <div>Long: {weatherData?.coord?.lon}°</div>
          </div>
      </div>
    )
}