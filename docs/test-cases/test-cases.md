# ShopEase Test Cases

## Authentication

### TC-001 — Login with valid credentials

**Scenario:** TS-001

**Priority:** High

**Precondition:**
- User has a valid account.
- User is on the login page.

**Test Data:**
- Valid username
- Valid password

**Steps:**
1. Open the ShopEase login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click the Login button.

**Expected Result:**
User should be successfully logged in and redirected to the appropriate authenticated page.
**Actual Result:**
Login was rejected and the message
"Epic sadface: Username and password do not match any user in this service"
was displayed.

**Status:**
PASS

---

### TC-002 — Login with invalid password

**Scenario:** TS-002

**Priority:** High

**Precondition:**
- User has a valid username.
- User is on the login page.

**Test Data:**
- Valid username
- Invalid password

**Steps:**
1. Open the ShopEase login page.
2. Enter a valid username.
3. Enter an incorrect password.
4. Click the Login button.

**Expected Result:**
Login should fail and an appropriate error message should be displayed.

**Actual Result:**
Not executed yet.

**Status:**
Not Executed


---

### TC-003 — Login with invalid username

**Scenario:** TS-002

**Priority:** High

**Precondition:**
- User is on the login page.

**Test Data:**
- Invalid username
- Valid password

**Steps:**
1. Open the ShopEase login page.
2. Enter an invalid username.
3. Enter a valid password.
4. Click the Login button.

**Expected Result:**
Login should fail and an appropriate error message should be displayed.

**Actual Result:**
Not executed yet.

**Status:**
Not Executed


---

### TC-004 — Login with empty username

**Scenario:** TS-003

**Priority:** Medium

**Precondition:**
- User is on the login page.

**Test Data:**
- Username: Empty
- Password: Valid password

**Steps:**
1. Open the ShopEase login page.
2. Leave the username field empty.
3. Enter a valid password.
4. Click the Login button.

**Expected Result:**
The application should prevent login and display an appropriate validation message.

**Actual Result:**
Not executed yet.

**Status:**
Not Executed


---

### TC-005 — Login with empty password

**Scenario:** TS-004

**Priority:** Medium

**Precondition:**
- User is on the login page.

**Test Data:**
- Username: Valid username
- Password: Empty

**Steps:**
1. Open the ShopEase login page.
2. Enter a valid username.
3. Leave the password field empty.
4. Click the Login button.

**Expected Result:**
The application should prevent login and display an appropriate validation message.

**Actual Result:**
Login was prevented and the message
"Epic sadface: Username is required" was displayed.

**Status:**
PASS

---

### TC-006 — Login with both fields empty

**Scenario:** TS-003, TS-004

**Priority:** Medium

**Precondition:**
- User is on the login page.

**Test Data:**
- Username: Empty
- Password: Empty

**Steps:**
1. Open the ShopEase login page.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click the Login button.

**Expected Result:**
The application should prevent login and display appropriate validation messages.

**Actual Result:**
Login was prevented and the message
"Epic sadface: Password is required" was displayed.

**Status:**
PASS

### TC-007 — Sort products by price (low to high)

**Scenario:** TS-006

**Priority:** Medium

**Precondition:**
- User is logged in.
- User is on the Products page.
- Multiple products are displayed.

**Test Data:**
- Sort option: Price (low to high)

**Steps:**
1. Log in with valid credentials.
2. Navigate to the Products page.
3. Open the sort dropdown.
4. Select "Price (low to high)".
5. Observe the order of the products.

**Expected Result:**
Products should be displayed from the lowest price to the highest price.

**Actual Result:**
Products were displayed in the following price order:
$7.99 → $9.99 → $15.99 → $15.99 → $29.99 → $49.99

**Status:**
PASS

### TC-008 — Sort products by price (high to low)

**Scenario:** TS-006

**Priority:** Medium

**Precondition:**
- User is logged in.
- User is on the Products page.
- Multiple products are displayed.

**Test Data:**
- Sort option: Price (high to low)

**Steps:**
1. Log in with valid credentials.
2. Navigate to the Products page.
3. Open the sort dropdown.
4. Select "Price (high to low)".
5. Observe the order of the products.

