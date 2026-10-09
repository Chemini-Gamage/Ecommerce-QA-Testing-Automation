
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
//verify the product's page

test('TC-006: Verify product list is displayed', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="title"]'))
        .toHaveText('Products');

    await expect(page.locator('[data-test="inventory-list"]'))
        .toBeVisible();

    await expect(page.locator('[data-test="inventory-item"]'))
        .toHaveCount(6);
});
//verify product sorting

test('TC-007: Sort products by price low to high', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="product-sort-container"]')
        .selectOption('lohi');

    const prices = await page.locator('[data-test="inventory-item-price"]')
        .allTextContents();

    const numericPrices = prices.map(price =>
        Number(price.replace('$', ''))
    );

    expect(numericPrices).toEqual(
        [...numericPrices].sort((a, b) => a - b)
    );
});
//sort products by price

test('TC-008: Sort products by price high to low', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="product-sort-container"]')
        .selectOption('hilo');

    const prices = await page.locator('[data-test="inventory-item-price"]')
        .allTextContents();

    const numericPrices = prices.map(price =>
        Number(price.replace('$', ''))
    );

    expect(numericPrices).toEqual(
        [...numericPrices].sort((a, b) => b - a)
    );
});
//add a product to the cart

test('TC-009: Add product to shopping cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const backpack = page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    await backpack.click();

    await expect(page.locator('[data-test="shopping-cart-badge"]'))
        .toHaveText('1');

    await expect(page.locator(
        '[data-test="remove-sauce-labs-backpack"]'
    )).toBeVisible();
});
//reomove  a product from the cart

test('TC-010: Remove product from shopping cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await expect(page.locator('[data-test="shopping-cart-badge"]'))
        .toHaveText('1');

    await page.locator('[data-test="remove-sauce-labs-backpack"]')
        .click();
    // When the cart is empty, this website removes the badge from the page entirely. There isn't a badge displaying zero. Therefore, we check that zero badge elements exist.

    await expect(page.locator('[data-test="shopping-cart-badge"]'))
        .toHaveCount(0);

    await expect(page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    )).toBeVisible();
});
//verify the shopping cart content

test('TC-011: Verify shopping cart contents', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');

    await expect(page.locator('[data-test="inventory-item-price"]'))
        .toHaveText('$29.99');

    await expect(page.locator('[data-test="item-quantity"]'))
        .toHaveText('1');
});
//remove an itemf from the cart 

test('TC-012: Remove product from cart page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');

    await page.locator('[data-test="remove-sauce-labs-backpack"]')
        .click();

    await expect(page.locator('[data-test="cart-list"] [data-test="inventory-item"]'))
        .toHaveCount(0);

    await expect(page.locator('[data-test="shopping-cart-badge"]'))
        .toHaveCount(0);
});
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