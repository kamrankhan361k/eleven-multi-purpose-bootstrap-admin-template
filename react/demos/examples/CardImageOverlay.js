import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

import React from "react";

const Example = props => {
  return (
    <div>
      <Card inverse>
        <CardImg
          width="100%"
          src={`${process.env.baseUrl}images/318x270.svg`}
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Example;
