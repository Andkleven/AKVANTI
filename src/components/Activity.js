import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";

function Activity(props) {
  let image;

  if (props.image) {
    image = (
      <div>
        <Image src={props.image} alt="" style={{ height: 120 }} />
      </div>
    );
  } else if (props.icon) {
    image = (
      <div>
        <i
          className={"mt-3 fad fa-4x fa-" + props.icon}
          style={{
            "--fa-primary-color": props.iconPrimary,
            "--fa-primary-opacity": props.iconPrimaryOpacity,
            "--fa-secondary-color": props.iconSecondary,
            "--fa-secondary-opacity": props.iconSecondaryOpacity
          }}
        />
      </div>
    );
  }

  function More() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (props.more) {
      return (
        <>
          <Button
            variant="light"
            className="mx-0 align-self-end mb-3 shadow-none text-capitalize border mt-3"
            onClick={handleShow}
          >
            Les <div className="d-inline text-lowercase">mer</div>
          </Button>
          <Modal show={show} onHide={handleClose} scrollable centered>
            <Modal.Header closeButton>
              <Modal.Title>{props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.more}</Modal.Body>
            <Modal.Footer>
              <Button className="w-100" variant="primary" onClick={handleClose}>
                Lukk
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <></>;
    }
  }

  let col;

  if (props.fat) {
    col = "col-12";
  } else {
    col = "col-md-6";
  }

  return (
    <div className={`${col} text-center mb-3`}>
      {/* <i
        className={"fad fa-4x fa-" + props.icon}
        style={{
          "--fa-primary-color": props.iconColor1,
          "--fa-secondary-color": props.iconColor2
        }}
      /> */}
      {image}
      <h4 className={`${props.headingAlignment} mt-3`}>{props.heading}</h4>
      <p className="mb-0 text-left">{props.text}</p>
      <More more={props.more} />
    </div>
  );
}

export default Activity;
