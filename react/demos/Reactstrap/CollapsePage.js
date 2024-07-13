import CollapseEventsExample from "../examples/CollapseEvents";
import CollapseExample from "../examples/Collapse";
import SectionTitle from "../UI/SectionTitle";
import UncontrolledCollapseExample from "../examples/CollapseUncontrolled";

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <div className="docs-example">
          <CollapseExample />
        </div>

        <SectionTitle>Events</SectionTitle>
        <div className="docs-example">
          <CollapseEventsExample />
        </div>

        <SectionTitle>Uncontrolled Collapse</SectionTitle>
        <div className="docs-example">
          <UncontrolledCollapseExample />
        </div>
      </div>
    );
  }
}
