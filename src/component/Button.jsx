import { useContext } from "react";
import Context from "./Context";

function Button({ text, func }) {
  return (
    <>
      <button
        className="border-[#fff] border-[1px] px-[8px] py-[2px] ml-[20px] h-[60px] w-[120px] transition duration-300 hover:shadow-[#333] hover:shadow-2xl hover:translate-y-[-5px] text-3xl"
        type="button"
        onClick={func}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
