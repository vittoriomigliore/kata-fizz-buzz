class FizzBuzz {
  handle(value: number): string {
    if((value%3) == 0){
        return 'Fizz';
    }
    return String(value);
  }
}

export default FizzBuzz;
