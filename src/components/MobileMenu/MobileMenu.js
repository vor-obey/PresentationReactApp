import React, {Component} from "react";
import "./MobileMenu.sass";
import {MENU_ITEM_All} from "../../constants";
import {Link} from "react-router-dom";
import {MainButton} from "../Buttons/MainButton/MainButton";

export class MobileMenu extends Component {
  render() {
    const item = MENU_ITEM_All;
    return (
      <div className={this.props.visibleMenu ? "menu-mobile" : " menu-mobile menu-mobile__close"} >

        <ul className="menu-nav-mob">
          <Link to="/package"><li><a href="#">{item[0]}</a></li></Link>
          <li><a href="#">{item[1]}</a></li>
          <li><a href="#">{item[2]}</a></li>
          <li><a href="#">{item[3]}</a></li>
          <li><a href="#">{item[4]}</a></li>
        </ul>

        <div className="mobile-btn">
          <MainButton
            iconBefore={<i className="fab fa-apple"/>}
            style={{minWidth: 170+"px", color: "#267df4", background: "white", width: "100%", display: "inline-block"}}
            btnName="Get App"
          />
        </div>


      </div>
    )
  }
}