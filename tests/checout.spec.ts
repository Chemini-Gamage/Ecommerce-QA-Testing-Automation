
import { test, expect } from '@playwright/test';


//verify the checkout page

test('TC-013: Open checkout information page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL(/checkout-step-one/);

    await expect(page.locator('[data-test="firstName"]'))
        .toBeVisible();

    await expect(page.locator('[data-test="lastName"]'))
        .toBeVisible();

    await expect(page.locator('[data-test="postalCode"]'))
        .toBeVisible();
});
//checkout with an empty firstname

test('TC-014: Checkout with empty first name', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('50000');

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('First Name is required');
});
//checkout with an empty lastname

test('TC-015: Checkout with empty last name', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('');
    await page.locator('[data-test="postalCode"]').fill('50000');

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Last Name is required');
});
//checout with an empty postal code

test('TC-016: Checkout with empty postal code', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('');

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Postal Code is required');
});
//verify the checkout overview

test('TC-017: Verify checkout overview and total', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('50000');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two/);

    await expect(page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');

    await expect(page.locator('[data-test="subtotal-label"]'))
        .toHaveText('Item total: $29.99');

    await expect(page.locator('[data-test="tax-label"]'))
        .toHaveText('Tax: $2.40');

    await expect(page.locator('[data-test="total-label"]'))
        .toHaveText('Total: $32.39');
});//complete the purchase

test('TC-018: Complete purchase successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('50000');
    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]'))
        .toHaveText('Thank you for your order!');

    await expect(page.locator('[data-test="complete-text"]'))
        .toBeVisible();
});
