const OPERATIONS = {

    INCREMENT: 'INCREMENT',

    DECREMENT: 'DECREMENT',

    MULTIPLY: 'MULTIPLY',

    DIVIDE: 'DIVIDE',

};

const RESULT_PREFIX = "Result: ";

let numBuffer = [] // 2 потому что пока что калькулятор бинарный
let operatorBuffer = []

/**
 * Сохраняет значение для дальнейшего вычисления
 */
const bufferNumber = int => {
    numBuffer.push(int)
    console.log("[BUFFER]: " + int)
}

/**
 * @param operation вычислимая операция {@link OPERATIONS}
 */
const bufferOperation = operation => {
    operatorBuffer.push(operation)
    console.log("[OPERATIONS]: " + operation)
}

const calculateAndRender = () => {
    let h3 = document.getElementById("screen")
    h3.innerText = RESULT_PREFIX + calculate()
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
    }
}
