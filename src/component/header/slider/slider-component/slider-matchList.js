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

  componentWillReceiveProps(nextProps) {
    const {filterRound} = nextProps
    if (filterRound === 1) this.slick.slickGoTo(filterRound)
    this.slick.slickGoTo((filterRound - 1) * 10) //фильтр на кол-во матчей в туре
  }

  render() {
    const { matchLists } = this.props
    const match = matchLists.map((match, index) => (
    <SliderMatch match = {match} key = {index} index = {index}/>
    ))

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
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
        <Slider ref={ (slider => this.slick = slider)} {...settings}>
          {match}
        </Slider>
      </div>
    );
  }
}

export default connect ((state) => ({
  matchLists: state.matches,
  filterRound: state.filterRound
}))(SliderMatchList)
