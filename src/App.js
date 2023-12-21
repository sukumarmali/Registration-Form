import React from "react";

export default function App() {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    margin: "auto",
    width: "250px",
    height: "225px",
    padding: "2rem",
  };

  const inputStyles = {
    width: "100%",
    paddingBlock: "0.5rem",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const submitBtnStyles = {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    paddingBlock: "0.5rem",
    fontSize: "1.035rem",
  };

  return (
    <div className="App">
      <form style={formStyles}>
        <h1>Register Form</h1>
        <input type="text" placeholder="Name" style={inputStyles} />
        <input type="email" placeholder="Email" style={inputStyles} />
        <input type="password" placeholder="Password" style={inputStyles} />
        <button style={submitBtnStyles}>Submit</button>
      </form>
    </div>
  );
}
