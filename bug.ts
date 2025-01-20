function printName(name: string | null): void {
  if (name === null) {
    console.log('No name provided');
    return; 
  }
  console.log(`Hello, ${name}!`);
}

printName(null); // Works as expected
printName('John'); // Works as expected
printName(undefined); //Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.