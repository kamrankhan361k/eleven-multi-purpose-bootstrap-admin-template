import { ListGroup, ListGroupItem } from "reactstrap";

import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h5>Anchors </h5>
        <p>
          Be sure to{" "}
          <strong>
            not use the standard <code>.btn</code> classes here
          </strong>
          .
        </p>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
        <p />
        <h5>Buttons </h5>
        <ListGroup>
          <ListGroupItem active tag="button" action>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem disabled tag="button" action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
