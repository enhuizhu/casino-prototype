!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux-thunk")},function(e){e.exports={games:[{name:"Starburst",description:"Starburst is a high paced slot with some nice new features including a Starburst Wild feature. It has 5-reels and 10-bet lines and Traditional Wilds are replaced with an innovative new Starburst Wild which appear on reels 2, 3 or 4 and expand over the entire reel and remain in place for up to 3 re-spins giving you a much better chance of hitting a HUGE win!",code:"starburst",icon:"images/game-icon/starburst.jpg",categoryIds:[0,2]},{name:"Jack Hammer",description:"Jack Hammer is a 25-line, 3-row video slot using 15 independent reels set in the gritty, glamorous underworld of a crime fighting private eye.The game features Sticky Wins, Free Spins and Wild Substitutions.",code:"jackhammer",icon:"images/game-icon/jackhammer.jpg",categoryIds:[0,1]},{name:"Jack and the Beanstalk",description:"We is proud to present Jack and the Beanstalk. This game has a new feature called walking wilds which you will find in the main gameplay of this amazing game When a wild symbol is placed on the reels it will travel one reel at a time unti it leaves the left most reel, hence the name walking wilds! There are also in game free spins, where the main feature is to collect keys to unlock the different wild functionalities.",code:"jackandbeanstalk",icon:"images/game-icon/jackandbeanstalk.jpg",categoryIds:[0,2,1]},{name:"Dead or Alive",description:"The Elements slot has an Avalanche meter which increases by one for each successive fall until it reaches the maximum of 4. After 4 successive Avalanches one of the 4 Free Falls Storm modes is triggered. These are the Fire Storm mode, Air Storm mode, Earth Storm mode, and Water Storm mode. The colours of the Avalanche meter match the leading element in the current game round.",code:"deadoralive",icon:"images/game-icon/deadoralive.jpg",categoryIds:[0,2]},{name:"Twin Spin",description:"The Twin Spin video slot has a Las Vegas theme brought into the 21st Century! Each spin starts with identical, adjacent twin reels that are linked together. During the spin the twin reels can expand to become triplet, quadruplet or even quintuplet reels. The unique reel synchronising and linking feature that appears on every single spin and the 243 ways to win makes for massive payouts!",code:"twinspin",icon:"images/game-icon/twinspin.jpg",categoryIds:[0,1]}],categories:[{id:0,name:"ALL"},{id:1,name:"VIDEO SLOTS"},{id:2,name:"SLOT MACHINES"}]}},function(e,t){var a={rebecka:{name:"Rebecka Awesome",avatar:"images/avatar/rebecka.jpg",event:"Last seen gambling on Starburst.",password:"secret"},eric:{name:"Eric Beard",avatar:"images/avatar/eric.jpg",event:"I saw you won 500 SEK last time!",password:"dad"},stoffe:{name:"Stoffe Rocker",avatar:"images/avatar/stoffe.jpg",event:"Your are a rock star",password:"rock"}};e.exports=function(e,t,n){if("POST"===e.method){if("/login"===e.path){console.log("rawbody",e.body);var r=JSON.parse(e.body),o=r.username,i=r.password;if(console.log(o),o in a&&a[o].password===i){var s=Object.assign({},a[o],{username:o});delete s.password,t.status(200).json({status:"success",player:s})}else t.status(400).json({status:"fail",error:"player does not exist or wrong password"})}else if("/logout"===e.path){JSON.parse(e.body).username in a?t.status(200).json({status:"success"}):t.status(400).json({status:"fail",error:"Username do not match!"})}}else n()}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("cors")},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a(2),s=function(){return r.a.createElement("div",{className:"logo-container"},r.a.createElement("div",{className:"logo"}))},c=function(e){return r.a.createElement("div",{className:"btn "+e.btnClass,onClick:e.onClick},e.children)},l="http://localhost:3000",u=a(3),m=a.n(u);function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p,f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,n=[{key:"getGameData",value:function(){return m.a.get(this.getUrl("game-data"))}},{key:"login",value:function(e){return m.a.post(this.getUrl("login"),e)}},{key:"logout",value:function(e){return m.a.post(this.getUrl("logout"),e)}},{key:"getUrl",value:function(e){return"".concat(l,"/").concat(e)}}],(a=null)&&d(t.prototype,a),n&&d(t,n),e}(),g=function(e){return r.a.createElement("div",{className:"profile "+e.className},e.player?r.a.createElement("div",null,r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{src:f.getUrl(e.player.avatar),className:"avatar"}),r.a.createElement("div",{className:"profile-detail"},r.a.createElement("div",{className:"bold"},e.player.name),r.a.createElement("div",{className:"state"},e.player.event)),r.a.createElement("div",{className:"clear"})),r.a.createElement(c,{btnClass:"arrow-left margin-top-10",onClick:e.onLogout},"Log Out")):r.a.createElement(c,{btnClass:"arrow-left margin-top-10",onClick:e.onLogin},"Log In"))},h=function(e){var t={},a=function(){e.onSearch(t.value)};return r.a.createElement("div",{className:"search-box "+e.className},r.a.createElement("input",{type:"text",placeholder:"search game",ref:function(e){t=e},onChange:a}),r.a.createElement("i",{className:"fas fa-search",onClick:a}))},v=function(e){return r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"list-title bold"},e.title),r.a.createElement("div",{className:"content"},e.children))},y=a(1),b=function(e){alert(e.response.data.error)},w=function(){return{type:S}},E="RECEIVE_GAMES",k="PLAY_GAME",S="CLOSE_GAME";"undefined"!=typeof window&&window._GAMES?(p=window._GAMES,delete window._GAMES):p={};var j=Object(y.combineReducers)({userInfo:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login":return e.payload;default:return null}},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}},gameVisibility:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case k:return!0;case S:return!1;default:return e}}}),_=a(5),F=a.n(_),C=Object(y.createStore)(j,Object(y.applyMiddleware)(F.a));function O(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,n=[{key:"isLoggedIn",value:function(){return!!C.getState().userInfo}}],(a=null)&&O(t.prototype,a),n&&O(t,n),e}();function N(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,n=[{key:"open",value:function(e){x.isLoggedIn()?(C.dispatch({type:k}),setTimeout(function(){comeon.game.launch(e)},200)):alert("please log in first")}},{key:"close",value:function(){C.dispatch(w())}}],(a=null)&&N(t.prototype,a),n&&N(t,n),e}(),L=function(e){return r.a.createElement("div",{className:"game-item"},r.a.createElement("img",{src:f.getUrl(e.data.icon),className:"pull-left"}),r.a.createElement("div",{className:"content pull-left"},r.a.createElement("div",{className:"title bold"},e.data.name),r.a.createElement("div",{className:"description"},e.data.description),r.a.createElement(c,{btnClass:"pull-right",onClick:function(){console.log("game code",e.data.code),I.open(e.data.code)}},"Play")),r.a.createElement("div",{className:"clear"}))},A=function(e){return r.a.createElement("div",{className:"game-list"},e.items.map(function(e,t){return r.a.createElement(L,{key:t,data:e})}))},T=function(e){return r.a.createElement("div",{className:"categories-list"},e.items.map(function(t,a){return r.a.createElement("div",{key:a,className:"category-item bold",onClick:function(){e.categoryChange(t)}},t.name)}))},P=Object(i.connect)(null,function(e){return{login:function(t){e(function(e){return function(t){f.login(e).then(function(e){t({type:"login",payload:e.data.player})}).catch(b)}}(t))}}})(function(e){var t,a;return r.a.createElement("div",{className:"login-form-overlay"},r.a.createElement("div",{className:"login-form-container"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"username",ref:function(e){t=e}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",placeholder:"password",ref:function(e){a=e}})),r.a.createElement("div",null,r.a.createElement(c,{btnClass:"pull-right",onClick:function(){e.login({username:t.value,password:a.value})}},"Login"),r.a.createElement(c,{btnClass:"pull-right",onClick:e.onCancel},"Cancel"),r.a.createElement("div",{className:"clear"}))))});function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var D=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(e=!(n=q(t).call(this))||"object"!==M(n)&&"function"!=typeof n?U(a):n).state={currentCategory:void 0,searchStr:void 0,showLoginForm:!1},e.onSearch=e.onSearch.bind(U(U(e))),e.onCategoryChange=e.onCategoryChange.bind(U(U(e))),e.showLoginForm=e.showLoginForm.bind(U(U(e))),e.logOut=e.logOut.bind(U(U(e))),e}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r.a.Component),a=t,(n=[{key:"showLoginForm",value:function(){this.setState({showLoginForm:!0})}},{key:"onSearch",value:function(e){this.setState({searchStr:e})}},{key:"onCategoryChange",value:function(e){this.setState({currentCategory:e})}},{key:"logOut",value:function(){this.props.logout(this.props.userInfo)}},{key:"filterGames",value:function(e,t,a){return t||a?e.filter(function(e){return a?-1!==e.name.toLowerCase().indexOf(a.toLowerCase()):-1!==e.categoryIds.indexOf(t.id)}):e}},{key:"componentWillReceiveProps",value:function(e){e.userInfo&&this.setState({showLoginForm:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(g,{className:"pull-left",player:this.props.userInfo,onLogin:this.showLoginForm,onLogout:this.logOut}),r.a.createElement(h,{className:"pull-right margin-top-10",onSearch:this.onSearch}),r.a.createElement("div",{className:"clear"}),r.a.createElement("div",null,r.a.createElement("div",{className:"pull-left col-xs-9"},r.a.createElement(v,{title:"Games"},r.a.createElement(A,{items:this.filterGames(this.props.games,this.state.currentCategory,this.state.searchStr)}))),r.a.createElement("div",{className:"pull-left col-xs-3"},r.a.createElement(v,{title:"Categories"},r.a.createElement(T,{items:this.props.categories,categoryChange:this.onCategoryChange}))),r.a.createElement("div",{className:"clear"})))),this.state.showLoginForm&&!this.props.userInfo?r.a.createElement(P,{onCancel:function(){e.setState({showLoginForm:!1})}}):"",this.props.isPlayingGame?r.a.createElement("div",{className:"game-container"},r.a.createElement(c,{onClick:this.props.closeGame,btnClass:"close-btn"},"Close Game"),r.a.createElement("div",{id:"game-launch"})):"")}}])&&G(a.prototype,n),o&&G(a,o),t}(),W=Object(i.connect)(function(e){return{userInfo:e.userInfo,games:e.games.games?e.games.games:[],categories:e.games.categories?e.games.categories:[],isPlayingGame:e.gameVisibility}},function(e){return{logout:function(t){e(function(e){return function(t){f.logout(e).then(function(e){t({type:"logout"})}).catch(b)}}(t))},closeGame:function(){e(w())}}})(D),H=function(e){var t=e.body,a=e.title,n=e.games;return"\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>".concat(a,'</title>\n      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">\n    </head>\n    <body style="margin:0">\n      <div id="app">').concat(t,"</div>\n      <script>\n        window._GAMES = ").concat(JSON.stringify(n),'\n      <\/script>\n      <script src=\'script/css.js\'><\/script>\n      <script src=\'script/client.js\'><\/script>\n      <script>\n      (function() {\n        // Load the script\n        var script = document.createElement("SCRIPT");\n        script.src = \'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\';\n        script.type = \'text/javascript\';\n        script.onload = function() {\n            var $ = window.jQuery;\n            window.comeon=function(e){"use strict";var t={starburst:{src:"https://comeon-static-test.casinomodule.com/games/starburst_mobile_html/game/starburst_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-41e133d5237c402-EUR&gameId=starburst_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"},jackhammer:{src:"https://comeon-static-test.casinomodule.com/games/jackhammer_mobile_html/game/jackhammer_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-0b3a6e21685c42a-EUR&gameId=jackhammer_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"},jackandbeanstalk:{src:"https://comeon-static-test.casinomodule.com/games/jackandbeanstalk_mobile_html/game/jackandbeanstalk_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-756f72b48bc2493-EUR&gameId=jackandbeanstalk_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"},deadoralive:{src:"https://comeon-static-test.casinomodule.com/games/deadoralive_mobile_html/game/deadoralive_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-979bbc939ea9412-EUR&gameId=deadoralive_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"},twinspin:{src:"https://comeon-static-test.casinomodule.com/games/twinspin_mobile_html/game/twinspin_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-c813546a446a412-EUR&gameId=twinspin_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"}};return{game:{launch:function(a){e("#game-launch").empty();var s=t[a].src;e("<iframe>",{src:s,id:"game",frameborder:0,scrolling:"no",width:640,height:480}).appendTo("#game-launch")}}}}(jQuery);\n        };\n        document.getElementsByTagName("head")[0].appendChild(script);\n      })();\n      <\/script>\n    </body>\n  </html>\n')},J=a(6),B=Object(y.createStore)(j);B.dispatch({type:E,payload:J});var V=a(7),Q=a(8),Y=a(9),Z=a(10),K=Q();K.use(Z()),K.use(Q.static("".concat(process.cwd(),"/server"))),K.use("/script",Q.static("".concat(process.cwd(),"/dist/public"))),K.use(function(e,t,a){var n=(e.headers["content-type"]||"").split(";")[0];if("text/plain"!=n&&"application/json"!=n)return a();var r="";e.setEncoding("utf8"),e.on("data",function(e){r+=e}),e.on("end",function(){e.body=r,a()})}),K.use(V),K.get("/game-data",function(e,t){t.setHeader("content-type","application/json"),Y.createReadStream(process.cwd()+"/server/mock-data.json").pipe(t)}),K.get("/",function(e,t){var a=r.a.createElement(i.Provider,{store:B},r.a.createElement(W,null)),n=Object(o.renderToString)(a);t.send(H({body:n,title:"Common on Casino",games:J}))}),K.listen(3e3),console.log("Serving at http://localhost:".concat(3e3))}]);