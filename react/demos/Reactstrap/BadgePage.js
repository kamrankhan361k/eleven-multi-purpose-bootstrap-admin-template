import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import BadgeButtonExample from "../examples/BadgeButton";
import BadgeExample from "../examples/Badge";
import BadgeLinksExample from "../examples/BadgeLinks";
import BadgePillsExample from "../examples/BadgePills";
import BadgeVariationsExample from "../examples/BadgeVariations";
import SectionTitle from "../UI/SectionTitle";

export default class BadgesPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <SectionTitle>Badges</SectionTitle>

          <p>Scale to parent</p>
          <div className="mb-4">
            <BadgeExample />
          </div>

          <p>
            Badges can be used as part of links or buttons to provide a counter.
          </p>
          <div className="mb-4">
            <BadgeButtonExample />
          </div>

          <SectionTitle>Contextual variations</SectionTitle>
          <div className="mb-4">
            <BadgeVariationsExample />
          </div>

          <SectionTitle>Pills</SectionTitle>
          <div className="mb-4">
            <BadgePillsExample />
          </div>

          <SectionTitle>Links</SectionTitle>
          <p>
            Adding the <code>href</code> prop (without specifying a{" "}
            <code>tag</code> prop) will default the badge to a link.
          </p>
          <div className="mb-0">
            <BadgeLinksExample />
          </div>
        </Col>
      </Row>
    );
  }
}
