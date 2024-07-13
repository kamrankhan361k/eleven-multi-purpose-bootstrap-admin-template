import PopoverExample from "../examples/Popover";
import PopoverExampleMulti from "../examples/PopoverMulti";
import PopoverFocusExample from "../examples/PopoverFocus";
import SectionTitle from "../UI/SectionTitle";
import UncontrolledPopoverExample from "../examples/PopoverUncontrolled";

export default class PopoversPage extends React.Component {
  render() {
    return (
      <div>
        <p>
          Popovers are built with{" "}
          <a href="https://popper.js.org/">https://popper.js.org/</a> via{" "}
          <a href="https://github.com/souporserious/react-popper">
            https://github.com/souporserious/react-popper
          </a>
          .
        </p>
        <div className="docs-example">
          <PopoverExample />
        </div>

        <SectionTitle>Popovers Trigger</SectionTitle>
        <p>Trigger each popover to see information about the trigger</p>
        <div className="docs-example">
          <PopoverFocusExample />
        </div>

        <SectionTitle>Popovers Placements</SectionTitle>
        <div className="docs-example">
          <PopoverExampleMulti />
        </div>

        <SectionTitle>UncontrolledPopovers</SectionTitle>
        <div className="docs-example">
          <UncontrolledPopoverExample />
        </div>
      </div>
    );
  }
}
