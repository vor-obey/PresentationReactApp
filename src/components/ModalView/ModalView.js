import React, {Component} from "react";
import "./ModalView.sass";

export class ModalView extends Component {
  render() {
    const {success} = this.props;
    return (
      <div className={success ? "modal-container" : "modal-hidden"}>
        <div className="modal-view">
          <div className="result-icon">{this.props.resultIcon}</div>
          <p>{this.props.resultText}</p>
        </div>
      </div>
    );
  }
}