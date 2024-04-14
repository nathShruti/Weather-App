import cloudy from "../assets/img/cloudy-icon.png";
export default function WeatherHead() {
    return (
      <nav className="bg-black py-1 border-b-2">
      <div className="flex mx-10 my-5 items-center justify-start">
        <img src={cloudy} width={50} height={50} alt="bleh"></img>
          <h2 className="text-3xl font-bold text-white text-center sm:truncate sm:tracking-tight mx-3">
            Weather
          </h2>
      </div>
      </nav>
    )
  }