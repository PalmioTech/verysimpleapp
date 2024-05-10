import { useEffect } from "react";

export function CounterDisplay({ count }) {
  useEffect(() => {
    console.log(`Il counter è a ${count}`);
  }, [count]);
  return <h2>Il contatore è a : {count}</h2>;
}
