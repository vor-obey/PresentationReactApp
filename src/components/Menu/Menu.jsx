import React, {Component} from "react";
import "./Menu.scss";
import {Link} from "react-router-dom";
import AlertDialogSlide from "./MenuItemModal/MenuItemModal";
import Button from "@material-ui/core/Button";

export class Menu extends Component {
  render() {
    const {classNameUl, item, classNameLink} = this.props;
    return (
      <div className={classNameUl}>

        <div className="menu-left">
          <Link to="/package">
            <div className={classNameLink}>

              <Button variant="text" color="primary">{item[0]}</Button>

            </div>
          </Link>

          <Link to="#">
            <AlertDialogSlide linkName={item[1]} className={classNameLink}/>
          </Link>

          <Link to="#">
            <AlertDialogSlide linkName={item[2]} className={classNameLink}/>
          </Link>
        </div>

        <div className="menu-right">
          <Link to="#">
            <AlertDialogSlide linkName={item[3]} className={classNameLink}/>
          </Link>

          <Link to="#">
            <AlertDialogSlide linkName={item[4]} className={classNameLink}/>
          </Link>
        </div>

      </div>
    );
  }
}
