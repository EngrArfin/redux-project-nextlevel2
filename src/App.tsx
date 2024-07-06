/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <>
      <div>
        Redux projects...
        <div className="h-screen w-full flex justify-center items-center ">
          <div className="flex">
            <button className="px-3 py-2 rounded-md bg-green-500 text-xl front-semibold text-white ">
              Increase
            </button>
            <h1 className="text-3xl mx-10">1</h1>
            <button className="px-3 py-2 rounded-md bg-red-500 text-xl front-semibold text-white">
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
