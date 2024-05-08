function DefaulPage({ setIsLogged }) {
  return (
    <div>
      <div>Benvenuto nel sito</div>
      <div>
        <button type="button" onClick={() => setIsLogged(true)}>
          Effettua il log in
        </button>
      </div>
    </div>
  );
}
export default DefaulPage;
