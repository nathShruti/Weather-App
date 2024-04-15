


export default function CityDeets({weatherData, countryName}) {
  

    return (
      <div className="py-5 pl-5 sm:pl-8 xl:pl-10 xl:py-8 w-full h-full">
          <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white py-3 text-center sm:text-left sm:truncate sm:tracking-tight">
            {weatherData.name}
          </h3>
          <h3 className="text-3xl lg:text-4xl xl:text-5xl text-white text-center sm:text-left sm:truncate py-2 sm:text-3xl sm:tracking-tight">
            {countryName}
          </h3>
          <div className="text-xl lg:text-2xl xl:text-3xl text-white text-center sm:text-left lat-long row-span-1 gap-3 my-2">
            <div>Lat: {weatherData?.coord?.lat}°</div>
            <div>Long: {weatherData?.coord?.lon}°</div>
          </div>
      </div>
    )
}