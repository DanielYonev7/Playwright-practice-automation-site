import {test, expect} from '../Application/baseFixture'

test.beforeEach(async ({page})=>{
  await page.goto(process.env.baseURL)
  await page.waitForTimeout(3000)
})

test("test", async ({page, app})=>{

})