function Input({ getDino, onChange }) {
   return (
      <div>
         <input type="text" onChange={onChange}></input>
         <button onClick={getDino}>Click me</button>
      </div>
   );
}

export default Input;
