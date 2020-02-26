import React from "react";
import List from "@material-ui/core/List";

import NavItem from "./navItem";

export default function NestedList() {
  const navigationJSON = require("./navigation.json");

  return (
    <List>
      {Object.entries(navigationJSON).map(([k, v]) => (
        <NavItem {...{ k, v }} />
      ))}
    </List>
  );
}
