!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=13)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(){return o.a.createElement("div",null,"hello, this is test hello")}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},,function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(0),c=n.n(i),u=n(3),l=n(1),s=function(e){var t=e.body,n=e.title;return"\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>".concat(n,'</title>\n    </head>\n    <body style="margin:0">\n      <div id="app">').concat(t,"</div>\n      <script src='css.js'><\/script>\n      <script src='client.js'><\/script>\n    </body>\n  </html>\n")},a=(n(5),n(6),o()());a.use(o.a.static("".concat(process.cwd(),"/dist/public"))),a.get("/",function(e,t){var n=Object(u.renderToString)(c.a.createElement(l.a,null));t.send(s({body:n,title:"Server side Rendering with Styled Components"}))}),a.listen(3e3),console.log("Serving at http://localhost:".concat(3e3))}]);