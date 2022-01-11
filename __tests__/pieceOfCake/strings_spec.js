describe('for strings', () => {
  it('should get character at certain position', () => {
    const string = 'Hello';
    const characterWithinRange = string[1];
    const characterOutOfRange = string[10];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedCharWithinRange = 'e';
    const expectedCharOutOfRange = undefined;
    // --end->

    expect(characterWithinRange).toEqual(expectedCharWithinRange);
    expect(characterOutOfRange).toEqual(expectedCharOutOfRange);
  });

  it('should use template string to create strings', () => {
    const variable = 'World';
    const template = `Hello ${variable}`;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(template).toEqual(expected);
  });

  it('should get substring', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'nut';
    // includes start position
    // not includes end position
    // --end->

    expect(string.slice(4, 7)).toEqual(expected);
  });

  it('should get first index of a string', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 5;
    // --end->

    expect(string.indexOf('ut')).toEqual(expected);
  });

  it('should be able to trim string', () => {
    const string = ' coconuts \n';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'coconuts';
    // --end->

    expect(string.trim()).toEqual(expected);
  });

  it('should split string', () => {
    const words = 'what a beautiful    day';
    const splitted = words.split(' ');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = ['what','a','beautiful', '','','','day'];
    // --end->

    expect(splitted).toEqual(expected);
  });

  it('should join strings', () => {
    const splitted = ['what', 'a', 'beautiful', 'day'];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'what->a->beautiful->day';
    // --end->

    expect(splitted.join('->')).toEqual(expected);
  });

  it('should be aware to the codepoint larger than 16-bit', () => {
    // https://juejin.cn/post/6945801630990204964
    const emoji = '🐴👟';

    // 'a'.length 1
    // '嗨'.length 1
    // '𠮷'.length 2
    // '💩'.length 2
    // '🤦🏻‍♂️'.length 7

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 4;
    // --end->

    expect(emoji.length).toEqual(expected);
  });
});
