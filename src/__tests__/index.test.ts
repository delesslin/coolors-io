import gen from '../gen';
import parse from '../parse';

test('Test Parse', () => {
  expect(parse('https://coolors.co/243cf2-9e8f19-a81470-4553bf-4a5396')).toBe([
    '#898952',
    '#b2945b',
    '#d0e562',
    '#b6d369',
    '#93c48b',
  ]);
});

test('Test Gen', () => {
  expect(gen(['feffef', '#ffeffe'])).toBe('https://coolors.co/feffef-ffeffe');
});
