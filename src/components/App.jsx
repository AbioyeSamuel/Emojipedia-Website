import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojipedias) {
  return (
    <Entry
      key={emojipedias.id}
      emoj={emojipedias.emoji}
      name={emojipedias.name}
      mean={emojipedias.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">
          {emojipedia.map(createEntry)}
          {/* <Entry emoj={props.emoji} name={props.name} mean={props.meaning} /> */}
        </dl>
      </div>
    </div>
  );
}

export default App;
