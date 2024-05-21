// const { data, error, isLoading, mutate } = useSWR(
//   "https://randomuser.me/api/",
//   fetcher
// );

// const changeCard = () => {
//   mutate();
// };
export default function Card({ name, surname, age }) {
  return (
    <div className="rounded bg-gray-50 p-4 flex flex-col gap-2">
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </div>
  );
}
{
  /* <div className="flex flex-col items-center ">
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
          <div className="flex flex-col items-center">
            <Button onClick={changeCard} text="Aggiorna" />
          </div> */
}
// {
//   error && <div>Errore</div>;
// }
// {
//   isLoading && <Skeleton />;
// }
// {
//   data && (
//     <div>
//       <div className="flex flex-col items-center ">
//         <img src={data.results[0].picture.large} className="p-4" />
//         <div>
//           <b className="text-2xl items-center">
//             {data.results[0].name.title} {data.results[0].name.first}{" "}
//             {data.results[0].name.last}
//           </b>
//         </div>
//         <div className="flex flex-col">
//           <label>Email: {data.results[0].email}</label>
//           <label>Phone: {data.results[0].cell}</label>
//         </div>
//       </div>
//       <div className="flex flex-col items-center">
//         <Button onClick={changeCard} text="Aggiorna" />
//       </div>
//       <div className="flex flex-col items-center p-4">
//         <div>
//           <GithubUser username={"PalmioTech"} />
//           <GithubUsers />
//         </div>
//       </div>
//     </div>
//   );
// }
