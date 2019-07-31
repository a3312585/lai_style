webpackJsonp([0],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(601)
__webpack_require__(600)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(591),
  /* template */
  __webpack_require__(604),
  /* scopeId */
  "data-v-cce264a6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null) context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {

        format: function (time, format) {
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
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);break;
                        case 'M':
                            _date.setMonth(_int - 1);break;
                        case 'd':
                            _date.setDate(_int);break;
                        case 'h':
                            _date.setHours(_int);break;
                        case 'm':
                            _date.setMinutes(_int);break;
                        case 's':
                            _date.setSeconds(_int);break;
                    }
                }
                return _date;
            }
            return null;
        }

    }

});

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_util_js__ = __webpack_require__(590);
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
			productList: [],
			times: '',
			listLoading: false,
			addFormVisible: false,
			addLoading: false,
			timeFormVisible: false,
			timeLoading: false,
			rules: {
				first_prize_num: [{ required: true, message: '请输入一等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				second_prize_num: [{ required: true, message: '请输入二等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				third_prize_num: [{ required: true, message: '请输入三等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				fourth_prize_num: [{ required: true, message: '请输入四等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				fifth_prize_num: [{ required: true, message: '请输入五等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],
				sixth_prize_num: [{ required: true, message: '请输入六等奖次数', trigger: 'blur' }, { type: 'number', message: '请输入数字', trigger: 'blur', transform(value) {
						return Number(value);
					} }],

				first_prize_type: [{ required: true, message: '请选择一等奖类型', trigger: 'blur' }],
				second_prize_type: [{ required: true, message: '请选择二等奖类型', trigger: 'blur' }],
				third_prize_type: [{ required: true, message: '请选择三等奖类型', trigger: 'blur' }],
				fourth_prize_type: [{ required: true, message: '请选择四等奖类型', trigger: 'blur' }],
				fifth_prize_type: [{ required: true, message: '请选择五等类型', trigger: 'blur' }],
				sixth_prize_type: [{ required: true, message: '请选择六等奖类型', trigger: 'blur' }],

				first_prize: [{ required: true, message: '一等奖奖品不能为空', trigger: 'blur' }],
				second_prize: [{ required: true, message: '二等奖奖品不能为空', trigger: 'blur' }],
				third_prize: [{ required: true, message: '三等奖奖品不能为空', trigger: 'blur' }],
				// fourth_prize: [
				//     { required: true, message: '四等奖奖品不能为空', trigger: 'blur' },
				//  ],
				// fifth_prize:[
				//   	{ required: true, message: '五等奖奖品不能为空', trigger: 'blur' },
				// ],
				// sixth_prize:[
				// 	{ required: true, message: '六等奖奖品不能为空', trigger: 'blur' },
				// ],			       
				total_number: [{ required: true, message: '请输入抽奖次数', trigger: 'blur' }]
			},
			timeForm: {
				time: ''
			},
			addForm: {
				first_prize_num: '',
				second_prize_num: '',
				third_prize_num: '',
				fourth_prize_num: '',
				fifth_prize_num: '',
				sixth_prize_num: '',

				first_prize_type: '',
				second_prize_type: '',
				third_prize_type: '',
				fourth_prize_type: '',
				fifth_prize_type: '',
				sixth_prize_type: '',

				first_prize: '',
				second_prize: '',
				third_prize: '',
				fourth_prize: '',
				fifth_prize: '',
				sixth_prize: '',

				total_number: ''
			}
		};
	},
	mounted() {
		this.getproductList();
		this.getTime();
		this.getTableData();
	},
	methods: {
		getproductList() {
			let self = this;
			this.$http.get('/v2/back/pn-product/all', {
				headers: { 'Accept': 'application/json' }
			}).then(function (res) {
				if (res.data.code == 200) {
					if (res.data.data != null && res.data.data != '') {
						self.productList = res.data.data;
					}
				} else if (res.data.code == 401) {
					self.$message.error(res.data.message);
					setTimeout(function () {
						self.$router.push({ path: '/login' });
					}, 2000);
				} else {
					self.$message.error(res.data.message);
				}
			}).catch(function (error) {
				console.log(error);
			});
		},
		getPrizeNum(val) {
			let prizeName = '';
			if (val == 0 || val == '不限制') {
				prizeName = '不限制';
			} else if (val == -1 || val == '不出现') {
				prizeName = '不出现';
			} else if (val > 0) {
				prizeName = val;
			}
			return prizeName;
		},
		thePrizeNum(val) {
			let prizeNum = '';
			if (val == '不限制' || val == 0) {
				prizeNum = 0;
			} else if (val == '不出现' || val == -1) {
				prizeNum = -1;
			} else {
				prizeNum = val;
			}
			return prizeNum;
		},
		getTime() {
			let self = this;
			this.$http.get('/v2/back/luckdraw-valid/config-get', {
				headers: { 'Accept': 'application/json' }
			}).then(function (res) {
				self.listLoading = false;
				if (res.data.code == 200) {
					let data = res.data.data;
					self.times = data.beginTime + '至' + data.endTime;
				} else {
					self.times = '暂未设置';
				}
			});
		},
		getTableData() {
			let self = this;
			this.$http.get('/v2/back/luckdraw/config-get', {
				headers: { 'Accept': 'application/json' }
			}).then(function (res) {
				self.listLoading = false;
				if (res.data.code == 200) {
					// console.log(res);
					if (res.data.data != null && res.data.data != '') {

						var data = res.data.data;
						data.firstPrizeNum = self.getPrizeNum(data.firstPrizeNum);
						data.secondPrizeNum = self.getPrizeNum(data.secondPrizeNum);
						data.thirdPrizeNum = self.getPrizeNum(data.thirdPrizeNum);
						data.fourthPrizeNum = self.getPrizeNum(data.fourthPrizeNum);
						data.fifthPrizeNum = self.getPrizeNum(data.fifthPrizeNum);
						data.sixthPrizeNum = self.getPrizeNum(data.sixthPrizeNum);
						if (data.firstPrizeType == 1) {
							data.firstPrizeTypeN = '商品';
							data.firstPrizeN = data.firstPrizeName;
						} else if (data.firstPrizeType == 2) {
							data.firstPrizeTypeN = '双色球彩票';
							data.firstPrizeN = data.firstPrize;
						} else if (data.firstPrizeType == 3) {
							data.firstPrizeTypeN = '五元即开彩票';
							data.firstPrizeN = data.firstPrize;
						} else {
							data.firstPrizeTypeN = '无';
							data.firstPrizeN = '无';
						}
						if (data.secondPrizeType == 1) {
							data.secondPrizeTypeN = '商品';
							data.secondPrizeN = data.secondPrizeName;
						} else if (data.secondPrizeType == 2) {
							data.secondPrizeTypeN = '双色球彩票';
							data.secondPrizeN = data.secondPrizeName;
						} else if (data.secondPrizeType == 3) {
							data.secondPrizeTypeN = '五元即开彩票';
							data.secondPrizeN = data.secondPrizeName;
						} else {
							data.secondPrizeTypeN = '无';
							data.secondPrizeN = '无';
						}
						if (data.thirdPrizeType == 1) {
							data.thirdPrizeTypeN = '商品';
							data.thirdPrizeN = data.thirdPrizeName;
						} else if (data.thirdPrizeType == 2) {
							data.thirdPrizeTypeN = '双色球彩票';
							data.thirdPrizeN = data.thirdPrize;
						} else if (data.thirdPrizeType == 3) {
							data.thirdPrizeTypeN = '五元即开彩票';
							data.thirdPrizeN = data.thirdPrize;
						} else {
							data.firstPrizeTypeN = '无';
							data.thirdPrizeN = '无';
						}
						if (data.fourthPrizeType == 1) {
							data.fourthPrizeTypeN = '商品';
							data.fourthPrizeN = data.fourthPrizeName;
						} else if (data.fourthPrizeType == 2) {
							data.fourthPrizeTypeN = '双色球彩票';
							data.fourthPrizeN = data.fourthPrize;
						} else if (data.fourthPrizeType == 3) {
							data.fourthPrizeTypeN = '五元即开彩票';
							data.fourthPrizeN = data.fourthPrize;
						} else {
							data.fourthPrizeTypeN = '无';
							data.fourthPrizeN = '无';
						}
						if (data.fifthPrizeType == 1) {
							data.fifthPrizeTypeN = '商品';
							data.fifthPrizeN = data.fifthPrizeName;
						} else if (data.fifthPrizeType == 2) {
							data.fifthPrizeTypeN = '双色球彩票';
							data.fifthPrizeN = data.fifthPrize;
						} else if (data.fifthPrizeType == 3) {
							data.fifthPrizeTypeN = '五元即开彩票';
							data.fifthPrizeN = data.fifthPrize;
						} else {
							data.fifthPrizeTypeN = '无';
							data.fifthPrizeN = '无';
						}
						if (data.sixthPrizeType == 1) {
							data.sixthPrizeTypeN = '商品';
							data.sixthPrizeN = data.sixthPrizeName;
						} else if (data.sixthPrizeType == 2) {
							data.sixthPrizeTypeN = '双色球彩票';
							data.sixthPrizeN = data.sixthPrize;
						} else if (data.sixthPrizeType == 3) {
							data.sixthPrizeTypeN = '五元即开彩票';
							data.sixthPrizeN = data.sixthPrize;
						} else {
							data.sixthPrizeTypeN = '无';
							data.sixthPrizeN = '无';
						}
						self.info = data;
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
			}).catch(function (error) {
				console.log(error);
			});
		},
		timeConfig() {
			this.timeFormVisible = true;
		},
		doConfig() {
			this.addFormVisible = true;
			if (this.info.length != 0) {
				this.addForm = {
					first_prize_num: this.thePrizeNum(this.info.firstPrizeNum),
					second_prize_num: this.thePrizeNum(this.info.secondPrizeNum),
					third_prize_num: this.thePrizeNum(this.info.thirdPrizeNum),
					fourth_prize_num: this.thePrizeNum(this.info.fourthPrizeNum),
					fifth_prize_num: this.thePrizeNum(this.info.fifthPrizeNum),
					sixth_prize_num: this.thePrizeNum(this.info.sixthPrizeNum),

					first_prize_type: this.info.firstPrizeTypeN,
					second_prize_type: this.info.secondPrizeTypeN,
					third_prize_type: this.info.thirdPrizeTypeN,
					fourth_prize_type: this.info.fourthPrizeTypeN,
					fifth_prize_type: this.info.fifthPrizeTypeN,
					sixth_prize_type: this.info.sixthPrizeTypeN,

					first_prize: this.info.firstPrizeN,
					second_prize: this.info.secondPrizeN,
					third_prize: this.info.thirdPrizeN,
					fourth_prize: this.info.fourthPrizeN,
					fifth_prize: this.info.fifthPrizeN,
					sixth_prize: this.info.sixthPrizeN,

					total_number: this.info.totalNumber
				};
			} else {
				this.addForm = {
					first_prize_num: '',
					second_prize_num: '',
					third_prize_num: '',
					fourth_prize_num: '',
					fifth_prize_num: '',
					sixth_prize_num: '',

					first_prize_type: '',
					second_prize_type: '',
					third_prize_type: '',
					fourth_prize_type: '',
					fifth_prize_type: '',
					sixth_prize_type: '',

					first_prize: '',
					second_prize: '',
					third_prize: '',
					fourth_prize: '',
					fifth_prize: '',
					sixth_prize: '',

					total_number: ''
				};
			}
		},
		turnType(val) {
			let newVal = '';
			if (val == '商品' || val == '1') {
				newVal = '1';
			} else if (val == '双色球彩票' || val == '2') {
				newVal = '2';
			} else if (val == '五元即开彩票' || val == '3') {
				newVal = '3';
			} else if (val == '无' || val == '0') {
				newVal = '0';
			}
			return newVal;
		},
		turnProductId(val) {
			if (isNaN(val)) {
				let arr = this.productList;
				if (val != '无') {
					if (this.productList && this.productList != null) {
						for (var i = 0; i < arr.length; i++) {
							if (val == arr[i].name) {
								return arr[i].id;
							}
						}
					}
				} else {
					return '0';
				}
			} else {
				return val;
			}
		},
		timeSubmit() {
			this.$refs.timeForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						let arr = Object.assign({}, this.timeForm);

						this.timeLoading = true;
						let para = {
							begin_time: __WEBPACK_IMPORTED_MODULE_1__common_js_util_js__["a" /* default */].formatDate.format(arr.time[0], 'yyyy-MM-dd'),
							end_time: __WEBPACK_IMPORTED_MODULE_1__common_js_util_js__["a" /* default */].formatDate.format(arr.time[1], 'yyyy-MM-dd')
						};
						console.log(arr, para);
						let self = this;
						this.$http({
							method: 'post',
							url: '/v2/back/luckdraw-valid/config',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
							headers: { 'Accept': 'application/json' }
						}).then(res => {
							self.timeLoading = false;
							if (res.data.code == 200) {
								//NProgress.done();
								self.$message({
									message: res.data.message,
									type: 'success'
								});
								self.timeFormVisible = false;
								self.getTime();
							} else {
								self.$message({
									message: res.data.message,
									type: 'error'
								});
							}
						}).catch(function (error) {
							self.timeLoading = false;
							console.log(error);
						});
					});
				}
			});
		},
		addSubmit() {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					let arr = Object.assign({}, this.addForm);
					if (arr.total_number < 100) {
						return this.$message.error('抽奖次数不低于100');
					}
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						if (arr.sixth_prize_type == 0) {
							arr.sixth_prize = 0;
						}
						if (arr.sixth_prize_type == 2) {
							arr.sixth_prize = 2;
						}
						if (arr.sixth_prize_type == 3) {
							arr.sixth_prize = 3;
						}
						if (arr.fifth_prize_type == 2) {
							arr.fifth_prize = 2;
						}
						if (arr.fifth_prize_type == 3) {
							arr.fifth_prize = 3;
						}
						if (arr.fourth_prize_type == 3) {
							arr.fourth_prize = 3;
						}
						if (arr.fourth_prize_type == 2) {
							arr.fourth_prize = 2;
						}
						console.log(arr);
						let para = {
							first_prize_num: arr.first_prize_num,
							second_prize_num: arr.second_prize_num,
							third_prize_num: arr.third_prize_num,
							fourth_prize_num: arr.fourth_prize_num,
							fifth_prize_num: arr.fifth_prize_num,
							sixth_prize_num: arr.sixth_prize_num,

							first_prize_type: this.turnType(arr.first_prize_type),
							second_prize_type: this.turnType(arr.second_prize_type),
							third_prize_type: this.turnType(arr.third_prize_type),
							fourth_prize_type: this.turnType(arr.fourth_prize_type),
							fifth_prize_type: this.turnType(arr.fifth_prize_type),
							sixth_prize_type: this.turnType(arr.sixth_prize_type),

							first_prize: this.turnProductId(arr.first_prize),
							second_prize: this.turnProductId(arr.second_prize),
							third_prize: this.turnProductId(arr.third_prize),
							fourth_prize: arr.fourth_prize,
							fifth_prize: arr.fifth_prize,
							sixth_prize: arr.sixth_prize,
							total_number: arr.total_number
						};
						let self = this;
						this.$http({
							method: 'post',
							url: '/v2/back/luckdraw/config',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
							headers: { 'Accept': 'application/json' }
						}).then(res => {

							self.addLoading = false;
							if (res.data.code == 200) {
								//NProgress.done();
								self.$message({
									message: res.data.message,
									type: 'success'
								});
								self.addFormVisible = false;
								self.getTableData();
							} else {
								self.$message({
									message: res.data.message,
									type: 'error'
								});
							}
						}).catch(function (error) {
							self.addLoading = false;
							console.log(error);
						});
					});
				}
			});
		}
	}
});

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(585)();
// imports


