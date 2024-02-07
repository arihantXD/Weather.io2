import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";
import { useContext, useEffect } from "react";
import Context from "./Context";

function CordsListItem({ cord }) {
  const { weather, setWeather, setCords, setWeatherForecast } =
    useContext(Context);
  function getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cord.lat}&lon=${cord.lon}&appid=e557481084fc0cc85a72ecf9a82a085a&units=metric`
      )
      .then((res) => {
        setWeather(() => res.data);
      });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cord.lat}&lon=${cord.lon}&appid=e557481084fc0cc85a72ecf9a82a085a&units=metric`
      )
      .then((res) => {
        setWeatherForecast(() => res.data.list);
      });
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div
      className={`group flex justify-between w-[100%] border-white border-[1px] my-[15px] p-[10px] transition duration-300 hover:shadow-[#333] hover:shadow-2xl hover:cursor-pointer`}
      onClick={getWeather}
    >
      <div>
        <div className="text-2xl font-light">{cord.name}</div>
        <span className="font-normal">
          {cord.state}, {cord.country}
        </span>
      </div>
      <IoIosArrowRoundForward
        size={40}
        style={{ color: "#ffff" }}
        className="transition duration-300 group-hover:translate-x-[30%]"
      />
    </div>
  );
}
export default CordsListItem;
