export function Color() {
  const colors = [
    {
      id: 1,
      name: "blue",
    },
    {
      id: 2,
      name: "red",
    },
    {
      id: 3,
      name: "green",
    },
    {
      id: 4,
      name: "orange",
    },
  ];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
}
