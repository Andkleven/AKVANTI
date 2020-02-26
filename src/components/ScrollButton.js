import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function ScrollButton(props) {
  const [button, setButton] = useState(false);
  useEffect(() => {
    if (props.specific.length === 0) {
      setButton(false);
    }
  }, [props.specific]);
  const add = () => {
    props.setSpecific(prevState => [...prevState, props.name]);
  };
  const remove = () => {
    props.setSpecific(props.specific.filter(name => name !== props.name));
  };
  const handelClick = () => {
    if (button) {
      remove();
    } else {
      add();
    }
    setButton(!button);
  };
  return (
    <div className="col-12 col-md-6 w-100">
      <Button
        {...props}
        size=""
        variant={button ? "success" : "outline-dark"}
        className="w-100 mb-2 d-inline d-md-none"
        style={{ maxWidth: 275 }}
        onClick={() => handelClick()}
      >
        {/* <i className={"fa mt-2 fa-" + props.icon} style={{ width: 40 }} /> */}
        {props.name}
      </Button>
      <Button
        {...props}
        size="lg"
        variant={button ? "success" : "outline-dark"}
        className="w-100 mb-4 d-none d-md-inline"
        style={{ minWidth: 180, maxWidth: 275 }}
        onClick={() => handelClick()}
      >
        <div>
          {/* <i
            // className={"fa fa-lg mt-2 fa-" + props.icon}
            style={{ width: 40 }}
          /> */}
        </div>
        <div>{props.name}</div>
      </Button>
    </div>
  );
}

ScrollButton.defaultProps = {
  icon: "hand-pointer",
  name: "Button"
};

export default ScrollButton;
