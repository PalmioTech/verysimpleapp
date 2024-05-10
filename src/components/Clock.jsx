import { useEffect } from "react";
import { useState } from "react";

export function Clock() {
  const [date, updateData] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      updateData(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h2>The current time is: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
