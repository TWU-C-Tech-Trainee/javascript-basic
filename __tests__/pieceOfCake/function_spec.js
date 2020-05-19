describe('for function', () => {
  it('should be able to define function in function scope', () => {
    function outerFunction() {
      const myName = 'World';
      function innerFunction() {
        return `Hello ${myName}`;
      }

      return innerFunction();
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(outerFunction()).toEqual(expected);
  });

  it('should pass function as value', () => {
    const sayHello = () => 'Hello';

    function greeting(prefixGenerator, name) {
      return `${prefixGenerator()} ${name}`;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(greeting(sayHello, 'World')).toEqual(expected);
  });

  it('should allow optional arguments for any function', () => {
    function square(x) { return x * x; }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(square(6, 'Hello', 4)).toEqual(expected);
  });

  it('should be undefined for not specified parameter', () => {
    function minus(left, right) {
      if (right === undefined) { return -left; }
      return left - right;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedForSingleArgument = undefined;
    const expectedForTwoArguments = undefined;
    // --end->

    expect(minus(5)).toEqual(expectedForSingleArgument);
    expect(minus(5, 3)).toEqual(expectedForTwoArguments);
  });

  it('should specify default parameters', () => {
    function power(base, exponent = 2) {
      let result = 1;
      for (let count = 0; count < exponent; count += 1) {
        result *= base;
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(power(4)).toEqual(expected);
  });

  it('should not modify the original variable', () => {
    // eslint-disable-next-line prefer-const
    let guessIfIAmChanged = 'Origin';
    function transferToAnotherWord(word) {
      // eslint-disable-next-line no-param-reassign
      word = 'Changed';
      return word;
    }

    const returnValue = transferToAnotherWord(guessIfIAmChanged);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedReturnValue = undefined;
    const expectedWord = undefined;
    // --end->

    expect(returnValue).toEqual(expectedReturnValue);
    expect(guessIfIAmChanged).toEqual(expectedWord);
  });

  it('should modify the content of the variable', () => {
    const person = {};
    // eslint-disable-next-line no-shadow
    function addName(person, name) {
      // eslint-disable-next-line no-param-reassign
      person.name = name;
      return person;
    }

    const returnValue = addName(person, 'Bob');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedName = undefined;
    const expectedReturnValueName = undefined;
    // --end->

    expect(person.name).toEqual(expectedName);
    expect(returnValue.name).toEqual(expectedReturnValueName);
  });

  it('should capture local variables', () => {
    function wrapValue() {
      const localVariable = 'Hello';
      return () => localVariable;
    }

    const actual = wrapValue()();

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(actual).toEqual(expected);
  });

  it('should change captured variable', () => {
    let guessIfIAmChanged = 'Origin';

    function wrapValue() {
      return () => { guessIfIAmChanged = 'Changed'; };
    }

    wrapValue()();

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(guessIfIAmChanged).toEqual(expected);
  });

  it('should create some recursion trick', () => {
    function findSolution(target) {
      function find(current, history) {
        // eslint-disable-next-line eqeqeq
        if (current == target) { return history; }
        if (current > target) { return null; }
        return find(current + 5, `(${history} + 5)`)
          || find(current * 3, `(${history} * 3)`);
      }

      return find(1, '1');
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(findSolution(24)).toEqual(expected);
  });

  it('should accept any number of parameters', () => {
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(sum(1, 2, 3)).toEqual(expected);
  });

  it('should also use 3 dot notation to call function with rest parameters', () => {
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    const parameters = [1, 2, 3];
    const actual = sum(...parameters);

    expect(actual).toEqual(expected);
  });

  it('should be able to passing parameters in mixed way', () => {
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    const parameters = [1, 2, 3];
    const actual = sum(9, ...parameters, 10);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(actual).toEqual(expected);
  });

  it('should pass pre-defined function as callback', () => {
    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) { action(i); }
    }
    const labels = [];
    repeat(3, index => labels.push(index * 3));

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(labels).toEqual(expected);
  });

  it('should create higher order function', () => {
    function greaterThan(n) {
      return value => value > n;
    }

    const greaterThan10 = greaterThan(10);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(greaterThan10(3)).toEqual(expected);
  });

  it('should not make you crazy with high order function', () => {
    function noisy(f) {
      return (...args) => f(...args);
    }

    const array = [20, 160, 11];
    const actual = noisy(Math.min)(...array);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(actual).toEqual(expected);
  });

  it('should not make you crazy even we change the control flow', () => {
    function unless(test, then) { if (!test) then(); }
    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) { action(i); }
    }

    const logs = [];

    repeat(5, (n) => {
      unless(n % 2 === 1, () => logs.push(n));
    });

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(logs).toEqual(expected);
  });
});
