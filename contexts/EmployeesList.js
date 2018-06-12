import {createContext} from 'react'

/**
 * React context: list of employees data
 */
export default createContext({
  employees: [],
  addEmployee: employee => {}
});
