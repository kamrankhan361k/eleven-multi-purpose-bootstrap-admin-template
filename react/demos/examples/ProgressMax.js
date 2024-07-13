import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <small className="text-center">1 of 5</small>
      <Progress value="1" max="5" />
      <small className="text-center">50 of 135</small>
      <Progress value={50} max="135" />
      <small className="text-center">75 of 111</small>
      <Progress value={75} max={111} />
      <small className="text-center">463 of 500</small>
      <Progress value="463" max={500} />

      <small className="text-center">Various (40) of 55</small>
      <Progress multi>
        <Progress bar value="5" max={55}>
          5
        </Progress>
        <Progress bar color="success" value="15" max={55}>
          15
        </Progress>
        <Progress bar color="warning" value="10" max={55}>
          10
        </Progress>
        <Progress bar color="danger" value="10" max={55}>
          10
        </Progress>
      </Progress>
    </div>
  );
};

export default Example;
