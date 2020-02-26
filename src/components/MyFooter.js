import React from "react";
import {
  Container
  // Row,
  // Col
} from "react-bootstrap";

function MyFooter() {
  return (
    <>
      <div
        className="font-small pt-0 mt-4"
        style={{ backgroundColor: "#191D1F" }}
      >
        <Container fluid className="text-center py-3 text-light w-100">
          {" akvanti,"} {new Date().getFullYear()}
        </Container>
      </div>
    </>
  );
}

export default MyFooter;
