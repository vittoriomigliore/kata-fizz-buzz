import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe('fizz buzz test set', function (): void {

  it('test 1', (): void => {

    var result: string = FizzBuzzClass.handle(1);

    var expected = '1';
    expect(result).toBe(expected);
  });

  it('test 3', (): void => {

    var result: string = FizzBuzzClass.handle(3);

    var expected = 'Fizz';
    expect(result).toBe(expected);
  });

  it('test 5', (): void => {

    var result: string = FizzBuzzClass.handle(5);

    var expected = 'Buzz';
    expect(result).toBe(expected);
  });

  it('test 15', (): void => {

    var result: string = FizzBuzzClass.handle(15);

    var expected = 'FizzBuzz';
    expect(result).toBe(expected);
  });

});