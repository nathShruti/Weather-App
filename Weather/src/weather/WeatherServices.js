import { DateTime } from "luxon";

const API_Key = "129737e1c579d6e56f672692f566b676";
const Base_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(Base_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_Key });

    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        sys: weather,
    } = data;

    const {main: icon} = weather;

    return {icon}
}

const formatForecastWeather = (data) => {
    let { timezone, daily } = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  
    return { timezone, daily };
  };

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ("weather", searchParams).then(formatCurrentWeather)

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  
const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};