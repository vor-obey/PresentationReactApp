import React, {Component} from "react";
import './Menu.scss';
import {Link} from "react-router-dom";

export class Menu extends Component {
  render() {
    const {classNameUl, item, classNameLink} = this.props;
    return (
      <ul className={classNameUl}>

        <div className="menu-right">
          <Link to='/package'>
            <li><a className={classNameLink}>{item[0]}</a></li>
          </Link>
          <li><a className={classNameLink}>{item[1]}</a></li>
          <li><a className={classNameLink}>{item[2]}</a></li>
        </div>

        <div className="menu-left">
          <li><a className={classNameLink}>{item[3]}</a></li>
          <li><a className={classNameLink}>{item[4]}</a></li>
        </div>

      </ul>
    );
  }
}
