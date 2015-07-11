const _ = require('lodash');

beforeEach(function() {
  global.sinon = require('sinon');
  this.sandbox = sinon.sandbox.create();
  this.spy = _.bind(this.sandbox.spy, this.sandbox);
  this.stub = _.bind(this.sandbox.stub, this.sandbox);
});

afterEach(function() {
  this.sandbox.restore();
});

