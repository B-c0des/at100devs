const purify = require("purify-css")
const htmlFiles = ['views\index.ejs'];
const cssFiles = ['public\css\style.css'];
const opts = {
    output: 'purified.css'
};
purify(htmlFiles, cssFiles, opts, function (res) {
    log(res);
});