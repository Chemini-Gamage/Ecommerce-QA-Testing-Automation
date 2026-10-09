
import { test, expect } from '@playwright/test';

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
