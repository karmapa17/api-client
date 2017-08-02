import test from 'ava';
import ApiClient from './../src/ApiClient';

const API_URL = 'https://jsonplaceholder.typicode.com';

test('get function should work properly', async (t) => {

  const apiClient = new ApiClient();
  const result = await apiClient.get(`${API_URL}/posts`);
  t.truthy(result);
});
