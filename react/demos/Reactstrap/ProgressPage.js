import { Col, Row } from "reactstrap";

import ProgressAnimatedExample from "../examples/ProgressAnimated";
import ProgressColorExample from "../examples/ProgressColor";
import ProgressExample from "../examples/Progress";
import ProgressLabelsExample from "../examples/ProgressLabels";
import ProgressMaxExample from "../examples/ProgressMax";
import ProgressMultiExample from "../examples/ProgressMulti";
import ProgressStripedExample from "../examples/ProgressStriped";
import SectionTitle from "../UI/SectionTitle";

export default class ProgressPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <SectionTitle>Basic</SectionTitle>
          <div className="mb-4">
            <ProgressExample />
          </div>

          <SectionTitle>Color Variants</SectionTitle>
          <div className="mb-4">
            <div>
              <ProgressColorExample />
            </div>
          </div>

          <SectionTitle>Labels</SectionTitle>
          <div className="mb-4">
            <div>
              <ProgressLabelsExample />
            </div>
          </div>

          <SectionTitle>Striped</SectionTitle>
          <div className="mb-4">
            <div>
              <ProgressStripedExample />
            </div>
          </div>

          <SectionTitle>Animated</SectionTitle>
          <p>
            The <code>animated</code> prop also adds the <code>striped</code>{" "}
            prop; there is no need to pass both.
          </p>
          <div className="mb-4">
            <div>
              <ProgressAnimatedExample />
            </div>
          </div>

          <SectionTitle>Multiple bars / Stacked</SectionTitle>
          <div className="mb-4">
            <div>
              <ProgressMultiExample />
            </div>
          </div>

          <SectionTitle>Max value</SectionTitle>
          <div className="mb-4">
            <div>
              <ProgressMaxExample />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
