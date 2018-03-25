import React, { Component } from 'react'
import Slider from 'react-slick'
import SliderMatch from './slider-match'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SliderMatchList extends Component {
    static propTypes = {
        //from connect
        matchLists: PropTypes.array,
    };

  render() {
    console.log(this.props)
    const { matchLists } = this.props
    const match = matchLists.map(match => (
    <SliderMatch match = {match} key = {match.id}/>
    ))

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div>
        <Slider {...settings}>
          {match}
        </Slider>
      </div>
    );
  }
}

export default connect ((state) => (console.log(state),{
  matchLists: state.match
}))(SliderMatchList)
