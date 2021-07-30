import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺️": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
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
