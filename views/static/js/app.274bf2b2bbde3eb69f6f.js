webpackJsonp([4],{

/***/ 150:
/***/ (function(module, exports) {

// import loadComponents from './loadComponents'
// import lazyLoading from './lazyLoading'
// export default (routers,data) => {
//   //这里之所以要重新遍历一下，是因为，通常我们动态路由的时候，是获取服务端数据，这个component属性是一个字符串，或者可能连字段名都是其他的key
//   //所以这里要做一些转换
//   generaMenu(routers,data)
// }
// function generaMenu(routers,data){
//   data.forEach((item)=>{
//   	let menu = Object.assign({},item);
//   	let parent ='';
// //	console.log(item.label,menu.component)
// //	console.log(menu)
// 	if(item.parent){
// 		parent = item.parent;
// 		 menu.component = lazyLoading(parent,menu.component)
// 	}else{
// 		parent = '';
// 		 menu.component = loadComponents()
// 	}
//     if(!item.leaf){
//       menu.children = [];
// //    menu.component = lazyLoading(menu.label,menu.component)
//       generaMenu(menu.children,item.children)
// //    console.log(item.children)
//     }
//     routers.push(menu)
//   })
// }

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(267),
  /* template */
  __webpack_require__(578),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);


/* harmony default export */ __webpack_exports__["a"] = ({ //加密
    encrypt(word) {
        var key = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse('szzhongyuanzilot');
        var iv = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse('zilotszzhongyuan');
        var encrypted = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.encrypt(word, key, { iv: iv, mode: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.mode.CBC, padding: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.pad.Pkcs7 }); //CryptoJS.pad.Pkcs7

        return encrypted.toString();
    },
    //解密
    decrypt(word) {
        var key = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse('szzhongyuanzilot');
        var iv = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse('zilotszzhongyuan');
        var decrypted = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.decrypt(word, key, { iv: iv, mode: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.mode.CBC, padding: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.pad.Pkcs7 }); //CryptoJS.pad.Pkc
        return __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.stringify(decrypted).toString();
    }

});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_404__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_usermanagement_backManagement__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_usermanagement_backManagement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_usermanagement_backManagement__);






let routes = [{
	path: '/',
	redirect: '/login',
	hidden: true
}, {
	path: '/login',
	component: __WEBPACK_IMPORTED_MODULE_0__views_Login___default.a,
	name: '',
	hidden: true
}, {
	path: '/404',
	component: __WEBPACK_IMPORTED_MODULE_1__views_404___default.a,
	name: '',
	hidden: true
}, {
	path: '/home',
	component: __WEBPACK_IMPORTED_MODULE_2__views_Home___default.a,
	name: '基础设置',
	iconCls: 'fa fa-home', //图标样式class
	hidden: true,
	children: []
},
// {
// 	path: '/backManagement',
// 	component: Home,
// 	name: '用户管理',
// 	iconCls: 'fa fa-user-o',
// 	children: [
// 		{ 	path: '/backManagement',
// 			component: resolve => require(['@/views/usermanagement/backManagement'], resolve),
// 			name: '用户信息',
// 			meta: { keepAlive: true }
// 		},
// 	 ]
// },
{
	path: '/activitymanagement',
	component: __WEBPACK_IMPORTED_MODULE_2__views_Home___default.a,
	name: '活动管理',
	iconCls: 'fa fa-bar-chart',
	children: [{ path: '/activityConfig',
		component: resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(587)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
		name: '活动配置',
		meta: { keepAlive: true }
	},
	// { 	path: '/activityStatistic',
	// 	component: resolve => require(['@/views/activitymanagement/activityStatistic'], resolve),
	// 	name: '活动信息',
	// 	meta: { keepAlive: true }
	// },
	{ path: '/activityProduct',
		component: resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(588)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
		name: '活动商品',
		meta: { keepAlive: true }
	}]
}, {
	path: '/ordermanagement',
	component: __WEBPACK_IMPORTED_MODULE_2__views_Home___default.a,
	name: '订单管理',
	iconCls: 'fa fa-list-alt',
	children: [{ path: '/orderList',
		component: resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(589)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
		name: '订单列表',
		meta: { keepAlive: true }
	}]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(273);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 应用初始状态
const state = {
    items: [],
    isLoadRoutes: false

    // 定义所需的 mutations
};const mutations = {};

// 创建 store 实例
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
    state,
    mutations
}));

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(555)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(582),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {}
});

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SIdentify',
  props: {
    identifyCode: {
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },
    backgroundColorMin: {
      type: Number,
      default: 180
    },
    backgroundColorMax: {
      type: Number,
      default: 240
    },
    colorMin: {
      type: Number,
      default: 50
    },
    colorMax: {
      type: Number,
      default: 160
    },
    lineColorMin: {
      type: Number,
      default: 40
    },
    lineColorMax: {
      type: Number,
      default: 180
    },
    dotColorMin: {
      type: Number,
      default: 0
    },
    dotColorMax: {
      type: Number,
      default: 255
    },
    contentWidth: {
      type: Number,
      default: 114
    },
    contentHeight: {
      type: Number,
      default: 40
    }
  },
  methods: {
    // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成一个随机的颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    },
    drawPic() {
      let canvas = document.getElementById('s-canvas');
      let ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom';
      // 绘制背景
      ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax);
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
      // 绘制文字
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i);
      }
      this.drawLine(ctx);
      this.drawDot(ctx);
    },
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei';
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      var deg = this.randomNum(-45, 45);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    },
    drawLine(ctx) {
      // 绘制干扰线
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax);
        ctx.beginPath();
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.stroke();
      }
    },
    drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  },
  watch: {
    identifyCode() {
      this.drawPic();
    }
  },
  mounted() {
    this.drawPic();
  }
});

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			sysName: '自助邦运维系统',
			collapsed: false,
			sysUserAvatar: '',
			routerArr: [],
			pathName: [],
			bodyHeight: 40,
			Url: 'https://sas.qyfzilot.cn/b/#/',
			rootPath: 'https://um.qyfzilot.cn',
			localtype: '2',
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			nodes: this.$router.options.routes
		};
	},
	computed: {
		sysUserName: function () {
			return localStorage.getItem('user');
		}
	},
	mounted() {
		this.getUrlpath();
	},
	// created(){
	// 	let isLoadNodes = localStorage.getItem('isLoadNodes');
	// 	this.getArr();
	// 	if (!isLoadNodes) {
	// 		let data = JSON.parse(localStorage.getItem('routers'))
	// 		this.nodes.push(...data)
	// 		localStorage.setItem('isLoadNodes', 'true')
	// 	}
	// 	if(this.$route.name!='基础设置'){
	// 		this.routerArr.push(this.$route.name)
	// 	}
	// 	if(this.$route.path=='/home'){
	// 		this.bodyHeight = '0'
	// 	}else{
	// 		this.bodyHeight = '40'
	// 	}
	// },
	watch: {
		$route(to, from) {
			if (this.routerArr.length != 0) {
				let data = this.routerArr;
				var testStr = ',' + data.join(",") + ",";
				if (testStr.indexOf("," + to.name + ",") == -1) {
					if (to.name != '基础设置') {
						data.push(to.name);
					}
				}
			}
			if (this.$route.path == '/home') {
				this.bodyHeight = '0';
			} else {
				this.bodyHeight = '40';
			}
		}
	},
	methods: {
		getUrlpath() {
			let sourceStr = location.href.split('/')[2];
			if (sourceStr == 'wxpromotion.qyfzilot.cn') {

				this.rootPath = 'https://um.qyfzilot.cn';
				this.Url = 'https://sas.qyfzilot.cn/b/#/';
			} else if (sourceStr == 'test-wxpromotion.qyfzilot.cn') {

				this.rootPath = 'https://test-um.qyfzilot.cn';
				this.Url = 'https://test-sas.qyfzilot.cn/b/#/';
			} else {
				if (this.localtype == 1) {
					this.rootPath = 'https://um.qyfzilot.cn';
					this.Url = 'https://sas.qyfzilot.cn/b/#/';
				} else {
					this.rootPath = 'https://test-um.qyfzilot.cn';
					this.Url = 'https://test-sas.qyfzilot.cn/b/#/';
				}
			}
		},
		onSubmit() {
			//         		console.log('submit!');
		},
		handleopen() {
			//				console.log(a,b);
		},
		handleclose() {
			//				console.log(a,b);
		},
		handleselect: function (a, b) {
			let data = this.pathName;
			let result = this.routerArr;
			for (var i = 0; i < data.length; i++) {
				if (a == data[i].path && a != '/home') {
					if (result.length != 0) {
						var testStr = ',' + result.join(",") + ",";
						if (testStr.indexOf("," + data[i].name + ",") == -1) {
							result.push(data[i].name);
						}
					} else {
						result.push(data[i].name);
					}
				}
			}
		},
		getArr() {
			let arr = JSON.parse(localStorage.getItem('routers'));
			for (var i = 0; i < arr.length; i++) {
				let l = arr[i].children;
				for (var j = 0; j < l.length; j++) {
					this.pathName.push({ path: l[j].path, name: l[j].name });
				}
			}
		},
		routeTo(val) {
			let routesArr = this.pathName;
			for (var i = 0; i < routesArr.length; i++) {
				if (val == routesArr[i].name) {
					this.$router.push(routesArr[i].path);
				}
			}
		},
		removeRoute(val) {
			if (val == this.$route.name) {
				return false;
			}
			let result = this.routerArr;
			let index = result.indexOf(val);
			if (index > -1) {
				result.splice(index, 1);
			}
		},
		cutArr(val) {
			for (var i = 0; i < val.length; i++) {
				for (var x = i + 1; x < val.length; x++) {
					if (val[i] == val[x]) {
						val.splice(x, 1);
					}
				}
			}
		},
		toOther: function () {
			var self = this;
			this.$confirm('是否切换到数据分析中心?', '提示', {
				//type: 'warning'
			}).then(() => {
				let userid = localStorage.getItem('userid');
				let para = {
					userId: userid,
					type: '1'
				};
				this.$http({
					method: 'post',
					url: self.rootPath + '/v1/back/user/login-verification',
					data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
					headers: { 'Accept': 'application/json' }
				}).then(res => {
					if (res.data.code == 200) {
						let data = res.data.data;
						console.log(data);
						window.open(self.Url + "?token=" + data.token + "&id=" + data.id + "&cookies=" + data.cookie);
					} else if (res.data.code == 401) {
						self.$message.error(res.data.message);
						setTimeout(function () {
							self.$router.push({ path: '/login' });
						}, 2000);
					} else {
						self.$message({
							message: res.data.message,
							type: 'error'
						});
						self.$router.push('/login');
					}
				});
			}).catch(res => {
				self.$message({
					message: res.data.message,
					type: 'error'
				});
				self.$router.push('/login');
			});
		},
		//退出登录
		logout: function () {
			var self = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				let userid = localStorage.getItem('userid');
				let para = {
					userId: userid,
					type: '2'
				};
				this.$http({
					method: 'post',
					url: self.rootPath + '/v1/back/user/logout',
					data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
					headers: { 'Accept': 'application/json' }
				}).then(res => {
					if (res.data.code == 200) {
						self.$router.options.routes = [];
						localStorage.removeItem('token');
						localStorage.removeItem('user');
						localStorage.removeItem('userid');
						localStorage.removeItem('user_cookie');
						localStorage.removeItem('routers');
						localStorage.removeItem('isLoadNodes');
						self.$router.push('/login');
					} else {
						self.$router.push('/login');
					}
				});
			}).catch(res => {
				self.$router.push('/login');
			});
		},
		//折叠导航栏
		collapse: function () {
			this.collapsed = !this.collapsed;
			var menu = document.getElementsByClassName('el-menu el-menu-vertical-demo');
			if (!this.collapsed) {
				menu[0].style.width = '230px';
			}
		},
		showMenu(i, status) {
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
		}
	}

});

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_MenuUtils__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_MenuUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_MenuUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_md5__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loginCheck__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loginCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_loginCheck__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var routers = [],
    code = '';
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			logining: false,
			ruleForm2: {
				account: '',
				checkPass: ''
			},
			picLyanzhengma: '',
			checkCode: '',
			identifyCodes: '',
			identifyCode: '',
			localtype: '2',
			rules2: {
				account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
				checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			},
			rootPath: 'https://um.qyfzilot.cn',
			checked: false
		};
	},
	components: {
		SIdentify: __WEBPACK_IMPORTED_MODULE_5__components_loginCheck___default.a
	},
	mounted() {
		localStorage.clear();
		this.getUrlpath();
		this.getQueryStringByName();
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		//判断是否chorme浏览器
		if (userAgent.indexOf("Chrome") > -1) {} else {
			this.$message({
				message: '为了您能更好的使用本系统,建议使用谷歌浏览器;https://pc.qq.com/detail/1/detail_2661.html',
				type: 'error',
				duration: 0
			});
		}
		this.identifyCodes = '1234567890abcdefjhjkmnpqrstuvwxy';
		this.identifyCode = "";
		this.makeCode(this.identifyCodes, 4);
		this.$nextTick(function () {
			this.$refs.account.focus();
		});
	},
	methods: {
		getUrlpath() {
			let sourceStr = location.href.split('/')[2];
			if (sourceStr == 'wxpromotion.qyfzilot.cn') {
				this.rootPath = 'https://um.qyfzilot.cn';
			} else if (sourceStr == 'test-wxpromotion.qyfzilot.cn') {
				this.rootPath = 'https://test-um.qyfzilot.cn';
			} else {
				if (this.localtype == 1) {
					this.rootPath = 'https://um.qyfzilot.cn';
				} else {
					this.rootPath = 'https://test-um.qyfzilot.cn';
				}
			}
		},
		getQueryStringByName() {
			var url = window.location.href; //获取url中"?"符后的字串
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
				var str = url.split("?")[1];
				var strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {

					theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
				}
			}
			if (theRequest.token) {
				this.getUserModule(theRequest.token, theRequest.id, theRequest.cookies);
			} else {
				return;
			}
		},
		login(data) {
			localStorage.setItem('routers', JSON.stringify(data));
			__WEBPACK_IMPORTED_MODULE_1__utils_MenuUtils___default()(routers, data);
		},
		randomNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},
		//-------------------图片验证码start-------------------------//
		refreshCode() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
		makeCode(o, l) {
			for (let i = 0; i < l; i++) {
				this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
			}
		},
		checkLpicma() {
			//取得输入的验证码并转化为大写
			if (this.picLyanzhengma == '') {
				this.$message.error('请输入验证码');
			} else if (this.picLyanzhengma.toLowerCase() != this.identifyCode) {
				//若输入的验证码与产生的验证码不一致时
				this.refreshCode(); //刷新验证码
				this.picLyanzhengma = '';
			} else {
				//输入正确时
				return true;
			}
		},
		//获取角色模块//
		getUserModule(token, id, cookies) {
			__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['token'] = token;
			__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['user_cookie'] = cookies;
			let self = this;
			let sendData = { userId: id };
			localStorage.setItem('token', token);
			localStorage.setItem('userid', id);
			localStorage.setItem('cookies', cookies);
			this.$http({
				method: 'get',
				url: '/v2/biz/back/user/user-moudel',
				params: sendData,
				headers: { 'Accept': 'application/json' }
			}).then(res => {
				if (res.data.code !== 200) {
					self.$message({
						message: res.data.message,
						type: 'error'
					});
				} else {
					let str = JSON.stringify(res.data.data);
					str = str.replace(/url/g, "path");
					str = str.replace(/label/g, "name");
					let arr = JSON.parse(str);
					for (var i = 0; i < arr.length; i++) {
						arr[i].label = arr[i].path.slice(1);
						arr[i].path = '/home';
						arr[i].component = 'Home';
						arr[i].leaf = true;
						arr[i].redirect = arr[i].children[0].path;
						if (arr[i].children) {
							arr[i].leaf = false;
							for (var a = 0; a < arr[i].children.length; a++) {
								arr[i].children[a].component = arr[i].children[a].path.slice(1);
								arr[i].children[a].parent = arr[i].label;
								arr[i].children[a].leaf = true;
							}
						} else {
							arr[i].leaf = true;
						}
					}
					self.login(arr);
					self.$router.addRoutes(routers);
					self.$router.push({ path: '/home' });
					location.reload();
				}
			});
		},
		//-------------------图片验证码end-------------------------//
		handleSubmit2(ev) {
			// if(this.checkLpicma()){
			this.$refs.ruleForm2.validate(valid => {
				if (valid) {
					this.logining = true;
					__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
					let loginParams = { userName: this.ruleForm2.account, password: __WEBPACK_IMPORTED_MODULE_2_js_md5___default()(this.ruleForm2.checkPass), type: '2' };
					__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['token'] = 'a095bc6f516a87ba65f91c85e5621265';
					let self = this;
					this.$http({
						method: 'post',
						url: self.rootPath + '/v1/back/user/login',
						async: false,
						data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(loginParams),
						headers: { 'Accept': 'application/json' }
					}).then(data => {
						self.logining = false;
						__WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
						if (data.data.code !== 200) {
							self.$message({
								message: data.data.message,
								type: 'error'
							});
						} else {
							let info = data.data.data;
							let usertoken = info.token;
							localStorage.setItem('token', usertoken);
							console.log(usertoken);
							__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['token'] = usertoken;
							let userCookie = info.cookie;
							localStorage.setItem('cookies', userCookie);
							__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common['user_cookie'] = userCookie;
							let sendData = { userId: info.id };
							console.log(sendData);
							localStorage.setItem('user', info.userName);
							localStorage.setItem('userid', info.id);
							self.$router.push({ path: '/home' });
						}
					}).catch(data => {
						self.logining = false;
					});
				}
			});
		}
	}
});

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_md5__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_md5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			info: [],
			listLoading: false,
			sels: [],
			total: 0,
			page: 1,
			pagesize: 10,
			resetFormVisible: false,
			addFormVisible: false,
			editFormVisible: false,
			editLoading: false,
			addLoading: false,
			resetLoading: false,
			roleList: {},
			resetForm: {
				password: ''
			},
			rules: {
				userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 2, max: 20, message: '长度在 2 到 20 ', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 20, message: '长度在 6 到 20 ', trigger: 'blur' }],
				nickName: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }, { min: 2, max: 20, message: '长度在 2 到 20 ', trigger: 'blur' }],
				phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }, { min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }, { type: 'number', message: '手机号应为数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				status: [{ required: true, message: '请选择状态', trigger: 'change' }]
			},
			rules2: {
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 20, message: '长度在 6 到 20 ', trigger: 'blur' }]
			},
			addForm: {
				userName: '',
				password: '',
				nickName: '',
				phone: '',
				remark: ''
			},
			editForm: {
				userName: '',
				nickName: '',
				phone: '',
				remark: ''
			}
		};
	},
	watch: {
		$route(to, from) {
			if (to.path == '/backManagement') {
				let self = this;
				var func = async function () {
					try {
						self.getTableData();
					} catch (e) {
						self.$message.error('请重新刷新页面');
					}
				};
				func();
			}
		}
	},
	mounted() {
		this.getTableData();
	},
	methods: {
		getTableData() {
			let sendData = {
				number: this.pagesize,
				page: this.page
			};
			let self = this;
			this.$http.get('/v1/back/user/list', {
				headers: { 'Accept': 'application/json' },
				params: sendData
			}).then(function (res) {
				self.listLoading = false;
				if (res.data.code == 200) {
					if (res.data.data != null && res.data.data != '') {
						self.info = res.data.data;
						self.total = res.data.count;
						for (var i = 0; i < self.info.length; i++) {
							let j = i + 1;
							self.info[i].tablenum = j;
							if (self.info[i].status == 1) {
								self.info[i].statusname = '已启用';
								self.info[i].statusOn = '禁用';
							} else {
								self.info[i].statusname = '已禁用';
								self.info[i].statusOn = '启用';
							}
							if (self.info[i].createTime != null && self.info[i].createTime != '') {
								self.info[i].createDate = self.format(self.info[i].createTime, 'yyyy-MM-dd');
							}
							if (self.info[i].lastLoginTime != null && self.info[i].lastLoginTime != '') {
								self.info[i].lastLogin = self.format(self.info[i].lastLoginTime, 'yyyy-MM-dd hh:mm:ss');
							} else {
								self.info[i].lastLogin = '';
							}
						}
					} else {
						self.info = [];
					}
				} else if (res.data.code == 401) {
					self.$message.error(res.data.message);
					setTimeout(function () {
						self.$router.push({ path: '/login' });
					}, 2000);
				} else {
					self.$message.error(res.data.message);
				}
			}).catch(function (res) {
				self.listLoading = false;
				self.$message.error(res.data.message);
			});
		},
		add_manager() {
			this.addFormVisible = true;
		},
		addSubmit() {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						//NProgress.start();
						let self = this;
						let para = Object.assign({}, this.addForm);
						let sendData = {
							userName: para.userName,
							password: __WEBPACK_IMPORTED_MODULE_1_js_md5___default()(para.password),
							nickName: para.nickName,
							phone: para.phone,
							remark: para.remark
						};
						this.$http({
							method: 'post',
							url: '/v1/back/user/add',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(sendData),
							headers: { 'Accept': 'application/json' }
						}).then(res => {
							console.log(res);
							self.addLoading = false;
							self.addFormVisible = false;
							self.addForm = {
								userName: '',
								password: '',
								nickName: '',
								phone: '',
								remark: ''
							};
							if (res.data.code == 200) {
								self.$message({
									message: res.data.message,
									type: 'success'
								});

								self.getTableData();
							} else if (res.data.code == 401) {
								self.$message.error(res.data.message);
								setTimeout(function () {
									self.$router.push({ path: '/login' });
								}, 2000);
							} else {
								self.$message.error(res.data.message);
							}
						});
					});
				}
			});
		},
		editSubmit() {
			let self = this;
			this.$refs.editForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true;
						let para = Object.assign({}, this.editForm);
						console.log(para);
						let sendData = {
							id: para.id,
							userName: para.userName,
							nickName: para.nickName,
							phone: para.phone,
							remark: para.remark
						};
						this.$http({
							method: 'put',
							url: '/v1/back/user/modify',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(sendData),
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						}).then(res => {
							//console.log(res,para)
							this.editFormVisible = false;
							this.editLoading = false;
							if (res.data.code == 200) {
								//NProgress.done();
								this.$message({
									message: res.data.message,
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.getTableData();
							} else {
								this.$message({
									message: res.data.message,
									type: 'error'
								});
							}
						});
					});
				}
			});
		},
		resetSubmit() {
			let self = this;
			this.$refs.resetForm.validate(valid => {
				if (valid) {
					this.$confirm('确认重置吗？', '提示', {}).then(() => {
						this.editLoading = true;
						let para = Object.assign({}, this.resetForm);
						console.log(para);
						let sendData = {
							id: para.id,
							password: __WEBPACK_IMPORTED_MODULE_1_js_md5___default()(para.password)
						};
						this.$http({
							method: 'put',
							url: '/v1/back/user/modify-password',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(sendData),
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						}).then(res => {
							//console.log(res,para)
							this.resetFormVisible = false;
							this.resetLoading = false;
							if (res.data.code == 200) {
								//NProgress.done();
								this.$message({
									message: res.data.message,
									type: 'success'
								});
								this.$refs['resetForm'].resetFields();
								//this.editFormVisible = false;
								this.getTableData();
							} else {
								this.$message({
									message: res.data.message,
									type: 'error'
								});
							}
						});
					});
				}
			});
		},
		handleOn(row) {
			let status, nowstatus;
			if (row.status == 1) {
				status = 0;
				nowstatus = '禁用';
			} else {
				status = 1;
				nowstatus = '启用';
			}
			this.$confirm('确认' + nowstatus + '该用户吗?', nowstatus, {
				type: 'warning'
			}).then(() => {
				let para = { userId: row.id, type: status };
				console.log(status);
				let self = this;
				this.$http({
					method: 'put',
					url: '/v1/back/user/disable',
					data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(res => {
					if (res.data.code == 200) {
						if (row.status == '0') {
							row.statusOn = '启用';
						} else if (row.status == '1') {
							row.statusOn = '禁用';
						};
						self.getTableData();
						self.$message({
							message: res.data.message,
							type: 'success'
						});
					} else {
						self.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				});
			});
		},
		handleReset(index, row) {
			this.resetFormVisible = true;
			this.resetForm.id = row.id;
			this.resetForm.password = '';
			console.log(this.resetForm);
		},
		handleEdit(index, row) {
			// console.log(row)
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
		},
		handleDel(index, row) {
			this.$confirm('确认删除该用户吗?', '删除用户', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				console.log(row.id);
				let para = { id: row.id };
				let self = this;
				this.$http({
					method: 'delete',
					url: '/v1/back/user/delete',
					params: para,
					headers: { 'Accept': 'application/json' }
				}).then(res => {
					self.listLoading = false;
					if (res.data.code == 200) {

						//NProgress.done();
						self.$message({
							message: '删除成功',
							type: 'success'
						});
						self.getTableData();
					} else {
						self.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				});
			}).catch(error => {
				self.listLoading = false;
				self.$message({
					message: res.data.message,
					type: 'error'
				});
			});
		},
		selsChange(sels) {
			this.sels = sels;
		},
		handleCurrentChange(val) {
			this.page = val;
			this.getTableData();
		},
		format(time, format) {
			var t = new Date(time);
			var tf = function (i) {
				return (i < 10 ? '0' : '') + i;
			};
			return format.replace(/yyyy|MM|dd|hh|mm|ss/g, function (a) {
				switch (a) {
					case 'yyyy':
						return tf(t.getFullYear());
						break;
					case 'MM':
						return tf(t.getMonth() + 1);
						break;
					case 'mm':
						return tf(t.getMinutes());
						break;
					case 'dd':
						return tf(t.getDate());
						break;
					case 'hh':
						return tf(t.getHours());
						break;
					case 'mm':
						return tf(t.getMinutes());
						break;
					case 'ss':
						return tf(t.getSeconds());
						break;
				}
			});
		}
	}
});

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_router__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuex_store__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_font_awesome_css_font_awesome_min_css__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_js_md5__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_js_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_qs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_js_zyet_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_MenuUtils__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_MenuUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__utils_MenuUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_loginCheck__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_loginCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_loginCheck__);





