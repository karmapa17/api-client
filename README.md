# api-client
[![Build Status](https://travis-ci.org/karmapa17/api-client.svg?branch=master)](https://travis-ci.org/karmapa17/api-client)
[![Coverage Status](https://coveralls.io/repos/github/karmapa17/api-client/badge.svg?branch=master&v=2)](https://coveralls.io/github/karmapa17/api-client?branch=master)
[![Dependency Status](https://david-dm.org/karmapa17/api-client.svg)](https://david-dm.org/karmapa17/api-client)

## Installation

node:

```
$ npm i karmapa-api-client
```

```js
import ApiClient from 'karmapa-api-client';

const apiClient = new ApiClient({prefix: 'https://jsonplaceholder.typicode.com'});

apiClient.get('/posts', {params: {page: 1}})
  .then((res) => console.log(res));

apiClient.post('/posts', {data: {blah: true}})
  .then((res) => console.log(res));
```
