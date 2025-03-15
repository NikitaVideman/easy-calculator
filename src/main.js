const OPERATIONS = {

    INCREMENT: "+",
    DECREMENT: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    DEGREES: "^",
    ROOT: "0",
    PERCENTAGE: "%",

};


let numBuffer = [] // 2 потому что пока что калькулятор бинарный
let operatorBuffer = []


const updateDisplay = () => {
    document.getElementById("screen").innerHTML = [numBuffer[0], operatorBuffer[0], numBuffer[1]].join(' ');
}
/**
 * Сохраняет значение для дальнейшего вычисления
 */
const bufferNumber = int => {
    numBuffer.push(int)
    updateDisplay()
    playAudio();
}

/**
 * @param operation вычислимая операция {@link OPERATIONS}
 */
const bufferOperation = operation => {
    operatorBuffer.push(operation)
    updateDisplay()
    playAudio();
}


const calculateAndRender = () => {
    let h3 = document.getElementById("screen")
    h3.innerText = calculate()
    playAudio();
}




const cachedAudio = new Audio("public/click.mp3");
const playAudio = () => {
    cachedAudio.play()
}


const calculate = () => {
    let a = numBuffer[0]
    let b = numBuffer[1]

    switch (operatorBuffer[0]) {

        case OPERATIONS.INCREMENT:
            return a + b;

        case OPERATIONS.DECREMENT:
            return a - b;

        case OPERATIONS.MULTIPLY:
            return a * b;

        case OPERATIONS.DIVIDE:
            return a / b;

        case OPERATIONS.DEGREES:
            return Math.pow(a, b)

        case OPERATIONS.ROOT:
            return Math.sqrt(a)

        case OPERATIONS.PERCENTAGE:
            return (a / 100) * b // 10 / 100 = 0.01 * 2 = 0.02
    }

}

const resetBuffers = () => {
    document.getElementById("screen").innerHTML = ""
    numBuffer = []
    operatorBuffer = []
    playAudio();
}