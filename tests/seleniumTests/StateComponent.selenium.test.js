import SeleniumTestUtil from '../util/selenium-test-util';

const testUtil = new SeleniumTestUtil();

testUtil.browsers.forEach(browser => {
    jest.setTimeout(10000);

    describe(`(${browser}) StateComponent`, () => {
        beforeAll(() => {
            return testUtil.getDriver(browser);
        });

        afterAll(() => {
            return testUtil.deleteDriver();
        });

        test('Checkbox', async () => {
            await testUtil.navigateTo('/state');

            const CHECKBOX_ELEMENT = {id: 'checkbox'};

            expect(await testUtil.driver.findElement(CHECKBOX_ELEMENT).isDisplayed());

            expect(await testUtil.driver.findElement(CHECKBOX_ELEMENT).isSelected()).toBe(false);

            // Check element
            await testUtil.driver.findElement(CHECKBOX_ELEMENT).click();

            expect(await testUtil.driver.findElement(CHECKBOX_ELEMENT).isSelected()).toBe(true);
        });
    });
});
