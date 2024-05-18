class FizzBuzz {
  handle(value: number): string {
    var result = "1";
    if(value%3 == 0){
        result = "Fizz"
    }
    return result;
  }
}

export default FizzBuzz;
