import { secondsToDhms } from './utilis';

describe('Calculate the time passed since a given moment to present time in Years or Days or Hours or Minutes or Seconds', () => {
  test('It should return years passed if the time passed is => 1 year', () => {
    const unixInput = 1333800308;
    const output = '10 years';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });

  test('It should return days passed if the time passed is => 1 day'),
    () => {
      const date = new Date(new Date().setDate(new Date().getDate() - 5));
      const unixInput = Math.floor(date.getTime() / 1000);
      const output = '5 days';

      expect(secondsToDhms(unixInput)).toEqual(output);
    };
});
