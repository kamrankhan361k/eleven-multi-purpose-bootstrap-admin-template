import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import ButtonDropdownExample from '../examples/ButtonDropdown';
import ButtonDropdownUncontrolledExample from '../examples/ButtonDropdownUncontrolled';
import Example from '../examples/ButtonDropdownMulti';
import ExampleSplit from '../examples/ButtonDropdownMultiSplit';
import { PrismCode } from 'react-prism';
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import SectionTitle from '../UI/SectionTitle';

const ButtonDropdownExampleSource = require('!!raw-loader!../examples/ButtonDropdown');

export default class ButtonDropdownPage extends React.Component {
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
          <ButtonDropdownExample />
        </div>

        <SectionTitle>Single button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <Example color="primary" text="Primary" />
            <Example color="secondary" text="Secondary" />
            <Example color="success" text="Success" />
            <Example color="info" text="Info" />
            <Example color="warning" text="Warning" />
            <Example color="danger" text="Danger" />
          </div>
        </div>

        <SectionTitle>Split button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <ExampleSplit color="primary" text="Primary" />
            <ExampleSplit color="secondary" text="Secondary" />
            <ExampleSplit color="success" text="Success" />
            <ExampleSplit color="info" text="Info" />
            <ExampleSplit color="warning" text="Warning" />
            <ExampleSplit color="danger" text="Danger" />
          </div>
        </div>

        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown
              isOpen={this.state.btnLg}
              toggle={() => {
                this.setState({ btnLg: !this.state.btnLg });
              }}
            >
              <DropdownToggle caret size="lg">
                Large Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="mt-1">
            <ButtonDropdown
              isOpen={this.state.btnSm}
              toggle={() => {
                this.setState({ btnSm: !this.state.btnSm });
              }}
            >
              <DropdownToggle caret size="sm">
                Small Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>

        <SectionTitle>Uncontrolled Dropdown</SectionTitle>
        <div className="docs-example">
          <ButtonDropdownUncontrolledExample />
        </div>

        <SectionTitle>Drop direction variations</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown
              direction="up"
              isOpen={this.state.btnDropup}
              toggle={() => {
                this.setState({ btnDropup: !this.state.btnDropup });
              }}
            >
              <DropdownToggle caret>Dropup</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>{' '}
            <ButtonDropdown
              direction="left"
              isOpen={this.state.btnDropleft}
              toggle={() => {
                this.setState({ btnDropleft: !this.state.btnDropleft });
              }}
            >
              <DropdownToggle caret>Dropleft</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>{' '}
            <ButtonDropdown
              direction="right"
              isOpen={this.state.btnDropright}
              toggle={() => {
                this.setState({ btnDropright: !this.state.btnDropright });
              }}
            >
              <DropdownToggle caret>Dropright</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
      </div>
    );
  }
}
