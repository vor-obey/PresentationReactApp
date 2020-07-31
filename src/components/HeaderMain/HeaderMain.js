import React, {Component} from "react";
import "./HeaderMain.sass";
import {Header} from "../Header/Header";
import {MobileMenu} from "../MobileMenu/MobileMenu";

export class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      visibleMenu: false,
    });
  }

  updateData = (value) => {
    this.setState({
      visibleMenu: value
    })
  }

  checkDimensions = () => {
    if (window.innerWidth > 1023 && this.state.visibleMenu) {
      this.setState({ visibleMenu: false });
    }
  }

  checkWindowHeight = () => {
    if(window.scrollY > 300 && this.state.visibleMenu) {
      this.setState({ visibleMenu: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDimensions);
    window.addEventListener("scroll", this.checkWindowHeight )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkDimensions);
  }

  render() {
    return (
      <div className="header-wrapper">

        <MobileMenu visibleMenu={this.state.visibleMenu} style={{display: "flex", background: "#fff", color: "#267df4"}}/>
        <Header visibleMenu={this.state.visibleMenu} updateData={this.updateData}/>

      </div>
    );
  }
}