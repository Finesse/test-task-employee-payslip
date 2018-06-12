/**
 * Makes a function that validates a string value
 *
 * @param {string} name How to call the value in the error messages
 * @return {Function}
 */
const makeStringValidator = name => value => {
  if (!value) {
    return `The ${name} is not specified`;
  }

  if (typeof value !== 'string') {
    return `The ${name} value is not a string`;
  }

  value = value.trim();

  if (!value) {
    return `The ${name} is empty`;
  }

  return null;
};

/**
 * Validates a first name value
 *
 * @param {*} value The value to validate
 * @return {string|null} Error message. Null means "it is ok"
 */
export const validateFirstName = makeStringValidator('first name');

/**
 * Validates a last name value
 *
 * @param {*} value The value to validate
 * @return {string|null} Error message. Null means "it is ok"
 */
export const validateLastName = makeStringValidator('last name');

/**
 * Makes a function that validates a number value
 *
 * @param {string} name How to call the value in the error messages
 * @param {number|null} [min] The minimum value
 * @param {number|null} [max] The maximum value
 * @param {boolean} [isInteger=false] Must the value be integer
 * @return {Function}
 */
const makeNumberValidator = ({name, min = null, max = null, isInteger = false}) => value => {
  if (value === null || value === undefined) {
    return `The ${name} is not specified`;
  }

  if (typeof value === 'string') {
    value = value.trim();

    if (!value) {
      return `The ${name} is empty`;
    }

    value = Number(value);
  }

  if (typeof value !== 'number' || isNaN(value)) {
    return `The ${name} is not a number`;
  }

  if (min !== null && value < min) {
    return `The ${name} must be greater or equal than ${min}`;
  }

  if (max !== null && value > max) {
    return `The ${name} must be less or equal than ${max}`;
  }

  if (isInteger && value % 1 !== 0) {
    return `The ${name} must be integer`;
  }

  return null;
};

/**
 * Validates an annual salary value
 *
 * @param {*} value The value to validate
 * @return {string|null} Error message. Null means "it is ok"
 */
export const validateAnnualSalary = makeNumberValidator({name: 'annual salary', min: 0, isInteger: true});

/**
 * Validates a super rate value
 *
 * @param {*} value The value to validate
 * @return {string|null} Error message. Null means "it is ok"
 */
export const validateSuperRate = makeNumberValidator({name: 'super rate', min: 0, max: 12});

/**
 * Validates a payment start date
 *
 * @param {*} value The value to validate
 * @return {string|null} Error message. Null means "it is ok"
 */
export const validatePaymentStartDate = value => {
  if (!value) {
    return 'The payment start date is not specified';
  }

  return null;
};
