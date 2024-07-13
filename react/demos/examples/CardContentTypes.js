import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

import React from "react";

const Example = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={`${process.env.baseUrl}images/318x180.svg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
