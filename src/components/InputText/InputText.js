import React, {Component} from "react";
import {connect} from "react-redux"
import "./InputText.sass";
import {fetchEmail} from "../../redux/actions";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        email: ""
      }
    )
  }

  submitHandler = event => {
    event.preventDefault()
    const {email} = this.state;

    if(!email.trim()){
      return alert("The input field must not be empty!")
    }

    const newEmail = {email, id: Date.now().toString()}
    this.props.fetchEmail(newEmail)
    this.setState({email: ""})
  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
      }}))
  }

  render() {
    const {title, placeholder, btnName} = this.props;

    return (
      <div className="text-input__email">
        <h2>{title}</h2>

        <div className="subscribe-info-input">
          <input type="email" placeholder={placeholder} name="email" onChange={this.changeInputHandler} value={this.state.email}/>

          <button onClick={this.submitHandler} type="submit">
            {btnName}
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchEmail
}

// const mapStateToProps = state => {
//   console.log(state)
//   return state;
// }

export default connect(null, mapDispatchToProps)(InputText);

