import React from "react";
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { GithubUser } from "./components/GithubUser";
import { Login } from "./components/Login";
import { GithubUserList } from "./components/GithubUserList";
import { PopupMenu } from "./components/PopUpMenu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="max-w-xl mx-auto py-12">
      <GithubUserList />
    </div>
  );
}

export default App;
