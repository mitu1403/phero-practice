// conditional rendering option:3 ternery operator
// function Todo({ task, isDone }) {
//   return <li>{isDone ? "Finished: " : "Work on:"} {task}</li>
// }
// export default Todo;

// function Todo({ task, isDone }) {
// conditional rendering option:1
// if(isDone){
//   return (
//     <li>Finished: {task}</li>
//   )
// }
// else{
//   return (
//     <li>Work On: {task}</li>
//   )
// }
//
// conditional rendering option:2
// if (isDone) {
//   return <li>Finished: {task}</li>;
// }
// return (<li>Work On: {task}</li>);
// }

// export default Todo;

// conditional rendering option:4 &&
// function Todo({task, isDone}) {
//   return (
//     <li>{task}{isDone && ": Done"}</li>
//   )
// }

// conditional rendering option:5 ||
// function Todo({task, isDone}) {
//   return (
//     <li>{task}{isDone || ": Do it"}</li>
//   )
// }

function Todo({ task, isDone }) {
  // conditional rendering option:6
  let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>Work On: {task}</li>;
  }
  return listItem
}

export default Todo;
