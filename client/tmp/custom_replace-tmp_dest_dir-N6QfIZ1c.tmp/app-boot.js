/* jshint ignore:start */

define('todo-cli/config/environment', ['ember'], function(Ember) {
  var prefix = 'todo-cli';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("todo-cli/tests/test-helper");
} else {
  require("todo-cli/app")["default"].create({"name":"todo-cli","version":"0.0.0.a4187a89"});
}

/* jshint ignore:end */
