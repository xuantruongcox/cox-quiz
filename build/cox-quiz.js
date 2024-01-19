import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
class QuizForm {
  constructor(_name, _answers) {
    this.name = _name;
    this.answers = _answers;
  }
}
let CoxQuiz = class extends LitElement {
  constructor() {
    super(...arguments);
    this.question = {
      name: "What color is the dog ???",
      answers: ["blue", "black", "red", "yellow"]
    };
    this.correctAnswer = "black";
    this.isPassed = false;
    this.isSelected = false;
    this.message = "";
  }
  render() {
    if (typeof this.question === "string") {
      const convert = JSON.parse(this.question);
      this.question = convert;
    }
    return html`
      ${when(
      this.isPassed,
      () => html`
          <div
            style="display: flex; flex-direction: column; align-items:center"
          >
            <h1 style="text-align: center">Passed</h1>
            <button style="max-width: 50px" @click="${this.resetQuiz}">
              Reset
            </button>
          </div>
        `,
      () => {
        return html`
            <div class="quiz-container">
              <h3>${this.question.name}</h3>
              <ul class="answer__list">
                ${this.question.answers.map((answer, answerIndex) => {
          return html`
                    <li class="answer__list-item">
                      <div class="item__checkbox">
                        <input
                          ?disabled=${this.isSelected}
                          @input=${this.onSelected}
                          id="${answer}"
                          name="${this.question}"
                          type="radio"
                          value="${answer}"
                        />
                        <label for="${answer}"
                          >${this.numberToAlphabet(
            answerIndex + 1
          )}.${answer}</label
                        >
                      </div>
                    </li>
                  `;
        })}
              </ul>
              <h1>${this.message}</h1>
              <button ?hidden=${!this.isSelected} style="max-width: 50px" @click="${this.resetQuiz}">
                Reset
              </button>
            </div>
          `;
      }
    )}
    `;
  }
  numberToAlphabet(number) {
    if (Number.isInteger(number) && number > 0) {
      return String.fromCharCode(number + 64);
    } else {
      return "Invalid input. Please provide a positive integer.";
    }
  }
  onSelected(e) {
    e.preventDefault();
    const input = e.target;
    const isCorrect = this.correctAnswer === input.value;
    if (isCorrect) {
      this.isPassed = !this.isPassed;
      this.isSelected = !this.isSelected;
      this.requestUpdate();
    } else {
      this.message = "Your answer is incorrect";
      this.isSelected = !this.isSelected;
      this.requestUpdate();
    }
  }
  resetQuiz() {
    this.isPassed = false;
    this.isSelected = false;
    this.message = "";
    this.requestUpdate();
  }
};
CoxQuiz.styles = css`
    h3 {
      text-align: center;
    }
    ul {
      list-style-type: none;
    }
    .quiz-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .answer__list {
      display: flex;
      flex-wrap: wrap;
      max-width: 400px;
    }
    .answer__list-item {
      flex: 1 0 100px;
    }
  `;
__decorateClass([
  property({ type: QuizForm })
], CoxQuiz.prototype, "question", 2);
__decorateClass([
  property({ type: String })
], CoxQuiz.prototype, "correctAnswer", 2);
CoxQuiz = __decorateClass([
  customElement("cox-quiz")
], CoxQuiz);
export {
  CoxQuiz
};
//# sourceMappingURL=cox-quiz.js.map
