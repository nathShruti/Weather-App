export default function CityTemp({weatherData}) {
    return (
      <div className=" flex flex-col sm:block mb-10 sm:pl-8 items-center lg:justify-between xl:pl-10 w-auto h-auto">
          <p className="text-xl lg:text-3xl xl:text-4xl text-white sm:truncate my-1 sm:tracking-tight sm:text-left">
            Real Temperature: {weatherData?.main?.temp} °C
          </p>
          <p className="text-xl lg:text-3xl xl:text-4xl text-white sm:truncate my-1 sm:tracking-tight sm:text-left">
            Feels Like : {weatherData?.main?.feels_like} °C
          </p>
          <p className="text-xl lg:text-3xl xl:text-4xl text-white sm:truncate my-1 sm:tracking-tight sm:text-left">
            Max / Min : {weatherData?.main?.temp_max} °C / {weatherData?.main?.temp_min} °C
          </p>
      </div>
    )
}