import { css as u, LitElement as d, html as n } from "lit";
import { property as h, customElement as p } from "lit/decorators.js";
import { when as m } from "lit/directives/when.js";
var f = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (e, t, i, l) => {
  for (var s = l > 1 ? void 0 : l ? x(t, i) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (s = (l ? a(t, i, s) : a(s)) || s);
  return l && s && f(t, i, s), s;
};
class v {
  constructor(t, i) {
    this.name = t, this.answers = i;
  }
}
let r = class extends d {
  constructor() {
    super(...arguments), this.question = {
      name: "What color is the dog ???",
      answers: ["blue", "black", "red", "yellow"]
    }, this.correctAnswer = "black", this.isPassed = !1, this.isSelected = !1, this.message = "";
  }
  render() {
    if (typeof this.question == "string") {
      const e = JSON.parse(this.question);
      this.question = e;
    }
    return n`
      ${m(
      this.isPassed,
      () => n`
          <div
            style="display: flex; flex-direction: column; align-items:center"
          >
            <h1 style="text-align: center">Passed</h1>
            <button style="max-width: 50px" @click="${this.resetQuiz}">
              Reset
            </button>
          </div>
        `,
      () => n`
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
                          >${this.numberToAlphabet(
        t + 1
      )}.${e}</label
                        >
                      </div>
                    </li>
                  `)}
              </ul>
              <h1>${this.message}</h1>
              <button ?hidden=${!this.isSelected} style="max-width: 50px" @click="${this.resetQuiz}">
                Reset
              </button>
            </div>
          `
    )}
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
r.styles = u`
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
c([
  h({ type: v })
], r.prototype, "question", 2);
c([
  h({ type: String })
], r.prototype, "correctAnswer", 2);
r = c([
  p("cox-quiz")
], r);
export {
  r as CoxQuiz
};
//# sourceMappingURL=cox-quiz.js.map
