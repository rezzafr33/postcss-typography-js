var postcss = require('postcss');
var Typography = require('typography');

module.exports = postcss.plugin('postcss-typography', function (opts) {
    opts = opts || {};

    var typography = new Typography(opts);

    return function (root) {
        root.walkAtRules('typography', function (rule) {
            var css = postcss.parse(typography.toString());
            rule.replaceWith(css.nodes);
        });
    };
});
