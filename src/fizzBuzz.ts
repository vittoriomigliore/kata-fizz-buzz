class FizzBuzz {
  handle(value: number): string {
    var valueArray: string[] = value.toString().split("");
    var fizzBuzz: string = "";
    if (value % 3 == 0 || valueArray.includes("3")) {
      fizzBuzz += "Fizz";
    }
    if (value % 5 == 0 || valueArray.includes("5")) {
      fizzBuzz += "Buzz";
    }
    if (fizzBuzz.length > 0) {
      return fizzBuzz;
    }
    return String(value);
  }
}

export default FizzBuzz;
