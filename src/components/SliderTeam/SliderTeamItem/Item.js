import React from "react";
import "./Item.sass";
import starIcon from "../../../images/Star Icon.png";

export function Item(props) {
  const {personLogo, text, name} = props;
  return (
    <section className='section-slider'>
      <img src={personLogo} alt=""/>

      <div className="section-slider__text">
        <h3>New Providence is the great UI kit</h3>
        <p>{text}</p>

        <div className='star-icons'>
          <img src={starIcon} alt=""/>
          <img src={starIcon} alt=""/>
          <img src={starIcon} alt=""/>
          <img src={starIcon} alt=""/>
          <img src={starIcon} alt=""/>
        </div>

        <span className='person-name'>{name}</span>
      </div>

    </section>
  )
}

