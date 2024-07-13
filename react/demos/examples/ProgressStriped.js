import { Progress } from "reactstrap";
import React from "react";

const Example = props => {
  return (
    <div>
      <Progress striped value={2 * 5} className="mb-1" />
      <Progress striped color="success" value="25" className="mb-1" />
      <Progress striped color="info" value={50} className="mb-1" />
      <Progress striped color="warning" value={75} className="mb-1" />
      <Progress striped color="danger" value="100" className="mb-1" />
      <Progress multi>
        <Progress striped bar value="10" />
        <Progress striped bar color="success" value="30" />
        <Progress striped bar color="warning" value="20" />
        <Progress striped bar color="danger" value="20" />
      </Progress>
    </div>
  );
};

export default Example;
