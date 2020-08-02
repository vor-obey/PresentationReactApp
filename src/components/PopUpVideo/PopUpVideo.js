import React, {Component} from "react";
import "./PopUpVideo.sass";
import ReactPlayer from "react-player";

export class PopUpVideo extends Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  togglePopUp = () => {
    this.props.onClick(
      !this.props.popupVisible
    )
  };

  render() {

    const {popupVisible} = this.props;
    const url = "https://www.youtube.com/watch?v=bxncT29xu_o&list=PLUfMME5TZ-ERIguY662fnZ8xtEABFUUZu&index=3";

    return (
      <div className={popupVisible ? "popup-container" : "unvisible"}>
        <div className="popup-video">

          <ReactPlayer
            ref={this.playerRef}
            playing={popupVisible}
            controls
            url={url}
            width="100%"
            height="100%"
          />

          <div className="popup-buttons">
            <button className="popup-btn button-open ">
              <a href="http://youtube.com" target="_blank">
                SHOW MORE
              </a>
            </button>

            <button
              onClick={this.togglePopUp}
              className="popup-btn button-closed ">
              CLOSED
            </button>
          </div>
        </div>
      </div>
    );
  }

}

// style={{opacity: this.props.popUpStyle.opacity, transition: this.props.popUpStyle.transition }}