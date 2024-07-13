import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <Progress value={2 * 5} className="mb-1" />
      <Progress color="success" value="25" className="mb-1" />
      <Progress color="info" value={50} className="mb-1" />
      <Progress color="warning" value={75} className="mb-1" />
      <Progress color="danger" value="100" />
    </div>
  );
};

export default Example;
