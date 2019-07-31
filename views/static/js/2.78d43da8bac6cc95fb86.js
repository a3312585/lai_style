webpackJsonp([2],{

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(599)

var Component = __webpack_require__(54)(
  /* script */
  __webpack_require__(593),
  /* template */
  __webpack_require__(603),
  /* scopeId */
  "data-v-59ae90ed",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 593:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			info: [],
			listLoading: false,
			sels: [],
			total: 0,
			page: 1,
			pagesize: 10,
			editFormVisible: false,
			editLoading: false,
			filters: {
				status: '',
				order_number: ''
			},
			rules: {
				logisticsCompanyName: [{ required: true, message: '请输入快递公司', trigger: 'blur' }],
				logisticsOrdersNumber: [{ required: true, message: '请输入快递单号', trigger: 'blur' }],
				remark: [{ required: true, message: '请输入客服备注', trigger: 'change' }]
			},
			editForm: {
				ordersNumber: '',
				logisticsCompanyName: '',
				logisticsOrdersNumber: '',
				remark: ''
			}
		};
	},
	mounted() {
		this.getTableData();
	},
	methods: {
		searchList() {
			this.getTableData();
		},
		getTableData() {
			let sendData = {
				number: this.pagesize,
				page: this.page,
				order_number: this.filters.order_number,
				status: this.filters.status
			};
			let self = this;
			this.$http.get('v2/back/orders/list', {
				headers: { 'Accept': 'application/json' },
				params: sendData
			}).then(function (res) {
				self.listLoading = false;
				if (res.data.code == 200) {
					if (res.data.data != null && res.data.data != '') {
						let data = res.data.data;
						for (var i = 0; i < data.length; i++) {
							let j = i + 1;
							data[i].tablenum = j;
							if (data[i].status == 1) {
								data[i].statusName = '已下单';
							} else {
								data[i].statusName = '已发货';
							}
						}
						self.info = data;
						self.total = res.data.count;
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
		editSubmit() {
			let self = this;
			this.$refs.editForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true;
						let para = Object.assign({}, this.editForm);
						console.log(para);
						let sendData = {
							ordersNumber: para.ordersNumber,
							logisticsCompanyName: para.logisticsCompanyName,
							logisticsOrdersNumber: para.logisticsOrdersNumber,
							remark: para.remark
						};
						this.$http({
							method: 'post',
							url: '/v2/back/orders/delivery',
							data: __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(sendData),
							headers: {
								'Accept': 'application/json'
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
								// this.$refs['editForm'].resetFields();
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
		handleEdit(index, row) {
			// console.log(row)
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
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

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(585)();
// imports


// module
exports.push([module.i, "section[data-v-59ae90ed]{font-size:18px;font-weight:600;.pwd{.el-form-item__label{width:100px!important}.el-form-item__content{margin-left:100px!important}}}div .el-select[data-v-59ae90ed]{width:100%!important}", "", {"version":3,"sources":["/Users/lai_sytle/www/workspace/yunweiManagement/src/views/ordermanagement/orderList.vue"],"names":[],"mappings":"AACA,yBACC,eAAgB,AAChB,gBAAiB,AAClB,KACA,qBACG,qBAAwB,CAC1B,AACD,uBACG,2BAA8B,CAChC,CACA,CACA,AACD,gCACC,oBAAuB,CACvB","file":"orderList.vue","sourcesContent":["\nsection[data-v-59ae90ed]{\n\tfont-size: 18px;\n\tfont-weight: 600;\n.pwd{\n.el-form-item__label{\n\t\t\twidth: 100px !important;\n}\n.el-form-item__content{\n\t\t\tmargin-left: 100px !important;\n}\n}\n}\ndiv .el-select[data-v-59ae90ed]{\n\twidth: 100% !important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(595);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(586)("06177afb", content, true);

/***/ }),

/***/ 603:
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
  }, [_c('el-form-item', [_c('el-select', {
    attrs: {
      "placeholder": "请选择订单类型"
    },
    model: {
      value: (_vm.filters.status),
      callback: function($$v) {
        _vm.$set(_vm.filters, "status", $$v)
      },
      expression: "filters.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": " "
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已下单",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已发货",
      "value": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "请输入订单号"
    },
    model: {
      value: (_vm.filters.order_number),
      callback: function($$v) {
        _vm.$set(_vm.filters, "order_number", $$v)
      },
      expression: "filters.order_number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.searchList()
      }
    }
  }, [_vm._v(" 查询 ")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "statusName",
      "label": "订单状态",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "consigneeName",
      "label": "姓名",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "consigneePhone",
      "label": "手机号",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "prizeType",
      "label": "奖品类型",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ordersNumber",
      "label": "订单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "prizeName",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "consigneeAddress",
      "label": "地址"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "90"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.status == 1) ? _c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("发货")]) : _vm._e()]
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
  }, [_c('el-form-item', {
    attrs: {
      "label": "订单号",
      "prop": "ordersNumber"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.ordersNumber),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "ordersNumber", $$v)
      },
      expression: "editForm.ordersNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "物流名称",
      "prop": "logisticsCompanyName"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.editForm.logisticsCompanyName),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "logisticsCompanyName", $$v)
      },
      expression: "editForm.logisticsCompanyName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "物流单号",
      "prop": "logisticsOrdersNumber"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.editForm.logisticsOrdersNumber),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "logisticsOrdersNumber", $$v)
      },
      expression: "editForm.logisticsOrdersNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "客服备注",
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
      "loading": _vm.editLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.editSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=2.78d43da8bac6cc95fb86.js.map