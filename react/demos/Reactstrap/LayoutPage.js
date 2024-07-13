import { Col, Row } from "reactstrap";

import LayoutExample from "../examples/Layout";

export default class LayoutsPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <LayoutExample />
        </Col>
      </Row>
    );
  }
}
