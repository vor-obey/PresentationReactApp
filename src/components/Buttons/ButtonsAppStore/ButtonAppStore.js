import React, {Component} from "react";
import './ButtonAppStore.sass';

export class ButtonAppStore extends Component {
  render() {
    return (
      <div>
        <div className={this.props.btnClassName}>
          <i className="fab fa-apple"/>
          <span>App Store</span>
        </div>
      </div>
    );
  }
}

