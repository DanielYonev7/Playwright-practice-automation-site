
import {test, expect} from '../../Application/baseFixture';

test.describe("API - Get, Post, Put, Delete - Pets", ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('https://petstore.swagger.io/');
    })

    test("01. API - GET status", async ({page})=>{

        const response = await page.request.get('https://petstore.swagger.io/v2/pet/1');
        const responseJson = await response.json();

        console.log(responseJson);
        expect(response.status()).toBe(200);
    
        const responseBody = await response.text();
        expect(responseBody).toContain('"id":1')
        expect(responseBody).toContain('"name":"dog"')
    })

    test("02. API - PUT status", async ({page})=>{

        const response = await page.request.put('https://petstore.swagger.io/v2/pet/', {
            data: {
                id: 353,
                category: { id: 0, name: 'sushi' },
                name: 'testName',
                photoUrls: ['string'],
                tags: [{ id: 0, name: 'string' }],
                status: 'unavailable'
            },

            headers: {'Content-Type': 'application/json'}
        })

        const responseBody = await response.json();

        expect(response.status()).toBe(200);
        expect(responseBody.id).toBe(353);
        expect(responseBody.name).toBe('testName')
    })


    test("03. API - GET - findbystatus", async ({page})=>{
        const response = await page.request.get('https://petstore.swagger.io/v2/pet/findByStatus',  {
            //checking endpoing with parameter 'status' sold
            params: {status: 'sold'}
        });

        const responseBody = await response.json()
        console.log(responseBody)

        expect(response.status()).toBe(200);
        console.log('The number of elements that are sold is:',responseBody.length)
    })
})