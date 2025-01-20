function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('No name provided');
    return; 
  }
  console.log(`Hello, ${name}!`);
}

printName(null); // Works as expected
printName('John'); // Works as expected
printName(undefined); // Works as expected