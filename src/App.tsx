import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Redux projects...
        <div className="h-screen w-full flex justify-center items-center ">
          <div className="flex border border-purple-200 rounded-md bg-slate-300 p-10">
            <button
              onClick={() => dispatch(incrementByValue({ value: 5 }))}
              className="px-3 py-2 rounded-md bg-green-500 text-xl front-semibold text-white "
            >
              Increaseby Value 5
            </button>
            <button
              onClick={() => dispatch(increment())}
              className="px-3 py-2 rounded-md bg-green-500 text-xl front-semibold text-white "
            >
              Increase
            </button>

            <h1 className="text-3xl mx-10">{count}</h1>
            <button
              onClick={() => dispatch(decrement())}
              className="px-3 py-2 rounded-md bg-red-500 text-xl front-semibold text-white"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
