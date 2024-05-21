import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function GithubUser() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center p-2 gap-2 my-2 shadow-lg shadow-gray-400">
      <h1>{data.name}</h1>
      <h2>
        {`"`}
        {data.login}
        {`"`}
      </h2>
      <img
        src={data.avatar_url}
        className="max-w-16 rounded-full shadow-md shadow-gray-700"
      />
    </div>
  );
}
