import { useState } from "react";
import { Button } from "../Button";
import { CounterDisplay } from "./CounterDisplay";
export function ValueIncrement() {
  const [counter, setter] = useState(0);
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
