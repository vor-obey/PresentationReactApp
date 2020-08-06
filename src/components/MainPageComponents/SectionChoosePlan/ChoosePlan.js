import React, {Component} from "react";
import "./ChoosePlan.sass";
import {Package} from "../../OurPackage/Package";
import {arrayItem_1, arrayItem_2} from "../../../constants";

export class ChoosePlan extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      typeCompany: "Individual",
      typeCompanyFlag: true
    });

    this.handleCheckCompany = React.createRef();
    this.handleCheckIndividual = React.createRef();
    this.handleInputCheck = this.handleInputCheck.bind(this);
  }

  handleInputCheck() {
    this.handlePackage();
    this.handleCheckCompany.current.classList.toggle("opacity");
    this.handleCheckIndividual.current.classList.toggle("opacity");
  }

  handlePackage = () => {
    this.setState((state) => {
      const typeCompany = !state.typeCompanyFlag ? "Individual" : "Company";
      return {typeCompanyFlag: !state.typeCompanyFlag, typeCompany};
    });
  }

  render() {
    return (
      <section className="choose-plan">
        <div className="container">
          <div className="choose-plan-wrapper">
            <div className="plan-box">
              <h2>Choose your perfect plan</h2>

              <div className="label-container">
                <p className="label-text">you are</p>

                <div className="checkbox-group">

                  <input type="checkbox" id="checkbox"/>

                  <label htmlFor="checkbox" className="checkbox-label" onClick={this.handleInputCheck}>
                    <span className="opacity individual-on" ref={this.handleCheckIndividual}>Individual</span>
                    <span className="company-on" ref={this.handleCheckCompany}>Company</span>
                  </label>

                </div>

                <p>
                  Thus much I thought proper to tell you in relation
                  to yourself, and to the trust I reposed in you.
                </p>

                <span className="bigger-team-link">Have a bigger team? <a href="http://google.com" target="_blank" rel="noopener noreferrer">Let"s talk</a></span>

              </div>
            </div>

            <div className="package-container">

              <Package
                isButtonVisible={true}
                activeClass={this.state.typeCompanyFlag ? "package package-hover" : "package"}
                typeCompanyFlag={this.state.typeCompanyFlag}
                title="Starter"
                price="FREE"
                subtitle="Build your schedule every day"
                btnName="Get started"
                arrayItem_1={arrayItem_1}
              />

              <Package
                isButtonVisible={true}
                activeClass={this.state.typeCompanyFlag ? "package " : "package package-hover"}
                typeCompanyFlag={this.state.typeCompanyFlag}
                title="Pro"
                price="$4.99"
                subtitle="Make your life better"
                btnName="Make me a Pro"
                arrayItem_1={arrayItem_2}
              />

            </div>
          </div>
        </div>
      </section>
    );
  }
}