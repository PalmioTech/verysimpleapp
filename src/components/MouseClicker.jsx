export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button onClick={handleButtonClick}>
        <img src="https://picsum.photos/20/20" /> Cliccami!
      </button>
    </div>
  );
}
