import { useEffect, useState } from "react";
import Friend from "./Friend";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => <Friend key={friend.id} friend={friend}></Friend>)}
    </div>
  );
}

export default Friends;

/*
 *   1. state to hold data
 *   2. use effect with dependency array
 *   3. use fetch to load data
 *   4. set loaded data in state
 *
 */
