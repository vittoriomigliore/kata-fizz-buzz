import Transformer from "./transformer/transformer";
import FizzTransformer from "./transformer/fizzTransformer";
import BuzzTransformer from "./transformer/buzzTransformer";

class FizzBuzz {
  readonly transformers: Transformer[] = [
    new FizzTransformer(),
    new BuzzTransformer(),
  ];

  handle(value: number): string {
    var result: string = "";
    this.transformers.forEach((current) => {
      result += current.transform(value);
    });
    return result.length == 0 ? value.toString() : result;
  }
}

export default FizzBuzz;
