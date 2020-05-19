describe('for variable', () => {
  it('should have function scope for var variable', () => {
    // eslint-disable-next-line vars-on-top, no-var, no-empty
    for (var i = 0; i <= 5; i += 1) { }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    // eslint-disable-next-line block-scoped-var
    expect(i).toEqual(expected);
  });

  it('should have block scope for let and const variable', () => {
    // eslint-disable-next-line prefer-const
    let i = 1000;
    // eslint-disable-next-line no-empty, no-shadow
    for (let i = 0; i <= 5; i += 1) { }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    // eslint-disable-next-line no-undef
    expect(i).toEqual(expected);
  });

  it('should be able to change details of const variable', () => {
    const constVariable = { name: 'changeit' };
    constVariable.name = 'new name';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(constVariable.name).toEqual(expected);
  });
});