//import './assets/theme/theme-darkblue/index.css'



//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'

//import Mock from './mock'
//Mock.bootstrap();









__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_15__components_loginCheck___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_10_axios___default.a;

let usertoken = '',
    cid = '',
    cookies = '';
if (localStorage.getItem('token')) {
    usertoken = localStorage.getItem('token');
    cid = localStorage.getItem('userid');
    cookies = localStorage.getItem('cookies');
} else {
    usertoken = 'a095bc6f516a87ba65f91c85e5621265';
    cid = '';
    cookies = '';
}

__WEBPACK_IMPORTED_MODULE_10_axios___default.a.defaults.headers.common['token'] = usertoken;
__WEBPACK_IMPORTED_MODULE_10_axios___default.a.defaults.headers.common['cid'] = cid;
__WEBPACK_IMPORTED_MODULE_10_axios___default.a.defaults.headers.common['user_cookie'] = cookies;

//参数进行排序
function objKeySort(obj) {
    //排序的函数
    let objarr = __WEBPACK_IMPORTED_MODULE_12_qs___default.a.parse(obj);
    var newkey = Object.keys(objarr).sort();

    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = objarr[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
    }
    let rs = '';
    for (var key in newObj) {
        if (newObj[key] != '') {
            rs += key + newObj[key];
        }
    }
    return rs; //返回排好序的新对象
}

