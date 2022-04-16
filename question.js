class Form {


    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter the answer");
        this.questionOne = createElement("h1");
        this.questionTwo = createElement("h1");
        this.button = createButton("Submit");
        this.resetButton = createButton("Next");
    }

    position() {
        this.questionOne.position(windowWidth / 2 - 500, windowHeight - 300);
        this.questionOne.html();
        this.questionOne.class("greeting");

        this.questionTwo.position(windowWidth / 2 - 600, windowHeight - 300);
        this.questionTwo.html();
        this.questionTwo.class("greeting");

        this.input.position(windowWidth / 2 + 10, windowHeight - 500);
        this.input.class("customInput");

        this.button.position(windowWidth / 2 + 10, windowHeight - 400);
        this.button.class("customButton");

        this.resetButton.position(window / 3 - 10, windowHeight - 400);
        this.resetButton.class("customButton");
    }

    question() {
        number1 = Math.round(random(0, 9))
        number2 = Math.round(random(0, 9))
        sum = number1 + number2
    }

    questionDisplay() {
        this.button.mouseClicked(()=>{
            this.question();
            // display output next class task
            answer = this.input.value
        })
    }

}