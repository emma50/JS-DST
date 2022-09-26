var person = {name: 'Emmanuel'}
console.log(JSON.stringify(person));

var personTwo = {name: 'Emmanuel', toJSON() {return 1}}
console.log(JSON.stringify(personTwo))