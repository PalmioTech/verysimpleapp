function ProtectedPage({ setIsLogged }) {
  return (
    <div>
      <div>Codice Segretissimo</div>
      <div>
        <button type="button" onClick={() => setIsLogged(false)}>
          Esci
        </button>
      </div>
    </div>
  );
}
export default ProtectedPage;
