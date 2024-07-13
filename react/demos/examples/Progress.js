import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <small className="text-center">0%</small>
      <Progress />
      <small className="text-center">25%</small>
      <Progress value="25" />
      <small className="text-center">50%</small>
      <Progress value={50} />
      <small className="text-center">75%</small>
      <Progress value={75} />
      <small className="text-center">100%</small>
      <Progress value="100" />
      <small className="text-center">Multiple bars</small>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    </div>
  );
};

export default Example;
