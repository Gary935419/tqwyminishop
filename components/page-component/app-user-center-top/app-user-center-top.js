(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["components/page-component/app-user-center-top/app-user-center-top"], {
		"3c4e": function(e, t, n) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = void 0;
				var r = n("2f62");

				function i(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter(function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						})), n.push.apply(n, r)
					}
					return n
				}

				function a(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(n, !0).forEach(function(t) {
							o(e, t, n[t])
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
							.getOwnPropertyDescriptors(n)) : i(n).forEach(function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						})
					}
					return e
				}

				function o(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				var c = {
					name: "app-user-center-top",
					props: {
						topStyle: String,
						topPicUrl: String,
						memberPicUrl: String,
						is_icon_super_vip: {
							type: String,
							default: function() {
								return "0"
							}
						}
					},
					computed: a({
						isLogin: function() {
							return this.$user.isLogin()
						}
					}, (0, r.mapState)({
						mall: function(e) {
							return e.mallConfig.mall
						}
					}), {}, (0, r.mapGetters)({
						userCenter: "mallConfig/getUserCenter",
						userInfo: "user/info"
					}), {
						avatar: function() {
							return this.isLogin && this.userInfo ? this.userInfo
								.avatar : "/static/image/user-default-avatar.png"
						},
						getMemberPicUrl: function() {
							return this.memberPicUrl
						}
					}),
					created: function() {
						this.isLogin && this.$store.dispatch("user/info", {
							refresh: !0
						})
					},
					methods: {
						callLogin: function() {
							this.$store.dispatch("user/accessToken")
						},
						goMember: function() {
							e.navigateTo({
								url: "/pages/member/index/index"
							})
						},
						getUserProfile: function() {
							console.log('canIUse', wx.canIUse('wx.getUserProfile'))
						    // ????????????wx.getUserProfile?????????????????????????????????????????????????????????????????????????????????????????????
						    // ???????????????????????????????????????????????????????????????????????????
						    wx.getUserProfile({
						      desc: '????????????????????????', // ??????????????????????????????????????????????????????????????????????????????????????????
						      success: (t) => {
								 console.log(t);
                                 var n = this;
                                 e.login({
                                 	scopes: "auth_user",
                                 	success: function(r) {
                                 		var i = {
                                 			encryptedData: t.encryptedData,
                                 			iv: t.iv,
                                 			rawData: t.rawData,
                                 			signature: t.signature,
                                 			code: r.code
                                 		};
                                 		n.$request({
                                 			url: n.$api.passport.login,
                                 			method: "post",
                                 			data: i
                                 		}).then(function(t) {
                                 			if (e.hideLoading(), 0 !== t.code)
                                 				return reject(t.msg);
                                 			e.showToast({
                                 				title: "???????????????",
                                 				icon: "none"
                                 			}), e.setStorageSync(
                                 				"_USER_ACCESS_TOKEN", t.data
                                 				.access_token),
												e.navigateTo({
													url: "/pages/user-center/user-center"
												})
                                 		})
                                 	}
                                 })
						      }
						    })
						},
						getUserInfo: function(t) {
							var n = this;
							e.login({
								scopes: "auth_user",
								success: function(r) {
									var i = {
										encryptedData: t.detail.encryptedData,
										iv: t.detail.iv,
										rawData: t.detail.rawData,
										signature: t.detail.signature,
										code: r.code
									};
									n.$request({
										url: n.$api.passport.login,
										method: "post",
										data: i
									}).then(function(t) {
										if (e.hideLoading(), 0 !== t.code)
											return reject(t.msg);
										e.showToast({
											title: "???????????????",
											icon: "none"
										}), e.setStorageSync(
											"_USER_ACCESS_TOKEN", t.data
											.access_token)
									})
								}
							})
						}
					}
				};
				t.default = c
			}).call(this, n("543d")["default"])
		},
		a527: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("ba1d"),
				i = n("a7c2");
			for (var a in i) "default" !== a && function(e) {
				n.d(t, e, function() {
					return i[e]
				})
			}(a);
			n("edd9");
			var o = n("2877"),
				c = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, "5633a828", null);
			t["default"] = c.exports
		},
		a7c2: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("3c4e"),
				i = n.n(r);
			for (var a in r) "default" !== a && function(e) {
				n.d(t, e, function() {
					return r[e]
				})
			}(a);
			t["default"] = i.a
		},
		ba1d: function(e, t, n) {
			"use strict";
			var r = function() {
					var e = this,
						t = e.$createElement;
					e._self._c
				},
				i = [];
			n.d(t, "a", function() {
				return r
			}), n.d(t, "b", function() {
				return i
			})
		},
		e42d: function(e, t, n) {},
		edd9: function(e, t, n) {
			"use strict";
			var r = n("e42d"),
				i = n.n(r);
			i.a
		}
	}
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	'components/page-component/app-user-center-top/app-user-center-top-create-component',
	{
		'components/page-component/app-user-center-top/app-user-center-top-create-component': (function(module,
			exports, __webpack_require__) {
			__webpack_require__('543d')['createComponent'](__webpack_require__("a527"))
		})
	},
	[
		['components/page-component/app-user-center-top/app-user-center-top-create-component']
	]
]);
