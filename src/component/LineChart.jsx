import { useContext } from "react";
import Context from "./Context";
import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";
import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function LineChart({ getDates }) {
  const { weatherForecast, date } = useContext(Context);
  function getChartData(date = "2024-01-11") {
    return weatherForecast.filter((weather, i) => {
      return weather.dt_txt.substring(0, 10) === date;
    });
  }
  getChartData();
  return (
    <div className="h-[250px] transition duration-300 hover:shadow-[#333] hover:shadow-md">
      <Line
        data={{
          labels: getChartData(getDates()[date]).map((data) => {
            return data.dt_txt.substring(11, 16);
          }),
          datasets: [
            {
              label: "Temperature",
              data: getChartData(getDates()[date]).map(
                (data) => data.main.temp
              ),
              fill: false,
              borderColor: "white",
              backgroundColor: "black",
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Temperature Report",
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
