import { useState, useEffect } from "react";
import Axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    // making connection to server
    Axios.get("http://localhost:3001/api/").then((res) => {
      console.log("get request");
      setUsers(res.data);
    });
  }, []);

  function createUser() {
    Axios.post("http://localhost:3001/api/", {
      name,
      age,
      username,
    }).then((res) => {
      console.log("USER CREATED");
      setUsers([...users, { name, age, username }]);
    });
  }
  return (
    <>
      <div>Mern Stack</div>
      {users.map((user) => (
        <div key={user._id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>Username: {user.username}</h1>
        </div>
      ))}
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          type="tel"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Age"
        />
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <button onClick={createUser}>Create</button>
      </div>
    </>
  );
}
export default App;
