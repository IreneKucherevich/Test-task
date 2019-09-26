const secretInteger = 17865;

function verify(guess) {
    verify.counter++;

    if (secretInteger == guess) {
        return 0;
    }
    if (secretInteger > guess) {
        return 1;
    }
    if (secretInteger < guess) {
        return -1;
    }
}

verify.counter = 0;

let start = 1;
let end = 1e6;

while (start <= end) {

    if (verify.counter > 50) {
        alert("Program lose")
        break;
    }

    let middle = Math.floor((start + end) / 2);
    let result = verify(middle);

    if (result == 1) {
        start = middle + 1;
    }else if (result == -1) {
        end = middle - 1;
    }else {
        alert("Program won");
        break;
    }

}