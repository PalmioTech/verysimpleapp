import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useSWR, { mutate } from "swr";
import { Button } from "./Button";
import { fetcher } from "./utils";

function App() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://randomuser.me/api/",
    fetcher
  );

  const changeCard = () => {
    mutate();
  };
  // render data
  return (
    <div className="max-w-xl mx-auto py-12">
      {error && <div>Errore</div>}
      {isLoading && <Skeleton />}
      {data && (
        <div className="flex flex-col items-center ">
          <div>
            <img src={data.results[0].picture.large} className="p-4" />
            <div>
              <b className="text-2xl items-center">
                {data.results[0].name.title} {data.results[0].name.first}{" "}
                {data.results[0].name.last}
              </b>
            </div>
            <div className="flex flex-col">
              <label>Email: {data.results[0].email}</label>
              <label>Phone: {data.results[0].cell}</label>
            </div>
          </div>
          <div>
            <Button onClick={changeCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
