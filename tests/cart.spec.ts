
import { test, expect } from '@playwright/test';

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
