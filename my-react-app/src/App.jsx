import {} from "react";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rubel"];
  const singers = [
    { id:1, name: "Dr. Mahfuzur Rahman", age: 68 },
    { id:2, name: "Eva Rahman", age: 58 },
    { id:3, name: "Shuvro Dev", age: 38 },
    { id:4, name: "Pritom", age: 30 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Actor name="Bappa Raaz"></Actor>
      {actors.map((actor) => (
        <Actor key={actor} name={actor}></Actor>
      ))}
      {singers.map((singer) => (
        <Singers
          key={singer.id}
          singer = {singer}
        ></Singers>
      ))}
    </>
  );
}

export default App;
