import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

export default function Forecast({ weatherData }) {
  const [forecast, setForecast] = useState([]);
  //loading state
  const [ loader, setLoader ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      // true
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData?.coord?.lat}&lon=${weatherData?.coord?.lon}&appid=129737e1c579d6e56f672692f566b676&units=metric`);
        // Check if response.data.list exists and has elements
        if (response.data.list && response.data.list.length > 0) {
          setForecast(response.data.list);
        } else {
          console.error('No forecast data found.');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [weatherData?.coord]);

  console.log(forecast)
  return (
    <div className="p-5 lg:px-7 items-center text-white justify-stretch w-auto h-auto">
      <div className=" flex flex-row items-center gap-3 my-3">
        <h2 className="tracking-wide text-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-1">HOURLY FORECAST</h2>
        <ThreeDots
          visible={loader}
          height="40"
          width="40"
          color="#ffffff"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""/>
      </div>
      <hr className="mx-1 my-1" />
      <div className="flex flex-col sm:flex-row justify-between text-white mx-1">

        {forecast && forecast.slice(0,5).map((item, index)=>{

          return <div className="flex flex-col items-center justify-center">
                <p className="m-1 lg:text-3xl">{item.dt_txt.split(" ")[1]}</p>
                <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt="weather"/>
                <p className="font-medium lg:text-3xl">{(item?.main?.temp).toFixed()}°C</p>
              </div>
        })}
      </div>
    </div>
  );
}
