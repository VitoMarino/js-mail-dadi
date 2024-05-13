let person = prompt('Scrivi la tua mail');
const personaAccess = ['mario.rossi@mail.com', 'mario.bianchi@mail.com', 'luigi.verdi@mail.com', 'boolean.careers@mail.com']

if (personaAccess.includes(person)) {
    console.log('Il tuo accesso è stato configurato correttamente')
} else {
    console.log('Non puoi accedere in quanto non sei nella lista delle persone che possono accedere')
}