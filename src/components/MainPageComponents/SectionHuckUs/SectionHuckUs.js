import React, {Component} from "react";
import './SectionHuckUs.sass';
import {MainButton} from "../../Buttons/MainButton/MainButton";

export class SectionHuckUs extends Component {
  render() {
    return (
      <section className='huck-us'>
        <div className="container">
          <div className="huck-us-wrapper">
            <div className="huck-us-text">

              <h2>Your day <br/>
                is protected
              </h2>

              <p>There have not been any since we have lived here, said my mother.
                <br/>
                <br/>
                We thought - Mr. Copperfield thought - it was quite a
                large rookery; but the nests were very
                old ones, and the birds have deserted them a long while.
              </p>

              <div className='buttons-container'>
                <MainButton
                  btnName="Try to huck"
                  iconAfter={<i className="fas fa-arrow-right"/>}
                  style={{display: "inline-block"}}
                />

                <MainButton
                  style={{background: "white", color: "#000", padding: "15px 25px", display: "inline-block"}}
                  btnName="SHOW MORE"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}