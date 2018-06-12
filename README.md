# Employee payslip calculator

This is an application where user can input employee data (annual salary, super rate, etc.) and get a payslip on a separate page.
The application is a single page application made on top of [React](http://reactjs.org) and [Next.js](http://nextjs.org/). 

The complete task is located here: https://docs.google.com/document/d/13Wl2klo5-PbtMJDysFZc6xGnbxvs7GF7tYrA6omhqI8


## How to start

1. Install [Node.js](http://nodejs.org/en/).
2. Open a terminal and go to an empty directory where you want to install the application.
3. Download the code
    ```bash
    git clone https://github.com/Finesse/starlight-employee-payslip.git .
    ```
4. Install the dependencies
    ```bash
    npm install
    ```
5. Start the application
    ```bash
    npm run build
    npm run start
    ```
6. Open http://localhost:3000 in your browser.
7. Press <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to stop the application.


## Example inputs and outputs

### Example 1

#### Input

| First name | Last name | Annual salary | Super rate (%) | Payment start date |
| ---------- | --------- | ------------- | -------------- | ------------------ |
| Andrew     | Smith     | 60050         | 9              | Match 1, 2018      |

#### Output

| Name         | Pay period          | Gross income | Income tax | Net income | Super amount |
| ------------ | ------------------- | ------------ | ---------- | ---------- | ------------ |
| Andrew Smith | 01 March – 31 March | 5004         | 922        | 4082       | 450          |

### Example 2

#### Input

| First name | Last name | Annual salary | Super rate (%) | Payment start date |
| ---------- | --------- | ------------- | -------------- | ------------------ |
| John       | Doe       | 130000        | 2              | April 1, 2018      |

#### Output

| Name         | Pay period          | Gross income | Income tax | Net income | Super amount |
| ------------ | ------------------- | ------------ | ---------- | ---------- | ------------ |
| John Doe     | 01 April – 30 April | 10833        | 2978       | 7855       | 217          |


## Application architecture

The application architecture fully inherits the suggested Next.js architecture.
The pages root React components are located in the [pages](pages) directory.
All the other React components are located in the [components](components) directory.
The pure business logic code is located in the [models](models) directory.

The form input data is passed to the result page using the [React Context API](https://reactjs.org/docs/context.html).
The [pages/_app.js](pages/_app.js) file, which contains a parent React component for all the pages, creates a context provider.
The [form on the index page](components/EmployeeForm.js) consumes the context, calls it's function to set an employee data to the context and just redirects the user.
In its turn, the [result page](pages/result.js) consumes the context and uses it's data to display a payslip. 

The [form component](components/EmployeeForm.js) uses the [React Form](https://react-form.js.org/) package to control the inputs state.  

## Contribution

To start a development version of the application, run

```bash
npm run dev
```

It will enable hot reload so when you edit a file, changes will appear on the browser page without a page reload.
