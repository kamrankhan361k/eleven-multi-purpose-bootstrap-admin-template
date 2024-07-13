import {
  AlertFadelessExample,
  UncontrolledAlertFadelessExample
} from "../examples/AlertFadeless";
import { Col, Row } from "reactstrap";

import AlertContentExample from "../examples/AlertContent";
import AlertDismissExample from "../examples/AlertDismiss";
import AlertExample from "../examples/Alert";
import AlertLinkExample from "../examples/AlertLink";
import SectionTitle from "../UI/SectionTitle";

export default class AlertsPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <SectionTitle>Basic alerts</SectionTitle>
              <div className="mb-4">
                <AlertExample />
              </div>

              <SectionTitle>Additional content</SectionTitle>
              <div className="mb-4">
                <AlertContentExample />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <SectionTitle>Link color</SectionTitle>
              <div className="mb-4">
                <AlertLinkExample />
              </div>

              <SectionTitle>Dismissing</SectionTitle>
              <div className="mb-4">
                <AlertDismissExample />
              </div>

              <SectionTitle>Alerts without fade</SectionTitle>
              <div className="mb-4">
                <AlertFadelessExample />
                <UncontrolledAlertFadelessExample />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
