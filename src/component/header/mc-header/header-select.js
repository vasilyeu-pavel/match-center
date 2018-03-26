import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { selectedRound } from '../../../AC'

class HeaderSelect extends Component{
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
  const rounds = legue.rounds.map((round, index) => (
    <DropdownItem header key = {round.id}>
      <div onClick = {this.sendIndexRound.bind(this, ++index)}>
        {round.name}
      </div>
    </DropdownItem>
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

  sendIndexRound (number) {
    const { selectedRound } = this.props
    selectedRound(number)

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

  }
}

export default connect(null, { selectedRound })(HeaderSelect)