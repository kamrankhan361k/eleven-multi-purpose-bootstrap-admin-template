import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <Progress animated value={2 * 5} className="mb-1" />
      <Progress animated color="success" value="25" className="mb-1" />
      <Progress animated color="info" value={50} className="mb-1" />
      <Progress animated color="warning" value={75} className="mb-1" />
      <Progress animated color="danger" value="100" className="mb-1" />
      <Progress multi>
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
      </Progress>
    </div>
  );
};

export default Example;
