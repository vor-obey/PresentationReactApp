import React, {Component, Fragment} from "react";
import {SectionText} from "../../components/MainPageComponents/SectionText/SectionText";
import {SectionHuckUs} from "../../components/MainPageComponents/SectionHuckUs/SectionHuckUs";
import {SectionPartners} from "../../components/MainPageComponents/SectionPartners/SectionPartners";
import {SectionSlider} from "../../components/MainPageComponents/SectionSlider/SectionSlider";
import {SliderTeam} from "../../components/SliderTeam/SliderTeam";
import {ChoosePlan} from "../../components/MainPageComponents/SectionChoosePlan/ChoosePlan";
import {Subscribe} from "../../components/MainPageComponents/SectionSubscribe/Subscribe";
import {HeaderText} from "../../components/HeaderText/HeaderText";
import {PopUpVideo} from "../../components/PopUpVideo/PopUpVideo";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      popupVisible: false,
    })
  }

  handleStateVisiblePopup = () => {
    this.setState({
      popupVisible: !this.state.popupVisible,
    })
    console.log(this.state.popupVisible)
  }

  handleVisiblePopup = (value) => {
    this.setState({
      popupVisible: value,
    })
  }


  render() {
    return (
      <Fragment>
        <PopUpVideo
          popupVisible={this.state.popupVisible}
          onClick={this.handleVisiblePopup}
        />

        <HeaderText
          handleStateVisiblePopup={this.handleStateVisiblePopup}
        />

        <SectionText/>

        <SectionHuckUs/>

        <SectionPartners/>

        <SectionSlider/>

        <SliderTeam/>

        <ChoosePlan/>

        <Subscribe/>

      </Fragment>
    );
  }
}