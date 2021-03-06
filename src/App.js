import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π": "Smiling Face with Smiling Eyes",
  "π": "Smiling Face with Halo",
  "π₯°": "Smiling Face with Hearts",
  "π": "Smiling Face with Heart-Eyes",
  "π€©": "Star-Struck",
  "π": "Face Blowing a Kiss",
  "π": "Kissing Face",
  "βΊοΈ": "Smiling Face",
  "π": "Kissing Face with Closed Eyes",
  "π": "Kissing Face with Smiling Eyes",
};

const emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  let [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    let emoji = event.target.value;
    let meaning = "";
    if (emoji in emojiDictionary) {
      meaning = emojiDictionary[emoji];
    }

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
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
      <div className="meaning">Meaning: {meaning}</div>
      <br />
      <div>Emojis We Know: </div>
      <div className="wrapper">
        {emojisWeKnow.map((emoji) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// VISER -> View -> Interact -> State in Event Handler -> Render
