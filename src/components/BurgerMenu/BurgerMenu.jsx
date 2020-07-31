import React, {Component} from "react";
import './BurgerMenu.sass';

export class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleMenu = this.handleVisibleMenu.bind(this);
  }

  handleVisibleMenu() {
    this.props.updateData(
      !this.props.visibleMenu
    )
  }

  render() {

    const {visibleMenu} = this.props;

    return (
      <div className='burger-box' onClick={this.handleVisibleMenu}>

        <div className={visibleMenu ? "row-burger-active row-top active-top" : "row-burger row-top"}/>
        <div className={visibleMenu ? "row-burger-active active-middle" : "row-burger"}/>
        <div className={visibleMenu ? "row-burger-active row-bottom active-bottom" : "row-burger row-bottom"}/>

      </div>
    );
  }
}