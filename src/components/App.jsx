import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">
          {emojipedia.map((emojipedias) => (
            <Entry
              key={emojipedias.id}
              emoj={emojipedias.emoji}
              name={emojipedias.name}
              mean={emojipedias.meaning}
            />
          ))}
          {/* <Entry emoj={props.emoji} name={props.name} mean={props.meaning} /> */}
        </dl>
      </div>
    </div>
  );
}

export default App;
