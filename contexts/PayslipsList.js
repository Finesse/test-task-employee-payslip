import {createContext} from 'react'

/**
 * React context: list of employees payslips
 */
export default createContext({
  payslips: [],
  addPayslip: payslip => {}
});
