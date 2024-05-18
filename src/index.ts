import FizzBuzz from "./fizzBuzz";

function main() {
  var fizzBuzz = new FizzBuzz();
  var n: number = 10;

  for (var i = 1; i <= n; i++) {
    console.log(fizzBuzz.handle(i));
  }
}

main()