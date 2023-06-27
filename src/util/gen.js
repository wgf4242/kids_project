export function generateQuestion() {
    let flag = false;
    const addOrSubtract = Math.random() > 0.5 ? "add" : "subtract";
    let num1, num2
    while (!flag) {

        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);

        if (addOrSubtract === 'subtract') {
            if (num1 <= num2 || num1 % 10 - num2 % 10 > 0) {
                continue;
            }
        } else {// add
            if (num1 + num2 >= 100 || num1 % 10 + num2 % 10 < 10) {
                continue
            }
        }

        flag = true;
    }


    const result = addOrSubtract === "add" ? Math.round(num1 + num2) : Math.round(num1 - num2);
    const question = addOrSubtract === "add"
        ? `${num1} + ${num2} = `
        : `${num1} - ${num2} = `;
    return [question, result]
}
