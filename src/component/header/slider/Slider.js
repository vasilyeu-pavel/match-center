import React, { Component } from 'react';
import './style.css'
import SliderMathcList from './slider-component/slider-matchList'

class Slider extends Component {
  render() {
    return (
      <div className="header-container">
        	<SliderMathcList />
      </div>
    );
  }
}

export default Slider;
