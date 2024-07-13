import { Col, Row } from "reactstrap";

import BreadcrumbExample from "../examples/Breadcrumb";
import CollapseEventsExample from "../examples/CollapseEvents";
import CollapseExample from "../examples/Collapse";
import FadeExample from "../examples/Fade";
import NavbarExample from "../examples/Navbar";
import NavbarTogglerExample from "../examples/NavbarToggler";
import PaginationExample from "../examples/Pagination";
import PaginationSizingLargeExample from "../examples/PaginationSizingLarge";
import PaginationSizingSmallExample from "../examples/PaginationSizingSmall";
import PaginationStateExample from "../examples/PaginationState";
import PopoverExample from "../examples/Popover";
import PopoverExampleMulti from "../examples/PopoverMulti";
import PopoverFocusExample from "../examples/PopoverFocus";
import SectionTitle from "../UI/SectionTitle";
import TabsExample from "../examples/Tabs";
import TooltipAutoHideExample from "../examples/TooltipAutoHide";
import TooltipExample from "../examples/Tooltip";
import TooltipExampleMulti from "../examples/TooltipMulti";
import TooltipExampleUncontrolled from "../examples/TooltipUncontrolled";
import UncontrolledCollapseExample from "../examples/CollapseUncontrolled";
import UncontrolledPopoverExample from "../examples/PopoverUncontrolled";

export default class OtherPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <SectionTitle>Breadcrumbs</SectionTitle>
              <div className="mb-4">
                <BreadcrumbExample />
              </div>

              <SectionTitle>Collapse</SectionTitle>
              <div className="mb-4">
                <CollapseExample />
              </div>

              <SectionTitle>Fade</SectionTitle>
              <div className="mb-4">
                <FadeExample />
              </div>

              <SectionTitle>Pagination</SectionTitle>

              <div className="mb-4">
                <PaginationExample />
              </div>

              <SectionTitle>Disabled and active states</SectionTitle>
              <div className="mb-4">
                <PaginationStateExample />
              </div>

              <SectionTitle>Sizing</SectionTitle>
              <div className="mb-4">
                <PaginationSizingLargeExample />
              </div>

              <div className="mb-4">
                <PaginationSizingSmallExample />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <SectionTitle>Popovers</SectionTitle>
              <div className="mb-4">
                <PopoverExample />
              </div>

              <SectionTitle>Popovers Trigger</SectionTitle>
              <p>Trigger each popover to see information about the trigger</p>
              <div className="mb-4">
                <PopoverFocusExample />
              </div>

              <SectionTitle>Popovers Placements</SectionTitle>
              <div className="mb-4">
                <PopoverExampleMulti />
              </div>

              <SectionTitle>UncontrolledPopovers</SectionTitle>
              <div className="mb-4">
                <UncontrolledPopoverExample />
              </div>

              <SectionTitle>Tabs</SectionTitle>
              <div className="mb-4">
                <TabsExample />
              </div>

              <SectionTitle>Tooltips</SectionTitle>
              <div className="mb-4">
                <TooltipExample />
              </div>

              <SectionTitle>Tooltip Disable Autohide</SectionTitle>
              <div className="mb-4">
                <TooltipAutoHideExample />
              </div>

              <SectionTitle>Tooltips List</SectionTitle>
              <div className="mb-4">
                <TooltipExampleMulti />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
