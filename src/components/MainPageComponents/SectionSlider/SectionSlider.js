import React, {Component} from "react";
import "./SectionSlider.sass";
import {Slider} from "../../Slider/Slider";
import InputText from "../../InputText/InputText";
import {ButtonAppStore} from "../../Buttons/ButtonsAppStore/ButtonAppStore";
import {InterfacePresentation} from "./InterfacePresentation/InterfacePresentation";

export class SectionSlider extends Component {
  render() {
    return (
      <div className="interface-info">

        <h2>Beautiful interface</h2>
        <span/>
        <p>landing screen</p>

        <Slider/>

        <InterfacePresentation/>

        <div className="interface-info-form">
          <p>new providence</p>

          <InputText
            title="Get it to your smartphone"
            placeholder="Enter your email..."
            btnName="Set Invite"
            onSubmit={this.props.onSubmit}
            inputType="email"
            inputName="email"
          />

          <p>or download from</p>

          <ButtonAppStore
            path="/"
            btnClassName="app-store-btn"
          />

        </div>
      </div>
    );
  }
}