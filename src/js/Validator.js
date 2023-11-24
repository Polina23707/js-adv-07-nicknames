export default class Validator {

  validateUsername(string) {
    const conditionFirst = /^[0-9a-zA-Z_-]+$/i.test(string);
    const conditionSecond = !/\d\d\d\d/.test(string);
    const conditionThird = !/^[0-9-_]+/.test(string);
    const conditionForth = !/[0-9-_]+$/.test(string);

    return conditionFirst && conditionSecond && conditionThird && conditionForth;
  }
}