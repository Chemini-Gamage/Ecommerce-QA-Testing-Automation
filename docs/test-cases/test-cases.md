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
User successfully logged in and was redirected to the Products page.

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
Not executed yet.

**Status:**
Not Executed


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
Not executed yet.

**Status:**
Not Executed