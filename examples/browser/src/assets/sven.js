module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){t.version=n(6).version},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(7),i=o.isFunction,c=o.isObject,s=(o.isString,o.isArray),u=function(e,t){return t.appendChild(e)},a=Object.prototype.hasOwnProperty,f=function(e,t){if(a.call(e,"children")&&s(e.children)&&e.children.forEach(function(e){"string"!=typeof e&&"number"!=typeof e||t.appendChild(document.createTextNode(e))}),a.call(e,"attrs")){var n=e.attrs;for(var r in n)if("config"!==r&&"key"!==r&&("disabled"!==r||!1!==n[r]))if("class"==r||"className"==r)t.className=n[r].toString();else if(i(n[r])&&"on"==r.slice(0,2))t[r.toLowerCase()]=n[r];else{if("checked"===r&&(!1===n[r]||""===n[r]))continue;try{t.setAttribute(""+r,n[r].toString())}catch(e){console.error("e",e)}}}return t},l=function(e){void 0===e.tag&&(e.tag="span",e.attrs={sjxid:Math.floor(Math.random()*(new Date).getTime())});var t=document.createElement(e.tag);return f(e,t),t};t.renderToString=function(e,t){return d(e,t).innerHTML};var d=function(e,t){var n=document.createDocumentFragment(),o=document.createElement(e.tag);f(e,t.rootNode);var i=function e(t,n){var o;return a.call(t,"children")?s(t.children)&&t.children.forEach(function(t,i){null!==t&&"object"===r(t)&&(o=l(t),e(t,o),u(o,n)),s(t)&&(t.tag,t.forEach(function(t,r){a.call(t,"render")||(o=l(t),e(t,o),u(o,n))}))}):"object"===r(t)&&a.call(t,"render")&&e(t.render(),n),n}(e,o);return n.appendChild(i),n};t.render=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(console.log("node",t),console.log("remder",e.render()),!t)return"Error: No node to attach";c(e)&&(a.call(e,"_svenjs")||(e._svenjs={rootNode:!1}),e._svenjs.rootNode=t),t.innerHTML="",n=c(r)?r:e.render(),console.log(n),t.appendChild(d(n,e._svenjs)),console.log(t)}},function(e,t,n){"use strict";t.deepCopy=function(e){return JSON.parse(JSON.stringify(e))}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=t.deepFreeze=function(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==r(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||o(e[t])}),e}},function(e,t){var n=[];t.createStore=function(e){return e.isMounted||(e.listenTo=function(e){n.push(e)},e.emit=function(e){n.forEach(function(t){t(e)})},"function"==typeof e.init&&e.init.apply(e)),e}},function(e,t,n){e.exports=n(8)},function(e){e.exports={name:"svenjs",version:"0.4.0",description:"A micro javascript framework for creating composable web apps",scripts:{test:"tape tests/*",build:"NODE_ENV=production webpack -p",postbuild:"cp dist/index.js npmbuild && cp dist/index.js examples/browser/src/assets/sven.js","build:watch":"sane 'NODE_ENV=development npm run build'  --glob='src/**/*.js' --watchman",watch:"sane 'npm run build'  --glob='src/**/*.js' --watchman"},repository:{type:"git",url:"https://github.com/svenanders/svenjs.git"},main:"dist/index.js",directories:{example:"example"},devDependencies:{"@babel/core":"^7.0.0-rc.1","@babel/preset-env":"^7.0.0-rc.1","@babel/preset-react":"^7.0.0-rc.1","babel-loader":"^8.0.0-beta.4",eslint:"^5.4.0",jsdom:"^12.0.0",jstransform:"^11.0.3",lodash:"^4.17.10","lodash-es":"^4.17.10",rimraf:"^2.3.4",sane:"^3.0.0",tape:"~4.9.1",webpack:"^4.17.0","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.5","webpack-serve":"^2.0.2"},author:"",license:"ISC",dependencies:{svenjsx:"^0.3.1","svenjsx-loader":"^0.3.1"}}},function(e,t,n){"use strict";var r={}.toString;t.isFunction=function(e){return"function"==typeof e},t.isObject=function(e){return"[object Object]"===r.call(e)},t.isString=function(e){return"[object String]"===r.call(e)},t.isArray=function(e){return"[object Array]"===r.call(e)},t.isDefined=function(e){return"undefined"!==r.call(e)}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),i=n(3),c=function(e,t){var n=Object(o.deepCopy)(t);return Object(i.deepFreeze)(n),n},s=n(1),u=function(e){var t;e._svenjs.rootNode&&(t=e._svenjs.rootNode),e.hasOwnProperty("attrs")&&e.attrs.hasOwnProperty("sjxid")&&(t||(t=document.querySelector("[sjxid='"+e.attrs.sjxid+"']"))),e.isMounted&&(Object(s.render)(e,t),e.hasOwnProperty("_didUpdate")&&e._didUpdate.apply(e))},a=function(e,t){t.state=c(t,e),u(t)};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var n=function e(t){if(!t||"object"!==f(t))return t;var n={};return Array.isArray(t)?n=t.map(function(t){return e(t)}):Object.keys(t).forEach(function(r){return n[r]=e(t[r])}),n}(e);return n._svenjs={rootNode:!1},n.isBound=!1,n.isMounted=!1,n.props={},t&&(n._jsxid=n.props.sjxid,n.props=t,setTimeout(function(){return u(n)},0),delete n.props.sjxid),n.hasOwnProperty("attrs")||n.hasOwnProperty("attrs")||(n.attrs={sjxid:function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()+e())}()}),n.isBound||(n.version=r.version,n.isBound=!0,n.setState=function(e){return a(e,this)},"function"==typeof n._beforeMount&&n._beforeMount.apply(n)),n.isMounted||(n.isMounted=!0,void 0!==n.initialState&&(n.state=n.initialState),"function"==typeof n._didMount&&(n._didMount.apply(n),"function"==typeof u&&setTimeout(function(){return u(n)},100))),n},d=n(4);console.log("running svenjs version ".concat(r.version));var p={version:r.version,create:l,setState:a,createStore:d.createStore,render:s.render,renderToString:s.renderToString,lifeCycle:u};t.default=p}]);