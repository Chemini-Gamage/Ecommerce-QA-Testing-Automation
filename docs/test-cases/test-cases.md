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
- Sauce Labs Backpack was added to the cart.
- The cart count changed to 1.

**Status:**
PASS