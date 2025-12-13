import {test, expect} from '@playwright/test'

test.describe("API Testing", ()=>{

    test("01. API Modification", async ({page})=>{
        await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route =>{
            const response = await route.fetch();
            const responseJSON = await response.json();

            responseJSON.push({name: 'NewFruit', id: 1053});
            await route.fulfill({json: responseJSON});
        })

        await page.goto('https://demo.playwright.dev/api-mocking');
        await expect(page.getByText('NewFruit')).toBeVisible();
    })


    test("02. API Mocking", async({page})=>{
        await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route =>{
            const json = [{name: 'MyNewFruit1', id: 1},
                          {name: 'MyNewFruit2', id:2}
            ]

            await route.fulfill({json: json})
        })

        await page.goto('https://demo.playwright.dev/api-mocking');

        await expect(page.getByText('NewFruit1')).toBeVisible();
        await expect(page.getByText('NewFruit2')).toBeVisible();
    })
})