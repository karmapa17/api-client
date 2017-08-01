import test from 'ava';
import ApiClient from './../src/ApiClient';

test('get function should work properly', async (t) => {

  const apiClient = new ApiClient();
  const result = await apiClient.get('https://api.dharma-treasure.org');
  t.truthy(result);
});
