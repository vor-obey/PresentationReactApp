import React, {Component} from "react";
import './InputText.sass';

export class InputText extends Component{
  render() {
    const {title, placeholder, btnName } = this.props;
    return (
      <div className='text-input__email'>
        <h2>{title}</h2>

        <div className="subscribe-info-input">
          <input type="email" placeholder={placeholder}/>

          <button type='submit'>
            {btnName}
          </button>
        </div>
      </div>
    );
  }

}
