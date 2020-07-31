import React, {Component} from "react";
import './FooterLinks.sass';

export class FooterLinks extends Component {
  render() {
    return (
      <div className='footer-links'>

        <h3>{this.props.title}</h3>

        <ul>
          {this.props.links.map((link, key) => {
            return <li key={key}><a href="#">{link}</a></li>
          })}
        </ul>

      </div>
    );
  }
}