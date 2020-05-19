describe('for strings', () => {
  it('should get character at certain position', () => {
    const string = 'Hello';
    const characterWithinRange = string[1];
    const characterOutOfRange = string[10];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedCharWithinRange = {};
    const expectedCharOutOfRange = {};
    // --end->

    expect(characterWithinRange).toEqual(expectedCharWithinRange);
    expect(characterOutOfRange).toEqual(expectedCharOutOfRange);
  });

  it('should use template string to create strings', () => {
    const variable = 'World';
    const template = `Hello ${variable}`;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(template).toEqual(expected);
  });

  it('should get substring', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(string.slice(4, 7)).toEqual(expected);
  });

  it('should get first index of a string', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(string.indexOf('ut')).toEqual(expected);
  });

  it('should be able to trim string', () => {
    const string = ' coconuts \n';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(string.trim()).toEqual(expected);
  });

  it('should split string', () => {
    const words = 'what a beautiful    day';
    const splitted = words.split(' ');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(splitted).toEqual(expected);
  });

  it('should join strings', () => {
    const splitted = ['what', 'a', 'beautiful', 'day'];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(splitted.join('->')).toEqual(expected);
  });

  it('should be aware to the codepoint larger than 16-bit', () => {
    const emoji = '🐴👟';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(emoji.length).toEqual(expected);
  });
});
