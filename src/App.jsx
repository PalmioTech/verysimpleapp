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
      <Routes>
        <Route path="/:name" element={<InteractiveWelcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<PopupMenu />} />
          <Route path=":username" element={<GithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