//获取url最后的字符
function splitUrl(url) {
    let b_arr = new Array(),
        b_str = '';
    b_arr = url.split('/');
    b_str = b_arr[b_arr.length - 1];
    return b_str;
}
let isEncrypt = true;
__WEBPACK_IMPORTED_MODULE_10_axios___default.a.interceptors.request.use(function (config) {
    if (isEncrypt) {
        let b_str = splitUrl(config.url),
            mid_str = '',
            e_str = 'zilot',
            times = new Date().getTime();
        if (config.method == 'get' || config.method == 'delete') {

            if (config.params) {
                config.params.timestamp = times;
                mid_str = objKeySort(__WEBPACK_IMPORTED_MODULE_12_qs___default.a.stringify(config.params));
                let signstr = __WEBPACK_IMPORTED_MODULE_11_js_md5___default()(b_str + mid_str + e_str).toUpperCase();
                config.params.sign = signstr;
            } else {

                let params = {
                    timestamp: times
                };
                config.params = params;
                mid_str = 'timestamp' + times;
                let signstr = __WEBPACK_IMPORTED_MODULE_11_js_md5___default()(b_str + mid_str + e_str).toUpperCase();
                config.params.sign = signstr;
            }

            let newobj = __WEBPACK_IMPORTED_MODULE_12_qs___default.a.parse(config.params);
            let para = {};
            for (var key in newobj) {
                if (newobj[key] != '') {
                    para[key] = __WEBPACK_IMPORTED_MODULE_13__common_js_zyet_js__["a" /* default */].encrypt(newobj[key] + '');
                }
            }
            config.params = para;
        } else {

            if (typeof config.data == 'object') {} else {
                config.data = config.data + '&timestamp=' + times;
                mid_str = objKeySort(config.data);
                let signstr = __WEBPACK_IMPORTED_MODULE_11_js_md5___default()(b_str + mid_str + e_str).toUpperCase();
                config.data = config.data + '&sign=' + signstr;
                let newobj = __WEBPACK_IMPORTED_MODULE_12_qs___default.a.parse(config.data);
                let para = {};
                for (var key in newobj) {
                    if (newobj[key] != '') {
                        para[key] = __WEBPACK_IMPORTED_MODULE_13__common_js_zyet_js__["a" /* default */].encrypt(newobj[key] + '');
                    }
                }
                config.data = __WEBPACK_IMPORTED_MODULE_12_qs___default.a.stringify(para);
            }
        }
    }
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    return Promise.reject(error);
});

