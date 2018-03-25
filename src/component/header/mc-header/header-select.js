import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class HeaderSelect extends React.Component {
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
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Week
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>1</DropdownItem>
          <DropdownItem header>2</DropdownItem>
          <DropdownItem header>3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}