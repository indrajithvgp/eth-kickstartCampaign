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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\boring stuff\\learnings\\blockchain\\bup\\eth-kickstarter\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '', eMessage: "", loading: false }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();
                                _this.setState({ loading: true, eMessage: '' });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({ from: accounts[0], value: _web2.default.utils.toWei(_this.state.value) });

                            case 9:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ eMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, { label: 'ether', type: 'text', value: this.state.value, onChange: function onChange(e) {
                    return _this3.setState({ value: e.target.value });
                }, labelPosition: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Contribute !'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFFRixRQUFNLEVBQUMsT0FBRCxBQUFPLElBQUksVUFBWCxBQUFvQixJQUFJLFMsQUFBeEIsQUFBZ0MsZSxBQUV0QztpR0FBVyxpQkFBQSxBQUFNLEdBQU47OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7a0NBQUEsQUFBRSxBQUNGO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLFVBQTdCLEFBQWMsQUFBd0IsQUFDaEM7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjtnREFIOUI7Z0RBQUE7dUNBS29CLGNBQUEsQUFBSyxJQUx6QixBQUtvQixBQUFTOztpQ0FBMUI7QUFMSCxvREFBQTtnREFBQTt1Q0FNRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixLQUFLLEVBQUMsTUFBSyxTQUFOLEFBQU0sQUFBUyxJQUFJLE9BQU0sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQU5yRixBQU1HLEFBQW1DLEFBQXlCLEFBQTRCOztpQ0FFOUY7OytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVJwQyxBQVFILEFBQTZDO2dEQVIxQztBQUFBOztpQ0FBQTtnREFBQTtnRUFVSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxZQVZyQixBQVVILEFBQWMsQUFBWTs7aUNBRTlCO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFPLE9BWnZCLEFBWVAsQUFBYyxBQUFzQjs7aUNBWjdCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBZUg7eUJBQ0o7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sS0FBQSxBQUFLLE1BQTNDLEFBQWlEOzhCQUFqRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxTQUFRLE1BQXJCLEFBQTBCLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBbUQsT0FBTyxVQUFXLHFCQUFBOzJCQUFHLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxFQUFBLEFBQUUsT0FBMUIsQUFBRyxBQUFjLEFBQWdCO0FBQXRHLG1CQUErRyxlQUEvRyxBQUE2SDs4QkFBN0g7Z0NBSEosQUFDSSxBQUVBLEFBRUE7QUFGQTtpQ0FFQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXVCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUxKLEFBS0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBUFIsQUFDSSxBQU1JLEFBSVg7Ozs7O0EsQUEvQndCLEFBbUM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9pbmRyYS9EZXNrdG9wL2JvcmluZyBzdHVmZi9sZWFybmluZ3MvYmxvY2tjaGFpbi9idXAvZXRoLWtpY2tzdGFydGVyIn0=