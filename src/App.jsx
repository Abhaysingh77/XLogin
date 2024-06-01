import "./App.css";
import { useState } from "react";
export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    if (userName === "user" && password === "password") {
      setShowLoginPage(true);
    } else {
      setShowError(true);
    }
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="App">
      <h2>Login Page</h2>
      {showError && <p>Invalid username or password</p>}
      {showLoginPage ? (
        <p>Welcome, user</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={handleUserName}
          />
          <br />

          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            name=""
            id=""
            placeholder="password"
            onChange={handlePassword}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      )}
    </div>
  );
}
