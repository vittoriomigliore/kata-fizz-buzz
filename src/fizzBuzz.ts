class FizzBuzz {
  handle(value: number): string {
    var fizzBuzz: string = '';
    if((value%3) == 0){
        fizzBuzz += 'Fizz';
    }
    if((value%5) == 0){
        fizzBuzz += 'Buzz';
    }
    if(fizzBuzz.length > 0){
        return fizzBuzz
    }
    return String(value);
  }
}

export default FizzBuzz;
