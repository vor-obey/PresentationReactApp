import React, {Component} from "react";
import './Sybscribe.sass';
import {InputText} from "../../InputText/InputText";

export class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe-form-wrapper">
        <div className="subscribe-form">

          <InputText
          title='Subscribe our newsletters'
          placeholder='Your e-mail'
          btnName='Subscribe'
          />
          <p>We promise to never spam you.</p>

        </div>
      </div>
    );
  }
}