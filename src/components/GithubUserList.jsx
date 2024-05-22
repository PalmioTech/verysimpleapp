import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useGithubUsers() {
  const { data, error, isLoading } = useSWR(
    username !== null ? "https://api.github.com/users" : null,
    fetcher
  );

  return {
    users: data,
    error,
    isLoading,
  };
}
export function GithubUserList() {
  const { users, error, isLoading } = useGithubUsers();
  return (
    <div>
      {error && <div>failed to load</div>}
      {isLoading && <div>loading...</div>}
      {users && (
        <div className="flex flex-col items-center">
          <h1>Utenti di Github</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
