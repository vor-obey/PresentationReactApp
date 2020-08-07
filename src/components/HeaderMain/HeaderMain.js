import React, {Component} from "react";
import {Header} from "../Header/Header";
import {MobileMenu} from "../MobileMenu/MobileMenu";

export class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      visibleMenu: false,
    });
  }

  handlerStateMenuVisible = (value) => {
    this.setState({
      visibleMenu: value
    })
  }

  checkDimensions = () => {
    if (window.innerWidth > 1023 && this.state.visibleMenu) {
      this.setState({visibleMenu: false});
    }
  }

  checkWindowHeight = () => {
    if (window.scrollY > 150 && this.state.visibleMenu) {
      this.setState({visibleMenu: false});
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDimensions);
    window.addEventListener("scroll", this.checkWindowHeight)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkDimensions);
  }

  render() {

    const {visibleMenu} = this.state;

    return (
      <div className="header-wrapper">

        <MobileMenu
          handlerMenuVisible={this.handlerStateMenuVisible}
          visibleMenu={visibleMenu}
          style={{display: "flex", background: "#fff", color: "#267df4"}}
        />

        <Header
          visibleMenu={visibleMenu}
          handlerStateMenuVisible={this.handlerStateMenuVisible}/>

      </div>
    );
  }
}