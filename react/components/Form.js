import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import CustomControlsExample from "../demos/examples/CustomControls";
import FormExample from "../demos/examples/Form";
import FormFeedbackExample from "../demos/examples/FormFeedback";
import FormGridExample from "../demos/examples/FormGrid";
import FormGridFormRowExample from "../demos/examples/FormGridFormRow";
import FormInlineExample from "../demos/examples/FormInline";
import InlineCheckboxesExample from "../demos/examples/InlineCheckboxes";
import InputGridSizingExample from "../demos/examples/InputGridSizing";
import InputSizingExample from "../demos/examples/InputSizing";
import InputTypeExample from "../demos/examples/InputType";
import LabelHiddenExample from "../demos/examples/LabelHidden";

const Form = () => (
  <Row>
    <Col xs={12} sm={6}>
      <Card className="mb-4">
        <CardHeader>
          <b>Basic form</b>
        </CardHeader>
        <CardBody>
          <FormExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Form grid</b>
        </CardHeader>
        <CardBody>
          <FormGridExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Form grid form row</b>
        </CardHeader>
        <CardBody>
          <FormGridFormRowExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Form inline</b>
        </CardHeader>
        <CardBody>
          <FormInlineExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Form feedback</b>
        </CardHeader>
        <CardBody>
          <FormFeedbackExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Label hidden</b>
        </CardHeader>
        <CardBody>
          <LabelHiddenExample />
        </CardBody>
      </Card>
    </Col>

    <Col xs={12} sm={6}>
      <Card className="mb-4">
        <CardHeader>
          <b>Input type</b>
        </CardHeader>
        <CardBody>
          <InputTypeExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Inline checkboxes</b>
        </CardHeader>
        <CardBody>
          <InlineCheckboxesExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Input sizing</b>
        </CardHeader>
        <CardBody>
          <InputSizingExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Input grid sizing</b>
        </CardHeader>
        <CardBody>
          <InputGridSizingExample />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <b>Custom controls</b>
        </CardHeader>
        <CardBody>
          <CustomControlsExample />
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Form;
