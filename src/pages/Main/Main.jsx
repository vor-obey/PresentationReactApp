import React, {Component, Fragment} from "react";
import {SectionText} from "../../components/MainPageComponents/SectionText/SectionText";
import {SectionHuckUs} from "../../components/MainPageComponents/SectionHuckUs/SectionHuckUs";
import {SectionPartners} from "../../components/MainPageComponents/SectionPartners/SectionPartners";
import {SectionSlider} from "../../components/MainPageComponents/SectionSlider/SectionSlider";
import {SliderTeam} from "../../components/SliderTeam/SliderTeam";
import {ChoosePlan} from "../../components/MainPageComponents/SectionChoosePlan/ChoosePlan";
import {Subscribe} from "../../components/MainPageComponents/SectionSubscribe/Subscribe";
import {HeaderText} from "../../components/HeaderText/HeaderText";
import {PopUpVideo} from "../../components/PopUpVideo/PopUpVideo";
import {Spinner} from "../../components/Spinner/Spinner";
import {ModalView} from "../../components/ModalView/ModalView";
import {connect} from "react-redux";
import {subscribeForNews} from "../../store/user/userActions"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      popupVisible: false,
    })
  }

  handleStateVisiblePopup = () => {
    this.setState({
      popupVisible: !this.state.popupVisible,
    })

  }

  handleVisiblePopup = (value) => {
    this.setState({
      popupVisible: value,
    })
  }

  render() {
    const {loading, success, subscribeForNews} = this.props;
    const {popupVisible} = this.state;

    return (
      <Fragment>
        <Spinner
          loading={loading}
          success={success}
        />

        <ModalView
          resultIcon={<i className="far fa-check-circle"/>}
          resultText="Success"
          success={success}
        />

        <PopUpVideo
          popupVisible={popupVisible}
          onClick={this.handleVisiblePopup}
        />

        <HeaderText
          handleStateVisiblePopup={this.handleStateVisiblePopup}
        />

        <SectionText/>

        <SectionHuckUs/>

        <SectionPartners/>

        <SectionSlider onSubmit={subscribeForNews}/>

        <SliderTeam/>

        <ChoosePlan/>

        <Subscribe onSubmit={subscribeForNews}/>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {loading, error, success} = state.userReducer;
  return {
    loading,
    error,
    success
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subscribeForNews: email => dispatch(subscribeForNews(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);