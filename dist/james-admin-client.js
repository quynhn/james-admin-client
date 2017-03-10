(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.james = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domainApi = require('./api/domain');
var quotaApi = require('./api/quota');

var Client = function () {
  function Client(options) {
    _classCallCheck(this, Client);

    this.httpClient = options.httpClient;
    this.promiseProvider = options.promiseProvider;
    this.apiUrl = options.apiUrl;
    this.token = options.token;
    this.defaultHeaders = {
      authorization: 'Bearer ' + this.token
    };

    domainApi(this);
    quotaApi(this);
  }

  _createClass(Client, [{
    key: 'api',
    value: function api(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments[3];

      var url = '' + this.apiUrl + path;

      headers = Object.assign({}, this.defaultHeaders, headers);

      return this.httpClient[method](url, headers, data);
    }
  }]);

  return Client;
}();

module.exports = Client;

},{"./api/domain":2,"./api/quota":3}],2:[function(require,module,exports){
'use strict';

var BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = function () {
    return client.api(BASE_PATH);
  };
}

module.exports = mixin;

},{}],3:[function(require,module,exports){
'use strict';

var BASE_PATH = '/quota';

function mixin(client) {
  client.getQuota = function () {
    return client.api(BASE_PATH);
  };

  client.setQuota = function (quota) {
    return client.api(BASE_PATH, 'put', {}, quota);
  };
}

module.exports = mixin;

},{}],4:[function(require,module,exports){
'use strict';

var Client = require('./Client');

module.exports = {
  Client: Client
};

},{"./Client":1}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2xpZW50LmpzIiwic3JjL2FwaS9kb21haW4uanMiLCJzcmMvYXBpL3F1b3RhLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsSUFBTSxZQUFZLFFBQVEsY0FBUixDQUFsQjtBQUNBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7O0lBRU0sTTtBQUNKLGtCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxVQUFMLEdBQWtCLFFBQVEsVUFBMUI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsUUFBUSxlQUEvQjtBQUNBLFNBQUssTUFBTCxHQUFjLFFBQVEsTUFBdEI7QUFDQSxTQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXJCO0FBQ0EsU0FBSyxjQUFMLEdBQXNCO0FBQ3BCLGlDQUF5QixLQUFLO0FBRFYsS0FBdEI7O0FBSUEsY0FBVSxJQUFWO0FBQ0EsYUFBUyxJQUFUO0FBQ0Q7Ozs7d0JBRUcsSSxFQUEwQztBQUFBLFVBQXBDLE1BQW9DLHVFQUEzQixLQUEyQjtBQUFBLFVBQXBCLE9BQW9CLHVFQUFWLEVBQVU7QUFBQSxVQUFOLElBQU07O0FBQzVDLFVBQU0sV0FBUyxLQUFLLE1BQWQsR0FBdUIsSUFBN0I7O0FBRUEsZ0JBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLGNBQXZCLEVBQXVDLE9BQXZDLENBQVY7O0FBRUEsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsR0FBeEIsRUFBNkIsT0FBN0IsRUFBc0MsSUFBdEMsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsTUFBakI7Ozs7O0FDMUJBLElBQU0sWUFBWSxVQUFsQjs7QUFFQSxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0FBQ3JCLFNBQU8sV0FBUCxHQUFxQixZQUFNO0FBQ3pCLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNSQSxJQUFNLFlBQVksUUFBbEI7O0FBRUEsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsWUFBTTtBQUN0QixXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxRQUFQLEdBQWtCLFVBQUMsS0FBRCxFQUFXO0FBQzNCLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxFQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxLQUFqQyxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNaQSxJQUFNLFNBQVMsUUFBUSxVQUFSLENBQWY7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2Y7QUFEZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBkb21haW5BcGkgPSByZXF1aXJlKCcuL2FwaS9kb21haW4nKTtcbmNvbnN0IHF1b3RhQXBpID0gcmVxdWlyZSgnLi9hcGkvcXVvdGEnKTtcblxuY2xhc3MgQ2xpZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaHR0cENsaWVudCA9IG9wdGlvbnMuaHR0cENsaWVudDtcbiAgICB0aGlzLnByb21pc2VQcm92aWRlciA9IG9wdGlvbnMucHJvbWlzZVByb3ZpZGVyO1xuICAgIHRoaXMuYXBpVXJsID0gb3B0aW9ucy5hcGlVcmw7XG4gICAgdGhpcy50b2tlbiA9IG9wdGlvbnMudG9rZW47XG4gICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLnRva2VufWBcbiAgICB9O1xuXG4gICAgZG9tYWluQXBpKHRoaXMpO1xuICAgIHF1b3RhQXBpKHRoaXMpO1xuICB9XG5cbiAgYXBpKHBhdGgsIG1ldGhvZCA9ICdnZXQnLCBoZWFkZXJzID0ge30sIGRhdGEpIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFwaVVybH0ke3BhdGh9YDtcblxuICAgIGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRbbWV0aG9kXSh1cmwsIGhlYWRlcnMsIGRhdGEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50O1xuIiwiY29uc3QgQkFTRV9QQVRIID0gJy9kb21haW5zJztcblxuZnVuY3Rpb24gbWl4aW4oY2xpZW50KSB7XG4gIGNsaWVudC5saXN0RG9tYWlucyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1peGluO1xuIiwiY29uc3QgQkFTRV9QQVRIID0gJy9xdW90YSc7XG5cbmZ1bmN0aW9uIG1peGluKGNsaWVudCkge1xuICBjbGllbnQuZ2V0UXVvdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRIKTtcbiAgfTtcblxuICBjbGllbnQuc2V0UXVvdGEgPSAocXVvdGEpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgsICdwdXQnLCB7fSwgcXVvdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1peGluO1xuIiwiY29uc3QgQ2xpZW50ID0gcmVxdWlyZSgnLi9DbGllbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENsaWVudFxufTtcbiJdfQ==
