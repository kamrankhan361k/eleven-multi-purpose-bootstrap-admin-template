import PaginationExample from "../examples/Pagination";
import PaginationSizingLargeExample from "../examples/PaginationSizingLarge";
import PaginationSizingSmallExample from "../examples/PaginationSizingSmall";
import PaginationStateExample from "../examples/PaginationState";
import SectionTitle from "../UI/SectionTitle";

export default class PaginationPage extends React.Component {
  render() {
    return (
      <div>
        <div className="docs-example">
          <PaginationExample />
        </div>

        <SectionTitle>Disabled and active states</SectionTitle>
        <div className="docs-example">
          <PaginationStateExample />
        </div>

        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <PaginationSizingLargeExample />
        </div>

        <div className="docs-example">
          <PaginationSizingSmallExample />
        </div>
      </div>
    );
  }
}
