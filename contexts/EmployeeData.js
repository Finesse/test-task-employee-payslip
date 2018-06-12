import {createContext} from 'react'

/**
 * React context: employee data
 */
export default createContext({
	employee: null,
	setEmployee: employee => {}
});
