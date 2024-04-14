export default function Extras({weatherData}) {
    return (
      <div className="flex flex-col items-center mb-5 lg:items-right lg:justify-between w-auto h-auto">
        <div className="gap-3 my-1">
           <h1 className="text-xl text-white text-right">Wind Speed: {weatherData?.wind?.speed} mph</h1>
        </div>
        <div className="gap-3 my-1">
           <h1 className="text-xl text-white text-right">Humidity: {weatherData?.main?.humidity} %</h1>
        </div>
        <div className="gap-3 my-1">
           <h1 className="text-xl text-white text-right">Atmospheric Pressure: {weatherData?.main?.pressure} mm</h1>
        </div>
      </div>
    )
}