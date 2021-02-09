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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\indra\\Desktop\\boring stuff\\learnings\\blockchain\\bup\\eth-kickstarter\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCounts = _props.requestCounts,
                approversCounts = _props.approversCounts;

            var items = [{
                header: manager,
                meta: "Address of Manager",
                description: 'Manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution in "WEI"',
                description: 'You must contribute above wei to become an approver'
            }, {
                header: requestCounts,
                meta: 'Number of Requests',
                description: ''
            }, {
                header: approversCounts,
                meta: 'Number of Approvers',
                description: ''
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Balance stored in this Campaign',
                description: ''
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Compaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCounts: summary[2],
                                    approversCounts: summary[3],
                                    manager: summary[4]

                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50cyIsImFwcHJvdmVyc0NvdW50cyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztzQ0FrQlc7eUJBRXNFLEtBRnRFLEFBRTJFO2dCQUYzRSxBQUVGLGlCQUZFLEFBRUY7Z0JBRkUsQUFFTyxpQkFGUCxBQUVPO2dCQUZQLEFBRWdCLDZCQUZoQixBQUVnQjtnQkFGaEIsQUFFcUMsdUJBRnJDLEFBRXFDO2dCQUZyQyxBQUVtRCx5QkFGbkQsQUFFbUQsQUFDNUQ7O2dCQUFNO3dCQUFTLEFBQ0osQUFDUDtzQkFGVyxBQUVOLEFBQ0w7NkJBSFcsQUFHQyxBQUNaO3VCQUFNLEVBQUMsY0FKRyxBQUFDLEFBSUwsQUFBZTtBQUpWLEFBQ1gsYUFEVTt3QkFLWixBQUNTLEFBQ1A7c0JBRkYsQUFHRTs2QkFSVSxBQUtaLEFBR2M7QUFIZCxBQUNFO3dCQUdGLEFBQ1MsQUFDUDtzQkFGRixBQUdFOzZCQVpVLEFBU1osQUFHYztBQUhkLEFBQ0U7d0JBR0YsQUFDUyxBQUNQO3NCQUZGLEFBR0U7NkJBaEJVLEFBYVosQUFHYztBQUhkLEFBQ0U7d0JBSU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDbkM7c0JBRkYsQUFHRTs2QkFwQkosQUFBYyxBQWlCWixBQUdjLEFBRWhCO0FBTEUsQUFDRTtpREFJRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFFVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBTlosQUFDSSxBQUlJLEFBQ0ksQUFHUjtBQUhRO2tDQUdQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLHVCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBaEI1QixBQUNJLEFBRUksQUFTSSxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBUy9COzs7OztpSCxBQXBFNEI7Ozs7O2lDQUNuQjtBLDJDQUFTLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUNkLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUE5QztBOzs2Q0FHTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt5REFBb0IsUUFGakIsQUFFaUIsQUFBUSxBQUM1Qjs2Q0FBUSxRQUhMLEFBR0ssQUFBUSxBQUNoQjttREFBYyxRQUpYLEFBSVcsQUFBUSxBQUN0QjtxREFBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7NkNBQVEsUSxBQU5MLEFBTUssQUFBUTs7QUFOYixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0VaLEEsQUExRTJCOztrQkEwRTNCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9pbmRyYS9EZXNrdG9wL2JvcmluZyBzdHVmZi9sZWFybmluZ3MvYmxvY2tjaGFpbi9idXAvZXRoLWtpY2tzdGFydGVyIn0=