// module
exports.push([module.i, ".theForm{display:flex}.activityConfig .el-dialog__wrapper .el-dialog{width:1000px!important}.theNum,.thePrize{margin-left:20px}.thePrize .el-form-item .el-input,.thePrize .el-form-item .el-select{width:300px!important}.time_hint{color:red;font-size:12px;line-height:1;top:70px;position:absolute}", "", {"version":3,"sources":["/Users/lai_sytle/www/workspace/yunweiManagement/src/views/activitymanagement/activityConfig.vue"],"names":[],"mappings":"AACA,SACE,YAAc,CACf,AACD,+CACE,sBAAyB,CAC1B,AACD,kBACE,gBAAkB,CACnB,AAID,qEACE,qBAAwB,CACzB,AACD,WACE,UAAW,AACX,eAAgB,AAChB,cAAe,AACf,SAAU,AACV,iBAAmB,CACpB","file":"activityConfig.vue","sourcesContent":["\n.theForm {\n  display: flex;\n}\n.activityConfig .el-dialog__wrapper .el-dialog {\n  width: 1000px !important;\n}\n.thePrize, .theNum {\n  margin-left: 20px;\n}\n.thePrize .el-form-item .el-input {\n  width: 300px !important;\n}\n.thePrize .el-form-item .el-select {\n  width: 300px !important;\n}\n.time_hint {\n  color: red;\n  font-size: 12px;\n  line-height: 1;\n  top: 70px;\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(585)();
// imports


// module
exports.push([module.i, ".activityConfig .content[data-v-cce264a6]{min-width:1500px;position:absolute;top:250px}.activityConfig span[data-v-cce264a6]{display:inline-block;margin-right:16px}.activityConfig .empty_content[data-v-cce264a6]{text-align:center}.activityConfig .space_content[data-v-cce264a6]{position:absolute;top:30%;left:50%}.activityConfig .box[data-v-cce264a6]{margin-left:60px;display:flex;justify-content:space-around;width:100%}.activityConfig .header[data-v-cce264a6]{text-align:center;font-size:20px;font-weight:600}.activityConfig .rowdiv[data-v-cce264a6]{width:100%;margin-bottom:20px;text-align:left}.activityConfig .rate_box[data-v-cce264a6],.activityConfig .type_box[data-v-cce264a6]{width:20%}.activityConfig .prize_box[data-v-cce264a6]{width:60%}.activityConfig .footer[data-v-cce264a6]{display:flex;text-indent:60px}.activityConfig .goodstime[data-v-cce264a6],.activityConfig .intergral[data-v-cce264a6],.activityConfig .totalNumber[data-v-cce264a6]{width:300px}.activityConfig .theNum .el-form-item[data-v-cce264a6],.activityConfig .thePrizeType .el-form-item[data-v-cce264a6]{width:240px!important}.activityConfig .theNum .el-form-item .el-form-item__content .el-input[data-v-cce264a6],.activityConfig .thePrizeType .el-form-item .el-form-item__content .el-input[data-v-cce264a6]{width:60%}.activityConfig .theNum .el-form-item .el-form-item__content .el-select[data-v-cce264a6],.activityConfig .thePrizeType .el-form-item .el-form-item__content .el-select[data-v-cce264a6]{width:100%}", "", {"version":3,"sources":["/Users/lai_sytle/www/workspace/yunweiManagement/src/views/activitymanagement/activityConfig.vue"],"names":[],"mappings":"AACA,0CACE,iBAAkB,AAClB,kBAAmB,AACnB,SAAW,CACZ,AACD,sCACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,gDACE,iBAAmB,CACpB,AACD,gDACE,kBAAmB,AACnB,QAAS,AACT,QAAU,CACX,AACD,sCACE,iBAAkB,AAClB,aAAc,AACd,6BAA8B,AAC9B,UAAY,CACb,AACD,yCACE,kBAAmB,AACnB,eAAgB,AAChB,eAAiB,CAClB,AACD,yCACE,WAAY,AACZ,mBAAoB,AACpB,eAAiB,CAClB,AAID,sFACE,SAAW,CACZ,AACD,4CACE,SAAW,CACZ,AACD,yCACE,aAAc,AACd,gBAAkB,CACnB,AAOD,sIACE,WAAa,CACd,AACD,oHACE,qBAAwB,CACzB,AACD,sLACI,SAAW,CACd,AACD,wLACI,UAAY,CACf","file":"activityConfig.vue","sourcesContent":["\n.activityConfig .content[data-v-cce264a6] {\n  min-width: 1500px;\n  position: absolute;\n  top: 250px;\n}\n.activityConfig span[data-v-cce264a6] {\n  display: inline-block;\n  margin-right: 16px;\n}\n.activityConfig .empty_content[data-v-cce264a6] {\n  text-align: center;\n}\n.activityConfig .space_content[data-v-cce264a6] {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n}\n.activityConfig .box[data-v-cce264a6] {\n  margin-left: 60px;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.activityConfig .header[data-v-cce264a6] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.activityConfig .rowdiv[data-v-cce264a6] {\n  width: 100%;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.activityConfig .rate_box[data-v-cce264a6] {\n  width: 20%;\n}\n.activityConfig .type_box[data-v-cce264a6] {\n  width: 20%;\n}\n.activityConfig .prize_box[data-v-cce264a6] {\n  width: 60%;\n}\n.activityConfig .footer[data-v-cce264a6] {\n  display: flex;\n  text-indent: 60px;\n}\n.activityConfig .intergral[data-v-cce264a6] {\n  width: 300px;\n}\n.activityConfig .goodstime[data-v-cce264a6] {\n  width: 300px;\n}\n.activityConfig .totalNumber[data-v-cce264a6] {\n  width: 300px;\n}\n.activityConfig .thePrizeType .el-form-item[data-v-cce264a6], .activityConfig .theNum .el-form-item[data-v-cce264a6] {\n  width: 240px !important;\n}\n.activityConfig .thePrizeType .el-form-item .el-form-item__content .el-input[data-v-cce264a6], .activityConfig .theNum .el-form-item .el-form-item__content .el-input[data-v-cce264a6] {\n    width: 60%;\n}\n.activityConfig .thePrizeType .el-form-item .el-form-item__content .el-select[data-v-cce264a6], .activityConfig .theNum .el-form-item .el-form-item__content .el-select[data-v-cce264a6] {\n    width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(596);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(586)("26435c20", content, true);

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(586)("1b9ac026", content, true);

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "activityConfig"
  }, [_c('el-col', {
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
      "float": "left"
    }
  }, [_c('div', {
    staticStyle: {
      "color": "red",
      "font-size": "18px"
    }
  }, [_vm._v("配置须知:该配置次日零点生效!")])]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.timeConfig
    }
  }, [_vm._v("活动截止日期设置")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doConfig
    }
  }, [_vm._v("编辑配置")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "absolute",
      "margin-top": "120px",
      "margin-left": "60px",
      "font-size": "20px"
    }
  }, [_vm._v("活动日期: "), _c('span', {
    staticStyle: {
      "margin-left": "50px"
    }
  }, [_vm._v(_vm._s(_vm.times))])]), _vm._v(" "), (_vm.info.length != 0) ? _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "rate_box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "time_hint",
    staticStyle: {
      "margin-top": "-40px"
    }
  }, [_vm._v("每N次抽奖各奖项中奖次数;(N为抽奖次数)")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("一等奖次数:")]), _vm._v(_vm._s(_vm.info.firstPrizeNum) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("二等奖次数:")]), _vm._v(_vm._s(_vm.info.secondPrizeNum) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("三等奖次数:")]), _vm._v(_vm._s(_vm.info.thirdPrizeNum) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("四等奖次数:")]), _vm._v(_vm._s(_vm.info.fourthPrizeNum) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("五等奖次数:")]), _vm._v(_vm._s(_vm.info.fifthPrizeNum) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("六等奖次数:")]), _vm._v(_vm._s(_vm.info.sixthPrizeNum) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "type_box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("一等奖类型:")]), _vm._v(_vm._s(_vm.info.firstPrizeTypeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("二等奖类型:")]), _vm._v(_vm._s(_vm.info.secondPrizeTypeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("三等奖类型:")]), _vm._v(_vm._s(_vm.info.thirdPrizeTypeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("四等奖类型:")]), _vm._v(_vm._s(_vm.info.fourthPrizeTypeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("五等奖类型:")]), _vm._v(_vm._s(_vm.info.fifthPrizeTypeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("六等奖类型:")]), _vm._v(_vm._s(_vm.info.sixthPrizeTypeN))])]), _vm._v(" "), _c('div', {
    staticClass: "prize_box"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("一等奖奖品:")]), _vm._v(_vm._s(_vm.info.firstPrizeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("二等奖奖品:")]), _vm._v(_vm._s(_vm.info.secondPrizeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("三等奖奖品:")]), _vm._v(_vm._s(_vm.info.thirdPrizeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("四等奖奖品:")]), _vm._v(_vm._s(_vm.info.fourthPrizeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("五等奖奖品:")]), _vm._v(_vm._s(_vm.info.fifthPrizeN))]), _vm._v(" "), _c('div', {
    staticClass: "rowdiv"
  }, [_c('span', [_vm._v("六等奖奖品:")]), _vm._v(_vm._s(_vm.info.sixthPrizeN))])])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "totalNumber"
  }, [_vm._v("抽奖次数(次) : " + _vm._s(_vm.info.totalNumber) + " ")])])]) : _vm._e(), _vm._v(" "), (_vm.info.length == 0) ? _c('div', {
    staticClass: "empty_content"
  }, [_c('div', {
    staticClass: "space_content"
  }, [_vm._v("暂无配置内容")])]) : _vm._e(), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑活动配置",
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
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('div', {
    staticClass: "theForm"
  }, [_c('div', {
    staticClass: "theType"
  }, [_c('el-form-item', {
    attrs: {
      "label": "一等奖类型",
      "prop": "first_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.first_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "first_prize_type", $$v)
      },
      expression: "addForm.first_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "二等奖类型",
      "prop": "second_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.second_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "second_prize_type", $$v)
      },
      expression: "addForm.second_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "三等奖类型",
      "prop": "third_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.third_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "third_prize_type", $$v)
      },
      expression: "addForm.third_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "四等奖类型",
      "prop": "fourth_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.fourth_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fourth_prize_type", $$v)
      },
      expression: "addForm.fourth_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "五等奖类型",
      "prop": "fifth_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.fifth_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fifth_prize_type", $$v)
      },
      expression: "addForm.fifth_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "六等奖类型",
      "prop": "sixth_prize_type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.sixth_prize_type),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sixth_prize_type", $$v)
      },
      expression: "addForm.sixth_prize_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "商品",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "双色球彩票",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "五元即开彩票",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "无",
      "value": "0"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "theNum"
  }, [_c('el-form-item', {
    attrs: {
      "label": "一等奖次数",
      "prop": "first_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.first_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "first_prize_num", $$v)
      },
      expression: "addForm.first_prize_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "二等奖次数",
      "prop": "second_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.second_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "second_prize_num", $$v)
      },
      expression: "addForm.second_prize_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "三等奖次数",
      "prop": "third_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.third_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "third_prize_num", $$v)
      },
      expression: "addForm.third_prize_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "四等奖次数",
      "prop": "fourth_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fourth_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fourth_prize_num", $$v)
      },
      expression: "addForm.fourth_prize_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "五等奖次数",
      "prop": "fifth_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fifth_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fifth_prize_num", $$v)
      },
      expression: "addForm.fifth_prize_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "六等奖次数",
      "prop": "sixth_prize_num"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.sixth_prize_num),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sixth_prize_num", $$v)
      },
      expression: "addForm.sixth_prize_num"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "time_hint"
  }, [_vm._v("次数:抽奖次数里面出现多少次,0代表不限制,-1代表不出现!")])], 1), _vm._v(" "), _c('div', {
    staticClass: "thePrize"
  }, [_c('el-form-item', {
    attrs: {
      "label": "一等奖奖品",
      "prop": "first_prize"
    }
  }, [(_vm.addForm.first_prize_type == 1 || _vm.addForm.first_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.first_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "first_prize", $$v)
      },
      expression: "addForm.first_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.first_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.first_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "first_prize", $$v)
      },
      expression: "addForm.first_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.first_prize_type == 2 || !_vm.addForm.first_prize_type || _vm.addForm.first_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.first_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "first_prize", $$v)
      },
      expression: "addForm.first_prize"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "二等奖奖品",
      "prop": "second_prize"
    }
  }, [(_vm.addForm.second_prize_type == 1 || _vm.addForm.second_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.second_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "second_prize", $$v)
      },
      expression: "addForm.second_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.second_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.second_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "second_prize", $$v)
      },
      expression: "addForm.second_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.second_prize_type == 2 || !_vm.addForm.second_prize_type || _vm.addForm.second_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.second_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "second_prize", $$v)
      },
      expression: "addForm.second_prize"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "三等奖奖品",
      "prop": "third_prize"
    }
  }, [(_vm.addForm.third_prize_type == 1 || _vm.addForm.third_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.third_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "third_prize", $$v)
      },
      expression: "addForm.third_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.third_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.third_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "third_prize", $$v)
      },
      expression: "addForm.third_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.third_prize_type == 2 || !_vm.addForm.third_prize_type || _vm.addForm.third_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.third_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "third_prize", $$v)
      },
      expression: "addForm.third_prize"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "四等奖奖品",
      "prop": "fourth_prize"
    }
  }, [(_vm.addForm.fourth_prize_type == 1 || _vm.addForm.fourth_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.fourth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fourth_prize", $$v)
      },
      expression: "addForm.fourth_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.fourth_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fourth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fourth_prize", $$v)
      },
      expression: "addForm.fourth_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.fourth_prize_type == 2 || !_vm.addForm.fourth_prize_type || _vm.addForm.fourth_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fourth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fourth_prize", $$v)
      },
      expression: "addForm.fourth_prize"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "五等奖奖品",
      "prop": "fifth_prize"
    }
  }, [(_vm.addForm.fifth_prize_type == 1 || _vm.addForm.fifth_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.fifth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fifth_prize", $$v)
      },
      expression: "addForm.fifth_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.fifth_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fifth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fifth_prize", $$v)
      },
      expression: "addForm.fifth_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.fifth_prize_type == 2 || !_vm.addForm.fifth_prize_type || _vm.addForm.fifth_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.fifth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "fifth_prize", $$v)
      },
      expression: "addForm.fifth_prize"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "六等奖奖品",
      "prop": "sixth_prize"
    }
  }, [(_vm.addForm.sixth_prize_type == 1 || _vm.addForm.sixth_prize_type == '商品') ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.addForm.sixth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sixth_prize", $$v)
      },
      expression: "addForm.sixth_prize"
    }
  }, _vm._l((_vm.productList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.addForm.sixth_prize_type == 3) ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字(能量)",
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.sixth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sixth_prize", $$v)
      },
      expression: "addForm.sixth_prize"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.addForm.sixth_prize_type == 2 || !_vm.addForm.sixth_prize_type || _vm.addForm.sixth_prize_type == '能量') ? _c('el-input', {
    attrs: {
      "placeholder": "请填写数字",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.sixth_prize),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sixth_prize", $$v)
      },
      expression: "addForm.sixth_prize"
    }
  }) : _vm._e()], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "380px !important"
    },
    attrs: {
      "label": "抽奖次数",
      "prop": "total_number"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请填写数字(天)",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.total_number),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "total_number", $$v)
      },
      expression: "addForm.total_number"
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
      "title": "编辑活动配置",
      "visible": _vm.timeFormVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.timeFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "timeForm",
    attrs: {
      "model": _vm.timeForm,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "活动日期",
      "prop": "time"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    model: {
      value: (_vm.timeForm.time),
      callback: function($$v) {
        _vm.$set(_vm.timeForm, "time", $$v)
      },
      expression: "timeForm.time"
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
        _vm.timeFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.timeLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.timeSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rowdiv header"
  }, [_c('span', [_vm._v(" 奖励次数 ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rowdiv header"
  }, [_c('span', [_vm._v(" 奖品类型")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rowdiv header"
  }, [_c('span', [_vm._v(" 具体奖品")])])
}]}

/***/ })

});
//# sourceMappingURL=0.3105d559f7e0304318e1.js.map