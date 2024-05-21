import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function InteractiveWelcome() {
  const { name } = useParams();
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  return (
    <div className="flex flex-col items-center">
      <label>Ciao {name}</label>

      <div>
        <button
          className="font-bold rounded-lg bg-slate-700 text-white p-2 m-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
