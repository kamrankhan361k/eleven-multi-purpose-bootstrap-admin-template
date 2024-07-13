import { Badge } from "reactstrap";
import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="primary" className="mr-1">
          Primary
        </Badge>
        <Badge color="secondary" className="mr-1">
          Secondary
        </Badge>
        <Badge color="success" className="mr-1">
          Success
        </Badge>
        <Badge color="danger" className="mr-1">
          Danger
        </Badge>
        <Badge color="warning" className="mr-1">
          Warning
        </Badge>
        <Badge color="info" className="mr-1">
          Info
        </Badge>
        <Badge color="light" className="mr-1">
          Light
        </Badge>
        <Badge color="dark" className="mr-1">
          Dark
        </Badge>
      </div>
    );
  }
}
