import { useLocation } from "react-router-dom";
import ImgDesc from "./CityDesc";
import CityDeets from "./CityDet";
import Extras from "./CityExtra";
import CityTemp from "./CityTemp";
import WeatherHead from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast/Forecast";


function Page() {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location.state.name}&APPID=129737e1c579d6e56f672692f566b676&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [location.state.name]);

  return (
    <div className="Page font-kanit-regular">
      <div className={`bg-cover w-full h-full bg-no-repeat ` + 
      (weatherData && weatherData?.weather?.length && (weatherData?.weather[0]?.main == 'Clouds' ? 'bg-clouds' 
      : weatherData?.weather[0]?.main == 'Thunderstorm' ? 'bg-thunderstorm' 
      : weatherData?.weather[0]?.main == 'Drizzle' ? 'bg-drizzle'
      : weatherData?.weather[0]?.main == 'Rain' ? 'bg-rain'
      : weatherData?.weather[0]?.main == 'Snow' ? 'bg-snow'
      : weatherData?.weather[0]?.main == 'Mist' ? 'bg-mist'
      : weatherData?.weather[0]?.main == 'Smoke' ? 'bg-smoke'
      : weatherData?.weather[0]?.main == 'Haze' ? 'bg-haze'
      : weatherData?.weather[0]?.main == 'Dust' ? 'bg-dust'
      : weatherData?.weather[0]?.main == 'Fog' ? 'bg-fog'
      : weatherData?.weather[0]?.main == 'Sand' ? 'bg-sand'
      : weatherData?.weather[0]?.main == 'Ash' ? 'bg-ash'
      : weatherData?.weather[0]?.main == 'Squall' ? 'bg-squall'
      : weatherData?.weather[0]?.main == 'Tornado' ? 'bg-tornado'
      : weatherData?.weather[0]?.main == 'Clear' ? 'bg-clear'
      : "bg-black"))}>
        <WeatherHead />
        <div className="block w-full justify-between">
          <CityDeets weatherData={weatherData} countryName={location.state.cou_name_en} className="w-2/4"></CityDeets>
          <ImgDesc weatherData={weatherData} className="w-2/4"></ImgDesc>
        </div>
        <div className="block w-full justify-between">
          <CityTemp weatherData={weatherData} className="w-2/4"></CityTemp>
          <Extras weatherData={weatherData} className="w-2/4"></Extras>
        </div>
        <Forecast weatherData={weatherData}/>
      </div>
    </div>
  );
}

export default Page;