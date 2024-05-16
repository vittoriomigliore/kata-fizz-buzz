class FizzBuzz {
  handle(value: number): string {
    if((value%3) == 0){
        return 'Fizz';
    }
    if((value%5) == 0){
        return 'Buzz';
    }
    return String(value);
  }
}

export default FizzBuzz;
