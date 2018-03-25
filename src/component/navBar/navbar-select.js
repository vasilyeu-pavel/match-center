import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavBarSelect extends Component {
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

	render () {
		return (
			<div className = "navbar-select">
				<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
			        <DropdownToggle caret>
			          <span>English</span>
			        </DropdownToggle>
			        <DropdownMenu>
			          <DropdownItem header>english</DropdownItem>
			        </DropdownMenu>
			      </ButtonDropdown>
			</div>	
			)
	}
}

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};

export default NavBarSelect;
