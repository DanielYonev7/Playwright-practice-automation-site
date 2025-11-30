import {test as base} from '@playwright/test'
import { Application } from './app'

export const test = base.extend({
    app: async({page}, use)=>{
        await use (new Application(page))
    }
})

export {expect} from '@playwright/test'