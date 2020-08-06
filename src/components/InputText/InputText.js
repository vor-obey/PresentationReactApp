import React, {Component} from "react";
import "./InputText.sass";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      value: "",
      error: false
    })
  }

  onChangeHandler = e => {
    this.setState({
      value: e.target.value,
    })
  }

  onSubmit = e => {
    const {value} = this.state;
    const {onSubmit} = this.props;
    if(value.length < 5){
      this.setState({
        error: true
      })
    } else {
      if (typeof onSubmit !== "undefined") {
        onSubmit(value);
        this.setState({
          value: "",
          error: false
        })
      }
    }


  }

  render() {
    const {title, placeholder, btnName} = this.props;
    const {value, error}= this.state;

    return (
      <div className="text-input__email">

        <h2>{title}</h2>

        <div className="subscribe-info-input">
          
          <input
            type="email"
            placeholder={placeholder}
            name="email"
            onChange={this.onChangeHandler}
            value={value}/>

          <button type="submit" onClick={this.onSubmit}>
            {btnName}
          </button>
          {error && <span className="error-message">Min length email 5 symbols</span>}


        </div>
      </div>
    );
  }
}

export default InputText;

