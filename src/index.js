// import './index.pug'
import $ from 'jquery'
//import 'fullpage.js/dist/jquery.fullpage.css'
// import 'owl.carousel2/dist/assets/owl.theme.default.css'
//import scrolloverflow from 'fullpage.js/vendors/scrolloverflow'
//import fullpage from 'fullpage.js'
// import 'jquery-form-styler/dist/jquery.formstyler.theme.css'
import './js/common'
import 'normalize.css'
import './sass/main.sass'

// import 'vue'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import Vue from 'vue'
// window.Vue = require('vue')
function requireAll(r) {
	r.keys().forEach(r);
}
requireAll(require.context('./sprite/', true, /\.svg$/));