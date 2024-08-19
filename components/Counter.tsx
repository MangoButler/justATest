"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onIncreaseHandler = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecreaseHandler = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div className="flex justify-between gap-2 w-2/3 mx-auto border rounded-full border-white px-8 py-5">
      <button
        onClick={onDecreaseHandler}
        className="bg-white hover:bg-slate-600 hover:text-white text-2xl rounded px-5 py-2"
      >
        -
      </button>
      <p className="my-auto font-extrabold text-4xl">{count}</p>
      <button
        onClick={onIncreaseHandler}
        className="bg-white hover:bg-slate-600 hover:text-white text-2xl rounded px-5 py-2"
      >
        +
      </button>
    </div>
  );
}
