import React, {Component} from "react";
import './HeaderText.sass';
import PhoneImg from '../../images/header_iphone.png'

export class HeaderText extends Component {
  constructor(props) {
    super(props);
    this.btnVideo = React.createRef();
  }

  render() {
    return (
      <div className='header-text'>

        <h1>What happens tomorrow?</h1>

        <p>The sight of the tumblers restored Bob
          Sawyer to a degree of
          equanimity which he had not possessed
          since his interview with his landlady.
          His face brightened up, and he began to
          feel quite convivial.
        </p>

        <button ref={this.btnVideo} className='watch-video-btn' onClick={this.props.handleStateVisiblePopup}>
          <i className="fas fa-play"/>
          <span>Watch Video</span>
        </button>

        <img className='iPhone-image' src={PhoneImg} alt=""/>

      </div>
    );
  }
}