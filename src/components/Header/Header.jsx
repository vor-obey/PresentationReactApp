import React, {Component} from "react";
import "./Header.sass";
import {Link} from "react-router-dom";
import {MENU_ITEM_All} from "../../constants";
import mainLogo from "./../../images/logo.png";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {Menu} from "../Menu/Menu";
import {MainButton} from "../Buttons/MainButton/MainButton";


export class Header extends Component {
  render() {
    const {visibleMenu, handlerStateMenuVisible } = this.props;
    return (
      <div className="header">
        <div className="container">
          <header className="header-top">

            <div className="container-1">
              <BurgerMenu visibleMenu={visibleMenu} handlerStateMenuVisible={handlerStateMenuVisible}/>
              <Menu
                item={MENU_ITEM_All}
                classNameUl="menu-nav"
                classNameLink="menu-link"
              />
            </div>

            <div className="main-logo" title="Go to home page">
              <Link to="/"><img src={mainLogo} alt="Error!"/></Link>
            </div>

              <MainButton
                iconBefore={<i className="fab fa-apple"/>}
                style={{minWidth: 170+"px"}}
                btnName="Get App"
              />

          </header>
        </div>
      </div>

    );
  }
}