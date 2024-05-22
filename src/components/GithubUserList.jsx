import React from "react";
import useSWR, { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useGithubUsers(user) {
  const { data, error, isLoading, mutate } = useSWR(
    user !== null ? "https://api.github.com/users" : null,
    fetcher
  );

  return {
    users: data,
    error,
    isLoading,
    mutate,
  };
}
export function GithubUserList() {
  const { users, error, isLoading, mutate } = useGithubUsers();
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
          <button
            className="p-2 bg-black text-white rounded-lg"
            onClick={() => mutate()}
          >
            Aggiorna i dati
          </button>
        </div>
      )}
    </div>
  );
}
