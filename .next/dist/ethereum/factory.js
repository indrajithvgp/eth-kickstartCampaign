'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ADDRESS = "0x8c4508B686B2212b9cD36474e5BFA7C2C34Bf604"

var ADDRESS = "0x61FCA3a6cf096e6B5d7b4546107675f87254ed07";

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), ADDRESS);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJNYXN0ZXIiLCJBRERSRVNTIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBRUEsQUFBTyxBQUFQLEFBQW1CLEFBQW5COzs7Ozs7QUFFQTs7QUFFQSxJQUFNLFVBQVUsQUFBaEI7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUF1QixLQUFLLEFBQUwsTUFBVywwQkFBTyxBQUFsQixBQUF2QixZQUFxRCxBQUFyRCxBQUFqQixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvaW5kcmEvRGVza3RvcC9kYXNMZXJuZW4vQWt0aXZpdGF0ZW4vYmxvY2tjaGFpbi9ldGgta2lja3N0YXJ0Q2FtcGFpZ24ifQ==