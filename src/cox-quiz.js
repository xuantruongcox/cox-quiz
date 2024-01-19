var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import * as React from "react";
import { createComponent } from '@lit/react';
class QuizForm {
    constructor(_name, _answers) {
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
let CoxQuiz = class CoxQuiz extends LitElement {
    constructor() {
        super(...arguments);
        this.question = {
            name: "What color is the dog ???",
            answers: ["blue", "black", "red", "yellow"],
        };
        this.correctAnswer = 'black';
        this.isPassed = false;
        this.isSelected = false;
        this.message = "";
    }
    render() {
        if (typeof this.question === "string") {
            const convert = JSON.parse(this.question);
            this.question = convert;
        }
        return html `
      ${when(this.isPassed, () => html `
          <div
            style="display: flex; flex-direction: column; align-items:center"
          >
            <h1 style="text-align: center">Passed</h1>
            <button style="max-width: 50px" @click="${this.resetQuiz}">
              Reset
            </button>
          </div>
        `, () => {
            return html `
            <div class="quiz-container">
              <h3>${this.question.name}</h3>
              <ul class="answer__list">
                ${this.question.answers.map((answer, answerIndex) => {
                return html `
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
                          >${this.numberToAlphabet(answerIndex + 1)}.${answer}</label
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
        })}
    `;
    }
    numberToAlphabet(number) {
        if (Number.isInteger(number) && number > 0) {
            return String.fromCharCode(number + 64);
        }
        else {
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
        }
        else {
            this.message = "Your answer is incorrect";
            this.isSelected = !this.isSelected;
            this.requestUpdate();
        }
    }
    resetQuiz() {
        this.isPassed = false;
        this.isSelected = false;
        this.message = '';
        this.requestUpdate();
    }
};
CoxQuiz.styles = css `
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
__decorate([
    property({ type: QuizForm })
], CoxQuiz.prototype, "question", void 0);
__decorate([
    property({ type: String })
], CoxQuiz.prototype, "correctAnswer", void 0);
CoxQuiz = __decorate([
    customElement("cox-quiz")
], CoxQuiz);
export { CoxQuiz };
export const CoxQuizReact = createComponent({
    tagName: 'cox-quiz',
    elementClass: CoxQuiz,
    react: React,
});
