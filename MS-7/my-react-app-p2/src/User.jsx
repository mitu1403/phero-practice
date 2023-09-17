import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return <div>User: {user.length}</div>;
}

export default User;

/*
  Load user data with state and useEffect

*/
