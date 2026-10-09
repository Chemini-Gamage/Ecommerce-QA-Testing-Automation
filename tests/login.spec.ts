
import { test, expect } from '@playwright/test';
//define 1 automated test case 
test('TC-001: Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    //click login button
    await page.locator('[data-test="login-button"]').click();
    //redirect to the inventory page
    await expect(page).toHaveURL(/inventory/);
    //checks whether the page title is "Products"
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});
//negtative test
test('TC-002:Login with invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('invalid_password');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});

test('TC-003: Login with empty username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username is required');
});

test('TC-004: Login with empty password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Password is required');
});
//with both the credentials empty

test('TC-005: Login with both fields empty', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username is required');
});

//verify logout

test('TC-019: Logout successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('[data-test="logout-sidebar-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(page.locator('[data-test="login-button"]'))
        .toBeVisible();
});
//prevent access to the inventory after logout

test('TC-020: Block inventory access after logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.locator('[data-test="login-button"]'))
        .toBeVisible();

    await expect(page).not.toHaveURL(/inventory\.html/);
});