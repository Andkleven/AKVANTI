import React from "react";
import { Row } from "react-bootstrap";
import { isMobile, isIOS, isSafari } from "react-device-detect";

//import { ReactComponent as Logo } from "../images/viken-connect-text.svg";

import background from "../images/background-darker.jpg";

let backgroundAttachment;

if (isMobile || isIOS || isSafari) {
  backgroundAttachment = "initial";
} else {
  backgroundAttachment = "fixed";
}

const backgroundStyle = {
  backgroundImage: "url(" + background + ")",
  backgroundColor: "#191D1F",
  backgroundAttachment: backgroundAttachment,
  maxHeight: "100vh",
  height: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="vh-100" style={backgroundStyle}>
          <div
            className="w-100 h-100 d-flex justify-content-center align-items-center text-center"
            // style={{ height: "100vh" }}
          >
            <div
              className="text-navy"
              style={{ position: "relative", bottom: 0 }}
            >
              <Row
                className="mt-4 mt-sm-5 mx-3 justify-content-center align-items-center"
                style={{ maxWidth: 600 }}
              >
                {this.props.children}
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
