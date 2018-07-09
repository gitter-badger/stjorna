(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("STJÓRNA was created to have an easy product management with the possibility to access the categories and products over an simple just readable REST API.")]),t._m(1),t._m(2),a("p",[t._v("STJÓRNA is islandic and means something like manage or store stuff.\nThe two main goal of STJÓRNA are to be very simple in the setup and configuration effort. The second goal was to publish and share the stored data over an REST API with other applications, maybe your website.")]),t._m(3),a("p",[t._v("You have two possibilities how you can start/deploy STJÓRNA.")]),t._m(4),t._m(5),a("p",[t._v("You can directly pull the official Docker image from Docker Hub.")]),t._m(6),a("p",[a("a",{attrs:{href:"https://microbadger.com/images/secanis/stjorna",title:"Get your own image badge on microbadger.com",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://images.microbadger.com/badges/image/secanis/stjorna.svg",alt:""}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://microbadger.com/images/secanis/stjorna",title:"Get your own version badge on microbadger.com",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://images.microbadger.com/badges/version/secanis/stjorna.svg",alt:""}}),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/secanis/stjorna",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/secanis/stjorna"),a("OutboundLink")],1)]),t._m(7),a("p",[t._v("Download the compressed package and unpack it in a NodeJS environment. Default Port is 3000.")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("For your third party application, in which one you want to use the public REST API, you can use the following documentation. You can load the active categories and products over this REST API including your API Key/Token.")]),a("p",[t._v("You can enable/disable the complete API or you enable/disable categories or products.")]),a("p",[a("a",{attrs:{href:"https://stjorna.secanis.ch/apidoc/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remote REST API Documentation"),a("OutboundLink")],1)]),t._m(16),t._m(17),t._m(18),t._m(19)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"stjorna"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stjorna","aria-hidden":"true"}},[this._v("#")]),this._v(" STJÓRNA")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://stjorna.secanis.ch/docs/images/stjorna_middle_compressor.png",alt:"stjorna logo",title:"STJÓRNA Logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"get-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Get Started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("You have to call https://"),e("em",[this._v("stjornaurl")]),this._v("/setup to configure your system initially.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("docker pull secanis/stjorna\ndocker run -p 80:3000 secanis/stjorna\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeJS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("node server.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After the first start, you have to configure your STJÓRNA instance. You can reach the setup url over https://"),e("em",[this._v("stjornaurl")]),this._v("/setup.\nIn the setup process you can set the username, email and a password. After an initial setu")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://stjorna.secanis.ch/docs/images/stjorna_setup.png",alt:"stjorna setup page",title:"STJÓRNA Setup Page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"env-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" ENV Variables")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("STJORNA_SERVER_PORT")]),a("td",[t._v("3000")]),a("td",[t._v("Port for the Node server")])]),a("tr",[a("td",[t._v("STJORNA_SERVER_MAX_UPLOAD")]),a("td",[t._v("5mb")]),a("td",[t._v("Max image upload size, defined for Express")])]),a("tr",[a("td",[t._v("STJORNA_LOGLEVEL")]),a("td",[t._v("error")]),a("td",[t._v("Loglevel")])]),a("tr",[a("td",[t._v("STJORNA_CRON_CLEANUP_INTERVAL")]),a("td",[t._v("*/30 * * * *")]),a("td",[t._v("Cronjob interval to cleanup the storage")])]),a("tr",[a("td",[t._v("STJORNA_SERVER_STORAGE")]),a("td",[t._v("process.cwd()")]),a("td",[t._v("Default path is in the path of the server.js data folder")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"remote-rest-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote-rest-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote REST API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"screenshots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#screenshots","aria-hidden":"true"}},[this._v("#")]),this._v(" Screenshots")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://stjorna.secanis.ch/docs/images/stjorna_login.png",alt:"stjorna login page",title:"STJÓRNA Login Page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://stjorna.secanis.ch/docs/images/stjorna_dashboard.png",alt:"stjorna dashboard page",title:"STJÓRNA Dashboard Page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://stjorna.secanis.ch/docs/images/stjorna_settings.png",alt:"stjorna settings page",title:"STJÓRNA Settings Page"}})])}],!1,null,null,null);e.default=r.exports}}]);