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
      try {
         const response = await fetch(
            `https://dinoipsum.com/api/?format=json&paragraphs=1&words=200`
         );
         const data = await response.json();
         setDinoArray(data[0].sort());
      } catch (error) {
         console.log("API is down :(", error);
      }
      //console.log(sortedName);
   }

   //  using useeffect to call getDinoArray only on first render
   useEffect(() => {
      getDinoArray();
   }, []);

   // Function to take two names from dinoArray into dinoName
   function getDino() {
      /// numbers

      /// check for three characters "John Smith" of which one has to be a space
      //// no special characters and integers
      if (textInput.length < 3 || !textInput.includes(" ")) {
         alert(
            "Please enter a valid name - first name and last name with a place inbetween"
         );
      }
	
      let splitUsername = textInput.split("");
      let firstInitial = splitUsername[0].toUpperCase();
      let secondInitial =
         splitUsername[splitUsername.indexOf(" ") + 1].toUpperCase();

      const matchingFirstNames = dinoArray.filter((name) => {
         return name[0] === firstInitial;
      });
      const matchingSecondNames = dinoArray.filter((name) => {
         return name[0] === secondInitial;
      });
      setDinoName(
         matchingFirstNames[
            Math.floor(Math.random() * matchingFirstNames.length)
         ] +
            " " +
            matchingSecondNames[
               Math.floor(Math.random() * matchingSecondNames.length)
            ]
      );
   }

   return (
      <div className="App">
         <h1>Find out your cool dinosaur name!</h1>
         <p>{dinoName}</p>
         <p>{textInput}</p>
         {/* <p>{getInitials(textInput)}</p> */}
         <Input getDino={getDino} onChange={handleChange} />
      </div>
   );
}

export default App;
