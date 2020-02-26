import React from "react";
import { Card } from "react-bootstrap";

// import "../styles.css";

function DeckCard(props) {
  let image;
  let link;
  let competence;
  let contact;

  if (props.linkStretched) {
    link = (
      <a href={props.link} className="stretched-link">
        {props.linkDisplay}
      </a>
    );
  } else if (props.link) {
    link = (
      <a href={props.link} className="d-block mt-2">
        Les mer
      </a>
    );
  }

  if (props.image) {
    image = (
      <div>
        <Card.Img
          variant="top"
          className="mb-0"
          src={props.image}
          alt="Bilde av utdanningsinstutisjon"
        />
      </div>
    );
  }

  if (props.competence) {
    competence = (
      <>
        <hr />
        <h6>Kjernekompetanse</h6>
        {props.competence}
      </>
    );
  }

  if (props.contact) {
    contact = (
      <>
        <hr />
        <h6>Kontaktperson</h6>
        {props.contact}
        <a className="d-block" href={"mailto:" + props.email}>
          {props.email}
        </a>
      </>
    );
  }

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mx-0 px-0 pb-3">
      <Card className="mb-0 h-100 bg-light shadow-sm mx-0 mx-sm-2">
        {image}
        <hr className="my-0" />
        <Card.Body className="px-3 pb-3 pt-2 mt-1">
          <Card.Title className="mb-2">{props.title}</Card.Title>
          {/* <hr className="mt-n2 mb-1" /> */}
          {props.text}
          {link}
          {competence}
          {contact}
        </Card.Body>
      </Card>
    </div>
  );
}

DeckCard.defaultProps = {
  linkDisplay: " "
};

export default DeckCard;
