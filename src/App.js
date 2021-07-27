import { useState } from "react";
import "./App.css";

function App() {
  let [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    likeCounter = likeCounter + 1;
    setLikeCounter(likeCounter);
  }
  return (
    <div className="App">
      <h1>Inside Out!!</h1>
      <button onClick={likeClickHandler}>Like Me!</button>
      <p>{likeCounter}</p>
    </div>
  );
}

export default App;