// 响应时拦截
__WEBPACK_IMPORTED_MODULE_10_axios___default.a.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    return response;
}, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
});

const router = new __WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]({
    routes: __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */]
});

router.beforeEach((to, from, next) => {
    // let data = JSON.parse(localStorage.getItem('routers'));
    //NProgress.start();
    if (to.path == '/login') {
        localStorage.removeItem('token');
    }
    if (to.path) {
        next();
    } else {
        next({ path: '/404' });
    }
});

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
    //el: '#app',
    //template: '<App/>',
    router,
    store: __WEBPACK_IMPORTED_MODULE_6__vuex_store__["a" /* default */],
    //components: { App }
    render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const addMenu = ({ commit }, menuItems) => {
  if (menuItems.length > 0) {
    commit(types.ADD_MENU, menuItems);
  }
};
/* harmony export (immutable) */ __webpack_exports__["addMenu"] = addMenu;


const loadRoutes = ({ commit }) => {
  commit(types.LOAD_ROUTES);
};
/* harmony export (immutable) */ __webpack_exports__["loadRoutes"] = loadRoutes;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuitems", function() { return menuitems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadRoutes", function() { return isLoadRoutes; });
const menuitems = state => state.items;
const isLoadRoutes = state => state.isLoadRoutes;


/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/input_box.23f2c72.png";

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.3035af0.png";

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/user.1b01bad.jpeg";

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wecome.bc0c32c.jpeg";

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(554)

