const fs = require('fs');
const axios = require('axios');
const assert = require('assert');

// Function to read data from a file based on a keyword
function readData(keyword) {
  const filename = `data_${keyword}.json`;
  const data = fs.readFileSync(filename, 'utf8');
  return JSON.parse(data);
}

describe('API Tests (Sanity)', function () {
  // Use the "before" hook to set up your API test environment
  before(function () {
    // Perform any setup tasks, such as starting a server or setting up test data
  });

  // Define your API test cases
  describe('API Test Case 1', function () {
    it('should do something with API data from file 1', async function () {
      const testData = readData('api_test_1');
      const response = await axios.get(testData.apiUrl);

      // Your test logic here using the API response data
      assert.strictEqual(response.status, 200);
      assert.deepStrictEqual(response.data, testData.expectedResponse);
    });
  });

  describe('API Test Case 2', function () {
    it('should do something with API data from file 2', async function () {
      const testData = readData('api_test_2');
      const response = await axios.post(testData.apiUrl, testData.requestBody);

      // Your test logic here using the API response data
      assert.strictEqual(response.status, 201);
      assert.deepStrictEqual(response.data, testData.expectedResponse);
    });
  });

  // Add more API test cases as needed

  // Use the "after" hook to perform cleanup tasks after all API tests have run
  after(function () {
    // Perform any cleanup tasks, such as stopping a server or cleaning up test data
  });
});
