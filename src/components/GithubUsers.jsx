import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !usernames.includes(inputValue.trim())) {
      setUsernames([...usernames, inputValue.trim()]);
      setInputValue("");
    }
  };
  const removeListUsers = () => {
    setUsernames([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="GitHub username"
          className="border p-2 mr-2"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white mr-2">
          Add User
        </button>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white"
          onClick={removeListUsers}
        >
          Remove User
        </button>
      </form>
      <div>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}
