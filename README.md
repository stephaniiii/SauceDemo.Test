# SauceDemo Cypress Test Suite

This is a Cypress test suite for the SauceDemo web application. It includes various test cases for login functionality and sorting of items.

## Prerequisites

Before running the tests, ensure that you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Cypress (installed locally or globally)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/stephaniiii/SauceDemo.Test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SauceDemo-Cypress
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Running Tests Locally

To run the Cypress tests locally, follow these steps:

1. Open a terminal and navigate to the project directory.

2. Run the Cypress test runner:

   ```bash
   npx cypress open
   ```

3. In the Cypress test runner, click on the test spec file you want to run (e.g., `SauceDemo.cy.js`). This will open a new browser window and execute the tests.

## Running Tests on CI (GitHub Actions)

This repository is set up to run the Cypress tests automatically on GitHub Actions whenever changes are pushed to the main branch. To configure and run tests on CI, follow these steps:

1. Push your changes to the main branch of your GitHub repository.

2. Navigate to the "Actions" tab in your GitHub repository.

3. You will see a workflow named "Cypress Tests" or a similar name. This workflow is triggered automatically when changes are pushed to the main branch.

4. Click on the workflow to view the test runs and results.

## Test Cases

This test suite includes the following test cases:

1. **Redirect to the SauceDemo Login Page**: Verifies that users are redirected to the login page successfully.

2. **Login to SauceDemo with Invalid Credentials**: Verifies that users cannot log in successfully with invalid credentials.

3. **Login to SauceDemo when both fields are empty**: Verifies that users cannot log in successfully when both username and password fields are empty.

4. **Login to SauceDemo with Valid Credentials**: Verifies that users can log in successfully with valid credentials.

5. **Sort Items from A to Z**: Verifies that users can sort items by name in ascending order (A to Z).

6. **Sort Items from Z to A**: Verifies that users can sort items by name in descending order (Z to A).

## Troubleshooting

- If you encounter any issues while running the tests, ensure that you have followed the installation steps correctly.

- Check the GitHub Actions workflow for any error messages or issues related to running tests on CI.

- Refer to the Cypress documentation (https://docs.cypress.io/) for more information on troubleshooting Cypress test runs.

## Contributing

Feel free to contribute to this test suite by adding more test cases or improving existing ones. Pull requests are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

You can customize this README file further to include specific details about your project, such as additional test cases, configurations, and any other relevant information.