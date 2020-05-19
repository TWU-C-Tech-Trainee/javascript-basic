describe('for object', () => {
  it('should access property via dot or bracket', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedName = undefined;
    // --end->

    expect(person.name).toEqual(expectedName);
    // eslint-disable-next-line dot-notation
    expect(person['name']).toEqual(expectedName);
  });

  it('should get undefined if property is not defined', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = {};
    // --end->

    expect(person.whatTheHellIsThat).toEqual(expected);
  });

  it('should remove object property using delete operator', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write a line of code to remove the `name` property.

    // --end->

    expect(person.name).toBeUndefined();
  });

  it('should be able to find all the keys', () => {
    const person = {
      name: 'Bob', yearOfBirth: 2019,
    };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(Object.keys(person)).toEqual(expected);
  });

  it('should create object with braces expression', () => {
    const person = {
      name: 'Bob',
      // eslint-disable-next-line object-shorthand, func-names
      greeting: function () { return `Hello, I am ${this.name}`; },
    };

    person.name = 'John';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(person.greeting()).toEqual(expected);
  });

  it('should destruct object', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const { name } = person;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(name).toEqual(expected);
  });

  it('should serialize object to JSON', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const json = JSON.stringify(person);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(json).toEqual(expected);
  });

  it('should parse JSON to object', () => {
    const json = '{"color":"Red","value":"#ff0000"}';
    const color = JSON.parse(json);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(color).toEqual(expected);
  });

  it('should point to the object it was called on for "this" in a method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should explicitly specify this using call method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    speak.call(rabbit, 'Hello');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should capture this in the scope around it for arrow function', () => {
    function normalize() {
      return this.coords.map(n => n / this.length);
    }

    const actual = normalize.call({ coords: [0, 10, 15], length: 5 });

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(actual).toEqual(expected);
  });

  it('should get object prototype for an object', () => {
    const emptyObject = {};

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(Object.getPrototypeOf(emptyObject)).toBe(expected);
  });

  it('should get null for object prototype\'s prototype', () => {
    const objectPrototype = Object.prototype;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(Object.getPrototypeOf(objectPrototype)).toEqual(expected);
  });

  it('should be able to create object with specified prototype', () => {
    const rabbitPrototype = {
      speak(line) { return `The ${this.type} rabbit says ${line}.`; },
    };
    const killerRabbit = Object.create(rabbitPrototype);
    killerRabbit.type = 'killer';

    const words = killerRabbit.speak('SKREEEE');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(words).toEqual(expected);
  });

  it('should simulate constructor using function, and use function\'s prototype as definition', () => {
    function Rabbit(type) { this.type = type; }
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function (line) { return `The ${this.type} rabbit says ${line}.`; };

    const rabbit = new Rabbit('weird');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(rabbit.speak('?_?')).toEqual(expected);

    const prototypeOfRabbitInstance = Object.getPrototypeOf(rabbit);
    const rabbitFunctionPrototype = Rabbit.prototype;
    const prototypeOfRabbitFunction = Object.getPrototypeOf(Rabbit);
    const functionPrototype = Function.prototype;

    // <--start
    // Please write down the correct value. You should choose the correct value from:
    // * prototypeOfRabbitInstance
    // * rabbitFunctionPrototype
    // * prototypeOfRabbitFunction
    // * functionPrototype
    const expectedPrototypeOfRabbitInstance = undefined;
    const expectedPrototypeOfRabbitFunction = undefined;
    // --end->

    expect(prototypeOfRabbitInstance).toBe(expectedPrototypeOfRabbitInstance);
    expect(prototypeOfRabbitFunction).toBe(expectedPrototypeOfRabbitFunction);
  });

  it('should use the class notation rather than the awkward function', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak(line) { return `The ${this.type} rabbit says ${line}.`; }
    }

    const rabbit = new Rabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(rabbit.speak('Hi')).toEqual(expected);
  });

  it('should overriding property of prototype for an instance', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    Rabbit.prototype.teeth = 'small';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedKillerRabbitTeeth = undefined;
    // --end->

    expect(killerRabbit.teeth).toEqual(expectedKillerRabbitTeeth);

    killerRabbit.teeth = 'sharp';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedOverrideKillerRabbitTeeth = undefined;
    const expectedRabbitPrototypeTeeth = undefined;
    // --end->

    expect(killerRabbit.teeth).toEqual(expectedOverrideKillerRabbitTeeth);
    expect(Rabbit.prototype.teeth).toEqual(expectedRabbitPrototypeTeeth);
  });

  it('should be the same for method overriding', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function () { return 'Hi'; };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedKillerRabbitSpeak = undefined;
    // --end->

    expect(killerRabbit.speak()).toEqual(expectedKillerRabbitSpeak);

    // eslint-disable-next-line func-names
    killerRabbit.speak = function () { return '@_@'; };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedOverrideKillerRabbitSpeak = undefined;
    const expectedRabbitPrototypeSpeak = undefined;
    // --end->

    expect(killerRabbit.speak()).toEqual(expectedOverrideKillerRabbitSpeak);
    expect(Rabbit.prototype.speak()).toEqual(expectedRabbitPrototypeSpeak);
  });

  it('should be able to define getter and setter and static method', () => {
    class Temperature {
      constructor(celsius) { this.celsius = celsius; }

      get fahrenheit() { return this.celsius * 1.8 + 32; }

      set fahrenheit(value) { this.celsius = (value - 32) / 1.8; }

      static fromFahrenheit(value) { return new Temperature((value - 32) / 1.8); }
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedFahrenheit = undefined;
    // --end->

    expect(new Temperature(22).fahrenheit).toEqual(expectedFahrenheit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedCelsius = undefined;
    // --end->

    expect(Temperature.fromFahrenheit(86).celsius).toEqual(expectedCelsius);
  });

  it('should inherit from existing class', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak() { return `I am ${this.type} rabbit`; }
    }

    class CrazyRabbit extends Rabbit {
      speak() { return `I am crazy ${this.type} rabbit`; }
    }

    const rabbit = new CrazyRabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedSpeak = undefined;
    // --end->

    expect(rabbit.speak()).toEqual(expectedSpeak);
  });

  it('should determine whether an instance is derived from certain class', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak() { return `I am ${this.type} rabbit`; }
    }

    class CrazyRabbit extends Rabbit {
      speak() { return `I am crazy ${this.type} rabbit`; }
    }

    const rabbit = new CrazyRabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsRabbit = undefined;
    // --end->

    expect(rabbit instanceof Rabbit).toEqual(rabbitIsRabbit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsCrazyRabbit = undefined;
    // --end-->

    expect(rabbit instanceof CrazyRabbit).toEqual(rabbitIsCrazyRabbit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsObject = undefined;
    // --end-->

    expect(rabbit instanceof Object).toEqual(rabbitIsObject);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsNumber = undefined;
    // --end-->

    expect(rabbit instanceof Number).toEqual(rabbitIsNumber);
  });
});
