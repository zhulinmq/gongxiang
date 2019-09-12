/**
 * Created by pzs on 2017/11/8.
 */
!function (e) {
  function t(i) {
	if (o[i]) return o[i].exports;
	var r = o[i] = {exports: {}, id: i, loaded: !1};
	return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }

  var o = {};
  return t.m = e, t.c = o, t.p = "", t(0)
}([function (e, t, o) {
  var i = o(1), r = o(90), n = i.extend({
	init: function (e) {
	  this.supr(e), ReactDOM.render(React.createElement(r, null), document.getElementById("j-bd"))
	}
  });
  new n
}, function (e, t, o) {
  var i = o(2), r = o(4), n = o(8), c = o(9), a = o(11), s = o(12), p = o(19), d = o(20), l = i.extend({
	init: function (e) {
	  this.supr(e), r._$isNew() ? this.sendPageView() : n.ajax({
		url: "/xhr/welcome/confirm.json",
		data: {url: location.pathname + location.search},
		success: function () {
		  this.sendPageView()
		}.bind(this)
	  }), this.__agent = new c, a._$setAppChannelType(), s.isInHuanBei() && this.initHuanBei(), r._$isInApp() || document.addEventListener("visibilitychange", function () {
		"hidden" == document.visibilityState && YXStat.q.push(["add_event", {
		  event_name: "exit_leave_page",
		  page_name: "default",
		  event_action: "exit"
		}])
	  })
	}, initHuanBei: function () {
	  window.androidWebBridge ? (window.androidInjectSuccess = this.bindHuanbeiEvent.bind(this), window.androidWebBridge.injectJS()) : this.bindHuanbeiEvent(), window.$logout = function (e) {
		var e = e || "";
		window.location.href = location.protocol + "//" + location.host + "/u/logout?callback=" + encodeURIComponent(e)
	  }
	}, bindHuanbeiEvent: function () {
	  this.refreshCart(), d.off("refreshCart"), d.on("refreshCart", this.refreshCart)
	}, refreshCart: function () {
	  p.getMiniCartNum().done(function (e) {
		s.updateCart(e.data)
	  })
	}, sendPageView: function () {
	  var e = window.CURRENTPAGE || "default";
	  "searchresult" != e && "HTMLDetail" != e && YXStat.q.push(["track_view", {
		event_name: "view_" + e,
		page_name: e
	  }])
	}
  });
  e.exports = l
}, function (e, t, o) {
  var i = o(3), r = (o(4), [].slice), n = i({
	init: function (e) {
	  this.data = {}, e = e || {}, e.events && this.$on(e.events), this.data = e.data || {}, this.config && this.config(this.data)
	}, config: function (e) {
	}, $on: function (e, t) {
	  if ("object" == typeof e) for (var o in e) this.$on(o, e[o]); else {
		var i = this, r = i._handles || (i._handles = {}), n = r[e] || (r[e] = []);
		n.push(t)
	  }
	  return this
	}, $off: function (e, t) {
	  var o = this;
	  if (o._handles) {
		e || (this._handles = {});
		var i, r = o._handles;
		if (i = r[e]) {
		  if (!t) return r[e] = [], o;
		  for (var n = 0, c = i.length; c > n; n++) if (t === i[n]) return i.splice(n, 1), o
		}
		return o
	  }
	}, $emit: function (e) {
	  var t, o, i, n = this, c = n._handles;
	  if (e) {
		var o = r.call(arguments, 1), i = e;
		if (!c) return n;
		if (t = c[i.slice(1)]) for (var a = 0, s = t.length; s > a; a++) t[a].apply(n, o);
		if (!(t = c[i])) return n;
		for (var p = 0, s = t.length; s > p; p++) t[p].apply(n, o);
		return n
	  }
	}
  });
  e.exports = n
}, function (e, t, o) {
  var i, r;
  !function (n, c, a) {
	i = a, r = "function" == typeof i ? i.call(t, o, t, e) : i, !(void 0 !== r && (e.exports = r))
  }("klass", this, function () {
	function e(e) {
	  return r.call(t(e) ? e : function () {
	  }, e, 1)
	}

	function t(e) {
	  return typeof e === n
	}

	function o(e, t, o) {
	  return function () {
		var i = this.supr;
		this.supr = o[a][e];
		var r = {}.fabricatedUndefined, n = r;
		try {
		  n = t.apply(this, arguments)
		} finally {
		  this.supr = i
		}
		return n
	  }
	}

	function i(e, i, r) {
	  for (var n in i) i.hasOwnProperty(n) && (e[n] = t(i[n]) && t(r[a][n]) && c.test(i[n]) ? o(n, i[n], r) : i[n])
	}

	function r(e, o) {
	  function r() {
	  }

	  function n() {
		this.init ? this.init.apply(this, arguments) : (o || p && c.apply(this, arguments), d.apply(this, arguments))
	  }

	  r[a] = this[a];
	  var c = this, s = new r, p = t(e), d = p ? e : this, l = p ? {} : e;
	  return n.methods = function (e) {
		return i(s, e, c), n[a] = s, this
	  }, n.methods.call(n, l).prototype.constructor = n, n.extend = arguments.callee, n[a].implement = n.statics = function (e, t) {
		return e = "string" == typeof e ? function () {
		  var o = {};
		  return o[e] = t, o
		}() : e, i(this, e, c), this
	  }, n
	}

	var n = "function", c = /xyz/.test(function () {
	  xyz
	}) ? /\bsupr\b/ : /.*/, a = "prototype";
	return e
  })
}, function (e, t, o) {
  var i = o(5), r = o(6), n = o(7), c = {
	__cookieCache: {}, _$setCookie: function (e, t, o, i, r) {
	  var n = e + "=" + escape(t), i = i || "/";
	  if (o && -1 != o) {
		var c = new Date;
		c.setTime(c.getTime() + 24 * o * 60 * 60 * 1e3), n += ";expires=" + c.toGMTString()
	  }
	  i && (n += ";path=" + i), r && (n += ";domain=" + r), document.cookie = n + ";", this._$clearCookieCache()
	}, _$clearCookieCache: function () {
	  this.__cookieCache = {}
	}, _$getCookie: function (e) {
	  var t = "", o = this.__cookieCache;
	  o.lastTime = (new Date).getTime(), t = o.cookie = document.cookie;
	  var i = new RegExp(e + "=([^;]+)"), r = i.exec(t);
	  return r ? unescape(r[1]) : null
	}, _$escapeHTML: function (e) {
	  return e ? ("number" == typeof e && (e = e.toString()), e.replace(/[\u0000]/g, "").replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : ""
	}, _$forIn: function (e, t, o) {
	  if (!e || !i._$isFunction(t)) return null;
	  if (i._$isNumber(e.length)) {
		for (var r = 0, n = e.length; n > r; r++) if (t.call(o, e[r], r, e)) return r
	  } else if (i._$isObject(e)) return c._$loop(e, t, o);
	  return null
	}, _$loop: function (e, t, o) {
	  if (e && t) {
		var i;
		for (var r in e) if (e.hasOwnProperty(r) && (i = t.call(o, e[r], r, e))) return r
	  }
	}, _$extend: function (e, t, o) {
	  for (var i in t) (void 0 == e[i] || o) && (e[i] = t[i]);
	  return e
	}, _$typeOf: function (e) {
	  return null == e ? String(e) : {}.toString.call(e).slice(8, -1).toLowerCase()
	}, _$merge: function (e, t) {
	  var o, i = c._$typeOf(e), r = c._$typeOf(t);
	  if (i !== r) return t;
	  switch (r) {
		case"object":
		  for (var n in t) t.hasOwnProperty(n) && (e[n] = c._$merge(e[n], t[n]));
		  break;
		case"array":
		  for (var n = 0, o = t.length; o > n; n++) e[n] = c._$merge(e[n], t[n]);
		  e.length = t.length;
		  break;
		default:
		  return t
	  }
	  return e
	}, _$isLogin: function () {
	  var e = window.$global;
	  return e && 0 != e.userid || !!this._$getCookie("S_INFO") || !!this._$getCookie("S_OINFO")
	}, _$isWebviewLogin: function () {
	  return !!this._$getCookie("NTES_SESS") || !!this._$getCookie("NTES_OSESS")
	}, _$getFullUrsName: function () {
	  var e = "", t = "", o = "";
	  if (this._$getCookie("S_INFO")) e = "P_INFO"; else {
		if (!this._$getCookie("S_OINFO")) return "";
		e = "P_OINFO"
	  }
	  try {
		t = decodeURIComponent(this._$getCookie(e)).replace(/(^\"*)|(\"*$)/g, "") || ""
	  } catch (i) {
		t = this._$getCookie(e).replace(/(^\"*)|(\"*$)/g, "") || ""
	  }
	  return o = t.indexOf("|"), o > 0 && (t = t.substring(0, o) + ""), t
	}, _$isNew: function () {
	  return !!this._$getCookie("yx_aui")
	}, _$getNew: function () {
	  return this._$getCookie("yx_aui")
	}, _$smoothTo: function (e, t) {
	  function o() {
		p += .05, p > 1 && (p = 1), window.scrollTo(a.x * p + r.x, r.y + p * a.y), 1 > p ? c = setTimeout(o, s) : i()
	  }

	  function i() {
		clearTimeout(c), document.onmousewheel = null
	  }

	  if ("string" == typeof e && (e = $(e)), e) {
		var r = {
		  x: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft),
		  y: Math.max(document.body.scrollTop, document.documentElement.scrollTop)
		}, n = e.offset();
		n.y -= 40;
		var c, a = {x: n.left - r.x, y: n.top - r.y}, t = t || 500, s = t / 60, p = .01;
		return document.onmousewheel = i, c = setTimeout(o, s), this
	  }
	}, _$getArrayItems: function (e, t) {
	  var o = [];
	  for (var i in e) o.push(e[i]);
	  for (var r = [], n = 0; t > n && o.length > 0; n++) {
		var c = Math.floor(Math.random() * o.length);
		r[n] = o[c], o.splice(c, 1)
	  }
	  return r
	}, _$string2object: function (e, t) {
	  var o = {};
	  return this._$forIn((e || "").split(t), function (e) {
		var t = e.split("=");
		if (t && t.length) {
		  var i = t.shift();
		  if (i) try {
			o[decodeURIComponent(i)] = decodeURIComponent(t.join("="))
		  } catch (r) {
			o[i] = t.join("=")
		  }
		}
	  }), o
	}, _$getUrlParams: function () {
	  return this._$string2object(window.location.search.replace("?", ""), "&")
	}, _$getUrlParam: function (e) {
	  return this._$getUrlParams()[e] || ""
	}, _$offset: function () {
	  var e = function (e) {
		return e == document.body || e == document.documentElement
	  };
	  return function (t, o) {
		if (!t) return null;
		o = o || null;
		for (var i, r, n, c = t, a = {
		  x: 0,
		  y: 0
		}; c && c != o;) i = e(c) || c == t, r = i ? 0 : c.scrollLeft, n = parseInt($(c).css("borderLeftWidth").slice(0, -2)) || 0, a.x += c.offsetLeft + n - r, r = i ? 0 : c.scrollTop, n = parseInt($(c).css("borderTopWidth").slice(0, -2)) || 0, a.y += c.offsetTop + n - r, c = c.offsetParent;
		return a
	  }
	}(), _$openKefu: function (e) {
	  var t = window.$global, o = {
		uid: "0" != t.userid ? t.userid : 0,
		name: "0" != t.userid ? t.userid : "",
		email: "0" != t.userid ? t.userid : "",
		robotShuntSwitch: 1
	  };
	  t && "test" == t.environment ? e ? o.groupid = n && n.KEFU_FE_GROUP_ID_TEST : o.groupid = n && n.KEFU_BE_GROUP_ID_TEST : e ? o.groupid = n && n.KEFU_FE_GROUP_ID : o.groupid = n && n.KEFU_BE_GROUP_ID, this._$isLogin() && ysf.config(o), location.href = ysf.url()
	}, _$getUid: function () {
	  var e = window.$global;
	  return "0" != e.userid ? e.userid : ""
	}, _$getDownloadLink: function () {
	  var e = this._$getCookie("yx_from") || "", t = this._$getUrlParam("channel"), o = "/downloadapp";
	  return "" != e && (o += "?_stat_from=" + e), "" != t && (o += o.indexOf("?") > 0 ? "&channel=" + t : "?channel=" + t), o
	}, _$getDownloadLinkWithQuery: function (e) {
	  var t = this._$getDownloadLink();
	  return t += t.indexOf("?") > 0 ? "&" + e : "?" + e
	}, _$createRequest: function (e, t, o) {
	  var i = document.createElement("iframe");
	  i.src = e, document.body.appendChild(i), t ? $(i).ready(function () {
		var e = $(i.contentDocument || i.contentWindow.document).find("title").text();
		e.indexOf("404") > -1 ? o && o() : t()
	  }) : setTimeout(function () {
		document.body.removeChild(i)
	  }, 2e3)
	}, _$isInAndroid: function () {
	  return navigator.userAgent.toLowerCase().match(/android/gi)
	}, _$isInIOS: function () {
	  return navigator.userAgent.toLowerCase().match(/iphone|ipad/gi)
	}, _$isInApp: function () {
	  return navigator.userAgent.toLowerCase().match(/yanxuan/gi)
	}, _$isInUc: function () {
	  return navigator.userAgent.toLowerCase().match(/ucbrowser/gi)
	}, _$isInMailMaster: function () {
	  return navigator.userAgent.toLowerCase().match(/mailmaster/gi)
	}, _$getIOSVersion: function () {
	  var e = navigator.userAgent.toLowerCase().match(/(\d+(_\d+)*) like mac os x/), t = "00.00.00";
	  return e && e[1] && (t = e[1].split("_").map(function (e) {
		return 1 === e.length && (e = "0" + e), e
	  }).join("."), 5 === t.length && (t += ".00")), t
	}, _$sendStatisticsUrl: function (e) {
	  var t = r.appendURL("/a.js", e);
	  r.getScript(t)
	}, _$toArray: function (e) {
	  return Array.prototype.slice.apply(e)
	}, _$formatReadCount: function (e) {
	  return e >= 1e6 ? Number(e / 1e6).toFixed(1) + "m" : e >= 1e3 ? Number(e / 1e3).toFixed(1) + "k" : e
	}, _$getStrLength: function (e) {
	  for (var t, o = 0, i = 0; i < e.length; i++) t = e.charCodeAt(i), t >= 0 && 128 >= t ? o++ : o += 2;
	  return o
	}, _$getABTestConfig: function () {
	  var e, t = navigator.userAgent.match(/\(abTest;(.*)\)/);
	  if (t && 2 === t.length) try {
		e = JSON.parse(t[1])
	  } catch (o) {
		console.log(o)
	  }
	  return e
	}, openH5InApp: function (e) {
	  window.location.href = "yanxuan://subject?subjecturl={0}".format(encodeURIComponent(e))
	}
  };
  e.exports = c
}, function (e, t) {
  var o = {}, i = function (e, t) {
	try {
	  return t = t.toLowerCase(), null === e ? "null" == t : void 0 === e ? "undefined" == t : {}.toString.call(e).toLowerCase() == "[object " + t + "]"
	} catch (o) {
	  return !1
	}
  };
  o._$isFunction = function (e) {
	return i(e, "function")
  }, o._$isString = function (e) {
	return i(e, "string")
  }, o._$isNumber = function (e) {
	return i(e, "number")
  }, o._$isBoolean = function (e) {
	return i(e, "boolean")
  }, o._$isDate = function (e) {
	return i(e, "date")
  }, o._$isArray = function (e) {
	return i(e, "array")
  }, o._$isObject = function (e) {
	return i(e, "object")
  }, e.exports = o
}, function (e, t) {
  var o = {
	cropURL: function (e, t) {
	  for (var o = e, i = 0; i < t.length; i++) {
		var r = new RegExp("[&]?" + t[i] + "=[^&]+", "g");
		o = o.replace(r, "").replace("?&", "?")
	  }
	  return o
	}, getUrlParams: function (e) {
	  var t = {};
	  if (e || (e = window.location.href), -1 == e.indexOf("?")) return t;
	  for (var o = e.indexOf("?"), i = e.substring(o + 1), r = i.split("&"), n = 0; n < r.length; n++) {
		var o = r[n].indexOf("=");
		if (-1 != o) try {
		  t[r[n].substring(0, o)] = decodeURIComponent(r[n].substring(o + 1))
		} catch (c) {
		  t[r[n].substring(0, o)] = r[n].substring(o + 1)
		}
	  }
	  return t
	}, getUrlParam: function (e, t) {
	  return e ? this.getUrlParams(t)[e] : ""
	}, appendURL: function (e, t) {
	  var o = e || "";
	  if (!t) return o;
	  var i = o.split("?"), r = i[0] + "?" + Object.keys(t).map(function (e) {
		return e + "=" + t[e]
	  }).join("&");
	  return 2 == i.length && (r = r + "&" + i[1]), r.replace(/&+/gm, "&")
	}, urlHttpsile: function (e, t) {
	  var o = e || "", i = $URL.proxyURL;
	  return t && (i = $URL.mimgProxyURL), 0 == o.indexOf("http://") ? i + o.replace("http://", "") : o
	}, jsonp: function (e, t, o) {
	  var i = $.extend({charset: "utf-8"}, o), r = "_tmp_jsonp_callback" + +new Date;
	  i.funcName && (r = i.funcName), window[r] = function () {
		t && t.apply(window, arguments);
		try {
		  delete window[r]
		} catch (e) {
		}
	  };
	  var n = {};
	  n[i.callbackName || "callback"] = r;
	  var c = this.appendURL(e, n);
	  this.getScript(c, i.charset, function () {
		try {
		  window[r](), delete window[r]
		} catch (e) {
		}
	  })
	}, getScript: function (e, t, o, i) {
	  var r = function () {
		o && o.apply(window, arguments)
	  };
	  this._getScript(e, t, r, i)
	}, _getScript: function (e, t, o, i) {
	  setTimeout(function () {
		var r = /loaded|complete|undefined/, n = document.createElement("script");
		n.setAttribute("charset", t || "utf-8"), n.setAttribute("type", "text/javascript"), n.setAttribute("src", e), n.async = "async";
		var c = function (e) {
		  r.test(n.readyState) && (n.onload = n.onerror = n.onreadystatechange = null, n.parentNode.removeChild(n), n = void 0, e ? "function" == typeof o && setTimeout(o, 0) : "function" == typeof i ? setTimeout(i, 0) : "function" == typeof o && setTimeout(o, 0))
		};
		n.onload = function () {
		  c(!0)
		}, n.onerror = function () {
		  c(!1)
		}, n.onreadystatechange = function () {
		  c(!0)
		};
		var a = document.getElementsByTagName("head")[0];
		a.appendChild(n)
	  }, 0)
	}, getPicUrl: function (e, t, o) {
	  var o = o || 90, i = {quality: o};
	  return t && (i.thumbnail = t), this.appendURL(e, i) + "&imageView"
	}, getItemDetailUrl: function (e) {
	  return this.appendURL("/item/detail", {id: e})
	}, getPathName: function (e) {
	  var t = document.createElement("a"), o = "";
	  return t.setAttribute("href", e), o = t.pathname
	}
  };
  e.exports = o
}, function (e, t) {
  e.exports = {
	PAY_METHODS: {1: "网易支付", 2: "微信", 3: "支付宝", 99: "其他"},
	DFT_ERROR_MSG: "系统繁忙，请稍后再试",
	DEF_USER_AVATAR: "//yanxuan.nosdn.127.net/dc741fe90df58c3605c9d3c309dba9e0.png",
	TEL: "400-0368-163",
	WEB_HOST: "you.163.com",
	REG_URL: "//reg.163.com/reg/regClient.jsp?product=yanxuan&from=pagelogin&url=" + window.location.protocol + "//" + window.location.host,
	USELESS_TOPIC_ID: 10000003,
	KEFU_FE_GROUP_ID: 690549,
	KEFU_FE_GROUP_ID_TEST: 17289,
	KEFU_BE_GROUP_ID: 690550,
	KEFU_BE_GROUP_ID_TEST: 19707
  }
}, function (e, t, o) {
  var i = o(6), r = o(4), n = {
	xhrQueue: {}, ajax: function (e) {
	  var t = this, o = e.url;
	  if (!o) return !1;
	  e.requestTime = new Date, e.param && (o = i.appendURL(o, e.param)), r._$getCookie("yx_csrf") && (o = i.appendURL(o, {csrf_token: r._$getCookie("yx_csrf")}));
	  var n, c, a = e.data || {};
	  n = e.dataType ? e.dataType : "json", "undefined" != typeof e.contentType && (c = e.contentType), "undefined" == typeof c || c === $.ajaxSettings.contentType ? a = $.param(a, !0) : "application/json" === c && (a = JSON.stringify(a));
	  var s = o + a, p = t.xhrQueue[s];
	  if (p) {
		var d = p[p.length - 1];
		if (t.xhrQueue[s].push(e), e.requestTime - d.requestTime < 3e4) return
	  } else t.xhrQueue[s] = [e];
	  var l = function (e, o, i) {
		var r = t.xhrQueue[s];
		delete t.xhrQueue[s], r && ($.each(r, function (t, r) {
		  r.error && r.error(e, o, i)
		}), $.each(r, function (t, r) {
		  r.exception && r.exception.dispatch(e, o, i)
		}))
	  }, u = function (e) {
		var o = t.xhrQueue[s];
		delete t.xhrQueue[s], $.each(o, function (t, o) {
		  o.success && o.success(e)
		})
	  }, v = {
		url: o,
		type: e.type || "POST",
		dataType: n,
		contentType: c,
		data: a,
		async: 0 != e.async,
		success: function (e) {
		  /^(html|text)$/i.test(n) ? u(e) : e ? e.status && e.statusText ? l(e.status, e.status || "", e) : "S_OK" == e.code || "200" == e.code || "201" == e.code ? u(e) : e.code ? l(e.code, e.errorCode || "", e) : u(e) : l("502", "error", "no reponse text")
		}.bind(this),
		error: function (e, t, o) {
		  l("NET_ERROR", "", t)
		}.bind(this),
		xhrFields: e.xhrFields || {}
	  };
	  "undefined" != typeof e.processData && (v.processData = e.processData), "undefined" != typeof e.cache && (v.cache = e.cache), $.ajax(v)
	}
  };
  e.exports = n, $.ajaxSettings.contentType = "application/x-www-form-urlencoded; charset=UTF-8"
}, function (e, t, o) {
  var i = o(2), r = o(10), n = o(11), c = navigator.userAgent,
	  a = (!!c.match(/(iPhone|iPod|iPad)/i), !!c.match(/Android/i), navigator.standalone, !!c.match(/Safari/i), !!c.match(/yanxuan/i)),
	  s = i.extend({
		isInAndroidYXWebview: !1, init: function (e) {
		  this.supr(e), $(document).click($.proxy(function (e) {
			var t = e.target;
			do {
			  var o = t.getAttribute("data-applink"), i = t.getAttribute("data-weblink");
			  if (o && "" != o && i && "" != i) {
				this.go(o, i);
				break
			  }
			  t = t.parentNode
			} while (t && t !== $(document).get(0))
		  }, this))
		}, go: function (e, t) {
		  (n._$isWakeUpApp() || a) && r._$openApp(e, function (e) {
			e && console.log("app awake success")
		  }), a || (window.location.href = t)
		}
	  });
  e.exports = s
}, function (e, t, o) {
  var i = o(4), r = {
	__checkOpen: function (e) {
	  function t(t) {
		e(t > 3e3 || document.hidden || document.webkitHidden ? 1 : 0)
	  }

	  var o, i = +new Date, r = 0;
	  o = setInterval(function () {
		r++;
		var e = +new Date - i;
		(r >= 100 || e > 3e3) && (clearInterval(o), t(e))
	  }, 20)
	}, _$openApp: function (e, t) {
	  var o = document.createElement("iframe");
	  o.src = e, o.style.display = "none", t && this.__checkOpen(function (e) {
		t && t(e)
	  }), document.body.appendChild(o), setTimeout(function () {
		document.body.removeChild(o)
	  }, 2e3)
	}, _$getVersion: function () {
	  var e = navigator.userAgent.toLowerCase().match(/yanxuan\/(\d+\.\d+\.\d+)/);
	  return e ? e[e.length - 1] : "0.0.0"
	}, _$downloadApp: function () {
	  i._$isInAndroid() && (window.location.href = "//u.163.com/yxandroid"), i._$isInIOS() && (window.location.href = "//u.163.com/yxios")
	}
  };
  e.exports = r
}, function (e, t, o) {
  var i = o(4), r = o(10), n = "11111", c = "11111111111", a = {
		1: {showAppBar: !1, showAppLayer: !1, wakeUpApp: !1},
		2: {showAppBar: !1, showAppLayer: !1, wakeUpApp: !0},
		3: {showAppBar: !1, showAppLayer: !0, wakeUpApp: !1},
		4: {showAppBar: !1, showAppLayer: !0, wakeUpApp: !0},
		5: {showAppBar: !0, showAppLayer: !1, wakeUpApp: !1},
		6: {showAppBar: !0, showAppLayer: !1, wakeUpApp: !0},
		7: {showAppBar: !0, showAppLayer: !0, wakeUpApp: !1},
		8: {showAppBar: !0, showAppLayer: !0, wakeUpApp: !0}
	  }, s = ["micromessenger", "yixin", "weibo", "mailmaster", "duobao"], p = ["yixin", "epay163", "yanxuan"],
	  d = navigator.userAgent, l = !!d.match(/yanxuan/i), u = {
		_$isShowAppBar: function () {
		  var e = this._$getAppChannelType(), t = a[e].showAppBar;
		  this.__checkConformToUa(p) && (t = !1);
		  var o = i._$getCookie("yx_appbar_show");
		  return "show" === o ? t = !0 : "hide" === o && (t = !1), t
		}, _$isShowAppLayer: function () {
		  var e = this._$getAppChannelType(), t = !0;
		  this.__checkConformToUa(s) && (t = !1);
		  var t = a[e].showAppLayer;
		  if (localStorage && localStorage.getItem) {
			var o = localStorage.getItem("yx_applayer_time"), i = new Date;
			if ("hack" === o) return !1;
			if (o && !isNaN(o)) {
			  var r = new Date(parseInt(o));
			  r.getFullYear() == i.getFullYear() && r.getMonth() == i.getMonth() && r.getDate() == i.getDate() && (t = !1)
			}
		  }
		  return t
		}, _$isWakeUpApp: function () {
		  var e = this._$getAppChannelType();
		  return a[e].wakeUpApp
		}, _$openAppLink: function (e, t) {
		  var o = this.__generateAppUrl(e, t);
		  l || r._$openApp(o, function (e) {
			e && console.log("app awake success")
		  })
		}, __checkConformToUa: function (e) {
		  for (var t = 0, o = e.length, i = !1; o > t; t++) {
			var r = new RegExp(e[t], "i");
			if (r.test(d)) {
			  i = !0;
			  break
			}
		  }
		  return i
		}, __generateAppUrl: function (e, t) {
		  var o = "";
		  switch (e) {
			case"index":
			  o = "yanxuan://homepage";
			  break;
			case"detail":
			  o = "yanxuan://commoditydetails?commodityid=" + t;
			  break;
			case"topic":
			  o = "yanxuan://subject?subjecturl=" + encodeURIComponent("http://m.you.163.com/topic/" + t)
		  }
		  return o
		}, _$setAppChannelType: function () {
		  var e, t, o, r = i._$getCookie("yx_channel_type"), a = i._$getUrlParam("channel_type") || r, s = ".you.163.com";
		  r && i._$setCookie("yx_channel_type", "", -2, "", s), a && "0" !== a && (typeList = a.split("_"), t = typeList[0], e = typeList[1] || n, o = typeList[2] || c, i._$setCookie("yx_appchannel_type", t, void 0, "", s), i._$setCookie("yx_appchannel_type1", e, void 0, "", s), i._$setCookie("yx_appchannel_type2", o, void 0, "", s))
		}, _$getAppChannelType: function () {
		  var e = 8;
		  return e = i._$getCookie("yx_appchannel_type") || 8
		}, _$getAppChannelType1: function () {
		  var e = n;
		  return e = i._$getCookie("yx_appchannel_type1") || e
		}, _$getAppChannelType2: function () {
		  var e = c;
		  return e = i._$getCookie("yx_appchannel_type2") || e
		}, _$setAppLayerTime: function () {
		  localStorage && localStorage.setItem && localStorage.setItem("yx_applayer_time", (new Date).getTime())
		}, _$isShowHd: function () {
		  return this._$isShow(0)
		}, _$isShowFt: function () {
		  return this._$isShow(1)
		}, _$isShowLogout: function () {
		  return this._$isShow(2)
		}, _$isShowEpay: function () {
		  return this._$isShow(3)
		}, _$isShowTabBar: function () {
		  return this._$isShow(4)
		}, _$isShow: function (e) {
		  var t = this._$getAppChannelType1(), o = void 0 === t[e] ? 1 : t[e];
		  return 1 == o
		}, _$isShowUcenterMenu: function (e) {
		  var t = this._$getAppChannelType2(), o = void 0 === t[e] ? 1 : t[e];
		  return 1 == o
		}
	  };
  e.exports = u
}, function (e, t, o) {
  var i = o(13), r = o(4), n = o(14), c = o(16), a = o(18), s = {
	isInHuanBei: function () {
	  return !(!window.$native && !window.androidWebBridge)
	}, toPay: function (e) {
	  function t(e) {
		return c.payOrder({
		  orderId: e.data.orderId,
		  userId: e.data.userId,
		  yx_aui: r._$getCookie("yx_aui"),
		  yx_from: r._$getCookie("yx_from"),
		  payMethod: i.HUANBEI
		}, e.data.domain)
	  }

	  function o(e) {
		var t = $.Deferred(), o = e.data;
		return window.$native.openModule("payOrder", {orderId: o.goodsOrderId}), t.resolve()
	  }

	  function s(e, t, o) {
		throw n(e, t, o), new Error
	  }

	  var p = $.Deferred();
	  try {
		a.choosePay({orderId: e, payMethod: i.HUANBEI}).then(function (e) {
		  return t(e)
		}, s).then(function (e) {
		  return o(e)
		}, s).then(function () {
		  p.resolve()
		}, function () {
		  p.reject()
		})
	  } catch (d) {
		return p.reject()
	  }
	  return p.promise()
	}, updateCart: function (e) {
	  window.$native.openModule("updateYanxuanShoppingCart", {count: e})
	}, setPanGestureEnabled: function (e) {
	  window.$native.setPanGestureEnabled(e)
	}
  };
  e.exports = s
}, function (e, t) {
  e.exports = {EPAY: 1, WXPAY: 2, ALIPAY: 3, YXPAY: 4, HUANBEI: 8, GUANAITONG: 9, YIZHIFU: 11}
}, function (e, t, o) {
  var i = o(15), r = o(7);
  e.exports = function (e, t) {
	return "NET_ERROR" === e ? void i.notify("网络不给力") : void i.notify(t || r.DFT_ERROR_MSG)
  }
}, function (e, t, o) {
  var i = o(2), r = o(4), n = i.extend({
	template: '<div class="m-notify hide"><div class="text j-text"></div></div>',
	iconMap: {success: "u-ok", fail: "u-fail", error: "u-fail", warning: "u-warning"},
	config: function (e) {
	  r._$extend(e, {messages: "", isHide: !0, type: "", clazz: "hide", duration: 2e3})
	},
	init: function (e) {
	  this.supr(e), this.__body = $(this.template), this.__textCon = this.__body.find(".j-text").first(), $(document.body).append(this.__body)
	},
	notify: function (e, t, o) {
	  e && "object" == typeof e && (t = e.type, o = e.duration, e = e.message), this.data.duration = o || this.data.duration, this.data.message = e, this.data.type = t || "success", this.__body.css("display", "block"), this.__textCon.text(this.data.message);
	  var i = this.clear.bind(this, e);
	  return setTimeout(function () {
		this.__body.removeClass("hide").addClass("show")
	  }.bind(this), 0), this.__timer && clearInterval(this.__timer), -1 != this.data.duration && (this.__timer = setTimeout(i, this.data.duration)), i
	},
	clear: function (e) {
	  this.__body.removeClass("show").addClass("hide"), setTimeout(function () {
		this.__body.css("display", "none")
	  }.bind(this), 500)
	}
  }), c = new n;
  c.Notify = n, e.exports = c
}, function (e, t, o) {
  var i = o(17);
  e.exports = i("/xhr/wap", [{
	name: "payOrder",
	ajaxConfig: {type: "GET", xhrFields: {withCredentials: !0}},
	processParams: function (e) {
	  var t = {};
	  return Object.keys(e).map(function (o) {
		e.hasOwnProperty(o) && e[o] && (t[o] = e[o])
	  }), t
	}
  }])
}, function (e, t, o) {
  var i = o(8), r = function (e) {
	var t = {name: "", ajaxConfig: {}};
	return e = $.extend(!0, {}, t, e), function (t, o) {
	  var r = $.Deferred(), n = {};
	  return o = o || "", o && o.indexOf("http://") < 0 && o.indexOf("https://") < 0 && (o = "//" + o), e.processParams && (t = e.processParams(t)), n = {
		url: "{0}{1}/{2}.json".format(o, e.path, e.name),
		data: t || {},
		success: function (t) {
		  e.successHandle ? e.successHandle(t, r) : r.resolve(t)
		},
		error: function (e, t, o) {
		  r.reject(e, t, o)
		},
		type: "POST"
	  }, i.ajax($.extend(!0, {}, n, e.ajaxConfig)), r.promise()
	}
  }, n = function (e, t) {
	var o = {};
	return t.map(function (t) {
	  "string" == typeof t && (t = {name: t}), t.path || (t.path = e), o[t.alias || t.name] = r(t)
	}), o
  };
  e.exports = n
}, function (e, t, o) {
  var i = o(17);
  e.exports = i("/xhr/order", [{name: "getList", ajaxConfig: {type: "GET"}}, {
	name: "payCheck",
	ajaxConfig: {type: "GET"}
  }, {name: "cancel", alias: "cancelOrder", ajaxConfig: {type: "GET"}}, {
	name: "cancelPayed",
	ajaxConfig: {type: "GET"}
  }, {name: "getCancelStep", ajaxConfig: {type: "GET"}}, {
	name: "confirmDelivery",
	ajaxConfig: {type: "GET"}
  }, {name: "getDelivery", ajaxConfig: {type: "GET"}}, {
	name: "getDeliveryWithSub",
	ajaxConfig: {type: "GET"}
  }, {name: "delete", alias: "del", ajaxConfig: {type: "GET"}}, "submit", {
	name: "submit",
	alias: "concurrentSubmit",
	path: "/xhr/order/concurrent"
  }, "init", {name: "init", alias: "concurrentInit", path: "/xhr/order/concurrent"}, {
	name: "payComplete",
	ajaxConfig: {type: "GET"}
  }, "reload", {name: "getDetail", ajaxConfig: {type: "GET"}}, {
	name: "choosePay",
	ajaxConfig: {type: "GET"}
  }, {name: "beforeInit", ajaxConfig: {type: "GET"}}, {
	name: "beforeInit",
	alias: "concurrentBeforeInit",
	ajaxConfig: {type: "GET"},
	path: "/xhr/order/concurrent"
  }, {name: "invoiceSave", ajaxConfig: {type: "GET"}}, {
	name: "getInvoicePic",
	ajaxConfig: {type: "GET"}
  }, "sendInvoiceEmail", "checkAddress", "getInvoice", {
	name: "fillupInvoice",
	ajaxConfig: {contentType: "application/json"}
  }, "deliveryComplaint"])
}, function (e, t, o) {
  var i = o(17);
  e.exports = i("/xhr/cart", ["choosePromotion", "getCarts", "getItemPool", "selectAll", {
	name: "add",
	ajaxConfig: {type: "GET"}
  }, {name: "delete"}, {name: "updateCheck", ajaxConfig: {type: "GET"}}, {
	name: "updateByNum",
	ajaxConfig: {type: "GET"}
  }, {name: "updateSkuSpec", ajaxConfig: {type: "GET"}}, {
	name: "updateSuitCount",
	ajaxConfig: {type: "GET"}
  }, {name: "getMiniCartNum", ajaxConfig: {type: "GET"}}, {
	name: "getMiniCartNum",
	alias: "getMiniCartNumInSeckill",
	ajaxConfig: {type: "GET"},
	path: "/xhr/seckill/cart"
  }, {name: "selectGift", ajaxConfig: {contentType: "application/json"}}, {
	name: "selectAddBuy",
	ajaxConfig: {contentType: "application/json"}
  }, "clearInvalidItem", "addSuit", "getItemPoolBar"])
}, function (e, t, o) {
  var i = o(21);
  e.exports = function () {
	var e;
	return e = new i
  }()
}, function (e, t, o) {
  e.exports = o(22)(14)
}, function (e, t) {
  e.exports = dll
}, , function (e, t, o) {
  var i = o(25), r = o(37), n = o(38), c = o(4), a = o(11), s = React.createClass({
	displayName: "Layout", getDefaultProps: function () {
	  return {noHd: !1, noFt: !1, noGoToTop: !1}
	}, render: function () {
	  return React.createElement("div", null, this.props.noHd || c._$isInApp() ? null : React.createElement(i, null), this.props.children, !this.props.noGoToTop && React.createElement(n, null), !a._$isShowFt() || this.props.noFt || c._$isInApp() ? null : React.createElement(r, null))
	}
  });
  e.exports = s
}, function (e, t, o) {
  var i = o(26), r = o(34), n = function (e) {
	return "normal" == e.mode ? React.createElement(r, {mode: e.mode}, !!e.children && e.children) : "search" == e.mode ? React.createElement(r, {
	  mode: e.mode,
	  onSearch: e.onSearch,
	  onChange: e.onChange,
	  onFocus: e.onFocus,
	  onBlur: e.onBlur,
	  onCancel: e.onCancel,
	  searchValue: e.searchValue,
	  active: !!e.active,
	  placeholder: e.placeholder
	}, !!e.children && e.children) : React.createElement(r, null, !!e.children && e.children)
  };
  e.exports = i(n)
}, function (e, t, o) {
  var i = o(27), r = o(20), n = o(11), c = function (e, t) {
	t = $.extend(!0, {disregardChannelType: !1}, t);
	var o = React.createClass({
	  displayName: "Hd", getDefaultProps: function () {
		return {disregardChannelType: !1}
	  }, getInitialState: function () {
		return {height: 0}
	  }, componentWillMount: function () {
		document.body.classList.add("hasHd")
	  }, componentDidMount: function () {
		r.on("downloadBannerShowOrHide", this.syncHeight), this.syncHeight()
	  }, componentDidUpdate: function () {
		this.syncHeight()
	  }, componentWillUnmount: function () {
		document.body.classList.remove("hasHd")
	  }, render: function () {
		return React.createElement("div", {style: {height: this.state.height}}, React.createElement("div", {
		  ref: "hd",
		  className: "m-hd"
		}, React.createElement(i, null), e && React.createElement(e, this.props)))
	  }, syncHeight: function () {
		var e = $(this.refs.hd).height() || 0;
		this.state.height !== e && this.setState({height: e}), r.emit("hdHeightchange", e)
	  }
	});
	return function (e) {
	  return n._$isShowHd() || t.disregardChannelType || e.disregardChannelType ? React.createElement(o, e) : React.createElement("div", null)
	}
  };
  e.exports = c
}, function (e, t, o) {
  var i = o(4), r = o(10), n = o(28), c = o(30), a = o(11), s = o(20), p = o(31), d = o(33), l = React.createClass({
	displayName: "DownloadBanner", getInitialState: function () {
	  return {isOpen: a._$isShowAppBar(), isAnniversary: this.validateDate()}
	}, componentDidMount: function () {
	  this.changeClassesToBody(), a._$isShowAppBar() && this.bindScroll(this.handleScroll)
	}, componentWillUnmount: function () {
	  a._$isShowAppBar() && this.unbindScroll(this.handleScroll)
	}, handleClose: function () {
	  this.hide(), a._$isShowAppBar() && this.unbindScroll(this.handleScroll), i._$setCookie("yx_appbar_show", "hide")
	}, handleScroll: p(function () {
	  if (!(document.documentElement.clientHeight / window.innerHeight < 1.2)) {
		var e = $(document).scrollTop();
		e > 10 ? this.hide() : this.show()
	  }
	}), validateDate: function () {
	  var e = (new Date).getTime(), t = new Date("4/1/2017").getTime(), o = new Date("4/12/2017").getTime();
	  return e >= t && o >= e
	}, render: function () {
	  var e = null;
	  return e = this.state.isAnniversary ? React.createElement("div", {className: "cnt"}, React.createElement("p", {className: "txt1"}, "手机专享价最高直减700元"), React.createElement("p", {className: "txt2"}, "APP首单再减8元")) : React.createElement("div", {className: "cnt"}, React.createElement("p", {className: "txt1"}, "网易严选11.11"), React.createElement("p", {className: "txt2"}, "立即领取APP新人专享1000元礼包+红包")), React.createElement("div", {className: c("m-downloadBanner", {hide: !this.state.isOpen})}, React.createElement("div", {className: "g-row"}, React.createElement("i", {
		className: "u-icon u-icon-openAppClose close",
		onClick: this.handleClose
	  }), React.createElement("div", {className: "brand"}, React.createElement("i", {className: c("logo u-icon u-icon-openAppLogo", {"logo-anniversary": this.state.isAnniversary})}), e), React.createElement("a", {
		className: "w-button btn",
		href: "javascript:void(0);",
		onClick: this.openApp
	  }, "打开APP")))
	}, openApp: function () {
	  n.statics({key: "app_rouse"});
	  var e = d(location.pathname + location.search);
	  i._$isInAndroid() ? r._$openApp(e.scheme, function (e) {
		e || (location.href = i._$getDownloadLinkWithQuery("ochannel=aos_pd_11"))
	  }) : location.href = e.universal + (e.universal.indexOf("?") > 0 ? "&" : "?") + "app_awake_from=app_rouse&ochannel=aos_pd_11"
	}, hide: function () {
	  this.state.isOpen && this.setState({isOpen: !1}, function () {
		s.emit("downloadBannerShowOrHide"), this.changeClassesToBody()
	  }.bind(this))
	}, show: function () {
	  this.state.isOpen || this.setState({isOpen: !0}, function () {
		s.emit("downloadBannerShowOrHide"), this.changeClassesToBody()
	  }.bind(this))
	}, changeClassesToBody: function () {
	  this.state.isOpen ? ($("body").removeClass("isOpenAppClosed"), $("body").addClass("isOpenAppOpened")) : ($("body").addClass("isOpenAppClosed"), $("body").removeClass("isOpenAppOpened"))
	}, bindScroll: function (e) {
	  window.addEventListener("touchmove", e), window.addEventListener("scroll", e)
	}, unbindScroll: function (e) {
	  window.removeEventListener("touchmove", e), window.removeEventListener("scroll", e)
	}
  });
  e.exports = l
}, function (e, t, o) {
  function i(e, t) {
	e = $.extend({}, t, e), e.key && (e.key = encodeURIComponent(e.key)), $.get("//stat.mail.163.com/you/a.js", e)
  }

  function r(e) {
	var t = c._$getCookie("yx_aui"), o = c._$getUid(),
		r = {device_id: t, type: "wap", rid: (new Date).getTime(), uid: o, default_id: t};
	i(e, r)
  }

  function n(e) {
	a.getAppDeviceInfo().done(function (t) {
	  var o = t.data, r = {
		device_id: o.deviceId,
		type: c._$isInIOS() ? "ios" : "android",
		rid: (new Date).getTime(),
		uid: c._$getUid(),
		default_id: o.yx_aui
	  };
	  i(e, r)
	})
  }

  var c = o(4), a = o(29), s = {
	statics: function (e) {
	  try {
		c._$isInApp() ? n(e) : r(e)
	  } catch (t) {
	  }
	}
  };
  e.exports = s
}, function (e, t, o) {
  var i = o(17), r = i("/xhr/common", [{name: "checklogin", ajaxConfig: {type: "GET"}}, {
	name: "checklogin",
	alias: "checkloginInSeckill",
	ajaxConfig: {type: "GET"},
	path: "/xhr/seckill"
  }, "getAppDeviceInfo"]);
  e.exports = r
}, function (e, t, o) {
  e.exports = o(22)(6)
}, function (e, t, o) {
  function i(e, t, o) {
	var i, n, c, a, s = 0;
	o || (o = {});
	var p = function () {
	  s = o.leading === !1 ? 0 : r(), i = null, a = e.apply(n, c), i || (n = c = null)
	}, d = function () {
	  var d = r();
	  s || o.leading !== !1 || (s = d);
	  var l = t - (d - s);
	  return n = this, c = arguments, 0 >= l || l > t ? (i && (clearTimeout(i), i = null), s = d, a = e.apply(n, c), i || (n = c = null)) : i || o.trailing === !1 || (i = setTimeout(p, l)), a
	};
	return d.cancel = function () {
	  clearTimeout(i), s = 0, i = n = c = null
	}, d
  }

  var r = o(32);
  e.exports = i
}, function (e, t) {
  function o() {
	return (new Date).getTime()
  }

  e.exports = o
}, function (e, t, o) {
  function i(e) {
	var t = c.getPathName(e), o = "", i = n._$getCookie("yx_from") || "";
	i && (o = "from=" + i);
	var a = {scheme: r("yanxuan://homepage", o), universal: r("//app.you.163.com" + n._$getDownloadLink(), o)};
	if ("/item/detail" == t) {
	  var s = c.getUrlParams(e).id;
	  a = {
		scheme: r("yanxuan://commoditydetails?commodityid=" + s, o),
		universal: r("//app.you.163.com/appawake/downloadapp/item/detail?id=" + s, o)
	  }
	}
	return a
  }

  function r(e, t) {
	return t ? e += e.indexOf("?") > 0 ? "&" + t : "?" + t : e
  }

  var n = o(4), c = o(6);
  e.exports = i
}, function (e, t, o) {
  var i = o(19), r = o(30), n = o(20), c = o(35), a = o(4), s = React.createClass({
	displayName: "TopBar", getInitialState: function () {
	  return {miniCartNum: 0}
	}, componentWillMount: function () {
	  this.refreshCart(), n.on("refreshCart", this.refreshCart)
	}, componentWillUnmount: function () {
	  n.off("refreshCart", this.refreshCart)
	}, handleFocus: function () {
	  this.props.onFocus && this.props.onFocus()
	}, renderHomeIcon: function () {
	  return React.createElement("a", {className: "u-icon u-icon-home", href: "/"})
	}, renderSearchIcon: function () {
	  return React.createElement("a", {
		className: "search",
		href: "/search"
	  }, React.createElement("i", {className: "u-icon u-icon-search1"}))
	}, renderCart: function () {
	  var e = 0;
	  return e = this.state.miniCartNum > 99 ? "99+" : this.state.miniCartNum, React.createElement("a", {
		className: "cart",
		href: "/cart"
	  }, React.createElement("i", {className: "u-icon u-icon-cart"}, !!e && React.createElement("span", {
		className: r("cartNum", {
		  "cartNum-l": this.state.miniCartNum > 9,
		  "cartNum-2": this.state.miniCartNum > 99
		})
	  }, e)))
	}, renderSearchIpt: function () {
	  return React.createElement(c, {
		className: "searchIpt",
		onChange: this.props.onChange,
		onSearch: this.props.onSearch,
		onFocus: this.handleFocus,
		onBlur: this.props.onBlur,
		value: this.props.searchValue,
		placeholder: this.props.placeholder
	  })
	}, renderNormalBd: function () {
	  return React.createElement("div", {className: "row"}, this.renderHomeIcon(), React.createElement("a", {href: "/"}, React.createElement("i", {className: "logo u-icon u-icon-logo"})), React.createElement("div", {className: "right"}, this.renderSearchIcon(), this.renderCart()))
	}, renderSearchModeBd: function () {
	  var e = a._$isInApp(), t = this.props.active;
	  return React.createElement("div", {className: r("row", {active: t})}, !e && !t && React.createElement("div", {className: "leftIcon"}, this.renderHomeIcon()), this.renderSearchIpt(), t && React.createElement("span", {
		className: "cancel",
		onClick: this.props.onCancel
	  }, "取消"))
	}, renderBd: function () {
	  return this.isSearchMode() ? this.renderSearchModeBd() : this.renderNormalBd()
	}, render: function () {
	  return React.createElement("div", {className: r("m-topBar", {search: this.isSearchMode()})}, React.createElement("div", {className: "bd"}, this.renderBd()), !!this.props.children && this.props.children)
	}, refreshCart: function () {
	  var e = window.seckillFlag ? i.getMiniCartNumInSeckill : i.getMiniCartNum;
	  e().done(function (e) {
		this.setState({miniCartNum: e.data})
	  }.bind(this))
	}, isSearchMode: function () {
	  return "search" == this.props.mode
	}
  });
  e.exports = s
}, function (e, t, o) {
  var i = o(36), r = React.createClass({
	displayName: "SearchIpt", getDefaultProps: function () {
	  return {className: ""}
	}, handleSubmit: function (e) {
	  e.preventDefault(), $(this.refs.searchIpt.refs.ipt).blur(), this.props.onSearch(this.props.value)
	}, render: function () {
	  return React.createElement("form", {
		className: "m-searchIptWrap " + this.props.className,
		onSubmit: this.handleSubmit,
		role: "search",
		action: "/search"
	  }, React.createElement(i, {
		ref: "searchIpt",
		type: "search",
		className: "m-searchIpt",
		onBlur: this.props.onBlur,
		onChange: this.props.onChange,
		onFocus: this.props.onFocus,
		value: this.props.value,
		placeholder: this.props.placeholder
	  }))
	}
  });
  e.exports = r
}, function (e, t) {
  var o = React.createClass({
	displayName: "IptWithClear", clearIpt: function () {
	  this.props.onChange("", this.state.REF), this.focusIpt()
	}, focusIpt: function () {
	  var e = $(this.refs.ipt);
	  e.focus()
	}, getDefaultProps: function () {
	  return {
		className: "",
		placeholder: "",
		val: "",
		type: "text",
		isFocused: !1,
		focusToShowClearIcon: !1,
		maxLength: "",
		REF: "",
		onChange: function () {
		}
	  }
	}, getInitialState: function () {
	  return {isFocused: !this.props.focusToShowClearIcon}
	}, componentDidMount: function () {
	  this.setState({REF: this.props.REF || "ipt"})
	}, handleChange: function () {
	  this.props.onChange(this.refs[this.state.REF].value, this.state.REF)
	}, handleFocus: function (e) {
	  this.props.focusToShowClearIcon && setTimeout(function () {
		this.setState({isFocused: !0})
	  }.bind(this), 10), this.props.onFocus && this.props.onFocus(e)
	}, handleBlur: function () {
	  this.props.focusToShowClearIcon && setTimeout(function () {
		this.setState({isFocused: !1})
	  }.bind(this)), this.props.onBlur && this.props.onBlur()
	}, render: function () {
	  return React.createElement("div", {className: "m-ipt " + this.props.className}, React.createElement("input", {
		type: this.props.type,
		ref: this.state.REF,
		className: "ipt",
		placeholder: this.props.placeholder,
		value: this.props.value,
		onChange: this.handleChange,
		onFocus: this.handleFocus,
		onBlur: this.handleBlur,
		disabled: this.props.disabled,
		maxLength: this.props.maxLength
	  }), React.createElement("i", {
		className: "icon u-icon u-icon-clearIpt",
		onClick: this.clearIpt,
		style: {display: this.props.value && this.state.isFocused ? "inline-block" : "none"}
	  }))
	}
  });
  e.exports = o
}, function (e, t, o) {
  var i = o(7), r = o(4), n = o(6), c = o(11);
  e.exports = function () {
	var e = "http://" + i.WEB_HOST, t = {};
	return t._m_forcepc_ = !0, r._$isNew() && (t._m_anonid_ = r._$getNew()), e = n.appendURL(e, t), c._$isShowFt() ? React.createElement("div", {className: "m-ftWrap"}, React.createElement("div", {className: "m-ft g-row"}, React.createElement("div", {className: "bd"}, React.createElement("a", {
	  href: r._$getDownloadLink(),
	  className: "goApp w-button w-button-ghost w-button-s"
	}, "下载APP"), React.createElement("a", {
	  href: e,
	  className: "goWeb w-button w-button-ghost w-button-s"
	}, "电脑版")), React.createElement("p", {className: "copyright"}, "网易公司版权所有 © 1997-", (new Date).getFullYear(), React.createElement("br", null), "食品经营许可证：JY13301080111719"))) : React.createElement("div", null)
  }
}, function (e, t, o) {
  var i = o(31), r = React.createClass({
	displayName: "GoToTop", componentDidMount: function () {
	  window.addEventListener("scroll", this.handleScroll)
	}, goToTop: function () {
	  $("body, html").animate({scrollTop: 0}, 500)
	}, componentWillUnmount: function () {
	  window.removeEventListener("scroll", this.handleScroll)
	}, handleScroll: i(function () {
	  var e = window.innerHeight, t = $(document), o = $(this.refs.goToTop), i = t.scrollTop();
	  i > e ? o.is(":hidden") && o.stop(!0, !0).fadeIn(200) : o.is(":visible") && o.stop(!0, !0).fadeOut(200)
	}, 50), render: function () {
	  return React.createElement("i", {ref: "goToTop", className: "m-goToTop", onClick: this.goToTop})
	}
  });
  e.exports = r
}, , , , function (e, t, o) {
  var i = o(43), r = {
	isEmpty: function (e) {
	  return "" == $.trim(e)
	}, isLegal: function (e, t) {
	  var o = /[,%\'\"\/\\;|\<\>]/;
	  return !o.test(e)
	}, isNumber: function (e) {
	  return !!/^[0-9]*$/.test(e)
	}, isEmail: function (e) {
	  return !!i.isValid(e)
	}, isCellPhone: function (e, t) {
	  return t ? /^\d+$/.test(e) && e.length >= 8 && e.length <= 20 : 11 == e.length ? /^1[34578]\d{9}$/.test(e) : !1
	}, isOverflow: function (e, t) {
	  return t = t || 20, this.getStringLength(e) > t
	}, isDate: function (e, t) {
	  e = (e + "").replace("-", "");
	  var o = /(\d{4})(0\d|1[012])(0\d|[12]\d|3[01])/;
	  if (e.length < 6 || e.length > 8 || /[^0-9]/g.test(e)) return "日期格式不正确";
	  if (6 == e.length) e = e.replace(/((?=((\d){1,2})$))/g, "0"); else if (7 == e.length) {
		var i = e.replace(/(\d)$/g, "0$1");
		e = o.test(i) ? i : e.replace(/(\d{3})$/g, "0$1")
	  }
	  return o.test(e) ? (e = e.replace(/((?=((\d{2}){1,2})$))/g, "-"), t ? e : !0) : "日期格式不正确"
	}, isPic: function (e) {
	  var t, o = !1;
	  if (-1 !== e.indexOf(".")) {
		t = e.substring(e.lastIndexOf(".") + 1, e.length).toLowerCase();
		for (var i = ["bmp", "jpg", "png", "tiff", "gif", "pcx", "tga", "exif", "fpx", "svg", "cdr", "pcd", "dxf", "ufo", "eps", "raw"], r = 0; r < i.length; r++) if (t === i[r]) {
		  o = !0;
		  break
		}
	  }
	  return t && o
	}, getStringLength: function (e) {
	  var t = 0, o = 0;
	  for (o = 0; o < e.length; o++) e.charCodeAt(o) > 255 ? t += 2 : t++;
	  return t
	}, isChinese: function (e) {
	  for (var t = !1, o = 0, i = e.length; i > o; o++) if (e.charCodeAt(o) > 255) {
		t = !0;
		break
	  }
	  return t
	}, is163Email: function (e, t) {
	  var o = this, i = ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "188.com"];
	  if (i = $.makeArray(t).concat(i), o.isEmail(e)) {
		var r = e.split("@")[1];
		return !($.inArray(r, i) < 0)
	  }
	  return !1
	}, __log: function (e) {
	  console.log(e)
	}, checkPositiveNumber: function (e, t, o) {
	  return o || "undefined" != typeof t ? "number" != typeof t ? (this.__log(e, "应该是数字"), !1) : 0 >= t ? (this.__log(e, "应该是正数"), !1) : !0 : !0
	}, checkNotNegativeNumber: function (e, t, o) {
	  return o || "undefined" != typeof t ? "number" != typeof t ? (this.__log(e, "应该是数字"), !1) : 0 > t ? (this.__log(e, "应该是非负数"), !1) : !0 : !0
	}, checkNotEmptyString: function (e, t, o) {
	  return o || "undefined" != typeof t && ("string" != typeof t || "" !== t) ? "string" != typeof t ? (this.__log(e, "应该是字符串"), !1) : 0 === $.trim(t).length ? (this.__log(e, "应该是非空字符串"), !1) : !0 : !0
	}, checkStringInArray: function (e, t, o, i) {
	  return i || "undefined" != typeof t ? this.checkNotEmptyString(e, t, i) ? -1 === $.inArray(t, o) ? (this.__log(e, "字符串应该在数组中"), !1) : !0 : !1 : !0
	}, checkArray: function (e, t, o, i) {
	  if (!i && "undefined" == typeof t) return !0;
	  if (!$.isArray(t)) return this.__log(e, "应该是数组"), !1;
	  for (var r = 0; r < t.length; r++) if (typeof t[r] !== o) return this.__log(e, "应该是类型：" + o), !1;
	  return !0
	}, checkBoolean: function (e, t, o) {
	  return (o || "undefined" != typeof t) && "boolean" != typeof t ? (this.__log(e, "应该是boolean"), !1) : !0
	}
  };
  e.exports = r
}, function (e, t) {
  for (var o = "([\\w!#$%&'*+-/=?\\^_`{|}~\\.]+)", i = "([-\\w]+(\\.[-\\w]+)+)", r = o + "@" + i, n = ['\\"(.+)\\"[ ]*<' + r + ">", "\\'(.+)\\'[ ]*<" + r + ">", "([^\"']+)<" + r + ">", "<" + r + ">", '\\"' + r + '\\"', "\\'" + r + "\\'", r, "[ \\\"\\']?(.+)[ \\\"\\']?[ ]*<[ ]*" + r + "[ ]*>"], c = [], a = n.length - 1; a >= 0; a--) c.push(new RegExp(n[a]));
  var s = {
	_cache: {},
	emailPattern: "(\\w+[\\w\\-\\+]*\\w+@\\w+[\\w\\.\\-]*\\w+)",
	DEFAULT_SEP: ";",
	isValid: function (e) {
	  return null != this._parseEmail(e)
	},
	_parseEmail: function (e) {
	  e = $.trim(e);
	  for (var t = {}, o = 0; o < c.length; o++) {
		var i = e.match(c[o]);
		if (null != i) return 5 == i.length ? (t.name = i[1].replace(/"/g, ""), t.mail = i[2] + "@" + i[3], t) : 4 == i.length ? (t.name = i[1].replace(/"/g, ""), t.mail = i[1] + "@" + i[2], t) : null
	  }
	}
  };
  e.exports = s
}, function (e, t, o) {
  var i = Object.assign || function (e) {
	for (var t = 1; t < arguments.length; t++) {
	  var o = arguments[t];
	  for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
	}
	return e
  }, r = o(2), n = o(4), c = o(45), a = React.createClass({
	displayName: "ConfirmModal", getInitialState: function () {
	  return {modalIsOpen: !0}
	}, onCancel: function () {
	  this.setState({modalIsOpen: !1}), this.props.onCancelCallBack()
	}, onOk: function () {
	  this.setState({modalIsOpen: !1}), this.props.onOkCallBack()
	}, componentDidUpdate: function () {
	  this.state.modalIsOpen || this.props.onUnmount()
	}, render: function () {
	  return React.createElement("div", null, React.createElement(c, {isOpen: this.state.modalIsOpen}, React.createElement("div", {className: "m-modal m-modal-confirm"}, React.createElement("p", {
		className: "txt",
		dangerouslySetInnerHTML: {__html: this.props.tips}
	  }), React.createElement("div", {className: "m-table btns"}, React.createElement("div", {className: "tr"}, this.props.noCancel ? null : React.createElement("div", {className: "td"}, React.createElement("a", {
		href: "javascript:void(0);",
		onClick: this.onCancel,
		className: "w-btn"
	  }, this.props.cancelText)), React.createElement("div", {className: "td"}, React.createElement("a", {
		href: "javascript:void(0);",
		onClick: this.onOk,
		className: "w-btn w-btn-1 nb"
	  }, this.props.okText)))))))
	}
  }), s = r.extend({
	config: function (e) {
	  n._$extend(e, {tips: "", okText: "确定", cancelText: "取消", noCancel: !1})
	}, init: function (e) {
	  this.supr(e), $(document.body).append('<div id="j-confirm-con"></div>'), ReactDOM.render(React.createElement(a, i({}, this.data, {
		onOkCallBack: this.okCallBack.bind(this),
		onCancelCallBack: this.cancelCallBack.bind(this),
		onUnmount: this.unmount.bind(this)
	  })), $("#j-confirm-con").get(0))
	}, okCallBack: function () {
	  this.$emit("onOk")
	}, cancelCallBack: function () {
	  this.$emit("onCancel")
	}, unmount: function () {
	  ReactDOM.unmountComponentAtNode(document.getElementById("j-confirm-con")), $("#j-confirm-con").remove()
	}
  });
  e.exports = s
}, function (e, t, o) {
  e.exports = o(22)(16)
}, , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, o) {
  e.exports = o(22)(11)
}, , , , , , function (e, t, o) {
  e.exports = o(22)(17)
}, , , , , function (e, t, o) {
  o(83);
  var i = React.createClass({
	displayName: "DefaultPage", componentDidMount: function () {
	  this.disableSwipe()
	}, componentWillUnmount: function () {
	  document.removeEventListener("touchstart", this.handleTouchStart), document.removeEventListener("touchmove", this.handleTouchMove)
	}, handleTouchStart: function (e) {
	  var t = e.touches[0];
	  this.startX = t.clientX, this.startY = t.clientY
	}, handleTouchMove: function (e) {
	  var t = e.touches[0];
	  this.endX = t.clientX, this.endY = t.clientY, this.endX - this.startX > Math.abs(this.endY - this.startY) && this.startX < 160 && e.preventDefault()
	}, render: function () {
	  var e = (this.props.className || "").split(" ").map(function (e) {
		return "m-defaultPage-" + e
	  }).join(" ");
	  return React.createElement("div", {className: "m-defaultPage " + e}, React.createElement("div", {className: "container"}, React.createElement("div", {
		className: "img",
		onClick: this.props.onClick
	  }), React.createElement("div", {
		className: "txt",
		onClick: this.props.onClick
	  }, this.props.txt || this.props.children)))
	}, disableSwipe: function () {
	  document.addEventListener("touchstart", this.handleTouchStart), document.addEventListener("touchmove", this.handleTouchMove)
	}
  });
  e.exports = i
}, function (e, t) {
}, , , , , , , function (e, t, o) {
  var i = o(91), r = o(106), n = o(15), c = o(92), a = o(44), s = {
	id: 0,
	provinceId: "",
	provinceName: "",
	cityId: "",
	cityName: "",
	districtId: "",
	districtName: "",
	address: "",
	name: "",
	mobile: "",
	dft: !1
  }, p = React.createClass({
	displayName: "Container", getDefaultProps: function () {
	  return {addressIcon: "del", currentAddressId: 0}
	}, getInitialState: function () {
	  return {listDisplay: "block", formDisplay: "none", listData: [], formData: $.extend({}, s)}
	}, componentDidMount: function () {
	  this.loadAddressListFromServer()
	}, loadAddressListFromServer: function () {
	  var e = c.getList();
	  e.done(function (e) {
		this.setState({listData: e.data || []})
	  }.bind(this))
	}, editAddress: function (e) {
	  var t = void 0 != e.id ? e : $.extend({}, s);
	  this.setState({listDisplay: "none", formDisplay: "block", formData: t})
	}, selectAddress: function (e) {
	  this.props.selectAddress && this.props.selectAddress(e)
	}, updateAddress: function (e) {
	  var t = c.getList();
	  t.done(function (e) {
		n.notify("保存成功", "success", 1e3), setTimeout(function () {
		  this.setState({formData: s, listDisplay: "block", formDisplay: "none", listData: e.data || []})
		}.bind(this), 1e3)
	  }.bind(this))
	}, showAddressForm: function (e) {
	  this.setState({listDisplay: "none", formDisplay: "block"})
	}, hideAddressForm: function (e) {
	  this.setState({listDisplay: "block", formDisplay: "none"})
	}, deleteAddress: function (e) {
	  var t = c.deleteAddress({id: e.id});
	  t.done(function (e) {
		this.loadAddressListFromServer()
	  }.bind(this)), t.fail(function (e, t, o) {
		n.notify(t, "error")
	  })
	}, tapAddressIcon: function (e) {
	  if ("del" === this.props.addressIcon) {
		new a({
		  data: {tips: "确定删除该地址？"}, events: {
			onOk: function () {
			  this.deleteAddress(e)
			}.bind(this), onCancel: function () {
			}
		  }
		})
	  } else this.editAddress(e)
	}, cancelUpdateAddress: function () {
	  this.hideAddressForm()
	}, tapCreateAddress: function () {
	  this.showAddressForm(), this.setState({formData: $.extend({}, s)})
	}, render: function () {
	  var e = this.state, t = e.listData.length, o = e.formData;
	  return 0 == t && (o.dft = !0), React.createElement("div", {className: "m-addressManager"}, React.createElement(r, {
		display: e.listDisplay,
		listData: e.listData,
		addressIcon: this.props.addressIcon,
		currentAddressId: this.props.currentAddressId,
		tapAddress: this.props.tapAddress || this.editAddress,
		tapAddressIcon: this.tapAddressIcon,
		tapCreateAddress: this.tapCreateAddress
	  }), React.createElement(i, {
		display: e.formDisplay,
		formData: o,
		cancelUpdateAddress: this.cancelUpdateAddress,
		updateAddress: this.updateAddress,
		source: "addressManager",
		isIncludeOverseas: !0
	  }))
	}
  });
  e.exports = p
}, function (e, t, o) {
  var i = o(92), r = o(15), n = o(42), c = o(95), a = o(30), s = o(105), p = React.createClass({
	displayName: "AddressForm", getDefaultProps: function () {
	  return {noCancel: !1}
	}, getInitialState: function () {
	  return {
		provinceList: [],
		cityList: [],
		districtList: [],
		formData: $.extend(!0, {}, this.props.formData),
		originalMobile: $.extend(!0, {}, this.props.formData).mobile,
		showAreaPicker: !1
	  }
	}, componentWillReceiveProps: function (e) {
	  var t = $.extend(!0, {}, e.formData);
	  this.setState({formData: t, originalMobile: t.mobile})
	}, handleInputChange: function (e, t) {
	  var o = this.state.formData;
	  o[e] = t.target.value, this.setState({formData: o})
	}, handleCheckboxChange: function (e) {
	  var t = this.state.formData;
	  t.dft = !t.dft, this.setState({formData: t})
	}, handleClickArea: function () {
	  this.toggleShowAreaPicker()
	}, handleCloseAreaPicker: function () {
	  this.setState({showAreaPicker: !1})
	}, handleConfirmAreaPicker: function (e) {
	  var t = this.state.formData;
	  t.provinceId = e.provinceId, t.cityId = e.cityId, t.districtId = e.districtId, t.provinceName = this.getProvinceName(), t.cityName = this.getCityName(), t.districtName = this.getDistrictName(), this.setState({
		formData: this.state.formData,
		showAreaPicker: !1
	  })
	}, toggleShowAreaPicker: function () {
	  this.setState({showAreaPicker: !this.state.showAreaPicker})
	}, cancelUpdateAddress: function () {
	  this.props.cancelUpdateAddress()
	}, updateAddress: function () {
	  var e, t = this.state.formData;
	  this.validate() && (t.districtId || (t.districtId = 0), this.props.isOrderUpdate ? this.props.updateAddress(t) : (e = i.upsertAddress(t), e.done(function (e) {
		"confirmOrder" == this.props.source && (this.props.shipAddressList && 0 == this.props.shipAddressList.length || this.props.currentAddressId == e.data.id) && this.props.reloadOrder && this.props.reloadOrder({shipAddressId: e.data.id}), this.props.updateAddress(e.data)
	  }.bind(this)), e.fail(function (e, t, o) {
		r.notify(t || "保存地址错误", "error")
	  })))
	}, isAreaEmpty: function () {
	  return !this.state.formData.provinceId
	}, validate: function () {
	  var e = this.state.formData;
	  return "" == e.provinceId ? (this.showError("请选择省市区"), !1) : "" == e.address.trim() ? (this.showError("请输入详细地址"), !1) : !this.getIsSelectedOverseas() || n.isLegal(e.address) && !n.isChinese(e.address) ? e.address.trim().length > 80 ? (this.showError("详细地址不能超过80个字符"), !1) : "" == e.name.trim() ? (this.showError("请输入收件人姓名"), !1) : !this.getIsSelectedOverseas() || n.isLegal(e.name) && !n.isChinese(e.name) ? "" == e.mobile ? (this.showError("请填写联系方式"), !1) : this.getIsSelectedOverseas() || e.mobile == this.state.originalMobile || n.isCellPhone(e.mobile, !0, !0) ? this.getIsSelectedOverseas() && e.mobile != this.state.originalMobile && !/^\d+$/.test(e.mobile) ? (this.showError("联系方式请输入数字"), !1) : this.getIsSelectedOverseas() && "" == e.zipCode.trim() ? (this.showError("请填写邮编"), !1) : this.getIsSelectedOverseas() && e.email && !n.isEmail(e.email) ? (this.showError("邮箱格式不正确"), !1) : !0 : (this.showError("请输入正确的手机号"), !1) : (this.showError("请输入英文姓名"), !1) : (this.showError("请输入英文地址"), !1)
	}, showError: function (e) {
	  r.notify(e, "success")
	}, getAreaStr: function () {
	  if (this.getIsSelectedOverseas()) {
		var e = "(" + this.getCountry()[2] + ") " + this.getCountry()[0] + " ";
		return e += this.getCityList().length > 1 ? " " + this.getCityName() + " " + this.getDistrictName() : " " + this.getDistrictName()
	  }
	  return this.getProvinceName() + " " + this.getCityName() + " " + this.getDistrictName()
	}, getProvinceName: function () {
	  var e = this.state.formData;
	  return i.getProvinceName({provinceId: e.provinceId, isIncludeOverseas: this.props.isIncludeOverseas})
	}, getCityName: function () {
	  var e = this.state.formData;
	  return i.getCityName({provinceId: e.provinceId, cityId: e.cityId})
	}, getDistrictName: function () {
	  var e = this.state.formData;
	  return i.getDistrictName({provinceId: e.provinceId, cityId: e.cityId, districtId: e.districtId})
	}, getIsSelectedOverseas: function () {
	  var e = this.state.formData;
	  return i.isOverseas(e.provinceId)
	}, getOverseasHMTTel: function () {
	  var e = this.state.formData;
	  return i.getOverseasHMTTel(e.provinceId)
	}, getCountry: function () {
	  var e = this.state.formData;
	  return i.getCountry(e.provinceId)
	}, getCityList: function () {
	  var e = this.state.formData;
	  return i.getCity({provinceId: e.provinceId})
	}, renderHMTTel: function () {
	  var e = this.state.formData;
	  return 81e4 == e.provinceId ? React.createElement("div", {className: "hmtTel"}, "(区码：852)") : 82e4 == e.provinceId ? React.createElement("div", {className: "hmtTel"}, "(区码：853)") : 71e4 == e.provinceId ? React.createElement("div", {className: "hmtTel"}, "(区码：886)") : this.getIsSelectedOverseas() ? React.createElement("div", {className: "hmtTel"}, "(区码：", this.getOverseasHMTTel(), ")") : null
	}, render: function () {
	  var e = this.props, t = e.display, o = this.state.formData, i = null;
	  return this.props.noCancel || (i = React.createElement("div", {className: "td"}, React.createElement("a", {
		href: "javascript:;",
		className: "address-btn address-btn-1",
		onClick: this.cancelUpdateAddress
	  }, "取消"))), React.createElement("div", {style: {display: t}}, React.createElement("form", {className: "m-address-form"}, React.createElement("div", {className: "section"}, React.createElement("div", {className: "row"}, React.createElement("p", {
		className: a("input area", {disabled: this.isAreaEmpty()}),
		onClick: this.handleClickArea
	  }, this.isAreaEmpty() ? "省份、城市、区县" : this.getAreaStr()), React.createElement(c, {
		isOpen: this.state.showAreaPicker,
		isIncludeOverseas: this.props.isIncludeOverseas,
		provinceId: o.provinceId,
		cityId: o.cityId,
		districtId: o.districtId,
		onClose: this.handleCloseAreaPicker,
		onConfirm: this.handleConfirmAreaPicker
	  }), this.renderHMTTel()), React.createElement("div", {className: "row row-0"}, React.createElement("input", {
		name: "address",
		placeholder: "详细地址, 如街道、楼盘号等" + (this.getIsSelectedOverseas() ? "(仅支持英文)" : ""),
		value: o.address,
		onChange: this.handleInputChange.bind(this, "address")
	  })), React.createElement("div", {className: "row row-0"}, React.createElement("input", {
		name: "name",
		placeholder: "姓名" + (this.getIsSelectedOverseas() ? "(仅支持英文)" : ""),
		value: o.name,
		onChange: this.handleInputChange.bind(this, "name")
	  })), React.createElement("div", {className: "row row-0"}, React.createElement("input", {
		name: "mobile",
		placeholder: this.getIsSelectedOverseas() ? "联系方式" : "手机号码",
		type: "tel",
		value: o.mobile,
		onChange: this.handleInputChange.bind(this, "mobile")
	  })), !!this.getIsSelectedOverseas() && React.createElement("div", {className: "row row-0"}, React.createElement("input", {
		name: "zipCode",
		placeholder: "邮编",
		value: o.zipCode,
		onChange: this.handleInputChange.bind(this, "zipCode")
	  })), !!this.getIsSelectedOverseas() && React.createElement("div", {className: "row row-0"}, React.createElement("input", {
		name: "email",
		placeholder: "邮箱",
		value: o.email,
		onChange: this.handleInputChange.bind(this, "email")
	  }))), React.createElement("div", {className: "section section-1"}, React.createElement("div", {
		className: "w-chkbox",
		onClick: this.handleCheckboxChange
	  }, React.createElement(s, {checked: o.dft}), React.createElement("span", null, "设为默认地址")))), React.createElement("div", {className: "m-table fixed"}, React.createElement("div", {className: "tr"}, i, React.createElement("div", {className: "td"}, React.createElement("a", {
		onClick: this.updateAddress,
		href: "javascript:void(0);",
		className: "address-btn"
	  }, "保存")))))
	}
  });
  e.exports = p
}, function (e, t, o) {
  function i(e, t) {
	var o = "";
	return e.some(function (e) {
	  return e.id == t ? (o = e.zonename, !0) : !1
	}), o
  }

  var r = o(93), n = o(17), c = o(94), a = n("/xhr/address", [{
	name: "list",
	alias: "getList",
	ajaxConfig: {type: "GET"}
  }, "upsertAddress", {name: "deleteAddress", ajaxConfig: {type: "GET"}}, "updateLayawayAddress"]);
  a.getProvince = function (e) {
	if (e) {
	  var t = [];
	  return r.code.map(function (e, o) {
		t.push({id: e, zonename: r.prov[o]})
	  }), c.code.map(function (e, o) {
		t.push({id: e, zonename: c.prov[o]})
	  }), t
	}
	return r.code.map(function (e, t) {
	  return {id: e, zonename: r.prov[t]}
	})
  }, a.getCity = function (e) {
	return e.provinceId ? r["code" + e.provinceId] ? r["code" + e.provinceId].map(function (t, o) {
	  return {id: t, zonename: r["prov" + e.provinceId][o]}
	}) : c["code" + e.provinceId].map(function (t, o) {
	  return {id: t, zonename: c["prov" + e.provinceId][o]}
	}) : []
  }, a.getDistrict = function (e) {
	if (!e.provinceId || !e.cityId) return [];
	var t = r["codeprov" + e.provinceId + "city" + e.cityId];
	return t ? t.map(function (t, o) {
	  return {id: t, zonename: r["prov" + e.provinceId + "city" + e.cityId][o]}
	}) : (t = c["codeprov" + e.provinceId + "city" + e.cityId], t ? t.map(function (t, o) {
	  return {id: t, zonename: c["prov" + e.provinceId + "city" + e.cityId][o]}
	}) : [])
  }, a.getProvinceName = function (e) {
	return i(this.getProvince(e.isIncludeOverseas), e.provinceId)
  }, a.getCityName = function (e) {
	return i(this.getCity({provinceId: e.provinceId}), e.cityId)
  }, a.getDistrictName = function (e) {
	return i(this.getDistrict({provinceId: e.provinceId, cityId: e.cityId}), e.districtId)
  }, a.isMunicipality = function (e) {
	return 1 === this.getCity({provinceId: e.provinceId}).length
  }, a.isHMTAddress = function (e) {
	return e.indexOf("香港") > -1 || e.indexOf("澳门") > -1 || e.indexOf("台湾") > -1
  }, a.isOverseas = function (e) {
	return !(r["code" + e] && r["code" + e].length > 0)
  }, a.getOverseasHMTTel = function (e) {
	return c.countryMap[e][1]
  }, a.getCountry = function (e) {
	return c.countryMap[e]
  }, e.exports = a
}, function (e, t) {
  var o = {
	code: [11e4, 12e4, 13e4, 14e4, 15e4, 21e4, 22e4, 23e4, 31e4, 32e4, 33e4, 34e4, 35e4, 36e4, 37e4, 41e4, 42e4, 43e4, 44e4, 45e4, 46e4, 5e5, 51e4, 52e4, 53e4, 54e4, 61e4, 62e4, 63e4, 64e4, 65e4, 71e4, 81e4, 82e4],
	code110000: [110100],
	code120000: [120100],
	code130000: [130100, 130200, 130300, 130400, 130500, 130600, 130700, 130800, 130900, 131e3, 131100],
	code140000: [140100, 140200, 140300, 140400, 140500, 140600, 140700, 140800, 140900, 141e3, 141100],
	code150000: [150100, 150200, 150300, 150400, 150500, 150600, 150700, 150800, 150900, 152200, 152500, 152900],
	code210000: [210100, 210200, 210300, 210400, 210500, 210600, 210700, 210800, 210900, 211e3, 211100, 211200, 211300, 211400],
	code220000: [220100, 220200, 220300, 220400, 220500, 220600, 220700, 220800, 222400],
	code230000: [230100, 230200, 230300, 230400, 230500, 230600, 230700, 230800, 230900, 231e3, 231100, 231200, 232700],
	code310000: [310100],
	code320000: [320100, 320200, 320300, 320400, 320500, 320600, 320700, 320800, 320900, 321e3, 321100, 321200, 321300],
	code330000: [330100, 330200, 330300, 330400, 330500, 330600, 330700, 330800, 330900, 331e3, 331100],
	code340000: [340100, 340200, 340300, 340400, 340500, 340600, 340700, 340800, 341e3, 341100, 341200, 341300, 341500, 341600, 341700, 341800, 1001095],
	code350000: [350100, 350200, 350300, 350400, 350500, 350600, 350700, 350800, 350900],
	code360000: [360100, 360200, 360300, 360400, 360500, 360600, 360700, 360800, 360900, 361e3, 361100],
	code370000: [370100, 370200, 370300, 370400, 370500, 370600, 370700, 370800, 370900, 371e3, 371100, 371200, 371300, 371400, 371500, 371600, 371700],
	code410000: [410100, 410200, 410300, 410400, 410500, 410600, 410700, 410800, 410900, 411e3, 411100, 411200, 411300, 411400, 411500, 411600, 411700, 419e3, 1001210],
	code420000: [420100, 420200, 420300, 420500, 420600, 420700, 420800, 420900, 421e3, 421100, 421200, 421300, 422800, 429e3, 1001243, 1001252, 1001254],
	code430000: [430100, 430200, 430300, 430400, 430500, 430600, 430700, 430800, 430900, 431e3, 431100, 431200, 431300, 433100, 1001260],
	code440000: [440100, 440200, 440300, 440400, 440500, 440600, 440700, 440800, 440900, 441200, 441300, 441400, 441500, 441600, 441700, 441800, 441900, 442e3, 445100, 445200, 445300],
	code450000: [450100, 450200, 450300, 450400, 450500, 450600, 450700, 450800, 450900, 451e3, 451100, 451200, 451300, 451400],
	code460000: [460100, 460200, 460300, 469e3, 1001215, 1001217, 1001219, 1001221, 1001223, 1001225, 1001228],
	code500000: [500100],
	code510000: [510100, 510300, 510400, 510500, 510600, 510700, 510800, 510900, 511e3, 511100, 511300, 511400, 511500, 511600, 511700, 511800, 511900, 512e3, 513200, 513300, 513400],
	code520000: [520100, 520200, 520300, 520400, 522200, 522300, 522400, 522600, 522700, 1001311, 1001324, 1001351, 1001360],
	code530000: [530100, 530300, 530400, 530500, 530600, 530700, 530800, 530900, 532300, 532500, 532600, 532800, 532900, 533100, 533300, 533400, 1001002, 1001006, 1001016, 1001029, 1001043, 1001055, 1001078, 1001083],
	code540000: [540100, 542100, 542200, 542300, 542400, 542500, 542600],
	code610000: [610100, 610200, 610300, 610400, 610500, 610600, 610700, 610800, 610900, 611e3],
	code620000: [620100, 620200, 620300, 620400, 620500, 620600, 620700, 620800, 620900, 621e3, 621100, 621200, 622900, 623e3, 1001275, 1001289],
	code630000: [630100, 632100, 632200, 632300, 632500, 632600, 632700, 632800, 1001404, 1001414, 1001419, 1001424, 1001429, 1001434],
	code640000: [640100, 640200, 640300, 640400, 640500],
	code650000: [650100, 650200, 652100, 652200, 652300, 652700, 652800, 652900, 653e3, 653100, 653200, 654e3, 654200, 654300, 659e3, 1001132, 1001137, 1001141, 1001152, 1001154, 1001163, 1001175],
	code710000: [710100, 710200, 710300, 710400, 710500, 710600, 710700, 719e3],
	code810000: [810100, 810200, 810300],
	code820000: [820100, 820200, 820300],
	codeprov110000city110100: [110101, 110102, 110105, 110106, 110107, 110108, 110109, 110111, 110112, 110113, 110114, 110115, 110116, 110117, 110118, 1002002, 0],
	codeprov120000city120100: [120101, 120102, 120103, 120104, 120105, 120106, 120110, 120111, 120112, 120113, 120114, 120115, 120116, 120221, 120223, 120225, 1001088, 0],
	codeprov130000city130100: [130102, 130103, 130104, 130105, 130107, 130108, 130121, 130123, 130124, 130125, 130126, 130127, 130128, 130129, 130130, 130131, 130132, 130133, 130181, 130182, 130183, 130184, 130185, 0],
	codeprov130000city130200: [130202, 130203, 130204, 130205, 130207, 130208, 130223, 130224, 130225, 130227, 130229, 130230, 130281, 130283, 1001200, 1001201, 0],
	codeprov130000city130300: [130302, 130303, 130304, 130321, 130322, 130323, 130324, 1001204, 1001205, 0],
	codeprov130000city130400: [130402, 130403, 130404, 130406, 130421, 130423, 130424, 130425, 130426, 130427, 130428, 130429, 130430, 130431, 130432, 130433, 130434, 130435, 130481, 0],
	codeprov130000city130500: [130502, 130503, 130521, 130522, 130523, 130524, 130525, 130526, 130527, 130528, 130529, 130530, 130531, 130532, 130533, 130534, 130535, 130581, 130582, 0],
	codeprov130000city130600: [130602, 130603, 130604, 130621, 130622, 130623, 130624, 130625, 130626, 130627, 130628, 130629, 130630, 130631, 130632, 130633, 130634, 130635, 130636, 130637, 130638, 130681, 130682, 130683, 130684, 0],
	codeprov130000city130700: [130702, 130703, 130705, 130706, 130721, 130722, 130723, 130724, 130725, 130726, 130727, 130728, 130729, 130730, 130731, 130732, 130733, 0],
	codeprov130000city130800: [130802, 130803, 130804, 130821, 130822, 130823, 130824, 130825, 130826, 130827, 130828, 1001197, 1001198, 1001199, 0],
	codeprov130000city130900: [130902, 130903, 130921, 130922, 130923, 130924, 130925, 130926, 130927, 130928, 130929, 130930, 130981, 130982, 130983, 130984, 1001203, 0],
	codeprov130000city131000: [131002, 131003, 131022, 131023, 131024, 131025, 131026, 131028, 131081, 131082, 1001202, 0],
	codeprov130000city131100: [131102, 131121, 131122, 131123, 131124, 131125, 131126, 131127, 131128, 131181, 131182, 0],
	codeprov140000city140100: [140105, 140106, 140107, 140108, 140109, 140110, 140121, 140122, 140123, 140181, 0],
	codeprov140000city140200: [140202, 140203, 140211, 140212, 140221, 140222, 140223, 140224, 140225, 140226, 140227, 1001103, 0],
	codeprov140000city140300: [140302, 140303, 140311, 140321, 140322, 0],
	codeprov140000city140400: [140402, 140411, 140421, 140423, 140424, 140425, 140426, 140427, 140428, 140429, 140430, 140431, 140481, 0],
	codeprov140000city140500: [140502, 140521, 140522, 140524, 140525, 140581, 0],
	codeprov140000city140600: [140602, 140603, 140621, 140622, 140623, 140624, 0],
	codeprov140000city140700: [140702, 140721, 140722, 140723, 140724, 140725, 140726, 140727, 140728, 140729, 140781, 0],
	codeprov140000city140800: [140802, 140821, 140822, 140823, 140824, 140825, 140826, 140827, 140828, 140829, 140830, 140881, 140882, 0],
	codeprov140000city140900: [140902, 140921, 140922, 140923, 140924, 140925, 140926, 140927, 140928, 140929, 140930, 140931, 140932, 140981, 0],
	codeprov140000city141000: [141002, 141021, 141022, 141023, 141024, 141025, 141026, 141027, 141028, 141029, 141030, 141031, 141032, 141033, 141034, 141081, 141082, 0],
	codeprov140000city141100: [141102, 141121, 141122, 141123, 141124, 141125, 141126, 141127, 141128, 141129, 141130, 141181, 141182, 0],
	codeprov150000city150100: [150102, 150103, 150104, 150105, 150121, 150122, 150123, 150124, 150125, 0],
	codeprov150000city150200: [150202, 150203, 150204, 150205, 150206, 150207, 150221, 150222, 150223, 0],
	codeprov150000city150300: [150302, 150303, 150304, 0],
	codeprov150000city150400: [150402, 150403, 150404, 150421, 150422, 150423, 150424, 150425, 150426, 150428, 150429, 150430, 0],
	codeprov150000city150500: [150502, 150521, 150522, 150523, 150524, 150525, 150526, 150581, 0],
	codeprov150000city150600: [150602, 150621, 150622, 150623, 150624, 150625, 150626, 150627, 0],
	codeprov150000city150700: [150702, 150721, 150722, 150723, 150724, 150725, 150726, 150727, 150781, 150782, 150783, 150784, 150785, 0],
	codeprov150000city150800: [150802, 150821, 150822, 150823, 150824, 150825, 150826, 0],
	codeprov150000city150900: [150902, 150921, 150922, 150923, 150924, 150925, 150926, 150927, 150928, 150929, 150981, 0],
	codeprov150000city152200: [152201, 152202, 152221, 152222, 152223, 152224, 0],
	codeprov150000city152500: [152501, 152502, 152522, 152523, 152524, 152525, 152526, 152527, 152528, 152529, 152530, 152531, 0],
	codeprov150000city152900: [152921, 152922, 152923, 0],
	codeprov210000city210100: [210102, 210103, 210104, 210105, 210106, 210111, 210112, 210113, 210114, 210122, 210123, 210124, 210181, 1001369, 0],
	codeprov210000city210200: [210202, 210203, 210204, 210211, 210212, 210213, 210224, 210281, 210282, 210283, 1001370, 0],
	codeprov210000city210300: [210302, 210303, 210304, 210311, 210321, 210323, 210381, 1001371, 0],
	codeprov210000city210400: [210402, 210403, 210404, 210411, 210421, 210422, 210423, 1001372, 1001373, 0],
	codeprov210000city210500: [210502, 210503, 210504, 210505, 210521, 210522, 1001374, 1001375, 0],
	codeprov210000city210600: [210602, 210603, 210604, 210624, 210681, 210682, 1001376, 0],
	codeprov210000city210700: [210702, 210703, 210711, 210726, 210727, 210781, 210782, 1001377, 0],
	codeprov210000city210800: [210802, 210803, 210804, 210811, 210881, 210882, 0],
	codeprov210000city210900: [210902, 210903, 210904, 210905, 210911, 210921, 210922, 1001378, 0],
	codeprov210000city211000: [211002, 211003, 211004, 211005, 211011, 211021, 211081, 0],
	codeprov210000city211100: [211102, 211103, 211121, 211122, 0],
	codeprov210000city211200: [211202, 211204, 211221, 211223, 211224, 211281, 211282, 0],
	codeprov210000city211300: [211302, 211303, 211321, 211322, 211324, 211381, 211382, 1001379, 0],
	codeprov210000city211400: [211402, 211403, 211404, 211421, 211422, 211481, 0],
	codeprov220000city220100: [220102, 220103, 220104, 220105, 220106, 220112, 220122, 220181, 220182, 220183, 0],
	codeprov220000city220200: [220202, 220203, 220204, 220211, 220221, 220281, 220282, 220283, 220284, 0],
	codeprov220000city220300: [220302, 220303, 220322, 220323, 220381, 220382, 0],
	codeprov220000city220400: [220402, 220403, 220421, 220422, 0],
	codeprov220000city220500: [220502, 220503, 220521, 220523, 220524, 220581, 220582, 0],
	codeprov220000city220600: [220602, 220605, 220621, 220622, 220623, 220681, 0],
	codeprov220000city220700: [220702, 220721, 220722, 220723, 220724, 0],
	codeprov220000city220800: [220802, 220821, 220822, 220881, 220882, 0],
	codeprov220000city222400: [222401, 222402, 222403, 222404, 222405, 222406, 222424, 222426, 0],
	codeprov230000city230100: [230102, 230103, 230104, 230108, 230109, 230110, 230111, 230112, 230123, 230124, 230125, 230126, 230127, 230128, 230129, 230182, 230183, 230184, 0],
	codeprov230000city230200: [230202, 230203, 230204, 230205, 230206, 230207, 230208, 230221, 230223, 230224, 230225, 230227, 230229, 230230, 230231, 230281, 1001440, 0],
	codeprov230000city230300: [230302, 230303, 230304, 230305, 230306, 230307, 230321, 230381, 230382, 0],
	codeprov230000city230400: [230402, 230403, 230404, 230405, 230406, 230407, 230421, 230422, 0],
	codeprov230000city230500: [230502, 230503, 230505, 230506, 230521, 230522, 230523, 230524, 0],
	codeprov230000city230600: [230602, 230603, 230604, 230605, 230606, 230621, 230622, 230623, 230624, 1001442, 0],
	codeprov230000city230700: [230702, 230703, 230704, 230705, 230706, 230707, 230708, 230709, 230710, 230711, 230712, 230713, 230714, 230715, 230716, 230722, 230781, 0],
	codeprov230000city230800: [230803, 230804, 230805, 230811, 230822, 230826, 230828, 230833, 230881, 230882, 0],
	codeprov230000city230900: [230902, 230903, 230904, 230921, 0],
	codeprov230000city231000: [231002, 231003, 231004, 231005, 231024, 231025, 231081, 231083, 231084, 231085, 0],
	codeprov230000city231100: [231102, 231121, 231123, 231124, 231181, 231182, 0],
	codeprov230000city231200: [231202, 231221, 231222, 231223, 231224, 231225, 231226, 231281, 231282, 231283, 0],
	codeprov230000city232700: [232701, 232702, 232703, 232704, 232721, 232722, 232723, 1001441, 0],
	codeprov310000city310100: [202150, 310101, 310104, 310105, 310106, 310107, 310108, 310109, 310110, 310112, 310113, 310114, 310115, 310116, 310117, 310118, 310120, 1001443, 0],
	codeprov320000city320100: [320102, 320103, 320104, 320105, 320106, 320107, 320111, 320113, 320114, 320115, 320116, 320124, 320125, 1001177, 1001178, 1001179, 0],
	codeprov320000city320200: [320202, 320203, 320204, 320205, 320206, 320211, 320281, 320282, 1001180, 0],
	codeprov320000city320300: [320302, 320303, 320305, 320311, 320312, 320321, 320322, 320324, 320381, 320382, 1001189, 0],
	codeprov320000city320400: [320402, 320404, 320405, 320411, 320412, 320481, 320482, 1001192, 0],
	codeprov320000city320500: [320503, 320505, 320506, 320507, 320581, 320582, 320583, 320584, 320585, 1001181, 1001182, 1001183, 1001184, 1001185, 0],
	codeprov320000city320600: [320602, 320611, 320612, 320621, 320623, 320681, 320682, 320684, 1001186, 1001187, 0],
	codeprov320000city320700: [320703, 320705, 320706, 320721, 320722, 320723, 320724, 0],
	codeprov320000city320800: [320802, 320803, 320804, 320811, 320826, 320829, 320830, 320831, 1001190, 1001191, 0],
	codeprov320000city320900: [320902, 320903, 320921, 320922, 320923, 320924, 320925, 320981, 320982, 0],
	codeprov320000city321000: [321002, 321003, 321023, 321081, 321084, 321088, 1001188, 0],
	codeprov320000city321100: [321102, 321111, 321112, 321181, 321182, 321183, 0],
	codeprov320000city321200: [321202, 321203, 321281, 321282, 321283, 321284, 0],
	codeprov320000city321300: [321302, 321311, 321322, 321323, 321324, 0],
	codeprov330000city330100: [330102, 330103, 330104, 330105, 330106, 330108, 330109, 330110, 330122, 330127, 330182, 330183, 330185, 1001212, 0],
	codeprov330000city330200: [330203, 330204, 330205, 330206, 330211, 330212, 330225, 330226, 330281, 330282, 330283, 0],
	codeprov330000city330300: [330302, 330303, 330304, 330322, 330324, 330326, 330327, 330328, 330329, 330381, 330382, 0],
	codeprov330000city330400: [330402, 330411, 330421, 330424, 330481, 330482, 330483, 1001213, 0],
	codeprov330000city330500: [330502, 330503, 330521, 330522, 330523, 0],
	codeprov330000city330600: [330602, 330621, 330624, 330681, 330682, 330683, 0],
	codeprov330000city330700: [330702, 330703, 330723, 330726, 330727, 330781, 330782, 330783, 330784, 0],
	codeprov330000city330800: [330802, 330803, 330822, 330824, 330825, 330881, 0],
	codeprov330000city330900: [330902, 330903, 330921, 330922, 0],
	codeprov330000city331000: [331002, 331003, 331004, 331021, 331022, 331023, 331024, 331081, 331082, 0],
	codeprov330000city331100: [331102, 331121, 331122, 331123, 331124, 331125, 331126, 331127, 331181, 1001214, 0],
	codeprov340000city1001095: [1001096, 1001097, 1001098, 0],
	codeprov340000city340100: [340102, 340103, 340104, 340111, 340121, 340122, 340123, 340124, 340181, 1001091, 0],
	codeprov340000city340200: [340202, 340203, 340207, 340208, 340221, 340222, 340223, 340225, 0],
	codeprov340000city340300: [340302, 340303, 340304, 340311, 340321, 340322, 340323, 0],
	codeprov340000city340400: [340402, 340403, 340404, 340405, 340406, 340421, 0],
	codeprov340000city340500: [340503, 340504, 340521, 340522, 340523, 340596, 1001092, 0],
	codeprov340000city340600: [340602, 340603, 340604, 340621, 0],
	codeprov340000city340700: [340702, 340703, 340711, 340721, 0],
	codeprov340000city340800: [340802, 340803, 340811, 340822, 340823, 340824, 340825, 340826, 340827, 340828, 340881, 0],
	codeprov340000city341000: [341002, 341003, 341004, 341021, 341022, 341023, 341024, 1001094, 0],
	codeprov340000city341100: [341102, 341103, 341122, 341124, 341125, 341126, 341181, 341182, 0],
	codeprov340000city341200: [341202, 341203, 341204, 341221, 341222, 341225, 341226, 341282, 0],
	codeprov340000city341300: [341302, 341321, 341322, 341323, 341324, 1001093, 0],
	codeprov340000city341500: [341502, 341503, 341521, 341522, 341523, 341524, 341525, 0],
	codeprov340000city341600: [341602, 341621, 341622, 341623, 0],
	codeprov340000city341700: [341702, 341721, 341722, 341723, 0],
	codeprov340000city341800: [341802, 341821, 341822, 341823, 341824, 341825, 341881, 0],
	codeprov350000city350100: [350102, 350103, 350104, 350105, 350111, 350121, 350122, 350123, 350124, 350125, 350128, 350181, 350182, 0],
	codeprov350000city350200: [350203, 350205, 350206, 350211, 350212, 350213, 0],
	codeprov350000city350300: [350302, 350303, 350304, 350305, 350322, 0],
	codeprov350000city350400: [350402, 350403, 350421, 350423, 350424, 350425, 350426, 350427, 350428, 350429, 350430, 350481, 0],
	codeprov350000city350500: [350502, 350503, 350504, 350505, 350521, 350524, 350525, 350526, 350527, 350581, 350582, 350583, 0],
	codeprov350000city350600: [350602, 350603, 350622, 350623, 350624, 350625, 350626, 350627, 350628, 350629, 350681, 0],
	codeprov350000city350700: [350702, 350721, 350722, 350723, 350724, 350725, 350781, 350782, 350783, 350784, 0],
	codeprov350000city350800: [350802, 350821, 350822, 350823, 350824, 350825, 350881, 0],
	codeprov350000city350900: [350902, 350921, 350922, 350923, 350924, 350925, 350926, 350981, 350982, 0],
	codeprov360000city360100: [360102, 360103, 360104, 360105, 360111, 360121, 360122, 360123, 360124, 1001193, 1001194, 1001195, 1001196, 0],
	codeprov360000city360200: [360202, 360203, 360222, 360281, 0],
	codeprov360000city360300: [360302, 360313, 360321, 360322, 360323, 0],
	codeprov360000city360400: [360402, 360403, 360421, 360423, 360424, 360425, 360426, 360427, 360428, 360429, 360430, 360481, 360482, 0],
	codeprov360000city360500: [360502, 360521, 0],
	codeprov360000city360600: [360602, 360622, 360681, 0],
	codeprov360000city360700: [360702, 360721, 360722, 360723, 360724, 360725, 360726, 360727, 360728, 360729, 360730, 360731, 360732, 360733, 360734, 360735, 360781, 360782, 0],
	codeprov360000city360800: [360802, 360803, 360821, 360822, 360823, 360824, 360825, 360826, 360827, 360828, 360829, 360830, 360881, 0],
	codeprov360000city360900: [360902, 360921, 360922, 360923, 360924, 360925, 360926, 360981, 360982, 360983, 0],
	codeprov360000city361000: [361002, 361021, 361022, 361023, 361024, 361025, 361026, 361027, 361028, 361029, 361030, 0],
	codeprov360000city361100: [361102, 361121, 361122, 361123, 361124, 361125, 361126, 361127, 361128, 361129, 361130, 361181, 0],
	codeprov370000city370100: [370102, 370103, 370104, 370105, 370112, 370113, 370124, 370125, 370126, 370181, 0],
	codeprov370000city370200: [370202, 370203, 370205, 370211, 370212, 370213, 370214, 370281, 370282, 370283, 370284, 370285, 0],
	codeprov370000city370300: [370302, 370303, 370304, 370305, 370306, 370321, 370322, 370323, 0],
	codeprov370000city370400: [370402, 370403, 370404, 370405, 370406, 370481, 0],
	codeprov370000city370500: [370502, 370503, 370521, 370522, 370523, 0],
	codeprov370000city370600: [370602, 370611, 370612, 370613, 370634, 370681, 370682, 370683, 370684, 370685, 370686, 370687, 1001099, 0],
	codeprov370000city370700: [370702, 370703, 370704, 370705, 370724, 370725, 370781, 370782, 370783, 370784, 370785, 370786, 0],
	codeprov370000city370800: [370802, 370811, 370826, 370827, 370828, 370829, 370830, 370831, 370832, 370881, 370882, 370883, 0],
	codeprov370000city370900: [370902, 370911, 370921, 370923, 370982, 370983, 0],
	codeprov370000city371000: [371002, 371081, 371082, 371083, 1001100, 1001101, 1001102, 0],
	codeprov370000city371100: [371102, 371103, 371121, 371122, 0],
	codeprov370000city371200: [371202, 371203, 0],
	codeprov370000city371300: [371302, 371311, 371312, 371321, 371322, 371323, 371324, 371325, 371326, 371327, 371328, 371329, 0],
	codeprov370000city371400: [371402, 371421, 371422, 371423, 371424, 371425, 371426, 371427, 371428, 371481, 371482, 0],
	codeprov370000city371500: [371502, 371521, 371522, 371523, 371524, 371525, 371526, 371581, 0],
	codeprov370000city371600: [371602, 371621, 371622, 371623, 371624, 371625, 371626, 0],
	codeprov370000city371700: [371702, 371721, 371722, 371723, 371724, 371725, 371726, 371727, 371728, 0],
	codeprov410000city1001210: [1001211, 0],
	codeprov410000city410100: [410102, 410103, 410104, 410105, 410106, 410108, 410122, 410181, 410182, 410183, 410184, 410185, 0],
	codeprov410000city410200: [410202, 410203, 410204, 410205, 410211, 410221, 410222, 410223, 410224, 410225, 1001207, 0],
	codeprov410000city410300: [410302, 410303, 410304, 410305, 410306, 410311, 410322, 410323, 410324, 410325, 410326, 410327, 410328, 410329, 410381, 1001208, 0],
	codeprov410000city410400: [410402, 410403, 410404, 410411, 410421, 410422, 410423, 410425, 410481, 410482, 1001206, 0],
	codeprov410000city410500: [410502, 410503, 410505, 410506, 410522, 410523, 410526, 410527, 410581, 0],
	codeprov410000city410600: [410602, 410603, 410611, 410621, 410622, 0],
	codeprov410000city410700: [410702, 410703, 410704, 410711, 410721, 410724, 410725, 410726, 410727, 410728, 410781, 410782, 0],
	codeprov410000city410800: [410802, 410803, 410804, 410811, 410821, 410822, 410823, 410825, 410882, 410883, 1001209, 0],
	codeprov410000city410900: [410902, 410922, 410923, 410926, 410927, 410928, 0],
	codeprov410000city411000: [411002, 411023, 411024, 411025, 411081, 411082, 0],
	codeprov410000city411100: [411102, 411103, 411104, 411121, 411122, 0],
	codeprov410000city411200: [411202, 411221, 411222, 411224, 411281, 411282, 0],
	codeprov410000city411300: [411302, 411303, 411321, 411322, 411323, 411324, 411325, 411326, 411327, 411328, 411329, 411330, 411381, 0],
	codeprov410000city411400: [411402, 411403, 411421, 411422, 411423, 411424, 411425, 411426, 411481, 0],
	codeprov410000city411500: [411502, 411503, 411521, 411522, 411523, 411524, 411525, 411526, 411527, 411528, 0],
	codeprov410000city411600: [411602, 411621, 411622, 411623, 411624, 411625, 411626, 411627, 411628, 411681, 0],
	codeprov410000city411700: [411702, 411721, 411722, 411723, 411724, 411725, 411726, 411727, 411728, 411729, 0],
	codeprov410000city419000: [419001, 0],
	codeprov420000city1001243: [1001244, 1001245, 1001246, 1001247, 1001248, 1001249, 1001250, 1001251, 0],
	codeprov420000city1001252: [1001253, 0],
	codeprov420000city1001254: [1001255, 1001256, 1001257, 0],
	codeprov420000city420100: [420102, 420103, 420104, 420105, 420106, 420107, 420111, 420112, 420113, 420114, 420115, 420116, 420117, 1001239, 0],
	codeprov420000city420200: [420202, 420203, 420204, 420205, 420222, 420281, 0],
	codeprov420000city420300: [420302, 420303, 420321, 420322, 420323, 420324, 420325, 420381, 0],
	codeprov420000city420500: [420502, 420503, 420504, 420505, 420506, 420525, 420526, 420527, 420528, 420529, 420581, 420582, 420583, 1001241, 1001242, 0],
	codeprov420000city420600: [420602, 420606, 420607, 420624, 420625, 420626, 420682, 420683, 420684, 1001240, 0],
	codeprov420000city420700: [420702, 420703, 420704, 0],
	codeprov420000city420800: [420802, 420804, 420821, 420822, 420881, 0],
	codeprov420000city420900: [420902, 420921, 420922, 420923, 420981, 420982, 420984, 0],
	codeprov420000city421000: [421002, 421003, 421022, 421023, 421024, 421081, 421083, 421087, 0],
	codeprov420000city421100: [421102, 421121, 421122, 421123, 421124, 421125, 421126, 421127, 421181, 421182, 0],
	codeprov420000city421200: [421202, 421221, 421222, 421223, 421224, 421281, 0],
	codeprov420000city421300: [421303, 421321, 421381, 0],
	codeprov420000city422800: [422801, 422802, 422822, 422823, 422825, 422826, 422827, 422828, 0],
	codeprov420000city429000: [429004, 429005, 429006, 429021, 0],
	codeprov430000city1001260: [1001261, 1001262, 1001263, 1001264, 1001265, 1001266, 1001267, 1001268, 0],
	codeprov430000city430100: [430102, 430103, 430104, 430105, 430111, 430112, 430121, 430124, 430181, 1001258, 0],
	codeprov430000city430200: [430202, 430203, 430204, 430211, 430221, 430223, 430224, 430225, 430281, 0],
	codeprov430000city430300: [430302, 430304, 430321, 430381, 430382, 0],
	codeprov430000city430400: [430405, 430406, 430407, 430408, 430412, 430421, 430422, 430423, 430424, 430426, 430481, 430482, 0],
	codeprov430000city430500: [430502, 430503, 430511, 430521, 430522, 430523, 430524, 430525, 430527, 430528, 430529, 430581, 1001259, 0],
	codeprov430000city430600: [430602, 430603, 430611, 430621, 430623, 430624, 430626, 430681, 430682, 0],
	codeprov430000city430700: [430702, 430703, 430721, 430722, 430723, 430724, 430725, 430726, 430781, 0],
	codeprov430000city430800: [430802, 430811, 430821, 430822, 0],
	codeprov430000city430900: [430902, 430903, 430921, 430922, 430923, 430981, 0],
	codeprov430000city431000: [431002, 431003, 431021, 431022, 431023, 431024, 431025, 431026, 431027, 431028, 431081, 0],
	codeprov430000city431100: [431102, 431103, 431121, 431122, 431123, 431124, 431125, 431126, 431127, 431128, 431129, 1001274, 0],
	codeprov430000city431200: [431202, 431221, 431222, 431223, 431224, 431225, 431226, 431227, 431228, 431229, 431230, 431281, 1001269, 1001270, 1001271, 1001272, 1001273, 0],
	codeprov430000city431300: [431302, 431321, 431322, 431381, 431382, 0],
	codeprov430000city433100: [433101, 433122, 433123, 433124, 433125, 433126, 433127, 433130, 0],
	codeprov440000city440100: [440103, 440104, 440105, 440106, 440111, 440112, 440113, 440114, 440115, 440116, 440183, 440184, 0],
	codeprov440000city440200: [440203, 440204, 440205, 440222, 440224, 440229, 440232, 440233, 440281, 440282, 1001108, 0],
	codeprov440000city440300: [440303, 440304, 440305, 440306, 440307, 440308, 1001109, 1001110, 1001111, 1001112, 0],
	codeprov440000city440400: [440402, 440403, 440404, 0],
	codeprov440000city440500: [440507, 440511, 440512, 440513, 440514, 440515, 440523, 0],
	codeprov440000city440600: [440604, 440605, 440606, 440607, 440608, 0],
	codeprov440000city440700: [440703, 440704, 440705, 440781, 440783, 440784, 440785, 0],
	codeprov440000city440800: [440802, 440803, 440804, 440811, 440823, 440825, 440881, 440882, 440883, 1001113, 0],
	codeprov440000city440900: [440902, 440903, 440923, 440981, 440982, 440983, 0],
	codeprov440000city441200: [441202, 441203, 441223, 441224, 441225, 441226, 441283, 441284, 0],
	codeprov440000city441300: [441302, 441303, 441322, 441323, 441324, 0],
	codeprov440000city441400: [441402, 441421, 441422, 441423, 441424, 441426, 441427, 441481, 0],
	codeprov440000city441500: [441502, 441521, 441523, 441581, 0],
	codeprov440000city441600: [441602, 441621, 441622, 441623, 441624, 441625, 0],
	codeprov440000city441700: [441702, 441721, 441723, 441781, 1001104, 1001105, 1001106, 0],
	codeprov440000city441800: [441802, 441821, 441823, 441825, 441826, 441827, 441881, 441882, 1001114, 1001115, 0],
	codeprov440000city441900: [441902, 441903, 441904, 441905, 441906, 441907, 441908, 441909, 441910, 441911, 441912, 441913, 441914, 441915, 441916, 441917, 441918, 441919, 441920, 441921, 441922, 441923, 441924, 441925, 1001116, 1002001, 0],
	codeprov440000city442000: [442001, 0],
	codeprov440000city445100: [445102, 445121, 445122, 0],
	codeprov440000city445200: [445202, 445221, 445222, 445224, 445281, 1001107, 0],
	codeprov440000city445300: [445302, 445321, 445322, 445323, 445381, 0],
	codeprov450000city450100: [450102, 450103, 450105, 450107, 450108, 450109, 450122, 450123, 450124, 450125, 450126, 450127, 0],
	codeprov450000city450200: [450202, 450203, 450204, 450205, 450221, 450222, 450223, 450224, 450225, 450226, 1001117, 1001118, 0],
	codeprov450000city450300: [450302, 450303, 450304, 450305, 450311, 450321, 450322, 450323, 450324, 450325, 450326, 450327, 450328, 450329, 450330, 450331, 450332, 1001119, 1001120, 1001121, 0],
	codeprov450000city450400: [450403, 450404, 450405, 450421, 450422, 450423, 450481, 0],
	codeprov450000city450500: [450502, 450503, 450512, 450521, 0],
	codeprov450000city450600: [450602, 450603, 450621, 450681, 0],
	codeprov450000city450700: [450702, 450703, 450721, 450722, 0],
	codeprov450000city450800: [450802, 450803, 450804, 450821, 450881, 0],
	codeprov450000city450900: [450902, 450921, 450922, 450923, 450924, 450981, 0],
	codeprov450000city451000: [451002, 451021, 451022, 451023, 451024, 451025, 451026, 451027, 451028, 451029, 451030, 451031, 1001122, 0],
	codeprov450000city451100: [451102, 451119, 451121, 451122, 451123, 1001129, 0],
	codeprov450000city451200: [451202, 451221, 451222, 451223, 451224, 451225, 451226, 451227, 451228, 451229, 451281, 1001123, 1001124, 1001125, 1001126, 1001127, 0],
	codeprov450000city451300: [451302, 451321, 451322, 451323, 451324, 451381, 1001128, 0],
	codeprov450000city451400: [451402, 451421, 451422, 451423, 451424, 451425, 451481, 0],
	codeprov460000city1001215: [1001216, 0],
	codeprov460000city1001217: [1001218, 0],
	codeprov460000city1001219: [1001220, 0],
	codeprov460000city1001221: [1001222, 0],
	codeprov460000city1001223: [1001224, 0],
	codeprov460000city1001225: [1001226, 0],
	codeprov460000city1001228: [1001229, 1001230, 1001231, 1001232, 1001233, 1001234, 1001235, 1001236, 1001237, 1001238, 0],
	codeprov460000city460100: [460105, 460106, 460107, 460108, 0],
	codeprov460000city460200: [460202, 460203, 1001227, 0],
	codeprov460000city469000: [469001, 469002, 469003, 469005, 469006, 469007, 469021, 469022, 469023, 469024, 469025, 469026, 469027, 469028, 469029, 469030, 0],
	codeprov500000city500100: [500101, 500102, 500103, 500104, 500105, 500106, 500107, 500108, 500109, 500110, 500111, 500112, 500113, 500114, 500115, 500116, 500117, 500118, 500119, 500120, 1001380, 1001381, 1001382, 1001383, 1001384, 1001385, 1001386, 1001387, 1001388, 1001389, 1001390, 1001391, 1001392, 1001393, 1001394, 1001395, 1001396, 1001397, 1001398, 1001399, 1001400, 1001401, 1001402, 0],
	codeprov510000city510100: [510104, 510105, 510106, 510107, 510108, 510112, 510113, 510114, 510115, 510121, 510122, 510124, 510129, 510131, 510132, 510181, 510182, 510183, 510184, 0],
	codeprov510000city510300: [510302, 510303, 510304, 510311, 510321, 510322, 0],
	codeprov510000city510400: [510402, 510403, 510411, 510421, 510422, 0],
	codeprov510000city510500: [510502, 510503, 510504, 510521, 510522, 510524, 510525, 0],
	codeprov510000city510600: [510603, 510623, 510626, 510681, 510682, 510683, 0],
	codeprov510000city510700: [510703, 510704, 510722, 510723, 510724, 510725, 510726, 510727, 510781, 0],
	codeprov510000city510800: [510802, 510811, 510812, 510821, 510822, 510823, 510824, 0],
	codeprov510000city510900: [510903, 510904, 510921, 510922, 510923, 0],
	codeprov510000city511000: [511002, 511011, 511024, 511025, 511028, 0],
	codeprov510000city511100: [511102, 511111, 511112, 511113, 511123, 511124, 511126, 511129, 511132, 511133, 511181, 0],
	codeprov510000city511300: [511302, 511303, 511304, 511321, 511322, 511323, 511324, 511325, 511381, 0],
	codeprov510000city511400: [511402, 511421, 511422, 511423, 511424, 511425, 0],
	codeprov510000city511500: [511502, 511521, 511522, 511523, 511524, 511525, 511526, 511527, 511528, 511529, 0],
	codeprov510000city511600: [511602, 511621, 511622, 511623, 511681, 0],
	codeprov510000city511700: [511702, 511721, 511722, 511723, 511724, 511725, 511781, 0],
	codeprov510000city511800: [511802, 511821, 511822, 511823, 511824, 511825, 511826, 511827, 0],
	codeprov510000city511900: [511902, 511921, 511922, 511923, 0],
	codeprov510000city512000: [512002, 512021, 512022, 512081, 0],
	codeprov510000city513200: [513221, 513222, 513223, 513224, 513225, 513226, 513227, 513228, 513229, 513230, 513231, 513232, 513233, 0],
	codeprov510000city513300: [513321, 513322, 513323, 513324, 513325, 513326, 513327, 513328, 513329, 513330, 513331, 513332, 513333, 513334, 513335, 513336, 513337, 513338, 0],
	codeprov510000city513400: [513401, 513422, 513423, 513424, 513425, 513426, 513427, 513428, 513429, 513430, 513431, 513432, 513433, 513434, 513435, 513436, 513437, 0],
	codeprov520000city1001311: [1001312, 1001313, 1001314, 1001315, 1001316, 1001317, 1001318, 1001319, 1001320, 1001321, 1001322, 1001323, 0],
	codeprov520000city1001324: [1001325, 1001326, 1001327, 1001328, 1001329, 1001330, 1001331, 1001332, 1001333, 1001334, 1001335, 1001336, 1001337, 1001338, 1001339, 1001340, 0],
	codeprov520000city1001351: [1001352, 1001353, 1001354, 1001355, 1001356, 1001357, 1001358, 1001359, 0],
	codeprov520000city1001360: [1001361, 1001362, 1001363, 1001364, 1001365, 1001366, 1001367, 1001368, 0],
	codeprov520000city520100: [520102, 520103, 520111, 520112, 520113, 520114, 520121, 520122, 520123, 520181, 1001304, 1001305, 0],
	codeprov520000city520200: [520201, 520203, 520221, 520222, 0],
	codeprov520000city520300: [520302, 520303, 520321, 520322, 520323, 520324, 520325, 520326, 520327, 520328, 520329, 520330, 520381, 520382, 1001306, 1001307, 0],
	codeprov520000city520400: [520402, 520421, 520422, 520423, 520424, 520425, 1001308, 1001309, 1001310, 0],
	codeprov520000city522200: [1001341, 1001342, 1001343, 1001344, 1001345, 1001346, 1001347, 1001348, 1001349, 1001350, 0],
	codeprov520000city522300: [522301, 522322, 522323, 522324, 522325, 522326, 522327, 522328, 0],
	codeprov520000city522400: [1001001, 0],
	codeprov520000city522600: [522601, 522622, 522623, 522624, 522625, 522626, 522627, 522628, 522629, 522630, 522631, 522632, 522633, 522634, 522635, 522636, 0],
	codeprov520000city522700: [522701, 522702, 522722, 522723, 522725, 522726, 522727, 522728, 522729, 522730, 522731, 522732, 0],
	codeprov530000city1001002: [1001003, 1001004, 1001005, 0],
	codeprov530000city1001006: [1001007, 1001008, 1001009, 1001010, 1001011, 0],
	codeprov530000city1001016: [1001017, 1001018, 1001019, 1001020, 1001021, 1001022, 1001023, 1001024, 1001025, 1001026, 1001027, 1001028, 0],
	codeprov530000city1001029: [1001030, 1001031, 1001032, 1001033, 1001034, 1001035, 1001036, 1001037, 1001038, 1001039, 1001040, 1001041, 1001042, 0],
	codeprov530000city1001043: [1001044, 1001045, 1001046, 1001047, 1001048, 1001049, 1001050, 1001051, 0],
	codeprov530000city1001055: [1001056, 1001057, 1001058, 1001059, 1001060, 1001061, 1001062, 1001063, 1001064, 1001065, 0],
	codeprov530000city1001078: [1001079, 1001080, 1001081, 1001082, 0],
	codeprov530000city1001083: [1001084, 1001085, 1001086, 0],
	codeprov530000city530100: [530102, 530103, 530111, 530112, 530113, 530121, 530122, 530124, 530125, 530126, 530127, 530128, 530129, 530181, 1001012, 1001013, 1001014, 1001015, 0],
	codeprov530000city530300: [530302, 530321, 530322, 530323, 530324, 530325, 530326, 530328, 530381, 0],
	codeprov530000city530400: [530402, 530421, 530422, 530423, 530424, 530425, 530426, 530427, 530428, 1001052, 1001053, 1001054, 0],
	codeprov530000city530500: [530502, 530521, 530522, 530523, 530524, 0],
	codeprov530000city530600: [530602, 530621, 530622, 530623, 530624, 530625, 530626, 530627, 530628, 530629, 530630, 0],
	codeprov530000city530700: [530702, 530721, 530722, 530723, 530724, 1001087, 0],
	codeprov530000city530800: [530802, 530821, 530822, 530823, 530824, 530825, 530826, 530827, 530828, 530829, 1001066, 1001067, 1001068, 1001069, 1001070, 1001071, 1001072, 1001073, 1001074, 0],
	codeprov530000city530900: [530902, 530921, 530922, 530923, 530924, 530925, 530926, 530927, 1001075, 1001076, 1001077, 0],
	codeprov530000city532300: [532301, 532322, 532323, 532324, 532325, 532326, 532327, 532328, 532329, 532331, 0],
	codeprov530000city532500: [532501, 532502, 532503, 532523, 532524, 532525, 532526, 532527, 532528, 532529, 532530, 532531, 532532, 0],
	codeprov530000city532600: [532621, 532622, 532623, 532624, 532625, 532626, 532627, 532628, 0],
	codeprov530000city532800: [532801, 532822, 532823, 0],
	codeprov530000city532900: [532901, 532922, 532923, 532924, 532925, 532926, 532927, 532928, 532929, 532930, 532931, 532932, 0],
	codeprov530000city533100: [533102, 533103, 533122, 533123, 533124, 0],
	codeprov530000city533300: [533321, 533323, 533324, 533325, 0],
	codeprov530000city533400: [533421, 533422, 533423, 0],
	codeprov540000city540100: [540102, 540121, 540122, 540123, 540124, 540125, 540126, 540127, 1001299, 0],
	codeprov540000city542100: [542121, 542122, 542123, 542124, 542125, 542126, 542127, 542128, 542129, 542132, 542133, 0],
	codeprov540000city542200: [542221, 542222, 542223, 542224, 542225, 542226, 542227, 542228, 542229, 542231, 542232, 542233, 0],
	codeprov540000city542300: [542301, 542322, 542323, 542324, 542325, 542326, 542327, 542328, 542329, 542330, 542331, 542332, 542333, 542334, 542335, 542336, 542337, 542338, 0],
	codeprov540000city542400: [542421, 542422, 542423, 542424, 542425, 542426, 542427, 542428, 542429, 542430, 1001300, 0],
	codeprov540000city542500: [542521, 542522, 542523, 542524, 542525, 542526, 542527, 0],
	codeprov540000city542600: [542621, 542622, 542623, 542624, 542625, 542626, 542627, 1001302, 0],
	codeprov610000city610100: [610102, 610103, 610104, 610111, 610112, 610113, 610114, 610115, 610116, 610122, 610124, 610125, 610126, 0],
	codeprov610000city610200: [610202, 610203, 610204, 610222, 0],
	codeprov610000city610300: [610302, 610303, 610304, 610322, 610323, 610324, 610326, 610327, 610328, 610329, 610330, 610331, 0],
	codeprov610000city610400: [610402, 610403, 610404, 610422, 610423, 610424, 610425, 610426, 610427, 610428, 610429, 610430, 610431, 610481, 1001403, 0],
	codeprov610000city610500: [610502, 610521, 610522, 610523, 610524, 610525, 610526, 610527, 610528, 610581, 610582, 0],
	codeprov610000city610600: [610602, 610621, 610622, 610623, 610624, 610625, 610626, 610627, 610628, 610629, 610630, 610631, 610632, 0],
	codeprov610000city610700: [610702, 610721, 610722, 610723, 610724, 610725, 610726, 610727, 610728, 610729, 610730, 0],
	codeprov610000city610800: [610802, 610821, 610822, 610823, 610824, 610825, 610826, 610827, 610828, 610829, 610830, 610831, 0],
	codeprov610000city610900: [610902, 610921, 610922, 610923, 610924, 610925, 610926, 610927, 610928, 610929, 0],
	codeprov610000city611000: [611002, 611021, 611022, 611023, 611024, 611025, 611026, 0],
	codeprov620000city1001275: [1001276, 1001277, 1001278, 1001279, 1001280, 1001281, 1001282, 1001283, 0],
	codeprov620000city1001289: [1001290, 1001291, 1001292, 1001293, 1001294, 1001295, 1001296, 1001297, 0],
	codeprov620000city620100: [620102, 620103, 620104, 620105, 620111, 620121, 620122, 620123, 0],
	codeprov620000city620200: [620202, 620203, 620204, 1001298, 0],
	codeprov620000city620300: [620302, 620321, 0],
	codeprov620000city620400: [620402, 620403, 620421, 620422, 620423, 0],
	codeprov620000city620500: [620502, 620503, 620521, 620522, 620523, 620524, 620525, 1001288, 0],
	codeprov620000city620600: [620602, 620621, 620622, 620623, 1001284, 0],
	codeprov620000city620700: [620702, 620721, 620722, 620723, 620724, 620725, 1001285, 0],
	codeprov620000city620800: [620802, 620821, 620822, 620823, 620824, 620825, 620826, 0],
	codeprov620000city620900: [620902, 620921, 620922, 620923, 620924, 620981, 620982, 1001286, 1001287, 0],
	codeprov620000city621000: [621002, 621021, 621022, 621023, 621024, 621025, 621026, 621027, 0],
	codeprov620000city621100: [621102, 621121, 621122, 621123, 621124, 621125, 621126, 0],
	codeprov620000city621200: [621202, 621221, 621222, 621223, 621224, 621225, 621226, 621227, 621228, 0],
	codeprov620000city622900: [622901, 622921, 622922, 622923, 622924, 622925, 622926, 622927, 0],
	codeprov620000city623000: [623001, 623021, 623022, 623023, 623024, 623025, 623026, 623027, 0],
	codeprov630000city1001404: [1001405, 1001406, 1001407, 1001408, 0],
	codeprov630000city1001414: [1001415, 1001416, 1001417, 1001418, 0],
	codeprov630000city1001419: [1001420, 1001421, 1001422, 1001423, 0],
	codeprov630000city1001424: [1001425, 1001426, 1001427, 1001428, 0],
	codeprov630000city1001429: [1001430, 1001431, 1001432, 1001433, 0],
	codeprov630000city1001434: [1001435, 1001436, 1001437, 1001438, 1001439, 0],
	codeprov630000city630100: [630102, 630103, 630104, 630105, 630121, 630122, 630123, 1001409, 0],
	codeprov630000city632100: [632121, 632122, 632123, 632126, 632127, 632128, 1001410, 1001411, 1001412, 1001413, 0],
	codeprov630000city632200: [632221, 632222, 632223, 632224, 0],
	codeprov630000city632300: [632321, 632322, 632323, 632324, 0],
	codeprov630000city632500: [632521, 632522, 632523, 632524, 632525, 0],
	codeprov630000city632600: [632621, 632622, 632623, 632624, 632625, 632626, 0],
	codeprov630000city632700: [632721, 632722, 632723, 632724, 632725, 632726, 0],
	codeprov630000city632800: [632801, 632802, 632821, 632822, 632823, 0],
	codeprov640000city640100: [640104, 640105, 640106, 640121, 640122, 640181, 0],
	codeprov640000city640200: [640202, 640205, 640221, 0],
	codeprov640000city640300: [640302, 640303, 640323, 640324, 640381, 1001089, 0],
	codeprov640000city640400: [640402, 640422, 640423, 640424, 640425, 1001090, 0],
	codeprov640000city640500: [640502, 640521, 640522, 0],
	codeprov650000city1001132: [1001133, 1001134, 1001135, 1001136, 0],
	codeprov650000city1001137: [1001138, 1001139, 1001140, 0],
	codeprov650000city1001141: [1001142, 1001143, 1001144, 1001145, 1001146, 1001147, 1001148, 1001149, 1001150, 1001151, 0],
	codeprov650000city1001152: [1001153, 0],
	codeprov650000city1001154: [1001155, 1001156, 1001157, 1001158, 1001159, 1001160, 1001161, 1001162, 0],
	codeprov650000city1001163: [1001164, 1001165, 1001166, 1001167, 1001168, 1001169, 1001170, 1001171, 1001172, 0],
	codeprov650000city1001175: [1001176, 0],
	codeprov650000city650100: [650102, 650103, 650104, 650105, 650106, 650107, 650109, 650121, 0],
	codeprov650000city650200: [650202, 650203, 650204, 650205, 0],
	codeprov650000city652100: [652101, 652122, 652123, 0],
	codeprov650000city652200: [652201, 652222, 652223, 1001131, 0],
	codeprov650000city652300: [652301, 652302, 652323, 652324, 652325, 652327, 652328, 0],
	codeprov650000city652700: [652701, 652722, 652723, 0],
	codeprov650000city652800: [652801, 652822, 652823, 652824, 652825, 652826, 652827, 652828, 652829, 0],
	codeprov650000city652900: [652901, 652922, 652923, 652924, 652925, 652926, 652927, 652928, 652929, 0],
	codeprov650000city653000: [653001, 653022, 653023, 653024, 0],
	codeprov650000city653100: [653101, 653121, 653122, 653123, 653124, 653125, 653126, 653127, 653128, 653129, 653130, 653131, 1001173, 1001174, 0],
	codeprov650000city653200: [653201, 653221, 653222, 653223, 653224, 653225, 653226, 653227, 0],
	codeprov650000city654000: [654002, 654003, 654021, 654022, 654023, 654024, 654025, 654026, 654027, 654028, 0],
	codeprov650000city654200: [654201, 654202, 654221, 654223, 654224, 654225, 654226, 1001130, 0],
	codeprov650000city654300: [654301, 654321, 654322, 654323, 654324, 654325, 654326, 0],
	codeprov650000city659000: [659001, 659002, 659003, 659004, 659005, 659006, 0],
	codeprov710000city710100: [710101, 710102, 710103, 710104, 710105, 710106, 710107, 710108, 710109, 710110, 710111, 710112, 0],
	codeprov710000city710200: [710201, 710202, 710203, 710204, 710205, 710206, 710207, 710208, 710209, 710210, 710211, 0],
	codeprov710000city710300: [710301, 710302, 710303, 710304, 710305, 710306, 710307, 0],
	codeprov710000city710400: [710401, 710402, 710403, 710404, 710405, 710406, 710407, 710408, 0],
	codeprov710000city710500: [710501, 710502, 710503, 710504, 710505, 710506, 0],
	codeprov710000city710600: [710601, 710602, 710603, 0],
	codeprov710000city710700: [710701, 710702, 0],
	codeprov710000city719000: [719001, 719002, 719003, 719004, 719005, 719006, 719007, 719008, 719009, 719010, 719011, 719012, 719013, 719014, 719015, 0],
	codeprov810000city810100: [810101, 810102, 810103, 810104, 0],
	codeprov810000city810200: [810201, 810202, 810203, 810204, 810205, 0],
	codeprov810000city810300: [810301, 810302, 810303, 810304, 810305, 810306, 810307, 810308, 810309, 0],
	codeprov820000city820100: [820101, 820102, 820103, 820104, 820105, 0],
	codeprov820000city820200: [820201, 820202, 0],
	codeprov820000city820300: [820301, 0],
	prov: ["北京", "天津", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "上海", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "重庆", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "台湾省", "香港特别行政区", "澳门特别行政区"],
	prov110000: ["北京市"],
	prov110000city110100: ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆区", "其他"],
	prov120000: ["天津市"],
	prov120000city120100: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河县", "静海县", "蓟县", "大港区", "其他"],
	prov130000: ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"],
	prov130000city130100: ["长安区", "桥东区", "桥西区", "新华区", "井陉矿区", "裕华区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "辛集市", "藁城市", "晋州市", "新乐市", "鹿泉市", "其他"],
	prov130000city130200: ["路南区", "路北区", "古冶区", "开平区", "丰南区", "丰润区", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "曹妃甸区", "遵化市", "迁安市", "芦台汉沽农场", "唐海县", "其他"],
	prov130000city130300: ["海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县", "开发区", "青龙县", "其他"],
	prov130000city130400: ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉县", "磁县", "肥乡县", "永年县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "武安市", "其他"],
	prov130000city130500: ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市", "其他"],
	prov130000city130600: ["新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县", "涿州市", "定州市", "安国市", "高碑店市", "其他"],
	prov130000city130700: ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县", "其他"],
	prov130000city130800: ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县", "丰宁县", "宽城县", "围场县", "其他"],
	prov130000city130900: ["新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市", "孟村县", "其他"],
	prov130000city131000: ["安次区", "广阳区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市", "大厂县", "其他"],
	prov130000city131100: ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "冀州市", "深州市", "其他"],
	prov140000: ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"],
	prov140000city140100: ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市", "其他"],
	prov140000city140200: ["城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县", "御东区", "其他"],
	prov140000city140300: ["城区", "矿区", "郊区", "平定县", "盂县", "其他"],
	prov140000city140400: ["城区", "郊区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市", "其他"],
	prov140000city140500: ["城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市", "其他"],
	prov140000city140600: ["朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县", "其他"],
	prov140000city140700: ["榆次区", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县", "介休市", "其他"],
	prov140000city140800: ["盐湖区", "临猗县", "万荣县", "闻喜县", "稷山县", "新绛县", "绛县", "垣曲县", "夏县", "平陆县", "芮城县", "永济市", "河津市", "其他"],
	prov140000city140900: ["忻府区", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县", "原平市", "其他"],
	prov140000city141000: ["尧都区", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "大宁县", "隰县", "永和县", "蒲县", "汾西县", "侯马市", "霍州市", "其他"],
	prov140000city141100: ["离石区", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县", "孝义市", "汾阳市", "其他"],
	prov150000: ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "兴安盟", "锡林郭勒盟", "阿拉善盟"],
	prov150000city150100: ["新城区", "回民区", "玉泉区", "赛罕区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县", "其他"],
	prov150000city150200: ["东河区", "昆都仑区", "青山区", "石拐区", "白云鄂博矿区", "九原区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗", "其他"],
	prov150000city150300: ["海勃湾区", "海南区", "乌达区", "其他"],
	prov150000city150400: ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗", "其他"],
	prov150000city150500: ["科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "霍林郭勒市", "其他"],
	prov150000city150600: ["东胜区", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "其他"],
	prov150000city150700: ["海拉尔区", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "陈巴尔虎旗", "新巴尔虎左旗", "新巴尔虎右旗", "满洲里市", "牙克石市", "扎兰屯市", "额尔古纳市", "根河市", "其他"],
	prov150000city150800: ["临河区", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗", "其他"],
	prov150000city150900: ["集宁区", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗", "丰镇市", "其他"],
	prov150000city152200: ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县", "其他"],
	prov150000city152500: ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县", "其他"],
	prov150000city152900: ["阿拉善左旗", "阿拉善右旗", "额济纳旗", "其他"],
	prov210000: ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"],
	prov210000city210100: ["和平区", "沈河区", "大东区", "皇姑区", "铁西区", "苏家屯区", "东陵区", "沈北新区", "于洪区", "辽中县", "康平县", "法库县", "新民市", "浑南新区", "其他"],
	prov210000city210200: ["中山区", "西岗区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "长海县", "瓦房店市", "普兰店市", "庄河市", "开发区", "其他"],
	prov210000city210300: ["铁东区", "铁西区", "立山区", "千山区", "台安县", "岫岩满族自治县", "海城市", "岫岩县", "其他"],
	prov210000city210400: ["新抚区", "东洲区", "望花区", "顺城区", "抚顺县", "新宾满族自治县", "清原满族自治县", "新宾县", "清原县", "其他"],
	prov210000city210500: ["平山区", "溪湖区", "明山区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "本溪县", "桓仁县", "其他"],
	prov210000city210600: ["元宝区", "振兴区", "振安区", "宽甸满族自治县", "东港市", "凤城市", "宽甸县", "其他"],
	prov210000city210700: ["古塔区", "凌河区", "太和区", "黑山县", "义县", "凌海市", "北镇市", "松山新区", "其他"],
	prov210000city210800: ["站前区", "西市区", "鲅鱼圈区", "老边区", "盖州市", "大石桥市", "其他"],
	prov210000city210900: ["海州区", "新邱区", "太平区", "清河门区", "细河区", "阜新蒙古族自治县", "彰武县", "阜新县", "其他"],
	prov210000city211000: ["白塔区", "文圣区", "宏伟区", "弓长岭区", "太子河区", "辽阳县", "灯塔市", "其他"],
	prov210000city211100: ["双台子区", "兴隆台区", "大洼县", "盘山县", "其他"],
	prov210000city211200: ["银州区", "清河区", "铁岭县", "西丰县", "昌图县", "调兵山市", "开原市", "其他"],
	prov210000city211300: ["双塔区", "龙城区", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "北票市", "凌源市", "喀左县", "其他"],
	prov210000city211400: ["连山区", "龙港区", "南票区", "绥中县", "建昌县", "兴城市", "其他"],
	prov220000: ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"],
	prov220000city220100: ["南关区", "宽城区", "朝阳区", "二道区", "绿园区", "双阳区", "农安县", "九台市", "榆树市", "德惠市", "其他"],
	prov220000city220200: ["昌邑区", "龙潭区", "船营区", "丰满区", "永吉县", "蛟河市", "桦甸市", "舒兰市", "磐石市", "其他"],
	prov220000city220300: ["铁西区", "铁东区", "梨树县", "伊通满族自治县", "公主岭市", "双辽市", "其他"],
	prov220000city220400: ["龙山区", "西安区", "东丰县", "东辽县", "其他"],
	prov220000city220500: ["东昌区", "二道江区", "通化县", "辉南县", "柳河县", "梅河口市", "集安市", "其他"],
	prov220000city220600: ["浑江区", "江源区", "抚松县", "靖宇县", "长白朝鲜族自治县", "临江市", "其他"],
	prov220000city220700: ["宁江区", "前郭尔罗斯蒙古族自治县", "长岭县", "乾安县", "扶余县", "其他"],
	prov220000city220800: ["洮北区", "镇赉县", "通榆县", "洮南市", "大安市", "其他"],
	prov220000city222400: ["延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县", "其他"],
	prov230000: ["哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "大兴安岭地区"],
	prov230000city230100: ["道里区", "南岗区", "道外区", "平房区", "松北区", "香坊区", "呼兰区", "阿城区", "依兰县", "方正县", "宾县", "巴彦县", "木兰县", "通河县", "延寿县", "双城市", "尚志市", "五常市", "其他"],
	prov230000city230200: ["龙沙区", "建华区", "铁锋区", "昂昂溪区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "龙江县", "依安县", "泰来县", "甘南县", "富裕县", "克山县", "克东县", "拜泉县", "讷河市", "梅里斯达区", "其他"],
	prov230000city230300: ["鸡冠区", "恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡东县", "虎林市", "密山市", "其他"],
	prov230000city230400: ["向阳区", "工农区", "南山区", "兴安区", "东山区", "兴山区", "萝北县", "绥滨县", "其他"],
	prov230000city230500: ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "友谊县", "宝清县", "饶河县", "其他"],
	prov230000city230600: ["萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "肇州县", "肇源县", "林甸县", "杜尔伯特蒙古族自治县", "杜尔伯特县", "其他"],
	prov230000city230700: ["伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "嘉荫县", "铁力市", "其他"],
	prov230000city230800: ["向阳区", "前进区", "东风区", "郊区", "桦南县", "桦川县", "汤原县", "抚远县", "同江市", "富锦市", "其他"],
	prov230000city230900: ["新兴区", "桃山区", "茄子河区", "勃利县", "其他"],
	prov230000city231000: ["东安区", "阳明区", "爱民区", "西安区", "东宁县", "林口县", "绥芬河市", "海林市", "宁安市", "穆棱市", "其他"],
	prov230000city231100: ["爱辉区", "嫩江县", "逊克县", "孙吴县", "北安市", "五大连池市", "其他"],
	prov230000city231200: ["北林区", "望奎县", "兰西县", "青冈县", "庆安县", "明水县", "绥棱县", "安达市", "肇东市", "海伦市", "其他"],
	prov230000city232700: ["加格达奇区", "松岭区", "新林区", "呼中区", "呼玛县", "塔河县", "漠河县", "加格达奇", "其他"],
	prov310000: ["上海市"],
	prov310000city310100: ["崇明县", "黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "卢湾区", "其他"],
	prov320000: ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"],
	prov320000city320100: ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "浦口区", "栖霞区", "雨花台区", "江宁区", "六合区", "溧水县", "高淳县", "雨花区", "溧水区", "高淳区", "其他"],
	prov320000city320200: ["崇安区", "南长区", "北塘区", "锡山区", "惠山区", "滨湖区", "江阴市", "宜兴市", "无锡新区", "其他"],
	prov320000city320300: ["鼓楼区", "云龙区", "贾汪区", "泉山区", "铜山区", "丰县", "沛县", "睢宁县", "新沂市", "邳州市", "铜山县", "其他"],
	prov320000city320400: ["天宁区", "钟楼区", "戚墅堰区", "新北区", "武进区", "溧阳市", "金坛市", "戚区", "其他"],
	prov320000city320500: ["姑苏区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江区", "太仓市", "沧浪区", "平江区", "金阊区", "吴江市", "工业园区", "其他"],
	prov320000city320600: ["崇川区", "港闸区", "通州区", "海安县", "如东县", "启东市", "如皋市", "海门市", "南通经济开发区", "通州市", "其他"],
	prov320000city320700: ["连云区", "新浦区", "海州区", "赣榆县", "东海县", "灌云县", "灌南县", "其他"],
	prov320000city320800: ["清河区", "淮安区", "淮阴区", "青浦区", "涟水县", "洪泽县", "盱眙县", "金湖县", "楚州区", "清浦区", "其他"],
	prov320000city320900: ["亭湖区", "盐都区", "响水县", "滨海县", "阜宁县", "射阳县", "建湖县", "东台市", "大丰市", "其他"],
	prov320000city321000: ["广陵区", "邗江区", "宝应县", "仪征市", "高邮市", "江都市", "开发区", "其他"],
	prov320000city321100: ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其他"],
	prov320000city321200: ["海陵区", "高港区", "兴化市", "靖江市", "泰兴市", "姜堰市", "其他"],
	prov320000city321300: ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其他"],
	prov330000: ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"],
	prov330000city330100: ["上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "桐庐县", "淳安县", "建德市", "富阳市", "临安市", "下沙区", "其他"],
	prov330000city330200: ["海曙区", "江东区", "江北区", "北仑区", "镇海区", "鄞州区", "象山县", "宁海县", "余姚市", "慈溪市", "奉化市", "其他"],
	prov330000city330300: ["鹿城区", "龙湾区", "瓯海区", "洞头县", "永嘉县", "平阳县", "苍南县", "文成县", "泰顺县", "瑞安市", "乐清市", "其他"],
	prov330000city330400: ["南湖区", "秀洲区", "嘉善县", "海盐县", "海宁市", "平湖市", "桐乡市", "海盐市", "其他"],
	prov330000city330500: ["吴兴区", "南浔区", "德清县", "长兴县", "安吉县", "其他"],
	prov330000city330600: ["越城区", "绍兴县", "新昌县", "诸暨市", "上虞市", "嵊州市", "其他"],
	prov330000city330700: ["婺城区", "金东区", "武义县", "浦江县", "磐安县", "兰溪市", "义乌市", "东阳市", "永康市", "其他"],
	prov330000city330800: ["柯城区", "衢江区", "常山县", "开化县", "龙游县", "江山市", "其他"],
	prov330000city330900: ["定海区", "普陀区", "岱山县", "嵊泗县", "其他"],
	prov330000city331000: ["椒江区", "黄岩区", "路桥区", "玉环县", "三门县", "天台县", "仙居县", "温岭市", "临海市", "其他"],
	prov330000city331100: ["莲都区", "青田县", "缙云县", "遂昌县", "松阳县", "云和县", "庆元县", "景宁畲族自治县", "龙泉市", "景宁县", "其他"],
	prov340000: ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市", "巢湖市"],
	prov340000city1001095: ["居巢区", "庐江县", "无为县", "其他"],
	prov340000city340100: ["瑶海区", "庐阳区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "庐江县", "巢湖市", "政务区", "其他"],
	prov340000city340200: ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县", "无为县", "其他"],
	prov340000city340300: ["龙子湖区", "蚌山区", "禹会区", "淮上区", "怀远县", "五河县", "固镇县", "其他"],
	prov340000city340400: ["大通区", "田家庵区", "谢家集区", "八公山区", "潘集区", "凤台县", "其他"],
	prov340000city340500: ["花山区", "雨山区", "当涂县", "含山县", "和县", "博望区", "金家庄区", "其他"],
	prov340000city340600: ["杜集区", "相山区", "烈山区", "濉溪县", "其他"],
	prov340000city340700: ["铜官山区", "狮子山区", "郊区", "铜陵县", "其他"],
	prov340000city340800: ["迎江区", "大观区", "宜秀区", "怀宁县", "枞阳县", "潜山县", "太湖县", "宿松县", "望江县", "岳西县", "桐城市", "其他"],
	prov340000city341000: ["屯溪区", "黄山区", "徽州区", "歙县", "休宁县", "黟县", "祁门县", "黄山风景区", "其他"],
	prov340000city341100: ["琅琊区", "南谯区", "来安县", "全椒县", "定远县", "凤阳县", "天长市", "明光市", "其他"],
	prov340000city341200: ["颍州区", "颍东区", "颍泉区", "临泉县", "太和县", "阜南县", "颍上县", "界首市", "其他"],
	prov340000city341300: ["埇桥区", "砀山县", "萧县", "灵璧县", "泗县", "永桥区", "其他"],
	prov340000city341500: ["金安区", "裕安区", "寿县", "霍邱县", "舒城县", "金寨县", "霍山县", "其他"],
	prov340000city341600: ["谯城区", "涡阳县", "蒙城县", "利辛县", "其他"],
	prov340000city341700: ["贵池区", "东至县", "石台县", "青阳县", "其他"],
	prov340000city341800: ["宣州区", "郎溪县", "广德县", "泾县", "绩溪县", "旌德县", "宁国市", "其他"],
	prov350000: ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"],
	prov350000city350100: ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽侯县", "连江县", "罗源县", "闽清县", "永泰县", "平潭县", "福清市", "长乐市", "其他"],
	prov350000city350200: ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他"],
	prov350000city350300: ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他"],
	prov350000city350400: ["梅列区", "三元区", "明溪县", "清流县", "宁化县", "大田县", "尤溪县", "沙县", "将乐县", "泰宁县", "建宁县", "永安市", "其他"],
	prov350000city350500: ["鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "金门县", "石狮市", "晋江市", "南安市", "其他"],
	prov350000city350600: ["芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市", "其他"],
	prov350000city350700: ["延平区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市", "建阳市", "其他"],
	prov350000city350800: ["新罗区", "长汀县", "永定县", "上杭县", "武平县", "连城县", "漳平市", "其他"],
	prov350000city350900: ["蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市", "其他"],
	prov360000: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"],
	prov360000city360100: ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "南昌县", "新建县", "安义县", "进贤县", "红谷滩新区", "高新开发区", "经济开发区", "英雄开发区", "其他"],
	prov360000city360200: ["昌江区", "珠山区", "浮梁县", "乐平市", "其他"],
	prov360000city360300: ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他"],
	prov360000city360400: ["庐山区", "浔阳区", "九江县", "武宁县", "修水县", "永修县", "德安县", "星子县", "都昌县", "湖口县", "彭泽县", "瑞昌市", "共青城市", "其他"],
	prov360000city360500: ["渝水区", "分宜县", "其他"],
	prov360000city360600: ["月湖区", "余江县", "贵溪市", "其他"],
	prov360000city360700: ["章贡区", "赣县", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "瑞金市", "南康市", "其他"],
	prov360000city360800: ["吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市", "其他"],
	prov360000city360900: ["袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市", "其他"],
	prov360000city361000: ["临川区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "东乡县", "广昌县", "其他"],
	prov360000city361100: ["信州区", "上饶县", "广丰县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市", "其他"],
	prov370000: ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "莱芜市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市"],
	prov370000city370100: ["历下区", "市中区", "槐荫区", "天桥区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市", "其他"],
	prov370000city370200: ["市南区", "市北区", "四方区", "黄岛区", "崂山区", "李沧区", "城阳区", "胶州市", "即墨市", "平度市", "胶南市", "莱西市", "其他"],
	prov370000city370300: ["淄川区", "张店区", "博山区", "临淄区", "周村区", "桓台县", "高青县", "沂源县", "其他"],
	prov370000city370400: ["市中区", "薛城区", "峄城区", "台儿庄区", "山亭区", "滕州市", "其他"],
	prov370000city370500: ["东营区", "河口区", "垦利县", "利津县", "广饶县", "其他"],
	prov370000city370600: ["芝罘区", "福山区", "牟平区", "莱山区", "长岛县", "龙口市", "莱阳市", "莱州市", "蓬莱市", "招远市", "栖霞市", "海阳市", "开发区", "其他"],
	prov370000city370700: ["潍城区", "寒亭区", "坊子区", "奎文区", "临朐县", "昌乐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市", "其他"],
	prov370000city370800: ["市中区", "任城区", "微山县", "鱼台县", "金乡县", "嘉祥县", "汶上县", "泗水县", "梁山县", "曲阜市", "兖州市", "邹城市", "其他"],
	prov370000city370900: ["泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市", "其他"],
	prov370000city371000: ["环翠区", "文登市", "荣成市", "乳山市", "威海工业区", "经济技术开发区", "高技术产业开发区", "其他"],
	prov370000city371100: ["东港区", "岚山区", "五莲县", "莒县", "其他"],
	prov370000city371200: ["莱城区", "钢城区", "其他"],
	prov370000city371300: ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县", "其他"],
	prov370000city371400: ["德城区", "陵县", "宁津县", "庆云县", "临邑县", "齐河县", "平原县", "夏津县", "武城县", "乐陵市", "禹城市", "其他"],
	prov370000city371500: ["东昌府区", "阳谷县", "莘县", "茌平县", "东阿县", "冠县", "高唐县", "临清市", "其他"],
	prov370000city371600: ["滨城区", "惠民县", "阳信县", "无棣县", "沾化县", "博兴县", "邹平县", "其他"],
	prov370000city371700: ["牡丹区", "曹县", "单县", "成武县", "巨野县", "郓城县", "鄄城县", "定陶县", "东明县", "其他"],
	prov410000: ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "省直辖", "济源市"],
	prov410000city1001210: ["济源县", "其他"],
	prov410000city410100: ["中原区", "二七区", "管城回族区", "金水区", "上街区", "惠济区", "中牟县", "巩义市", "荥阳市", "新密市", "新郑市", "登封市", "其他"],
	prov410000city410200: ["龙亭区", "顺河回族区", "鼓楼区", "禹王台区", "金明区", "杞县", "通许县", "尉氏县", "开封县", "兰考县", "顺河区", "其他"],
	prov410000city410300: ["老城区", "西工区", "瀍河回族区", "涧西区", "吉利区", "洛龙区", "孟津县", "新安县", "栾川县", "嵩县", "汝阳县", "宜阳县", "洛宁县", "伊川县", "偃师市", "瀍河区", "其他"],
	prov410000city410400: ["新华区", "卫东区", "石龙区", "湛河区", "宝丰县", "叶县", "鲁山县", "郏县", "舞钢市", "汝州市", "新城区", "其他"],
	prov410000city410500: ["文峰区", "北关区", "殷都区", "龙安区", "安阳县", "汤阴县", "滑县", "内黄县", "林州市", "其他"],
	prov410000city410600: ["鹤山区", "山城区", "淇滨区", "浚县", "淇县", "其他"],
	prov410000city410700: ["红旗区", "卫滨区", "凤泉区", "牧野区", "新乡县", "获嘉县", "原阳县", "延津县", "封丘县", "长垣县", "卫辉市", "辉县市", "其他"],
	prov410000city410800: ["解放区", "中站区", "马村区", "山阳区", "修武县", "博爱县", "武陟县", "温县", "沁阳市", "孟州市", "高新区", "其他"],
	prov410000city410900: ["华龙区", "清丰县", "南乐县", "范县", "台前县", "濮阳县", "其他"],
	prov410000city411000: ["魏都区", "许昌县", "鄢陵县", "襄城县", "禹州市", "长葛市", "其他"],
	prov410000city411100: ["源汇区", "郾城区", "召陵区", "舞阳县", "临颍县", "其他"],
	prov410000city411200: ["湖滨区", "渑池县", "陕县", "卢氏县", "义马市", "灵宝市", "其他"],
	prov410000city411300: ["宛城区", "卧龙区", "南召县", "方城县", "西峡县", "镇平县", "内乡县", "淅川县", "社旗县", "唐河县", "新野县", "桐柏县", "邓州市", "其他"],
	prov410000city411400: ["梁园区", "睢阳区", "民权县", "睢县", "宁陵县", "柘城县", "虞城县", "夏邑县", "永城市", "其他"],
	prov410000city411500: ["浉河区", "平桥区", "罗山县", "光山县", "新县", "商城县", "固始县", "潢川县", "淮滨县", "息县", "其他"],
	prov410000city411600: ["川汇区", "扶沟县", "西华县", "商水县", "沈丘县", "郸城县", "淮阳县", "太康县", "鹿邑县", "项城市", "其他"],
	prov410000city411700: ["驿城区", "西平县", "上蔡县", "平舆县", "正阳县", "确山县", "泌阳县", "汝南县", "遂平县", "新蔡县", "其他"],
	prov410000city419000: ["济源市", "其他"],
	prov420000: ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施土家族苗族自治州", "省直辖", "恩施州", "神农架", "湖北省直辖"],
	prov420000city1001243: ["恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县", "其他"],
	prov420000city1001252: ["林区", "其他"],
	prov420000city1001254: ["仙桃市", "潜江市", "天门市", "其他"],
	prov420000city420100: ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "桥口区", "其他"],
	prov420000city420200: ["黄石港区", "西塞山区", "下陆区", "铁山区", "阳新县", "大冶市", "其他"],
	prov420000city420300: ["茅箭区", "张湾区", "郧县", "郧西县", "竹山县", "竹溪县", "房县", "丹江口市", "其他"],
	prov420000city420500: ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "远安县", "兴山县", "秭归县", "长阳土家族自治县", "五峰土家族自治县", "宜都市", "当阳市", "枝江市", "长阳县", "五峰县", "其他"],
	prov420000city420600: ["襄城区", "樊城区", "襄州区", "南漳县", "谷城县", "保康县", "老河口市", "枣阳市", "宜城市", "襄阳区", "其他"],
	prov420000city420700: ["梁子湖区", "华容区", "鄂城区", "其他"],
	prov420000city420800: ["东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市", "其他"],
	prov420000city420900: ["孝南区", "孝昌县", "大悟县", "云梦县", "应城市", "安陆市", "汉川市", "其他"],
	prov420000city421000: ["沙市区", "荆州区", "公安县", "监利县", "江陵县", "石首市", "洪湖市", "松滋市", "其他"],
	prov420000city421100: ["黄州区", "团风县", "红安县", "罗田县", "英山县", "浠水县", "蕲春县", "黄梅县", "麻城市", "武穴市", "其他"],
	prov420000city421200: ["咸安区", "嘉鱼县", "通城县", "崇阳县", "通山县", "赤壁市", "其他"],
	prov420000city421300: ["曾都区", "随县", "广水市", "其他"],
	prov420000city422800: ["恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县", "其他"],
	prov420000city429000: ["仙桃市", "潜江市", "天门市", "神农架林区", "其他"],
	prov430000: ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西土家族苗族自治州", "湘西州"],
	prov430000city1001260: ["吉首市", "花垣县", "凤凰县", "泸溪县", "保靖县", "古丈县", "永顺县", "龙山县", "其他"],
	prov430000city430100: ["芙蓉区", "天心区", "岳麓区", "开福区", "雨花区", "望城区", "长沙县", "宁乡县", "浏阳市", "望城县", "其他"],
	prov430000city430200: ["荷塘区", "芦淞区", "石峰区", "天元区", "株洲县", "攸县", "茶陵县", "炎陵县", "醴陵市", "其他"],
	prov430000city430300: ["雨湖区", "岳塘区", "湘潭县", "湘乡市", "韶山市", "其他"],
	prov430000city430400: ["珠晖区", "雁峰区", "石鼓区", "蒸湘区", "南岳区", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", "耒阳市", "常宁市", "其他"],
	prov430000city430500: ["双清区", "大祥区", "北塔区", "邵东县", "新邵县", "邵阳县", "隆回县", "洞口县", "绥宁县", "新宁县", "城步苗族自治县", "武冈市", "城步县", "其他"],
	prov430000city430600: ["岳阳楼区", "云溪区", "君山区", "岳阳县", "华容县", "湘阴县", "平江县", "汨罗市", "临湘市", "其他"],
	prov430000city430700: ["武陵区", "鼎城区", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", "津市市", "其他"],
	prov430000city430800: ["永定区", "武陵源区", "慈利县", "桑植县", "其他"],
	prov430000city430900: ["资阳区", "赫山区", "南县", "桃江县", "安化县", "沅江市", "其他"],
	prov430000city431000: ["北湖区", "苏仙区", "桂阳县", "宜章县", "永兴县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", "资兴市", "其他"],
	prov430000city431100: ["零陵区", "冷水滩区", "祁阳县", "东安县", "双牌县", "道县", "江永县", "宁远县", "蓝山县", "新田县", "江华瑶族自治县", "江华县", "其他"],
	prov430000city431200: ["鹤城区", "中方县", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳苗族自治县", "新晃侗族自治县", "芷江侗族自治县", "靖州苗族侗族自治县", "通道侗族自治县", "洪江市", "麻阳县", "新晃县", "芷江县", "靖州县", "通道县", "其他"],
	prov430000city431300: ["娄星区", "双峰县", "新化县", "冷水江市", "涟源市", "其他"],
	prov430000city433100: ["吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县", "其他"],
	prov440000: ["广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"],
	prov440000city440100: ["荔湾区", "越秀区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"],
	prov440000city440200: ["武江区", "浈江区", "曲江区", "始兴县", "仁化县", "翁源县", "乳源瑶族自治县", "新丰县", "乐昌市", "南雄市", "乳源县", "其他"],
	prov440000city440300: ["罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区", "龙华新区", "光明新区", "坪山新区", "大鹏新区", "其他"],
	prov440000city440400: ["香洲区", "斗门区", "金湾区", "其他"],
	prov440000city440500: ["龙湖区", "金平区", "濠江区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他"],
	prov440000city440600: ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他"],
	prov440000city440700: ["蓬江区", "江海区", "新会区", "台山市", "开平市", "鹤山市", "恩平市", "其他"],
	prov440000city440800: ["赤坎区", "霞山区", "坡头区", "麻章区", "遂溪县", "徐闻县", "廉江市", "雷州市", "吴川市", "东海开发区", "其他"],
	prov440000city440900: ["茂南区", "茂港区", "电白县", "高州市", "化州市", "信宜市", "其他"],
	prov440000city441200: ["端州区", "鼎湖区", "广宁县", "怀集县", "封开县", "德庆县", "高要市", "四会市", "其他"],
	prov440000city441300: ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其他"],
	prov440000city441400: ["梅江区", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "兴宁市", "其他"],
	prov440000city441500: ["城区", "海丰县", "陆河县", "陆丰市", "其他"],
	prov440000city441600: ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县", "其他"],
	prov440000city441700: ["江城区", "阳西县", "阳东县", "阳春市", "海陵区", "岗侨区", "高新区", "其他"],
	prov440000city441800: ["清城区", "佛冈县", "阳山县", "连山壮族瑶族自治县", "连南瑶族自治县", "清新县", "英德市", "连州市", "连山县", "连南县", "其他"],
	prov440000city441900: ["莞城区", "南城区", "东城区", "万江区", "石碣镇", "石龙镇", "茶山镇", "企石镇", "桥头镇", "东坑镇", "常平镇", "寮步镇", "大朗镇", "黄江镇", "清溪镇", "塘厦镇", "虎门镇", "厚街镇", "沙田镇", "洪梅镇", "麻涌镇", "中堂镇", "大岭山镇", "望牛墩镇", "东莞市", "长安镇", "其他"],
	prov440000city442000: ["中山市", "其他"],
	prov440000city445100: ["湘桥区", "潮安县", "饶平县", "其他"],
	prov440000city445200: ["榕城区", "揭东县", "揭西县", "惠来县", "普宁市", "东山区", "其他"],
	prov440000city445300: ["云城区", "新兴县", "郁南县", "云安县", "罗定市", "其他"],
	prov450000: ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"],
	prov450000city450100: ["兴宁区", "青秀区", "江南区", "西乡塘区", "良庆区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"],
	prov450000city450200: ["城中区", "鱼峰区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "融水县", "三江县", "其他"],
	prov450000city450300: ["秀峰区", "叠彩区", "象山区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "兴安县", "永福县", "灌阳县", "龙胜各族自治县", "资源县", "平乐县", "荔蒲县", "恭城瑶族自治县", "龙胜县", "荔浦县", "恭城县", "其他"],
	prov450000city450400: ["万秀区", "蝶山区", "长洲区", "苍梧县", "藤县", "蒙山县", "岑溪市", "其他"],
	prov450000city450500: ["海城区", "银海区", "铁山港区", "合浦县", "其他"],
	prov450000city450600: ["港口区", "防城区", "上思县", "东兴市", "其他"],
	prov450000city450700: ["钦南区", "钦北区", "灵山县", "浦北县", "其他"],
	prov450000city450800: ["港北区", "港南区", "覃塘区", "平南县", "桂平市", "其他"],
	prov450000city450900: ["玉州区", "容县", "陆川县", "博白县", "兴业县", "北流市", "其他"],
	prov450000city451000: ["右江区", "田阳县", "田东县", "平果县", "德保县", "靖西县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林各族自治县", "隆林县", "其他"],
	prov450000city451100: ["八步区", "平桂管理区", "昭平县", "钟山县", "富川瑶族自治县", "富川县", "其他"],
	prov450000city451200: ["金城江区", "南丹县", "天峨县", "凤山县", "东兰县", "罗城仫佬族自治县", "环江毛南族自治县", "巴马瑶族自治县", "都安瑶族自治县", "大化瑶族自治县", "宜州市", "罗城县", "环江县", "巴马县", "都安县", "大化县", "其他"],
	prov450000city451300: ["兴宾区", "忻城县", "象州县", "武宣县", "金秀瑶族自治县", "合山市", "金秀县", "其他"],
	prov450000city451400: ["江洲区", "扶绥县", "宁明县", "龙州县", "大新县", "天等县", "凭祥市", "其他"],
	prov460000: ["海口市", "三亚市", "三沙市", "省直辖", "东方市", "儋州市", "五指山市", "万宁市", "文昌市", "琼海市", "海南省直辖"],
	prov460000city1001215: ["东方市", "其他"],
	prov460000city1001217: ["儋州市", "其他"],
	prov460000city1001219: ["五指山市", "其他"],
	prov460000city1001221: ["万宁市", "其他"],
	prov460000city1001223: ["文昌市", "其他"],
	prov460000city1001225: ["琼海市", "其他"],
	prov460000city1001228: ["乐东县", "陵水县", "保亭县", "琼中县", "定安县", "屯昌县", "澄迈县", "临高县", "白沙县", "昌江县", "其他"],
	prov460000city460100: ["秀英区", "龙华区", "琼山区", "美兰区", "其他"],
	prov460000city460200: ["河东区", "河西区", "三亚市", "其他"],
	prov460000city469000: ["五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "定安县", "屯昌县", "澄迈县", "临高县", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县", "其他"],
	prov500000: ["重庆市"],
	prov500000city500100: ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "璧山区", "万盛区", "双桥区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱县", "秀山县", "酉阳县", "彭水县", "其他"],
	prov510000: ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"],
	prov510000city510100: ["锦江区", "青羊区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "金堂县", "双流县", "郫县", "大邑县", "蒲江县", "新津县", "都江堰市", "彭州市", "邛崃市", "崇州市", "其他"],
	prov510000city510300: ["自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县", "其他"],
	prov510000city510400: ["东区", "西区", "仁和区", "米易县", "盐边县", "其他"],
	prov510000city510500: ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县", "其他"],
	prov510000city510600: ["旌阳区", "中江县", "罗江县", "广汉市", "什邡市", "绵竹市", "其他"],
	prov510000city510700: ["涪城区", "游仙区", "三台县", "盐亭县", "安县", "梓潼县", "北川羌族自治县", "平武县", "江油市", "其他"],
	prov510000city510800: ["利州区", "元坝区", "朝天区", "旺苍县", "青川县", "剑阁县", "苍溪县", "其他"],
	prov510000city510900: ["船山区", "安居区", "蓬溪县", "射洪县", "大英县", "其他"],
	prov510000city511000: ["市中区", "东兴区", "威远县", "资中县", "隆昌县", "其他"],
	prov510000city511100: ["市中区", "沙湾区", "五通桥区", "金口河区", "犍为县", "井研县", "夹江县", "沐川县", "峨边彝族自治县", "马边彝族自治县", "峨眉山市", "其他"],
	prov510000city511300: ["顺庆区", "高坪区", "嘉陵区", "南部县", "营山县", "蓬安县", "仪陇县", "西充县", "阆中市", "其他"],
	prov510000city511400: ["东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县", "其他"],
	prov510000city511500: ["翠屏区", "宜宾县", "南溪区", "江安县", "长宁县", "高县", "珙县", "筠连县", "兴文县", "屏山县", "其他"],
	prov510000city511600: ["广安区", "岳池县", "武胜县", "邻水县", "华蓥市", "其他"],
	prov510000city511700: ["通川区", "达县", "宣汉县", "开江县", "大竹县", "渠县", "万源市", "其他"],
	prov510000city511800: ["雨城区", "名山县", "荥经县", "汉源县", "石棉县", "天全县", "芦山县", "宝兴县", "其他"],
	prov510000city511900: ["巴州区", "通江县", "南江县", "平昌县", "其他"],
	prov510000city512000: ["雁江区", "安岳县", "乐至县", "简阳市", "其他"],
	prov510000city513200: ["汶川县", "理县", "茂县", "松潘县", "九寨沟县", "金川县", "小金县", "黑水县", "马尔康县", "壤塘县", "阿坝县", "若尔盖县", "红原县", "其他"],
	prov510000city513300: ["康定县", "泸定县", "丹巴县", "九龙县", "雅江县", "道孚县", "炉霍县", "甘孜县", "新龙县", "德格县", "白玉县", "石渠县", "色达县", "理塘县", "巴塘县", "乡城县", "稻城县", "得荣县", "其他"],
	prov510000city513400: ["西昌市", "木里藏族自治县", "盐源县", "德昌县", "会理县", "会东县", "宁南县", "普格县", "布拖县", "金阳县", "昭觉县", "喜德县", "冕宁县", "越西县", "甘洛县", "美姑县", "雷波县", "其他"],
	prov520000: ["贵阳市", "六盘水市", "遵义市", "安顺市", "铜仁市", "黔西南布依族苗族自治州", "毕节市", "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "黔南州", "黔东南州", "毕节地区", "黔西南州"],
	prov520000city1001311: ["都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都县", "其他"],
	prov520000city1001324: ["凯里市", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县", "其他"],
	prov520000city1001351: ["毕节市", "大方县", "黔西县", "金沙县", "织金县", "纳雍县", "威宁县", "赫章县", "其他"],
	prov520000city1001360: ["兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县", "其他"],
	prov520000city520100: ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "开阳县", "息烽县", "修文县", "清镇市", "金阳新区", "观山湖区", "其他"],
	prov520000city520200: ["钟山区", "六枝特区", "水城县", "盘县", "其他"],
	prov520000city520300: ["红花岗区", "汇川区", "遵义县", "桐梓县", "绥阳县", "正安县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "凤冈县", "湄潭县", "余庆县", "习水县", "赤水市", "仁怀市", "道真县", "务川县", "其他"],
	prov520000city520400: ["西秀区", "平坝县", "普定县", "镇宁布依族苗族自治县", "关岭布依族苗族自治县", "紫云苗族布依族自治县", "镇宁县", "关岭县", "紫云县", "其他"],
	prov520000city522200: ["铜仁市", "江口县", "玉屏县", "石阡县", "思南县", "印江县", "德江县", "沿河县", "松桃县", "万山特区", "其他"],
	prov520000city522300: ["兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县", "其他"],
	prov520000city522400: ["毕节市", "其他"],
	prov520000city522600: ["凯里市", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县", "其他"],
	prov520000city522700: ["都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都水族自治县", "其他"],
	prov530000: ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "大理白族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州", "西双版纳州", "德宏州", "大理州", "红河州", "文山州", "楚雄州", "怒江州", "迪庆州"],
	prov530000city1001002: ["景洪市", "勐海县", "勐腊县", "其他"],
	prov530000city1001006: ["瑞丽市", "潞西市", "梁河县", "盈江县", "陇川县", "其他"],
	prov530000city1001016: ["大理市", "漾濞县", "祥云县", "宾川县", "弥渡县", "南涧县", "巍山县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "其他"],
	prov530000city1001029: ["个旧市", "开远市", "蒙自市", "屏边县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平县", "绿春县", "河口县", "其他"],
	prov530000city1001043: ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"],
	prov530000city1001055: ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"],
	prov530000city1001078: ["泸水县", "福贡县", "贡山县", "兰坪县", "其他"],
	prov530000city1001083: ["香格里拉县", "德钦县", "维西县", "其他"],
	prov530000city530100: ["五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡区", "晋宁县", "富民县", "宜良县", "石林彝族自治县", "嵩明县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "安宁市", "呈贡县", "石林县", "禄劝县", "寻甸县", "其他"],
	prov530000city530300: ["麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益县", "宣威市", "其他"],
	prov530000city530400: ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "峨山县", "新平县", "元江县", "其他"],
	prov530000city530500: ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其他"],
	prov530000city530600: ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其他"],
	prov530000city530700: ["古城区", "玉龙纳西族自治县", "永胜县", "华坪县", "宁蒗彝族自治县", "玉龙县", "其他"],
	prov530000city530800: ["思茅区", "宁洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "宁洱县", "墨江县", "景东县", "景谷县", "镇沅县", "江城县", "孟连县", "澜沧县", "西盟县", "其他"],
	prov530000city530900: ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "双江县", "耿马县", "沧源县", "其他"],
	prov530000city532300: ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"],
	prov530000city532500: ["个旧市", "开远市", "蒙自市", "屏边苗族自治县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "绿春县", "河口瑶族自治县", "其他"],
	prov530000city532600: ["文山市", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"],
	prov530000city532800: ["景洪市", "勐海县", "勐腊县", "其他"],
	prov530000city532900: ["大理市", "漾濞彝族自治县", "祥云县", "宾川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "其他"],
	prov530000city533100: ["瑞丽市", "芒市", "梁河县", "盈江县", "陇川县", "其他"],
	prov530000city533300: ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其他"],
	prov530000city533400: ["香格里拉县", "德钦县", "维西傈僳族自治县", "其他"],
	prov540000: ["拉萨市", "昌都地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区", "林芝地区"],
	prov540000city540100: ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "德庆县", "其他"],
	prov540000city542100: ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其他"],
	prov540000city542200: ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其他"],
	prov540000city542300: ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其他"],
	prov540000city542400: ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "索县", "其他"],
	prov540000city542500: ["普兰县", "札达县", "噶尔县", "日土县", "革吉县", "改则县", "措勤县", "其他"],
	prov540000city542600: ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "朗县", "其他"],
	prov610000: ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"],
	prov610000city610100: ["新城区", "碑林区", "莲湖区", "灞桥区", "未央区", "雁塔区", "阎良区", "临潼区", "长安区", "蓝田县", "周至县", "户县", "高陵县", "其他"],
	prov610000city610200: ["王益区", "印台区", "耀州区", "宜君县", "其他"],
	prov610000city610300: ["渭滨区", "金台区", "陈仓区", "凤翔县", "岐山县", "扶风县", "眉县", "陇县", "千阳县", "麟游县", "凤县", "太白县", "其他"],
	prov610000city610400: ["秦都区", "杨陵区", "渭城区", "三原县", "泾阳县", "乾县", "礼泉县", "永寿县", "彬县", "长武县", "旬邑县", "淳化县", "武功县", "兴平市", "杨凌区", "其他"],
	prov610000city610500: ["临渭区", "华县", "潼关县", "大荔县", "合阳县", "澄城县", "蒲城县", "白水县", "富平县", "韩城市", "华阴市", "其他"],
	prov610000city610600: ["宝塔区", "延长县", "延川县", "子长县", "安塞县", "志丹县", "吴起县", "甘泉县", "富县", "洛川县", "宜川县", "黄龙县", "黄陵县", "其他"],
	prov610000city610700: ["汉台区", "南郑县", "城固县", "洋县", "西乡县", "勉县", "宁强县", "略阳县", "镇巴县", "留坝县", "佛坪县", "其他"],
	prov610000city610800: ["榆阳区", "神木县", "府谷县", "横山县", "靖边县", "定边县", "绥德县", "米脂县", "佳县", "吴堡县", "清涧县", "子洲县", "其他"],
	prov610000city610900: ["汉滨区", "汉阴县", "石泉县", "宁陕县", "紫阳县", "岚皋县", "平利县", "镇坪县", "旬阳县", "白河县", "其他"],
	prov610000city611000: ["商州区", "洛南县", "丹凤县", "商南县", "山阳县", "镇安县", "柞水县", "其他"],
	prov620000: ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州", "临夏州", "甘南州"],
	prov620000city1001275: ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡县", "积石山县", "其他"],
	prov620000city1001289: ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"],
	prov620000city620100: ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其他"],
	prov620000city620200: ["雄关区", "长城区", "镜铁区", "嘉峪关市", "其他"],
	prov620000city620300: ["金川区", "永昌县", "其他"],
	prov620000city620400: ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其他"],
	prov620000city620500: ["秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "张家川县", "其他"],
	prov620000city620600: ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "天祝县", "其他"],
	prov620000city620700: ["甘州区", "肃南裕固族自治县", "民乐县", "临泽县", "高台县", "山丹县", "肃南县", "其他"],
	prov620000city620800: ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其他"],
	prov620000city620900: ["肃州区", "金塔县", "瓜州县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "玉门市", "敦煌市", "肃北县", "阿克塞县", "其他"],
	prov620000city621000: ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其他"],
	prov620000city621100: ["安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳县", "岷县", "其他"],
	prov620000city621200: ["武都区", "成县", "文县", "宕昌县", "康县", "西和县", "礼县", "徽县", "两当县", "其他"],
	prov620000city622900: ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其他"],
	prov620000city623000: ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"],
	prov630000: ["西宁市", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州", "海北州", "黄南州", "海南州", "果洛州", "玉树州", "海西州"],
	prov630000city1001404: ["门源县", "祁连县", "海晏县", "刚察县", "其他"],
	prov630000city1001414: ["同仁县", "尖扎县", "泽库县", "河南县", "其他"],
	prov630000city1001419: ["共和县", "同德县", "贵德县", "贵南县", "其他"],
	prov630000city1001424: ["玛沁县", "班玛县", "达日县", "久治县", "其他"],
	prov630000city1001429: ["玉树县", "称多县", "治多县", "曲麻莱县", "其他"],
	prov630000city1001434: ["格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县", "其他"],
	prov630000city630100: ["城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县", "大通县", "其他"],
	prov630000city632100: ["平安县", "民和回族土族自治县", "乐都县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "民和县", "互助县", "化隆县", "循化县", "其他"],
	prov630000city632200: ["门源回族自治县", "祁连县", "海晏县", "刚察县", "其他"],
	prov630000city632300: ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其他"],
	prov630000city632500: ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其他"],
	prov630000city632600: ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其他"],
	prov630000city632700: ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其他"],
	prov630000city632800: ["格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县", "其他"],
	prov640000: ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
	prov640000city640100: ["兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市", "其他"],
	prov640000city640200: ["大武口区", "惠农区", "平罗县", "其他"],
	prov640000city640300: ["利通区", "红寺堡区", "盐池县", "同心县", "青铜峡市", "红寺堡开发区", "其他"],
	prov640000city640400: ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "地址异常", "其他"],
	prov640000city640500: ["沙坡头区", "中宁县", "海原县", "其他"],
	prov650000: ["乌鲁木齐市", "克拉玛依市", "吐鲁番地区", "哈密地区", "昌吉回族自治州", "博尔塔拉蒙古自治州", "巴音郭楞蒙古自治州", "阿克苏地区", "克孜勒苏柯尔克孜自治州", "喀什地区", "和田地区", "伊犁哈萨克自治州", "塔城地区", "阿勒泰地区", "自治区直辖", "克孜勒苏州", "博尔塔拉州", "伊犁州", "石河子市", "昌吉州", "巴音郭楞州", "阿拉尔市"],
	prov650000city1001132: ["阿图什市", "阿克陶县", "阿合奇县", "乌恰县", "其他"],
	prov650000city1001137: ["博乐市", "精河县", "温泉县", "其他"],
	prov650000city1001141: ["伊宁市", "奎屯市", "伊宁县", "察布查尔县", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县", "其他"],
	prov650000city1001152: ["石河子市", "其他"],
	prov650000city1001154: ["昌吉市", "阜康市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒县", "五家渠市", "其他"],
	prov650000city1001163: ["库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆县", "和静县", "和硕县", "博湖县", "其他"],
	prov650000city1001175: ["阿拉尔市", "其他"],
	prov650000city650100: ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "米东区", "乌鲁木齐县", "其他"],
	prov650000city650200: ["独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区", "其他"],
	prov650000city652100: ["吐鲁番市", "鄯善县", "托克逊县", "其他"],
	prov650000city652200: ["哈密市", "巴里坤哈萨克自治县", "伊吾县", "巴里坤县", "其他"],
	prov650000city652300: ["昌吉市", "阜康市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒哈萨克自治县", "其他"],
	prov650000city652700: ["博乐市", "精河县", "温泉县", "其他"],
	prov650000city652800: ["库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆回族自治县", "和静县", "和硕县", "博湖县", "其他"],
	prov650000city652900: ["阿克苏市", "温宿县", "库车县", "沙雅县", "新和县", "拜城县", "乌什县", "阿瓦提县", "柯坪县", "其他"],
	prov650000city653000: ["阿图什市", "阿克陶县", "阿合奇县", "乌恰县", "其他"],
	prov650000city653100: ["喀什市", "疏附县", "疏勒县", "英吉沙县", "泽普县", "莎车县", "叶城县", "麦盖提县", "岳普湖县", "伽师县", "巴楚县", "塔什库尔干塔吉克自治县", "塔什库尔干县", "图木舒克市", "其他"],
	prov650000city653200: ["和田市", "和田县", "墨玉县", "皮山县", "洛浦县", "策勒县", "于田县", "民丰县", "其他"],
	prov650000city654000: ["伊宁市", "奎屯市", "伊宁县", "察布查尔锡伯自治县", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县", "其他"],
	prov650000city654200: ["塔城市", "乌苏市", "额敏县", "沙湾县", "托里县", "裕民县", "和布克赛尔蒙古自治县", "和布克赛尔县", "其他"],
	prov650000city654300: ["阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "青河县", "吉木乃县", "其他"],
	prov650000city659000: ["石河子市", "阿拉尔市", "图木舒克市", "五家渠市", "北屯市", "铁门关市", "其他"],
	prov710000: ["台北市", "高雄市", "基隆市", "台中市", "台南市", "新竹市", "嘉义市", "省直辖"],
	prov710000city710100: ["中正区", "大同区", "中山区", "松山区", "大安区", "万华区", "信义区", "士林区", "北投区", "内湖区", "南港区", "文山区", "其他"],
	prov710000city710200: ["新兴区", "前金区", "芩雅区", "盐埕区", "鼓山区", "旗津区", "前镇区", "三民区", "左营区", "楠梓区", "小港区", "其他"],
	prov710000city710300: ["仁爱区", "信义区", "中正区", "中山区", "安乐区", "暖暖区", "七堵区", "其他"],
	prov710000city710400: ["中区", "东区", "南区", "西区", "北区", "北屯区", "西屯区", "南屯区", "其他"],
	prov710000city710500: ["中西区", "东区", "南区", "北区", "安平区", "安南区", "其他"],
	prov710000city710600: ["东区", "北区", "香山区", "其他"],
	prov710000city710700: ["东区", "西区", "其他"],
	prov710000city719000: ["台北县", "宜兰县", "新竹县", "桃园县", "苗栗县", "台中县", "彰化县", "南投县", "嘉义县", "云林县", "台南县", "高雄县", "屏东县", "台东县", "花莲县", "其他"],
	prov810000: ["香港岛", "九龙", "新界"],
	prov810000city810100: ["中西区", "湾仔区", "东区", "南区", "其他"],
	prov810000city810200: ["油尖旺区", "深水埗区", "九龙城区", "黄大仙区", "观塘区", "其他"],
	prov810000city810300: ["北区", "大埔区", "沙田区", "西贡区", "荃湾区", "屯门区", "元朗区", "葵青区", "离岛区", "其他"],
	prov820000: ["澳门半岛", "澳门离岛", "无堂区划分区域"],
	prov820000city820100: ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "其他"],
	prov820000city820200: ["嘉模堂区", "圣方济各堂区", "其他"],
	prov820000city820300: ["路氹城", "其他"]
  };
  e.exports = o
}, function (e, t) {
  var o = {
	prov1140000: ["Hungary"],
	code1180000: [1180100],
	codeprov1240000city1240400: [1240401, 1240402, 1240403, 1240404, 1240405, 1240406, 1240407, 1240408, 1240409, 1240410, 1240411, 1240412],
	prov1010000: ["Cyprus"],
	codeprov1240000city1240600: [1240601, 1240602, 1240603],
	codeprov1240000city1240800: [1240801, 1240802, 1240803, 1240804, 1240805, 1240806, 1240807, 1240808, 1240809, 1240810, 1240811, 1240812, 1240813, 1240814, 1240815, 1240816, 1240817, 1240818, 1240819, 1240820, 1240821, 1240822],
	codeprov1090000city1090100: [1090101, 1090102, 1090103, 1090104, 1090105, 1090106, 1090107, 1090108, 1090109, 1090110, 1090111, 1090112],
	prov1260000: ["Estonia"],
	prov1120000city1120100: ["Alessandria", "Ancona", "Aosta", "Ascoli Piceno", "Asti", "Bari", "Benevento", "Bergamo", "Biella", "Bologna", "Brescia", "Brindisi", "Cagliari", "Campobasso", "Caserta", "Catania", "Catanzaro", "Como", "Cosenza", "Crotone", "Cuneo", "Ferrara", "Firenze", "Foggia", "Genova", "Isernia", "L'Aquila", "La Spezia", "Lecce", "Lecco", "Livorno", "Massa-Carrara", "Matera", "Messina", "Milano", "Modena", "Monza e Brianza", "Naples", "Novara", "Nuoro", "Olbia-Tempio", "Oristano", "Palermo", "Parma", "Pavia", "Perugia", "Pisa", "Pordenone", "Potenza", "Reggio Calabria", "Reggio Emilia", "Roma", "Salerno", "Sassari", "Savona", "Siena", "Syracuse", "Taranto", "Trapani", "Trento", "Trieste", "Turin", "Udine", "Venice", "Vercelli", "Viterbo"],
	prov1070000: ["Belgium"],
	code1060000: [1060100],
	prov1100000city1100100: ["Alava", "Albacete", "Alicante", "Almeria", "Asturias", "Avila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Castellon", "Cludad Real", "Cordoba", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen", "La Coruna", "La Rioja", "Las Palmas", "Leon", "Lleida", "Madrid", "Malaga", "Murcia", "Navarra", "Orense", "Palencia", "Provincia de Lugo", "Provincia de Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Santander", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"],
	prov1050000city1050100: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
	code1150000: [1150100],
	codeprov1000000city1000100: [1000101, 1000102, 1000103, 1000104, 1000105, 1000106, 1000107, 1000108, 1000109, 1000110, 1000111],
	prov1150000: ["Poland"],
	prov1140000city1140100: ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Budapest", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala"],
	code1210000: [1210100],
	prov1220000: ["Sweden"],
	prov1240000city1240700: ["Andong", "Bonghwa County", "Cheongdo County", "Cheongsong County", "Chilgok County", "Gimcheon", "Goryeong County", "Gumi", "Gunwi County", "Gyeongju", "Gyeongsan", "Mungyeong", "Pohang", "Sangju", "Seongju County", "Uiseong County", "Uljin County", "Ulleung County", "Yecheon County", "Yeongcheon", "Yeongdeok County", "Yeongju", "Yeongyang County"],
	code1050000: [1050100],
	prov1080000: ["Greece"],
	prov1270000city1270100: ["s-Hertogenbosch", "Almere", "Amersfoort", "Amsterdam", "Apeldoorn", "Arnhem", "Assen", "Breda", "Dordrecht", "Ede", "Eindhoven", "Emmen", "Enschede", "Groningen", "Haarlem", "Hague", "Hoofddorp", "Leeuwarden", "Leiden", "Lelystad", "Maastricht", "Middelburg", "Nijmegen", "Rotterdam", "Tilburg", "Utrecht", "Zoetermeer", "Zwolle"],
	code1100000: [1100100],
	prov1090000city1090100: ["Dolenjska", "Gorenjska", "Goriska", "Koroska", "Notranjsko-kraska", "Obalno-kraska", "Osrednjeslovenska", "Podravska", "Pomurska", "Savinjska", "Spodnjeposavska", "Zasavska"],
	codeprov1080000city1080100: [1080101, 1080102, 1080103, 1080104, 1080105, 1080106, 1080107, 1080108, 1080109, 1080110],
	prov1230000: ["Denmark"],
	codeprov1250000city1250100: [1250101, 1250102, 1250103, 1250104, 1250105, 1250106],
	prov1050000: ["Ireland"],
	codeprov1100000city1100100: [1100101, 1100102, 1100103, 1100104, 1100105, 1100106, 1100107, 1100108, 1100109, 1100110, 1100111, 1100112, 1100113, 1100114, 1100115, 1100116, 1100117, 1100118, 1100119, 1100120, 1100121, 1100122, 1100123, 1100124, 1100125, 1100126, 1100127, 1100128, 1100129, 1100130, 1100131, 1100132, 1100133, 1100134, 1100135, 1100136, 1100137, 1100138, 1100139, 1100140, 1100141, 1100142, 1100143, 1100144, 1100145, 1100146, 1100147, 1100148, 1100149, 1100150],
	codeprov1150000city1150100: [1150101, 1150102, 1150103, 1150104, 1150105, 1150106, 1150107, 1150108, 1150109, 1150110, 1150111, 1150112, 1150113, 1150114, 1150115, 1150116, 1150117, 1150118, 1150119, 1150120, 1150121, 1150122, 1150123, 1150124, 1150125, 1150126, 1150127, 1150128, 1150129, 1150130, 1150131, 1150132, 1150133, 1150134, 1150135, 1150136, 1150137, 1150138, 1150139, 1150140, 1150141, 1150142, 1150143, 1150144, 1150145, 1150146, 1150147, 1150148, 1150149, 1150150, 1150151, 1150152, 1150153, 1150154, 1150155, 1150156, 1150157, 1150158, 1150159, 1150160, 1150161, 1150162, 1150163],
	prov1240000: ["Chungcheongnam-do", "Jeollanam-do", "Gyeongsangbuk-do", "Jeollabuk-do", "Gangwon-do", "Daegu", "Chungcheongbuk-do", "Gyeongsangnam-do", "Gyeonggi-do"],
	prov1160000city1160100: ["Espoo", "Hameenlinna", "Helsinki", "Joensuu", "Kajaani", "Kokkola", "Kotka", "Kuopio", "Lahti", "Lappeenranta", "Mariehamn", "Mikkeli", "Oulu", "Pori", "Porvoo", "Rovaniemi", "Tampere", "Turku", "Vaasa", "Vantaa"],
	codeprov1230000city1230100: [1230101, 1230102, 1230103, 1230104, 1230105, 1230106, 1230107, 1230108, 1230109, 1230110, 1230111, 1230112, 1230113, 1230114],
	codeprov1020000city1020100: [1020101, 1020102, 1020103, 1020104, 1020105, 1020106, 1020107, 1020108, 1020109, 1020110, 1020111, 1020112, 1020113, 1020114, 1020115, 1020116, 1020117, 1020118, 1020119, 1020120, 1020121],
	prov1240000city1240800: ["Boseong County", "Damyang County", "Gangjin County", "Goheung County", "Gokseong County", "Gurye County", "Gwangyang", "Haenam County", "Hampyeong County", "Hwasun County", "Jangheung County", "Jangseong County", "Jindo County", "Mokpo", "Muan County", "Naju", "Sinan County", "Suncheon", "Wando County", "Yeongam County", "Yeonggwang County", "Yeosu"],
	codeprov1050000city1050100: [1050101, 1050102, 1050103, 1050104, 1050105, 1050106, 1050107, 1050108, 1050109, 1050110, 1050111, 1050112, 1050113, 1050114, 1050115, 1050116, 1050117, 1050118, 1050119, 1050120, 1050121, 1050122, 1050123, 1050124, 1050125, 1050126],
	code1090000: [1090100],
	prov1060000city1060100: ["Alba Iulia", "Alexandria", "Arad", "Bacau", "Baia Mare", "Bistrita", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Cluj-Napoca", "Constanta", "Craiova", "Deva", "Drobeta-Turnu Severin", "Focsani", "Galati", "Giurgiu", "Iasi", "Miercurea-Ciuc", "Oradea", "Piatra Neamt", "Pitesti", "Ploiesti", "Resita", "Satu Mare", "Sfantu-Gheorghe", "Sibiu", "Slatina", "Slobozia", "Suceava", "Targovişte", "Timisoara", "Tirgu Mures", "Tirgu-Jiu", "Tulcea", "Vaslui", "XRimnicu Vilcea", "Zalau"],
	prov1270000: ["Netherlands"],
	code1000000: [1000100],
	codeprov1210000city1210100: [1210101, 1210102, 1210103],
	prov1000000: ["Lithuania"],
	prov1210000: ["Luxembourg"],
	codeprov1240000city1240300: [1240301, 1240302, 1240303, 1240304, 1240305, 1240306, 1240307, 1240308, 1240309, 1240310, 1240311, 1240312, 1240313, 1240314],
	prov1110000city1110100: ["Alentejo Central", "Alentejo Litoral", "Alto Alentejo", "Alto Tros-os-Montes", "Ave", "Baixo Alentejo", "Baixo Mondego", "Baixo Vouga", "Beira Interior Norte", "Beira Interior Sul", "Cavado", "Cova da Beira", "Douro", "Entre Douro e Vouga", "Faro", "Funchal", "Leziria do Tejo", "Lisboa", "Medio Tejo", "Minho-Lima", "Oeste", "Peninsula de Setubal", "Pinhal Interior Norte", "Pinhal Interior Sul", "Pinhal Litoral", "Ponta Delgada", "Porto", "Serra da Estrela", "Tamega"],
	code1020000: [1020100],
	codeprov1060000city1060100: [1060101, 1060102, 1060103, 1060104, 1060105, 1060106, 1060107, 1060108, 1060109, 1060110, 1060111, 1060112, 1060113, 1060114, 1060115, 1060116, 1060117, 1060118, 1060119, 1060120, 1060121, 1060122, 1060123, 1060124, 1060125, 1060126, 1060127, 1060128, 1060129, 1060130, 1060131, 1060132, 1060133, 1060134, 1060135, 1060136, 1060137, 1060138, 1060139, 1060140, 1060141],
	code1170000: [1170100],
	codeprov1240000city1240100: [1240101, 1240102, 1240103, 1240104, 1240105, 1240106, 1240107, 1240108, 1240109, 1240110, 1240111, 1240112, 1240113, 1240114, 1240115, 1240116, 1240117, 1240118, 1240119, 1240120],
	code1250000: [1250100, 1250200, 1250300, 1250400],
	prov1060000: ["Romania"],
	prov1030000: ["Switzerland"],
	code1030000: [1030100],
	prov1090000: ["Slovenia"],
	prov1170000city1170100: ["Aix-en-Provence", "Ajaccio", "Amiens", "Arles", "Besancon", "Caen", "Chalons-en-Champagne", "Dijon", "Frejus", "Lille", "Limoges", "Lyon", "Marseille", "Metz", "Montpellier", "Nantes", "Nice", "Orleans", "Paris", "Rennes", "Rouen", "Toulouse", "Valence"],
	prov1260000city1260100: ["Harju", "Hiiu", "Ida-Viru", "Jarva", "Jogeva", "Laane", "Laane-Viru", "Parnu", "Polva", "Rapla", "Saare", "Tartu", "Valga", "Viljandi", "Voru"],
	codeprov1250000city1250300: [1250301, 1250302, 1250303, 1250304, 1250305, 1250306, 1250307, 1250308, 1250309, 1250310, 1250311, 1250312, 1250313, 1250314, 1250315, 1250316, 1250317, 1250318, 1250319, 1250320, 1250321, 1250322, 1250323, 1250324, 1250325, 1250326, 1250327, 1250328, 1250329, 1250330, 1250331, 1250332, 1250333, 1250334, 1250335, 1250336, 1250337, 1250338, 1250339, 1250340, 1250341, 1250342, 1250343, 1250344, 1250345, 1250346, 1250347, 1250348, 1250349],
	prov1130000city1130100: ["Aizkraukles", "Aluksnes", "Balvu", "Bauskas", "Cesu", "Daugavpils", "Dobeles", "Gulbenes", "Jekabpils", "Jelgavas", "Kraslavas", "Kuldigas", "Liepajas", "Limbazu", "Ludzas", "Madonas", "Ogres", "Preilu", "Rezeknes", "Rigas", "Saldus", "Talsu", "Tukuma", "Valkas", "Valmieras", "Ventspils"],
	code1110000: [1110100],
	code1200000: [1200100],
	codeprov1180000city1180100: [1180101, 1180102, 1180103, 1180104, 1180105, 1180106, 1180107, 1180108],
	code1010000: [1010100],
	codeprov1240000city1240900: [1240901, 1240902, 1240903, 1240904, 1240905, 1240906, 1240907, 1240908, 1240909, 1240910, 1240911, 1240912, 1240913, 1240914, 1240915, 1240916, 1240917, 1240918, 1240919, 1240920, 1240921, 1240922, 1240923, 1240924, 1240925, 1240926, 1240927, 1240928, 1240929, 1240930, 1240931],
	code1080000: [1080100],
	codeprov1190000city1190100: [1190101, 1190102, 1190103, 1190104, 1190105, 1190106, 1190107, 1190108, 1190109],
	prov1230000city1230100: ["Aarhus", "Bornholm", "Copenhagen", "Frederiksborg", "Fyn", "Nordjylland", "Ribe", "Ringkoebing", "Roskilde", "Soenderjylland", "Storstroem", "Vejle", "Vestsjaelland", "Viborg"],
	prov1200000: ["Germany"],
	prov1100000: ["Spain"],
	prov1070000city1070100: ["Antwerpen", "Brabant-Wallone", "Brussels", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "West-Vlaanderen"],
	prov1120000: ["Italy"],
	prov1240000city1240100: ["Changnyeong County", "Changwon", "Geochang County", "Geoje", "Gimhae", "Goseong County", "Hadong County", "Haman County", "Hamyang County", "Hapcheon County", "Jinhae", "Jinju", "Masan", "Miryang", "Namhae County", "Sacheon", "Sancheong County", "Tongyeong", "Uiryeong County", "Yangsan"],
	prov1110000: ["Portugal"],
	code1070000: [1070100],
	codeprov1240000city1240500: [1240501, 1240502, 1240503, 1240504, 1240505, 1240506, 1240507, 1240508, 1240509, 1240510, 1240511, 1240512, 1240513, 1240514, 1240515, 1240516, 1240517, 1240518],
	codeprov1270000city1270100: [1270101, 1270102, 1270103, 1270104, 1270105, 1270106, 1270107, 1270108, 1270109, 1270110, 1270111, 1270112, 1270113, 1270114, 1270115, 1270116, 1270117, 1270118, 1270119, 1270120, 1270121, 1270122, 1270123, 1270124, 1270125, 1270126, 1270127, 1270128],
	prov1200000city1200100: ["Ansbach", "Arnsberg", "Augsburg", "Bayreuth", "Berlin", "Bielefeld", "Bochum", "Bremen", "Brunswick", "Chemnitz", "Cologne", "Darmstadt", "Dessau", "Detmold", "Dresden", "Dusseldorf", "Erfurt", "Frankfurt", "Freiburg", "GieBen", "Halle", "Hamburg", "Hannover", "Karlsruhe", "Kassel", "Kiel", "Koblenz", "Landshut", "Leipzig", "Luneburg", "Magdeburg", "Mainz", "Mannheim", "Muenster", "Munich", "Nuremberg", "Potsdam", "Schwerin", "Stuttgart", "Trier", "Wiesbaden", "Wuerzburg"],
	prov1020000: ["Croatia"],
	codeprov1030000city1030100: [1030101, 1030102, 1030103, 1030104, 1030105, 1030106, 1030107, 1030108, 1030109, 1030110, 1030111, 1030112, 1030113, 1030114, 1030115, 1030116, 1030117, 1030118, 1030119, 1030120, 1030121, 1030122, 1030123, 1030124, 1030125, 1030126, 1030127],
	codeprov1120000city1120100: [1120101, 1120102, 1120103, 1120104, 1120105, 1120106, 1120107, 1120108, 1120109, 1120110, 1120111, 1120112, 1120113, 1120114, 1120115, 1120116, 1120117, 1120118, 1120119, 1120120, 1120121, 1120122, 1120123, 1120124, 1120125, 1120126, 1120127, 1120128, 1120129, 1120130, 1120131, 1120132, 1120133, 1120134, 1120135, 1120136, 1120137, 1120138, 1120139, 1120140, 1120141, 1120142, 1120143, 1120144, 1120145, 1120146, 1120147, 1120148, 1120149, 1120150, 1120151, 1120152, 1120153, 1120154, 1120155, 1120156, 1120157, 1120158, 1120159, 1120160, 1120161, 1120162, 1120163, 1120164, 1120165, 1120166],
	prov1250000city1250100: ["Aberdeen", "Dundee", "Edinburgh", "Glasgow", "Inverness", "Stirling"],
	prov1040000: ["Japan"],
	codeprov1220000city1220100: [1220101, 1220102, 1220103, 1220104, 1220105, 1220106, 1220107, 1220108, 1220109, 1220110, 1220111, 1220112, 1220113, 1220114, 1220115, 1220116, 1220117, 1220118, 1220119, 1220120, 1220121],
	prov1180000city1180100: ["Banskobystricky", "Bratislavsky", "Koricky", "Nitriansky", "Prerovsky", "Rilinsky", "Trenriansky", "Trnavsky"],
	code: [104e4, 124e4, 125e4, 117e4, 12e5, 112e4, 11e5, 122e4, 103e4, 127e4, 108e4, 111e4, 105e4, 126e4, 119e4, 107e4, 115e4, 123e4, 116e4, 102e4, 113e4, 1e6, 121e4, 106e4, 101e4, 118e4, 109e4, 114e4],
	prov1040000city1040100: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
	codeprov1260000city1260100: [1260101, 1260102, 1260103, 1260104, 1260105, 1260106, 1260107, 1260108, 1260109, 1260110, 1260111, 1260112, 1260113, 1260114, 1260115],
	codeprov1200000city1200100: [1200101, 1200102, 1200103, 1200104, 1200105, 1200106, 1200107, 1200108, 1200109, 1200110, 1200111, 1200112, 1200113, 1200114, 1200115, 1200116, 1200117, 1200118, 1200119, 1200120, 1200121, 1200122, 1200123, 1200124, 1200125, 1200126, 1200127, 1200128, 1200129, 1200130, 1200131, 1200132, 1200133, 1200134, 1200135, 1200136, 1200137, 1200138, 1200139, 1200140, 1200141, 1200142],
	prov: ["日本", "韩国", "英国", "法国", "德国", "意大利", "西班牙", "瑞典", "瑞士", "荷兰", "希腊", "葡萄牙", "爱尔兰", "爱沙尼亚", "奥地利", "比利时", "波兰", "丹麦", "芬兰", "克罗地亚", "拉脱维亚", "立陶宛", "卢森堡", "罗马尼亚", "塞浦路斯", "斯洛伐克", "斯洛文尼亚", "匈牙利"],
	codeprov1110000city1110100: [1110101, 1110102, 1110103, 1110104, 1110105, 1110106, 1110107, 1110108, 1110109, 1110110, 1110111, 1110112, 1110113, 1110114, 1110115, 1110116, 1110117, 1110118, 1110119, 1110120, 1110121, 1110122, 1110123, 1110124, 1110125, 1110126, 1110127, 1110128, 1110129],
	prov1130000: ["Latvia"],
	codeprov1040000city1040100: [1040101, 1040102, 1040103, 1040104, 1040105, 1040106, 1040107, 1040108, 1040109, 1040110, 1040111, 1040112, 1040113, 1040114, 1040115, 1040116, 1040117, 1040118, 1040119, 1040120, 1040121, 1040122, 1040123, 1040124, 1040125, 1040126, 1040127, 1040128, 1040129, 1040130, 1040131, 1040132, 1040133, 1040134, 1040135, 1040136, 1040137, 1040138, 1040139, 1040140, 1040141, 1040142, 1040143, 1040144, 1040145, 1040146, 1040147],
	codeprov1240000city1240700: [1240701, 1240702, 1240703, 1240704, 1240705, 1240706, 1240707, 1240708, 1240709, 1240710, 1240711, 1240712, 1240713, 1240714, 1240715, 1240716, 1240717, 1240718, 1240719, 1240720, 1240721, 1240722, 1240723],
	codeprov1070000city1070100: [1070101, 1070102, 1070103, 1070104, 1070105, 1070106, 1070107, 1070108, 1070109, 1070110, 1070111],
	codeprov1160000city1160100: [1160101, 1160102, 1160103, 1160104, 1160105, 1160106, 1160107, 1160108, 1160109, 1160110, 1160111, 1160112, 1160113, 1160114, 1160115, 1160116, 1160117, 1160118, 1160119, 1160120],
	code1260000: [1260100],
	prov1180000: ["Slovakia"],
	prov1250000city1250400: ["Bangor", "Cardiff", "Newport", "Swansea"],
	code1230000: [1230100],
	code1190000: [1190100],
	prov1240000city1240300: ["Buan County", "Gimje", "Gochang County", "Gunsan", "Iksan", "Imsil County", "Jangsu County", "Jeongeup", "Jeonju", "Jinan County", "Muju County", "Namwon", "Sunchang County", "Wanju County"],
	prov1240000city1240400: ["Boeun County", "Cheongju", "Cheongwon County", "Chungju", "Danyang County", "Eumseong County", "Goesan County", "Jecheon", "Jeungpyeong County", "Jincheon County", "Okcheon County", "Yeongdong County"],
	prov1000000city1000100: ["Akmenes", "Alytus", "Kaunas", "Klaipeda", "Marijampole", "Panevezys", "Siauliai", "Taurages", "Telsiu", "Utenos", "Vilnius"],
	code1130000: [1130100],
	prov1220000city1220100: ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Ustergotland", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
	prov1150000city1150100: ["Biała Podlaska", "Białystok", "Bydgoszcz", "Bytom", "Chełm", "Chorzow", "Ciechanow", "Dabrowa Gornicza", "Elbląg", "Gdansk", "Gdynia", "Gliwice", "Gorzow Wlkp", "Grudziadz", "Jaworzno", "Jelenia Gora", "Kalisz", "Katowice", "Kielce", "Konin", "Koszalin", "Krakow", "Krosno", "Legnica", "Leszno", "Lodz", "Lomza", "Lublin", "Mysłowice", "Nowy Sacz", "Olsztyn", "Opole", "Ostrołeka", "Piła", "Piotrkow", "Plock", "Poznan", "Przemysl", "Radom", "Ruda Sl", "Rzeszow", "Siedlce", "Siemianowice Sl", "Sieradz", "Skierniewice", "Slupsk", "Sopot", "Sosnowiec", "Suwałki", "Swietochłowice", "Swinoujscie", "Szczecin", "Tarnobrzeg", "Tarnow", "Torun", "Tychy", "Walbrzych", "Warszawa", "Wlocławek", "Wroclaw", "Zabrze", "Zamosc", "Zielona Gora"],
	prov1240000city1240900: ["Ansan", "Anseong", "Anyang", "Bucheon", "Dongducheon", "Gapyeong County", "Gimpo", "Goyang", "Gunpo", "Guri", "Gwacheon", "Gwangju", "Gwangmyeong", "Hanam", "Hwaseong", "Icheon", "Namyangju", "Osan", "Paju", "Pocheon", "Pyeongtaek", "Seongnam", "Siheung", "Suwon", "Uijeongbu", "Uiwang", "Yangju", "Yangpyeong County", "Yeoju County", "Yeoncheon County", "Yongin"],
	codeprov1140000city1140100: [1140101, 1140102, 1140103, 1140104, 1140105, 1140106, 1140107, 1140108, 1140109, 1140110, 1140111, 1140112, 1140113, 1140114, 1140115, 1140116, 1140117, 1140118, 1140119, 1140120],
	codeprov1130000city1130100: [1130101, 1130102, 1130103, 1130104, 1130105, 1130106, 1130107, 1130108, 1130109, 1130110, 1130111, 1130112, 1130113, 1130114, 1130115, 1130116, 1130117, 1130118, 1130119, 1130120, 1130121, 1130122, 1130123, 1130124, 1130125, 1130126],
	prov1210000city1210100: ["Diekirch", "Grevenmacher", "Luxembourg"],
	prov1240000city1240600: ["Daegu", "Dalseong-gun", "Suseong-gu"],
	prov1030000city1030100: ["Aargau", "Appenzell Ausserrhon", "Appenzell Innerrhodn", "Basel Landschaft", "Basel－Sstadt", "Bern", "Freiburg", "Geneve", "Glarus", "Graubünden", "Jura", "Lausanne", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Schaffhausen", "Schwyz", "Solothurn", "St.Gallen", "Thurgau", "Ticino", "Uri", "Vaud", "Wallis", "Zug", "Zurich"],
	code1270000: [1270100],
	prov1240000city1240500: ["Cheorwon County", "Chuncheon", "Donghae", "Gangneung", "Goseong County", "Hoengseong County", "Hongcheon County", "Hwacheon County", "Inje County", "Jeongseon County", "Pyeongchang County", "Samcheok", "Sokcho", "Taebaek", "Wonju", "Yanggu County", "Yangyang County", "Yeongwol County"],
	codeprov1170000city1170100: [1170101, 1170102, 1170103, 1170104, 1170105, 1170106, 1170107, 1170108, 1170109, 1170110, 1170111, 1170112, 1170113, 1170114, 1170115, 1170116, 1170117, 1170118, 1170119, 1170120, 1170121, 1170122, 1170123],
	prov1240000city1240200: ["Asan", "Boryeong", "Buyeo County", "Cheonan", "Cheongyang County", "Dangjin County", "Geumsan County", "Gongju", "Gyeryong", "Hongseong County", "Nonsan", "Seocheon County", "Seosan", "Taean County", "Yeongi County", "Yesan County"],
	codeprov1250000city1250400: [1250401, 1250402, 1250403, 1250404],
	prov1250000city1250300: ["Bath", "Birmingham", "Bradford", "Brighton & Hove", "Bristol", "Cambridge", "Canterbury", "Carlisle", "Chester", "Chichester", "Coventry", "Derby", "Durham", "Ely", "Exeter", "Gloucester", "Hereford", "Kingston upon Hull", "Lancaster", "Leeds", "Leicester", "Lichfield", "Lincoln", "Liverpool", "London", "Manchester", "Newcastle", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", "Portsmouth", "Preston", "Ripon", "Saint Albans", "Salford", "Salisbury", "Sheffield", "Southampton", "Stoke-on-Trent", "Sunderland", "Truro", "Wakefield", "Wells", "Winchester", "Wolverhampton", "Worcester", "York"],
	codeprov1240000city1240200: [1240201, 1240202, 1240203, 1240204, 1240205, 1240206, 1240207, 1240208, 1240209, 1240210, 1240211, 1240212, 1240213, 1240214, 1240215, 1240216],
	prov1020000city1020100: ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Grad Zagreb", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozega-Slavonia", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagrebacka"],
	code1240000: [1240100, 1240200, 1240300, 1240400, 1240500, 1240600, 1240700, 1240800, 1240900],
	prov1250000city1250200: ["Belfast", "Derry", "Lisburn", "Newry"],
	prov1250000: ["Scotland", "Northern Ireland", "England", "Wales"],
	prov1010000city1010100: ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Pafos"],
	code1040000: [1040100],
	prov1160000: ["Finland"],
	code1140000: [1140100],
	prov1080000city1080100: ["Athens", "Chanion", "Cyclades", "Dodecanese", "Irakleiou", "Lasithiou", "Lesbos", "Peiraievs", "Rethymnis", "Samos"],
	prov1190000: ["Austria"],
	codeprov1010000city1010100: [1010101, 1010102, 1010103, 1010104, 1010105, 1010106],
	code1160000: [1160100],
	codeprov1250000city1250200: [1250201, 1250202, 1250203, 1250204],
	prov1190000city1190100: ["Burgenland", "Carinthia", "Lower Austria", "Salzburg", "Styria", "Tyrol", "Upper Austria", "Vienna", "Vorarlberg"],
	code1220000: [1220100],
	code1120000: [1120100],
	prov1170000: ["France"],
	countryMap: {
	  1000000: ["Lithuania", "370", "立陶宛"],
	  1010000: ["Cyprus", "357", "塞浦路斯"],
	  1020000: ["Croatia", "385", "克罗地亚"],
	  1030000: ["Switzerland", "41", "瑞士"],
	  1040000: ["Japan", "81", "日本"],
	  1050000: ["Ireland", "353", "爱尔兰"],
	  1060000: ["Romania", "40", "罗马尼亚"],
	  1070000: ["Belgium", "32", "比利时"],
	  1080000: ["Greece", "30", "希腊"],
	  1090000: ["Slovenia", "386", "斯洛文尼亚"],
	  1100000: ["Spain", "34", "西班牙"],
	  1110000: ["Portugal", "351", "葡萄牙"],
	  1120000: ["Italy", "39", "意大利"],
	  1130000: ["Latvia", "371", "拉脱维亚"],
	  1140000: ["Hungary", "36", "匈牙利"],
	  1150000: ["Poland", "48", "波兰"],
	  1160000: ["Finland", "358", "芬兰"],
	  1170000: ["France", "33", "法国"],
	  1180000: ["Slovakia", "421", "斯洛伐克"],
	  1190000: ["Austria", "43", "奥地利"],
	  1200000: ["Germany", "49", "德国"],
	  1210000: ["Luxembourg", "352", "卢森堡"],
	  1220000: ["Sweden", "46", "瑞典"],
	  1230000: ["Denmark", "45", "丹麦"],
	  1240000: ["Korea", "82", "韩国"],
	  1250000: ["United Kingdom", "44", "英国"],
	  1260000: ["Estonia", "372", "爱沙尼亚"],
	  1270000: ["Netherlands", "31", "荷兰"]
	}
  };
  e.exports = o
}, function (e, t, o) {
  function i(e) {
	return !!e || 0 === e
  }

  var r = o(92), n = o(30), c = o(96), a = o(98), s = o(99), p = o(100), d = o(101), l = o(102), u = React.createClass({
	displayName: "AreaPickerPanel", canConfirm: function () {
	  var e = this.getDistrictList();
	  return i(this.state.provinceId) && i(this.state.cityId) && (i(this.state.districtId) || 0 === e.length)
	}, getProvinceList: function () {
	  return r.getProvince(this.props.isIncludeOverseas)
	}, getCityList: function () {
	  return r.getCity({provinceId: this.state.provinceId})
	}, getDistrictList: function (e) {
	  return r.getDistrict({provinceId: this.state.provinceId, cityId: e || this.state.cityId})
	}, getProvinceName: function () {
	  return r.getProvinceName({provinceId: this.state.provinceId, isIncludeOverseas: this.props.isIncludeOverseas})
	}, getCityName: function () {
	  return r.getCityName({provinceId: this.state.provinceId, cityId: this.state.cityId})
	}, getDistrictName: function () {
	  return r.getDistrictName({
		provinceId: this.state.provinceId,
		cityId: this.state.cityId,
		districtId: this.state.districtId
	  })
	}, getDefaultProps: function () {
	  return {isOpen: !1}
	}, getIsSelectedOverseas: function () {
	  return r.isOverseas(this.state.provinceId)
	}, getInitialState: function () {
	  var e = 0;
	  return i(this.props.provinceId) && (e = r.isMunicipality({provinceId: this.provinceId}) ? 1 : 2), {
		provinceId: this.props.provinceId,
		cityId: this.props.cityId,
		districtId: this.props.districtId,
		activeIndex: e
	  }
	}, handleClickConfirm: function () {
	  this.canConfirm() && this.props.onConfirm({
		provinceId: this.state.provinceId,
		cityId: this.state.cityId,
		districtId: this.state.districtId
	  })
	}, handleClickProvince: function (e) {
	  var t = null;
	  r.isMunicipality({provinceId: e.id}) && (t = r.getCity({provinceId: e.id})[0].id), this.setState({
		provinceId: e.id,
		cityId: t,
		districtId: null,
		activeIndex: 1
	  })
	}, handleClickCity: function (e) {
	  var t = this.getDistrictList(e.id), o = {cityId: e.id, districtId: null};
	  t.length > 0 && (o.activeIndex = 2), this.setState(o)
	}, handleClickTab: function (e, t) {
	  t.preventDefault(), this.setState({activeIndex: e})
	}, handleClickDistrict: function (e) {
	  this.setState({districtId: e.id})
	}, handleSlideChangeEnd: function (e) {
	  this.setState({activeIndex: e.activeIndex})
	}, handleTouchMoveAreaPicker: function (e) {
	  e.preventDefault()
	}, render: function () {
	  var e, t, o, r = [], d = [], u = [], v = [], y = [];
	  return r = this.getProvinceList(), i(this.state.provinceId) && (d = this.getCityList()), i(this.state.cityId) && (u = this.getDistrictList()), e = this.getProvinceName(), t = this.getCityName(), o = this.getDistrictName(), v.push({
		txt: i(this.state.provinceId) ? e : "请选择",
		disabled: !1
	  }), 1 !== d.length && i(this.state.provinceId) && v.push({
		txt: i(this.state.cityId) ? t : this.getIsSelectedOverseas() ? "请选择" : "城市",
		disabled: 0 === d.length
	  }), (u.length > 0 || !this.state.cityId) && i(this.state.provinceId) && v.push({
		txt: i(this.state.districtId) ? o : this.getIsSelectedOverseas() ? "请选择" : "区县",
		disabled: 0 === u.length
	  }), y.push({
		data: r,
		onClick: this.handleClickProvince,
		active: this.state.provinceId,
		key: "province"
	  }), d.length > 1 && y.push({
		data: d,
		onClick: this.handleClickCity,
		active: this.state.cityId,
		key: "city"
	  }), u.length > 0 && y.push({
		data: u,
		onClick: this.handleClickDistrict,
		active: this.state.districtId,
		key: "district"
	  }), React.createElement("div", {
		className: "m-areaPicker",
		onTouchMove: this.handleTouchMoveAreaPicker
	  }, React.createElement("header", {className: "hd"}, React.createElement(s, {
		className: "tabSet",
		activeIndex: this.state.activeIndex
	  }, v.map(function (e, t) {
		return React.createElement(p, {
		  key: t,
		  className: n("item tab", {disabled: e.disabled}),
		  onClick: !e.disabled && this.handleClickTab.bind(null, t)
		}, e.txt)
	  }.bind(this))), React.createElement("a", {
		className: n("confirm", {disabled: !this.canConfirm()}),
		onClick: this.handleClickConfirm
	  }, "确定")), React.createElement(c, {
		className: "bd",
		activeIndex: this.state.activeIndex,
		options: {onSlideChangeEnd: this.handleSlideChangeEnd, followFinger: !1}
	  }, y.map(function (e, t) {
		return React.createElement(a, {className: "panel", key: e.key}, React.createElement(l, {panel: e}))
	  }.bind(this))))
	}
  }), v = React.createClass({
	displayName: "AreaPicker", render: function () {
	  return React.createElement(d, {
		isOpen: this.props.isOpen,
		withMask: !0,
		onClickMask: this.props.onClose
	  }, React.createElement(u, this.props))
	}
  });
  e.exports = v
}, function (e, t, o) {
  var i = o(97), r = o(71), n = o(98), c = i.createClass({
	displayName: "Swiper", swiper: null, slidesCount: 0, getSlideChildren: function () {
	  return this.props.children.filter(function (e) {
		return e.type === n
	  })
	}, initSwiper: function () {
	  this.swiper = new r(this.refs.swiper, $.extend(!0, {initialSlide: this.props.activeIndex}, this.props.options))
	}, getDefaultProps: function () {
	  return {className: "", options: {}}
	}, componentDidMount: function () {
	  this.initSwiper(), this.slidesCount = this.getSlideChildren().length
	}, componentWillUnmount: function () {
	  this.swiper.destroy(!0, !0)
	}, componentDidUpdate: function () {
	  this.slidesCount !== this.getSlideChildren().length && (this.swiper.update(), this.slidesCount = this.getSlideChildren().length), this.props.activeIndex !== this.swiper.activeIndex && setTimeout(function () {
		this.swiper.slideTo(this.props.activeIndex)
	  }.bind(this), 0)
	}, render: function () {
	  return i.createElement("div", {
		className: "swiper-container " + this.props.className,
		ref: "swiper"
	  }, i.createElement("div", {className: "swiper-wrapper"}, this.props.children))
	}
  });
  e.exports = c
}, function (e, t) {
  e.exports = React
}, function (e, t, o) {
  var i = o(97), r = i.createClass({
	displayName: "Slide", getDefaultProps: function () {
	  return {className: ""}
	}, render: function () {
	  return i.createElement("div", {className: "swiper-slide " + this.props.className}, this.props.children)
	}
  });
  e.exports = r
}, function (e, t, o) {
  var i = o(97), r = i.createClass({
	displayName: "TabSet", updateInkStyle: function () {
	  var e = 0, t = 0, o = this.refs.tabSet.children[0], i = this.refs.tabSet.children[this.props.activeIndex];
	  e = i.getBoundingClientRect().left - o.getBoundingClientRect().left, t = i.offsetWidth, this.refs.ink.style.left = e, this.refs.ink.style.width = t
	}, getDefaultProps: function () {
	  return {className: ""}
	}, componentDidMount: function () {
	  this.updateInkStyle()
	}, componentDidUpdate: function () {
	  this.updateInkStyle()
	}, render: function () {
	  return i.createElement("div", {
		className: "m-tabSet " + this.props.className,
		ref: "tabSet"
	  }, this.props.children, i.createElement("div", {className: "ink", ref: "ink"}))
	}
  });
  e.exports = r
}, function (e, t, o) {
  var i = o(97), r = i.createClass({
	displayName: "Tab", getDefaultProps: function () {
	  return {className: ""}
	}, render: function () {
	  return i.createElement("div", {
		className: "tab " + this.props.className,
		onClick: this.props.onClick
	  }, this.props.children)
	}
  });
  e.exports = r
}, function (e, t, o) {
  var i = o(77), r = i.spring, n = o(30), c = i.TransitionMotion, a = {stiffness: 400}, s = React.createClass({
	displayName: "Sliding", componentWillReceiveProps: function (e) {
	  this.props.isOpen != e && (e.isOpen ? this.stopBgScrolling() : this.cancelStopBgScrolling())
	}, componentWillUnmount: function () {
	  this.cancelStopBgScrolling()
	}, handleClickMask: function () {
	  this.props.onClickMask && this.props.onClickMask()
	}, renderAnimateFunc: function (e) {
	  var t, o;
	  return 0 === e.length ? null : (t = e[0].style, o = "translate3d(0, {0}, 0)".format(100 * -t.x + "%"), React.createElement("div", {className: "m-sliding"}, this.props.withMask && React.createElement("div", {
		className: n("m-mask", {"f-hide": 0 === t.x}),
		style: {opacity: t.x},
		onClick: this.handleClickMask
	  }), React.createElement("div", {
		style: {
		  WebkitTransform: o,
		  transform: o,
		  opacity: t.x,
		  position: "fixed",
		  top: "100%",
		  left: 0,
		  zIndex: 6,
		  width: "100%"
		}
	  }, this.props.children)))
	}, render: function () {
	  return React.createElement(c, {
		styles: this.getStyles,
		willEnter: this.willEnter,
		willLeave: this.willLeave
	  }, this.renderAnimateFunc)
	}, stopBgScrolling: function () {
	  window.addEventListener("touchmove", this.preventScroll)
	}, cancelStopBgScrolling: function () {
	  window.removeEventListener("touchmove", this.preventScroll)
	}, preventScroll: function (e) {
	  e.preventDefault()
	}, getStyles: function () {
	  return this.props.isOpen ? [{key: 0, style: {x: r(1)}}] : []
	}, willEnter: function () {
	  return {x: 0}
	}, willLeave: function () {
	  return {x: r(0, a)}
	}
  });
  e.exports = s
}, function (e, t, o) {
  var i = o(30), r = o(103), n = o(104), c = React.createClass({
	displayName: "Panel", componentDidMount: function () {
	  this.refs.active && this.anchorToActive()
	}, anchorToActive: function () {
	  setTimeout(function () {
		this.refs.iScroll.getIScroll().scrollToElement(this.refs.active, 0)
	  }.bind(this), 0)
	}, render: function () {
	  var e = this.props.panel;
	  return React.createElement(n, {
		ref: "iScroll",
		iScroll: r,
		options: {click: !0, preventDefault: !1}
	  }, React.createElement("ul", {className: "list"}, e.data.map(function (t) {
		var o = t.id == e.active;
		return React.createElement("li", {
		  ref: o ? "active" : "",
		  key: t.id,
		  className: i("item", {active: o}),
		  onClick: e.onClick.bind(null, t)
		}, t.zonename)
	  }.bind(this))))
	}
  });
  e.exports = c
}, function (e, t, o) {
  e.exports = o(22)(12)
}, function (e, t, o) {
  e.exports = o(22)(8)
}, function (e, t, o) {
  var i = o(30), r = React.createClass({
	displayName: "Checkbox", getDefaultProps: function () {
	  return {
		checked: !1, disabled: !1, className: "", onToggle: function () {
		}
	  }
	}, handleClick: function () {
	  this.props.disabled || this.props.onToggle()
	}, render: function () {
	  return React.createElement("i", {
		className: i("m-checkbox " + this.props.className, {
		  "m-checkbox-1": "square" === this.props.shape,
		  disabled: this.props.disabled,
		  checked: this.props.checked,
		  small: "s" === this.props.size
		}), onClick: this.handleClick
	  })
	}
  });
  e.exports = r
}, function (e, t, o) {
  var i = o(15), r = o(107), n = o(30), c = o(82), a = o(108), s = o(24), p = React.createClass({
	displayName: "AddressList", getInitialState: function () {
	  return {hasMore: !0}
	}, tapCreateAddress: function () {
	  return 10 == this.props.listData.length ? void i.notify("地址数量不能超过10个", "success") : void this.props.tapCreateAddress()
	}, componentWillReceiveProps: function (e) {
	  0 == e.listData.length ? this.setState({hasMore: !1}) : this.setState({hasMore: !0})
	}, tapAddress: function (e) {
	  this.props.tapAddress(e)
	}, render: function () {
	  var e, t = this.props.display;
	  return e = this.state.hasMore || this.props.listData.length > 0 ? React.createElement("div", {className: "con"}, React.createElement("div", {className: "u-icon u-address-bg"}), React.createElement("ul", {className: "list"}, this.props.listData.map(function (e) {
		return React.createElement("li", {
		  className: n({active: e.id == this.props.currentAddressId}),
		  key: e.id,
		  onClick: this.tapAddress.bind(this, e)
		}, React.createElement(r, {address: e, tapIcon: this.props.tapAddressIcon, icon: this.props.addressIcon}))
	  }.bind(this)))) : React.createElement(c, {
		className: "noAddress",
		txt: "收货地址在哪里"
	  }), React.createElement(s, {
		noFt: !0,
		noHd: !!this.props.noHd
	  }, React.createElement("div", {
		className: "m-address-list",
		style: {display: t}
	  }, e, React.createElement(a, {onTap: this.props.tapCreateAddress}, " ＋ 新建地址")))
	}
  });
  e.exports = p
}, function (e, t) {
  var o = React.createClass({
	displayName: "AddressItem", tapIcon: function (e) {
	  e.stopPropagation(), this.props.tapIcon && this.props.tapIcon(this.props.address)
	}, clickIcon: function (e) {
	  e.stopPropagation()
	}, render: function () {
	  var e = this.props.address;
	  return React.createElement("div", {
		className: "m-address-item " + (this.props.className || ""),
		ref: "address"
	  }, React.createElement("div", {className: "left"}, React.createElement("p", {className: "uname"}, e.name), e.dft ? React.createElement("span", {className: "default"}, "默认") : ""), React.createElement("div", {className: "middle"}, React.createElement("div", {className: "md-con"}, React.createElement("p", {className: "uip"}, e.mobile), React.createElement("p", {className: "uinfo"}, e.fullAddress))), React.createElement("i", {
		className: "u-icon u-address-" + this.props.icon,
		onClick: this.tapIcon
	  }))
	}
  });
  e.exports = o
}, function (e, t, o) {
  var i = o(30), r = React.createClass({
	displayName: "BottomBlockBtn", getDefaultProps: function () {
	  return {isDisabled: !1}
	}, handleClick: function (e) {
	  e.preventDefault(), this.props.isDisabled || (this.props.onClick && this.props.onClick(), this.props.onTap && this.props.onTap())
	}, render: function () {
	  return React.createElement("button", {
		className: i("w-bottomBlockBtn w-button w-button-xxl w-button-block w-button-noRadius", {"w-button-disabled": this.props.isDisabled}),
		onClick: this.handleClick
	  }, this.props.children)
	}
  });
  e.exports = r
}]);