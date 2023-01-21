import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [text, setText] = useState("");
  //const [iconClass, setIconClass] = useState("fas fa-times");
  const isNotNumber = useMemo(() => checkExpression(text), [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {isNotNumber ? (
          <span className="icon is-small is-right">
            <i className="fas fa-times" />
          </span>
        ) : (
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        )}
      </div>
    </div>
  );

  function checkExpression(exp) {
    console.log(isNaN(exp));

    return isNaN(exp);
  }
}

export default App;
