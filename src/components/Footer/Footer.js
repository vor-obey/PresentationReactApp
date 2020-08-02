import React, {Component} from "react";
import "./Footer.sass";
import footerLogoType from "../../images/logo.png"
import {FooterLinks} from "./FooterLinks/FooterLinks";
import {footerLinksAboutUs, footerLinksLearnMore, footerLinksSupport} from "../../constants";
import {ButtonAppStore} from "../Buttons/ButtonsAppStore/ButtonAppStore";

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer">
          <div className="social-block">

            <img src={footerLogoType} alt=""/>
            <p>It was some time before he obtained any answer, and the reply, when made, was unpropitious.</p>

            <ButtonAppStore
              path="/"
              btnClassName="footer-app-store-btn"
            />

            <div className="social-icons">
              <a href="#"><i className="fab rotate  fa-twitter"/></a>
              <a href="#"><i className="fab rotate fa-facebook-f"/></a>
              <a href="#"><i className="fab rotate fa-google-plus-g"/></a>
              <a href="#"><i className="fab rotate fa-tumblr"/></a>
              <a href="#"><i className="fab rotate fa-pinterest-p"/></a>
              <a href="#"><i className="fab rotate fa-linkedin-in"/></a>
            </div>

          </div>

          <div className="footer-links-container">

            <FooterLinks
              title="LEARN MORE"
              links={footerLinksLearnMore}
            />

            <FooterLinks
              title="ABOUT US"
              links={footerLinksAboutUs}
            />

            <FooterLinks
              title="SUPPORT"
              links={footerLinksSupport}
            />

          </div>
        </div>
      </div>
    );
  }
}