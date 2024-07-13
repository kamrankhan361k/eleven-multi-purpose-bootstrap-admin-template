import { Badge } from "reactstrap";
import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge href="#" color="primary" className="mr-1">
          Primary
        </Badge>
        <Badge href="#" color="secondary" className="mr-1">
          Secondary
        </Badge>
        <Badge href="#" color="success" className="mr-1">
          Success
        </Badge>
        <Badge href="#" color="danger" className="mr-1">
          Danger
        </Badge>
        <Badge href="#" color="warning" className="mr-1">
          Warning
        </Badge>
        <Badge href="#" color="info" className="mr-1">
          Info
        </Badge>
        <Badge href="#" color="light" className="mr-1">
          Light
        </Badge>
        <Badge href="#" color="dark" className="mr-1">
          Dark
        </Badge>
      </div>
    );
  }
}
