export default function Extras({weatherData}) {
    return (
      <div className="flex flex-col sm:block items-center sm:pr-8 mb-5 lg:items-right lg:justify-between xl:pr-10 w-auto h-auto">
        <div className="gap-3 my-1">
           <h1 className="text-xl lg:text-3xl xl:text-4xl text-white text-right">Wind Speed: {weatherData?.wind?.speed} mph</h1>
        </div>
        <div className="gap-3 my-1">
           <h1 className="text-xl lg:text-3xl xl:text-4xl text-white text-right">Humidity: {weatherData?.main?.humidity} %</h1>
        </div>
        <div className="gap-3 my-1">
           <h1 className="text-xl lg:text-3xl xl:text-4xl text-white text-right">Atmospheric Pressure: {weatherData?.main?.pressure} mm</h1>
        </div>
      </div>
    )
}