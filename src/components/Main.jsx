import React from "react";

const renderButton = () => {
  return (
    <button class="btn btn-secondary btn-lg btn-block" id="btnConverter">
      Converter
    </button>
  );
};

const renderBinInput = () => {
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
