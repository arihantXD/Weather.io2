import Input from "./Input";
import BasicInfo from "./BasicInfo";
import { useState } from "react";
import Context from "./Context";
import WeatherBlock from "./WeatherBlock";
import ChartContainer from "./ChartContainer";
import SuggestionBlock from "./SuggestionBlock";

function Main() {
  const [cords, setCords] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [date, setDate] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  return (
    <div className="p-[10px] max-h-[80%] max-w-[70%] md:p-[30px] md:w-[80%]  backdrop-blur-[4px] shadow-2xl rounded-lg] my-[25px]">
      <Context.Provider
        value={{
          cords,
          setCords,
          weather,
          setWeather,
          weatherForecast,
          setWeatherForecast,
          date,
          setDate,
          setSuggestion,
          suggestion,
        }}
      >
        <Input />
        {suggestion && <SuggestionBlock />}
        <div className="flex w-[100%]  gap-[10px] flex-col md:flex-row">
          {cords && <BasicInfo />}
          {weather && <WeatherBlock />}
        </div>
        {weatherForecast && <ChartContainer />}
      </Context.Provider>
    </div>
  );
}
export default Main;
