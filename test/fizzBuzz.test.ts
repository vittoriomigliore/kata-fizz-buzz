import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe('fizz buzz test set', function (): void {

  it('test 1', (): void => {

    var result: string = FizzBuzzClass.handle(1);

    var expected = '1';
    expect(result).toBe(expected);
  });

  it('test 4', (): void => {

    var result: string = FizzBuzzClass.handle(4);

    var expected = '4';
    expect(result).toBe(expected);
  });

  it('test 7', (): void => {

    var result: string = FizzBuzzClass.handle(7);

    var expected = '7';
    expect(result).toBe(expected);
  });

  it('test 3', (): void => {

    var result: string = FizzBuzzClass.handle(3);

    var expected = 'FizzFizz';
    expect(result).toBe(expected);
  });

  it('test 5', (): void => {

    var result: string = FizzBuzzClass.handle(5);

    var expected = 'BuzzBuzz';
    expect(result).toBe(expected);
  });

  it('test 15', (): void => {

    var result: string = FizzBuzzClass.handle(15);

    var expected = 'FizzBuzzBuzz';
    expect(result).toBe(expected);
  });

  it('test 53', (): void => {

    var result: string = FizzBuzzClass.handle(53);

    var expected = 'FizzBuzz';
    expect(result).toBe(expected);
  });

  it('test 35', (): void => {

    var result: string = FizzBuzzClass.handle(35);

    var expected = 'FizzBuzzBuzz';
    expect(result).toBe(expected);
  });

  it('test 135', (): void => {

    var result: string = FizzBuzzClass.handle(135);

    var expected = 'FizzFizzBuzzBuzz';
    expect(result).toBe(expected);
  });

});