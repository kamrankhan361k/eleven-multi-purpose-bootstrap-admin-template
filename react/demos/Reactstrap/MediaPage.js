import { Col, Row } from "reactstrap";

import MediaAlignmentExample from "../examples/MediaAlignment";
import MediaExample from "../examples/Media";
import MediaListExample from "../examples/MediaList";
import MediaNestedExample from "../examples/MediaNested";

export default class MediaPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <div className="mb-4">
            <MediaExample />
          </div>

          <h4>Nesting</h4>
          <div className="mb-4">
            <MediaNestedExample />
          </div>

          <h4>Alignment</h4>
          <div className="mb-4">
            <MediaAlignmentExample />
          </div>

          <h4>Media list</h4>
          <div className="mb-4">
            <MediaListExample />
          </div>
        </Col>
      </Row>
    );
  }
}
