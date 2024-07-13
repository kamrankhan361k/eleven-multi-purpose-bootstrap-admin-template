import SectionTitle from "../UI/SectionTitle";
import TooltipAutoHideExample from "../examples/TooltipAutoHide";
import TooltipExample from "../examples/Tooltip";
import TooltipExampleMulti from "../examples/TooltipMulti";
import TooltipExampleUncontrolled from "../examples/TooltipUncontrolled";

export default class TooltipsPage extends React.Component {
  render() {
    return (
      <div>
        <p>
          Tooltips are built with{" "}
          <a href="https://popper.js.org/">https://popper.js.org/</a> via{" "}
          <a href="https://github.com/souporserious/react-popper">
            https://github.com/souporserious/react-popper
          </a>
          .
        </p>
        <div className="docs-example">
          <TooltipExample />
        </div>

        <SectionTitle>Tooltip Disable Autohide</SectionTitle>
        <div className="docs-example">
          <TooltipAutoHideExample />
        </div>

        <SectionTitle>Tooltips List</SectionTitle>
        <div className="docs-example">
          <TooltipExampleMulti />
        </div>

        <SectionTitle>Uncontrolled Tooltip</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the
          functionality wanted without the need to manage/control the state of
          the component. <code>UncontrolledTooltip</code> does not require{" "}
          <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <TooltipExampleUncontrolled />
        </div>
      </div>
    );
  }
}
