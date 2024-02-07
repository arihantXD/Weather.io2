import { useContext } from "react";
import Context from "./Context";

function WeatherBlock() {
  const { weather } = useContext(Context);

  const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  const date = new Date(utc + weather.timezone * 1000);

  const dateOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const parsedDate = date.toLocaleDateString("en-US", dateOptions);
  const parsedTime = date.toLocaleTimeString("en-US", timeOptions);
  return (
    <div
      style={{ display: weather ? "grid" : "none" }}
      className=" relative md:w-[50%] md:my-[30px] grid-cols-1 border-white border-[1px] transition duration-300 hover:shadow-[#333] hover:shadow-2xl"
    >
      <img
        className="w-[70px] h-[70px] self-start bg-transparent absolute top-[-11px] left-[-5px] md:top-0 md:left-0 rotate-[-20deg]"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
      />
      <div className="px-[10px] py-[5px] font-medium ">
        <span className="text-3xl pl-[50px] md:text-7xl ">
          {weather.main.temp} &deg;C{" "}
        </span>
        <div className="capitalize font-light">
          <span className="block text-md md:text-xl">{parsedDate}</span>
          <span className="block text-md md:text-xl">{parsedTime}</span>
          <span className="block text-xl md:text-3xl">
            {weather.name}, {weather.sys.country}
          </span>
          <span className="text-xl md:text-3xl">
            {weather.weather[0].description}
          </span>
        </div>
      </div>

      <div className="text-sm ">
        <ul className="flex mr-[10px] flex-wrap [&>*]:text-gray-700 [&>*]:border-white [&>*]:border-[1px]  [&>*]:px-[5px] [&>*]:py-[3px] [&>*]:mx-[5px] [&>*]:my-[5px]">
          <li>Real Feel {weather.main.feels_like} &deg;C</li>
          <li>Max Temp {weather.main.temp_max} &deg;C</li>
          <li>Min Temp {weather.main.temp_min} &deg;C</li>
          <li>Humidity {weather.main.humidity}%</li>
          <li>Wind {weather.wind.speed} Km/Hr</li>
        </ul>
      </div>
    </div>
  );
}
export default WeatherBlock;
