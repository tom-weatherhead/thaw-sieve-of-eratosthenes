window.sieve=function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e){function t(r,e){for(var t of e){if(t*t>r)return!0;if(r%t==0)return!1}return!0}r.exports={factorize:function(r){if(r=parseInt(r,10),isNaN(r))throw new Error("Invalid argument");if(r<2)return[];for(var e=[],n=[],o=2,u=1;;){if(o*o>r)return n.push(r),n;if(t(o,e))for(e.push(o);r%o==0;)if(r/=o,n.push(o),1===r)return n;o+=u,u=2}},sieve:function(r){if(r=parseInt(r,10),isNaN(r))throw new Error("Invalid argument");for(var e,t,n=(e=2,t=r-1,[...Array.from(Array(t-e+1).keys())].map(r=>e+r)),o=[],u=function(){var r=n.shift();o.push(r),n=n.filter(e=>e%r!=0)};n.length;)u();return o}}}]);