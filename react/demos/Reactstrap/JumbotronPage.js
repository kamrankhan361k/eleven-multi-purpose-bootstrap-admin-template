import { Col, Row } from "reactstrap";

import JumbotronExample from "../examples/Jumbotron";
import JumbotronFluidExample from "../examples/JumbotronFluid";
import SectionTitle from "../UI/SectionTitle";

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <div className="mb-4">
            <JumbotronExample />
          </div>

          <SectionTitle>Fluid Jumbotron</SectionTitle>
          <div className="mb-4">
            <JumbotronFluidExample />
          </div>
        </Col>
      </Row>
    );
  }
}
