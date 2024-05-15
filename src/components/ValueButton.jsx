import { useState } from "react";
import { Button } from "../Button";
import { CounterDisplay } from "./CounterDisplay";
import { useEffect } from "react";
import { useRef } from "react";

export function ValueIncrement() {
  const [counter, setter] = useState(0);
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Montato per la prima volta");
    } else if (counter.current === counter) {
      console.log("modificato");
    }
  });
  function incrementCounter() {
    setter(counter + 1);
  }
  function decrementCounter() {
    setter(counter - 1);
  }
  function resetCounter() {
    setter(0);
  }
  return (
    <div className="flex flex-col items-center ">
      <CounterDisplay count={counter} />
      <div className="flex flex-row gap-4">
        <Button onClick={incrementCounter} text="+ 1" />
        <Button onClick={resetCounter} text="Reset" />
        <Button onClick={decrementCounter} text="- 1" />
      </div>
    </div>
  );
}
