import { Button } from "components/Button";
import React from "react";

import "./styles.scss";

export const Input = () => {
  return (
    <div className="input">
      <textarea placeholder="What's going on?" className="input__field" />
      <Button text="Send" onClick={() => 1} style="input" />
    </div>
  );
};
