import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {};
    questions = [
        {
            id: "Question 1",
            question: "Which of the following is not directive?",
            options: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            answer: "c"
        },
        {
            id: "Question 2",
            question: "Which of the following is not a template loop?",
            options: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            answer: "c"
        },
        {
            id: "Question 1",
            question: "Which of the following is invalid in LWC folder??",
            options: {
                a: "svg",
                b: "js",
                c: "apex"
            },
            answer: "c"
        }
    ]

    changeHandler = (event) => {
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]: value};
    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.questions.length)
    }

    submitHandler = () => {

    }

    resetHandler = () => {

    }
}