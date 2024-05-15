import { useEffect, useRef } from "react";
import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    friend: false,
  });
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  function handleDataInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      return { ...data, [name]: type === "checkbox" ? checked : value };
    });
  }
  function resetData() {
    setData({
      username: "",
      password: "",
      friend: false,
    });
  }
  return (
    <form className="flex flex-col items-center">
      <div>
        <input
          ref={inputRef}
          name="username"
          className="rounded-sm border border-gray-600 p-1"
          value={data.username}
          onChange={handleDataInput}
        />
        <input
          name="password"
          type="password"
          className="rounded-sm border border-gray-600 p-1"
          value={data.password}
          onChange={handleDataInput}
        />
        <input
          type="checkbox"
          name="friend"
          onChange={handleDataInput}
          checked={data.friend}
        />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <button disabled={!data.username || !data.password}>Login</button>
        <button onClick={resetData}>Reset</button>
      </div>
    </form>
  );
}
