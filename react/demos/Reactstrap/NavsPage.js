import { Col, Row } from "reactstrap";

import NavPillsExample from "../examples/NavPills";
import NavTabsExample from "../examples/NavTabs";
import NavVerticalExample from "../examples/NavVertical";
import NavsExample from "../examples/Navs";
import SectionTitle from "../UI/SectionTitle";

export default class NavssPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <div className="mb-4">
            <NavsExample />
          </div>

          <SectionTitle>Vertical</SectionTitle>
          <div className="mb-4">
            <NavVerticalExample />
          </div>

          <SectionTitle>Tabs</SectionTitle>
          <div className="mb-4">
            <NavTabsExample />
          </div>

          <SectionTitle>Pills</SectionTitle>
          <div className="mb-4">
            <NavPillsExample />
          </div>
        </Col>
      </Row>
    );
  }
}
