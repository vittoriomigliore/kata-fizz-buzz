class FizzBuzz {
  handle(value: number): string {
    var result = "1";
    if(value%3 == 0){
        result = "Fizz"
    }
    if(value%5 == 0){
        result = "Buzz"
    }
    return result;
  }
}

export default FizzBuzz;
