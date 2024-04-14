export default function CityTemp({weatherData}) {
    return (
      <div className=" flex flex-col mb-10 items-center lg:items-left lg:justify-between w-auto h-auto">
          <p className="text-xl text-white sm:truncate my-1 sm:tracking-tight">
            Real Temperature: {weatherData?.main?.temp} °C
          </p>
          <p className="text-xl text-white sm:truncate my-1 sm:tracking-tight">
            Feels Like : {weatherData?.main?.feels_like} °C
          </p>
          <p className="text-xl text-white sm:truncate my-1 sm:tracking-tight">
            Max / Min : {weatherData?.main?.temp_max} °C / {weatherData?.main?.temp_min} °C
          </p>
      </div>
    )
}