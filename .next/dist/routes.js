'use strict';

var routes = require('next-routes')();

routes.add("/campaigns/new", '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QixrQkFDQyxBQURELElBQ0ssQUFETCx1QkFDMkIsQUFEM0IsbUJBRUMsQUFGRCxJQUVLLEFBRkwsZ0NBRXFDLEFBRnJDLDZCQUdDLEFBSEQsSUFHSyxBQUhMLG9DQUd5QyxBQUh6Qzs7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2luZHJhL0Rlc2t0b3AvYm9yaW5nIHN0dWZmL2xlYXJuaW5ncy9ibG9ja2NoYWluL2J1cC9ldGgta2lja3N0YXJ0ZXIifQ==