import React, {Component} from "react";
import "./OurProducts.sass";
import {Package} from "../OurPackage/Package";
import {arrayItem_1, arrayItem_2} from "../../constants";
import {Product} from "./Product/Product";

export class OurProducts extends Component {
  render() {
    return (
      <div className="our-packages">
          <div className="about-products">
            <div className="product-list">
              <Package
                activeClass="package"
                typeCompanyFlag={null}
                title="Starter"
                price="FREE"
                subtitle="Build your schedule every day"
                btnName="Get started"
                arrayItem_1={arrayItem_1}
              />
              <Product
              title="Started package"
              />
            </div>

            <div className="product-list">
              <Package
                activeClass= "package"
                title="Pro"
                price="$4.99"
                subtitle="Make your life better"
                btnName="Make me a Pro"
                arrayItem_1={arrayItem_2}
              />
              <Product
                title="Pro package"
              />
            </div>

          </div>
      </div>
    );
  }
}