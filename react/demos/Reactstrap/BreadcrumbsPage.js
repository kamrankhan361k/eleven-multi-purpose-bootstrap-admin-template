import { Col, Row } from "reactstrap";

import BreadcrumbExample from "../examples/Breadcrumb";

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <BreadcrumbExample />
        </Col>
      </Row>
    );
  }
}
