/* global Feature Scenario */
const { DEFAULT_WAIT_TIME } = require('./test-config')

Feature('core')

// https://github.com/json-editor/json-editor/issues/823
Scenario('work with json-schema meta-schema', async (I) => {
  I.amOnPage('issues/issue-gh-823-meta-schema.html')
  I.waitForElement('[data-schemapath="root"] h3', DEFAULT_WAIT_TIME)
  I.click('Object Properties')
  I.click('options')
  I.see('$ref')
  I.see('options')
  // pause();
  I.click('Object Properties')
  I.click('Object Properties')
  I.see('options')
})
