function* generator(a, b) {
    for (j = a; j <= b; j++) {
        for (k = 0; k < 11; k++) {
            yield `${j} x ${k} = ${j * k}`
        }
        console.log("////////////////////////////////////////");
    }
}

const obj = generator(1, 4)

for (i of obj) {
    for (m = 0; m <= 9; m++) {
        console.log(obj.next());
    }
}

