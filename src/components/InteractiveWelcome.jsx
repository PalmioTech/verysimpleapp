import { useState } from "react";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleName(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <div className="flex flex-col items-center">
      <input
        name="name"
        value={name}
        onChange={handleName}
        className="rounded-sm border border-gray-600 p-1"
        placeholder="Chi sei?"
      />
      <label>Ciao, {name}</label>
    </div>
  );
}
