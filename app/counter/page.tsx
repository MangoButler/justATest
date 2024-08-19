// "use client";
import Counter from "@/components/Counter";
// import { useState } from "react";

export default function CounterPage() {
  //   const [count, setCount] = useState(0);
  return (
    // <div className="flex flex-col items-center w-[100px]">
    //   <button
    //     className="text-white font-bold my-2"
    //     onClick={() => setCount(count + 1)}
    //   >
    //     Increment
    //   </button>
    //   <p className="text-5xl font-bold">{count}</p>
    //   <button
    //     className="text-white font-bold my-2"
    //     onClick={() => setCount(count - 1)}
    //   >
    //     Decrement
    //   </button>
    // </div>
    <section>
      <h1 className="text-6xl mb-16">Counter Page</h1>
      <Counter />
    </section>
  );
}
