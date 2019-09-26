function sumNumbers(list) {

    let result = list.reduce((sum, current) => {

        current = Number(current);
        if (Number.isInteger(current)) {
            return sum + current;
        }
        return sum;

    }, 0);

    return result;
}
