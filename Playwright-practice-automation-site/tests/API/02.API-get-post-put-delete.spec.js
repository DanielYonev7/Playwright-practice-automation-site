import {test, expect} from '../../Application/baseFixture';

test.describe("API - Get, Post, Put, Delete", ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('https://petstore.swagger.io/');
    })

    test("01. API - GET status", async ({page, request})=>{

        const response = await page.request.get('https://petstore.swagger.io/v2/pet/1');
        const responseJson = await response.json();

        console.log(responseJson);
        expect(response.status()).toBe(200);
    
        const responseBody = await response.text();
        expect(responseBody).toContain('"id":1')
        expect(responseBody).toContain('"name":"dog"')
    })
})