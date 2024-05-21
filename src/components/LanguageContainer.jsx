import { createContext } from "react";

export const LanguageContext = createContext("en");
// const [language, setLanguage] = useState("en");
// function handleSetLanguage(language) {
//   setLanguage(language);
// }
//  <div>
//    <button
//      onClick={() => handleSetLanguage("it")}
//      className="border border-gray-700 p-1 m-1 rounded-lg"
//    >
//      Italiano
//    </button>
//    <button
//      onClick={() => handleSetLanguage("en")}
//      className="border border-gray-700 p-1 m-1 rounded-lg"
//    >
//      Inglese
//    </button>
//    <LanguageContext.Provider value={language}>
//      <Clock />
//    </LanguageContext.Provider>
//  </div>;
