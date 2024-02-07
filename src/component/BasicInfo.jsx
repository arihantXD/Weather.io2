import { useContext } from "react";
import CordsListItem from "./CordsListItem";
import Context from "./Context";

function BasicInfo() {
  const { cords, setWeather, weather } = useContext(Context);
  return (
    <div className="md:w-[50%] md:py-[15px]">
      {cords &&
        cords.map((cord, i) => {
          return <CordsListItem key={i} cord={cord} />;
        })}
    </div>
  );
}
export default BasicInfo;
