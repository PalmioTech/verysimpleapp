function DefaultPage({ setIsLogged }) {
  return (
    <div>
      <div>Benvenuto nel sito!</div>
      <div>
        <button type="button" onClick={() => setIsLogged(true)}>
          Effettua il login
        </button>
      </div>
    </div>
  );
}

export default DefaultPage;
