import { css as d, LitElement as u, html as n } from "lit";
import { property as c, customElement as p } from "lit/decorators.js";
import { when as m } from "lit/directives/when.js";
var x = Object.defineProperty, y = Object.getOwnPropertyDescriptor, h = (e, t, a, r) => {
  for (var l, s = r > 1 ? void 0 : r ? y(t, a) : t, o = e.length - 1; o >= 0; o--)
    (l = e[o]) && (s = (r ? l(t, a, s) : l(s)) || s);
  return r && s && x(t, a, s), s;
};
let i = class extends u {
  constructor() {
    super(...arguments), this.question = { name: "What color is the dog ???", answers: ["blue", "black", "red", "yellow"] }, this.correctAnswer = "black", this.isPassed = !1, this.isSelected = !1, this.message = "";
  }
  render() {
    if (typeof this.question == "string") {
      const e = JSON.parse(this.question);
      this.question = e;
    }
    return n`
      ${m(this.isPassed, () => n`
          <div
            style="display: flex; flex-direction: column; align-items:center"
          >
            <h1 style="text-align: center">Passed</h1>
            <button style="max-width: 50px" @click="${this.resetQuiz}">
              Reset
            </button>
          </div>
        `, () => n`
            <div class="quiz-container">
              <h3>${this.question.name}</h3>
              <ul class="answer__list">
                ${this.question.answers.map((e, t) => n`
                    <li class="answer__list-item">
                      <div class="item__checkbox">
                        <input
                          ?disabled=${this.isSelected}
                          @input=${this.onSelected}
                          id="${e}"
                          name="${this.question}"
                          type="radio"
                          value="${e}"
                        />
                        <label for="${e}"
                          >${this.numberToAlphabet(t + 1)}.${e}</label
                        >
                      </div>
                    </li>
                  `)}
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
          `)}
    `;
  }
  numberToAlphabet(e) {
    return Number.isInteger(e) && e > 0 ? String.fromCharCode(e + 64) : "Invalid input. Please provide a positive integer.";
  }
  onSelected(e) {
    e.preventDefault();
    const t = e.target;
    this.correctAnswer === t.value ? (this.isPassed = !this.isPassed, this.isSelected = !this.isSelected, this.requestUpdate()) : (this.message = "Your answer is incorrect", this.isSelected = !this.isSelected, this.requestUpdate());
  }
  resetQuiz() {
    this.isPassed = !1, this.isSelected = !1, this.message = "", this.requestUpdate();
  }
};
i.styles = d`
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
  `, h([c({ type: class {
  constructor(e, t) {
    this.name = e, this.answers = t;
  }
} })], i.prototype, "question", 2), h([c({ type: String })], i.prototype, "correctAnswer", 2), i = h([p("cox-quiz")], i);
export {
  i as CoxQuiz
};
//# sourceMappingURL=cox-quiz.js.map