var Component = __webpack_require__(54)(
  /* script */
  null,
  /* template */
  __webpack_require__(581),
  /* scopeId */
  "data-v-7e7015d7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(553)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(268),
  /* template */
  __webpack_require__(580),
  /* scopeId */
  "data-v-54056220",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(552)
__webpack_require__(551)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(579),
  /* scopeId */
  "data-v-079175a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(550)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(270),
  /* template */
  __webpack_require__(577),
  /* scopeId */
  "data-v-04268eca",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.add_manager
    }
  }, [_vm._v("添加新用户")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.info,
      "border": "",
      "stripe": "",
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "tablenum",
      "label": "#",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "label": "用户名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "nickName",
      "label": "真实姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phone",
      "label": "手机号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createDate",
      "label": "创建日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lastLogin",
      "label": "最后登录时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "statusname",
      "label": "状态"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "380"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleOn(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.statusOn))]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleReset(scope.$index, scope.row)
            }
          }
        }, [_vm._v("重置密码")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("修改信息")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "layout": "total,prev, pager, next",
      "page-size": _vm.pagesize,
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "重置后台用户密码",
      "visible": _vm.resetFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.resetFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "resetForm",
    attrs: {
      "model": _vm.resetForm,
      "label-width": "100px",
      "rules": _vm.rules2
    }
  }, [_c('el-form-item', {
    staticClass: "pwd",
    attrs: {
      "label": "输入新密码",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off",
      "placeholder": "必填:长度在6到20"
    },
    model: {
      value: (_vm.resetForm.password),
      callback: function($$v) {
        _vm.$set(_vm.resetForm, "password", $$v)
      },
      expression: "resetForm.password"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.resetFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.resetSubmit($event)
      }
    }
  }, [_vm._v("使用新密码")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增",
      "visible": _vm.addFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "userName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填:长度2~20",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.userName),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "userName", $$v)
      },
      expression: "addForm.userName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填:长度6~20"
    },
    model: {
      value: (_vm.addForm.password),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "password", $$v)
      },
      expression: "addForm.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "真实姓名",
      "prop": "nickName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填:长度2~20"
    },
    model: {
      value: (_vm.addForm.nickName),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "nickName", $$v)
      },
      expression: "addForm.nickName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "手机号",
      "prop": "phone"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填"
    },
    model: {
      value: (_vm.addForm.phone),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "phone", $$v)
      },
      expression: "addForm.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.addForm.remark),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "remark", $$v)
      },
      expression: "addForm.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑",
      "visible": _vm.editFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.editFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "80px",
      "rules": _vm.rules
    }
  }, [(_vm.editForm.userName != 'superadmin') ? _c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "userName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填:2~20",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.userName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "userName", $$v)
      },
      expression: "editForm.userName"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "真实姓名",
      "prop": "nickName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填:2~20"
    },
    model: {
      value: (_vm.editForm.nickName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "nickName", $$v)
      },
      expression: "editForm.nickName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "手机号",
      "prop": "phone"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "必填"
    },
    model: {
      value: (_vm.editForm.phone),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "phone", $$v)
      },
      expression: "editForm.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "remark"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.editForm.remark),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "remark", $$v)
      },
      expression: "editForm.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.editSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "s-canvas"
  }, [_c('canvas', {
    attrs: {
      "id": "s-canvas",
      "width": _vm.contentWidth,
      "height": _vm.contentHeight
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_vm._m(0), _vm._v(" "), _c('el-form', {
    ref: "ruleForm2",
    staticClass: "demo-ruleForm login-container",
    attrs: {
      "model": _vm.ruleForm2,
      "rules": _vm.rules2,
      "label-position": "left",
      "label-width": "0px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "logo_box"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(569),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticStyle: {
      "display": "inline-block",
      "position": "relative",
      "top": "-10px",
      "margin-left": "10px",
      "color": "#2370f7",
      "font-size": "16px",
      "font-weight": "normal"
    }
  }, [_vm._v("自助邦运维系统")])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "account"
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "width": "30px",
      "position": "absolute",
      "margin-top": "5px",
      "z-index": "2"
    },
    attrs: {
      "src": __webpack_require__(567),
      "alt": ""
    }
  })]), _vm._v(" "), _c('el-input', {
    ref: "account",
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "placeholder": "账号"
    },
    model: {
      value: (_vm.ruleForm2.account),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "account", $$v)
      },
      expression: "ruleForm2.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "checkPass"
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "width": "30px",
      "position": "absolute",
      "margin-top": "5px",
      "z-index": "2"
    },
    attrs: {
      "src": __webpack_require__(570),
      "alt": ""
    }
  })]), _vm._v(" "), _c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.ruleForm2.checkPass),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "checkPass", $$v)
      },
      expression: "ruleForm2.checkPass"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-button', {
    staticClass: "submit_Btn",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "primary",
      "loading": _vm.logining
    },
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.handleSubmit2($event)
      }
    }
  }, [_vm._v("登录")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box_img"
  }, [_c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": __webpack_require__(568),
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "header",
    attrs: {
      "span": 24
    }
  }, [_c('el-col', {
    staticClass: "logo",
    class: _vm.collapsed ? 'logo-collapse-width' : 'logo-width',
    attrs: {
      "span": 10
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.collapsed ? '' : _vm.sysName) + "\n\t\t")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }), _vm._v(" "), _c('el-col', {
    staticClass: "userinfo",
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticStyle: {
      "float": "right",
      "margin-left": "10px"
    }
  }, [_vm._v(_vm._s(_vm.sysUserName))]), _vm._v(" "), _c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(571)
    }
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("退出登录")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: _vm.collapsed ? 'menu-collapsed' : 'menu-expanded'
  }, [_c('el-menu', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.$route.path,
      "unique-opened": "",
      "router": ""
    },
    on: {
      "open": _vm.handleopen,
      "close": _vm.handleclose,
      "select": _vm.handleselect
    }
  }, [_vm._l((_vm.nodes), function(item, index) {
    return (!item.hidden) ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('el-menu-item', {
        key: child.path,
        attrs: {
          "index": child.path
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    })], 2) : _vm._e(), _vm._v(" "), (item.leaf && item.children.length > 0) ? _c('el-menu-item', {
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.children[0].name))]) : _vm._e()] : _vm._e()
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    ref: "menuCollapsed",
    staticClass: "el-menu el-menu-vertical-demo collapsed"
  }, _vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden) ? _c('li', {
      staticClass: "el-submenu item"
    }, [(!item.leaf) ? [_c('div', {
      staticClass: "el-submenu__title",
      staticStyle: {
        "padding-left": "20px"
      },
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })]), _vm._v(" "), _c('ul', {
      staticClass: "el-menu submenu",
      class: 'submenu-hook-' + index,
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('li', {
        key: child.path,
        staticClass: "el-menu-item",
        class: _vm.$route.path == child.path ? 'is-active' : '',
        staticStyle: {
          "padding-left": "40px"
        },
        on: {
          "click": function($event) {
            _vm.$router.push(child.path)
          }
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    }))] : [_c('li', {
      staticClass: "el-submenu"
    }, [_c('div', {
      staticClass: "el-submenu__title el-menu-item",
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      staticStyle: {
        "padding-left": "20px",
        "height": "56px",
        "line-height": "56px",
        "padding": "0 20px"
      },
      on: {
        "click": function($event) {
          _vm.$router.push(item.children[0].path)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })])])]], 2) : _vm._e()
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "breadcrumb-container",
    style: ({
      height: _vm.bodyHeight + 'px'
    }),
    attrs: {
      "span": 24
    }
  }, [_c('ul', _vm._l((_vm.routerArr), function(item) {
    return _c('li', {
      key: item.name
    }, [_c('el-button', {
      staticClass: "open_btn",
      class: _vm.$route.name == item ? 'btn-active' : 'no-bg',
      on: {
        "click": function($event) {
          _vm.routeTo(item)
        }
      }
    }, [_vm._v(_vm._s(item))]), _vm._v(" "), _c('button', {
      staticClass: "close_btn",
      on: {
        "click": function($event) {
          _vm.removeRoute(item)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1)
  }))]), _vm._v(" "), _c('el-col', {
    staticClass: "content-wrapper",
    style: ({
      marginTop: _vm.bodyHeight + 'px'
    }),
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('keep-alive', [_c('router-view')], 1)], 1), _vm._v(" "), (_vm.$route.path == '/home') ? _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": __webpack_require__(572)
    }
  })]) : _vm._e()], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "page-container"
  }, [_vm._v("404 page not found")])
},staticRenderFns: []}

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ })

},[271]);
//# sourceMappingURL=app.274bf2b2bbde3eb69f6f.js.map