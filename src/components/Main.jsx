import React from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryNumberInput: "",
      maxLengthInput: 8,
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
    const { binaryNumberInput, maxLengthInput } = this.props;
    return (
    <div class="form-group">
      <input
        class="form-control form-control-lg"
        type="number"
        name="numBinario"
        id="numBinario"
        placeholder="Insira um número binário"
      />
    </div>
  );
};

const renderDecDisplay = () => {
  return (
    <div class="decDisplay mb-5 border border-dark">
      <p id="resultado" class="display-1 container mb-0">0</p>
    </div>
  );
}

function Main() {
  return (
    <section class="conteudo">
      {renderDecDisplay()}
      {renderBinInput()}
      {renderButton()}
    </section>
  );
}

export default Main;
