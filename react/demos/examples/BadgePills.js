import { Badge } from "reactstrap";
import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="primary" pill className="mr-1">
          Primary
        </Badge>
        <Badge color="secondary" pill className="mr-1">
          Secondary
        </Badge>
        <Badge color="success" pill className="mr-1">
          Success
        </Badge>
        <Badge color="danger" pill className="mr-1">
          Danger
        </Badge>
        <Badge color="warning" pill className="mr-1">
          Warning
        </Badge>
        <Badge color="info" pill className="mr-1">
          Info
        </Badge>
        <Badge color="light" pill className="mr-1">
          Light
        </Badge>
        <Badge color="dark" pill className="mr-1">
          Dark
        </Badge>
      </div>
    );
  }
}
