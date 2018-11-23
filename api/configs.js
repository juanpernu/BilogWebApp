const axios = require('axios');

var instance = axios.create({
  baseURL: 'http://170.78.75.70',
  timeout: 1000,
  headers: {'Content-Type': 'application/json; charset=utf-8'}
});

export default instance;