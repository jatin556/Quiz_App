import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {};
    correctAnswers=0;
    isSubmitted = false;

    questions = [
        {
            id: "Question1",
            question: "Which of the following is not directive?",
            options: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            answer: "c"
        },
        {
            id: "Question2",
            question: "Which of the following is not a template loop?",
            options: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            answer: "c"
        },
        {
            id: "Question3",
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
        console.log("name: ", event.target.name);
        console.log("value: ", event.target.value);
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]: value};
    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.questions.length)
    }

    get isScoredFull() {
        return `slds-text-heading_large ${this.questions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    submitHandler = (event) => {
        event.preventDefault();
        let correctArray = this.questions.filter(item => this.selected[item.id] === item.answer);
        this.correctAnswers = correctArray.length;
        this.isSubmitted = true;
        console.log(this.correctAnswers);
    }

    resetHandler = (event) => {
        this.correctAnswers=0;
        this.selected=0;
        this.isSubmitted = false;
    }
}