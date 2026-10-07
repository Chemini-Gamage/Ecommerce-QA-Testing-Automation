# ShopEase Test Scenarios

## Authentication

| ID | Test Scenario | Priority |
|---|---|---|
| TS-001 | Verify that a user can log in with valid credentials | High |
| TS-002 | Verify that login fails with invalid credentials | High |
| TS-003 | Verify that login validation works when username is empty | Medium |
| TS-004 | Verify that login validation works when password is empty | Medium |
| TS-005 | Verify that a user can log out successfully | High |

## Product Browsing

| ID | Test Scenario | Priority |
|---|---|---|
| TS-006 | Verify that users can view the product list | High |
| TS-007 | Verify that users can view product details | High |
| TS-008 | Verify that product information is displayed correctly | Medium |
| TS-009 | Verify that users can search for products | High |

## Shopping Cart

| ID | Test Scenario | Priority |
|---|---|---|
| TS-010 | Verify that a user can add a product to the cart | High |
| TS-011 | Verify that the cart displays the correct product | High |
| TS-012 | Verify that the cart calculates the correct total | High |
| TS-013 | Verify that a user can remove a product from the cart | High |
| TS-014 | Verify that a user can update product quantity | Medium |

## Checkout

| ID | Test Scenario | Priority |
|---|---|---|
| TS-015 | Verify that a user can proceed to checkout | High |
| TS-016 | Verify that checkout validates required fields | High |
| TS-017 | Verify that a user can complete an order with valid information | High |
| TS-018 | Verify that invalid checkout information is rejected | High |

## Logout

| ID | Test Scenario | Priority |
|---|---|---|
| TS-019 | Verify that a logged-in user can log out | Medium |
| TS-020 | Verify that a logged-out user cannot access protected pages | High |

# Exploratory Testing Session

## Objective

Explore the application beyond the predefined test cases to identify unexpected behavior, verify application state, and test access control.

## Environment

* Application: Sauce Demo
* Browser: Chrome
* Test user: `standard_user`
* Testing type: Exploratory Testing
* Date: [7th of October 2026]

## Exploratory Tests

### ET-001 — Invalid username

**Action:** Entered an invalid username with a valid password.

**Observed:** Application displayed an invalid username/password error.

**Result:** PASS

---

### ET-002 — Username with leading/trailing spaces

**Action:** Entered `standard_user` with leading and trailing spaces.

**Observed:** Application rejected the credentials.

**Result:** PASS / Observation

**Note:** This was not considered a defect because there was no requirement stating that leading/trailing spaces must be automatically removed.

---

### ET-003 — Username case sensitivity

**Action:** Entered `STANDARD_USER` instead of `standard_user`.

**Observed:** Application rejected the credentials.

**Result:** PASS / Observation

**Note:** No defect was identified because there was no requirement stating that usernames should be case-insensitive.

---

### ET-004 — SQL injection-like input

**Action:** Entered a SQL injection-like string in the username field.

**Observed:** Application rejected the login attempt and did not display a database error or unexpectedly log the user in.

**Result:** PASS / Observation

**Note:** This test does not prove that the application is fully secure against SQL injection. It only records the observed behavior during this exploratory test.

---

### ET-005 — Product details consistency

**Action:** Opened the Backpack product details page and compared the product name, description, price, and image with the Products page.

**Observed:** Product information was consistent between the pages.

**Result:** PASS

---

### ET-006 — Cart state after navigation

**Action:** Added the Backpack to the cart from the product details page and navigated back to the Products page.

**Observed:** The product remained in the cart and the product button displayed `Remove`.

**Result:** PASS

---

### ET-007 — Cart removal state

**Action:** Removed the Backpack from the Products page and opened the product details page.

**Observed:** The product button changed back to `Add to cart`.

**Result:** PASS

---

### ET-008 — Protected Products page after logout

**Action:** Logged out and attempted to access the Products page.

**Observed:** Application displayed an access restriction message indicating that the user must be logged in.

**Result:** PASS

---

### ET-009 — Protected Cart page after logout

**Action:** While logged out, directly accessed `/cart.html`.

**Observed:** Application displayed:

`Epic sadface: You can only access '/cart.html' when you are logged in.`

**Result:** PASS

---

### ET-010 — Protected Checkout page after logout

**Action:** While logged out, directly accessed `/checkout-step-one.html`.

**Observed:** Application displayed:

`Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.`

**Result:** PASS

---

### ET-011 — Cart persistence after refresh

**Action:** Added the Backpack to the cart, opened the Cart page, and refreshed the browser.

**Observed:** The Backpack remained in the cart after the refresh.

**Result:** PASS

---

### ET-012 — Empty cart persistence after refresh

**Action:** Removed the Backpack from the cart and refreshed the empty Cart page.

**Observed:** The cart remained empty after the refresh.

**Result:** PASS

## Summary

A total of 12 exploratory tests were performed.

The tests covered:

* Invalid input handling
* Input behavior and case sensitivity
* Security-related exploratory input
* Product information consistency
* Cart state transitions
* Authentication and access control
* Browser refresh behavior
* State persistence

No confirmed defects were identified during this exploratory testing session.

Some observations, such as whitespace and username case sensitivity, were recorded but were not classified as defects because there was no requirement stating the expected behavior.

## QA Learning

The exploratory testing session demonstrated that a tester should not only follow predefined test cases. A QA tester should also think about different user behaviors, application states, invalid inputs, navigation paths, and attempts to access functionality outside the normal workflow.
