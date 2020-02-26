import React from "react";
import { ListItem, Collapse } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

const NavItem = ({ k, v }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  if (v.items) {
    return (
      <React.Fragment>
        <ListItem button key={k} onClick={handleClick}>
          {v.title}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {Object.entries(v.items).map(([childk, childv]) => (
            <NavItem k={childk} v={childv} />
          ))}
        </Collapse>
      </React.Fragment>
    );
  } else {
    return (
      <ListItem button key={k}>
        {v.title}
      </ListItem>
    );
  }
};

export default NavItem;
