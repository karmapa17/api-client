import test from 'ava';
import ApiClient from './../src/ApiClient';

const API_URL = 'https://jsonplaceholder.typicode.com';

test('get function should work properly', async (t) => {

  const apiClient = new ApiClient();
  const result = await apiClient.get(`${API_URL}/posts`);
  t.truthy(result);
});

test('get function should work properly with params', async (t) => {

  const apiClient = new ApiClient();
  const result = await apiClient.get(`${API_URL}/posts`, {params: {test: 1}});
  t.truthy(result);
});

test('post function should work properly', async (t) => {

  const apiClient = new ApiClient({prefix: API_URL});
  const result = await apiClient.post('/posts', {data: {test: 1}});
  t.truthy(result);
});
