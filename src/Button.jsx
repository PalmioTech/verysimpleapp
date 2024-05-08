export function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="bg-slate-500 p-4 rounded m-2">
        Clicca per aggiornare
      </button>
    </div>
  );
}
