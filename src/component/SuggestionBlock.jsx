import { useContext } from "react";
import Context from "./Context";

function SuggestionBlock() {
  const { suggestion } = useContext(Context);
  return (
    <div className="mt-[10px] text-sm">
      Did You Mean :{" "}
      {suggestion &&
        suggestion.map((suggest, i) => (
          <span
            key={i}
            className="px-[5px] py-[2px] m-[5px] rounded-sm bg-white text-black "
          >
            {suggest.name}{" "}
          </span>
        ))}
    </div>
  );
}
export default SuggestionBlock;
