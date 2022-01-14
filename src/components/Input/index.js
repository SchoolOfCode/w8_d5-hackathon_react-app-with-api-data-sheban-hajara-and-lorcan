function Input({ getDino, onChange }) {
	return (
		<div>
			<input
				type="text"
				onChange={onChange}
				placeholder={"Enter full name"}
			></input>
			<button onClick={getDino}>Click me</button>
		</div>
	);
}

export default Input;
