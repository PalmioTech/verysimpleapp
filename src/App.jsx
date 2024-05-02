import React from "react";
import DefaultPage from "./pages/DefaultPage";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <div className="max-w-xl mx-auto py-12">
      <p>
        {isLogged ? (
          <ProtectedPage setIsLogged={setIsLogged} />
        ) : (
          <DefaultPage setIsLogged={setIsLogged} />
        )}
      </p>
    </div>
  );
}

export default App;
