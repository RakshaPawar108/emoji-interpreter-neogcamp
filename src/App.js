import { useState } from "react";
import "./App.css";

function App() {
  let [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Inside Out!!</h1>
      <input
        type="text"
        className="emoji-input"
        placeholder="Enter Emoji Here!"
        onChange={inputChangeHandler}
      />
      <div>Welcome {userInput}</div>
    </div>
  );
}

export default App;

// VISER -> View -> Interact -> State in Event Handler -> Render
