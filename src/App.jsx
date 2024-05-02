import Card from "./components/Card";

function App() {
  const users = [
    {
      name: "Franco",
      surname: "Mitrushi",
      age: 24,
    },
    {
      name: "Raffaele",
      surname: "Tarantino",
      age: 28,
    },
  ];

  return;
  <div className="max-w-xl mx-auto py-12">
    {users.map(({ name, surname, age }, key) => (
      <Card key={key} name={name} surname={surname} age={age} />
    ))}
  </div>;
}

export default App;
