import { useEffect, useState } from "react";
import "./App.css";
import Input from "../Input";

function App() {
   const [dinoName, setDinoName] = useState("");
   const [dinoArray, setDinoArray] = useState([]);
   const [textInput, setTextInput] = useState("");

   function handleChange(event) {
      setTextInput(event.target.value);
   }

   //    getInitials(textInput)

   //console.log(dinoName);
   console.log(dinoArray);

   // Function to fetch API data and store it in dino array
   async function getDinoArray() {
      const response = await fetch(
         `https://dinoipsum.com/api/?format=json&paragraphs=1&words=100`
      );
      const data = await response.json();
      setDinoArray(data[0].sort());
      //console.log(sortedName);
   }

   useEffect(() => {
      getDinoArray();
   }, []);

   // Function to take two names from dinoArray into dinoName
   function getDino() {
      const initial = textInput.charAt(0);
      console.log(initial);
      setDinoName(dinoArray[0] + " " + dinoArray[1]);
   }
   return (
      <div className="App">
         <h1>Hello World</h1>
         <p>{dinoName}</p>
         <p>{textInput}</p>
         {/* <p>{getInitials(textInput)}</p> */}
         <Input getDino={getDino} onChange={handleChange} />
      </div>
   );
}

export default App;
