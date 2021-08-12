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

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\dasLernen\\Aktivitaten\\blockchain\\eth-kickstartCampaign\\components\\RequestRow.js';


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
                            _routes.Router.pushRoute('/campaigns/requests/index');

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
                request = _props.request,
                approversCount = _props.approversCount;

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
            }, request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'orange', onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJvdXRlciIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwib25GaW5hbGl6ZSIsInB1c2hSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRWpCLHFGQUFVLG1CQUFBOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUFBOzRDQUFBO21DQUNpQixjQUFBLEFBQUssSUFEdEIsQUFDaUIsQUFBUzs7NkJBQTFCO0FBREEsZ0RBRUE7QUFGQSx1Q0FFVyx3QkFBUyxNQUFBLEFBQUssTUFGekIsQUFFVyxBQUFvQjs0Q0FGL0I7bUNBR0EsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0MsS0FBSyxFQUFDLE1BQUssU0FIMUQsQUFHQSxBQUFvRCxBQUFNLEFBQVM7OzZCQUN6RTsyQ0FBQSxBQUFPLFVBSkQsQUFJTixBQUFpQjs7NkJBSlg7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQU9WLHNGQUFXLG9CQUFBOzBCQUFBOzRFQUFBOzBCQUFBO3VEQUFBOzZCQUFBOzZDQUFBO21DQUNnQixjQUFBLEFBQUssSUFEckIsQUFDZ0IsQUFBUzs7NkJBQTFCO0FBREMsaURBRUQ7QUFGQyx1Q0FFVSx3QkFBUyxNQUFBLEFBQUssTUFGeEIsQUFFVSxBQUFvQjs2Q0FGOUI7bUNBR0QsU0FBQSxBQUFTLFFBQVQsQUFBaUIsWUFBWSxNQUFBLEFBQUssTUFBbEMsQUFBd0MsSUFBeEMsQUFBNEMsS0FBSyxFQUFDLE1BQUssU0FIdEQsQUFHRCxBQUFpRCxBQUFNLEFBQVM7OzZCQUgvRDs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FRRjtnQkFBQSxBQUNFLE1BREYsQUFDZSx1QkFEZixBQUNFO2dCQURGLEFBQ08sT0FEUCxBQUNlLHVCQURmLEFBQ087eUJBQ3dCLEtBRi9CLEFBRW9DO2dCQUZwQyxBQUVFLFlBRkYsQUFFRTtnQkFGRixBQUVLLGlCQUZMLEFBRUs7Z0JBRkwsQUFFYyx3QkFGZCxBQUVjLEFBRW5COzttQ0FDSyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCOzhCQUF2QjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFVO0FBQVY7QUFBQSw2QkFBVSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BQXJDLEFBQVUsQUFBa0MsV0FIaEQsQUFHSSxBQUNBLHlCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQWUsZUFBZ0IsS0FBL0IsZ0JBTEosQUFLSSxBQUVBLHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLHVCQUFRLEFBQVEsV0FBUixBQUFtQix1QkFDdkIsQUFBQyx5Q0FBUSxPQUFULEFBQWUsU0FBUyxTQUFTLEtBQWpDLEFBQXNDOzhCQUF0QztnQ0FBQTtBQUFBO2FBQUEsRUFSUixBQU9JLEFBQ0ksQUFFSiw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFRLFdBQVIsQUFBa0IsdUJBQ3JCLEFBQUMseUNBQU8sT0FBUixBQUFjLFVBQVUsU0FBUyxLQUFqQyxBQUFzQzs4QkFBdEM7Z0NBQUE7QUFBQTthQUFBLEVBWlosQUFDSSxBQVVJLEFBQ0ksQUFPZjs7Ozs7QSxBQXhDbUM7O2tCLEFBQW5CIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvaW5kcmEvRGVza3RvcC9kYXNMZXJuZW4vQWt0aXZpdGF0ZW4vYmxvY2tjaGFpbi9ldGgta2lja3N0YXJ0Q2FtcGFpZ24ifQ==