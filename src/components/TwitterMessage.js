import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsLeft: 280
    };
  }

  handleMessage = (e) => {
    this.setState({
          message: e.target.value,
          charsLeft: 280 - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message"
        id="message" value={this.state.message}
        onChange={e => this.handleMessage(e)} />
        <br />
        <strong>Characters Remaining: {this.state.charsLeft}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
