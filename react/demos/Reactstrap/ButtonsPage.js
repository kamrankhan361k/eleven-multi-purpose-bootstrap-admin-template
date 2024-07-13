import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from "reactstrap";

import ButtonCloseIcon from "../examples/ButtonCloseIcon";
import ButtonExample from "../examples/Button";
import ButtonGroupExample from "../examples/ButtonGroup";
import ButtonOutline from "../examples/ButtonOutline";
import ButtonStateful from "../examples/ButtonStateful";
import ButtonToolbarExample from "../examples/ButtonToolbar";
import CustomDropdownExample from "../examples/CustomDropdown";
import DropdownExample from "../examples/Dropdown";
import DropdownSetActiveFromChildExample from "../examples/DropdownSetActiveFromChild";
import DropdownSizingExample from "../examples/DropdownSizing";
import DropdownUncontrolledExample from "../examples/DropdownUncontrolled";
import SectionTitle from "../UI/SectionTitle";

export default class ButtonsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      example2: false
    };
  }

  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <div className="mb-4">
                <ButtonExample />
              </div>

              <SectionTitle>Outline Buttons</SectionTitle>
              <div className="mb-4">
                <ButtonOutline />
              </div>

              <SectionTitle>Sizes</SectionTitle>
              <div className="mb-4">
                <Button color="primary" size="lg">
                  Large Button
                </Button>{" "}
                <Button color="secondary" size="lg">
                  Large Button
                </Button>
              </div>

              <div className="mb-4">
                <Button color="primary" size="sm">
                  Small Button
                </Button>{" "}
                <Button color="secondary" size="sm">
                  Small Button
                </Button>
              </div>

              <div className="mb-4">
                <Button color="primary" size="lg" block>
                  Block level button
                </Button>
                <Button color="secondary" size="lg" block>
                  Block level button
                </Button>
              </div>

              <SectionTitle>Active State</SectionTitle>
              <div className="mb-4">
                <Button color="primary" size="lg" active>
                  Primary link
                </Button>{" "}
                <Button color="secondary" size="lg" active>
                  Link
                </Button>
              </div>

              <SectionTitle>Button groups</SectionTitle>

              <div className="mb-4">
                <ButtonGroupExample />
              </div>

              <SectionTitle>Button Toolbar</SectionTitle>
              <div className="mb-4">
                <ButtonToolbarExample />
              </div>

              <SectionTitle>Sizing</SectionTitle>
              <div className="mb-4">
                <ButtonGroup size="lg">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup className="mt-1">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup size="sm" className="mt-1">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </div>

              <SectionTitle>Nesting</SectionTitle>
              <div className="mb-4">
                <ButtonGroup>
                  <Button>1</Button>
                  <Button>2</Button>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen1}
                    toggle={() => {
                      this.setState({
                        dropdownOpen1: !this.state.dropdownOpen1
                      });
                    }}
                  >
                    <DropdownToggle caret>Dropdown</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Dropdown Link</DropdownItem>
                      <DropdownItem>Dropdown Link</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </div>

              <SectionTitle>Vertical variation</SectionTitle>
              <div className="mb-4">
                <ButtonGroup vertical>
                  <Button>1</Button>
                  <Button>2</Button>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={() => {
                      this.setState({ dropdownOpen: !this.state.dropdownOpen });
                    }}
                  >
                    <DropdownToggle caret>Dropdown</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Dropdown Link</DropdownItem>
                      <DropdownItem>Dropdown Link</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <SectionTitle>Disabled State</SectionTitle>
              <div className="mb-4">
                <Button color="primary" size="lg" disabled>
                  Primary button
                </Button>{" "}
                <Button color="secondary" size="lg" disabled>
                  Button
                </Button>
              </div>

              <SectionTitle>
                Checkbox and Radio Buttons (Stateful Buttons)
              </SectionTitle>
              <div className="mb-4">
                <ButtonStateful />
              </div>

              <SectionTitle>Close icon</SectionTitle>
              <div className="mb-4">
                <ButtonCloseIcon />
              </div>

              <div>
                <div className="mb-4">
                  <DropdownExample />
                </div>

                <SectionTitle>Alignment</SectionTitle>
                <div className="mb-4">
                  <div style={{ display: "inline-block" }}>
                    <Dropdown
                      isOpen={this.state.example2}
                      toggle={() => {
                        this.setState({ example2: !this.state.example2 });
                      }}
                    >
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
                <div className="mb-4">
                  <div>
                    <DropdownSizingExample group size="lg" />
                    <DropdownSizingExample className="mt-1" />
                    <DropdownSizingExample className="mt-1" group size="sm" />
                  </div>
                </div>

                <h4>Custom Dropdown</h4>
                <div className="mb-4">
                  <CustomDropdownExample />
                </div>

                <SectionTitle>Uncontrolled Dropdown</SectionTitle>
                <div className="mb-4">
                  <DropdownUncontrolledExample />
                </div>

                <SectionTitle>Drop direction variations</SectionTitle>
                <div className="mb-4">
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
                          this.setState({
                            ddDropright: !this.state.ddDropright
                          });
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
                <div className="mb-4">
                  <Row>
                    <Col>
                      <Dropdown
                        isOpen={this.state.ddModifiers}
                        toggle={() => {
                          this.setState({
                            ddModifiers: !this.state.ddModifiers
                          });
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
                <div className="mb-4">
                  <DropdownSetActiveFromChildExample />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
