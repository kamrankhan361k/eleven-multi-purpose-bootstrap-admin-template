import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <Progress value="25" className="mb-1">
        25%
      </Progress>
      <Progress value={50} className="mb-1">
        1/2
      </Progress>
      <Progress value={75} className="mb-1">
        You're almost there!
      </Progress>
      <Progress color="success" value="100" className="mb-1">
        You did it!
      </Progress>
      <Progress multi>
        <Progress bar value="15">
          Meh
        </Progress>
        <Progress bar color="success" value="30">
          Wow!
        </Progress>
        <Progress bar color="info" value="25">
          Cool
        </Progress>
        <Progress bar color="warning" value="20">
          20%
        </Progress>
        <Progress bar color="danger" value="5">
          !!
        </Progress>
      </Progress>
    </div>
  );
};

export default Example;
