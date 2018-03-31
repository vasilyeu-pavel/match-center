import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const {seasson} = this.props
    const rounds = seasson.rounds.map((round, index) => (
      <DropdownItem header key = {round}>
        <div onClick = {this.sendIndexRound.bind(this, ++index)}>
          Round {round}
        </div>
      </DropdownItem>
    ))

    return (
      <div className = "col-md-1">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            rounds
          </DropdownToggle>
          <DropdownMenu>
          {rounds}
          </DropdownMenu>
        </ButtonDropdown>
      </div>  
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

HeaderSelect.propTypes = {
  seasson: PropTypes.object,
  selectedRound: PropTypes.func,
}

export default connect(null, { selectedRound })(HeaderSelect)