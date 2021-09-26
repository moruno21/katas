import { convert } from './convert';

test('test number 1', () => {
  expect(convert(2)).toBe('II');
});

test('test number 2', () => {
  expect(convert(2)).toBe('II');
});
test('test number 3', () => {
  expect(convert(3)).toBe('III');
});
test('test number 4', () => {
  expect(convert(4)).toBe('IV');
});

test('test number 5', () => {
  expect(convert(5)).toBe('V');
});

test('test number 9', () => {
  expect(convert(9)).toBe('IX');
});

test('test number 10', () => {
  expect(convert(10)).toBe('X');
});

test('test number 50', () => {
  expect(convert(50)).toBe('L');
});

test('test number 100', () => {
  expect(convert(100)).toBe('C');
});

test('test number 500', () => {
  expect(convert(500)).toBe('D');
});

test('test number 534', () => {
  expect(convert(534)).toBe('DXXXIV');
});

test('test number 948', () => {
  expect(convert(948)).toBe('CMXLVIII');
});
test('test number 3847', () => {
  expect(convert(3847)).toBe('MMMDCCCXLVII');
});
