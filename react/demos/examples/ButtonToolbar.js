import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup className="mr-1">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup className="mr-1">
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
