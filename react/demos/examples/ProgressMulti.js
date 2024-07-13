import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <small className="text-center">Plain</small>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="20" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="15" />
      </Progress>
      <small className="text-center">With Labels</small>
      <Progress multi>
        <Progress bar value="15">
          Meh
        </Progress>
        <Progress bar color="success" value="35">
          Wow!
        </Progress>
        <Progress bar color="warning" value="25">
          25%
        </Progress>
        <Progress bar color="danger" value="25">
          LOOK OUT!!
        </Progress>
      </Progress>
      <small className="text-center">Stripes and Animations</small>
      <Progress multi>
        <Progress bar striped value="15">
          Stripes
        </Progress>
        <Progress bar animated color="success" value="30">
          Animated Stripes
        </Progress>
        <Progress bar color="info" value="25">
          Plain
        </Progress>
      </Progress>
    </div>
  );
};

export default Example;
