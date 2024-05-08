export function Button({ onClick, text }) {
  return (
    <div>
      <button onClick={onClick} className="bg-slate-500 p-4 rounded m-2">
        {text}
      </button>
    </div>
  );
}
