import React, {Component} from "react";
import './SectionPartners.sass';
import DropboxImg from '../../../images/dropbox.png';
import EvernoteImg from '../../../images/evernote.png';
import MapImg from '../../../images/map.png';

export class SectionPartners extends Component {
  render() {
    return (
      <section className='partners'>

        <img className='map' src={MapImg} alt=""/>

        <div className="container">
          <div className="partners-info">

            <h2>We are almost everywhere</h2>

            <p>Now the races of these two have been for some ages
              utterly extinct, and besides to discourse any further
              of them would not be at all to my purpose.
              <br/>
              <br/>
              Thus much I thought proper to tell you in relation
              to yourself, and to the trust I reposed in you.
            </p>

            <p className='partners-text'>PARTNERS</p>

            <div className="partners-links">
              <a href="#"><img src={DropboxImg} alt=""/></a>
              <a href="#"><img src={EvernoteImg} alt=""/></a>
            </div>

          </div>
        </div>
      </section>
    );
  }
}