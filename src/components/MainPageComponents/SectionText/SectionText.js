import React from "react";
import './SectionText.sass';
import Lock from '../../../images/Lock Icon.png';
import Clock from '../../../images/Clock Icon.png';

export const SectionText = () => {
  return (
    <div className='container text-wrapper'>

      <div className="text-column">
        <img src={Lock} alt=""/>
        <h3>Real-time all the time</h3>
        <p>Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
          <br/>
          <br/>
          Just then her head struck against the roof of the hall: in fact she was now more than nine feet
          high,
          and she at once took up the little golden key and hurried off to the garden door.
        </p>
      </div>

      <div className="text-column">
        <img src={Clock} alt=""/>
        <h3>Real-time all the time</h3>
        <p>Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
          <br/>
          <br/>
          Just then her head struck against the roof of the hall: in fact she was now more than nine feet
          high,
          and she at once took up the little golden key and hurried off to the garden door.
        </p>
      </div>

    </div>
  );
}