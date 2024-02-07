import { useContext, useState } from "react";
import Context from "./Context";
import LineChart from "./LineChart";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

function ChartContainer() {
  const { date, setDate } = useContext(Context);
  const { weatherForecast } = useContext(Context);
  function getDates() {
    const unfilteredDateList = [];
    weatherForecast.map((weather) =>
      unfilteredDateList.push(weather.dt_txt.substring(0, 10))
    );
    const filteredDateList = Array.from(new Set(unfilteredDateList));
    return filteredDateList;
  }
  function setDateNext() {
    getDates().map((d, i) => {
      if (date === i) {
        setDate((prevDate) => (prevDate + 1) % getDates().length);
      }
    });
  }
  function setDatePrev() {
    getDates().map((d, i) => {
      if (date === i) {
        setDate((prevDate) =>
          prevDate - 1 === -1
            ? getDates().length - 1
            : prevDate - (1 % getDates().length)
        );
      }
    });
  }

  return (
    <div className="my-[20px] text-4xl font-light">
      <LineChart getDates={getDates} />
      <div className="flex justify-center mt-[30px] gap-[10px] items-center">
        <FaChevronLeft
          className="transition duration-300 hover:shadow-[#333] hover:translate-x-[-30%]"
          onClick={setDatePrev}
        />
        <span className="">{getDates()[date]}</span>
        <FaChevronRight
          onClick={setDateNext}
          className="transition duration-300 hover:shadow-[#333] hover:translate-x-[30%]"
        />
      </div>
    </div>
  );
}
export default ChartContainer;
