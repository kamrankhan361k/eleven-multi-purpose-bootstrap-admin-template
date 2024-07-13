import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import ButtonGroupExample from "../examples/ButtonGroup";
import ButtonToolbarExample from "../examples/ButtonToolbar";
import SectionTitle from "../UI/SectionTitle";

export default class ButtonGroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <div className="docs-example">
          <div>
            <ButtonGroupExample />
          </div>
        </div>

        <SectionTitle>Button Toolbar</SectionTitle>
        <div className="docs-example">
          <ButtonToolbarExample />
        </div>

        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
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
        </div>

        <SectionTitle>Nesting</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
          </div>
        </div>

        <SectionTitle>Vertical variation</SectionTitle>
        <div className="docs-example">
          <ButtonGroup vertical>
            <Button>1</Button>
            <Button>2</Button>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle caret>Dropdown</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
