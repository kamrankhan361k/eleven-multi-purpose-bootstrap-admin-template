import { Form, Input } from "reactstrap";

import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="lg" bsSize="lg" className="mb-1" />
        <Input placeholder="default" className="mb-1" />
        <Input placeholder="sm" bsSize="sm" className="mb-1" />
        <Input type="select" bsSize="lg" className="mb-1">
          <option>Large Select</option>
        </Input>
        <Input type="select" className="mb-1">
          <option>Default Select</option>
        </Input>
        <Input type="select" bsSize="sm">
          <option>Small Select</option>
        </Input>
      </Form>
    );
  }
}
