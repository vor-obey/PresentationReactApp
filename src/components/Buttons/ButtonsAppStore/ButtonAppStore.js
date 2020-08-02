import React, {Component} from "react";
import './ButtonAppStore.sass';
import {Link} from "react-router-dom";

export class ButtonAppStore extends Component {
  render() {
    return (
      <Link to={this.props.path}>
        <div className={this.props.btnClassName}>
          <i className="fab fa-apple"/>
          <span>App Store</span>
        </div>
      </Link>

    );
  }
}

