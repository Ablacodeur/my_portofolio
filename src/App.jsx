import { useEffect, useState } from "react";
import "./App.css";
import Browser from "./Components/Browser/Browser";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  // sécurité : si spline bug, on ne bloque pas l'utilisateur
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 12000);
    return () => clearTimeout(t);
  }, []);

  const handleHeroReady = () => {
    setTimeout(() => setLoading(false), 450); // sortie plus “cinéma”
  };

  return (
    <>
      <Loader visible={loading} />
      <Browser onHeroReady={handleHeroReady} />
    </>
  );
}

export default App;
