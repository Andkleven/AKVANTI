import React from "react";
import { Row, CardDeck } from "react-bootstrap";
import DeckCard from "./DeckCard";
import ShowMore from "@tedconf/react-show-more";

function Deck(props) {
  const viewAmount = 4;
  // let dataLength = Object.keys(data).length;

  return (
    <ShowMore items={props.data} by={viewAmount}>
      {({ current, onMore }) => (
        <Row className="mt-3 mb-5 d-flex align-items-center">
          <div className="col-12 text-center mb-4">
            <i
              className={"mt-4 mb-2 fad fa-4x fa-" + props.icon}
              style={{
                "--fa-primary-color": props.iconPrimary,
                "--fa-primary-opacity": props.iconPrimaryOpacity,
                "--fa-secondary-color": props.iconSecondary,
                "--fa-secondary-opacity": props.iconSecondaryOpacity
              }}
            />
            <h4>{props.headline}</h4>
          </div>
          <div className="col-12 text-center mb-4" hidden={!!onMore}>
            {props.topMessage}
          </div>
          <CardDeck className="w-100 mx-3 mx-sm-0">
            {current.map((item, index) => (
              <DeckCard
                image={item.image}
                title={item.title}
                text={item.text}
                link={item.link}
                competence={item.competence}
                contact={item.contact}
                email={item.email}
                key={index}
              />
            ))}
          </CardDeck>
          <div className="d-flex w-100 justify-content-center" />
        </Row>
      )}
    </ShowMore>
  );
}

Deck.defaultProps = {
  headline: "Overskrift",
  topMessage: "",
  endMessage: "",
  iconPrimary: "",
  iconSecondary: ""
};

export default Deck;
