import Validator from '../Validator';

test.each([
  ['Polina', true],
  ['Polin123a', true],
  ['Polin1234a', false],
  ['Polina-malina', true],
  ['Polina_malina', true],
  ['Полина', false],
  ['Polina1', false],
  ['1Polina', false],
  ['Polina-', false],
  ['Polina_', false],
  ['-Polina', false],
  ['_Polina', false]
])('should check the name %s to be equal to %p' , (name, result) => {
  const validator = new Validator();
  expect(validator.validateUsername(name)).toBe(result);
});