import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LiaSearchSolid } from "react-icons/lia";
import Button from "./Button";
import Context from "./Context";

function Input() {
  const [input, setInput] = useState("London");
  const { setCords, cords, setSuggestion } = useContext(Context);

  function getCords() {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=3&appid=e557481084fc0cc85a72ecf9a82a085a`
      )
      .then((res) => {
        setCords(() => res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getSuggestions(e) {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=3&appid=e557481084fc0cc85a72ecf9a82a085a`
      )
      .then((res) => {
        setSuggestion(() => res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCords();
  }, []);
  return (
    <div className="w-[100%] relative flex items-center">
      <LiaSearchSolid
        size={45}
        className="absolute bg-transparent bottom-[5px] left-[5px] "
      />
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value),
            e.target.value && getSuggestions(e.target.value);
        }}
        placeholder="Ex. London"
        className="w-[100%] md:w-[calc(70%-75px)] bg-transparent border-b-[1px] border-[#ffff] placeholder:text-[#fff] outline-none pl-[55px]  text-5xl"
      />
      <Button text="Search" func={input ? getCords : null} />
    </div>
  );
}
export default Input;
