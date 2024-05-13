const IA = Number.parseInt(Math.floor(Math.random()* 6)+1);
const person = Number.parseInt(Math.floor(Math.random()* 6)+1);

if (person > IA) {
    console.log(person, 'Gli umani vincono')
} else if (IA > person) {
    console.log(IA, 'IA ha vinto')
}