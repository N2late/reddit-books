import { secondsToDhms, textWithParagraphs } from './utilis';

describe('Calculate the time passed since a given moment to present time in Years or Days or Hours or Minutes or Seconds', () => {
  test('It should return years passed if the time passed is => 1 year', () => {
    const unixInput = 1333800308;
    const output = '10 years';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });
  test('It should return days passed if the time passed is => 1 day', () => {
    const date = new Date(new Date().setDate(new Date().getDate() - 5));
    const unixInput = Math.floor(date.getTime() / 1000);
    const output = '5 days';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });
  test('It should return hours passed if the time passed is => 1 hour', () => {
    const date = new Date();
    const unixInput = date.getTime() / 1000 - 3600 * 2;
    const output = '2 hours';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });
  test('It should return minutes passed if the time passed is => 1 minute', () => {
    const date = new Date();
    const unixInput = date.getTime() / 1000 - 60;
    const output = '1 minute';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });
  test('It should return seconds passed if the time passed is => 1 second', () => {
    const date = new Date();
    const unixInput = date.getTime() / 1000 - 10;
    const output = '10 seconds';

    expect(secondsToDhms(unixInput)).toEqual(output);
  });
});

describe('Make a line break every time the string passed has \n', () => {
  const input =
    'This line should break\n' +
    'and continue in a new line.\n' +
    'Does it work?';
  const output = [
    <p className="text1">This line should break</p>,
    <p className="text1">and continue in a new line.</p>,
    <p className="text1">Does it work?</p>,
  ];

  expect(textWithParagraphs(input)).toEqual(output);
});
