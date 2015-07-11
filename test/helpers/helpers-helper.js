const _ = require('lodash');

global.helpers = function(config) {
  beforeEach(function() {
    _.assign(this, config);
  });
};

