const {Builder} = require('selenium-webdriver');

/*
const runTest = async (capabilities) => {
    let driver = await new Builder()
        .usingServer('http://localhost:4444/wd/hub/')
        .withCapabilities(capabilities)
        .build();

    await driver.get('http://reactapp:3000');

    const title = await driver.getTitle();

    console.log(capabilities.browserName, title);

    await driver.quit();
}

(async () => {
    await runTest({
        browserName: 'chrome'
    });
    await runTest({
        browserName: 'firefox'
    });
    await runTest({
        browserName: 'MicrosoftEdge'
    });
})();
*/
class SeleniumTestUtil {
    constructor() {
        this.driver = null;

        this.allCapabilities = {
            chrome: {
                browserName: 'chrome'
            },
            firefox: {
                browserName: 'firefox'
            },
            edge: {
                browserName: 'MicrosoftEdge'
            }
        };

        this.APP_HOST = 'http://reactapp:3000';
    }

    get browsers() {
        return Object.keys(this.allCapabilities);
    }

    getCapabilities(browser) {
        if (this.allCapabilities.hasOwnProperty(browser)) {
            return this.allCapabilities[browser];
        } else {
            throw new Error(`Invalid browser: ${browser}`);
        }
    }

    async getDriver(browser) {
        const capabilities = this.getCapabilities(browser);

        this.driver = await new Builder()
            .usingServer('http://localhost:4444/wd/hub/')
            .withCapabilities(capabilities)
            .build();
    }

    async deleteDriver() {
        return await this.driver.quit();
    }

    async navigateTo(path) {
        await this.driver.get(`${this.APP_HOST}${path}`);
    }
}

export default SeleniumTestUtil;
