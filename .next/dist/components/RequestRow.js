'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\boring stuff\\learnings\\blockchain\\bup\\eth-kickstarter\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                            _routes.Router.pushRoute('/compaigns/requests/index');

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context2.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 6;
                            return campaign.methods.pushRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request;

            return _react2.default.createElement(Row, { disabled: request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _web2.default.utils.fromWei(request.value, 'ether') + ' ETH'), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, request.approvalCount, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJvdXRlciIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwib25GaW5hbGl6ZSIsInB1c2hSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRUE7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVqQixxRkFBVSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDaUIsY0FBQSxBQUFLLElBRHRCLEFBQ2lCLEFBQVM7OzZCQUExQjtBQURBLGdEQUVBO0FBRkEsdUNBRVcsd0JBQVMsTUFBQSxBQUFLLE1BRnpCLEFBRVcsQUFBb0I7NENBRi9CO21DQUdBLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBQyxNQUFLLFNBSDFELEFBR0EsQUFBb0QsQUFBTSxBQUFTOzs2QkFDekU7MkNBQUEsQUFBTyxVQUpELEFBSU4sQUFBaUI7OzZCQUpYOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0EsbUIsQUFPVixzRkFBVyxvQkFBQTswQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFBQTs2Q0FBQTttQ0FDZ0IsY0FBQSxBQUFLLElBRHJCLEFBQ2dCLEFBQVM7OzZCQUExQjtBQURDLGlEQUVEO0FBRkMsdUNBRVUsd0JBQVMsTUFBQSxBQUFLLE1BRnhCLEFBRVUsQUFBb0I7NkNBRjlCO21DQUdELFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQVksTUFBQSxBQUFLLE1BQWxDLEFBQXdDLElBQXhDLEFBQTRDLEtBQUssRUFBQyxNQUFLLFNBSHRELEFBR0QsQUFBaUQsQUFBTSxBQUFTOzs2QkFIL0Q7NkJBQUE7NkNBQUE7O0FBQUE7eUJBQUE7QTs7Ozs7aUNBUUY7Z0JBQUEsQUFDRSxNQURGLEFBQ2UsdUJBRGYsQUFDRTtnQkFERixBQUNPLE9BRFAsQUFDZSx1QkFEZixBQUNPO3lCQUNRLEtBRmYsQUFFb0I7Z0JBRnBCLEFBRUUsWUFGRixBQUVFO2dCQUZGLEFBRUssaUJBRkwsQUFFSyxBQUVWOzttQ0FDSyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFVO0FBQVY7QUFBQSw2QkFBVSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BQXJDLEFBQVUsQUFBa0MsV0FIaEQsQUFHSSxBQUNBLHlCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQWUsZUFMbkIsQUFLSSxBQUVBLHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLHVCQUFRLEFBQVEsV0FBUixBQUFtQix1QkFDdkIsQUFBQyx5Q0FBUSxPQUFULEFBQWUsU0FBUSxPQUF2QixNQUE2QixTQUFTLEtBQXRDLEFBQTJDOzhCQUEzQztnQ0FBQTtBQUFBO2FBQUEsRUFSUixBQU9JLEFBQ0ksQUFFSiw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFRLFdBQVIsQUFBa0IsdUJBQ3JCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5Qzs4QkFBekM7Z0NBQUE7QUFBQTthQUFBLEVBWlosQUFDSSxBQVVJLEFBQ0ksQUFPZjs7Ozs7QSxBQXhDbUM7O2tCLEFBQW5CIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvaW5kcmEvRGVza3RvcC9ib3Jpbmcgc3R1ZmYvbGVhcm5pbmdzL2Jsb2NrY2hhaW4vYnVwL2V0aC1raWNrc3RhcnRlciJ9