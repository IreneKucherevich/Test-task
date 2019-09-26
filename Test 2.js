for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
        console.log("OpenSource\n");
    } else if (i % 3 == 0) {
        console.log("Open\n");
    } else if (i % 7 == 0) {
        console.log("Source\n");
    } else {
        console.log(`${i}\n`);
    }
}