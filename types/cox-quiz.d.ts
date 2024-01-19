import { LitElement } from "lit";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class CoxQuiz extends LitElement {
    static styles: import("lit").CSSResult;
    question: {
        name: string;
        answers: string[];
    };
    correctAnswer: string;
    private isPassed;
    private isSelected;
    render(): import("lit-html").TemplateResult<1>;
    private numberToAlphabet;
    private message;
    private onSelected;
    private resetQuiz;
}
declare global {
    interface HTMLElementTagNameMap {
        "cox-quiz": CoxQuiz;
    }
}
export declare const CoxQuizReact: import("@lit/react").ReactWebComponent<CoxQuiz, {}>;
//# sourceMappingURL=cox-quiz.d.ts.map