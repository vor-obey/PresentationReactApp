import React from "react";
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {HeaderMain} from "../components/HeaderMain/HeaderMain";
import {Main} from "../pages/Main/Main";
import {Footer} from "../components/Footer/Footer";
import {OurProducts} from "../components/OurProduct/OurProducts";
import AlertDialogSlide from "../components/Menu/MenuItemModal/MenuItemModal";

function Router() {
  return (
    <BrowserRouter>
      <HeaderMain/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/package" component={OurProducts}/>
      </Switch>
      <Route exact path="/" component={Footer}/>
      <AlertDialogSlide/>
    </BrowserRouter>
  );
}

export default Router;