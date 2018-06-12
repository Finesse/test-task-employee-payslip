import moment from 'moment';

/**
 * @typedef {{}} Payslip
 * @property {string} name Employee name
 * @property {moment.Moment} payPeriodStart Pay period start
 * @property {moment.Moment} payPeriodEnd Pay period end
 * @property {number} grossIncome Gross income
 * @property {number} incomeTax Income tax
 * @property {number} netIncome Net income
 * @property {number} superAmount Super amount
 */

/**
 * Calculates a payslip
 *
 * @param {string} firstName Employee first name
 * @param {string} lastName Employee last name
 * @param {number} annualSalary Annual salary
 * @param {number} superRate Super rate
 * @param {moment.Moment} paymentStartDate Payment start date
 * @return {Payslip}
 */
export default function calculatePayslip({
  firstName,
  lastName,
  annualSalary,
  superRate,
  paymentStartDate
}) {
  const monthlyIncome = round(annualSalary / 12);
  const annualTax = getIncomeTax(annualSalary);
  const monthlyTax = round(annualTax / 12);

  return {
    name: `${firstName} ${lastName}`,
    payPeriodStart: paymentStartDate,
    payPeriodEnd: moment(paymentStartDate).add(1, 'months').subtract(1, 'day'),
    grossIncome: monthlyIncome,
    incomeTax: monthlyTax,
    netIncome: monthlyIncome - monthlyTax,
    superAmount: round(monthlyIncome * superRate / 100)
  };
}

/**
 * Taxes rates for 2017-18
 * @link https://www.ato.gov.au/Rates/Individual-income-tax-rates Taken from here
 * @type {{}[]}
 * @ignore This list must be sorted by maxIncome
 */
const taxesTable = [
  {
    maxIncome: 18200,
    taxStartIncome: 0,
    taxStartAmount: 0,
    taxRate: 0
  },
  {
    maxIncome: 37000,
    taxStartIncome: 18200,
    taxStartAmount: 0,
    taxRate: 0.19
  },
  {
    maxIncome: 87000,
    taxStartIncome: 37000,
    taxStartAmount: 3572,
    taxRate: 0.325
  },
  {
    maxIncome: 180000,
    taxStartIncome: 87000,
    taxStartAmount: 19822,
    taxRate: 0.37
  },
  {
    maxIncome: null,
    taxStartIncome: 180000,
    taxStartAmount: 54232,
    taxRate: 0.45
  }
];

/**
 * Gets the tax amount for an income
 *
 * @param {number} income Annual income
 * @return {number} Annual tax
 */
function getIncomeTax(income)
{
  const {taxStartAmount, taxStartIncome, taxRate} = getApplicableTax(income);

  return taxStartAmount + (income - taxStartIncome) * taxRate;
}

/**
 * Gets the data of a tax applicable for an income
 *
 * @param {number} income Annual income amount
 * @return {{taxStartIncome: number, taxStartAmount: number, taxRate: number}}
 */
function getApplicableTax(income)
{
  for (const tax of taxesTable) {
    if (tax.maxIncome === null || income <= tax.maxIncome) {
      return tax;
    }
  }
}

/**
 * Rounds a number.
 * Moved separately to keep the rounding business logic in a single place.
 * @type {Function}
 */
const round = Math.round;
