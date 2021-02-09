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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\boring stuff\\learnings\\blockchain\\bup\\eth-kickstarter\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            eMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();
                                _this.setState({ loading: true, eMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return new _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createChildCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _routes.Router.pushRoute('/');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ eMessage: _context.t0.message });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei', placeholder: 'Enter Amount', value: this.state.minimumContribution, onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                }, labelPosition: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.eMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJpbnN0YW5jZSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNoaWxkQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU0sQUFBUSxBQUFPOztBQUM3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OzswTixBQUVGO2lDQUFRLEFBQ2dCLEFBQ3BCO3NCQUZJLEFBRUssQUFDVDtxQixBQUhJLEFBR0k7QUFISixBQUNKLGlCLEFBS0o7aUdBQVcsaUJBQUEsQUFBTyxHQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO2tDQUFBLEFBQUUsQUFDRjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxVQUZ0QixBQUVQLEFBQWMsQUFBd0I7Z0RBRi9CO2dEQUFBO3VDQUlvQixJQUFJLGNBQUEsQUFBSyxJQUo3QixBQUlvQixBQUFhOztpQ0FBOUI7QUFKSCxvREFBQTtnREFBQTt5REFLRyxBQUFTLFFBQVQsQUFBaUIsb0JBQW9CLE1BQUEsQUFBSyxNQUExQyxBQUFnRCxxQkFBaEQsQUFBcUU7MENBQ3RFLFNBTkYsQUFLRyxBQUEwRSxBQUMzRSxBQUFTO0FBRGtFLEFBQ2hGLGlDQURNOztpQ0FHVjsrQ0FBQSxBQUFPLFVBUkEsQUFRUCxBQUFpQjtnREFSVjtBQUFBOztpQ0FBQTtnREFBQTtnRUFVSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxZQVZyQixBQVVILEFBQWMsQUFBYzs7aUNBRWhDO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBWlIsQUFZUCxBQUFjLEFBQVM7O2lDQVpoQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWVIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sS0FBQSxBQUFLLE1BQTNDLEFBQWlEOzhCQUFqRDtnQ0FBQSxBQUNBO0FBREE7K0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBRUEseUNBQUEsQUFBQyx3Q0FBTSxPQUFQLEFBQWEsT0FBTSxhQUFuQixBQUErQixnQkFBZSxPQUFPLEtBQUEsQUFBSyxNQUExRCxBQUFnRSxxQkFBcUIsVUFBVSx5QkFBQTsyQkFDM0YsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBb0IsTUFBQSxBQUFNLE9BRGtELEFBQzNGLEFBQWMsQUFBa0M7QUFEcEQsbUJBQzZELGVBRDdELEFBQzJFOzhCQUQzRTtnQ0FKQSxBQUNBLEFBR0EsQUFHQTtBQUhBO2lDQUdBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBdUIsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBUEEsQUFPQSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUFWSixBQUNJLEFBQ0EsQUFRQSxBQU1QOzs7OztBLEFBeENxQixBQTJDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2luZHJhL0Rlc2t0b3AvYm9yaW5nIHN0dWZmL2xlYXJuaW5ncy9ibG9ja2NoYWluL2J1cC9ldGgta2lja3N0YXJ0ZXIifQ==