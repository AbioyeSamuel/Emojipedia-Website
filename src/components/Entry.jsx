import React from "react";
import Emoji from "./Emoji";
import Name from "./Name";
import Meaning from "./Meaning";

function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <Emoji emojiImage={props.emoj} />
            <Name emojiName={props.name} />
          </dt>
          <Meaning emojiMeaning={props.mean} />
        </div>
      </dl>
    </div>
  );
}

export default Entry;
