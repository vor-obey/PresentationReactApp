import React, {Component} from "react";
import "./SliderTeam.sass";
import user_1 from "../../images/user1.jpg";
import user_2 from "../../images/user2.jpg";
import user_3 from "../../images/user3.jpg";
import {Item} from "./SliderTeamItem/Item";

let direction;

export class SliderTeam extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    const sliderRef = this.sliderRef.current;
    const sliderRefStyle = this.sliderRef.current.style;

    sliderRef.addEventListener("transitionend", () => {
      if (direction === 1) {
        sliderRef.appendChild(sliderRef.firstElementChild);
      } else if (direction === -1) {
        sliderRef.prepend(sliderRef.lastElementChild);
      }

      sliderRefStyle.transition = "none";
      sliderRefStyle.transform = "translate(0)";
      setTimeout(() => {
        sliderRefStyle.transition = "all .5s ease-in-out";
      })
    })
  };


  slidePrev = () => {
    direction = -1
    this.sliderRef.current.style.transform = "translate(33.3%)";
    this.carouselRef.current.style.justifyContent = "center";
  }

  slideNext = () => {
    direction = 1
    this.sliderRef.current.style.transform = "translate(-33.3%)";
    this.carouselRef.current.style.justifyContent = "flex-start";
  }


  render() {
    return (
      <div className="slider-container">
        <div className="carousel" ref={this.carouselRef}>
          <div className="slider" ref={this.sliderRef}>

            <Item
              personLogo={user_1}
              text="Just then her head struck against the roof of the hall: in fact she was now more than
                nine feet high, and she at once took up the little golden key and hurried off to the garden door"
              name="Cameron Dowman"
            />

            <Item
              personLogo={user_2}
              text="Just then her head struck against the roof of the hall: in fact she was now more than
                nine feet high, and she at once took up the little golden key and hurried off to the garden door"
              name="Greg Simple"
            />

            <Item
              personLogo={user_3}
              text="Just then her head struck against the roof of the hall: in fact she was now more than
                nine feet high, and she at once took up the little golden key and hurried off to the garden door"
              name="Suzi Daemon"
            />

          </div>

          <div className="controls">
            <span onClick={this.slidePrev} className="arrow left"><i className="fas fa-chevron-left"/></span>
            <span onClick={this.slideNext} className="arrow right"><i className="fas fa-chevron-right"/></span>
          </div>

        </div>
      </div>
    );
  }
}