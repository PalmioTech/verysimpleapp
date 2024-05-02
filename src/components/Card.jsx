export default function Card({ name, surname, age }) {
  return (
    <div className="rounded bg-gray-50 p-4 flex flex-col gap-2">
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </div>
  );
}
