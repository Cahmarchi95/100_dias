import { useState } from "react";

export default function BasicForm() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  return (
    <div>
      <h3>{text}</h3>
      <input name="text" onChange={handleTextChange} value={text} />
    </div>
  );
}