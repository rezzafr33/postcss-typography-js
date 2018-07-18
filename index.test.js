var postcss = require('postcss');
var Typography = require('typography');

var plugin = require('./');

var typography = new Typography({});

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('replace @typography to css', () => {
    return run('@typography;', typography.toString(), { });
});
