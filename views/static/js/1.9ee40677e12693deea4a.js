webpackJsonp([1],{

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(598)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(592),
  /* template */
  __webpack_require__(602),
  /* scopeId */
  "data-v-40f78194",
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

/***/ 592:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			info: [],
			listLoading: false,
			sels: [],
			page: 1,
			pagesize: 10,
			total: 0,
			addFormVisible: false,
			addLoading: false,
			editLoading: false,
			editFormVisible: false,
			rules: {
				name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
			},
			addForm: {
				name: ''
			}
			// editForm:{
			// 	content:'',
			// },
		};
	},
	mounted() {
		this.getTableData();
	},
	methods: {
		add_manager() {
			this.addFormVisible = true;
			this.addForm = {
				name: ''
			};
		},
		handleEdit(index, row) {
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
			this.editForm.id = row.id;
		},
		selsChange(sels) {
			this.sels = sels;
		},
		handleCurrentChange(val) {
			this.page = val;
			this.getTableData();
		},
		getTableData() {
			let self = this;
			let sendData = {
				page: this.page,
				number: this.pagesize
			};
			this.$http.get('/v2/back/pn-product/list', {
				headers: { 'Accept': 'application/json' },
				params: sendData
			}).then(function (res) {
				self.listLoading = false;
				if (res.data.code == 200) {
					if (res.data.data != null && res.data.data != '') {
						var data = res.data.data;
						self.total = res.data.count;
						for (var i = 0; i < data.length; i++) {
							let j = i + 1;
							data[i].tablenum = j;
							if (data[i].createTime != null && data[i].createTime != '') {
								data[i].createTime = __WEBPACK_IMPORTED_MODULE_1__common_js_util_js__["a" /* default */].formatDate.format(data[i].createTime, 'yyyy-MM-dd hh:mm:ss');
							}
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
		handleDel(index, row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				//NProgress.start();
				let para = { id: row.id };
				let self = this;
				this.$http({
					method: 'delete',
					url: '/v2/back/pn-product/delete',
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
			}).catch(() => {});
		},

		addSubmit() {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						//NProgress.start();
						let para = this.addForm;
						let self = this;
						this.$http({
							method: 'post',
							url: '/v2/back/pn-product/add',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(para),
							headers: { 'Accept': 'application/json' }
						}).then(res => {
							//console.log(res)
							self.addLoading = false;
							self.addFormVisible = false;
							self.addForm = {
								name: ''
							};
							if (res.data.code == 200) {
								self.$message({
									message: res.data.message,
									type: 'success'
								});
								self.getTableData();
							} else {
								self.$message({
									message: res.data.message,
									type: 'error'
								});
							}
							//NProgress.done();
						});
					});
				}
			});
		}
	}
});

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(585)();
// imports


// module
exports.push([module.i, "section[data-v-40f78194]{font-size:18px;font-weight:600}.el-table[data-v-40f78194],table[data-v-40f78194]{width:50%!important}", "", {"version":3,"sources":["/Users/lai_sytle/www/workspace/yunweiManagement/src/views/activitymanagement/activityProduct.vue"],"names":[],"mappings":"AACA,yBACC,eAAgB,AAChB,eAAiB,CACjB,AAID,kDACC,mBAAsB,CACtB","file":"activityProduct.vue","sourcesContent":["\nsection[data-v-40f78194]{\n\tfont-size: 18px;\n\tfont-weight: 600;\n}\n.el-table[data-v-40f78194]{\n\twidth: 50% !important;\n}\ntable[data-v-40f78194]{\n\twidth: 50% !important;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(594);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(586)("ba5a04b8", content, true);

/***/ }),

/***/ 602:
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
  }, [_vm._v("添加商品")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "创建时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
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
      "current-page": _vm.page,
      "page-size": _vm.pagesize,
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
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
      "label": "商品名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.name),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "name", $$v)
      },
      expression: "addForm.name"
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
        _vm.addSubmit()
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=1.9ee40677e12693deea4a.js.map