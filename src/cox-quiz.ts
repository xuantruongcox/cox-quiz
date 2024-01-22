import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
class QuizForm {
  name: String;
  answers: Array<String>;
  constructor(_name: String, _answers: Array<String>) {
    this.name = _name;
    this.answers = _answers;
  }
}
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement("cox-quiz")
export class CoxQuiz extends LitElement {
  static styles = css`
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
  @property({ type: QuizForm })
  question = {
    name: "What color is the dog ???",
    answers: ["blue", "black", "red", "yellow"],
  };
  @property({ type: String })
  correctAnswer = "black";

  private isPassed = false;
  private isSelected = false;

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
              <button
                ?hidden=${!this.isSelected}
                style="max-width: 50px"
                @click="${this.resetQuiz}"
              >
                Reset
              </button>
            </div>
          `;
        }
      )}
    `;
  }

  private numberToAlphabet(number: number) {
    if (Number.isInteger(number) && number > 0) {
      return String.fromCharCode(number + 64);
    } else {
      return "Invalid input. Please provide a positive integer.";
    }
  }

  private message = "";
  private onSelected(e: Event) {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
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
  private resetQuiz() {
    this.isPassed = false;
    this.isSelected = false;
    this.message = "";
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cox-quiz": CoxQuiz;
  }
}