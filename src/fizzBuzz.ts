class FizzBuzz {
  private readonly dictionary: string[] = ["Fizz", "Buzz", "FizzBuzz"];
  handle(value: number): string {
    var result = "1";
    var index =
      this.isDividableBy3(value) && this.isDividableBy5(value)
        ? 2
        : this.isDividableBy5(value)
        ? 1
        : this.isDividableBy3(value)
        ? 0
        : -1;
    if (index != -1){
        result = this.dictionary[index]
    }
    return result;
  }

  private isDividableBy5(value: number) {
    return value % 5 == 0;
  }

  private isDividableBy3(value: number) {
    return value % 3 == 0;
  }
}

export default FizzBuzz;
