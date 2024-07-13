import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from "reactstrap";

import React from "react";

const Example = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={`${process.env.baseUrl}images/318x180.svg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src={`${process.env.baseUrl}images/318x180.svg`}
          alt="Card image cap"
        />
      </Card>
    </div>
  );
};

export default Example;
