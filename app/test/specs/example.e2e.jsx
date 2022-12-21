import { expect, $ } from '@wdio/globals'

// ToDo: fix me
import Component from '/path/to/component.jsx'

describe('react component tests', () => {
    it('should test my component', async () => {
        // render component here...
        const component = document.querySelector("my-component")

        const elem = await $(component)
        await elem.click()
        await expect(elem).toHaveText('Click me!')
    })
})

