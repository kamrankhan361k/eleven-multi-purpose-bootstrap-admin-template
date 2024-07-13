import { Col, Row } from "reactstrap";

import ListGroupAnchorsAndButtonsExample from "../examples/ListGroupAnchorsAndButtons";
import ListGroupBadgeExample from "../examples/ListGroupBadge";
import ListGroupContextualClassesExample from "../examples/ListGroupContextualClasses";
import ListGroupCustomContentExample from "../examples/ListGroupCustomContent";
import ListGroupDisabledItemsExample from "../examples/ListGroupDisabledItems";
import ListGroupExample from "../examples/ListGroup";
import ListGroupFlushExample from "../examples/ListGroupFlush";
import SectionTitle from "../UI/SectionTitle";

export default class ListGroupPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <SectionTitle>Basic</SectionTitle>
              <div className="mb-4">
                <ListGroupExample />
              </div>

              <SectionTitle>Tags</SectionTitle>
              <div className="mb-4">
                <ListGroupBadgeExample />
              </div>

              <SectionTitle>Disabled items</SectionTitle>
              <div className="mb-4">
                <ListGroupDisabledItemsExample />
              </div>

              <div className="mb-4">
                <ListGroupAnchorsAndButtonsExample />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <SectionTitle>Contextual classes</SectionTitle>
              <div className="mb-4">
                <ListGroupContextualClassesExample />
              </div>

              <SectionTitle>Custom content</SectionTitle>
              <div className="mb-4">
                <ListGroupCustomContentExample />
              </div>

              <SectionTitle>Flush</SectionTitle>
              <div className="mb-4">
                <ListGroupFlushExample />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
