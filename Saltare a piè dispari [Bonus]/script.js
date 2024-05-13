const array = [''];

for (i = 0; i < 6; i++) {
    const utent = Number.parseInt(prompt('Scrivi un numero'));
    if (utent % 2===0) {
        array.push(utent);
        console.log(utent)
    } else {
        console.log('Dispari')
    }
}