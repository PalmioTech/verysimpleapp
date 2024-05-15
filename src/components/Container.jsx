import { useState } from "react";

export function Container({ title, children }) {
  const [reduced, setReduce] = useState(false);
  function handleReducePage() {
    setReduce((r) => !r);
  }
  return (
    <div className="bg-white border border-red-700">
      {<h1 className="flex justify-center font-bold text-6xl">{title}</h1>}
      <button
        onClick={handleReducePage}
        className="flex mx-auto m-2 p-2 border border-red-500 bg-blue-500"
      >
        Riduci/Esplora
      </button>
      {reduced && <div>{children}</div>}
    </div>
  );
}
