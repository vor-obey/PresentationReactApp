import React, {Component} from "react";
import "./Spinner.scss";

export class Spinner extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className={loading ? "spinner-container spinner-active" : "spinner-container"}>
        <div className="loader"/>
      </div>
    );
  }
}