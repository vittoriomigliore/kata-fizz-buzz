class FizzBuzz {
  private readonly dictionary: { [key: number]: string } = {
    0: "Fizz",
    1: "Buzz",
  };

  handle(value: number): string {
    var result = "";
    var digits: string[] = value.toString().split("");
    if (this.isDividableBy3(value)) {
      result += this.dictionary[0];
    }
    if (digits.includes("3")) {
      result += this.dictionary[0];
    }
    if (this.isDividableBy5(value)) {
      result += this.dictionary[1];
    }
    if (digits.includes("5")) {
      result += this.dictionary[1];
    }
    if (result.length > 0) {
      return result;
    }
    return value.toString();
  }

  private isDividableBy5(value: number) {
    return value % 5 == 0;
  }

  private isDividableBy3(value: number) {
    return value % 3 == 0;
  }
}

export default FizzBuzz;
