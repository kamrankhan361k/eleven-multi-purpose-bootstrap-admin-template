import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from "reactstrap";

import CustomDropdownExample from "../examples/CustomDropdown";
import DropdownExample from "../examples/Dropdown";
import DropdownSetActiveFromChildExample from "../examples/DropdownSetActiveFromChild";
import DropdownSizingExample from "../examples/DropdownSizing";
import DropdownUncontrolledExample from "../examples/DropdownUncontrolled";
import SectionTitle from "../UI/SectionTitle";

export default class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExample2 = this.toggle.bind(this);
    this.state = {
      example2: false
    };
  }

  toggle() {
    this.setState({
      example2: !this.state.example2
    });
  }

  render() {
    return (
      <div>
        <div className="docs-example">
          <DropdownExample />
        </div>

        <SectionTitle>Alignment</SectionTitle>
        <div className="docs-example">
          <div style={{ display: "inline-block" }}>
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                Dropdown's menu is right-aligned
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Another Really Really Long Action (Really!)
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <DropdownSizingExample group size="lg" />
            <DropdownSizingExample className="mt-1" />
            <DropdownSizingExample className="mt-1" group size="sm" />
          </div>
        </div>

        <h4>Custom Dropdown</h4>
        <div className="docs-example">
          <CustomDropdownExample />
        </div>

        <SectionTitle>Uncontrolled Dropdown</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the
          functionality wanted without the need to manage/control the state of
          the component. <code>UncontrolledDropdown</code> does not require{" "}
          <code>isOpen</code> nor <code>toggle</code> props to work. For the{" "}
          <code>ButtonDropdown</code> flavor, an uncontrolled component have
          been made as well; <code>UncontrolledButtonDropdown</code>.
        </p>
        <div className="docs-example">
          <DropdownUncontrolledExample />
        </div>

        <SectionTitle>Drop direction variations</SectionTitle>
        <div className="docs-example">
          <Row>
            <Col>
              <Dropdown
                direction="up"
                isOpen={this.state.ddDropup}
                toggle={() => {
                  this.setState({ ddDropup: !this.state.ddDropup });
                }}
              >
                <DropdownToggle caret>Dropup</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown
                direction="left"
                isOpen={this.state.ddDropleft}
                toggle={() => {
                  this.setState({ ddDropleft: !this.state.ddDropleft });
                }}
              >
                <DropdownToggle caret>Dropleft</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown
                direction="right"
                isOpen={this.state.ddDropright}
                toggle={() => {
                  this.setState({ ddDropright: !this.state.ddDropright });
                }}
              >
                <DropdownToggle caret>Dropright</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>

        <SectionTitle>Modifiers</SectionTitle>
        <div className="docs-example">
          <Row>
            <Col>
              <Dropdown
                isOpen={this.state.ddModifiers}
                toggle={() => {
                  this.setState({ ddModifiers: !this.state.ddModifiers });
                }}
              >
                <DropdownToggle>Dropdown</DropdownToggle>
                <DropdownMenu
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: data => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: "auto",
                            maxHeight: "100px"
                          }
                        };
                      }
                    }
                  }}
                >
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>

        <SectionTitle>setActiveFromChild</SectionTitle>
        <p>
          Use <code>setActiveFromChild</code> prop to automatically set the
          dropdown to active when any of the dropdown menu items are active.
          Note: this prop will not work in conjunction with react-router{" "}
          <code>Link</code> and <code>activeClassName</code>.
        </p>
        <div className="docs-example">
          <DropdownSetActiveFromChildExample />
        </div>
      </div>
    );
  }
}
