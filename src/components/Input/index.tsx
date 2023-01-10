import React, { useState } from "react";

import { Button } from "components/Button";

import "./styles.scss";

export const Input = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="input">
      <textarea
        placeholder="What's going on?"
        className="input__field"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <Button
        text="Send"
        onClick={() => 1}
        style="input"
        disabled={message.length === 0}
      />
    </div>
  );
};
