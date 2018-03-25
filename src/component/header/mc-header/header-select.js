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
  const {legue} = this.props
  const rounds = legue.rounds.map((round) => (
    <DropdownItem header key = {round.id}>{round.name}</DropdownItem>
  ))

    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          rounds
        </DropdownToggle>
        <DropdownMenu>
          {rounds}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}