# Playwright TypeScript Automation Framework

## Overview

This project is a Playwright Automation Framework built using TypeScript and the Page Object Model (POM) design pattern.

The framework automates the SauceDemo application and demonstrates industry-standard automation practices such as reusable page objects, test data management, logging, screenshots, videos, traces, and HTML reporting.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## Project Structure

```
PW_Master_Framework/
│
├── pages/
├── tests/
├── constants/
├── utils/
├── test-data/
├── screenshots/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Features

- Page Object Model (POM)
- Reusable BasePage
- JSON Test Data
- HTML Reports
- Screenshots on Failure
- Video Recording on Failure
- Trace Collection on Failure
- Simple Logger Utility
- Cross Browser Support (can be enabled)

---

## Test Scenarios

- Valid Login
- Invalid Login
- Verify Inventory Page
- Add Product to Cart
- Remove Product from Cart
- Checkout Product
- Complete Order

---

## How to Run

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Open HTML Report

```bash
npx playwright show-report
```

---

## Framework Design

- BasePage contains reusable methods.
- Each application page has its own Page Object.
- Test data is stored separately in JSON files.
- Tests are independent and reusable.
- Logging is added for important business actions.

---

## Author

Vanitha Hegde