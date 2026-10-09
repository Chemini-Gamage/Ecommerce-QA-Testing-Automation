# API Test Cases

## API Under Test

**API:** JSONPlaceholder
**Base URL:** `https://jsonplaceholder.typicode.com`

JSONPlaceholder is used as a public demo API for practicing API testing.

---

## API-TC-001 — Get Existing Post

**Method:** GET

**Endpoint:**
`/posts/1`

**Test Objective:** Verify that an existing post can be retrieved successfully.

**Expected Result:**

* HTTP status should be `200 OK`
* Response should contain post data
* Response should contain an `id`

**Actual Result:**

* HTTP status: `200 OK`
* Response contained post data
* Response contained `id: 1`

**Status:** PASS

---

## API-TC-002 — Get Nonexistent Post

**Method:** GET

**Endpoint:**
`/posts/999999`

**Test Objective:** Verify the API response when requesting a resource that does not exist.

**Expected Result:**

* API should indicate that the requested resource does not exist.

**Actual Result:**

* HTTP status: `404 Not Found`
* Response body: `{}`

**Status:** PASS

---

## API-TC-003 — Create a New Post

**Method:** POST

**Endpoint:**
`/posts`

**Request Body:**

```json
{
  "title": "QA Test Post",
  "body": "This post was created during API testing",
  "userId": 1
}
```

**Test Objective:** Verify that a valid POST request creates a new post.

**Expected Result:**

* HTTP status should be `201 Created`
* Response should contain an `id`
* Response title should match the submitted title

**Actual Result:**

* HTTP status: `201 Created`
* Response contained `id: 101`
* Response title was `QA Test Post`

**Automated Assertions:**

* Status is 201 — PASS
* Response has an ID — PASS
* Title is correct — PASS

**Status:** PASS

---

## API-TC-004 — Create Post With Empty JSON Body

**Method:** POST

**Endpoint:**
`/posts`

**Request Body:**

```json
{}
```

**Test Objective:** Explore how the API handles a request with no supplied fields.

**Expected Result:**

* Behavior should be evaluated against the API requirements.

**Actual Result:**

* HTTP status: `201 Created`
* Response contained `id: 101`

**Status:** OBSERVATION

**Observation:**
The demo API accepted an empty JSON object. This was recorded as an observation rather than a defect because no requirement was available stating that `title`, `body`, or `userId` must be mandatory.

---

## API-TC-005 — Malformed JSON Request

**Method:** POST

**Endpoint:**
`/posts`

**Request Body:**

```json
{
  "title": "QA Test Post"
```

The closing `}` was intentionally omitted.

**Test Objective:** Verify how the API handles malformed JSON.

**Expected Result:**

* The malformed request should be rejected.

**Actual Result:**

* The server returned a JSON parsing error.
* Error indicated that the JSON was incomplete.

**Status:** PASS

**QA Note:**
The error was expected because the request contained invalid JSON syntax.

---

# API Testing Summary

| Test ID    | Method | Scenario             | Result      |
| ---------- | ------ | -------------------- | ----------- |
| API-TC-001 | GET    | Get existing post    | PASS        |
| API-TC-002 | GET    | Get nonexistent post | PASS        |
| API-TC-003 | POST   | Create valid post    | PASS        |
| API-TC-004 | POST   | Empty JSON body      | OBSERVATION |
| API-TC-005 | POST   | Malformed JSON       | PASS        |

## Key Testing Skills Demonstrated

* REST API testing
* GET and POST requests
* HTTP status code validation
* Response body validation
* JSON validation
* Positive testing
* Negative testing
* Automated assertions in Postman
* Exploratory API testing
* Distinguishing observations from defects
* Requirement-based defect identification
