let number = parselnt(prompt("Введите положительное число:"));
while (number <= 0 || number >1000000) {
    number = parseInt (
        prompt (
            "Вы ввели отрицательное число или 0. Пожалуйста, введите положительное число:"
        )
    );
} else {
    number = parseInt (
        prompt (
            "Вы ввели слишком большое число. Пожалуйста, введите число, которое меньше или равно 1 000 000:"
        )
    );
}
}

let divisor = 2;
document.write("Делители числа " + nubmer + ":<br/>");

let hasDivisors = false;

while (divisor < number) {
    if (number % divisor === 0) {
        document.write(divisor + "<br/>");
        hasDivisors = true
    }
    divisor++;
}

if(!hasDivisors) {
    document.write("У числа " + number + " нет делителей. <br/>");
}
