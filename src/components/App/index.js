import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dinoName, setDinoName] = useState("");
  console.log(dinoName);
  async function getDino() {
    const response = await fetch(
      `https://dinoipsum.com/api/?format=json&paragraphs=1&words=100`
    );
    const data = await response.json();
    const sortedName = data[0].sort();

    setDinoName(sortedName[0] + " " + sortedName[1]);
  }

  useEffect(() => {
    getDino();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{dinoName}</p>
    </div>
  );
}

export default App;
