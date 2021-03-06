import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryNumberInput: "",
      isNotBinaryNumber: false,
      decimalNumberDisplay: 0,
    };
  }

  renderDecDisplay = () => {
    const { decimalNumberDisplay } = this.state;
    return (
      <div className="decDisplay mb-5 border border-dark">
        <p id="resultado" className="display-1 container mb-0">
          {decimalNumberDisplay}
        </p>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    const isNotBinaryNumber = value.match(/[^0-1]/);
    this.setState({
      [name]: value,
      isNotBinaryNumber,
    });
  }

  renderBinInput = () => {
    const { binaryNumberInput } = this.props;
    return (
      <div className="form-group">
        <input
          className="form-control form-control-lg"
          type="number"
          name="binaryNumberInput"
          placeholder="Insira um número binário"
          value={binaryNumberInput}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  renderErrorAlert = () => {
    return (
      <div className="alert alert-danger" role="alert">
        ❗Ops... Insira somente 0 e 1❗
      </div>
    );
  }

  charToInt = (char) => parseInt(char);

  bin2Dec = () => {
    const { binaryNumberInput, isNotBinaryNumber } = this.state;
    if (!isNotBinaryNumber) {
      let decimalNumber = 0;
      let maxExponent = binaryNumberInput.length - 1;
      for (let i = 0; i < binaryNumberInput.length; i += 1) {
        const charBinary = binaryNumberInput.charAt(i);
        decimalNumber += this.charToInt(charBinary) * (2 ** maxExponent);
        maxExponent -= 1;
      }
      this.setState({
        decimalNumberDisplay: decimalNumber,
      });
    }
  }

  renderButton = () => {
    return (
      <button
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={ () => this.bin2Dec() }>
        Converter
      </button>
    );
  }

  render() {
    const { isNotBinaryNumber } = this.state;
    return (
      <section className="conteudo">
        {this.renderDecDisplay()}
        {this.renderBinInput()}
        {isNotBinaryNumber && this.renderErrorAlert()}
        {this.renderButton()}
      </section>
    );
  }
}

export default Main;
