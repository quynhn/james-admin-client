const domainApi = require('./api/domain');
const quotaApi = require('./api/quota');
const domainsMappingApi = require('./api/domainsmapping')

class Client {
  constructor(options) {
    this.httpClient = options.httpClient;
    this.promiseProvider = options.promiseProvider;
    this.apiUrl = options.apiUrl;
    this.token = options.token;
    this.defaultHeaders = {
      authorization: `Bearer ${this.token}`
    };

    domainApi(this);
    quotaApi(this);
    domainsMappingApi(this);
  }

  api(path, method = 'get', headers = {}, data) {
    const url = `${this.apiUrl}${path}`;

    headers = Object.assign({}, this.defaultHeaders, headers);

    return this.httpClient[method](url, headers, data);
  }
}

module.exports = Client;
