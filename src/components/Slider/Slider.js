import React, {Component} from "react";
import "./Slider.sass";
import screenimg_1 from "../../images/interface/img-1.png";
import screenimg_2 from "../../images/interface/img-2.png";
import screenimg_3 from "../../images/interface/img-6.png";
import screenimg_4 from "../../images/interface/img-3.png";
import screenimg_5 from "../../images/interface/img-4.png";
import PhoneImg from "../../images/interface/Phone.png";

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      sliderOpacity: "opacity",
      flag: false,
      arrayImg: [screenimg_1, screenimg_2, screenimg_3, screenimg_4, screenimg_5],
    });

    this.scrollScreenLeft = this.scrollScreenLeft.bind(this);
    this.scrollScreenRight = this.scrollScreenRight.bind(this);
  };

  scrollScreenLeft() {
    let arrayImg = this.state.arrayImg;
    let elem = arrayImg.shift();
    arrayImg.push(elem);
    this.setState({
      arrayImg: arrayImg,
    })
  };

  scrollScreenRight() {
    let arrayImg = this.state.arrayImg;
    let elem = arrayImg.pop();
    arrayImg.unshift(elem);
    this.setState({
      arrayImg: arrayImg,
    })
  };

  render() {
    const {arrayImg} = this.state;
    return (
      <div className="slider-wrapper">

        <div className="slider">

          <div className="move-left" onClick={this.scrollScreenLeft}>
            <i className="fas fa-arrow-circle-left"/>
          </div>

          <div className="move-right" onClick={this.scrollScreenRight}>
            <i className="fas fa-arrow-circle-right"/>
          </div>

          <div className="slides">

            <div className="phone-over">
              <img src={PhoneImg} alt=""/>
            </div>

            {arrayImg.map((img, key) => {
                if (arrayImg.length <= 5) {
                  return <img key={key} src={img} alt=""/>
                } else {
                  return null;
                }
              }
            )
            }

          </div>
        </div>
      </div>
    );
  }
}