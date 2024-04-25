import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const handeClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <button onClick={handeClick}>Kurs Ekle</button>
      <div>Kurs Sayısı {value}</div>
    </div>
  );
}

export default App;
