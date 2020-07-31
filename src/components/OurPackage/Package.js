import React, {Component} from "react";
import './Package.sass';
import {MainButton} from "../Buttons/MainButton/MainButton";


export class Package extends Component {
  render() {
    const {activeClass, title, price, subtitle, arrayItem_1, btnName} = this.props;
    return (
      <div className={activeClass}>
        <h3>{title}</h3>
        <span className='price'>{price}</span>
        <p className='package-subtitle'>{subtitle}</p>
        <ul>
          {arrayItem_1.map((elem, key) => {
            return <div className='item-box' key={key}>
              <i className="fas fa-check"/>
              <li className='item-box__item'>{elem}</li>
            </div>
          })}
        </ul>

        <MainButton
        onLink="/package"
        btnName={btnName}
        style={{display: "inline-block"}}
        />

      </div>
    );
  }
}