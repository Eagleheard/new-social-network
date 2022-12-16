import React from "react";

import { Autocomplete } from "components";

import "./styles.scss";

const autocompleteList = ["tag1", "tag2", "tag3", "tag4"];

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Autocomplete
        style="sidebar"
        options={autocompleteList}
        name={"Search something"}
        onChangeInput={function (input: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="sidebar__topics">
        <h1>Actual topics</h1>
        {autocompleteList.map((el) => (
          <p key={el} className="sidebar__topic">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};
