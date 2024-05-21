import React from "react";
import { Route, Routes } from "react-router-dom";
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { GithubUser } from "./components/GithubUser";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="max-w-xl mx-auto py-12">
      <Routes>
        <Route path="/:name" element={<InteractiveWelcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:username" element={<GithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
