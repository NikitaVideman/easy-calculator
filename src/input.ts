enum Operator {
    Addition,       // +
    Subtraction,    // -
    Multiplication, // *
    Division,       // /
    Modulo,          // %
    Exponentiation, // **
    Increment,       // ++
    Decrement,       // --
}

let a = [Operator.Modulo]

function consume(input: any): void {
    // логика для невложенного массива

    if (input in Operator) {
        if (a.length == 0) {
            throw new Error("Оператор не может быть вставлен без операндов. Это бессмысленно...");
        }
        if (a[0] in Operator) {
            //то заменить оператор
            a[0] = input
            console.log('f: ' + a); // BUG: не заменяет
        }
    }

    // проверить что введено число
    // и что перед ним не стоит другого числа

    // добавить в aы
}

export {consume, Operator}





// // 1
// [ 1, *, [ 2 + [ 3 + 3 ] ] ]

// // 2
// [ 1, *, 8 ]

// // 3
// [ 2 + 6 ]
// [8]

// // 4 (финал)
//  [1, *, 8 ]
//  [8]