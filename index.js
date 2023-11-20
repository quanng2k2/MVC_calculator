class CalculatorModel {
  constructor() {
    this.currentInput = "";
  }

  appendInput(value) {
    this.currentInput += value;
  }

  clearInput() {
    this.currentInput = "";
  }

  calculateResult() {
    try {
      return eval(this.currentInput);
    } catch (error) {
      return "Error";
    }
  }
}

class CalculatorView {
  constructor(elementId, model, controller) {
    this.element = document.getElementById(elementId);
    this.model = model;
    this.controller = controller;
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="display">${this.model.currentInput}</div>
        <div class="keys">
          <div class="key" onclick="handleKey('1', ${this.controller})">1</div>
          <div class="key" onclick="handleKey('2', ${this.controller})">2</div>
          <div class="key" onclick="handleKey('3', ${this.controller})">3</div>
          <div class="key" onclick="handleKey('+', ${this.controller})">+</div>
          <div class="key" onclick="handleKey('4', ${this.controller})">4</div>
          <div class="key" onclick="handleKey('5', ${this.controller})">5</div>
          <div class="key" onclick="handleKey('6', ${this.controller})">6</div>
          <div class="key" onclick="handleKey('-', ${this.controller})">-</div>
          <div class="key" onclick="handleKey('7', ${this.controller})">7</div>
          <div class="key" onclick="handleKey('8', ${this.controller})">8</div>
          <div class="key" onclick="handleKey('9', ${this.controller})">9</div>
          <div class="key" onclick="handleKey('*', ${this.controller})">*</div>
          <div class="key" onclick="handleKey('0', ${this.controller})">0</div>
          <div class="key" onclick="handleKey('.', ${this.controller})">.</div>
          <div class="key" onclick="handleKey('/', ${this.controller})">/</div>
          <div class="key" onclick="handleKey('C', ${this.controller})">C</div>
          <div class="key" onclick="handleKey('=', ${this.controller})">=</div>
        </div>
      `;
  }
}

class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleKey(value) {
    switch (value) {
      case "=":
        this.model.currentInput = this.model.calculateResult();
        break;
      case "C":
        this.model.clearInput();
        break;
      default:
        this.model.appendInput(value);
        break;
    }
    this.view.render();
  }
}

// Create two instances of the calculator
const calculatorModel1 = new CalculatorModel();
const calculatorView1 = new CalculatorView(
  "calculator1",
  calculatorModel1,
  "calculatorController1"
);
const calculatorController1 = new CalculatorController(
  calculatorModel1,
  calculatorView1
);

const calculatorModel2 = new CalculatorModel();
const calculatorView2 = new CalculatorView(
  "calculator2",
  calculatorModel2,
  "calculatorController2"
);
const calculatorController2 = new CalculatorController(
  calculatorModel2,
  calculatorView2
);

// Define handleKey functions globally
window.handleKey = (value, controller) => {
  controller.handleKey(value);
};