**Expected Result:**
Products should be displayed from the highest price to the lowest price.

**Actual Result:**
Products were displayed in the following price order:
$49.99 → $29.99 → $15.99 → $15.99 → $9.99 → $7.99

**Status:**
PASS
### TC-009 — Add product to cart

**Scenario:** TS-010

**Priority:** High

**Precondition:**
- User is logged in.
- User is on the Products page.
- Cart is initially empty.

**Test Data:**
- Product: Sauce Labs Backpack

**Steps:**
1. Log in with valid credentials.
2. Navigate to the Products page.
3. Click "Add to cart" for Sauce Labs Backpack.
4. Observe the cart icon.

**Expected Result:**
- The selected product should be added to the cart.
- The cart count should increase from 0 to 1.

**Actual Result:**
Actual Result:
- Sauce Labs Backpack was successfully added to the cart.
- Cart count changed from 0 to 1.
- The cart displayed Sauce Labs Backpack.
- The displayed price was $29.99.
- The quantity was 1.

**Status:**
PASS
### TC-010 — Remove product from cart

**Scenario:** TS-013

**Priority:** High

**Precondition:**
- User is logged in.
- User is on the Products page.
- Cart is initially empty.

**Test Data:**
- Product: Sauce Labs Backpack

**Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Open the cart.
3. Verify that Sauce Labs Backpack is displayed.
4. Click "Remove" for Sauce Labs Backpack.
5. Observe the cart.

**Expected Result:**
- Sauce Labs Backpack should be removed from the cart.
- The cart count should decrease to 0.
- The cart should be empty.

**Actual Result:**
- Sauce Labs Backpack was removed from the cart.
- The cart count changed to 0.

**Status:**
PASS
### TC-011 — Checkout with valid information

**Scenario:** TS-017

**Priority:** High

**Precondition:**
- User is logged in.
- Sauce Labs Backpack is in the cart.
- User is on the Checkout Information page.

**Test Data:**
- First Name: John
- Last Name: Tester
- Postal Code: 50000

**Steps:**
1. Enter `John` in First Name.
2. Enter `Tester` in Last Name.
3. Enter `50000` in Postal Code.
4. Click "Continue".

**Expected Result:**
The checkout information should be accepted and the user should proceed to the next checkout step.

**Actual Result:**
The information was accepted and the user proceeded to the next checkout step.

**Status:**
PASS


### TC-012 — Checkout with empty First Name

**Scenario:** TS-016

**Priority:** High

**Precondition:**
- User is logged in.
- User is on the Checkout Information page.

**Test Data:**
- First Name: empty
- Last Name: John
- Postal Code: 50000

**Steps:**
1. Leave First Name empty.
2. Enter `John` in Last Name.
3. Enter `50000` in Postal Code.
4. Click "Continue".

**Expected Result:**
The user should not proceed and an error message should indicate that First Name is required.

**Actual Result:**
The user was prevented from continuing and the message `Error: First Name is required` was displayed.

**Status:**
PASS


### TC-013 — Checkout with empty Last Name

**Scenario:** TS-016

**Priority:** High

**Precondition:**
- User is logged in.
- User is on the Checkout Information page.

**Test Data:**
- First Name: John
- Last Name: empty
- Postal Code: 50000

**Steps:**
1. Enter `John` in First Name.
2. Leave Last Name empty.
3. Enter `50000` in Postal Code.
4. Click "Continue".

**Expected Result:**
The user should not proceed and an error message should indicate that Last Name is required.

**Actual Result:**
The user was prevented from continuing and the message `Error: Last Name is required` was displayed.

**Status:**
PASS


### TC-014 — Checkout with empty Postal Code

**Scenario:** TS-016

**Priority:** High

**Precondition:**
- User is logged in.
- User is on the Checkout Information page.

**Test Data:**
- First Name: John
- Last Name: Tester
- Postal Code: empty

**Steps:**
1. Enter `John` in First Name.
2. Enter `Tester` in Last Name.
3. Leave Postal Code empty.
4. Click "Continue".

**Expected Result:**
The user should not proceed and an error message should indicate that Postal Code is required.

**Actual Result:**
The user was prevented from continuing and the message `Error: Postal Code is required` was displayed.

**Status:**
PASS