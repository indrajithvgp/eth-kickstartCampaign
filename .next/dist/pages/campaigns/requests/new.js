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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\dasLernen\\Aktivitaten\\blockchain\\eth-kickstartCampaign\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '', description: '', recipient: '', loading: false, eMessage: '' }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, eMessage: '' });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 18;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                console.log(_this.state.eMessage);
                                console.log(_context.t0);
                                _this.setState({ eMessage: _context.t0.message });

                            case 18:

                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Back'))), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(e) {
                    return _this3.setState({ description: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value, onChange: function onChange(e) {
                    return _this3.setState({ value: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(e) {
                    return _this3.setState({ recipient: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZU1lc3NhZ2UiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFNLEFBQVEsQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBYTs7QUFDM0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUliOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFRixRQUFRLEVBQUMsT0FBRCxBQUFPLElBQUksYUFBWCxBQUF1QixJQUFJLFdBQTNCLEFBQXFDLElBQUksU0FBekMsQUFBaUQsT0FBTyxVLEFBQXhELEFBQWlFLFksQUFRekU7aUdBQVcsaUJBQUEsQUFBTSxHQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtrQ0FBQSxBQUFFLEFBQ0k7QUFGQywyQ0FFVSx3QkFBUyxNQUFBLEFBQUssTUFGeEIsQUFFVSxBQUFvQjs4Q0FDRyxNQUhqQyxBQUdzQyxPQUh0QyxBQUdBLDBCQUhBLEFBR0EsYUFIQSxBQUdhLG9CQUhiLEFBR2EsT0FIYixBQUdvQix3QkFIcEIsQUFHb0IsQUFDM0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLFVBSnRCLEFBSVAsQUFBYyxBQUF3QjtnREFKL0I7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt1Q0FPRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNGLGFBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRmYsQUFFRixBQUF3QixVQUZ0QixBQUdGLFdBSEUsQUFJSixLQUFLLEVBQUMsTUFBSyxTQVhWLEFBT0csQUFJQyxBQUFNLEFBQVM7O2lDQUN0QjsrQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFadkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY0g7O3dDQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7d0NBQUEsQUFBUSxhQUNSO3NDQUFBLEFBQUssU0FBUyxFQUFDLFVBQVMsWUFoQnJCLEFBZ0JILEFBQWMsQUFBYzs7aUNBR2hDOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQW5CUixBQW1CUCxBQUFjLEFBQVM7O2lDQW5CaEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FzQkY7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQUhSLEFBQ0EsQUFDSSxBQUNJLEFBR1IsMkJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkEsQUFNQSxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsYUFBYSxVQUFVLHFCQUFBOzJCQUFHLE9BQUEsQUFBSyxTQUFTLEVBQUMsYUFBWSxFQUFBLEFBQUUsT0FBaEMsQUFBRyxBQUFjLEFBQXNCO0FBQXZGOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUVKO0FBRkk7aUNBRUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixPQUFPLFVBQVUscUJBQUE7MkJBQUcsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLEVBQUEsQUFBRSxPQUExQixBQUFHLEFBQWMsQUFBZ0I7QUFBM0U7OEJBQUE7Z0NBUFIsQUFLSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4QkFBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLFdBQVcsVUFBVSxxQkFBQTsyQkFBRyxPQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsRUFBQSxBQUFFLE9BQTlCLEFBQUcsQUFBYyxBQUFvQjtBQUFuRjs4QkFBQTtnQ0FYUixBQVNJLEFBRUksQUFFSjtBQUZJO2lDQUVKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBd0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBYkosQUFhSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUF0QlIsQUFDSSxBQU9BLEFBY0ksQUFJWDs7Ozs7bUgsQUF2RDRCOzs7OztpQ0FDbEI7QSwwQ0FBVyxNLEFBQU0sTSxBQUFqQjtrRUFDQSxFQUFDLFMsQUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBTlUsQUE2RHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9pbmRyYS9EZXNrdG9wL2Rhc0xlcm5lbi9Ba3Rpdml0YXRlbi9ibG9ja2NoYWluL2V0aC1raWNrc3RhcnRDYW1wYWlnbiJ9