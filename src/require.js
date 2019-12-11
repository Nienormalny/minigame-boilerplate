function requireAll(req) {req.keys().forEach(req);}

console.time = () => {};
console.timeEnd = () => {};

// requireAll(require.context('./components/', true, /\.js$/));
// requireAll(require.context('./components/', true, /\.html$/));
require('./styles/style.scss');
require('./styles/responsive.scss');
require('lodash');

if (module.hot) {
    module.hot.accept();
}