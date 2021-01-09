(function () {
'use strict';

angular.module('MenuApp', ['Data']);

angular.module('MenuApp')
.config(function () {
  console.log("MenuApp config fired.");
}).
run(function () {
  console.log("MenuApp run fired.");
});

})();
