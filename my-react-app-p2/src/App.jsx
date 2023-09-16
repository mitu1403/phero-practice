import {} from "react";
import "./App.css";
import Counter from "./Counter";
import User from "./User";
import Friends from "./Friends";
function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFour = (num) => {
    alert(num + 4);
  };
  return (
    <>
      <h1>React</h1>

      <Friends/>
      
      {/* when no need to pass any parameter */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert("button 3 clicked")}>Click me 3</button>

      {/* when need to pass parameter*/}
      <button onClick={() => addToFour(4)}>click me 4</button>
      <Counter />
      <div style={{marginTop: "10px"}}>
        <User></User>
      </div>
    </>
  );
}

export default App;
