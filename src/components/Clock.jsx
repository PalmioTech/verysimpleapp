import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LanguageContext } from "./LanguageContainer";

export function Clock() {
  const [date, updateData] = useState(new Date());
  const language = useContext(LanguageContext);
  useEffect(() => {
    setInterval(() => {
      updateData(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      {language === "en" ? (
        <h2>The current time is: {date.toLocaleTimeString()}</h2>
      ) : (
        <h2>L'ora corrente è: {date.toLocaleTimeString()}</h2>
      )}
    </div>
  );
}
