import React from "react";
import './InterfacePresentation.sass';
import photo_1 from '../../../../images/interface/img-1.png';
import photo_2 from '../../../../images/interface/img-2.png';
import photo_3 from '../../../../images/interface/img-3.png';
import photo_4 from '../../../../images/interface/img-4.png';

export const InterfacePresentation = () => {
  return (
    <div className="interface-box">
      <div className="interface-images">
        <div className="interface-image"><img src={photo_1} alt=""/></div>
        <div className="interface-image"><img src={photo_2} alt=""/></div>
        <div className="interface-image"><img src={photo_3} alt=""/></div>
        <div className="interface-image"><img src={photo_4} alt=""/></div>
      </div>
    </div>
  )
}