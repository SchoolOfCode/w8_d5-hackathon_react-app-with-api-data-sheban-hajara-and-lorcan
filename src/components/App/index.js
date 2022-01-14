import { useEffect, useState } from "react";
import "./App.css";
import Input from "../Input";
import dinoImages from "../../db";

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

	//  using useeffect to call getDinoArray only on first render
	useEffect(() => {
		getDinoArray();
	}, []);

	// Function to take two names from dinoArray into dinoName
	function getDino() {
		let splitUsername = textInput.split("");
		let firstInitial = splitUsername[0].toUpperCase();
		let secondInitial =
			splitUsername[splitUsername.indexOf(" ") + 1].toUpperCase();
		console.log(firstInitial, secondInitial);

		const matchingFirstNames = dinoArray.filter((name) => {
			return name[0] === firstInitial;
		});
		const matchingSecondNames = dinoArray.filter((name) => {
			return name[0] === secondInitial;
		});

		console.log({ matchingFirstNames });
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
	function randomDinoImage() {
		const index = Math.floor(Math.random() * dinoImages.length);
		return dinoImages[index];
	}

	return (
		<div className="App">
			<h1>Find out your cool dinosaur name!</h1>
			<img src={randomDinoImage()} alt="A funny dinosaur" />
			<p>{dinoName}</p>
			<p>{textInput}</p>
			{/* <p>{getInitials(textInput)}</p> */}
			<Input getDino={getDino} onChange={handleChange} />
		</div>
	);
}

export default App;
