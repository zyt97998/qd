webpackJsonp([0], {
	"+E39": function(e, t, n) { e.exports = !n("S82l")(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) },
	"+ZMJ": function(e, t, n) { var r = n("lOnJ");
		e.exports = function(e, t, n) { if(r(e), void 0 === t) return e; switch(n) {
				case 1:
					return function(n) { return e.call(t, n) };
				case 2:
					return function(n, r) { return e.call(t, n, r) };
				case 3:
					return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } } },
	"+tPU": function(e, t, n) { n("xGkn"); for(var r = n("7KvD"), i = n("hJx8"), o = n("/bQp"), a = n("dSzd")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) { var c = s[l],
				u = r[c],
				p = u && u.prototype;
			p && !p[a] && i(p, a, c), o[c] = o.Array } },
	"/bQp": function(e, t) { e.exports = {} },
	"/n6Q": function(e, t, n) { n("zQR9"), n("+tPU"), e.exports = n("Kh4W").f("iterator") },
	"/ocq": function(e, t, n) { "use strict";

		function r(e, t) {}

		function i(e) { return Object.prototype.toString.call(e).indexOf("Error") > -1 }

		function o(e, t) { switch(typeof t) {
				case "undefined":
					return;
				case "object":
					return t;
				case "function":
					return t(e);
				case "boolean":
					return t ? e.params : void 0 } }

		function a(e, t) { for(var n in t) e[n] = t[n]; return e }

		function s(e, t, n) { void 0 === t && (t = {}); var r, i = n || l; try { r = i(e || "") } catch(e) { r = {} } for(var o in t) r[o] = t[o]; return r }

		function l(e) { var t = {}; return(e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) { var n = e.replace(/\+/g, " ").split("="),
					r = Be(n.shift()),
					i = n.length > 0 ? Be(n.join("=")) : null;
				void 0 === t[r] ? t[r] = i : Array.isArray(t[r]) ? t[r].push(i) : t[r] = [t[r], i] }), t) : t }

		function c(e) { var t = e ? Object.keys(e).map(function(t) { var n = e[t]; if(void 0 === n) return ""; if(null === n) return ze(t); if(Array.isArray(n)) { var r = []; return n.forEach(function(e) { void 0 !== e && (null === e ? r.push(ze(t)) : r.push(ze(t) + "=" + ze(e))) }), r.join("&") } return ze(t) + "=" + ze(n) }).filter(function(e) { return e.length > 0 }).join("&") : null; return t ? "?" + t : "" }

		function u(e, t, n, r) { var i = r && r.options.stringifyQuery,
				o = t.query || {}; try { o = p(o) } catch(e) {} var a = { name: t.name || e && e.name, meta: e && e.meta || {}, path: t.path || "/", hash: t.hash || "", query: o, params: t.params || {}, fullPath: h(t, i), matched: e ? d(e) : [] }; return n && (a.redirectedFrom = h(n, i)), Object.freeze(a) }

		function p(e) { if(Array.isArray(e)) return e.map(p); if(e && "object" == typeof e) { var t = {}; for(var n in e) t[n] = p(e[n]); return t } return e }

		function d(e) { for(var t = []; e;) t.unshift(e), e = e.parent; return t }

		function h(e, t) { var n = e.path,
				r = e.query;
			void 0 === r && (r = {}); var i = e.hash;
			void 0 === i && (i = ""); var o = t || c; return(n || "/") + o(r) + i }

		function f(e, t) { return t === He ? e === t : !!t && (e.path && t.path ? e.path.replace(Fe, "") === t.path.replace(Fe, "") && e.hash === t.hash && v(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && v(e.query, t.query) && v(e.params, t.params))) }

		function v(e, t) { if(void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t) return e === t; var n = Object.keys(e),
				r = Object.keys(t); return n.length === r.length && n.every(function(n) { var r = e[n],
					i = t[n]; return "object" == typeof r && "object" == typeof i ? v(r, i) : String(r) === String(i) }) }

		function m(e, t) { return 0 === e.path.replace(Fe, "/").indexOf(t.path.replace(Fe, "/")) && (!t.hash || e.hash === t.hash) && g(e.query, t.query) }

		function g(e, t) { for(var n in t)
				if(!(n in e)) return !1; return !0 }

		function y(e) { if(!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) { if(e.currentTarget && e.currentTarget.getAttribute) { if(/\b_blank\b/i.test(e.currentTarget.getAttribute("target"))) return } return e.preventDefault && e.preventDefault(), !0 } }

		function b(e) { if(e)
				for(var t, n = 0; n < e.length; n++) { if(t = e[n], "a" === t.tag) return t; if(t.children && (t = b(t.children))) return t } }

		function _(e) { if(!_.installed || Ie !== e) { _.installed = !0, Ie = e; var t = function(e) { return void 0 !== e },
					n = function(e, n) { var r = e.$options._parentVnode;
						t(r) && t(r = r.data) && t(r = r.registerRouteInstance) && r(e, n) };
				e.mixin({ beforeCreate: function() { t(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, n(this, this) }, destroyed: function() { n(this) } }), Object.defineProperty(e.prototype, "$router", { get: function() { return this._routerRoot._router } }), Object.defineProperty(e.prototype, "$route", { get: function() { return this._routerRoot._route } }), e.component("router-view", $e), e.component("router-link", We); var r = e.config.optionMergeStrategies;
				r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created } }

		function w(e, t, n) { var r = e.charAt(0); if("/" === r) return e; if("?" === r || "#" === r) return t + e; var i = t.split("/");
			n && i[i.length - 1] || i.pop(); for(var o = e.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) { var s = o[a]; ".." === s ? i.pop() : "." !== s && i.push(s) } return "" !== i[0] && i.unshift(""), i.join("/") }

		function T(e) { var t = "",
				n = "",
				r = e.indexOf("#");
			r >= 0 && (t = e.slice(r), e = e.slice(0, r)); var i = e.indexOf("?"); return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { path: e, query: n, hash: t } }

		function C(e) { return e.replace(/\/\//g, "/") }

		function E(e, t) { for(var n, r = [], i = 0, o = 0, a = "", s = t && t.delimiter || "/"; null != (n = Ze.exec(e));) { var l = n[0],
					c = n[1],
					u = n.index; if(a += e.slice(o, u), o = u + l.length, c) a += c[1];
				else { var p = e[o],
						d = n[2],
						h = n[3],
						f = n[4],
						v = n[5],
						m = n[6],
						g = n[7];
					a && (r.push(a), a = ""); var y = null != d && null != p && p !== d,
						b = "+" === m || "*" === m,
						_ = "?" === m || "*" === m,
						w = n[2] || s,
						T = f || v;
					r.push({ name: h || i++, prefix: d || "", delimiter: w, optional: _, repeat: b, partial: y, asterisk: !!g, pattern: T ? A(T) : g ? ".*" : "[^" + M(w) + "]+?" }) } } return o < e.length && (a += e.substr(o)), a && r.push(a), r }

		function x(e, t) { return O(E(e, t)) }

		function S(e) { return encodeURI(e).replace(/[\/?#]/g, function(e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) }

		function k(e) { return encodeURI(e).replace(/[?#]/g, function(e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) }

		function O(e) { for(var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function(n, r) { for(var i = "", o = n || {}, a = r || {}, s = a.pretty ? S : encodeURIComponent, l = 0; l < e.length; l++) { var c = e[l]; if("string" != typeof c) { var u, p = o[c.name]; if(null == p) { if(c.optional) { c.partial && (i += c.prefix); continue } throw new TypeError('Expected "' + c.name + '" to be defined') } if(Xe(p)) { if(!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(p) + "`"); if(0 === p.length) { if(c.optional) continue; throw new TypeError('Expected "' + c.name + '" to not be empty') } for(var d = 0; d < p.length; d++) { if(u = s(p[d]), !t[l].test(u)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(u) + "`");
								i += (0 === d ? c.prefix : c.delimiter) + u } } else { if(u = c.asterisk ? k(p) : s(p), !t[l].test(u)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + u + '"');
							i += c.prefix + u } } else i += c } return i } }

		function M(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") }

		function A(e) { return e.replace(/([=!:$\/()])/g, "\\$1") }

		function P(e, t) { return e.keys = t, e }

		function j(e) { return e.sensitive ? "" : "i" }

		function L(e, t) { var n = e.source.match(/\((?!\?)/g); if(n)
				for(var r = 0; r < n.length; r++) t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return P(e, t) }

		function I(e, t, n) { for(var r = [], i = 0; i < e.length; i++) r.push(N(e[i], t, n).source); return P(new RegExp("(?:" + r.join("|") + ")", j(n)), t) }

		function $(e, t, n) { return D(E(e, n), t, n) }

		function D(e, t, n) { Xe(t) || (n = t || n, t = []), n = n || {}; for(var r = n.strict, i = !1 !== n.end, o = "", a = 0; a < e.length; a++) { var s = e[a]; if("string" == typeof s) o += M(s);
				else { var l = M(s.prefix),
						c = "(?:" + s.pattern + ")";
					t.push(s), s.repeat && (c += "(?:" + l + c + ")*"), c = s.optional ? s.partial ? l + "(" + c + ")?" : "(?:" + l + "(" + c + "))?" : l + "(" + c + ")", o += c } } var u = M(n.delimiter || "/"),
				p = o.slice(-u.length) === u; return r || (o = (p ? o.slice(0, -u.length) : o) + "(?:" + u + "(?=$))?"), o += i ? "$" : r && p ? "" : "(?=" + u + "|$)", P(new RegExp("^" + o, j(n)), t) }

		function N(e, t, n) { return Xe(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? L(e, t) : Xe(e) ? I(e, t, n) : $(e, t, n) }

		function R(e, t, n) { try { return(et[e] || (et[e] = qe.compile(e)))(t || {}, { pretty: !0 }) } catch(e) { return "" } }

		function z(e, t, n, r) { var i = t || [],
				o = n || Object.create(null),
				a = r || Object.create(null);
			e.forEach(function(e) { B(i, o, a, e) }); for(var s = 0, l = i.length; s < l; s++) "*" === i[s] && (i.push(i.splice(s, 1)[0]), l--, s--); return { pathList: i, pathMap: o, nameMap: a } }

		function B(e, t, n, r, i, o) { var a = r.path,
				s = r.name,
				l = r.pathToRegexpOptions || {},
				c = H(a, i, l.strict); "boolean" == typeof r.caseSensitive && (l.sensitive = r.caseSensitive); var u = { path: c, regex: F(c, l), components: r.components || { default: r.component }, instances: {}, name: s, parent: i, matchAs: o, redirect: r.redirect, beforeEnter: r.beforeEnter, meta: r.meta || {}, props: null == r.props ? {} : r.components ? r.props : { default: r.props } }; if(r.children && r.children.forEach(function(r) { var i = o ? C(o + "/" + r.path) : void 0;
					B(e, t, n, r, u, i) }), void 0 !== r.alias) {
				(Array.isArray(r.alias) ? r.alias : [r.alias]).forEach(function(o) { var a = { path: o, children: r.children };
					B(e, t, n, a, i, u.path || "/") }) } t[u.path] || (e.push(u.path), t[u.path] = u), s && (n[s] || (n[s] = u)) }

		function F(e, t) { var n = qe(e, [], t); return n }

		function H(e, t, n) { return n || (e = e.replace(/\/$/, "")), "/" === e[0] ? e : null == t ? e : C(t.path + "/" + e) }

		function V(e, t, n, r) { var i = "string" == typeof e ? { path: e } : e; if(i.name || i._normalized) return i; if(!i.path && i.params && t) { i = G({}, i), i._normalized = !0; var o = G(G({}, t.params), i.params); if(t.name) i.name = t.name, i.params = o;
				else if(t.matched.length) { var a = t.matched[t.matched.length - 1].path;
					i.path = R(a, o, "path " + t.path) } return i } var l = T(i.path || ""),
				c = t && t.path || "/",
				u = l.path ? w(l.path, c, n || i.append) : c,
				p = s(l.query, i.query, r && r.options.parseQuery),
				d = i.hash || l.hash; return d && "#" !== d.charAt(0) && (d = "#" + d), { _normalized: !0, path: u, query: p, hash: d } }

		function G(e, t) { for(var n in t) e[n] = t[n]; return e }

		function W(e, t) {
			function n(e) { z(e, l, c, p) }

			function r(e, n, r) { var i = V(e, n, !1, t),
					o = i.name; if(o) { var s = p[o]; if(!s) return a(null, i); var u = s.regex.keys.filter(function(e) { return !e.optional }).map(function(e) { return e.name }); if("object" != typeof i.params && (i.params = {}), n && "object" == typeof n.params)
						for(var d in n.params) !(d in i.params) && u.indexOf(d) > -1 && (i.params[d] = n.params[d]); if(s) return i.path = R(s.path, i.params, 'named route "' + o + '"'), a(s, i, r) } else if(i.path) { i.params = {}; for(var h = 0; h < l.length; h++) { var f = l[h],
							v = c[f]; if(U(v.regex, i.path, i.params)) return a(v, i, r) } } return a(null, i) }

			function i(e, n) { var i = e.redirect,
					o = "function" == typeof i ? i(u(e, n, null, t)) : i; if("string" == typeof o && (o = { path: o }), !o || "object" != typeof o) return a(null, n); var s = o,
					l = s.name,
					c = s.path,
					d = n.query,
					h = n.hash,
					f = n.params; if(d = s.hasOwnProperty("query") ? s.query : d, h = s.hasOwnProperty("hash") ? s.hash : h, f = s.hasOwnProperty("params") ? s.params : f, l) { p[l]; return r({ _normalized: !0, name: l, query: d, hash: h, params: f }, void 0, n) } if(c) { var v = X(c, e); return r({ _normalized: !0, path: R(v, f, 'redirect route with path "' + v + '"'), query: d, hash: h }, void 0, n) } return a(null, n) }

			function o(e, t, n) { var i = R(n, t.params, 'aliased route with path "' + n + '"'),
					o = r({ _normalized: !0, path: i }); if(o) { var s = o.matched,
						l = s[s.length - 1]; return t.params = o.params, a(l, t) } return a(null, t) }

			function a(e, n, r) { return e && e.redirect ? i(e, r || n) : e && e.matchAs ? o(e, n, e.matchAs) : u(e, n, r, t) } var s = z(e),
				l = s.pathList,
				c = s.pathMap,
				p = s.nameMap; return { match: r, addRoutes: n } }

		function U(e, t, n) { var r = t.match(e); if(!r) return !1; if(!n) return !0; for(var i = 1, o = r.length; i < o; ++i) { var a = e.keys[i - 1],
					s = "string" == typeof r[i] ? decodeURIComponent(r[i]) : r[i];
				a && (n[a.name] = s) } return !0 }

		function X(e, t) { return w(e, t.parent ? t.parent.path : "/", !0) }

		function q() { window.history.replaceState({ key: oe() }, ""), window.addEventListener("popstate", function(e) { K(), e.state && e.state.key && ae(e.state.key) }) }

		function Y(e, t, n, r) { if(e.app) { var i = e.options.scrollBehavior;
				i && e.app.$nextTick(function() { var e = Q(),
						o = i(t, n, r ? e : null);
					o && ("function" == typeof o.then ? o.then(function(t) { re(t, e) }).catch(function(e) {}) : re(o, e)) }) } }

		function K() { var e = oe();
			e && (tt[e] = { x: window.pageXOffset, y: window.pageYOffset }) }

		function Q() { var e = oe(); if(e) return tt[e] }

		function J(e, t) { var n = document.documentElement,
				r = n.getBoundingClientRect(),
				i = e.getBoundingClientRect(); return { x: i.left - r.left - t.x, y: i.top - r.top - t.y } }

		function Z(e) { return ne(e.x) || ne(e.y) }

		function ee(e) { return { x: ne(e.x) ? e.x : window.pageXOffset, y: ne(e.y) ? e.y : window.pageYOffset } }

		function te(e) { return { x: ne(e.x) ? e.x : 0, y: ne(e.y) ? e.y : 0 } }

		function ne(e) { return "number" == typeof e }

		function re(e, t) { var n = "object" == typeof e; if(n && "string" == typeof e.selector) { var r = document.querySelector(e.selector); if(r) { var i = e.offset && "object" == typeof e.offset ? e.offset : {};
					i = te(i), t = J(r, i) } else Z(e) && (t = ee(e)) } else n && Z(e) && (t = ee(e));
			t && window.scrollTo(t.x, t.y) }

		function ie() { return rt.now().toFixed(3) }

		function oe() { return it }

		function ae(e) { it = e }

		function se(e, t) { K(); var n = window.history; try { t ? n.replaceState({ key: it }, "", e) : (it = ie(), n.pushState({ key: it }, "", e)) } catch(n) { window.location[t ? "replace" : "assign"](e) } }

		function le(e) { se(e, !0) }

		function ce(e, t, n) { var r = function(i) { i >= e.length ? n() : e[i] ? t(e[i], function() { r(i + 1) }) : r(i + 1) };
			r(0) }

		function ue(e) { return function(t, n, r) { var o = !1,
					a = 0,
					s = null;
				pe(e, function(e, t, n, l) { if("function" == typeof e && void 0 === e.cid) { o = !0, a++; var c, u = fe(function(t) { he(t) && (t = t.default), e.resolved = "function" == typeof t ? t : Ie.extend(t), n.components[l] = t, --a <= 0 && r() }),
							p = fe(function(e) { var t = "Failed to resolve async component " + l + ": " + e;
								s || (s = i(e) ? e : new Error(t), r(s)) }); try { c = e(u, p) } catch(e) { p(e) } if(c)
							if("function" == typeof c.then) c.then(u, p);
							else { var d = c.component;
								d && "function" == typeof d.then && d.then(u, p) } } }), o || r() } }

		function pe(e, t) { return de(e.map(function(e) { return Object.keys(e.components).map(function(n) { return t(e.components[n], e.instances[n], e, n) }) })) }

		function de(e) { return Array.prototype.concat.apply([], e) }

		function he(e) { return e.__esModule || ot && "Module" === e[Symbol.toStringTag] }

		function fe(e) { var t = !1; return function() { for(var n = [], r = arguments.length; r--;) n[r] = arguments[r]; if(!t) return t = !0, e.apply(this, n) } }

		function ve(e) { if(!e)
				if(Ue) { var t = document.querySelector("base");
					e = t && t.getAttribute("href") || "/", e = e.replace(/^https?:\/\/[^\/]+/, "") } else e = "/"; return "/" !== e.charAt(0) && (e = "/" + e), e.replace(/\/$/, "") }

		function me(e, t) { var n, r = Math.max(e.length, t.length); for(n = 0; n < r && e[n] === t[n]; n++); return { updated: t.slice(0, n), activated: t.slice(n), deactivated: e.slice(n) } }

		function ge(e, t, n, r) { var i = pe(e, function(e, r, i, o) { var a = ye(e, t); if(a) return Array.isArray(a) ? a.map(function(e) { return n(e, r, i, o) }) : n(a, r, i, o) }); return de(r ? i.reverse() : i) }

		function ye(e, t) { return "function" != typeof e && (e = Ie.extend(e)), e.options[t] }

		function be(e) { return ge(e, "beforeRouteLeave", we, !0) }

		function _e(e) { return ge(e, "beforeRouteUpdate", we) }

		function we(e, t) { if(t) return function() { return e.apply(t, arguments) } }

		function Te(e, t, n) { return ge(e, "beforeRouteEnter", function(e, r, i, o) { return Ce(e, i, o, t, n) }) }

		function Ce(e, t, n, r, i) { return function(o, a, s) { return e(o, a, function(e) { s(e), "function" == typeof e && r.push(function() { Ee(e, t.instances, n, i) }) }) } }

		function Ee(e, t, n, r) { t[n] ? e(t[n]) : r() && setTimeout(function() { Ee(e, t, n, r) }, 16) }

		function xe(e) { var t = window.location.pathname; return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash }

		function Se(e) { var t = xe(e); if(!/^\/#/.test(t)) return window.location.replace(C(e + "/#" + t)), !0 }

		function ke() { var e = Oe(); return "/" === e.charAt(0) || (Pe("/" + e), !1) }

		function Oe() { var e = window.location.href,
				t = e.indexOf("#"); return -1 === t ? "" : e.slice(t + 1) }

		function Me(e) { var t = window.location.href,
				n = t.indexOf("#"); return(n >= 0 ? t.slice(0, n) : t) + "#" + e }

		function Ae(e) { nt ? se(Me(e)) : window.location.hash = e }

		function Pe(e) { nt ? le(Me(e)) : window.location.replace(Me(e)) }

		function je(e, t) { return e.push(t),
				function() { var n = e.indexOf(t);
					n > -1 && e.splice(n, 1) } }

		function Le(e, t, n) { var r = "hash" === n ? "#" + t : t; return e ? C(e + "/" + r) : r } var Ie, $e = { name: "router-view", functional: !0, props: { name: { type: String, default: "default" } }, render: function(e, t) { var n = t.props,
						r = t.children,
						i = t.parent,
						s = t.data;
					s.routerView = !0; for(var l = i.$createElement, c = n.name, u = i.$route, p = i._routerViewCache || (i._routerViewCache = {}), d = 0, h = !1; i && i._routerRoot !== i;) i.$vnode && i.$vnode.data.routerView && d++, i._inactive && (h = !0), i = i.$parent; if(s.routerViewDepth = d, h) return l(p[c], s, r); var f = u.matched[d]; if(!f) return p[c] = null, l(); var v = p[c] = f.components[c];
					s.registerRouteInstance = function(e, t) { var n = f.instances[c];
						(t && n !== e || !t && n === e) && (f.instances[c] = t) }, (s.hook || (s.hook = {})).prepatch = function(e, t) { f.instances[c] = t.componentInstance }; var m = s.props = o(u, f.props && f.props[c]); if(m) { m = s.props = a({}, m); var g = s.attrs = s.attrs || {}; for(var y in m) v.props && y in v.props || (g[y] = m[y], delete m[y]) } return l(v, s, r) } },
			De = /[!'()*]/g,
			Ne = function(e) { return "%" + e.charCodeAt(0).toString(16) },
			Re = /%2C/g,
			ze = function(e) { return encodeURIComponent(e).replace(De, Ne).replace(Re, ",") },
			Be = decodeURIComponent,
			Fe = /\/?$/,
			He = u(null, { path: "/" }),
			Ve = [String, Object],
			Ge = [String, Array],
			We = { name: "router-link", props: { to: { type: Ve, required: !0 }, tag: { type: String, default: "a" }, exact: Boolean, append: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, event: { type: Ge, default: "click" } }, render: function(e) { var t = this,
						n = this.$router,
						r = this.$route,
						i = n.resolve(this.to, r, this.append),
						o = i.location,
						a = i.route,
						s = i.href,
						l = {},
						c = n.options.linkActiveClass,
						p = n.options.linkExactActiveClass,
						d = null == c ? "router-link-active" : c,
						h = null == p ? "router-link-exact-active" : p,
						v = null == this.activeClass ? d : this.activeClass,
						g = null == this.exactActiveClass ? h : this.exactActiveClass,
						_ = o.path ? u(null, o, null, n) : a;
					l[g] = f(r, _), l[v] = this.exact ? l[g] : m(r, _); var w = function(e) { y(e) && (t.replace ? n.replace(o) : n.push(o)) },
						T = { click: y };
					Array.isArray(this.event) ? this.event.forEach(function(e) { T[e] = w }) : T[this.event] = w; var C = { class: l }; if("a" === this.tag) C.on = T, C.attrs = { href: s };
					else { var E = b(this.$slots.default); if(E) { E.isStatic = !1; var x = Ie.util.extend;
							(E.data = x({}, E.data)).on = T;
							(E.data.attrs = x({}, E.data.attrs)).href = s } else C.on = T } return e(this.tag, C, this.$slots.default) } },
			Ue = "undefined" != typeof window,
			Xe = Array.isArray || function(e) { return "[object Array]" == Object.prototype.toString.call(e) },
			qe = N,
			Ye = E,
			Ke = x,
			Qe = O,
			Je = D,
			Ze = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
		qe.parse = Ye, qe.compile = Ke, qe.tokensToFunction = Qe, qe.tokensToRegExp = Je; var et = Object.create(null),
			tt = Object.create(null),
			nt = Ue && function() { var e = window.navigator.userAgent; return(-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState" in window.history) }(),
			rt = Ue && window.performance && window.performance.now ? window.performance : Date,
			it = ie(),
			ot = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
			at = function(e, t) { this.router = e, this.base = ve(t), this.current = He, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = [] };
		at.prototype.listen = function(e) { this.cb = e }, at.prototype.onReady = function(e, t) { this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t)) }, at.prototype.onError = function(e) { this.errorCbs.push(e) }, at.prototype.transitionTo = function(e, t, n) { var r = this,
				i = this.router.match(e, this.current);
			this.confirmTransition(i, function() { r.updateRoute(i), t && t(i), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach(function(e) { e(i) })) }, function(e) { n && n(e), e && !r.ready && (r.ready = !0, r.readyErrorCbs.forEach(function(t) { t(e) })) }) }, at.prototype.confirmTransition = function(e, t, n) { var o = this,
				a = this.current,
				s = function(e) { i(e) && (o.errorCbs.length ? o.errorCbs.forEach(function(t) { t(e) }) : r(!1, "uncaught error during route navigation:")), n && n(e) }; if(f(e, a) && e.matched.length === a.matched.length) return this.ensureURL(), s(); var l = me(this.current.matched, e.matched),
				c = l.updated,
				u = l.deactivated,
				p = l.activated,
				d = [].concat(be(u), this.router.beforeHooks, _e(c), p.map(function(e) { return e.beforeEnter }), ue(p));
			this.pending = e; var h = function(t, n) { if(o.pending !== e) return s(); try { t(e, a, function(e) {!1 === e || i(e) ? (o.ensureURL(!0), s(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (s(), "object" == typeof e && e.replace ? o.replace(e) : o.push(e)) : n(e) }) } catch(e) { s(e) } };
			ce(d, h, function() { var n = [];
				ce(Te(p, n, function() { return o.current === e }).concat(o.router.resolveHooks), h, function() { if(o.pending !== e) return s();
					o.pending = null, t(e), o.router.app && o.router.app.$nextTick(function() { n.forEach(function(e) { e() }) }) }) }) }, at.prototype.updateRoute = function(e) { var t = this.current;
			this.current = e, this.cb && this.cb(e), this.router.afterHooks.forEach(function(n) { n && n(e, t) }) }; var st = function(e) {
				function t(t, n) { var r = this;
					e.call(this, t, n); var i = t.options.scrollBehavior;
					i && q(); var o = xe(this.base);
					window.addEventListener("popstate", function(e) { var n = r.current,
							a = xe(r.base);
						r.current === He && a === o || r.transitionTo(a, function(e) { i && Y(t, e, n, !0) }) }) } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.go = function(e) { window.history.go(e) }, t.prototype.push = function(e, t, n) { var r = this,
						i = this,
						o = i.current;
					this.transitionTo(e, function(e) { se(C(r.base + e.fullPath)), Y(r.router, e, o, !1), t && t(e) }, n) }, t.prototype.replace = function(e, t, n) { var r = this,
						i = this,
						o = i.current;
					this.transitionTo(e, function(e) { le(C(r.base + e.fullPath)), Y(r.router, e, o, !1), t && t(e) }, n) }, t.prototype.ensureURL = function(e) { if(xe(this.base) !== this.current.fullPath) { var t = C(this.base + this.current.fullPath);
						e ? se(t) : le(t) } }, t.prototype.getCurrentLocation = function() { return xe(this.base) }, t }(at),
			lt = function(e) {
				function t(t, n, r) { e.call(this, t, n), r && Se(this.base) || ke() } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function() { var e = this,
						t = this.router,
						n = t.options.scrollBehavior,
						r = nt && n;
					r && q(), window.addEventListener(nt ? "popstate" : "hashchange", function() { var t = e.current;
						ke() && e.transitionTo(Oe(), function(n) { r && Y(e.router, n, t, !0), nt || Pe(n.fullPath) }) }) }, t.prototype.push = function(e, t, n) { var r = this,
						i = this,
						o = i.current;
					this.transitionTo(e, function(e) { Ae(e.fullPath), Y(r.router, e, o, !1), t && t(e) }, n) }, t.prototype.replace = function(e, t, n) { var r = this,
						i = this,
						o = i.current;
					this.transitionTo(e, function(e) { Pe(e.fullPath), Y(r.router, e, o, !1), t && t(e) }, n) }, t.prototype.go = function(e) { window.history.go(e) }, t.prototype.ensureURL = function(e) { var t = this.current.fullPath;
					Oe() !== t && (e ? Ae(t) : Pe(t)) }, t.prototype.getCurrentLocation = function() { return Oe() }, t }(at),
			ct = function(e) {
				function t(t, n) { e.call(this, t, n), this.stack = [], this.index = -1 } return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.push = function(e, t, n) { var r = this;
					this.transitionTo(e, function(e) { r.stack = r.stack.slice(0, r.index + 1).concat(e), r.index++, t && t(e) }, n) }, t.prototype.replace = function(e, t, n) { var r = this;
					this.transitionTo(e, function(e) { r.stack = r.stack.slice(0, r.index).concat(e), t && t(e) }, n) }, t.prototype.go = function(e) { var t = this,
						n = this.index + e; if(!(n < 0 || n >= this.stack.length)) { var r = this.stack[n];
						this.confirmTransition(r, function() { t.index = n, t.updateRoute(r) }) } }, t.prototype.getCurrentLocation = function() { var e = this.stack[this.stack.length - 1]; return e ? e.fullPath : "/" }, t.prototype.ensureURL = function() {}, t }(at),
			ut = function(e) { void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = W(e.routes || [], this); var t = e.mode || "hash"; switch(this.fallback = "history" === t && !nt && !1 !== e.fallback, this.fallback && (t = "hash"), Ue || (t = "abstract"), this.mode = t, t) {
					case "history":
						this.history = new st(this, e.base); break;
					case "hash":
						this.history = new lt(this, e.base, this.fallback); break;
					case "abstract":
						this.history = new ct(this, e.base) } },
			pt = { currentRoute: { configurable: !0 } };
		ut.prototype.match = function(e, t, n) { return this.matcher.match(e, t, n) }, pt.currentRoute.get = function() { return this.history && this.history.current }, ut.prototype.init = function(e) { var t = this; if(this.apps.push(e), !this.app) { this.app = e; var n = this.history; if(n instanceof st) n.transitionTo(n.getCurrentLocation());
				else if(n instanceof lt) { var r = function() { n.setupListeners() };
					n.transitionTo(n.getCurrentLocation(), r, r) } n.listen(function(e) { t.apps.forEach(function(t) { t._route = e }) }) } }, ut.prototype.beforeEach = function(e) { return je(this.beforeHooks, e) }, ut.prototype.beforeResolve = function(e) { return je(this.resolveHooks, e) }, ut.prototype.afterEach = function(e) { return je(this.afterHooks, e) }, ut.prototype.onReady = function(e, t) { this.history.onReady(e, t) }, ut.prototype.onError = function(e) { this.history.onError(e) }, ut.prototype.push = function(e, t, n) { this.history.push(e, t, n) }, ut.prototype.replace = function(e, t, n) { this.history.replace(e, t, n) }, ut.prototype.go = function(e) { this.history.go(e) }, ut.prototype.back = function() { this.go(-1) }, ut.prototype.forward = function() { this.go(1) }, ut.prototype.getMatchedComponents = function(e) { var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute; return t ? [].concat.apply([], t.matched.map(function(e) { return Object.keys(e.components).map(function(t) { return e.components[t] }) })) : [] }, ut.prototype.resolve = function(e, t, n) { var r = V(e, t || this.history.current, n, this),
				i = this.match(r, t),
				o = i.redirectedFrom || i.fullPath; return { location: r, route: i, href: Le(this.history.base, o, this.mode), normalizedTo: r, resolved: i } }, ut.prototype.addRoutes = function(e) { this.matcher.addRoutes(e), this.history.current !== He && this.history.transitionTo(this.history.getCurrentLocation()) }, Object.defineProperties(ut.prototype, pt), ut.install = _, ut.version = "3.0.1", Ue && window.Vue && window.Vue.use(ut), t.a = ut },
	"06OY": function(e, t, n) { var r = n("3Eo+")("meta"),
			i = n("EqjI"),
			o = n("D2L2"),
			a = n("evD5").f,
			s = 0,
			l = Object.isExtensible || function() { return !0 },
			c = !n("S82l")(function() { return l(Object.preventExtensions({})) }),
			u = function(e) { a(e, r, { value: { i: "O" + ++s, w: {} } }) },
			p = function(e, t) { if(!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if(!o(e, r)) { if(!l(e)) return "F"; if(!t) return "E";
					u(e) } return e[r].i },
			d = function(e, t) { if(!o(e, r)) { if(!l(e)) return !0; if(!t) return !1;
					u(e) } return e[r].w },
			h = function(e) { return c && f.NEED && l(e) && !o(e, r) && u(e), e },
			f = e.exports = { KEY: r, NEED: !1, fastKey: p, getWeak: d, onFreeze: h } },
	"162o": function(e, t, n) {
		function r(e, t) { this._id = e, this._clearFn = t } var i = Function.prototype.apply;
		t.setTimeout = function() { return new r(i.call(setTimeout, window, arguments), clearTimeout) }, t.setInterval = function() { return new r(i.call(setInterval, window, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e && e.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(window, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;
			t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t)) }, n("mypn"), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate },
	"1Xk4": function(e, t, n) { "use strict";

		function r(e) { for(var t in e)
				if(e.hasOwnProperty(t)) return !1; return !0 }

		function i(e, t, n) { var r = e; return u(t) ? (n = t, "string" == typeof e && (r = { uri: e })) : r = d(t, { uri: e }), r.callback = n, r }

		function o(e, t, n) { return t = i(e, t, n), a(t) }

		function a(e) {
			function t() { 4 === u.readyState && setTimeout(a, 0) }

			function n() { var e = void 0; if(e = u.response ? u.response : u.responseText || s(u), _) try { e = JSON.parse(e) } catch(e) {}
				return e }

			function i(e) { return clearTimeout(f), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, c(e, w) }

			function a() { if(!h) { var t;
					clearTimeout(f), t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status; var r = w,
						i = null; return 0 !== t ? (r = { body: n(), statusCode: t, method: m, headers: {}, url: v, rawRequest: u }, u.getAllResponseHeaders && (r.headers = p(u.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), c(i, r, r.body) } } if(void 0 === e.callback) throw new Error("callback argument missing"); var l = !1,
				c = function(t, n, r) { l || (l = !0, e.callback(t, n, r)) },
				u = e.xhr || null;
			u || (u = e.cors || e.useXDR ? new o.XDomainRequest : new o.XMLHttpRequest); var d, h, f, v = u.url = e.uri || e.url,
				m = u.method = e.method || "GET",
				g = e.body || e.data,
				y = u.headers = e.headers || {},
				b = !!e.sync,
				_ = !1,
				w = { body: void 0, headers: {}, statusCode: 0, method: m, url: v, rawRequest: u }; if("json" in e && !1 !== e.json && (_ = !0, y.accept || y.Accept || (y.Accept = "application/json"), "GET" !== m && "HEAD" !== m && (y["content-type"] || y["Content-Type"] || (y["Content-Type"] = "application/json"), g = JSON.stringify(!0 === e.json ? g : e.json))), u.onreadystatechange = t, u.onload = a, u.onerror = i, u.onprogress = function() {}, u.onabort = function() { h = !0 }, u.ontimeout = i, u.open(m, v, !b, e.username, e.password), b || (u.withCredentials = !!e.withCredentials), !b && e.timeout > 0 && (f = setTimeout(function() { if(!h) { h = !0, u.abort("timeout"); var e = new Error("XMLHttpRequest timeout");
						e.code = "ETIMEDOUT", i(e) } }, e.timeout)), u.setRequestHeader)
				for(d in y) y.hasOwnProperty(d) && u.setRequestHeader(d, y[d]);
			else if(e.headers && !r(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object"); return "responseType" in e && (u.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(u), u.send(g || null), u }

		function s(e) { if("document" === e.responseType) return e.responseXML; var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName; return "" !== e.responseType || t ? null : e.responseXML }

		function l() {} var c = n("awF4"),
			u = n("Rl2i"),
			p = n("sD9O"),
			d = n("q+vg");
		e.exports = o, o.XMLHttpRequest = c.XMLHttpRequest || l, o.XDomainRequest = "withCredentials" in new o.XMLHttpRequest ? o.XMLHttpRequest : c.XDomainRequest,
			function(e, t) { for(var n = 0; n < e.length; n++) t(e[n]) }(["get", "put", "post", "patch", "head", "delete"], function(e) { o["delete" === e ? "del" : e] = function(t, n, r) { return n = i(t, n, r), n.method = e.toUpperCase(), a(n) } }) },
	"1kS7": function(e, t) { t.f = Object.getOwnPropertySymbols },
	"21It": function(e, t, n) { "use strict"; var r = n("FtD3");
		e.exports = function(e, t, n) { var i = n.config.validateStatus;
			n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n) } },
	"3Eo+": function(e, t) { var n = 0,
			r = Math.random();
		e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36)) } },
	"4mcu": function(e, t) { e.exports = function() {} },
	"52gC": function(e, t) { e.exports = function(e) { if(void 0 == e) throw TypeError("Can't call method on  " + e); return e } },
	"5QVw": function(e, t, n) { e.exports = { default: n("BwfY"), __esModule: !0 } },
	"5VQ+": function(e, t, n) { "use strict"; var r = n("cGG2");
		e.exports = function(e, t) { r.forEach(e, function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) }) } },
	"7+uW": function(e, t, n) {
		"use strict";
		(function(e, n) {
			function r(e) { return void 0 === e || null === e }

			function i(e) { return void 0 !== e && null !== e }

			function o(e) { return !0 === e }

			function a(e) { return !1 === e }

			function s(e) { return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e }

			function l(e) { return null !== e && "object" == typeof e }

			function c(e) { return "[object Object]" === no.call(e) }

			function u(e) { return "[object RegExp]" === no.call(e) }

			function p(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

			function d(e) { return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e) }

			function h(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

			function f(e, t) { for(var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }

			function v(e, t) { if(e.length) { var n = e.indexOf(t); if(n > -1) return e.splice(n, 1) } }

			function m(e, t) { return oo.call(e, t) }

			function g(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }

			function y(e, t) {
				function n(n) { var r = arguments.length; return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) } return n._length = e.length, n }

			function b(e, t) { t = t || 0; for(var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t]; return r }

			function _(e, t) { for(var n in t) e[n] = t[n]; return e }

			function w(e) { for(var t = {}, n = 0; n < e.length; n++) e[n] && _(t, e[n]); return t }

			function T(e, t, n) {}

			function C(e, t) { if(e === t) return !0; var n = l(e),
					r = l(t); if(!n || !r) return !n && !r && String(e) === String(t); try { var i = Array.isArray(e),
						o = Array.isArray(t); if(i && o) return e.length === t.length && e.every(function(e, n) { return C(e, t[n]) }); if(i || o) return !1; var a = Object.keys(e),
						s = Object.keys(t); return a.length === s.length && a.every(function(n) { return C(e[n], t[n]) }) } catch(e) { return !1 } }

			function E(e, t) { for(var n = 0; n < e.length; n++)
					if(C(e[n], t)) return n; return -1 }

			function x(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }

			function S(e) { var t = (e + "").charCodeAt(0); return 36 === t || 95 === t }

			function k(e, t, n, r) { Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 }) }

			function O(e) { if(!yo.test(e)) { var t = e.split("."); return function(e) { for(var n = 0; n < t.length; n++) { if(!e) return;
							e = e[t[n]] } return e } } }

			function M(e) { return "function" == typeof e && /native code/.test(e.toString()) }

			function A(e) { zo.target && Bo.push(zo.target), zo.target = e }

			function P() { zo.target = Bo.pop() }

			function j(e) { return new Fo(void 0, void 0, void 0, String(e)) }

			function L(e, t) { var n = e.componentOptions,
					r = new Fo(e.tag, e.data, e.children, e.text, e.elm, e.context, n, e.asyncFactory); return r.ns = e.ns, r.isStatic = e.isStatic, r.key = e.key, r.isComment = e.isComment, r.fnContext = e.fnContext, r.fnOptions = e.fnOptions, r.fnScopeId = e.fnScopeId, r.isCloned = !0, t && (e.children && (r.children = I(e.children, !0)), n && n.children && (n.children = I(n.children, !0))), r }

			function I(e, t) { for(var n = e.length, r = new Array(n), i = 0; i < n; i++) r[i] = L(e[i], t); return r }

			function $(e, t, n) { e.__proto__ = t }

			function D(e, t, n) { for(var r = 0, i = n.length; r < i; r++) { var o = n[r];
					k(e, o, t[o]) } }

			function N(e, t) { if(l(e) && !(e instanceof Fo)) { var n; return m(e, "__ob__") && e.__ob__ instanceof qo ? n = e.__ob__ : Xo.shouldConvert && !Io() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new qo(e)), t && n && n.vmCount++, n } }

			function R(e, t, n, r, i) { var o = new zo,
					a = Object.getOwnPropertyDescriptor(e, t); if(!a || !1 !== a.configurable) { var s = a && a.get,
						l = a && a.set,
						c = !i && N(n);
					Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function() { var t = s ? s.call(e) : n; return zo.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && F(t))), t }, set: function(t) { var r = s ? s.call(e) : n;
							t === r || t !== t && r !== r || (l ? l.call(e, t) : n = t, c = !i && N(t), o.notify()) } }) } }

			function z(e, t, n) { if(Array.isArray(e) && p(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if(t in e && !(t in Object.prototype)) return e[t] = n, n; var r = e.__ob__; return e._isVue || r && r.vmCount ? n : r ? (R(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n) }

			function B(e, t) { if(Array.isArray(e) && p(t)) return void e.splice(t, 1); var n = e.__ob__;
				e._isVue || n && n.vmCount || m(e, t) && (delete e[t], n && n.dep.notify()) }

			function F(e) { for(var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && F(t) }

			function H(e, t) { if(!t) return e; for(var n, r, i, o = Object.keys(t), a = 0; a < o.length; a++) n = o[a], r = e[n], i = t[n], m(e, n) ? c(r) && c(i) && H(r, i) : z(e, n, i); return e }

			function V(e, t, n) { return n ? function() { var r = "function" == typeof t ? t.call(n, n) : t,
						i = "function" == typeof e ? e.call(n, n) : e; return r ? H(r, i) : i } : t ? e ? function() { return H("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e }

			function G(e, t) { return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e }

			function W(e, t, n, r) { var i = Object.create(e || null); return t ? _(i, t) : i }

			function U(e, t) { var n = e.props; if(n) { var r, i, o, a = {}; if(Array.isArray(n))
						for(r = n.length; r--;) "string" == typeof(i = n[r]) && (o = so(i), a[o] = { type: null });
					else if(c(n))
						for(var s in n) i = n[s], o = so(s), a[o] = c(i) ? i : { type: i };
					e.props = a } }

			function X(e, t) { var n = e.inject; if(n) { var r = e.inject = {}; if(Array.isArray(n))
						for(var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
					else if(c(n))
						for(var o in n) { var a = n[o];
							r[o] = c(a) ? _({ from: o }, a) : { from: a } } } }

			function q(e) { var t = e.directives; if(t)
					for(var n in t) { var r = t[n]; "function" == typeof r && (t[n] = { bind: r, update: r }) } }

			function Y(e, t, n) {
				function r(r) { var i = Yo[r] || Jo;
					l[r] = i(e[r], t[r], n, r) } "function" == typeof t && (t = t.options), U(t, n), X(t, n), q(t); var i = t.extends; if(i && (e = Y(e, i, n)), t.mixins)
					for(var o = 0, a = t.mixins.length; o < a; o++) e = Y(e, t.mixins[o], n); var s, l = {}; for(s in e) r(s); for(s in t) m(e, s) || r(s); return l }

			function K(e, t, n, r) { if("string" == typeof n) { var i = e[t]; if(m(i, n)) return i[n]; var o = so(n); if(m(i, o)) return i[o]; var a = lo(o); if(m(i, a)) return i[a]; return i[n] || i[o] || i[a] } }

			function Q(e, t, n, r) { var i = t[e],
					o = !m(n, e),
					a = n[e]; if(ee(Boolean, i.type) && (o && !m(i, "default") ? a = !1 : ee(String, i.type) || "" !== a && a !== uo(e) || (a = !0)), void 0 === a) { a = J(r, i, e); var s = Xo.shouldConvert;
					Xo.shouldConvert = !0, N(a), Xo.shouldConvert = s } return a }

			function J(e, t, n) { if(m(t, "default")) { var r = t.default; return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Z(t.type) ? r.call(e) : r } }

			function Z(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

			function ee(e, t) { if(!Array.isArray(t)) return Z(t) === Z(e); for(var n = 0, r = t.length; n < r; n++)
					if(Z(t[n]) === Z(e)) return !0; return !1 }

			function te(e, t, n) { if(t)
					for(var r = t; r = r.$parent;) { var i = r.$options.errorCaptured; if(i)
							for(var o = 0; o < i.length; o++) try { var a = !1 === i[o].call(r, e, t, n); if(a) return } catch(e) { ne(e, r, "errorCaptured hook") } } ne(e, t, n) }

			function ne(e, t, n) { if(go.errorHandler) try { return go.errorHandler.call(null, e, t, n) } catch(e) { re(e, null, "config.errorHandler") } re(e, t, n) }

			function re(e, t, n) { if(!_o && !wo || "undefined" == typeof console) throw e }

			function ie() { ea = !1; var e = Zo.slice(0);
				Zo.length = 0; for(var t = 0; t < e.length; t++) e[t]() }

			function oe(e) { return e._withTask || (e._withTask = function() { ta = !0; var t = e.apply(null, arguments); return ta = !1, t }) }

			function ae(e, t) { var n; if(Zo.push(function() { if(e) try { e.call(t) } catch(e) { te(e, t, "nextTick") } else n && n(t) }), ea || (ea = !0, ta ? Qo() : Ko()), !e && "undefined" != typeof Promise) return new Promise(function(e) { n = e }) }

			function se(e) { le(e, aa), aa.clear() }

			function le(e, t) { var n, r, i = Array.isArray(e); if((i || l(e)) && !Object.isFrozen(e)) { if(e.__ob__) { var o = e.__ob__.dep.id; if(t.has(o)) return;
						t.add(o) } if(i)
						for(n = e.length; n--;) le(e[n], t);
					else
						for(r = Object.keys(e), n = r.length; n--;) le(e[r[n]], t) } }

			function ce(e) {
				function t() { var e = arguments,
						n = t.fns; if(!Array.isArray(n)) return n.apply(null, arguments); for(var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, e) } return t.fns = e, t }

			function ue(e, t, n, i, o) { var a, s, l, c; for(a in e) s = e[a], l = t[a], c = sa(a), r(s) || (r(l) ? (r(s.fns) && (s = e[a] = ce(s)), n(c.name, s, c.once, c.capture, c.passive, c.params)) : s !== l && (l.fns = s, e[a] = l)); for(a in t) r(e[a]) && (c = sa(a), i(c.name, t[a], c.capture)) }

			function pe(e, t, n) {
				function a() { n.apply(this, arguments), v(s.fns, a) } e instanceof Fo && (e = e.data.hook || (e.data.hook = {})); var s, l = e[t];
				r(l) ? s = ce([a]) : i(l.fns) && o(l.merged) ? (s = l, s.fns.push(a)) : s = ce([l, a]), s.merged = !0, e[t] = s }

			function de(e, t, n) { var o = t.options.props; if(!r(o)) { var a = {},
						s = e.attrs,
						l = e.props; if(i(s) || i(l))
						for(var c in o) { var u = uo(c);
							he(a, l, c, u, !0) || he(a, s, c, u, !1) }
					return a } }

			function he(e, t, n, r, o) { if(i(t)) { if(m(t, n)) return e[n] = t[n], o || delete t[n], !0; if(m(t, r)) return e[n] = t[r], o || delete t[r], !0 } return !1 }

			function fe(e) { for(var t = 0; t < e.length; t++)
					if(Array.isArray(e[t])) return Array.prototype.concat.apply([], e); return e }

			function ve(e) { return s(e) ? [j(e)] : Array.isArray(e) ? ge(e) : void 0 }

			function me(e) { return i(e) && i(e.text) && a(e.isComment) }

			function ge(e, t) { var n, a, l, c, u = []; for(n = 0; n < e.length; n++) a = e[n], r(a) || "boolean" == typeof a || (l = u.length - 1, c = u[l], Array.isArray(a) ? a.length > 0 && (a = ge(a, (t || "") + "_" + n), me(a[0]) && me(c) && (u[l] = j(c.text + a[0].text), a.shift()), u.push.apply(u, a)) : s(a) ? me(c) ? u[l] = j(c.text + a) : "" !== a && u.push(j(a)) : me(a) && me(c) ? u[l] = j(c.text + a.text) : (o(e._isVList) && i(a.tag) && r(a.key) && i(t) && (a.key = "__vlist" + t + "_" + n + "__"), u.push(a))); return u }

			function ye(e, t) { return(e.__esModule || Do && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e }

			function be(e, t, n, r, i) { var o = Vo(); return o.asyncFactory = e, o.asyncMeta = { data: t, context: n, children: r, tag: i }, o }

			function _e(e, t, n) { if(o(e.error) && i(e.errorComp)) return e.errorComp; if(i(e.resolved)) return e.resolved; if(o(e.loading) && i(e.loadingComp)) return e.loadingComp; if(!i(e.contexts)) { var a = e.contexts = [n],
						s = !0,
						c = function() { for(var e = 0, t = a.length; e < t; e++) a[e].$forceUpdate() },
						u = x(function(n) { e.resolved = ye(n, t), s || c() }),
						p = x(function(t) { i(e.errorComp) && (e.error = !0, c()) }),
						d = e(u, p); return l(d) && ("function" == typeof d.then ? r(e.resolved) && d.then(u, p) : i(d.component) && "function" == typeof d.component.then && (d.component.then(u, p), i(d.error) && (e.errorComp = ye(d.error, t)), i(d.loading) && (e.loadingComp = ye(d.loading, t), 0 === d.delay ? e.loading = !0 : setTimeout(function() { r(e.resolved) && r(e.error) && (e.loading = !0, c()) }, d.delay || 200)), i(d.timeout) && setTimeout(function() { r(e.resolved) && p(null) }, d.timeout))), s = !1, e.loading ? e.loadingComp : e.resolved } e.contexts.push(n) }

			function we(e) { return e.isComment && e.asyncFactory }

			function Te(e) { if(Array.isArray(e))
					for(var t = 0; t < e.length; t++) { var n = e[t]; if(i(n) && (i(n.componentOptions) || we(n))) return n } }

			function Ce(e) { e._events = Object.create(null), e._hasHookEvent = !1; var t = e.$options._parentListeners;
				t && Se(e, t) }

			function Ee(e, t, n) { n ? oa.$once(e, t) : oa.$on(e, t) }

			function xe(e, t) { oa.$off(e, t) }

			function Se(e, t, n) { oa = e, ue(t, n || {}, Ee, xe, e), oa = void 0 }

			function ke(e, t) { var n = {}; if(!e) return n; for(var r = 0, i = e.length; r < i; r++) { var o = e[r],
						a = o.data; if(a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot)(n.default || (n.default = [])).push(o);
					else { var s = a.slot,
							l = n[s] || (n[s] = []); "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o) } } for(var c in n) n[c].every(Oe) && delete n[c]; return n }

			function Oe(e) { return e.isComment && !e.asyncFactory || " " === e.text }

			function Me(e, t) { t = t || {}; for(var n = 0; n < e.length; n++) Array.isArray(e[n]) ? Me(e[n], t) : t[e[n].key] = e[n].fn; return t }

			function Ae(e) { var t = e.$options,
					n = t.parent; if(n && !t.abstract) { for(; n.$options.abstract && n.$parent;) n = n.$parent;
					n.$children.push(e) } e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1 }

			function Pe(e, t, n) { e.$el = t, e.$options.render || (e.$options.render = Vo), De(e, "beforeMount"); var r; return r = function() { e._update(e._render(), n) }, new ma(e, r, T, null, !0), n = !1, null == e.$vnode && (e._isMounted = !0, De(e, "mounted")), e }

			function je(e, t, n, r, i) { var o = !!(i || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== to); if(e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data && r.data.attrs || to, e.$listeners = n || to, t && e.$options.props) { Xo.shouldConvert = !1; for(var a = e._props, s = e.$options._propKeys || [], l = 0; l < s.length; l++) { var c = s[l];
						a[c] = Q(c, e.$options.props, t, e) } Xo.shouldConvert = !0, e.$options.propsData = t } if(n) { var u = e.$options._parentListeners;
					e.$options._parentListeners = n, Se(e, n, u) } o && (e.$slots = ke(i, r.context), e.$forceUpdate()) }

			function Le(e) { for(; e && (e = e.$parent);)
					if(e._inactive) return !0; return !1 }

			function Ie(e, t) { if(t) { if(e._directInactive = !1, Le(e)) return } else if(e._directInactive) return; if(e._inactive || null === e._inactive) { e._inactive = !1; for(var n = 0; n < e.$children.length; n++) Ie(e.$children[n]);
					De(e, "activated") } }

			function $e(e, t) { if(!(t && (e._directInactive = !0, Le(e)) || e._inactive)) { e._inactive = !0; for(var n = 0; n < e.$children.length; n++) $e(e.$children[n]);
					De(e, "deactivated") } }

			function De(e, t) { var n = e.$options[t]; if(n)
					for(var r = 0, i = n.length; r < i; r++) try { n[r].call(e) } catch(n) { te(n, e, t + " hook") } e._hasHookEvent && e.$emit("hook:" + t) }

			function Ne() { fa = ca.length = ua.length = 0, pa = {}, da = ha = !1 }

			function Re() { ha = !0; var e, t; for(ca.sort(function(e, t) { return e.id - t.id }), fa = 0; fa < ca.length; fa++) e = ca[fa], t = e.id, pa[t] = null, e.run(); var n = ua.slice(),
					r = ca.slice();
				Ne(), Fe(n), ze(r), $o && go.devtools && $o.emit("flush") }

			function ze(e) { for(var t = e.length; t--;) { var n = e[t],
						r = n.vm;
					r._watcher === n && r._isMounted && De(r, "updated") } }

			function Be(e) { e._inactive = !1, ua.push(e) }

			function Fe(e) { for(var t = 0; t < e.length; t++) e[t]._inactive = !0, Ie(e[t], !0) }

			function He(e) { var t = e.id; if(null == pa[t]) { if(pa[t] = !0, ha) { for(var n = ca.length - 1; n > fa && ca[n].id > e.id;) n--;
						ca.splice(n + 1, 0, e) } else ca.push(e);
					da || (da = !0, ae(Re)) } }

			function Ve(e, t, n) { ga.get = function() { return this[t][n] }, ga.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, ga) }

			function Ge(e) { e._watchers = []; var t = e.$options;
				t.props && We(e, t.props), t.methods && Qe(e, t.methods), t.data ? Ue(e) : N(e._data = {}, !0), t.computed && qe(e, t.computed), t.watch && t.watch !== Mo && Je(e, t.watch) }

			function We(e, t) { var n = e.$options.propsData || {},
					r = e._props = {},
					i = e.$options._propKeys = [],
					o = !e.$parent;
				Xo.shouldConvert = o; for(var a in t) ! function(o) { i.push(o); var a = Q(o, t, n, e);
					R(r, o, a), o in e || Ve(e, "_props", o) }(a);
				Xo.shouldConvert = !0 }

			function Ue(e) { var t = e.$options.data;
				t = e._data = "function" == typeof t ? Xe(t, e) : t || {}, c(t) || (t = {}); for(var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) { var o = n[i];
					r && m(r, o) || S(o) || Ve(e, "_data", o) } N(t, !0) }

			function Xe(e, t) { try { return e.call(t, t) } catch(e) { return te(e, t, "data()"), {} } }

			function qe(e, t) { var n = e._computedWatchers = Object.create(null),
					r = Io(); for(var i in t) { var o = t[i],
						a = "function" == typeof o ? o : o.get;
					r || (n[i] = new ma(e, a || T, T, ya)), i in e || Ye(e, i, o) } }

			function Ye(e, t, n) { var r = !Io(); "function" == typeof n ? (ga.get = r ? Ke(t) : n, ga.set = T) : (ga.get = n.get ? r && !1 !== n.cache ? Ke(t) : n.get : T, ga.set = n.set ? n.set : T), Object.defineProperty(e, t, ga) }

			function Ke(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if(t) return t.dirty && t.evaluate(), zo.target && t.depend(), t.value } }

			function Qe(e, t) { e.$options.props; for(var n in t) e[n] = null == t[n] ? T : y(t[n], e) }

			function Je(e, t) { for(var n in t) { var r = t[n]; if(Array.isArray(r))
						for(var i = 0; i < r.length; i++) Ze(e, n, r[i]);
					else Ze(e, n, r) } }

			function Ze(e, t, n, r) { return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r) }

			function et(e) { var t = e.$options.provide;
				t && (e._provided = "function" == typeof t ? t.call(e) : t) }

			function tt(e) { var t = nt(e.$options.inject, e);
				t && (Xo.shouldConvert = !1, Object.keys(t).forEach(function(n) { R(e, n, t[n]) }), Xo.shouldConvert = !0) }

			function nt(e, t) { if(e) { for(var n = Object.create(null), r = Do ? Reflect.ownKeys(e).filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }) : Object.keys(e), i = 0; i < r.length; i++) { for(var o = r[i], a = e[o].from, s = t; s;) { if(s._provided && a in s._provided) { n[o] = s._provided[a]; break } s = s.$parent } if(!s && "default" in e[o]) { var l = e[o].default;
							n[o] = "function" == typeof l ? l.call(t) : l } } return n } }

			function rt(e, t) { var n, r, o, a, s; if(Array.isArray(e) || "string" == typeof e)
					for(n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
				else if("number" == typeof e)
					for(n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
				else if(l(e))
					for(a = Object.keys(e), n = new Array(a.length), r = 0, o = a.length; r < o; r++) s = a[r], n[r] = t(e[s], s, r); return i(n) && (n._isVList = !0), n }

			function it(e, t, n, r) { var i, o = this.$scopedSlots[e]; if(o) n = n || {}, r && (n = _(_({}, r), n)), i = o(n) || t;
				else { var a = this.$slots[e];
					a && (a._rendered = !0), i = a || t } var s = n && n.slot; return s ? this.$createElement("template", { slot: s }, i) : i }

			function ot(e) { return K(this.$options, "filters", e, !0) || ho }

			function at(e, t, n, r) { var i = go.keyCodes[t] || n; return i ? Array.isArray(i) ? -1 === i.indexOf(e) : i !== e : r ? uo(r) !== t : void 0 }

			function st(e, t, n, r, i) { if(n)
					if(l(n)) { Array.isArray(n) && (n = w(n)); var o; for(var a in n) ! function(a) { if("class" === a || "style" === a || io(a)) o = e;
							else { var s = e.attrs && e.attrs.type;
								o = r || go.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {}) } if(!(a in o) && (o[a] = n[a], i)) {
								(e.on || (e.on = {}))["update:" + a] = function(e) { n[a] = e } } }(a) } else; return e }

			function lt(e, t) { var n = this._staticTrees || (this._staticTrees = []),
					r = n[e]; return r && !t ? Array.isArray(r) ? I(r) : L(r) : (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), ut(r, "__static__" + e, !1), r) }

			function ct(e, t, n) { return ut(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

			function ut(e, t, n) { if(Array.isArray(e))
					for(var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && pt(e[r], t + "_" + r, n);
				else pt(e, t, n) }

			function pt(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

			function dt(e, t) { if(t)
					if(c(t)) { var n = e.on = e.on ? _({}, e.on) : {}; for(var r in t) { var i = n[r],
								o = t[r];
							n[r] = i ? [].concat(i, o) : o } } else; return e }

			function ht(e) { e._o = ct, e._n = h, e._s = d, e._l = rt, e._t = it, e._q = C, e._i = E, e._m = lt, e._f = ot, e._k = at, e._b = st, e._v = j, e._e = Vo, e._u = Me, e._g = dt }

			function ft(e, t, n, r, i) { var a = i.options;
				this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || to, this.injections = nt(a.inject, r), this.slots = function() { return ke(n, r) }; var s = Object.create(r),
					l = o(a._compiled),
					c = !l;
				l && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || to), a._scopeId ? this._c = function(e, t, n, i) { var o = Tt(s, e, t, n, i, c); return o && (o.fnScopeId = a._scopeId, o.fnContext = r), o } : this._c = function(e, t, n, r) { return Tt(s, e, t, n, r, c) } }

			function vt(e, t, n, r, o) { var a = e.options,
					s = {},
					l = a.props; if(i(l))
					for(var c in l) s[c] = Q(c, l, t || to);
				else i(n.attrs) && mt(s, n.attrs), i(n.props) && mt(s, n.props); var u = new ft(n, s, o, r, e),
					p = a.render.call(null, u._c, u); return p instanceof Fo && (p.fnContext = r, p.fnOptions = a, n.slot && ((p.data || (p.data = {})).slot = n.slot)), p }

			function mt(e, t) { for(var n in t) e[so(n)] = t[n] }

			function gt(e, t, n, a, s) { if(!r(e)) { var c = n.$options._base; if(l(e) && (e = c.extend(e)), "function" == typeof e) { var u; if(r(e.cid) && (u = e, void 0 === (e = _e(u, c, n)))) return be(u, t, n, a, s);
						t = t || {}, kt(e), i(t.model) && wt(e.options, t); var p = de(t, e, s); if(o(e.options.functional)) return vt(e, p, t, n, a); var d = t.on; if(t.on = t.nativeOn, o(e.options.abstract)) { var h = t.slot;
							t = {}, h && (t.slot = h) } bt(t); var f = e.options.name || s; return new Fo("vue-component-" + e.cid + (f ? "-" + f : ""), t, void 0, void 0, void 0, n, { Ctor: e, propsData: p, listeners: d, tag: s, children: a }, u) } } }

			function yt(e, t, n, r) { var o = { _isComponent: !0, parent: t, _parentVnode: e, _parentElm: n || null, _refElm: r || null },
					a = e.data.inlineTemplate; return i(a) && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new e.componentOptions.Ctor(o) }

			function bt(e) { e.hook || (e.hook = {}); for(var t = 0; t < _a.length; t++) { var n = _a[t],
						r = e.hook[n],
						i = ba[n];
					e.hook[n] = r ? _t(i, r) : i } }

			function _t(e, t) { return function(n, r, i, o) { e(n, r, i, o), t(n, r, i, o) } }

			function wt(e, t) { var n = e.model && e.model.prop || "value",
					r = e.model && e.model.event || "input";
				(t.props || (t.props = {}))[n] = t.model.value; var o = t.on || (t.on = {});
				i(o[r]) ? o[r] = [t.model.callback].concat(o[r]) : o[r] = t.model.callback }

			function Tt(e, t, n, r, i, a) { return(Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = Ta), Ct(e, t, n, r, i) }

			function Ct(e, t, n, r, o) { if(i(n) && i(n.__ob__)) return Vo(); if(i(n) && i(n.is) && (t = n.is), !t) return Vo();
				Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), o === Ta ? r = ve(r) : o === wa && (r = fe(r)); var a, s; if("string" == typeof t) { var l;
					s = e.$vnode && e.$vnode.ns || go.getTagNamespace(t), a = go.isReservedTag(t) ? new Fo(go.parsePlatformTagName(t), n, r, void 0, void 0, e) : i(l = K(e.$options, "components", t)) ? gt(l, n, e, r, t) : new Fo(t, n, r, void 0, void 0, e) } else a = gt(t, n, e, r); return i(a) ? (s && Et(a, s), a) : Vo() }

			function Et(e, t, n) { if(e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), i(e.children))
					for(var a = 0, s = e.children.length; a < s; a++) { var l = e.children[a];
						i(l.tag) && (r(l.ns) || o(n)) && Et(l, t, n) } }

			function xt(e) { e._vnode = null, e._staticTrees = null; var t = e.$options,
					n = e.$vnode = t._parentVnode,
					r = n && n.context;
				e.$slots = ke(t._renderChildren, r), e.$scopedSlots = to, e._c = function(t, n, r, i) { return Tt(e, t, n, r, i, !1) }, e.$createElement = function(t, n, r, i) { return Tt(e, t, n, r, i, !0) }; var i = n && n.data;
				R(e, "$attrs", i && i.attrs || to, null, !0), R(e, "$listeners", t._parentListeners || to, null, !0) }

			function St(e, t) { var n = e.$options = Object.create(e.constructor.options),
					r = t._parentVnode;
				n.parent = t.parent, n._parentVnode = r, n._parentElm = t._parentElm, n._refElm = t._refElm; var i = r.componentOptions;
				n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns) }

			function kt(e) { var t = e.options; if(e.super) { var n = kt(e.super); if(n !== e.superOptions) { e.superOptions = n; var r = Ot(e);
						r && _(e.extendOptions, r), t = e.options = Y(n, e.extendOptions), t.name && (t.components[t.name] = e) } } return t }

			function Ot(e) { var t, n = e.options,
					r = e.extendOptions,
					i = e.sealedOptions; for(var o in n) n[o] !== i[o] && (t || (t = {}), t[o] = Mt(n[o], r[o], i[o])); return t }

			function Mt(e, t, n) { if(Array.isArray(e)) { var r = [];
					n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t]; for(var i = 0; i < e.length; i++)(t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && r.push(e[i]); return r } return e }

			function At(e) { this._init(e) }

			function Pt(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if(t.indexOf(e) > -1) return this; var n = b(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }

			function jt(e) { e.mixin = function(e) { return this.options = Y(this.options, e), this } }

			function Lt(e) { e.cid = 0; var t = 1;
				e.extend = function(e) { e = e || {}; var n = this,
						r = n.cid,
						i = e._Ctor || (e._Ctor = {}); if(i[r]) return i[r]; var o = e.name || n.options.name,
						a = function(e) { this._init(e) }; return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = Y(n.options, e), a.super = n, a.options.props && It(a), a.options.computed && $t(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, vo.forEach(function(e) { a[e] = n[e] }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = _({}, a.options), i[r] = a, a } }

			function It(e) { var t = e.options.props; for(var n in t) Ve(e.prototype, "_props", n) }

			function $t(e) { var t = e.options.computed; for(var n in t) Ye(e.prototype, n, t[n]) }

			function Dt(e) { vo.forEach(function(t) { e[t] = function(e, n) { return n ? ("component" === t && c(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } }) }

			function Nt(e) { return e && (e.Ctor.options.name || e.tag) }

			function Rt(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t) }

			function zt(e, t) { var n = e.cache,
					r = e.keys,
					i = e._vnode; for(var o in n) { var a = n[o]; if(a) { var s = Nt(a.componentOptions);
						s && !t(s) && Bt(n, o, r, i) } } }

			function Bt(e, t, n, r) { var i = e[t];!i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, v(n, t) }

			function Ft(e) { for(var t = e.data, n = e, r = e; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = Ht(r.data, t)); for(; i(n = n.parent);) n && n.data && (t = Ht(t, n.data)); return Vt(t.staticClass, t.class) }

			function Ht(e, t) { return { staticClass: Gt(e.staticClass, t.staticClass), class: i(e.class) ? [e.class, t.class] : t.class } }

			function Vt(e, t) { return i(e) || i(t) ? Gt(e, Wt(t)) : "" }

			function Gt(e, t) { return e ? t ? e + " " + t : e : t || "" }

			function Wt(e) { return Array.isArray(e) ? Ut(e) : l(e) ? Xt(e) : "string" == typeof e ? e : "" }

			function Ut(e) { for(var t, n = "", r = 0, o = e.length; r < o; r++) i(t = Wt(e[r])) && "" !== t && (n && (n += " "), n += t); return n }

			function Xt(e) { var t = ""; for(var n in e) e[n] && (t && (t += " "), t += n); return t }

			function qt(e) { return Xa(e) ? "svg" : "math" === e ? "math" : void 0 }

			function Yt(e) { if(!_o) return !0; if(Ya(e)) return !1; if(e = e.toLowerCase(), null != Ka[e]) return Ka[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? Ka[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ka[e] = /HTMLUnknownElement/.test(t.toString()) }

			function Kt(e) { if("string" == typeof e) { var t = document.querySelector(e); return t || document.createElement("div") } return e }

			function Qt(e, t) { var n = document.createElement(e); return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n) }

			function Jt(e, t) { return document.createElementNS(Wa[e], t) }

			function Zt(e) { return document.createTextNode(e) }

			function en(e) { return document.createComment(e) }

			function tn(e, t, n) { e.insertBefore(t, n) }

			function nn(e, t) { e.removeChild(t) }

			function rn(e, t) { e.appendChild(t) }

			function on(e) { return e.parentNode }

			function an(e) { return e.nextSibling }

			function sn(e) { return e.tagName }

			function ln(e, t) { e.textContent = t }

			function cn(e, t, n) { e.setAttribute(t, n) }

			function un(e, t) { var n = e.data.ref; if(n) { var r = e.context,
						i = e.componentInstance || e.elm,
						o = r.$refs;
					t ? Array.isArray(o[n]) ? v(o[n], i) : o[n] === i && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i } }

			function pn(e, t) { return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && dn(e, t) || o(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error)) }

			function dn(e, t) { if("input" !== e.tag) return !0; var n, r = i(n = e.data) && i(n = n.attrs) && n.type,
					o = i(n = t.data) && i(n = n.attrs) && n.type; return r === o || Qa(r) && Qa(o) }

			function hn(e, t, n) { var r, o, a = {}; for(r = t; r <= n; ++r) o = e[r].key, i(o) && (a[o] = r); return a }

			function fn(e, t) {
				(e.data.directives || t.data.directives) && vn(e, t) }

			function vn(e, t) { var n, r, i, o = e === es,
					a = t === es,
					s = mn(e.data.directives, e.context),
					l = mn(t.data.directives, t.context),
					c = [],
					u = []; for(n in l) r = s[n], i = l[n], r ? (i.oldValue = r.value, yn(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (yn(i, "bind", t, e), i.def && i.def.inserted && c.push(i)); if(c.length) { var p = function() { for(var n = 0; n < c.length; n++) yn(c[n], "inserted", t, e) };
					o ? pe(t, "insert", p) : p() } if(u.length && pe(t, "postpatch", function() { for(var n = 0; n < u.length; n++) yn(u[n], "componentUpdated", t, e) }), !o)
					for(n in s) l[n] || yn(s[n], "unbind", e, e, a) }

			function mn(e, t) { var n = Object.create(null); if(!e) return n; var r, i; for(r = 0; r < e.length; r++) i = e[r], i.modifiers || (i.modifiers = rs), n[gn(i)] = i, i.def = K(t.$options, "directives", i.name, !0); return n }

			function gn(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

			function yn(e, t, n, r, i) { var o = e.def && e.def[t]; if(o) try { o(n.elm, e, n, r, i) } catch(r) { te(r, n.context, "directive " + e.name + " " + t + " hook") } }

			function bn(e, t) { var n = t.componentOptions; if(!(i(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) { var o, a, s = t.elm,
						l = e.data.attrs || {},
						c = t.data.attrs || {};
					i(c.__ob__) && (c = t.data.attrs = _({}, c)); for(o in c) a = c[o], l[o] !== a && _n(s, o, a);
					(Eo || So) && c.value !== l.value && _n(s, "value", c.value); for(o in l) r(c[o]) && (Ha(o) ? s.removeAttributeNS(Fa, Va(o)) : za(o) || s.removeAttribute(o)) } }

			function _n(e, t, n) { if(Ba(t)) Ga(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n));
				else if(za(t)) e.setAttribute(t, Ga(n) || "false" === n ? "false" : "true");
				else if(Ha(t)) Ga(n) ? e.removeAttributeNS(Fa, Va(t)) : e.setAttributeNS(Fa, t, n);
				else if(Ga(n)) e.removeAttribute(t);
				else { if(Eo && !xo && "TEXTAREA" === e.tagName && "placeholder" === t && !e.__ieph) { var r = function(t) { t.stopImmediatePropagation(), e.removeEventListener("input", r) };
						e.addEventListener("input", r), e.__ieph = !0 } e.setAttribute(t, n) } }

			function wn(e, t) { var n = t.elm,
					o = t.data,
					a = e.data; if(!(r(o.staticClass) && r(o.class) && (r(a) || r(a.staticClass) && r(a.class)))) { var s = Ft(t),
						l = n._transitionClasses;
					i(l) && (s = Gt(s, Wt(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s) } }

			function Tn(e) {
				function t() {
					(a || (a = [])).push(e.slice(f, i).trim()), f = i + 1 } var n, r, i, o, a, s = !1,
					l = !1,
					c = !1,
					u = !1,
					p = 0,
					d = 0,
					h = 0,
					f = 0; for(i = 0; i < e.length; i++)
					if(r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
					else if(l) 34 === n && 92 !== r && (l = !1);
				else if(c) 96 === n && 92 !== r && (c = !1);
				else if(u) 47 === n && 92 !== r && (u = !1);
				else if(124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || p || d || h) { switch(n) {
						case 34:
							l = !0; break;
						case 39:
							s = !0; break;
						case 96:
							c = !0; break;
						case 40:
							h++; break;
						case 41:
							h--; break;
						case 91:
							d++; break;
						case 93:
							d--; break;
						case 123:
							p++; break;
						case 125:
							p-- } if(47 === n) { for(var v = i - 1, m = void 0; v >= 0 && " " === (m = e.charAt(v)); v--);
						m && ss.test(m) || (u = !0) } } else void 0 === o ? (f = i + 1, o = e.slice(0, i).trim()) : t(); if(void 0 === o ? o = e.slice(0, i).trim() : 0 !== f && t(), a)
					for(i = 0; i < a.length; i++) o = Cn(o, a[i]); return o }

			function Cn(e, t) { var n = t.indexOf("("); return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1) }

			function En(e) {}

			function xn(e, t) { return e ? e.map(function(e) { return e[t] }).filter(function(e) { return e }) : [] }

			function Sn(e, t, n) {
				(e.props || (e.props = [])).push({ name: t, value: n }), e.plain = !1 }

			function kn(e, t, n) {
				(e.attrs || (e.attrs = [])).push({ name: t, value: n }), e.plain = !1 }

			function On(e, t, n) { e.attrsMap[t] = n, e.attrsList.push({ name: t, value: n }) }

			function Mn(e, t, n, r, i, o) {
				(e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: i, modifiers: o }), e.plain = !1 }

			function An(e, t, n, r, i, o) { r = r || to, r.capture && (delete r.capture, t = "!" + t), r.once && (delete r.once, t = "~" + t), r.passive && (delete r.passive, t = "&" + t), "click" === t && (r.right ? (t = "contextmenu", delete r.right) : r.middle && (t = "mouseup")); var a;
				r.native ? (delete r.native, a = e.nativeEvents || (e.nativeEvents = {})) : a = e.events || (e.events = {}); var s = { value: n };
				r !== to && (s.modifiers = r); var l = a[t];
				Array.isArray(l) ? i ? l.unshift(s) : l.push(s) : a[t] = l ? i ? [s, l] : [l, s] : s, e.plain = !1 }

			function Pn(e, t, n) { var r = jn(e, ":" + t) || jn(e, "v-bind:" + t); if(null != r) return Tn(r); if(!1 !== n) { var i = jn(e, t); if(null != i) return JSON.stringify(i) } }

			function jn(e, t, n) { var r; if(null != (r = e.attrsMap[t]))
					for(var i = e.attrsList, o = 0, a = i.length; o < a; o++)
						if(i[o].name === t) { i.splice(o, 1); break }
				return n && delete e.attrsMap[t], r }

			function Ln(e, t, n) { var r = n || {},
					i = r.number,
					o = r.trim,
					a = "$$v";
				o && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")"); var s = In(t, a);
				e.model = { value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + s + "}" } }

			function In(e, t) { var n = $n(e); return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")" }

			function $n(e) { if(ka = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < ka - 1) return Aa = e.lastIndexOf("."), Aa > -1 ? { exp: e.slice(0, Aa), key: '"' + e.slice(Aa + 1) + '"' } : { exp: e, key: null }; for(Oa = e, Aa = Pa = ja = 0; !Nn();) Ma = Dn(), Rn(Ma) ? Bn(Ma) : 91 === Ma && zn(Ma); return { exp: e.slice(0, Pa), key: e.slice(Pa + 1, ja) } }

			function Dn() { return Oa.charCodeAt(++Aa) }

			function Nn() { return Aa >= ka }

			function Rn(e) { return 34 === e || 39 === e }

			function zn(e) { var t = 1; for(Pa = Aa; !Nn();)
					if(e = Dn(), Rn(e)) Bn(e);
					else if(91 === e && t++, 93 === e && t--, 0 === t) { ja = Aa; break } }

			function Bn(e) { for(var t = e; !Nn() && (e = Dn()) !== t;); }

			function Fn(e, t, n) { La = n; var r = t.value,
					i = t.modifiers,
					o = e.tag,
					a = e.attrsMap.type; if(e.component) return Ln(e, r, i), !1; if("select" === o) Gn(e, r, i);
				else if("input" === o && "checkbox" === a) Hn(e, r, i);
				else if("input" === o && "radio" === a) Vn(e, r, i);
				else if("input" === o || "textarea" === o) Wn(e, r, i);
				else if(!go.isReservedTag(o)) return Ln(e, r, i), !1; return !0 }

			function Hn(e, t, n) { var r = n && n.number,
					i = Pn(e, "value") || "null",
					o = Pn(e, "true-value") || "true",
					a = Pn(e, "false-value") || "false";
				Sn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), An(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + In(t, "$$c") + "}", null, !0) }

			function Vn(e, t, n) { var r = n && n.number,
					i = Pn(e, "value") || "null";
				i = r ? "_n(" + i + ")" : i, Sn(e, "checked", "_q(" + t + "," + i + ")"), An(e, "change", In(t, i), null, !0) }

			function Gn(e, t, n) { var r = n && n.number,
					i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})",
					o = "var $$selectedVal = " + i + ";";
				o = o + " " + In(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), An(e, "change", o, null, !0) }

			function Wn(e, t, n) { var r = e.attrsMap.type,
					i = n || {},
					o = i.lazy,
					a = i.number,
					s = i.trim,
					l = !o && "range" !== r,
					c = o ? "change" : "range" === r ? ls : "input",
					u = "$event.target.value";
				s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")"); var p = In(t, u);
				l && (p = "if($event.target.composing)return;" + p), Sn(e, "value", "(" + t + ")"), An(e, c, p, null, !0), (s || a) && An(e, "blur", "$forceUpdate()") }

			function Un(e) { if(i(e[ls])) { var t = Eo ? "change" : "input";
					e[t] = [].concat(e[ls], e[t] || []), delete e[ls] } i(e[cs]) && (e.change = [].concat(e[cs], e.change || []), delete e[cs]) }

			function Xn(e, t, n) { var r = Ia; return function i() { null !== e.apply(null, arguments) && Yn(t, i, n, r) } }

			function qn(e, t, n, r, i) { t = oe(t), n && (t = Xn(t, e, r)), Ia.addEventListener(e, t, Ao ? { capture: r, passive: i } : r) }

			function Yn(e, t, n, r) {
				(r || Ia).removeEventListener(e, t._withTask || t, n) }

			function Kn(e, t) { if(!r(e.data.on) || !r(t.data.on)) { var n = t.data.on || {},
						i = e.data.on || {};
					Ia = t.elm, Un(n), ue(n, i, qn, Yn, t.context), Ia = void 0 } }

			function Qn(e, t) { if(!r(e.data.domProps) || !r(t.data.domProps)) { var n, o, a = t.elm,
						s = e.data.domProps || {},
						l = t.data.domProps || {};
					i(l.__ob__) && (l = t.data.domProps = _({}, l)); for(n in s) r(l[n]) && (a[n] = ""); for(n in l) { if(o = l[n], "textContent" === n || "innerHTML" === n) { if(t.children && (t.children.length = 0), o === s[n]) continue;
							1 === a.childNodes.length && a.removeChild(a.childNodes[0]) } if("value" === n) { a._value = o; var c = r(o) ? "" : String(o);
							Jn(a, c) && (a.value = c) } else a[n] = o } } }

			function Jn(e, t) { return !e.composing && ("OPTION" === e.tagName || Zn(e, t) || er(e, t)) }

			function Zn(e, t) { var n = !0; try { n = document.activeElement !== e } catch(e) {} return n && e.value !== t }

			function er(e, t) { var n = e.value,
					r = e._vModifiers; if(i(r)) { if(r.lazy) return !1; if(r.number) return h(n) !== h(t); if(r.trim) return n.trim() !== t.trim() } return n !== t }

			function tr(e) { var t = nr(e.style); return e.staticStyle ? _(e.staticStyle, t) : t }

			function nr(e) { return Array.isArray(e) ? w(e) : "string" == typeof e ? ds(e) : e }

			function rr(e, t) { var n, r = {}; if(t)
					for(var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = tr(i.data)) && _(r, n);
				(n = tr(e.data)) && _(r, n); for(var o = e; o = o.parent;) o.data && (n = tr(o.data)) && _(r, n); return r }

			function ir(e, t) { var n = t.data,
					o = e.data; if(!(r(n.staticStyle) && r(n.style) && r(o.staticStyle) && r(o.style))) { var a, s, l = t.elm,
						c = o.staticStyle,
						u = o.normalizedStyle || o.style || {},
						p = c || u,
						d = nr(t.data.style) || {};
					t.data.normalizedStyle = i(d.__ob__) ? _({}, d) : d; var h = rr(t, !0); for(s in p) r(h[s]) && vs(l, s, ""); for(s in h)(a = h[s]) !== p[s] && vs(l, s, null == a ? "" : a) } }

			function or(e, t) { if(t && (t = t.trim()))
					if(e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.add(t) }) : e.classList.add(t);
					else { var n = " " + (e.getAttribute("class") || "") + " ";
						n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim()) } }

			function ar(e, t) { if(t && (t = t.trim()))
					if(e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.remove(t) }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
					else { for(var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
						n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class") } }

			function sr(e) { if(e) { if("object" == typeof e) { var t = {}; return !1 !== e.css && _(t, bs(e.name || "v")), _(t, e), t } return "string" == typeof e ? bs(e) : void 0 } }

			function lr(e) { ks(function() { ks(e) }) }

			function cr(e, t) { var n = e._transitionClasses || (e._transitionClasses = []);
				n.indexOf(t) < 0 && (n.push(t), or(e, t)) }

			function ur(e, t) { e._transitionClasses && v(e._transitionClasses, t), ar(e, t) }

			function pr(e, t, n) { var r = dr(e, t),
					i = r.type,
					o = r.timeout,
					a = r.propCount; if(!i) return n(); var s = i === ws ? Es : Ss,
					l = 0,
					c = function() { e.removeEventListener(s, u), n() },
					u = function(t) { t.target === e && ++l >= a && c() };
				setTimeout(function() { l < a && c() }, o + 1), e.addEventListener(s, u) }

			function dr(e, t) { var n, r = window.getComputedStyle(e),
					i = r[Cs + "Delay"].split(", "),
					o = r[Cs + "Duration"].split(", "),
					a = hr(i, o),
					s = r[xs + "Delay"].split(", "),
					l = r[xs + "Duration"].split(", "),
					c = hr(s, l),
					u = 0,
					p = 0; return t === ws ? a > 0 && (n = ws, u = a, p = o.length) : t === Ts ? c > 0 && (n = Ts, u = c, p = l.length) : (u = Math.max(a, c), n = u > 0 ? a > c ? ws : Ts : null, p = n ? n === ws ? o.length : l.length : 0), { type: n, timeout: u, propCount: p, hasTransform: n === ws && Os.test(r[Cs + "Property"]) } }

			function hr(e, t) { for(; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map(function(t, n) { return fr(t) + fr(e[n]) })) }

			function fr(e) { return 1e3 * Number(e.slice(0, -1)) }

			function vr(e, t) { var n = e.elm;
				i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb()); var o = sr(e.data.transition); if(!r(o) && !i(n._enterCb) && 1 === n.nodeType) { for(var a = o.css, s = o.type, c = o.enterClass, u = o.enterToClass, p = o.enterActiveClass, d = o.appearClass, f = o.appearToClass, v = o.appearActiveClass, m = o.beforeEnter, g = o.enter, y = o.afterEnter, b = o.enterCancelled, _ = o.beforeAppear, w = o.appear, T = o.afterAppear, C = o.appearCancelled, E = o.duration, S = la, k = la.$vnode; k && k.parent;) k = k.parent, S = k.context; var O = !S._isMounted || !e.isRootInsert; if(!O || w || "" === w) { var M = O && d ? d : c,
							A = O && v ? v : p,
							P = O && f ? f : u,
							j = O ? _ || m : m,
							L = O && "function" == typeof w ? w : g,
							I = O ? T || y : y,
							$ = O ? C || b : b,
							D = h(l(E) ? E.enter : E),
							N = !1 !== a && !xo,
							R = yr(L),
							z = n._enterCb = x(function() { N && (ur(n, P), ur(n, A)), z.cancelled ? (N && ur(n, M), $ && $(n)) : I && I(n), n._enterCb = null });
						e.data.show || pe(e, "insert", function() { var t = n.parentNode,
								r = t && t._pending && t._pending[e.key];
							r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), L && L(n, z) }), j && j(n), N && (cr(n, M), cr(n, A), lr(function() { cr(n, P), ur(n, M), z.cancelled || R || (gr(D) ? setTimeout(z, D) : pr(n, s, z)) })), e.data.show && (t && t(), L && L(n, z)), N || R || z() } } }

			function mr(e, t) {
				function n() { C.cancelled || (e.data.show || ((o.parentNode._pending || (o.parentNode._pending = {}))[e.key] = e), f && f(o), _ && (cr(o, u), cr(o, d), lr(function() { cr(o, p), ur(o, u), C.cancelled || w || (gr(T) ? setTimeout(C, T) : pr(o, c, C)) })), v && v(o, C), _ || w || C()) } var o = e.elm;
				i(o._enterCb) && (o._enterCb.cancelled = !0, o._enterCb()); var a = sr(e.data.transition); if(r(a) || 1 !== o.nodeType) return t(); if(!i(o._leaveCb)) { var s = a.css,
						c = a.type,
						u = a.leaveClass,
						p = a.leaveToClass,
						d = a.leaveActiveClass,
						f = a.beforeLeave,
						v = a.leave,
						m = a.afterLeave,
						g = a.leaveCancelled,
						y = a.delayLeave,
						b = a.duration,
						_ = !1 !== s && !xo,
						w = yr(v),
						T = h(l(b) ? b.leave : b),
						C = o._leaveCb = x(function() { o.parentNode && o.parentNode._pending && (o.parentNode._pending[e.key] = null), _ && (ur(o, p), ur(o, d)), C.cancelled ? (_ && ur(o, u), g && g(o)) : (t(), m && m(o)), o._leaveCb = null });
					y ? y(n) : n() } }

			function gr(e) { return "number" == typeof e && !isNaN(e) }

			function yr(e) { if(r(e)) return !1; var t = e.fns; return i(t) ? yr(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

			function br(e, t) {!0 !== t.data.show && vr(t) }

			function _r(e, t, n) { wr(e, t, n), (Eo || So) && setTimeout(function() { wr(e, t, n) }, 0) }

			function wr(e, t, n) { var r = t.value,
					i = e.multiple; if(!i || Array.isArray(r)) { for(var o, a, s = 0, l = e.options.length; s < l; s++)
						if(a = e.options[s], i) o = E(r, Cr(a)) > -1, a.selected !== o && (a.selected = o);
						else if(C(Cr(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
					i || (e.selectedIndex = -1) } }

			function Tr(e, t) { return t.every(function(t) { return !C(t, e) }) }

			function Cr(e) { return "_value" in e ? e._value : e.value }

			function Er(e) { e.target.composing = !0 }

			function xr(e) { e.target.composing && (e.target.composing = !1, Sr(e.target, "input")) }

			function Sr(e, t) { var n = document.createEvent("HTMLEvents");
				n.initEvent(t, !0, !0), e.dispatchEvent(n) }

			function kr(e) { return !e.componentInstance || e.data && e.data.transition ? e : kr(e.componentInstance._vnode) }

			function Or(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? Or(Te(t.children)) : e }

			function Mr(e) { var t = {},
					n = e.$options; for(var r in n.propsData) t[r] = e[r]; var i = n._parentListeners; for(var o in i) t[so(o)] = i[o]; return t }

			function Ar(e, t) { if(/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }

			function Pr(e) { for(; e = e.parent;)
					if(e.data.transition) return !0 }

			function jr(e, t) { return t.key === e.key && t.tag === e.tag }

			function Lr(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

			function Ir(e) { e.data.newPos = e.elm.getBoundingClientRect() }

			function $r(e) { var t = e.data.pos,
					n = e.data.newPos,
					r = t.left - n.left,
					i = t.top - n.top; if(r || i) { e.data.moved = !0; var o = e.elm.style;
					o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s" } }

			function Dr(e, t) { var n = t ? Gs(t) : Hs; if(n.test(e)) { for(var r, i, o, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) { i = r.index, i > l && (s.push(o = e.slice(l, i)), a.push(JSON.stringify(o))); var c = Tn(r[1].trim());
						a.push("_s(" + c + ")"), s.push({ "@binding": c }), l = i + r[0].length } return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), { expression: a.join("+"), tokens: s } } }

			function Nr(e, t) { var n = (t.warn, jn(e, "class"));
				n && (e.staticClass = JSON.stringify(n)); var r = Pn(e, "class", !1);
				r && (e.classBinding = r) }

			function Rr(e) { var t = ""; return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t }

			function zr(e, t) { var n = (t.warn, jn(e, "style")); if(n) { e.staticStyle = JSON.stringify(ds(n)) } var r = Pn(e, "style", !1);
				r && (e.styleBinding = r) }

			function Br(e) { var t = ""; return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t }

			function Fr(e, t) { var n = t ? Tl : wl; return e.replace(n, function(e) { return _l[e] }) }

			function Hr(e, t) {
				function n(t) { u += t, e = e.substring(t) }

				function r(e, n, r) { var i, s; if(null == n && (n = u), null == r && (r = u), e && (s = e.toLowerCase()), e)
						for(i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
					else i = 0; if(i >= 0) { for(var l = a.length - 1; l >= i; l--) t.end && t.end(a[l].tag, n, r);
						a.length = i, o = i && a[i - 1].tag } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r)) } for(var i, o, a = [], s = t.expectHTML, l = t.isUnaryTag || po, c = t.canBeLeftOpenTag || po, u = 0; e;) { if(i = e, o && yl(o)) { var p = 0,
							d = o.toLowerCase(),
							h = bl[d] || (bl[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
							f = e.replace(h, function(e, n, r) { return p = r.length, yl(d) || "noscript" === d || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), El(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "" });
						u += e.length - f.length, e = f, r(d, u - p, u) } else { var v = e.indexOf("<"); if(0 === v) { if(il.test(e)) { var m = e.indexOf("--\x3e"); if(m >= 0) { t.shouldKeepComment && t.comment(e.substring(4, m)), n(m + 3); continue } } if(ol.test(e)) { var g = e.indexOf("]>"); if(g >= 0) { n(g + 2); continue } } var y = e.match(rl); if(y) { n(y[0].length); continue } var b = e.match(nl); if(b) { var _ = u;
								n(b[0].length), r(b[1], _, u); continue } var w = function() { var t = e.match(el); if(t) { var r = { tagName: t[1], attrs: [], start: u };
									n(t[0].length); for(var i, o; !(i = e.match(tl)) && (o = e.match(Qs));) n(o[0].length), r.attrs.push(o); if(i) return r.unarySlash = i[1], n(i[0].length), r.end = u, r } }(); if(w) {! function(e) { var n = e.tagName,
										i = e.unarySlash;
									s && ("p" === o && Ks(n) && r(o), c(n) && o === n && r(n)); for(var u = l(n) || !!i, p = e.attrs.length, d = new Array(p), h = 0; h < p; h++) { var f = e.attrs[h];
										al && -1 === f[0].indexOf('""') && ("" === f[3] && delete f[3], "" === f[4] && delete f[4], "" === f[5] && delete f[5]); var v = f[3] || f[4] || f[5] || "",
											m = "a" === n && "href" === f[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
										d[h] = { name: f[1], value: Fr(v, m) } } u || (a.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: d }), o = n), t.start && t.start(n, d, u, e.start, e.end) }(w), El(o, e) && n(1); continue } } var T = void 0,
							C = void 0,
							E = void 0; if(v >= 0) { for(C = e.slice(v); !(nl.test(C) || el.test(C) || il.test(C) || ol.test(C) || (E = C.indexOf("<", 1)) < 0);) v += E, C = e.slice(v);
							T = e.substring(0, v), n(v) } v < 0 && (T = e, e = ""), t.chars && T && t.chars(T) } if(e === i) { t.chars && t.chars(e); break } } r() }

			function Vr(e, t, n) { return { type: 1, tag: e, attrsList: t, attrsMap: li(t), parent: n, children: [] } }

			function Gr(e, t) {
				function n(e) { e.pre && (s = !1), dl(e.tag) && (l = !1); for(var n = 0; n < pl.length; n++) pl[n](e, t) } sl = t.warn || En, dl = t.isPreTag || po, hl = t.mustUseProp || po, fl = t.getTagNamespace || po, cl = xn(t.modules, "transformNode"), ul = xn(t.modules, "preTransformNode"), pl = xn(t.modules, "postTransformNode"), ll = t.delimiters; var r, i, o = [],
					a = !1 !== t.preserveWhitespace,
					s = !1,
					l = !1; return Hr(e, { warn: sl, expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, canBeLeftOpenTag: t.canBeLeftOpenTag, shouldDecodeNewlines: t.shouldDecodeNewlines, shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref, shouldKeepComment: t.comments, start: function(e, a, c) { var u = i && i.ns || fl(e);
						Eo && "svg" === u && (a = pi(a)); var p = Vr(e, a, i);
						u && (p.ns = u), ui(p) && !Io() && (p.forbidden = !0); for(var d = 0; d < ul.length; d++) p = ul[d](p, t) || p; if(s || (Wr(p), p.pre && (s = !0)), dl(p.tag) && (l = !0), s ? Ur(p) : p.processed || (Kr(p), Jr(p), ni(p), Xr(p, t)), r ? o.length || r.if && (p.elseif || p.else) && ti(r, { exp: p.elseif, block: p }) : r = p, i && !p.forbidden)
							if(p.elseif || p.else) Zr(p, i);
							else if(p.slotScope) { i.plain = !1; var h = p.slotTarget || '"default"';
							(i.scopedSlots || (i.scopedSlots = {}))[h] = p } else i.children.push(p), p.parent = i;
						c ? n(p) : (i = p, o.push(p)) }, end: function() { var e = o[o.length - 1],
							t = e.children[e.children.length - 1];
						t && 3 === t.type && " " === t.text && !l && e.children.pop(), o.length -= 1, i = o[o.length - 1], n(e) }, chars: function(e) { if(i && (!Eo || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) { var t = i.children; if(e = l || e.trim() ? ci(i) ? e : Ll(e) : a && t.length ? " " : "") { var n;!s && " " !== e && (n = Dr(e, ll)) ? t.push({ type: 2, expression: n.expression, tokens: n.tokens, text: e }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({ type: 3, text: e }) } } }, comment: function(e) { i.children.push({ type: 3, text: e, isComment: !0 }) } }), r }

			function Wr(e) { null != jn(e, "v-pre") && (e.pre = !0) }

			function Ur(e) { var t = e.attrsList.length; if(t)
					for(var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
				else e.pre || (e.plain = !0) }

			function Xr(e, t) { qr(e), e.plain = !e.key && !e.attrsList.length, Yr(e), ri(e), ii(e); for(var n = 0; n < cl.length; n++) e = cl[n](e, t) || e;
				oi(e) }

			function qr(e) { var t = Pn(e, "key");
				t && (e.key = t) }

			function Yr(e) { var t = Pn(e, "ref");
				t && (e.ref = t, e.refInFor = ai(e)) }

			function Kr(e) { var t; if(t = jn(e, "v-for")) { var n = Qr(t);
					n && _(e, n) } }

			function Qr(e) { var t = e.match(kl); if(t) { var n = {};
					n.for = t[2].trim(); var r = t[1].trim().replace(Ml, ""),
						i = r.match(Ol); return i ? (n.alias = r.replace(Ol, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n } }

			function Jr(e) { var t = jn(e, "v-if"); if(t) e.if = t, ti(e, { exp: t, block: e });
				else { null != jn(e, "v-else") && (e.else = !0); var n = jn(e, "v-else-if");
					n && (e.elseif = n) } }

			function Zr(e, t) { var n = ei(t.children);
				n && n.if && ti(n, { exp: e.elseif, block: e }) }

			function ei(e) { for(var t = e.length; t--;) { if(1 === e[t].type) return e[t];
					e.pop() } }

			function ti(e, t) { e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t) }

			function ni(e) { null != jn(e, "v-once") && (e.once = !0) }

			function ri(e) { if("slot" === e.tag) e.slotName = Pn(e, "name");
				else { var t; "template" === e.tag ? (t = jn(e, "scope"), e.slotScope = t || jn(e, "slot-scope")) : (t = jn(e, "slot-scope")) && (e.slotScope = t); var n = Pn(e, "slot");
					n && (e.slotTarget = '""' === n ? '"default"' : n, "template" === e.tag || e.slotScope || kn(e, "slot", n)) } }

			function ii(e) { var t;
				(t = Pn(e, "is")) && (e.component = t), null != jn(e, "inline-template") && (e.inlineTemplate = !0) }

			function oi(e) { var t, n, r, i, o, a, s, l = e.attrsList; for(t = 0, n = l.length; t < n; t++)
					if(r = i = l[t].name, o = l[t].value, Sl.test(r))
						if(e.hasBindings = !0, a = si(r), a && (r = r.replace(jl, "")), Pl.test(r)) r = r.replace(Pl, ""), o = Tn(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = so(r)) && (r = "innerHTML")), a.camel && (r = so(r)), a.sync && An(e, "update:" + so(r), In(o, "$event"))), s || !e.component && hl(e.tag, e.attrsMap.type, r) ? Sn(e, r, o) : kn(e, r, o);
						else if(xl.test(r)) r = r.replace(xl, ""), An(e, r, o, a, !1, sl);
				else { r = r.replace(Sl, ""); var c = r.match(Al),
						u = c && c[1];
					u && (r = r.slice(0, -(u.length + 1))), Mn(e, r, i, o, u, a) } else { kn(e, r, JSON.stringify(o)), !e.component && "muted" === r && hl(e.tag, e.attrsMap.type, r) && Sn(e, r, "true") } }

			function ai(e) { for(var t = e; t;) { if(void 0 !== t.for) return !0;
					t = t.parent } return !1 }

			function si(e) { var t = e.match(jl); if(t) { var n = {}; return t.forEach(function(e) { n[e.slice(1)] = !0 }), n } }

			function li(e) { for(var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value; return t }

			function ci(e) { return "script" === e.tag || "style" === e.tag }

			function ui(e) { return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type) }

			function pi(e) { for(var t = [], n = 0; n < e.length; n++) { var r = e[n];
					Il.test(r.name) || (r.name = r.name.replace($l, ""), t.push(r)) } return t }

			function di(e, t) { if("input" === e.tag) { var n = e.attrsMap; if(n["v-model"] && (n["v-bind:type"] || n[":type"])) { var r = Pn(e, "type"),
							i = jn(e, "v-if", !0),
							o = i ? "&&(" + i + ")" : "",
							a = null != jn(e, "v-else", !0),
							s = jn(e, "v-else-if", !0),
							l = hi(e);
						Kr(l), On(l, "type", "checkbox"), Xr(l, t), l.processed = !0, l.if = "(" + r + ")==='checkbox'" + o, ti(l, { exp: l.if, block: l }); var c = hi(e);
						jn(c, "v-for", !0), On(c, "type", "radio"), Xr(c, t), ti(l, { exp: "(" + r + ")==='radio'" + o, block: c }); var u = hi(e); return jn(u, "v-for", !0), On(u, ":type", r), Xr(u, t), ti(l, { exp: i, block: u }), a ? l.else = !0 : s && (l.elseif = s), l } } }

			function hi(e) { return Vr(e.tag, e.attrsList.slice(), e.parent) }

			function fi(e, t) { t.value && Sn(e, "textContent", "_s(" + t.value + ")") }

			function vi(e, t) { t.value && Sn(e, "innerHTML", "_s(" + t.value + ")") }

			function mi(e, t) { e && (vl = Bl(t.staticKeys || ""), ml = t.isReservedTag || po, yi(e), bi(e, !1)) }

			function gi(e) { return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : "")) }

			function yi(e) { if(e.static = _i(e), 1 === e.type) { if(!ml(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return; for(var t = 0, n = e.children.length; t < n; t++) { var r = e.children[t];
						yi(r), r.static || (e.static = !1) } if(e.ifConditions)
						for(var i = 1, o = e.ifConditions.length; i < o; i++) { var a = e.ifConditions[i].block;
							yi(a), a.static || (e.static = !1) } } }

			function bi(e, t) { if(1 === e.type) { if((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0); if(e.staticRoot = !1, e.children)
						for(var n = 0, r = e.children.length; n < r; n++) bi(e.children[n], t || !!e.for); if(e.ifConditions)
						for(var i = 1, o = e.ifConditions.length; i < o; i++) bi(e.ifConditions[i].block, t) } }

			function _i(e) { return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || ro(e.tag) || !ml(e.tag) || wi(e) || !Object.keys(e).every(vl)))) }

			function wi(e) { for(; e.parent;) { if(e = e.parent, "template" !== e.tag) return !1; if(e.for) return !0 } return !1 }

			function Ti(e, t, n) { var r = t ? "nativeOn:{" : "on:{"; for(var i in e) r += '"' + i + '":' + Ci(i, e[i]) + ","; return r.slice(0, -1) + "}" }

			function Ci(e, t) { if(!t) return "function(){}"; if(Array.isArray(t)) return "[" + t.map(function(t) { return Ci(e, t) }).join(",") + "]"; var n = Hl.test(t.value),
					r = Fl.test(t.value); if(t.modifiers) { var i = "",
						o = "",
						a = []; for(var s in t.modifiers)
						if(Wl[s]) o += Wl[s], Vl[s] && a.push(s);
						else if("exact" === s) { var l = t.modifiers;
						o += Gl(["ctrl", "shift", "alt", "meta"].filter(function(e) { return !l[e] }).map(function(e) { return "$event." + e + "Key" }).join("||")) } else a.push(s);
					a.length && (i += Ei(a)), o && (i += o); return "function($event){" + i + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}" } return n || r ? t.value : "function($event){" + t.value + "}" }

			function Ei(e) { return "if(!('button' in $event)&&" + e.map(xi).join("&&") + ")return null;" }

			function xi(e) { var t = parseInt(e, 10); if(t) return "$event.keyCode!==" + t; var n = Vl[e]; return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key)" }

			function Si(e, t) { e.wrapListeners = function(e) { return "_g(" + e + "," + t.value + ")" } }

			function ki(e, t) { e.wrapData = function(n) { return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")" } }

			function Oi(e, t) { var n = new Xl(t); return { render: "with(this){return " + (e ? Mi(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns } }

			function Mi(e, t) { if(e.staticRoot && !e.staticProcessed) return Ai(e, t); if(e.once && !e.onceProcessed) return Pi(e, t); if(e.for && !e.forProcessed) return Ii(e, t); if(e.if && !e.ifProcessed) return ji(e, t); if("template" !== e.tag || e.slotTarget) { if("slot" === e.tag) return Xi(e, t); var n; if(e.component) n = qi(e.component, e, t);
					else { var r = e.plain ? void 0 : $i(e, t),
							i = e.inlineTemplate ? null : Fi(e, t, !0);
						n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")" } for(var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n); return n } return Fi(e, t) || "void 0" }

			function Ai(e, t) { return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + Mi(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")" }

			function Pi(e, t) { if(e.onceProcessed = !0, e.if && !e.ifProcessed) return ji(e, t); if(e.staticInFor) { for(var n = "", r = e.parent; r;) { if(r.for) { n = r.key; break } r = r.parent } return n ? "_o(" + Mi(e, t) + "," + t.onceId++ + "," + n + ")" : Mi(e, t) } return Ai(e, t) }

			function ji(e, t, n, r) { return e.ifProcessed = !0, Li(e.ifConditions.slice(), t, n, r) }

			function Li(e, t, n, r) {
				function i(e) { return n ? n(e, t) : e.once ? Pi(e, t) : Mi(e, t) } if(!e.length) return r || "_e()"; var o = e.shift(); return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Li(e, t, n, r) : "" + i(o.block) }

			function Ii(e, t, n, r) { var i = e.for,
					o = e.alias,
					a = e.iterator1 ? "," + e.iterator1 : "",
					s = e.iterator2 ? "," + e.iterator2 : ""; return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Mi)(e, t) + "})" }

			function $i(e, t) { var n = "{",
					r = Di(e, t);
				r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",'); for(var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e); if(e.attrs && (n += "attrs:{" + Yi(e.attrs) + "},"), e.props && (n += "domProps:{" + Yi(e.props) + "},"), e.events && (n += Ti(e.events, !1, t.warn) + ","), e.nativeEvents && (n += Ti(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += Ri(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) { var o = Ni(e, t);
					o && (n += o + ",") } return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n }

			function Di(e, t) { var n = e.directives; if(n) { var r, i, o, a, s = "directives:[",
						l = !1; for(r = 0, i = n.length; r < i; r++) { o = n[r], a = !0; var c = t.directives[o.name];
						c && (a = !!c(e, o, t.warn)), a && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},") } return l ? s.slice(0, -1) + "]" : void 0 } }

			function Ni(e, t) { var n = e.children[0]; if(1 === n.type) { var r = Oi(n, t.options); return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(e) { return "function(){" + e + "}" }).join(",") + "]}" } }

			function Ri(e, t) { return "scopedSlots:_u([" + Object.keys(e).map(function(n) { return zi(n, e[n], t) }).join(",") + "])" }

			function zi(e, t, n) { return t.for && !t.forProcessed ? Bi(e, t, n) : "{key:" + e + ",fn:function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if+"?" + (Fi(t, n) || "undefined") + ":undefined" : Fi(t, n) || "undefined" : Mi(t, n)) + "}}" }

			function Bi(e, t, n) { var r = t.for,
					i = t.alias,
					o = t.iterator1 ? "," + t.iterator1 : "",
					a = t.iterator2 ? "," + t.iterator2 : ""; return t.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + zi(e, t, n) + "})" }

			function Fi(e, t, n, r, i) { var o = e.children; if(o.length) { var a = o[0]; if(1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return(r || Mi)(a, t); var s = n ? Hi(o, t.maybeComponent) : 0,
						l = i || Gi; return "[" + o.map(function(e) { return l(e, t) }).join(",") + "]" + (s ? "," + s : "") } }

			function Hi(e, t) { for(var n = 0, r = 0; r < e.length; r++) { var i = e[r]; if(1 === i.type) { if(Vi(i) || i.ifConditions && i.ifConditions.some(function(e) { return Vi(e.block) })) { n = 2; break }(t(i) || i.ifConditions && i.ifConditions.some(function(e) { return t(e.block) })) && (n = 1) } } return n }

			function Vi(e) { return void 0 !== e.for || "template" === e.tag || "slot" === e.tag }

			function Gi(e, t) { return 1 === e.type ? Mi(e, t) : 3 === e.type && e.isComment ? Ui(e) : Wi(e) }

			function Wi(e) { return "_v(" + (2 === e.type ? e.expression : Ki(JSON.stringify(e.text))) + ")" }

			function Ui(e) { return "_e(" + JSON.stringify(e.text) + ")" }

			function Xi(e, t) { var n = e.slotName || '"default"',
					r = Fi(e, t),
					i = "_t(" + n + (r ? "," + r : ""),
					o = e.attrs && "{" + e.attrs.map(function(e) { return so(e.name) + ":" + e.value }).join(",") + "}",
					a = e.attrsMap["v-bind"]; return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")" }

			function qi(e, t, n) { var r = t.inlineTemplate ? null : Fi(t, n, !0); return "_c(" + e + "," + $i(t, n) + (r ? "," + r : "") + ")" }

			function Yi(e) { for(var t = "", n = 0; n < e.length; n++) { var r = e[n];
					t += '"' + r.name + '":' + Ki(r.value) + "," } return t.slice(0, -1) }

			function Ki(e) { return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") }

			function Qi(e, t) { try { return new Function(e) } catch(n) { return t.push({ err: n, code: e }), T } }

			function Ji(e) { var t = Object.create(null); return function(n, r, i) { r = _({}, r);
					r.warn;
					delete r.warn; var o = r.delimiters ? String(r.delimiters) + n : n; if(t[o]) return t[o]; var a = e(n, r),
						s = {},
						l = []; return s.render = Qi(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function(e) { return Qi(e, l) }), t[o] = s } }

			function Zi(e) { return gl = gl || document.createElement("div"), gl.innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', gl.innerHTML.indexOf("&#10;") > 0 }

			function eo(e) { if(e.outerHTML) return e.outerHTML; var t = document.createElement("div"); return t.appendChild(e.cloneNode(!0)), t.innerHTML }
			/*!
			 * Vue.js v2.5.13
			 * (c) 2014-2017 Evan You
			 * Released under the MIT License.
			 */
			var to = Object.freeze({}),
				no = Object.prototype.toString,
				ro = f("slot,component", !0),
				io = f("key,ref,slot,slot-scope,is"),
				oo = Object.prototype.hasOwnProperty,
				ao = /-(\w)/g,
				so = g(function(e) { return e.replace(ao, function(e, t) { return t ? t.toUpperCase() : "" }) }),
				lo = g(function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }),
				co = /\B([A-Z])/g,
				uo = g(function(e) { return e.replace(co, "-$1").toLowerCase() }),
				po = function(e, t, n) { return !1 },
				ho = function(e) { return e },
				fo = "data-server-rendered",
				vo = ["component", "directive", "filter"],
				mo = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
				go = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: po, isReservedAttr: po, isUnknownElement: po, getTagNamespace: T, parsePlatformTagName: ho, mustUseProp: po, _lifecycleHooks: mo },
				yo = /[^\w.$]/,
				bo = "__proto__" in {},
				_o = "undefined" != typeof window,
				wo = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
				To = wo && WXEnvironment.platform.toLowerCase(),
				Co = _o && window.navigator.userAgent.toLowerCase(),
				Eo = Co && /msie|trident/.test(Co),
				xo = Co && Co.indexOf("msie 9.0") > 0,
				So = Co && Co.indexOf("edge/") > 0,
				ko = Co && Co.indexOf("android") > 0 || "android" === To,
				Oo = Co && /iphone|ipad|ipod|ios/.test(Co) || "ios" === To,
				Mo = (Co && /chrome\/\d+/.test(Co), {}.watch),
				Ao = !1;
			if(_o) try { var Po = {};
				Object.defineProperty(Po, "passive", { get: function() { Ao = !0 } }), window.addEventListener("test-passive", null, Po) } catch(e) {}
			var jo, Lo, Io = function() { return void 0 === jo && (jo = !_o && void 0 !== e && "server" === e.process.env.VUE_ENV), jo },
				$o = _o && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
				Do = "undefined" != typeof Symbol && M(Symbol) && "undefined" != typeof Reflect && M(Reflect.ownKeys);
			Lo = "undefined" != typeof Set && M(Set) ? Set : function() {
				function e() { this.set = Object.create(null) } return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e }();
			var No = T,
				Ro = 0,
				zo = function() { this.id = Ro++, this.subs = [] };
			zo.prototype.addSub = function(e) { this.subs.push(e) }, zo.prototype.removeSub = function(e) { v(this.subs, e) }, zo.prototype.depend = function() { zo.target && zo.target.addDep(this) }, zo.prototype.notify = function() { for(var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, zo.target = null;
			var Bo = [],
				Fo = function(e, t, n, r, i, o, a, s) { this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1 },
				Ho = { child: { configurable: !0 } };
			Ho.child.get = function() { return this.componentInstance }, Object.defineProperties(Fo.prototype, Ho);
			var Vo = function(e) { void 0 === e && (e = ""); var t = new Fo; return t.text = e, t.isComment = !0, t },
				Go = Array.prototype,
				Wo = Object.create(Go);
			["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) { var t = Go[e];
				k(Wo, e, function() { for(var n = [], r = arguments.length; r--;) n[r] = arguments[r]; var i, o = t.apply(this, n),
						a = this.__ob__; switch(e) {
						case "push":
						case "unshift":
							i = n; break;
						case "splice":
							i = n.slice(2) } return i && a.observeArray(i), a.dep.notify(), o }) });
			var Uo = Object.getOwnPropertyNames(Wo),
				Xo = { shouldConvert: !0 },
				qo = function(e) { if(this.value = e, this.dep = new zo, this.vmCount = 0, k(e, "__ob__", this), Array.isArray(e)) {
						(bo ? $ : D)(e, Wo, Uo), this.observeArray(e) } else this.walk(e) };
			qo.prototype.walk = function(e) { for(var t = Object.keys(e), n = 0; n < t.length; n++) R(e, t[n], e[t[n]]) }, qo.prototype.observeArray = function(e) { for(var t = 0, n = e.length; t < n; t++) N(e[t]) };
			var Yo = go.optionMergeStrategies;
			Yo.data = function(e, t, n) { return n ? V(e, t, n) : t && "function" != typeof t ? e : V(e, t) }, mo.forEach(function(e) { Yo[e] = G }), vo.forEach(function(e) { Yo[e + "s"] = W }), Yo.watch = function(e, t, n, r) { if(e === Mo && (e = void 0), t === Mo && (t = void 0), !t) return Object.create(e || null); if(!e) return t; var i = {};
				_(i, e); for(var o in t) { var a = i[o],
						s = t[o];
					a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s] } return i }, Yo.props = Yo.methods = Yo.inject = Yo.computed = function(e, t, n, r) { if(!e) return t; var i = Object.create(null); return _(i, e), t && _(i, t), i }, Yo.provide = V;
			var Ko, Qo, Jo = function(e, t) { return void 0 === t ? e : t },
				Zo = [],
				ea = !1,
				ta = !1;
			if(void 0 !== n && M(n)) Qo = function() { n(ie) };
			else if("undefined" == typeof MessageChannel || !M(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Qo = function() { setTimeout(ie, 0) };
			else { var na = new MessageChannel,
					ra = na.port2;
				na.port1.onmessage = ie, Qo = function() { ra.postMessage(1) } }
			if("undefined" != typeof Promise && M(Promise)) { var ia = Promise.resolve();
				Ko = function() { ia.then(ie), Oo && setTimeout(T) } } else Ko = Qo;
			var oa, aa = new Lo,
				sa = g(function(e) { var t = "&" === e.charAt(0);
					e = t ? e.slice(1) : e; var n = "~" === e.charAt(0);
					e = n ? e.slice(1) : e; var r = "!" === e.charAt(0); return e = r ? e.slice(1) : e, { name: e, once: n, capture: r, passive: t } }),
				la = null,
				ca = [],
				ua = [],
				pa = {},
				da = !1,
				ha = !1,
				fa = 0,
				va = 0,
				ma = function(e, t, n, r, i) { this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++va, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Lo, this.newDepIds = new Lo, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = O(t), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get() };
			ma.prototype.get = function() { A(this); var e, t = this.vm; try { e = this.getter.call(t, t) } catch(e) { if(!this.user) throw e;
					te(e, t, 'getter for watcher "' + this.expression + '"') } finally { this.deep && se(e), P(), this.cleanupDeps() } return e }, ma.prototype.addDep = function(e) { var t = e.id;
				this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this)) }, ma.prototype.cleanupDeps = function() { for(var e = this, t = this.deps.length; t--;) { var n = e.deps[t];
					e.newDepIds.has(n.id) || n.removeSub(e) } var r = this.depIds;
				this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0 }, ma.prototype.update = function() { this.lazy ? this.dirty = !0 : this.sync ? this.run() : He(this) }, ma.prototype.run = function() { if(this.active) { var e = this.get(); if(e !== this.value || l(e) || this.deep) { var t = this.value; if(this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch(e) { te(e, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, ma.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, ma.prototype.depend = function() { for(var e = this, t = this.deps.length; t--;) e.deps[t].depend() }, ma.prototype.teardown = function() { var e = this; if(this.active) { this.vm._isBeingDestroyed || v(this.vm._watchers, this); for(var t = this.deps.length; t--;) e.deps[t].removeSub(e);
					this.active = !1 } };
			var ga = { enumerable: !0, configurable: !0, get: T, set: T },
				ya = { lazy: !0 };
			ht(ft.prototype);
			var ba = { init: function(e, t, n, r) { if(!e.componentInstance || e.componentInstance._isDestroyed) {
							(e.componentInstance = yt(e, la, n, r)).$mount(t ? e.elm : void 0, t) } else if(e.data.keepAlive) { var i = e;
							ba.prepatch(i, i) } }, prepatch: function(e, t) { var n = t.componentOptions;
						je(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children) }, insert: function(e) { var t = e.context,
							n = e.componentInstance;
						n._isMounted || (n._isMounted = !0, De(n, "mounted")), e.data.keepAlive && (t._isMounted ? Be(n) : Ie(n, !0)) }, destroy: function(e) { var t = e.componentInstance;
						t._isDestroyed || (e.data.keepAlive ? $e(t, !0) : t.$destroy()) } },
				_a = Object.keys(ba),
				wa = 1,
				Ta = 2,
				Ca = 0;
			! function(e) { e.prototype._init = function(e) { var t = this;
					t._uid = Ca++, t._isVue = !0, e && e._isComponent ? St(t, e) : t.$options = Y(kt(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, Ae(t), Ce(t), xt(t), De(t, "beforeCreate"), tt(t), Ge(t), et(t), De(t, "created"), t.$options.el && t.$mount(t.$options.el) } }(At),
			function(e) { var t = {};
				t.get = function() { return this._data }; var n = {};
				n.get = function() { return this._props }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = z, e.prototype.$delete = B, e.prototype.$watch = function(e, t, n) { var r = this; if(c(t)) return Ze(r, e, t, n);
					n = n || {}, n.user = !0; var i = new ma(r, e, t, n); return n.immediate && t.call(r, i.value),
						function() { i.teardown() } } }(At),
			function(e) { var t = /^hook:/;
				e.prototype.$on = function(e, n) { var r = this,
						i = this; if(Array.isArray(e))
						for(var o = 0, a = e.length; o < a; o++) r.$on(e[o], n);
					else(i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0); return i }, e.prototype.$once = function(e, t) {
					function n() { r.$off(e, n), t.apply(r, arguments) } var r = this; return n.fn = t, r.$on(e, n), r }, e.prototype.$off = function(e, t) { var n = this,
						r = this; if(!arguments.length) return r._events = Object.create(null), r; if(Array.isArray(e)) { for(var i = 0, o = e.length; i < o; i++) n.$off(e[i], t); return r } var a = r._events[e]; if(!a) return r; if(!t) return r._events[e] = null, r; if(t)
						for(var s, l = a.length; l--;)
							if((s = a[l]) === t || s.fn === t) { a.splice(l, 1); break }
					return r }, e.prototype.$emit = function(e) { var t = this,
						n = t._events[e]; if(n) { n = n.length > 1 ? b(n) : n; for(var r = b(arguments, 1), i = 0, o = n.length; i < o; i++) try { n[i].apply(t, r) } catch(n) { te(n, t, 'event handler for "' + e + '"') } } return t } }(At),
			function(e) { e.prototype._update = function(e, t) { var n = this;
					n._isMounted && De(n, "beforeUpdate"); var r = n.$el,
						i = n._vnode,
						o = la;
					la = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), la = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el) }, e.prototype.$forceUpdate = function() { var e = this;
					e._watcher && e._watcher.update() }, e.prototype.$destroy = function() { var e = this; if(!e._isBeingDestroyed) { De(e, "beforeDestroy"), e._isBeingDestroyed = !0; var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown(); for(var n = e._watchers.length; n--;) e._watchers[n].teardown();
						e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), De(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null) } } }(At),
			function(e) { ht(e.prototype), e.prototype.$nextTick = function(e) { return ae(e, this) }, e.prototype._render = function() { var e = this,
						t = e.$options,
						n = t.render,
						r = t._parentVnode; if(e._isMounted)
						for(var i in e.$slots) { var o = e.$slots[i];
							(o._rendered || o[0] && o[0].elm) && (e.$slots[i] = I(o, !0)) } e.$scopedSlots = r && r.data.scopedSlots || to, e.$vnode = r; var a; try { a = n.call(e._renderProxy, e.$createElement) } catch(t) { te(t, e, "render"), a = e._vnode } return a instanceof Fo || (a = Vo()), a.parent = r, a } }(At);
			var Ea = [String, RegExp, Array],
				xa = { name: "keep-alive", abstract: !0, props: { include: Ea, exclude: Ea, max: [String, Number] }, created: function() { this.cache = Object.create(null), this.keys = [] }, destroyed: function() { var e = this; for(var t in e.cache) Bt(e.cache, t, e.keys) }, watch: { include: function(e) { zt(this, function(t) { return Rt(e, t) }) }, exclude: function(e) { zt(this, function(t) { return !Rt(e, t) }) } }, render: function() { var e = this.$slots.default,
							t = Te(e),
							n = t && t.componentOptions; if(n) { var r = Nt(n),
								i = this,
								o = i.include,
								a = i.exclude; if(o && (!r || !Rt(o, r)) || a && r && Rt(a, r)) return t; var s = this,
								l = s.cache,
								c = s.keys,
								u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
							l[u] ? (t.componentInstance = l[u].componentInstance, v(c, u), c.push(u)) : (l[u] = t, c.push(u), this.max && c.length > parseInt(this.max) && Bt(l, c[0], c, this._vnode)), t.data.keepAlive = !0 } return t || e && e[0] } },
				Sa = { KeepAlive: xa };
			! function(e) { var t = {};
				t.get = function() { return go }, Object.defineProperty(e, "config", t), e.util = { warn: No, extend: _, mergeOptions: Y, defineReactive: R }, e.set = z, e.delete = B, e.nextTick = ae, e.options = Object.create(null), vo.forEach(function(t) { e.options[t + "s"] = Object.create(null) }), e.options._base = e, _(e.options.components, Sa), Pt(e), jt(e), Lt(e), Dt(e) }(At), Object.defineProperty(At.prototype, "$isServer", { get: Io }), Object.defineProperty(At.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), At.version = "2.5.13";
			var ka, Oa, Ma, Aa, Pa, ja, La, Ia, $a, Da = f("style,class"),
				Na = f("input,textarea,option,select,progress"),
				Ra = function(e, t, n) { return "value" === n && Na(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e },
				za = f("contenteditable,draggable,spellcheck"),
				Ba = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
				Fa = "http://www.w3.org/1999/xlink",
				Ha = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
				Va = function(e) { return Ha(e) ? e.slice(6, e.length) : "" },
				Ga = function(e) { return null == e || !1 === e },
				Wa = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
				Ua = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
				Xa = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
				qa = function(e) { return "pre" === e },
				Ya = function(e) { return Ua(e) || Xa(e) },
				Ka = Object.create(null),
				Qa = f("text,number,password,search,email,tel,url"),
				Ja = Object.freeze({ createElement: Qt, createElementNS: Jt, createTextNode: Zt, createComment: en, insertBefore: tn, removeChild: nn, appendChild: rn, parentNode: on, nextSibling: an, tagName: sn, setTextContent: ln, setAttribute: cn }),
				Za = { create: function(e, t) { un(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (un(e, !0), un(t)) }, destroy: function(e) { un(e, !0) } },
				es = new Fo("", {}, []),
				ts = ["create", "activate", "update", "remove", "destroy"],
				ns = { create: fn, update: fn, destroy: function(e) { fn(e, es) } },
				rs = Object.create(null),
				is = [Za, ns],
				os = { create: bn, update: bn },
				as = { create: wn, update: wn },
				ss = /[\w).+\-_$\]]/,
				ls = "__r",
				cs = "__c",
				us = { create: Kn, update: Kn },
				ps = { create: Qn, update: Qn },
				ds = g(function(e) { var t = {},
						n = /;(?![^(]*\))/g,
						r = /:(.+)/; return e.split(n).forEach(function(e) { if(e) { var n = e.split(r);
							n.length > 1 && (t[n[0].trim()] = n[1].trim()) } }), t }),
				hs = /^--/,
				fs = /\s*!important$/,
				vs = function(e, t, n) { if(hs.test(t)) e.style.setProperty(t, n);
					else if(fs.test(n)) e.style.setProperty(t, n.replace(fs, ""), "important");
					else { var r = gs(t); if(Array.isArray(n))
							for(var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
						else e.style[r] = n } },
				ms = ["Webkit", "Moz", "ms"],
				gs = g(function(e) { if($a = $a || document.createElement("div").style, "filter" !== (e = so(e)) && e in $a) return e; for(var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ms.length; n++) { var r = ms[n] + t; if(r in $a) return r } }),
				ys = { create: ir, update: ir },
				bs = g(function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } }),
				_s = _o && !xo,
				ws = "transition",
				Ts = "animation",
				Cs = "transition",
				Es = "transitionend",
				xs = "animation",
				Ss = "animationend";
			_s && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Cs = "WebkitTransition", Es = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xs = "WebkitAnimation", Ss = "webkitAnimationEnd"));
			var ks = _o ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() },
				Os = /\b(transform|all)(,|$)/,
				Ms = _o ? { create: br, activate: br, remove: function(e, t) {!0 !== e.data.show ? mr(e, t) : t() } } : {},
				As = [os, as, us, ps, ys, Ms],
				Ps = As.concat(is),
				js = function(e) {
					function t(e) { return new Fo(P.tagName(e).toLowerCase(), {}, [], void 0, e) }

					function n(e, t) {
						function n() { 0 == --n.listeners && a(e) } return n.listeners = t, n }

					function a(e) { var t = P.parentNode(e);
						i(t) && P.removeChild(t, e) }

					function l(e, t, n, r, a) { if(e.isRootInsert = !a, !c(e, t, n, r)) { var s = e.data,
								l = e.children,
								u = e.tag;
							i(u) ? (e.elm = e.ns ? P.createElementNS(e.ns, u) : P.createElement(u, e), g(e), h(e, l, t), i(s) && m(e, t), d(n, e.elm, r)) : o(e.isComment) ? (e.elm = P.createComment(e.text), d(n, e.elm, r)) : (e.elm = P.createTextNode(e.text), d(n, e.elm, r)) } }

					function c(e, t, n, r) { var a = e.data; if(i(a)) { var s = i(e.componentInstance) && a.keepAlive; if(i(a = a.hook) && i(a = a.init) && a(e, !1, n, r), i(e.componentInstance)) return u(e, t), o(s) && p(e, t, n, r), !0 } }

					function u(e, t) { i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), g(e)) : (un(e), t.push(e)) }

					function p(e, t, n, r) { for(var o, a = e; a.componentInstance;)
							if(a = a.componentInstance._vnode, i(o = a.data) && i(o = o.transition)) { for(o = 0; o < M.activate.length; ++o) M.activate[o](es, a);
								t.push(a); break }
						d(n, e.elm, r) }

					function d(e, t, n) { i(e) && (i(n) ? n.parentNode === e && P.insertBefore(e, t, n) : P.appendChild(e, t)) }

					function h(e, t, n) { if(Array.isArray(t))
							for(var r = 0; r < t.length; ++r) l(t[r], n, e.elm, null, !0);
						else s(e.text) && P.appendChild(e.elm, P.createTextNode(String(e.text))) }

					function v(e) { for(; e.componentInstance;) e = e.componentInstance._vnode; return i(e.tag) }

					function m(e, t) { for(var n = 0; n < M.create.length; ++n) M.create[n](es, e);
						k = e.data.hook, i(k) && (i(k.create) && k.create(es, e), i(k.insert) && t.push(e)) }

					function g(e) { var t; if(i(t = e.fnScopeId)) P.setAttribute(e.elm, t, "");
						else
							for(var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && P.setAttribute(e.elm, t, ""), n = n.parent;
						i(t = la) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && P.setAttribute(e.elm, t, "") }

					function y(e, t, n, r, i, o) { for(; r <= i; ++r) l(n[r], o, e, t) }

					function b(e) { var t, n, r = e.data; if(i(r))
							for(i(t = r.hook) && i(t = t.destroy) && t(e), t = 0; t < M.destroy.length; ++t) M.destroy[t](e); if(i(t = e.children))
							for(n = 0; n < e.children.length; ++n) b(e.children[n]) }

					function _(e, t, n, r) { for(; n <= r; ++n) { var o = t[n];
							i(o) && (i(o.tag) ? (w(o), b(o)) : a(o.elm)) } }

					function w(e, t) { if(i(t) || i(e.data)) { var r, o = M.remove.length + 1; for(i(t) ? t.listeners += o : t = n(e.elm, o), i(r = e.componentInstance) && i(r = r._vnode) && i(r.data) && w(r, t), r = 0; r < M.remove.length; ++r) M.remove[r](e, t);
							i(r = e.data.hook) && i(r = r.remove) ? r(e, t) : t() } else a(e.elm) }

					function T(e, t, n, o, a) { for(var s, c, u, p, d = 0, h = 0, f = t.length - 1, v = t[0], m = t[f], g = n.length - 1, b = n[0], w = n[g], T = !a; d <= f && h <= g;) r(v) ? v = t[++d] : r(m) ? m = t[--f] : pn(v, b) ? (E(v, b, o), v = t[++d], b = n[++h]) : pn(m, w) ? (E(m, w, o), m = t[--f], w = n[--g]) : pn(v, w) ? (E(v, w, o), T && P.insertBefore(e, v.elm, P.nextSibling(m.elm)), v = t[++d], w = n[--g]) : pn(m, b) ? (E(m, b, o), T && P.insertBefore(e, m.elm, v.elm), m = t[--f], b = n[++h]) : (r(s) && (s = hn(t, d, f)), c = i(b.key) ? s[b.key] : C(b, t, d, f), r(c) ? l(b, o, e, v.elm) : (u = t[c], pn(u, b) ? (E(u, b, o), t[c] = void 0, T && P.insertBefore(e, u.elm, v.elm)) : l(b, o, e, v.elm)), b = n[++h]);
						d > f ? (p = r(n[g + 1]) ? null : n[g + 1].elm, y(e, p, n, h, g, o)) : h > g && _(e, t, d, f) }

					function C(e, t, n, r) { for(var o = n; o < r; o++) { var a = t[o]; if(i(a) && pn(e, a)) return o } }

					function E(e, t, n, a) { if(e !== t) { var s = t.elm = e.elm; if(o(e.isAsyncPlaceholder)) return void(i(t.asyncFactory.resolved) ? S(e.elm, t, n) : t.isAsyncPlaceholder = !0); if(o(t.isStatic) && o(e.isStatic) && t.key === e.key && (o(t.isCloned) || o(t.isOnce))) return void(t.componentInstance = e.componentInstance); var l, c = t.data;
							i(c) && i(l = c.hook) && i(l = l.prepatch) && l(e, t); var u = e.children,
								p = t.children; if(i(c) && v(t)) { for(l = 0; l < M.update.length; ++l) M.update[l](e, t);
								i(l = c.hook) && i(l = l.update) && l(e, t) } r(t.text) ? i(u) && i(p) ? u !== p && T(s, u, p, n, a) : i(p) ? (i(e.text) && P.setTextContent(s, ""), y(s, null, p, 0, p.length - 1, n)) : i(u) ? _(s, u, 0, u.length - 1) : i(e.text) && P.setTextContent(s, "") : e.text !== t.text && P.setTextContent(s, t.text), i(c) && i(l = c.hook) && i(l = l.postpatch) && l(e, t) } }

					function x(e, t, n) { if(o(n) && i(e.parent)) e.parent.data.pendingInsert = t;
						else
							for(var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]) }

					function S(e, t, n, r) { var a, s = t.tag,
							l = t.data,
							c = t.children; if(r = r || l && l.pre, t.elm = e, o(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0; if(i(l) && (i(a = l.hook) && i(a = a.init) && a(t, !0), i(a = t.componentInstance))) return u(t, n), !0; if(i(s)) { if(i(c))
								if(e.hasChildNodes())
									if(i(a = l) && i(a = a.domProps) && i(a = a.innerHTML)) { if(a !== e.innerHTML) return !1 } else { for(var p = !0, d = e.firstChild, f = 0; f < c.length; f++) { if(!d || !S(d, c[f], n, r)) { p = !1; break } d = d.nextSibling } if(!p || d) return !1 } else h(t, c, n); if(i(l)) { var v = !1; for(var g in l)
									if(!j(g)) { v = !0, m(t, n); break }!v && l.class && se(l.class) } } else e.data !== t.text && (e.data = t.text); return !0 } var k, O, M = {},
						A = e.modules,
						P = e.nodeOps; for(k = 0; k < ts.length; ++k)
						for(M[ts[k]] = [], O = 0; O < A.length; ++O) i(A[O][ts[k]]) && M[ts[k]].push(A[O][ts[k]]); var j = f("attrs,class,staticClass,staticStyle,key"); return function(e, n, a, s, c, u) { if(r(n)) return void(i(e) && b(e)); var p = !1,
							d = []; if(r(e)) p = !0, l(n, d, c, u);
						else { var h = i(e.nodeType); if(!h && pn(e, n)) E(e, n, d, s);
							else { if(h) { if(1 === e.nodeType && e.hasAttribute(fo) && (e.removeAttribute(fo), a = !0), o(a) && S(e, n, d)) return x(n, d, !0), e;
									e = t(e) } var f = e.elm,
									m = P.parentNode(f); if(l(n, d, f._leaveCb ? null : m, P.nextSibling(f)), i(n.parent))
									for(var g = n.parent, y = v(n); g;) { for(var w = 0; w < M.destroy.length; ++w) M.destroy[w](g); if(g.elm = n.elm, y) { for(var T = 0; T < M.create.length; ++T) M.create[T](es, g); var C = g.data.hook.insert; if(C.merged)
												for(var k = 1; k < C.fns.length; k++) C.fns[k]() } else un(g);
										g = g.parent } i(m) ? _(m, [e], 0, 0) : i(e.tag) && b(e) } } return x(n, d, p), n.elm } }({ nodeOps: Ja, modules: Ps });
			xo && document.addEventListener("selectionchange", function() { var e = document.activeElement;
				e && e.vmodel && Sr(e, "input") });
			var Ls = { inserted: function(e, t, n, r) { "select" === n.tag ? (r.elm && !r.elm._vOptions ? pe(n, "postpatch", function() { Ls.componentUpdated(e, t, n) }) : _r(e, t, n.context), e._vOptions = [].map.call(e.options, Cr)) : ("textarea" === n.tag || Qa(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", xr), ko || (e.addEventListener("compositionstart", Er), e.addEventListener("compositionend", xr)), xo && (e.vmodel = !0))) }, componentUpdated: function(e, t, n) { if("select" === n.tag) { _r(e, t, n.context); var r = e._vOptions,
								i = e._vOptions = [].map.call(e.options, Cr); if(i.some(function(e, t) { return !C(e, r[t]) })) {
								(e.multiple ? t.value.some(function(e) { return Tr(e, i) }) : t.value !== t.oldValue && Tr(t.value, i)) && Sr(e, "change") } } } },
				Is = { bind: function(e, t, n) { var r = t.value;
						n = kr(n); var i = n.data && n.data.transition,
							o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
						r && i ? (n.data.show = !0, vr(n, function() { e.style.display = o })) : e.style.display = r ? o : "none" }, update: function(e, t, n) { var r = t.value;
						r !== t.oldValue && (n = kr(n), n.data && n.data.transition ? (n.data.show = !0, r ? vr(n, function() { e.style.display = e.__vOriginalDisplay }) : mr(n, function() { e.style.display = "none" })) : e.style.display = r ? e.__vOriginalDisplay : "none") }, unbind: function(e, t, n, r, i) { i || (e.style.display = e.__vOriginalDisplay) } },
				$s = { model: Ls, show: Is },
				Ds = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
				Ns = { name: "transition", props: Ds, abstract: !0, render: function(e) { var t = this,
							n = this.$slots.default; if(n && (n = n.filter(function(e) { return e.tag || we(e) }), n.length)) { var r = this.mode,
								i = n[0]; if(Pr(this.$vnode)) return i; var o = Or(i); if(!o) return i; if(this._leaving) return Ar(e, i); var a = "__transition-" + this._uid + "-";
							o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key; var l = (o.data || (o.data = {})).transition = Mr(this),
								c = this._vnode,
								u = Or(c); if(o.data.directives && o.data.directives.some(function(e) { return "show" === e.name }) && (o.data.show = !0), u && u.data && !jr(o, u) && !we(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) { var p = u.data.transition = _({}, l); if("out-in" === r) return this._leaving = !0, pe(p, "afterLeave", function() { t._leaving = !1, t.$forceUpdate() }), Ar(e, i); if("in-out" === r) { if(we(o)) return c; var d, h = function() { d() };
									pe(l, "afterEnter", h), pe(l, "enterCancelled", h), pe(p, "delayLeave", function(e) { d = e }) } } return i } } },
				Rs = _({ tag: String, moveClass: String }, Ds);
			delete Rs.mode;
			var zs = { props: Rs, render: function(e) { for(var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Mr(this), s = 0; s < i.length; s++) { var l = i[s]; if(l.tag)
								if(null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a;
								else; } if(r) { for(var c = [], u = [], p = 0; p < r.length; p++) { var d = r[p];
								d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d) } this.kept = e(t, null, c), this.removed = u } return e(t, null, o) }, beforeUpdate: function() { this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept }, updated: function() { var e = this.prevChildren,
							t = this.moveClass || (this.name || "v") + "-move";
						e.length && this.hasMove(e[0].elm, t) && (e.forEach(Lr), e.forEach(Ir), e.forEach($r), this._reflow = document.body.offsetHeight, e.forEach(function(e) { if(e.data.moved) { var n = e.elm,
									r = n.style;
								cr(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Es, n._moveCb = function e(r) { r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Es, e), n._moveCb = null, ur(n, t)) }) } })) }, methods: { hasMove: function(e, t) { if(!_s) return !1; if(this._hasMove) return this._hasMove; var n = e.cloneNode();
							e._transitionClasses && e._transitionClasses.forEach(function(e) { ar(n, e) }), or(n, t), n.style.display = "none", this.$el.appendChild(n); var r = dr(n); return this.$el.removeChild(n), this._hasMove = r.hasTransform } } },
				Bs = { Transition: Ns, TransitionGroup: zs };
			At.config.mustUseProp = Ra, At.config.isReservedTag = Ya, At.config.isReservedAttr = Da, At.config.getTagNamespace = qt, At.config.isUnknownElement = Yt, _(At.options.directives, $s), _(At.options.components, Bs), At.prototype.__patch__ = _o ? js : T, At.prototype.$mount = function(e, t) { return e = e && _o ? Kt(e) : void 0, Pe(this, e, t) }, At.nextTick(function() { go.devtools && $o && $o.emit("init", At) }, 0);
			var Fs, Hs = /\{\{((?:.|\n)+?)\}\}/g,
				Vs = /[-.*+?^${}()|[\]\/\\]/g,
				Gs = g(function(e) { var t = e[0].replace(Vs, "\\$&"),
						n = e[1].replace(Vs, "\\$&"); return new RegExp(t + "((?:.|\\n)+?)" + n, "g") }),
				Ws = { staticKeys: ["staticClass"], transformNode: Nr, genData: Rr },
				Us = { staticKeys: ["staticStyle"], transformNode: zr, genData: Br },
				Xs = { decode: function(e) { return Fs = Fs || document.createElement("div"), Fs.innerHTML = e, Fs.textContent } },
				qs = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
				Ys = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
				Ks = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
				Qs = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
				Js = "[a-zA-Z_][\\w\\-\\.]*",
				Zs = "((?:" + Js + "\\:)?" + Js + ")",
				el = new RegExp("^<" + Zs),
				tl = /^\s*(\/?)>/,
				nl = new RegExp("^<\\/" + Zs + "[^>]*>"),
				rl = /^<!DOCTYPE [^>]+>/i,
				il = /^<!--/,
				ol = /^<!\[/,
				al = !1;
			"x".replace(/x(.)?/g, function(e, t) { al = "" === t });
			var sl, ll, cl, ul, pl, dl, hl, fl, vl, ml, gl, yl = f("script,style,textarea", !0),
				bl = {},
				_l = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t" },
				wl = /&(?:lt|gt|quot|amp);/g,
				Tl = /&(?:lt|gt|quot|amp|#10|#9);/g,
				Cl = f("pre,textarea", !0),
				El = function(e, t) { return e && Cl(e) && "\n" === t[0] },
				xl = /^@|^v-on:/,
				Sl = /^v-|^@|^:/,
				kl = /(.*?)\s+(?:in|of)\s+(.*)/,
				Ol = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
				Ml = /^\(|\)$/g,
				Al = /:(.*)$/,
				Pl = /^:|^v-bind:/,
				jl = /\.[^.]+/g,
				Ll = g(Xs.decode),
				Il = /^xmlns:NS\d+/,
				$l = /^NS\d+:/,
				Dl = { preTransformNode: di },
				Nl = [Ws, Us, Dl],
				Rl = { model: Fn, text: fi, html: vi },
				zl = { expectHTML: !0, modules: Nl, directives: Rl, isPreTag: qa, isUnaryTag: qs, mustUseProp: Ra, canBeLeftOpenTag: Ys, isReservedTag: Ya, getTagNamespace: qt, staticKeys: function(e) { return e.reduce(function(e, t) { return e.concat(t.staticKeys || []) }, []).join(",") }(Nl) },
				Bl = g(gi),
				Fl = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
				Hl = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
				Vl = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
				Gl = function(e) { return "if(" + e + ")return null;" },
				Wl = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: Gl("$event.target !== $event.currentTarget"), ctrl: Gl("!$event.ctrlKey"), shift: Gl("!$event.shiftKey"), alt: Gl("!$event.altKey"), meta: Gl("!$event.metaKey"), left: Gl("'button' in $event && $event.button !== 0"), middle: Gl("'button' in $event && $event.button !== 1"), right: Gl("'button' in $event && $event.button !== 2") },
				Ul = { on: Si, bind: ki, cloak: T },
				Xl = function(e) { this.options = e, this.warn = e.warn || En, this.transforms = xn(e.modules, "transformCode"), this.dataGenFns = xn(e.modules, "genData"), this.directives = _(_({}, Ul), e.directives); var t = e.isReservedTag || po;
					this.maybeComponent = function(e) { return !t(e.tag) }, this.onceId = 0, this.staticRenderFns = [] },
				ql = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function(e) { return function(t) {
						function n(n, r) { var i = Object.create(t),
								o = [],
								a = []; if(i.warn = function(e, t) {
									(t ? a : o).push(e) }, r) { r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = _(Object.create(t.directives || null), r.directives)); for(var s in r) "modules" !== s && "directives" !== s && (i[s] = r[s]) } var l = e(n, i); return l.errors = o, l.tips = a, l } return { compile: n, compileToFunctions: Ji(n) } } }(function(e, t) { var n = Gr(e.trim(), t);!1 !== t.optimize && mi(n, t); var r = Oi(n, t); return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns } })),
				Yl = ql(zl),
				Kl = Yl.compileToFunctions,
				Ql = !!_o && Zi(!1),
				Jl = !!_o && Zi(!0),
				Zl = g(function(e) { var t = Kt(e); return t && t.innerHTML }),
				ec = At.prototype.$mount;
			At.prototype.$mount = function(e, t) { if((e = e && Kt(e)) === document.body || e === document.documentElement) return this; var n = this.$options; if(!n.render) { var r = n.template; if(r)
						if("string" == typeof r) "#" === r.charAt(0) && (r = Zl(r));
						else { if(!r.nodeType) return this;
							r = r.innerHTML } else e && (r = eo(e)); if(r) { var i = Kl(r, { shouldDecodeNewlines: Ql, shouldDecodeNewlinesForHref: Jl, delimiters: n.delimiters, comments: n.comments }, this),
							o = i.render,
							a = i.staticRenderFns;
						n.render = o, n.staticRenderFns = a } } return ec.call(this, e, t) }, At.compile = Kl, t.a = At
		}).call(t, n("DuR2"), n("162o").setImmediate)
	},
	"77Pl": function(e, t, n) { var r = n("EqjI");
		e.exports = function(e) { if(!r(e)) throw TypeError(e + " is not an object!"); return e } },
	"7GwW": function(e, t, n) { "use strict"; var r = n("cGG2"),
			i = n("21It"),
			o = n("DQCr"),
			a = n("oJlt"),
			s = n("GHBc"),
			l = n("FtD3"),
			c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n("thJu");
		e.exports = function(e) { return new Promise(function(t, u) { var p = e.data,
					d = e.headers;
				r.isFormData(p) && delete d["Content-Type"]; var h = new XMLHttpRequest,
					f = "onreadystatechange",
					v = !1; if("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(e.url) || (h = new window.XDomainRequest, f = "onload", v = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) { var m = e.auth.username || "",
						g = e.auth.password || "";
					d.Authorization = "Basic " + c(m + ":" + g) } if(h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[f] = function() { if(h && (4 === h.readyState || v) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) { var n = "getAllResponseHeaders" in h ? a(h.getAllResponseHeaders()) : null,
								r = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
								o = { data: r, status: 1223 === h.status ? 204 : h.status, statusText: 1223 === h.status ? "No Content" : h.statusText, headers: n, config: e, request: h };
							i(t, u, o), h = null } }, h.onerror = function() { u(l("Network Error", e, null, h)), h = null }, h.ontimeout = function() { u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null }, r.isStandardBrowserEnv()) { var y = n("p1b6"),
						b = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
					b && (d[e.xsrfHeaderName] = b) } if("setRequestHeader" in h && r.forEach(d, function(e, t) { void 0 === p && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e) }), e.withCredentials && (h.withCredentials = !0), e.responseType) try { h.responseType = e.responseType } catch(t) { if("json" !== e.responseType) throw t }
				"function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { h && (h.abort(), u(e), h = null) }), void 0 === p && (p = null), h.send(p) }) } },
	"7KvD": function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) },
	"7QTg": function(e, t, n) {! function(t, r) { e.exports = r(n("gsqX")) }(0, function(e) { return function(e) {
				function t(r) { if(n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports } var n = {}; return t.m = e, t.c = n, t.i = function(e) { return e }, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/", t(t.s = 4) }([function(t, n) { t.exports = e }, function(e, t) { e.exports = function(e, t, n, r, i, o) { var a, s = e = e || {},
						l = typeof e.default; "object" !== l && "function" !== l || (a = e, s = e.default); var c = "function" == typeof s ? s.options : s;
					t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = i); var u; if(o ? (u = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o) }, c._ssrRegister = u) : r && (u = r), u) { var p = c.functional,
							d = p ? c.render : c.beforeCreate;
						p ? (c._injectStyles = u, c.render = function(e, t) { return u.call(t), d(e, t) }) : c.beforeCreate = d ? [].concat(d, u) : [u] } return { esModule: a, exports: s, options: c } } }, function(e, t, n) { "use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(5),
					i = n.n(r),
					o = n(8),
					a = n(1),
					s = a(i.a, o.a, !1, null, null, null);
				t.default = s.exports }, function(e, t, n) { "use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(6),
					i = n.n(r),
					o = n(7),
					a = n(1),
					s = a(i.a, o.a, !1, null, null, null);
				t.default = s.exports }, function(e, t, n) { "use strict";

				function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.install = t.swiperSlide = t.swiper = t.Swiper = void 0; var i = n(0),
					o = r(i),
					a = n(2),
					s = r(a),
					l = n(3),
					c = r(l),
					u = window.Swiper || o.default,
					p = c.default,
					d = s.default,
					h = function(e, t) { t && (c.default.props.globalOptions.default = function() { return t }), e.component(c.default.name, c.default), e.component(s.default.name, s.default) },
					f = { Swiper: u, swiper: p, swiperSlide: d, install: h };
				t.default = f, t.Swiper = u, t.swiper = p, t.swiperSlide = d, t.install = h }, function(e, t, n) { "use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "swiper-slide", data: function() { return { slideClass: "swiper-slide" } }, ready: function() { this.update() }, mounted: function() { this.update(), this.$parent && this.$parent.options && this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass) }, updated: function() { this.update() }, attached: function() { this.update() }, methods: { update: function() { this.$parent && this.$parent.swiper && this.$parent.update() } } } }, function(e, t, n) { "use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
					i = function(e) { return e && e.__esModule ? e : { default: e } }(r),
					o = window.Swiper || i.default; "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function(e, t) { if(null == e) throw new TypeError("Cannot convert undefined or null to object"); for(var n = Object(e), r = 1; r < arguments.length; r++) { var i = arguments[r]; if(null != i)
								for(var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]) } return n }, writable: !0, configurable: !0 }); var a = ["beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize"];
				t.default = { name: "swiper", props: { options: { type: Object, default: function() { return {} } }, globalOptions: { type: Object, required: !1, default: function() { return {} } } }, data: function() { return { swiper: null, classes: { wrapperClass: "swiper-wrapper" } } }, ready: function() { this.swiper || this.mountInstance() }, mounted: function() { if(!this.swiper) { var e = !1; for(var t in this.classes) this.classes.hasOwnProperty(t) && this.options[t] && (e = !0, this.classes[t] = this.options[t]);
							e ? this.$nextTick(this.mountInstance) : this.mountInstance() } }, activated: function() { this.update() }, updated: function() { this.update() }, beforeDestroy: function() { this.$nextTick(function() { this.swiper && (this.swiper.destroy && this.swiper.destroy(), delete this.swiper) }) }, methods: { update: function() { this.swiper && (this.swiper.update && this.swiper.update(), this.swiper.navigation && this.swiper.navigation.update(), this.swiper.pagination && this.swiper.pagination.render(), this.swiper.pagination && this.swiper.pagination.update()) }, mountInstance: function() { var e = Object.assign({}, this.globalOptions, this.options);
							this.swiper = new o(this.$el, e), this.bindEvents(), this.$emit("ready", this.swiper) }, bindEvents: function() { var e = this,
								t = this;
							a.forEach(function(n) { e.swiper.on(n, function() { t.$emit.apply(t, [n].concat(Array.prototype.slice.call(arguments))), t.$emit.apply(t, [n.replace(/([A-Z])/g, "-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments))) }) }) } } } }, function(e, t, n) { "use strict"; var r = function() { var e = this,
							t = e.$createElement,
							n = e._self._c || t; return n("div", { staticClass: "swiper-container" }, [e._t("parallax-bg"), e._v(" "), n("div", { class: e.classes.wrapperClass }, [e._t("default")], 2), e._v(" "), e._t("pagination"), e._v(" "), e._t("button-prev"), e._v(" "), e._t("button-next"), e._v(" "), e._t("scrollbar")], 2) },
					i = [],
					o = { render: r, staticRenderFns: i };
				t.a = o }, function(e, t, n) { "use strict"; var r = function() { var e = this,
							t = e.$createElement; return(e._self._c || t)("div", { class: e.slideClass }, [e._t("default")], 2) },
					i = [],
					o = { render: r, staticRenderFns: i };
				t.a = o }]) }) },
	"7UMu": function(e, t, n) { var r = n("R9M2");
		e.exports = Array.isArray || function(e) { return "Array" == r(e) } },
	"880/": function(e, t, n) { e.exports = n("hJx8") },
	"94VQ": function(e, t, n) { "use strict"; var r = n("Yobk"),
			i = n("X8DO"),
			o = n("e6n0"),
			a = {};
		n("hJx8")(a, n("dSzd")("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(a, { next: i(1, n) }), o(e, t + " Iterator") } },
	"9bBU": function(e, t, n) { n("mClu"); var r = n("FeBl").Object;
		e.exports = function(e, t, n) { return r.defineProperty(e, t, n) } },
	BwfY: function(e, t, n) { n("fWfb"), n("M6a0"), n("OYls"), n("QWe/"), e.exports = n("FeBl").Symbol },
	C4MV: function(e, t, n) { e.exports = { default: n("9bBU"), __esModule: !0 } },
	D2L2: function(e, t) { var n = {}.hasOwnProperty;
		e.exports = function(e, t) { return n.call(e, t) } },
	DQCr: function(e, t, n) { "use strict";

		function r(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var i = n("cGG2");
		e.exports = function(e, t, n) { if(!t) return e; var o; if(n) o = n(t);
			else if(i.isURLSearchParams(t)) o = t.toString();
			else { var a = [];
				i.forEach(t, function(e, t) { null !== e && void 0 !== e && (i.isArray(e) && (t += "[]"), i.isArray(e) || (e = [e]), i.forEach(e, function(e) { i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e)) })) }), o = a.join("&") } return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e } },
	Dd8w: function(e, t, n) { "use strict";
		t.__esModule = !0; var r = n("woOf"),
			i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
		t.default = i.default || function(e) { for(var t = 1; t < arguments.length; t++) { var n = arguments[t]; for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e } },
	Dia2: function(e, t, n) {
		/**
		 * @license
		 * Video.js 6.11.0 <http://videojs.com/>
		 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
		 * Available under Apache License Version 2.0
		 * <https://github.com/videojs/video.js/blob/master/LICENSE>
		 *
		 * Includes vtt.js <https://github.com/mozilla/vtt.js>
		 * Available under Apache License Version 2.0
		 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
		 */
		function r(e) { return e && "object" == typeof e && "default" in e ? e.default : e }

		function i(e, t) { ft(e).forEach(function(n) { return t(e[n], n) }) }

		function o(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return ft(e).reduce(function(n, r) { return t(n, e[r], r) }, n) }

		function a(e) { for(var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return Object.assign ? Object.assign.apply(Object, [e].concat(n)) : (n.forEach(function(t) { t && i(t, function(t, n) { e[n] = t }) }), e) }

		function s(e) { return !!e && "object" === (void 0 === e ? "undefined" : lt(e)) }

		function l(e) { return s(e) && "[object Object]" === ht.call(e) && e.constructor === Object }

		function c(e, t) { if(!e || !t) return ""; if("function" == typeof je.getComputedStyle) { var n = je.getComputedStyle(e); return n ? n[t] : "" } return e.currentStyle[t] || "" }

		function u(e) { return "string" == typeof e && /\S/.test(e) }

		function p(e) { if(/\s/.test(e)) throw new Error("class has illegal whitespace characters") }

		function d(e) { return new RegExp("(^|\\s)" + e + "($|\\s)") }

		function h() { return Le === je.document && void 0 !== Le.createElement }

		function f(e) { return s(e) && 1 === e.nodeType }

		function v() { try { return je.parent !== je.self } catch(e) { return !0 } }

		function m(e) { return function(t, n) { if(!u(t)) return Le[e](null);
				u(n) && (n = Le.querySelector(n)); var r = f(n) ? n : Le; return r[e] && r[e](t) } }

		function g() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				r = arguments[3],
				i = Le.createElement(e); return Object.getOwnPropertyNames(t).forEach(function(e) { var n = t[e]; - 1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (bt.warn(Ie(_t, e, n)), i.setAttribute(e, n)) : "textContent" === e ? y(i, n) : i[e] = n }), Object.getOwnPropertyNames(n).forEach(function(e) { i.setAttribute(e, n[e]) }), r && N(i, r), i }

		function y(e, t) { return void 0 === e.textContent ? e.innerText = t : e.textContent = t, e }

		function b(e, t) { t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e) }

		function _(e, t) { return p(t), e.classList ? e.classList.contains(t) : d(t).test(e.className) }

		function w(e, t) { return e.classList ? e.classList.add(t) : _(e, t) || (e.className = (e.className + " " + t).trim()), e }

		function T(e, t) { return e.classList ? e.classList.remove(t) : (p(t), e.className = e.className.split(/\s+/).filter(function(e) { return e !== t }).join(" ")), e }

		function C(e, t, n) { var r = _(e, t); if("function" == typeof n && (n = n(e, t)), "boolean" != typeof n && (n = !r), n !== r) return n ? w(e, t) : T(e, t), e }

		function E(e, t) { Object.getOwnPropertyNames(t).forEach(function(n) { var r = t[n];
				null === r || void 0 === r || !1 === r ? e.removeAttribute(n) : e.setAttribute(n, !0 === r ? "" : r) }) }

		function x(e) { var t = {}; if(e && e.attributes && e.attributes.length > 0)
				for(var n = e.attributes, r = n.length - 1; r >= 0; r--) { var i = n[r].name,
						o = n[r].value; "boolean" != typeof e[i] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + i + ",") || (o = null !== o), t[i] = o }
			return t }

		function S(e, t) { return e.getAttribute(t) }

		function k(e, t, n) { e.setAttribute(t, n) }

		function O(e, t) { e.removeAttribute(t) }

		function M() { Le.body.focus(), Le.onselectstart = function() { return !1 } }

		function A() { Le.onselectstart = function() { return !0 } }

		function P(e) { if(e && e.getBoundingClientRect && e.parentNode) { var t = e.getBoundingClientRect(),
					n = {}; return ["bottom", "height", "left", "right", "top", "width"].forEach(function(e) { void 0 !== t[e] && (n[e] = t[e]) }), n.height || (n.height = parseFloat(c(e, "height"))), n.width || (n.width = parseFloat(c(e, "width"))), n } }

		function j(e) { var t = void 0; if(e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return { left: 0, top: 0 }; var n = Le.documentElement,
				r = Le.body,
				i = n.clientLeft || r.clientLeft || 0,
				o = je.pageXOffset || r.scrollLeft,
				a = t.left + o - i,
				s = n.clientTop || r.clientTop || 0,
				l = je.pageYOffset || r.scrollTop,
				c = t.top + l - s; return { left: Math.round(a), top: Math.round(c) } }

		function L(e, t) { var n = {},
				r = j(e),
				i = e.offsetWidth,
				o = e.offsetHeight,
				a = r.top,
				s = r.left,
				l = t.pageY,
				c = t.pageX; return t.changedTouches && (c = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (a - l + o) / o)), n.x = Math.max(0, Math.min(1, (c - s) / i)), n }

		function I(e) { return s(e) && 3 === e.nodeType }

		function $(e) { for(; e.firstChild;) e.removeChild(e.firstChild); return e }

		function D(e) { return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function(e) { return "function" == typeof e && (e = e()), f(e) || I(e) ? e : "string" == typeof e && /\S/.test(e) ? Le.createTextNode(e) : void 0 }).filter(function(e) { return e }) }

		function N(e, t) { return D(t).forEach(function(t) { return e.appendChild(t) }), e }

		function R(e, t) { return N($(e), t) }

		function z(e) { return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || (9 === nt || 0 === e.button && 1 === e.buttons)) }

		function B() { return Et++ }

		function F(e) { var t = e[St]; return t || (t = e[St] = B()), xt[t] || (xt[t] = {}), xt[t] }

		function H(e) { var t = e[St]; return !!t && !!Object.getOwnPropertyNames(xt[t]).length }

		function V(e) { var t = e[St]; if(t) { delete xt[t]; try { delete e[St] } catch(t) { e.removeAttribute ? e.removeAttribute(St) : e[St] = null } } }

		function G(e, t) { var n = F(e);
			0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && V(e) }

		function W(e, t, n, r) { n.forEach(function(n) { e(t, n, r) }) }

		function U(e) {
			function t() { return !0 }

			function n() { return !1 } if(!e || !e.isPropagationStopped) { var r = e || je.event;
				e = {}; for(var i in r) "layerX" !== i && "layerY" !== i && "keyLocation" !== i && "webkitMovementX" !== i && "webkitMovementY" !== i && ("returnValue" === i && r.preventDefault || (e[i] = r[i])); if(e.target || (e.target = e.srcElement || Le), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() { r.preventDefault && r.preventDefault(), e.returnValue = !1, r.returnValue = !1, e.defaultPrevented = !0 }, e.defaultPrevented = !1, e.stopPropagation = function() { r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, r.cancelBubble = !0, e.isPropagationStopped = t }, e.isPropagationStopped = n, e.stopImmediatePropagation = function() { r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation() }, e.isImmediatePropagationStopped = n, null !== e.clientX && void 0 !== e.clientX) { var o = Le.documentElement,
						a = Le.body;
					e.pageX = e.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0) } e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0) } return e }

		function X(e, t, n) { if(Array.isArray(t)) return W(X, e, t, n); var r = F(e); if(r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = B()), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t, n) { if(!r.disabled) { t = U(t); var i = r.handlers[t.type]; if(i)
							for(var o = i.slice(0), a = 0, s = o.length; a < s && !t.isImmediatePropagationStopped(); a++) try { o[a].call(e, t, n) } catch(e) { bt.error(e) } } }), 1 === r.handlers[t].length)
				if(e.addEventListener) { var i = !1;
					kt && Ot.indexOf(t) > -1 && (i = { passive: !0 }), e.addEventListener(t, r.dispatcher, i) } else e.attachEvent && e.attachEvent("on" + t, r.dispatcher) }

		function q(e, t, n) { if(H(e)) { var r = F(e); if(r.handlers) { if(Array.isArray(t)) return W(q, e, t, n); var i = function(e, t) { r.handlers[t] = [], G(e, t) }; if(void 0 !== t) { var o = r.handlers[t]; if(o) { if(!n) return void i(e, t); if(n.guid)
								for(var a = 0; a < o.length; a++) o[a].guid === n.guid && o.splice(a--, 1);
							G(e, t) } } else
						for(var s in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, s) && i(e, s) } } }

		function Y(e, t, n) { var r = H(e) ? F(e) : {},
				i = e.parentNode || e.ownerDocument; if("string" == typeof t ? t = { type: t, target: e } : t.target || (t.target = e), t = U(t), r.dispatcher && r.dispatcher.call(e, t, n), i && !t.isPropagationStopped() && !0 === t.bubbles) Y.call(null, i, t, n);
			else if(!i && !t.defaultPrevented) { var o = F(t.target);
				t.target[t.type] && (o.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1) } return !t.defaultPrevented }

		function K(e, t, n) { if(Array.isArray(t)) return W(K, e, t, n); var r = function r() { q(e, t, r), n.apply(this, arguments) };
			r.guid = n.guid = n.guid || B(), X(e, t, r) }

		function Q(e, t) { t && (Pt = t), je.setTimeout(jt, e) }

		function J(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = t.eventBusKey; if(n) { if(!e[n].nodeName) throw new Error('The eventBusKey "' + n + '" does not refer to an element.');
				e.eventBusEl_ = e[n] } else e.eventBusEl_ = g("span", { className: "vjs-event-bus" }); return a(e, Ut), e.on("dispose", function() { e.off(), je.setTimeout(function() { e.eventBusEl_ = null }, 0) }), e }

		function Z(e, t) { return a(e, Xt), e.state = a({}, e.state, t), "function" == typeof e.handleStateChanged && zt(e) && e.on("statechanged", e.handleStateChanged), e }

		function ee(e) { return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1) }

		function te(e, t) { return ee(e) === ee(t) }

		function ne() { for(var e = {}, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return n.forEach(function(t) { t && i(t, function(t, n) { if(!l(t)) return void(e[n] = t);
					l(e[n]) || (e[n] = {}), e[n] = ne(e[n], t) }) }), e }

		function re(e, t, n) { if("number" != typeof t || t < 0 || t > n) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + n + ").") }

		function ie(e, t, n, r) { return re(e, r, n.length - 1), n[r][t] }

		function oe(e) { return void 0 === e || 0 === e.length ? { length: 0, start: function() { throw new Error("This TimeRanges object is empty") }, end: function() { throw new Error("This TimeRanges object is empty") } } : { length: e.length, start: ie.bind(null, "start", 0, e), end: ie.bind(null, "end", 1, e) } }

		function ae(e, t) { return Array.isArray(e) ? oe(e) : void 0 === e || void 0 === t ? oe() : oe([
				[e, t]
			]) }

		function se(e, t) { var n = 0,
				r = void 0,
				i = void 0; if(!t) return 0;
			e && e.length || (e = ae(0, 0)); for(var o = 0; o < e.length; o++) r = e.start(o), i = e.end(o), i > t && (i = t), n += i - r; return n / t }

		function le(e) { if(e instanceof le) return e; "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : s(e) && ("number" == typeof e.code && (this.code = e.code), a(this, e)), this.message || (this.message = le.defaultMessages[this.code] || "") }

		function ce(e) { return void 0 !== e && null !== e && "function" == typeof e.then }

		function ue(e) { ce(e) && e.then(null, function(e) {}) }

		function pe(e, t, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
				o = e.textTracks();
			i.kind = t, n && (i.label = n), r && (i.language = r), i.tech = e; var a = new Rn.text.TrackClass(i); return o.addTrack(a), a }

		function de(e, t) { Bn[e] = Bn[e] || [], Bn[e].push(t) }

		function he(e, t, n) { e.setTimeout(function() { return Te(t, Bn[t.type], n, e) }, 1) }

		function fe(e, t) { e.forEach(function(e) { return e.setTech && e.setTech(t) }) }

		function ve(e, t, n) { return e.reduceRight(ye(n), t[n]()) }

		function me(e, t, n, r) { return t[n](e.reduce(ye(n), r)) }

		function ge(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
				i = "call" + ee(n),
				o = e.reduce(ye(i), r),
				a = o === Hn,
				s = a ? null : t[n](o); return be(e, n, s, a), s }

		function ye(e) { return function(t, n) { return t === Hn ? Hn : n[e] ? n[e](t) : t } }

		function be(e, t, n, r) { for(var i = e.length - 1; i >= 0; i--) { var o = e[i];
				o[t] && o[t](r, n) } }

		function _e(e) { Fn[e.id()] = null }

		function we(e, t) { var n = Fn[e.id()],
				r = null; if(void 0 === n || null === n) return r = t(e), Fn[e.id()] = [
				[t, r]
			], r; for(var i = 0; i < n.length; i++) { var o = n[i],
					a = o[0],
					s = o[1];
				a === t && (r = s) } return null === r && (r = t(e), n.push([t, r])), r }

		function Te() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
				n = arguments[2],
				r = arguments[3],
				i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
				o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
				s = t[0],
				l = t.slice(1); if("string" == typeof s) Te(e, Bn[s], n, r, i, o);
			else if(s) { var c = we(r, s); if(!c.setSource) return i.push(c), Te(e, l, n, r, i, o);
				c.setSource(a({}, e), function(t, a) { if(t) return Te(e, l, n, r, i, o);
					i.push(c), Te(a, e.type === a.type ? l : Bn[a.type], n, r, i, o) }) } else l.length ? Te(e, l, n, r, i, o) : o ? n(e, i) : Te(e, Bn["*"], n, r, i, !0) }

		function Ce(e) { var t = Xn(e.src); return !e.type && t && (e.type = t), e }

		function Ee(e, t) { var n = void 0; if(4 === e.length) n = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
			else { if(7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
				n = e.slice(1) } return "rgba(" + parseInt(n.slice(0, 2), 16) + "," + parseInt(n.slice(2, 4), 16) + "," + parseInt(n.slice(4, 6), 16) + "," + t + ")" }

		function xe(e, t, n) { try { e.style[t] = n } catch(e) { return } }

		function Se(e) { sr = e }

		function ke() { sr = ar }

		function Oe(e, t) { if(t && (e = t(e)), e && "none" !== e) return e }

		function Me(e, t) { return Oe(e.options[e.options.selectedIndex].value, t) }

		function Ae(e, t, n) { if(t)
				for(var r = 0; r < e.options.length; r++)
					if(Oe(e.options[r].value, n) === t) { e.selectedIndex = r; break } }

		function Pe(e, t, n) { var r = Pe.getPlayer(e); if(r) return t && bt.warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && r.ready(n), r; var i = "string" == typeof e ? wt("#" + Hi(e)) : e; if(!f(i)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
			Le.body.contains(i) || bt.warn("The element supplied is not included in the DOM"), t = t || {}, Pe.hooks("beforesetup").forEach(function(e) { var n = e(i, ne(t)); if(!s(n) || Array.isArray(n)) return void bt.error("please return an object in beforesetup hooks");
				t = ne(t, n) }); var o = qt.getComponent("Player"); return r = new o(i, t, n), Pe.hooks("setup").forEach(function(e) { return e(r) }), r }
		var je = r(n("awF4")),
			Le = r(n("dwO+")),
			Ie = r(n("sN1u")),
			$e = r(n("I/+Z")),
			De = r(n("1Xk4")),
			Ne = r(n("ciWi")),
			Re = "6.11.0",
			ze = je.navigator && je.navigator.userAgent || "",
			Be = /AppleWebKit\/([\d.]+)/i.exec(ze),
			Fe = Be ? parseFloat(Be.pop()) : null,
			He = /iPad/i.test(ze),
			Ve = /iPhone/i.test(ze) && !He,
			Ge = /iPod/i.test(ze),
			We = Ve || He || Ge,
			Ue = function() { var e = ze.match(/OS (\d+)_/i); return e && e[1] ? e[1] : null }(),
			Xe = /Android/i.test(ze),
			qe = function() { var e = ze.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if(!e) return null; var t = e[1] && parseFloat(e[1]),
					n = e[2] && parseFloat(e[2]); return t && n ? parseFloat(e[1] + "." + e[2]) : t || null }(),
			Ye = Xe && /webkit/i.test(ze) && qe < 2.3,
			Ke = Xe && qe < 5 && Fe < 537,
			Qe = /Firefox/i.test(ze),
			Je = /Edge/i.test(ze),
			Ze = !Je && (/Chrome/i.test(ze) || /CriOS/i.test(ze)),
			et = function() { var e = ze.match(/(Chrome|CriOS)\/(\d+)/); return e && e[2] ? parseFloat(e[2]) : null }(),
			tt = /MSIE\s8\.0/.test(ze),
			nt = function() { var e = /MSIE\s(\d+)\.\d/.exec(ze),
					t = e && parseFloat(e[1]); return !t && /Trident\/7.0/i.test(ze) && /rv:11.0/.test(ze) && (t = 11), t }(),
			rt = /Safari/i.test(ze) && !Ze && !Xe && !Je,
			it = (rt || We) && !Ze,
			ot = h() && ("ontouchstart" in je || je.navigator.maxTouchPoints || je.DocumentTouch && je.document instanceof je.DocumentTouch),
			at = h() && "backgroundSize" in je.document.createElement("video").style,
			st = (Object.freeze || Object)({ IS_IPAD: He, IS_IPHONE: Ve, IS_IPOD: Ge, IS_IOS: We, IOS_VERSION: Ue, IS_ANDROID: Xe, ANDROID_VERSION: qe, IS_OLD_ANDROID: Ye, IS_NATIVE_ANDROID: Ke, IS_FIREFOX: Qe, IS_EDGE: Je, IS_CHROME: Ze, CHROME_VERSION: et, IS_IE8: tt, IE_VERSION: nt, IS_SAFARI: rt, IS_ANY_SAFARI: it, TOUCH_ENABLED: ot, BACKGROUND_SIZE_SUPPORTED: at }),
			lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
			ct = function(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
			ut = function(e, t) { if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) },
			pt = function(e, t) { if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t },
			dt = function(e, t) { return e.raw = t, e },
			ht = Object.prototype.toString,
			ft = function(e) { return s(e) ? Object.keys(e) : [] },
			vt = void 0,
			mt = "info",
			gt = [],
			yt = function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!nt && nt < 11,
					r = vt.levels[mt],
					i = new RegExp("^(" + r + ")$"); if("log" !== e && t.unshift(e.toUpperCase() + ":"), gt && gt.push([].concat(t)), t.unshift("VIDEOJS:"), je.console) { var o = je.console[e];
					o || "debug" !== e || (o = je.console.info || je.console.log), o && r && i.test(e) && (n && (t = t.map(function(e) { if(s(e) || Array.isArray(e)) try { return JSON.stringify(e) } catch(t) { return String(e) }
						return String(e) }).join(" ")), o.apply ? o[Array.isArray(t) ? "apply" : "call"](je.console, t) : o(t)) } };
		vt = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			yt("log", t) }, vt.levels = { all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error", info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: mt }, vt.level = function(e) { if("string" == typeof e) { if(!vt.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
				mt = e } return mt }, vt.history = function() { return gt ? [].concat(gt) : [] }, vt.history.clear = function() { gt && (gt.length = 0) }, vt.history.disable = function() { null !== gt && (gt.length = 0, gt = null) }, vt.history.enable = function() { null === gt && (gt = []) }, vt.error = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return yt("error", t) }, vt.warn = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return yt("warn", t) }, vt.debug = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return yt("debug", t) };
		var bt = vt,
			_t = dt(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
			wt = m("querySelector"),
			Tt = m("querySelectorAll"),
			Ct = (Object.freeze || Object)({ isReal: h, isEl: f, isInFrame: v, createEl: g, textContent: y, prependTo: b, hasClass: _, addClass: w, removeClass: T, toggleClass: C, setAttributes: E, getAttributes: x, getAttribute: S, setAttribute: k, removeAttribute: O, blockTextSelection: M, unblockTextSelection: A, getBoundingClientRect: P, findPosition: j, getPointerPosition: L, isTextNode: I, emptyEl: $, normalizeContent: D, appendContent: N, insertContent: R, isSingleLeftClick: z, $: wt, $$: Tt }),
			Et = 1,
			xt = {},
			St = "vdata" + (new Date).getTime(),
			kt = !1;
		! function() { try { var e = Object.defineProperty({}, "passive", { get: function() { kt = !0 } });
				je.addEventListener("test", null, e), je.removeEventListener("test", null, e) } catch(e) {} }();
		var Ot = ["touchstart", "touchmove"],
			Mt = (Object.freeze || Object)({ fixEvent: U, on: X, off: q, trigger: Y, one: K }),
			At = !1,
			Pt = void 0,
			jt = function() { if(h() && !1 !== Pt.options.autoSetup) { var e = Le.getElementsByTagName("video"),
						t = Le.getElementsByTagName("audio"),
						n = Le.getElementsByTagName("video-js"),
						r = []; if(e && e.length > 0)
						for(var i = 0, o = e.length; i < o; i++) r.push(e[i]); if(t && t.length > 0)
						for(var a = 0, s = t.length; a < s; a++) r.push(t[a]); if(n && n.length > 0)
						for(var l = 0, c = n.length; l < c; l++) r.push(n[l]); if(r && r.length > 0)
						for(var u = 0, p = r.length; u < p; u++) { var d = r[u]; if(!d || !d.getAttribute) { Q(1); break } if(void 0 === d.player) { var f = d.getAttribute("data-setup");
								null !== f && Pt(d) } } else At || Q(1) } };
		h() && "complete" === Le.readyState ? At = !0 : K(je, "load", function() { At = !0 });
		var Lt = function(e) { var t = Le.createElement("style"); return t.className = e, t },
			It = function(e, t) { e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t },
			$t = function(e, t, n) { t.guid || (t.guid = B()); var r = function() { return t.apply(e, arguments) }; return r.guid = n ? n + "_" + t.guid : t.guid, r },
			Dt = function(e, t) { var n = Date.now(); return function() { var r = Date.now();
					r - n >= t && (e.apply(void 0, arguments), n = r) } },
			Nt = function(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : je,
					i = void 0; return function() { var o = this,
						a = arguments,
						s = function() { i = null, s = null, n || e.apply(o, a) };!i && n && e.apply(o, a), r.clearTimeout(i), i = r.setTimeout(s, t) } },
			Rt = function() {};
		Rt.prototype.allowedEvents_ = {}, Rt.prototype.on = function(e, t) { var n = this.addEventListener;
			this.addEventListener = function() {}, X(this, e, t), this.addEventListener = n }, Rt.prototype.addEventListener = Rt.prototype.on, Rt.prototype.off = function(e, t) { q(this, e, t) }, Rt.prototype.removeEventListener = Rt.prototype.off, Rt.prototype.one = function(e, t) { var n = this.addEventListener;
			this.addEventListener = function() {}, K(this, e, t), this.addEventListener = n }, Rt.prototype.trigger = function(e) { var t = e.type || e; "string" == typeof e && (e = { type: t }), e = U(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), Y(this, e) }, Rt.prototype.dispatchEvent = Rt.prototype.trigger;
		var zt = function(e) { return e instanceof Rt || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(t) { return "function" == typeof e[t] }) },
			Bt = function(e) { return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length },
			Ft = function(e) { if(!e.nodeName && !zt(e)) throw new Error("Invalid target; must be a DOM node or evented object.") },
			Ht = function(e) { if(!Bt(e)) throw new Error("Invalid event type; must be a non-empty string or array.") },
			Vt = function(e) { if("function" != typeof e) throw new Error("Invalid listener; must be a function.") },
			Gt = function(e, t) { var n = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_,
					r = void 0,
					i = void 0,
					o = void 0; return n ? (r = e.eventBusEl_, t.length >= 3 && t.shift(), i = t[0], o = t[1]) : (r = t[0], i = t[1], o = t[2]), Ft(r), Ht(i), Vt(o), o = $t(e, o), { isTargetingSelf: n, target: r, type: i, listener: o } },
			Wt = function(e, t, n, r) { Ft(e), e.nodeName ? Mt[t](e, n, r) : e[t](n, r) },
			Ut = { on: function() { for(var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]; var i = Gt(this, n),
						o = i.isTargetingSelf,
						a = i.target,
						s = i.type,
						l = i.listener; if(Wt(a, "on", s, l), !o) { var c = function() { return e.off(a, s, l) };
						c.guid = l.guid; var u = function() { return e.off("dispose", c) };
						u.guid = l.guid, Wt(this, "on", "dispose", c), Wt(a, "on", "dispose", u) } }, one: function() { for(var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]; var i = Gt(this, n),
						o = i.isTargetingSelf,
						a = i.target,
						s = i.type,
						l = i.listener; if(o) Wt(a, "one", s, l);
					else { var c = function t() { for(var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
							e.off(a, s, t), l.apply(null, r) };
						c.guid = l.guid, Wt(a, "one", s, c) } }, off: function(e, t, n) { if(!e || Bt(e)) q(this.eventBusEl_, e, t);
					else { var r = e,
							i = t;
						Ft(r), Ht(i), Vt(n), n = $t(this, n), this.off("dispose", n), r.nodeName ? (q(r, i, n), q(r, "dispose", n)) : zt(r) && (r.off(i, n), r.off("dispose", n)) } }, trigger: function(e, t) { return Y(this.eventBusEl_, e, t) } },
			Xt = { state: {}, setState: function(e) { var t = this; "function" == typeof e && (e = e()); var n = void 0; return i(e, function(e, r) { t.state[r] !== e && (n = n || {}, n[r] = { from: t.state[r], to: e }), t.state[r] = e }), n && zt(this) && this.trigger({ changes: n, type: "statechanged" }), n } },
			qt = function() {
				function e(t, n, r) { if(ct(this, e), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = ne({}, this.options_), n = this.options_ = ne(this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) { var i = t && t.id && t.id() || "no_player";
						this.id_ = i + "_component_" + B() } this.name_ = n.name || null, n.el ? this.el_ = n.el : !1 !== n.createEl && (this.el_ = this.createEl()), !1 !== n.evented && J(this, { eventBusKey: this.el_ ? "el_" : null }), Z(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== n.initChildren && this.initChildren(), this.ready(r), !1 !== n.reportTouchActivity && this.enableTouchActivity() } return e.prototype.dispose = function() { if(this.trigger({ type: "dispose", bubbles: !1 }), this.children_)
						for(var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
					this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), V(this.el_), this.el_ = null), this.player_ = null }, e.prototype.player = function() { return this.player_ }, e.prototype.options = function(e) { return bt.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e ? (this.options_ = ne(this.options_, e), this.options_) : this.options_ }, e.prototype.el = function() { return this.el_ }, e.prototype.createEl = function(e, t, n) { return g(e, t, n) }, e.prototype.localize = function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
						r = this.player_.language && this.player_.language(),
						i = this.player_.languages && this.player_.languages(),
						o = i && i[r],
						a = r && r.split("-")[0],
						s = i && i[a],
						l = n; return o && o[e] ? l = o[e] : s && s[e] && (l = s[e]), t && (l = l.replace(/\{(\d+)\}/g, function(e, n) { var r = t[n - 1],
							i = r; return void 0 === r && (i = e), i })), l }, e.prototype.contentEl = function() { return this.contentEl_ || this.el_ }, e.prototype.id = function() { return this.id_ }, e.prototype.name = function() { return this.name_ }, e.prototype.children = function() { return this.children_ }, e.prototype.getChildById = function(e) { return this.childIndex_[e] }, e.prototype.getChild = function(e) { if(e) return e = ee(e), this.childNameIndex_[e] }, e.prototype.addChild = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
						i = void 0,
						o = void 0; if("string" == typeof t) { o = ee(t); var a = n.componentClass || o;
						n.name = o; var s = e.getComponent(a); if(!s) throw new Error("Component " + a + " does not exist"); if("function" != typeof s) return null;
						i = new s(this.player_ || this, n) } else i = t; if(this.children_.splice(r, 0, i), "function" == typeof i.id && (this.childIndex_[i.id()] = i), o = o || i.name && ee(i.name()), o && (this.childNameIndex_[o] = i), "function" == typeof i.el && i.el()) { var l = this.contentEl().children,
							c = l[r] || null;
						this.contentEl().insertBefore(i.el(), c) } return i }, e.prototype.removeChild = function(e) { if("string" == typeof e && (e = this.getChild(e)), e && this.children_) { for(var t = !1, n = this.children_.length - 1; n >= 0; n--)
							if(this.children_[n] === e) { t = !0, this.children_.splice(n, 1); break }
						if(t) { this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null; var r = e.el();
							r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el()) } } }, e.prototype.initChildren = function() { var t = this,
						n = this.options_.children; if(n) { var r = this.options_,
							i = function(e) { var n = e.name,
									i = e.opts; if(void 0 !== r[n] && (i = r[n]), !1 !== i) {!0 === i && (i = {}), i.playerOptions = t.options_.playerOptions; var o = t.addChild(n, i);
									o && (t[n] = o) } },
							o = void 0,
							a = e.getComponent("Tech");
						o = Array.isArray(n) ? n : Object.keys(n), o.concat(Object.keys(this.options_).filter(function(e) { return !o.some(function(t) { return "string" == typeof t ? e === t : e === t.name }) })).map(function(e) { var r = void 0,
								i = void 0; return "string" == typeof e ? (r = e, i = n[r] || t.options_[r] || {}) : (r = e.name, i = e), { name: r, opts: i } }).filter(function(t) { var n = e.getComponent(t.opts.componentClass || ee(t.name)); return n && !a.isTech(n) }).forEach(i) } }, e.prototype.buildCSSClass = function() { return "" }, e.prototype.ready = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if(e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e)) }, e.prototype.triggerReady = function() { this.isReady_ = !0, this.setTimeout(function() { var e = this.readyQueue_;
						this.readyQueue_ = [], e && e.length > 0 && e.forEach(function(e) { e.call(this) }, this), this.trigger("ready") }, 1) }, e.prototype.$ = function(e, t) { return wt(e, t || this.contentEl()) }, e.prototype.$$ = function(e, t) { return Tt(e, t || this.contentEl()) }, e.prototype.hasClass = function(e) { return _(this.el_, e) }, e.prototype.addClass = function(e) { w(this.el_, e) }, e.prototype.removeClass = function(e) { T(this.el_, e) }, e.prototype.toggleClass = function(e, t) { C(this.el_, e, t) }, e.prototype.show = function() { this.removeClass("vjs-hidden") }, e.prototype.hide = function() { this.addClass("vjs-hidden") }, e.prototype.lockShowing = function() { this.addClass("vjs-lock-showing") }, e.prototype.unlockShowing = function() { this.removeClass("vjs-lock-showing") }, e.prototype.getAttribute = function(e) { return S(this.el_, e) }, e.prototype.setAttribute = function(e, t) { k(this.el_, e, t) }, e.prototype.removeAttribute = function(e) { O(this.el_, e) }, e.prototype.width = function(e, t) { return this.dimension("width", e, t) }, e.prototype.height = function(e, t) { return this.dimension("height", e, t) }, e.prototype.dimensions = function(e, t) { this.width(e, !0), this.height(t) }, e.prototype.dimension = function(e, t, n) { if(void 0 !== t) return null !== t && t === t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void(n || this.trigger("componentresize")); if(!this.el_) return 0; var r = this.el_.style[e],
						i = r.indexOf("px"); return -1 !== i ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + ee(e)], 10) }, e.prototype.currentDimension = function(e) { var t = 0; if("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value"); if("function" == typeof je.getComputedStyle) { var n = je.getComputedStyle(this.el_);
						t = n.getPropertyValue(e) || n[e] } if(0 === (t = parseFloat(t))) { var r = "offset" + ee(e);
						t = this.el_[r] } return t }, e.prototype.currentDimensions = function() { return { width: this.currentDimension("width"), height: this.currentDimension("height") } }, e.prototype.currentWidth = function() { return this.currentDimension("width") }, e.prototype.currentHeight = function() { return this.currentDimension("height") }, e.prototype.focus = function() { this.el_.focus() }, e.prototype.blur = function() { this.el_.blur() }, e.prototype.emitTapEvents = function() { var e = 0,
						t = null,
						n = void 0;
					this.on("touchstart", function(r) { 1 === r.touches.length && (t = { pageX: r.touches[0].pageX, pageY: r.touches[0].pageY }, e = (new Date).getTime(), n = !0) }), this.on("touchmove", function(e) { if(e.touches.length > 1) n = !1;
						else if(t) { var r = e.touches[0].pageX - t.pageX,
								i = e.touches[0].pageY - t.pageY,
								o = Math.sqrt(r * r + i * i);
							o > 10 && (n = !1) } }); var r = function() { n = !1 };
					this.on("touchleave", r), this.on("touchcancel", r), this.on("touchend", function(r) { if(t = null, !0 === n) {
							(new Date).getTime() - e < 200 && (r.preventDefault(), this.trigger("tap")) } }) }, e.prototype.enableTouchActivity = function() { if(this.player() && this.player().reportUserActivity) { var e = $t(this.player(), this.player().reportUserActivity),
							t = void 0;
						this.on("touchstart", function() { e(), this.clearInterval(t), t = this.setInterval(e, 250) }); var n = function(n) { e(), this.clearInterval(t) };
						this.on("touchmove", e), this.on("touchend", n), this.on("touchcancel", n) } }, e.prototype.setTimeout = function(e, t) { var n, r, i = this; return e = $t(this, e), n = je.setTimeout(function() { i.off("dispose", r), e() }, t), r = function() { return i.clearTimeout(n) }, r.guid = "vjs-timeout-" + n, this.on("dispose", r), n }, e.prototype.clearTimeout = function(e) { je.clearTimeout(e); var t = function() {}; return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e }, e.prototype.setInterval = function(e, t) { var n = this;
					e = $t(this, e); var r = je.setInterval(e, t),
						i = function() { return n.clearInterval(r) }; return i.guid = "vjs-interval-" + r, this.on("dispose", i), r }, e.prototype.clearInterval = function(e) { je.clearInterval(e); var t = function() {}; return t.guid = "vjs-interval-" + e, this.off("dispose", t), e }, e.prototype.requestAnimationFrame = function(e) { var t, n, r = this; return this.supportsRaf_ ? (e = $t(this, e), t = je.requestAnimationFrame(function() { r.off("dispose", n), e() }), n = function() { return r.cancelAnimationFrame(t) }, n.guid = "vjs-raf-" + t, this.on("dispose", n), t) : this.setTimeout(e, 1e3 / 60) }, e.prototype.cancelAnimationFrame = function(e) { if(this.supportsRaf_) { je.cancelAnimationFrame(e); var t = function() {}; return t.guid = "vjs-raf-" + e, this.off("dispose", t), e } return this.clearTimeout(e) }, e.registerComponent = function(t, n) { if("string" != typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.'); var r = e.getComponent("Tech"),
						i = r && r.isTech(n),
						o = e === n || e.prototype.isPrototypeOf(n.prototype); if(i || !o) { var a = void 0; throw a = i ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + t + '"; ' + a + ".") } t = ee(t), e.components_ || (e.components_ = {}); var s = e.getComponent("Player"); if("Player" === t && s && s.players) { var l = s.players,
							c = Object.keys(l); if(l && c.length > 0 && c.map(function(e) { return l[e] }).every(Boolean)) throw new Error("Can not register Player component after player has been created.") } return e.components_[t] = n, n }, e.getComponent = function(t) { if(t) return t = ee(t), e.components_ && e.components_[t] ? e.components_[t] : void 0 }, e }();
		qt.prototype.supportsRaf_ = "function" == typeof je.requestAnimationFrame && "function" == typeof je.cancelAnimationFrame, qt.registerComponent("Component", qt);
		for(var Yt = {}, Kt = [
				["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
				["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
				["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
				["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
				["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
			], Qt = Kt[0], Jt = void 0, Zt = 0; Zt < Kt.length; Zt++)
			if(Kt[Zt][1] in Le) { Jt = Kt[Zt]; break }
		if(Jt)
			for(var en = 0; en < Jt.length; en++) Yt[Qt[en]] = Jt[en];
		le.prototype.code = 0, le.prototype.message = "", le.prototype.status = null, le.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], le.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it." };
		for(var tn = 0; tn < le.errorTypes.length; tn++) le[le.errorTypes[tn]] = tn, le.prototype[le.errorTypes[tn]] = tn;
		var nn = function(e) { return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(t, n, r) { return e[n] && (t[n] = e[n]), t }, { cues: e.cues && Array.prototype.map.call(e.cues, function(e) { return { startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id } }) }) },
			rn = function(e) { var t = e.$$("track"),
					n = Array.prototype.map.call(t, function(e) { return e.track }); return Array.prototype.map.call(t, function(e) { var t = nn(e.track); return e.src && (t.src = e.src), t }).concat(Array.prototype.filter.call(e.textTracks(), function(e) { return -1 === n.indexOf(e) }).map(nn)) },
			on = function(e, t) { return e.forEach(function(e) { var n = t.addRemoteTextTrack(e).track;!e.src && e.cues && e.cues.forEach(function(e) { return n.addCue(e) }) }), t.textTracks() },
			an = { textTracksToJson: rn, jsonToTextTracks: on, trackToJson_: nn },
			sn = "vjs-modal-dialog",
			ln = function(e) {
				function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = g("div", { className: sn + "-content" }, { role: "document" }), i.descEl_ = g("p", { className: sn + "-description vjs-control-text", id: i.el().getAttribute("aria-describedby") }), y(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": this.id() + "_description", "aria-hidden": "true", "aria-label": this.label(), role: "dialog" }) }, t.prototype.dispose = function() { this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, e.prototype.dispose.call(this) }, t.prototype.buildCSSClass = function() { return sn + " vjs-hidden " + e.prototype.buildCSSClass.call(this) }, t.prototype.handleKeyPress = function(e) { 27 === e.which && this.closeable() && this.close() }, t.prototype.label = function() { return this.localize(this.options_.label || "Modal Window") }, t.prototype.description = function() { var e = this.options_.description || this.localize("This is a modal window."); return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e }, t.prototype.open = function() { if(!this.opened_) { var e = this.player();
						this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", $t(this, this.handleKeyPress)), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0 } }, t.prototype.opened = function(e) { return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_ }, t.prototype.close = function() { if(this.opened_) { var e = this.player();
						this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", $t(this, this.handleKeyPress)), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose() } }, t.prototype.closeable = function(e) { if("boolean" == typeof e) { var t = this.closeable_ = !!e,
							n = this.getChild("closeButton"); if(t && !n) { var r = this.contentEl_;
							this.contentEl_ = this.el_, n = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = r, this.on(n, "close", this.close) }!t && n && (this.off(n, "close", this.close), this.removeChild(n), n.dispose()) } return this.closeable_ }, t.prototype.fill = function() { this.fillWith(this.content()) }, t.prototype.fillWith = function(e) { var t = this.contentEl(),
						n = t.parentNode,
						r = t.nextSibling;
					this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, n.removeChild(t), this.empty(), R(t, e), this.trigger("modalfill"), r ? n.insertBefore(t, r) : n.appendChild(t); var i = this.getChild("closeButton");
					i && n.appendChild(i.el_) }, t.prototype.empty = function() { this.trigger("beforemodalempty"), $(this.contentEl()), this.trigger("modalempty") }, t.prototype.content = function(e) { return void 0 !== e && (this.content_ = e), this.content_ }, t.prototype.conditionalFocus_ = function() { var e = Le.activeElement,
						t = this.player_.el_;
					this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus(), this.on(Le, "keydown", this.handleKeyDown)) }, t.prototype.conditionalBlur_ = function() { this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(Le, "keydown", this.handleKeyDown) }, t.prototype.handleKeyDown = function(e) { if(9 === e.which) { for(var t = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = void 0, i = 0; i < t.length; i++)
							if(n === t[i]) { r = i; break }
						Le.activeElement === this.el_ && (r = 0), e.shiftKey && 0 === r ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || r !== t.length - 1 || (t[0].focus(), e.preventDefault()) } }, t.prototype.focusableEls_ = function() { var e = this.el_.querySelectorAll("*"); return Array.prototype.filter.call(e, function(e) { return(e instanceof je.HTMLAnchorElement || e instanceof je.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof je.HTMLInputElement || e instanceof je.HTMLSelectElement || e instanceof je.HTMLTextAreaElement || e instanceof je.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof je.HTMLIFrameElement || e instanceof je.HTMLObjectElement || e instanceof je.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable") }) }, t }(qt);
		ln.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }, qt.registerComponent("ModalDialog", ln);
		var cn = function(e) {
			function t() { var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				ct(this, t); var o = pt(this, e.call(this)); if(!i && (i = o, tt)) { i = Le.createElement("custom"); for(var a in t.prototype) "constructor" !== a && (i[a] = t.prototype[a]) } i.tracks_ = [], Object.defineProperty(i, "length", { get: function() { return this.tracks_.length } }); for(var s = 0; s < r.length; s++) i.addTrack(r[s]); return n = i, pt(o, n) } return ut(t, e), t.prototype.addTrack = function(e) { var t = this.tracks_.length; "" + t in this || Object.defineProperty(this, t, { get: function() { return this.tracks_[t] } }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({ track: e, type: "addtrack" })) }, t.prototype.removeTrack = function(e) { for(var t = void 0, n = 0, r = this.length; n < r; n++)
					if(this[n] === e) { t = this[n], t.off && t.off(), this.tracks_.splice(n, 1); break }
				t && this.trigger({ track: t, type: "removetrack" }) }, t.prototype.getTrackById = function(e) { for(var t = null, n = 0, r = this.length; n < r; n++) { var i = this[n]; if(i.id === e) { t = i; break } } return t }, t }(Rt);
		cn.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack" };
		for(var un in cn.prototype.allowedEvents_) cn.prototype["on" + un] = null;
		var pn = function(e, t) { for(var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].enabled = !1) },
			dn = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ct(this, t); for(var o = void 0, a = i.length - 1; a >= 0; a--)
						if(i[a].enabled) { pn(i, i[a]); break }
					if(tt) { o = Le.createElement("custom"); for(var s in cn.prototype) "constructor" !== s && (o[s] = cn.prototype[s]); for(var l in t.prototype) "constructor" !== l && (o[l] = t.prototype[l]) } return o = n = pt(this, e.call(this, i, o)), o.changing_ = !1, r = o, pt(n, r) } return ut(t, e), t.prototype.addTrack = function(t) { var n = this;
					t.enabled && pn(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("enabledchange", function() { n.changing_ || (n.changing_ = !0, pn(n, t), n.changing_ = !1, n.trigger("change")) }) }, t }(cn),
			hn = function(e, t) { for(var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].selected = !1) },
			fn = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ct(this, t); for(var o = void 0, a = i.length - 1; a >= 0; a--)
						if(i[a].selected) { hn(i, i[a]); break }
					if(tt) { o = Le.createElement("custom"); for(var s in cn.prototype) "constructor" !== s && (o[s] = cn.prototype[s]); for(var l in t.prototype) "constructor" !== l && (o[l] = t.prototype[l]) } return o = n = pt(this, e.call(this, i, o)), o.changing_ = !1, Object.defineProperty(o, "selectedIndex", { get: function() { for(var e = 0; e < this.length; e++)
								if(this[e].selected) return e; return -1 }, set: function() {} }), r = o, pt(n, r) } return ut(t, e), t.prototype.addTrack = function(t) { var n = this;
					t.selected && hn(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("selectedchange", function() { n.changing_ || (n.changing_ = !0, hn(n, t), n.changing_ = !1, n.trigger("change")) }) }, t }(cn),
			vn = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ct(this, t); var o = void 0; if(tt) { o = Le.createElement("custom"); for(var a in cn.prototype) "constructor" !== a && (o[a] = cn.prototype[a]); for(var s in t.prototype) "constructor" !== s && (o[s] = t.prototype[s]) } return o = n = pt(this, e.call(this, i, o)), r = o, pt(n, r) } return ut(t, e), t.prototype.addTrack = function(t) { e.prototype.addTrack.call(this, t), t.addEventListener("modechange", $t(this, function() { this.trigger("change") })), -1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", $t(this, function() { this.trigger("selectedlanguagechange") })) }, t }(cn),
			mn = function() {
				function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ct(this, e); var n = this; if(tt) { n = Le.createElement("custom"); for(var r in e.prototype) "constructor" !== r && (n[r] = e.prototype[r]) } n.trackElements_ = [], Object.defineProperty(n, "length", { get: function() { return this.trackElements_.length } }); for(var i = 0, o = t.length; i < o; i++) n.addTrackElement_(t[i]); if(tt) return n } return e.prototype.addTrackElement_ = function(e) { var t = this.trackElements_.length; "" + t in this || Object.defineProperty(this, t, { get: function() { return this.trackElements_[t] } }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e) }, e.prototype.getTrackElementByTrack_ = function(e) { for(var t = void 0, n = 0, r = this.trackElements_.length; n < r; n++)
						if(e === this.trackElements_[n].track) { t = this.trackElements_[n]; break }
					return t }, e.prototype.removeTrackElement_ = function(e) { for(var t = 0, n = this.trackElements_.length; t < n; t++)
						if(e === this.trackElements_[t]) { this.trackElements_.splice(t, 1); break } }, e }(),
			gn = function() {
				function e(t) { ct(this, e); var n = this; if(tt) { n = Le.createElement("custom"); for(var r in e.prototype) "constructor" !== r && (n[r] = e.prototype[r]) } if(e.prototype.setCues_.call(n, t), Object.defineProperty(n, "length", { get: function() { return this.length_ } }), tt) return n } return e.prototype.setCues_ = function(e) { var t = this.length || 0,
						n = 0,
						r = e.length;
					this.cues_ = e, this.length_ = e.length; var i = function(e) { "" + e in this || Object.defineProperty(this, "" + e, { get: function() { return this.cues_[e] } }) }; if(t < r)
						for(n = t; n < r; n++) i.call(this, n) }, e.prototype.getCueById = function(e) { for(var t = null, n = 0, r = this.length; n < r; n++) { var i = this[n]; if(i.id === e) { t = i; break } } return t }, e }(),
			yn = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" },
			bn = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" },
			_n = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" },
			wn = { disabled: "disabled", hidden: "hidden", showing: "showing" },
			Tn = function(e) {
				function t() { var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ct(this, t); var i = pt(this, e.call(this)),
						o = i; if(tt) { o = Le.createElement("custom"); for(var a in t.prototype) "constructor" !== a && (o[a] = t.prototype[a]) } var s = { id: r.id || "vjs_track_" + B(), kind: r.kind || "", label: r.label || "", language: r.language || "" }; for(var l in s) ! function(e) { Object.defineProperty(o, e, { get: function() { return s[e] }, set: function() {} }) }(l); return n = o, pt(i, n) } return ut(t, e), t }(Rt),
			Cn = function(e) { var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
					n = Le.createElement("a");
				n.href = e; var r = "" === n.host && "file:" !== n.protocol,
					i = void 0;
				r && (i = Le.createElement("div"), i.innerHTML = '<a href="' + e + '"></a>', n = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), Le.body.appendChild(i)); for(var o = {}, a = 0; a < t.length; a++) o[t[a]] = n[t[a]]; return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), o.protocol || (o.protocol = je.location.protocol), r && Le.body.removeChild(i), o },
			En = function(e) { if(!e.match(/^https?:\/\//)) { var t = Le.createElement("div");
					t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href } return e },
			xn = function(e) { if("string" == typeof e) { var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
						n = t.exec(e); if(n) return n.pop().toLowerCase() } return "" },
			Sn = function(e) { var t = je.location,
					n = Cn(e); return(":" === n.protocol ? t.protocol : n.protocol) + n.host !== t.protocol + t.host },
			kn = (Object.freeze || Object)({ parseUrl: Cn, getAbsoluteURL: En, getFileExtension: xn, isCrossOrigin: Sn }),
			On = function(e, t) { var n = new je.WebVTT.Parser(je, je.vttjs, je.WebVTT.StringDecoder()),
					r = [];
				n.oncue = function(e) { t.addCue(e) }, n.onparsingerror = function(e) { r.push(e) }, n.onflush = function() { t.trigger({ type: "loadeddata", target: t }) }, n.parse(e), r.length > 0 && (je.console && je.console.groupCollapsed && je.console.groupCollapsed("Text Track parsing errors for " + t.src), r.forEach(function(e) { return bt.error(e) }), je.console && je.console.groupEnd && je.console.groupEnd()), n.flush() },
			Mn = function(e, t) { var n = { uri: e },
					r = Sn(e);
				r && (n.cors = r), De(n, $t(this, function(e, n, r) { if(e) return bt.error(e, n); if(t.loaded_ = !0, "function" != typeof je.WebVTT) { if(t.tech_) { var i = function() { return On(r, t) };
							t.tech_.on("vttjsloaded", i), t.tech_.on("vttjserror", function() { bt.error("vttjs failed to load, stopping trying to process " + t.src), t.tech_.off("vttjsloaded", i) }) } } else On(r, t) })) },
			An = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if(ct(this, t), !i.tech) throw new Error("A tech was not provided."); var o = ne(i, { kind: _n[i.kind] || "subtitles", language: i.language || i.srclang || "" }),
						a = wn[o.mode] || "disabled",
						s = o.default; "metadata" !== o.kind && "chapters" !== o.kind || (a = "hidden"); var l = n = pt(this, e.call(this, o)); if(l.tech_ = o.tech, tt)
						for(var c in t.prototype) "constructor" !== c && (l[c] = t.prototype[c]);
					l.cues_ = [], l.activeCues_ = []; var u = new gn(l.cues_),
						p = new gn(l.activeCues_),
						d = !1,
						h = $t(l, function() { this.activeCues, d && (this.trigger("cuechange"), d = !1) }); return "disabled" !== a && l.tech_.ready(function() { l.tech_.on("timeupdate", h) }, !0), Object.defineProperty(l, "default", { get: function() { return s }, set: function() {} }), Object.defineProperty(l, "mode", { get: function() { return a }, set: function(e) { var t = this;
							wn[e] && (a = e, "showing" === a && this.tech_.ready(function() { t.tech_.on("timeupdate", h) }, !0), this.trigger("modechange")) } }), Object.defineProperty(l, "cues", { get: function() { return this.loaded_ ? u : null }, set: function() {} }), Object.defineProperty(l, "activeCues", { get: function() { if(!this.loaded_) return null; if(0 === this.cues.length) return p; for(var e = this.tech_.currentTime(), t = [], n = 0, r = this.cues.length; n < r; n++) { var i = this.cues[n];
								i.startTime <= e && i.endTime >= e ? t.push(i) : i.startTime === i.endTime && i.startTime <= e && i.startTime + .5 >= e && t.push(i) } if(d = !1, t.length !== this.activeCues_.length) d = !0;
							else
								for(var o = 0; o < t.length; o++) - 1 === this.activeCues_.indexOf(t[o]) && (d = !0); return this.activeCues_ = t, p.setCues_(this.activeCues_), p }, set: function() {} }), o.src ? (l.src = o.src, Mn(o.src, l)) : l.loaded_ = !0, r = l, pt(n, r) } return ut(t, e), t.prototype.addCue = function(e) { var t = e; if(je.vttjs && !(e instanceof je.vttjs.VTTCue)) { t = new je.vttjs.VTTCue(e.startTime, e.endTime, e.text); for(var n in e) n in t || (t[n] = e[n]);
						t.id = e.id, t.originalCue_ = e } for(var r = this.tech_.textTracks(), i = 0; i < r.length; i++) r[i] !== this && r[i].removeCue(t);
					this.cues_.push(t), this.cues.setCues_(this.cues_) }, t.prototype.removeCue = function(e) { for(var t = this.cues_.length; t--;) { var n = this.cues_[t]; if(n === e || n.originalCue_ && n.originalCue_ === e) { this.cues_.splice(t, 1), this.cues.setCues_(this.cues_); break } } }, t }(Tn);
		An.prototype.allowedEvents_ = { cuechange: "cuechange" };
		var Pn = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ct(this, t); var o = ne(i, { kind: bn[i.kind] || "" }),
						a = n = pt(this, e.call(this, o)),
						s = !1; if(tt)
						for(var l in t.prototype) "constructor" !== l && (a[l] = t.prototype[l]); return Object.defineProperty(a, "enabled", { get: function() { return s }, set: function(e) { "boolean" == typeof e && e !== s && (s = e, this.trigger("enabledchange")) } }), o.enabled && (a.enabled = o.enabled), a.loaded_ = !0, r = a, pt(n, r) } return ut(t, e), t }(Tn),
			jn = function(e) {
				function t() { var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ct(this, t); var o = ne(i, { kind: yn[i.kind] || "" }),
						a = n = pt(this, e.call(this, o)),
						s = !1; if(tt)
						for(var l in t.prototype) "constructor" !== l && (a[l] = t.prototype[l]); return Object.defineProperty(a, "selected", { get: function() { return s }, set: function(e) { "boolean" == typeof e && e !== s && (s = e, this.trigger("selectedchange")) } }), o.selected && (a.selected = o.selected), r = a, pt(n, r) } return ut(t, e), t }(Tn),
			Ln = 0,
			In = 2,
			$n = function(e) {
				function t() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ct(this, t); var r = pt(this, e.call(this)),
						i = void 0,
						o = r; if(tt) { o = Le.createElement("custom"); for(var a in t.prototype) "constructor" !== a && (o[a] = t.prototype[a]) } var s = new An(n); if(o.kind = s.kind, o.src = s.src, o.srclang = s.language, o.label = s.label, o.default = s.default, Object.defineProperty(o, "readyState", { get: function() { return i } }), Object.defineProperty(o, "track", { get: function() { return s } }), i = Ln, s.addEventListener("loadeddata", function() { i = In, o.trigger({ type: "load", target: o }) }), tt) { var l; return l = o, pt(r, l) } return r } return ut(t, e), t }(Rt);
		$n.prototype.allowedEvents_ = { load: "load" }, $n.NONE = Ln, $n.LOADING = 1, $n.LOADED = In, $n.ERROR = 3;
		var Dn = { audio: { ListClass: dn, TrackClass: Pn, capitalName: "Audio" }, video: { ListClass: fn, TrackClass: jn, capitalName: "Video" }, text: { ListClass: vn, TrackClass: An, capitalName: "Text" } };
		Object.keys(Dn).forEach(function(e) { Dn[e].getterName = e + "Tracks", Dn[e].privateName = e + "Tracks_" });
		var Nn = { remoteText: { ListClass: vn, TrackClass: An, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" }, remoteTextEl: { ListClass: mn, TrackClass: $n, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" } },
			Rn = ne(Dn, Nn);
		Nn.names = Object.keys(Nn), Dn.names = Object.keys(Dn), Rn.names = [].concat(Nn.names).concat(Dn.names);
		var zn = function(e) {
			function t() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
				ct(this, t), n.reportTouchActivity = !1; var i = pt(this, e.call(this, null, n, r)); return i.hasStarted_ = !1, i.on("playing", function() { this.hasStarted_ = !0 }), i.on("loadstart", function() { this.hasStarted_ = !1 }), Rn.names.forEach(function(e) { var t = Rn[e];
					n && n[t.getterName] && (i[t.privateName] = n[t.getterName]) }), i.featuresProgressEvents || i.manualProgressOn(), i.featuresTimeupdateEvents || i.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(e) {!1 === n["native" + e + "Tracks"] && (i["featuresNative" + e + "Tracks"] = !1) }), !1 === n.nativeCaptions || !1 === n.nativeTextTracks ? i.featuresNativeTextTracks = !1 : !0 !== n.nativeCaptions && !0 !== n.nativeTextTracks || (i.featuresNativeTextTracks = !0), i.featuresNativeTextTracks || i.emulateTextTracks(), i.autoRemoteTextTracks_ = new Rn.text.ListClass, i.initTrackListeners(), n.nativeControlsForTouch || i.emitTapEvents(), i.constructor && (i.name_ = i.constructor.name || "Unknown Tech"), i } return ut(t, e), t.prototype.triggerSourceset = function(e) { var t = this;
				this.isReady_ || this.one("ready", function() { return t.setTimeout(function() { return t.triggerSourceset(e) }, 1) }), this.trigger({ src: e, type: "sourceset" }) }, t.prototype.manualProgressOn = function() { this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress) }, t.prototype.manualProgressOff = function() { this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange) }, t.prototype.trackProgress = function(e) { this.stopTrackingProgress(), this.progressInterval = this.setInterval($t(this, function() { var e = this.bufferedPercent();
					this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress() }), 500) }, t.prototype.onDurationChange = function(e) { this.duration_ = this.duration() }, t.prototype.buffered = function() { return ae(0, 0) }, t.prototype.bufferedPercent = function() { return se(this.buffered(), this.duration_) }, t.prototype.stopTrackingProgress = function() { this.clearInterval(this.progressInterval) }, t.prototype.manualTimeUpdatesOn = function() { this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime) }, t.prototype.manualTimeUpdatesOff = function() { this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime) }, t.prototype.trackCurrentTime = function() { this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() { this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, 250) }, t.prototype.stopTrackingCurrentTime = function() { this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, t.prototype.dispose = function() { this.clearTracks(Dn.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this) }, t.prototype.clearTracks = function(e) { var t = this;
				e = [].concat(e), e.forEach(function(e) { for(var n = t[e + "Tracks"]() || [], r = n.length; r--;) { var i = n[r]; "text" === e && t.removeRemoteTextTrack(i), n.removeTrack(i) } }) }, t.prototype.cleanupAutoTextTracks = function() { for(var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) { var n = e[t];
					this.removeRemoteTextTrack(n) } }, t.prototype.reset = function() {}, t.prototype.error = function(e) { return void 0 !== e && (this.error_ = new le(e), this.trigger("error")), this.error_ }, t.prototype.played = function() { return this.hasStarted_ ? ae(0, 0) : ae() }, t.prototype.setCurrentTime = function() { this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, t.prototype.initTrackListeners = function() { var e = this;
				Dn.names.forEach(function(t) { var n = Dn[t],
						r = function() { e.trigger(t + "trackchange") },
						i = e[n.getterName]();
					i.addEventListener("removetrack", r), i.addEventListener("addtrack", r), e.on("dispose", function() { i.removeEventListener("removetrack", r), i.removeEventListener("addtrack", r) }) }) }, t.prototype.addWebVttScript_ = function() { var e = this; if(!je.WebVTT)
					if(Le.body.contains(this.el())) { if(!this.options_["vtt.js"] && l(Ne) && Object.keys(Ne).length > 0) return void this.trigger("vttjsloaded"); var t = Le.createElement("script");
						t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", t.onload = function() { e.trigger("vttjsloaded") }, t.onerror = function() { e.trigger("vttjserror") }, this.on("dispose", function() { t.onload = null, t.onerror = null }), je.WebVTT = !0, this.el().parentNode.appendChild(t) } else this.ready(this.addWebVttScript_) }, t.prototype.emulateTextTracks = function() { var e = this,
					t = this.textTracks(),
					n = this.remoteTextTracks(),
					r = function(e) { return t.addTrack(e.track) },
					i = function(e) { return t.removeTrack(e.track) };
				n.on("addtrack", r), n.on("removetrack", i), this.addWebVttScript_(); var o = function() { return e.trigger("texttrackchange") },
					a = function() { o(); for(var e = 0; e < t.length; e++) { var n = t[e];
							n.removeEventListener("cuechange", o), "showing" === n.mode && n.addEventListener("cuechange", o) } };
				a(), t.addEventListener("change", a), t.addEventListener("addtrack", a), t.addEventListener("removetrack", a), this.on("dispose", function() { n.off("addtrack", r), n.off("removetrack", i), t.removeEventListener("change", a), t.removeEventListener("addtrack", a), t.removeEventListener("removetrack", a); for(var e = 0; e < t.length; e++) { t[e].removeEventListener("cuechange", o) } }) }, t.prototype.addTextTrack = function(e, t, n) { if(!e) throw new Error("TextTrack kind is required but was not provided"); return pe(this, e, t, n) }, t.prototype.createRemoteTextTrack = function(e) { var t = ne(e, { tech: this }); return new Nn.remoteTextEl.TrackClass(t) }, t.prototype.addRemoteTextTrack = function() { var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					n = arguments[1],
					r = this.createRemoteTextTrack(t); return !0 !== n && !1 !== n && (bt.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), n = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== n && this.ready(function() { return e.autoRemoteTextTracks_.addTrack(r.track) }), r }, t.prototype.removeRemoteTextTrack = function(e) { var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
				this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e) }, t.prototype.getVideoPlaybackQuality = function() { return {} }, t.prototype.setPoster = function() {}, t.prototype.playsinline = function() {}, t.prototype.setPlaysinline = function() {}, t.prototype.canPlayType = function() { return "" }, t.canPlayType = function() { return "" }, t.canPlaySource = function(e, n) { return t.canPlayType(e.type) }, t.isTech = function(e) { return e.prototype instanceof t || e instanceof t || e === t }, t.registerTech = function(e, n) { if(t.techs_ || (t.techs_ = {}), !t.isTech(n)) throw new Error("Tech " + e + " must be a Tech"); if(!t.canPlayType) throw new Error("Techs must have a static canPlayType method on them"); if(!t.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them"); return e = ee(e), t.techs_[e] = n, "Tech" !== e && t.defaultTechOrder_.push(e), n }, t.getTech = function(e) { if(e) return e = ee(e), t.techs_ && t.techs_[e] ? t.techs_[e] : je && je.videojs && je.videojs[e] ? (bt.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), je.videojs[e]) : void 0 }, t }(qt);
		Rn.names.forEach(function(e) { var t = Rn[e];
			zn.prototype[t.getterName] = function() { return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName] } }), zn.prototype.featuresVolumeControl = !0, zn.prototype.featuresMuteControl = !0, zn.prototype.featuresFullscreenResize = !1, zn.prototype.featuresPlaybackRate = !1, zn.prototype.featuresProgressEvents = !1, zn.prototype.featuresSourceset = !1, zn.prototype.featuresTimeupdateEvents = !1, zn.prototype.featuresNativeTextTracks = !1, zn.withSourceHandlers = function(e) { e.registerSourceHandler = function(t, n) { var r = e.sourceHandlers;
				r || (r = e.sourceHandlers = []), void 0 === n && (n = r.length), r.splice(n, 0, t) }, e.canPlayType = function(t) { for(var n = e.sourceHandlers || [], r = void 0, i = 0; i < n.length; i++)
					if(r = n[i].canPlayType(t)) return r; return "" }, e.selectSourceHandler = function(t, n) { for(var r = e.sourceHandlers || [], i = 0; i < r.length; i++)
					if(r[i].canHandleSource(t, n)) return r[i]; return null }, e.canPlaySource = function(t, n) { var r = e.selectSourceHandler(t, n); return r ? r.canHandleSource(t, n) : "" }, ["seekable", "seeking", "duration"].forEach(function(e) { var t = this[e]; "function" == typeof t && (this[e] = function() { return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments) }) }, e.prototype), e.prototype.setSource = function(t) { var n = e.selectSourceHandler(t, this.options_);
				n || (e.nativeSourceHandler ? n = e.nativeSourceHandler : bt.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), n !== e.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = n.handleSource(t, this, this.options_), this.on("dispose", this.disposeSourceHandler) }, e.prototype.disposeSourceHandler = function() { this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null) } }, qt.registerComponent("Tech", zn), zn.registerTech("Tech", zn), zn.defaultTechOrder_ = [];
		var Bn = {},
			Fn = {},
			Hn = {},
			Vn = { buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1 },
			Gn = { setCurrentTime: 1 },
			Wn = { play: 1, pause: 1 },
			Un = { opus: "video/ogg", ogv: "video/ogg", mp4: "video/mp4", mov: "video/mp4", m4v: "video/mp4", mkv: "video/x-matroska", mp3: "audio/mpeg", aac: "audio/aac", oga: "audio/ogg", m3u8: "application/x-mpegURL" },
			Xn = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = xn(e); return Un[t.toLowerCase()] || "" },
			qn = function(e, t) { if(!t) return ""; if(e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type; var n = e.cache_.sources.filter(function(e) { return e.src === t }); if(n.length) return n[0].type; for(var r = e.$$("source"), i = 0; i < r.length; i++) { var o = r[i]; if(o.type && o.src && o.src === t) return o.type } return Xn(t) },
			Yn = function e(t) { if(Array.isArray(t)) { var n = [];
					t.forEach(function(t) { t = e(t), Array.isArray(t) ? n = n.concat(t) : s(t) && n.push(t) }), t = n } else t = "string" == typeof t && t.trim() ? [Ce({ src: t })] : s(t) && "string" == typeof t.src && t.src && t.src.trim() ? [Ce(t)] : []; return t },
			Kn = function(e) {
				function t(n, r, i) { ct(this, t); var o = ne({ createEl: !1 }, r),
						a = pt(this, e.call(this, n, o, i)); if(r.playerOptions.sources && 0 !== r.playerOptions.sources.length) n.src(r.playerOptions.sources);
					else
						for(var s = 0, l = r.playerOptions.techOrder; s < l.length; s++) { var c = ee(l[s]),
								u = zn.getTech(c); if(c || (u = qt.getComponent(c)), u && u.isSupported()) { n.loadTech_(c); break } }
					return a } return ut(t, e), t }(qt);
		qt.registerComponent("MediaLoader", Kn);
		var Qn = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.emitTapEvents(), i.enable(), i } return ut(t, e), t.prototype.createEl = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				n = a({ innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>', className: this.buildCSSClass(), tabIndex: 0 }, n), "button" === t && bt.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), r = a({ role: "button" }, r), this.tabIndex_ = n.tabIndex; var i = e.prototype.createEl.call(this, t, n, r); return this.createControlTextEl(i), i }, t.prototype.dispose = function() { this.controlTextEl_ = null, e.prototype.dispose.call(this) }, t.prototype.createControlTextEl = function(e) { return this.controlTextEl_ = g("span", { className: "vjs-control-text" }, { "aria-live": "polite" }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_ }, t.prototype.controlText = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el(); if(void 0 === e) return this.controlText_ || "Need Text"; var n = this.localize(e);
				this.controlText_ = e, y(this.controlTextEl_, n), this.nonIconControl || t.setAttribute("title", n) }, t.prototype.buildCSSClass = function() { return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.enable = function() { this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur)) }, t.prototype.disable = function() { this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur) }, t.prototype.handleClick = function(e) {}, t.prototype.handleFocus = function(e) { X(Le, "keydown", $t(this, this.handleKeyPress)) }, t.prototype.handleKeyPress = function(t) { 32 === t.which || 13 === t.which ? (t.preventDefault(), this.trigger("click")) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t) }, t.prototype.handleBlur = function(e) { q(Le, "keydown", $t(this, this.handleKeyPress)) }, t }(qt);
		qt.registerComponent("ClickableComponent", Qn);
		var Jn = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.update(), n.on("posterchange", $t(i, i.update)), i } return ut(t, e), t.prototype.dispose = function() { this.player().off("posterchange", this.update), e.prototype.dispose.call(this) }, t.prototype.createEl = function() { var e = g("div", { className: "vjs-poster", tabIndex: -1 }); return at || (this.fallbackImg_ = g("img"), e.appendChild(this.fallbackImg_)), e }, t.prototype.update = function(e) { var t = this.player().poster();
				this.setSrc(t), t ? this.show() : this.hide() }, t.prototype.setSrc = function(e) { if(this.fallbackImg_) this.fallbackImg_.src = e;
				else { var t = "";
					e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t } }, t.prototype.handleClick = function(e) { this.player_.controls() && (this.player_.paused() ? ue(this.player_.play()) : this.player_.pause()) }, t }(Qn);
		qt.registerComponent("PosterImage", Jn);
		var Zn = { monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace', monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif' },
			er = function(e) {
				function t(n, r, i) { ct(this, t); var o = pt(this, e.call(this, n, r, i)); return n.on("loadstart", $t(o, o.toggleDisplay)), n.on("texttrackchange", $t(o, o.updateDisplay)), n.on("loadstart", $t(o, o.preselectTrack)), n.ready($t(o, function() { if(n.tech_ && n.tech_.featuresNativeTextTracks) return void this.hide();
						n.on("fullscreenchange", $t(this, this.updateDisplay)); for(var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
						this.preselectTrack() })), o } return ut(t, e), t.prototype.preselectTrack = function() { for(var e = { captions: 1, subtitles: 1 }, t = this.player_.textTracks(), n = this.player_.cache_.selectedLanguage, r = void 0, i = void 0, o = void 0, a = 0; a < t.length; a++) { var s = t[a];
						n && n.enabled && n.language === s.language ? s.kind === n.kind ? o = s : o || (o = s) : n && !n.enabled ? (o = null, r = null, i = null) : s.default && ("descriptions" !== s.kind || r ? s.kind in e && !i && (i = s) : r = s) } o ? o.mode = "showing" : i ? i.mode = "showing" : r && (r.mode = "showing") }, t.prototype.toggleDisplay = function() { this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show() }, t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-text-track-display" }, { "aria-live": "off", "aria-atomic": "true" }) }, t.prototype.clearDisplay = function() { "function" == typeof je.WebVTT && je.WebVTT.processCues(je, [], this.el_) }, t.prototype.updateDisplay = function() { var e = this.player_.textTracks();
					this.clearDisplay(); for(var t = null, n = null, r = e.length; r--;) { var i = e[r]; "showing" === i.mode && ("descriptions" === i.kind ? t = i : n = i) } n ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(n)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t)) }, t.prototype.updateForTrack = function(e) { if("function" == typeof je.WebVTT && e.activeCues) { for(var t = [], n = 0; n < e.activeCues.length; n++) t.push(e.activeCues[n]); if(je.WebVTT.processCues(je, t, this.el_), this.player_.textTrackSettings)
							for(var r = this.player_.textTrackSettings.getValues(), i = t.length; i--;) { var o = t[i]; if(o) { var a = o.displayState; if(r.color && (a.firstChild.style.color = r.color), r.textOpacity && xe(a.firstChild, "color", Ee(r.color || "#fff", r.textOpacity)), r.backgroundColor && (a.firstChild.style.backgroundColor = r.backgroundColor), r.backgroundOpacity && xe(a.firstChild, "backgroundColor", Ee(r.backgroundColor || "#000", r.backgroundOpacity)), r.windowColor && (r.windowOpacity ? xe(a, "backgroundColor", Ee(r.windowColor, r.windowOpacity)) : a.style.backgroundColor = r.windowColor), r.edgeStyle && ("dropshadow" === r.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === r.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === r.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === r.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), r.fontPercent && 1 !== r.fontPercent) { var s = je.parseFloat(a.style.fontSize);
										a.style.fontSize = s * r.fontPercent + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px" } r.fontFamily && "default" !== r.fontFamily && ("small-caps" === r.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = Zn[r.fontFamily]) } } } }, t }(qt);
		qt.registerComponent("TextTrackDisplay", er);
		var tr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { var t = this.player_.isAudio(),
					n = this.localize(t ? "Audio Player" : "Video Player"),
					r = g("span", { className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [n]) }),
					i = e.prototype.createEl.call(this, "div", { className: "vjs-loading-spinner", dir: "ltr" }); return i.appendChild(r), i }, t }(qt);
		qt.registerComponent("LoadingSpinner", tr);
		var nr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				e = "button", t = a({ innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>', className: this.buildCSSClass() }, t), n = a({ type: "button" }, n); var r = qt.prototype.createEl.call(this, e, t, n); return this.createControlTextEl(r), r }, t.prototype.addChild = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = this.constructor.name; return bt.warn("Adding an actionable (user controllable) child to a Button (" + n + ") is not supported; use a ClickableComponent instead."), qt.prototype.addChild.call(this, e, t) }, t.prototype.enable = function() { e.prototype.enable.call(this), this.el_.removeAttribute("disabled") }, t.prototype.disable = function() { e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled") }, t.prototype.handleKeyPress = function(t) { 32 !== t.which && 13 !== t.which && e.prototype.handleKeyPress.call(this, t) }, t }(Qn);
		qt.registerComponent("Button", nr);
		var rr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-big-play-button" }, t.prototype.handleClick = function(e) { var t = this.player_.play(); if(this.mouseused_ && e.clientX && e.clientY) return void ue(t); var n = this.player_.getChild("controlBar"),
					r = n && n.getChild("playToggle"); if(!r) return void this.player_.focus(); var i = function() { return r.focus() };
				ce(t) ? t.then(i, function() {}) : this.setTimeout(i, 1) }, t.prototype.handleKeyPress = function(t) { this.mouseused_ = !1, e.prototype.handleKeyPress.call(this, t) }, t.prototype.handleMouseDown = function(e) { this.mouseused_ = !0 }, t }(nr);
		rr.prototype.controlText_ = "Play Video", qt.registerComponent("BigPlayButton", rr);
		var ir = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.controlText(r && r.controlText || i.localize("Close")), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-close-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.handleClick = function(e) { this.trigger({ type: "close", bubbles: !1 }) }, t }(nr);
		qt.registerComponent("CloseButton", ir);
		var or = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "play", i.handlePlay), i.on(n, "pause", i.handlePause), i.on(n, "ended", i.handleEnded), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-play-control " + e.prototype.buildCSSClass.call(this) }, t.prototype.handleClick = function(e) { this.player_.paused() ? this.player_.play() : this.player_.pause() }, t.prototype.handleSeeked = function(e) { this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e) }, t.prototype.handlePlay = function(e) { this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause") }, t.prototype.handlePause = function(e) { this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play") }, t.prototype.handleEnded = function(e) { this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked) }, t }(nr);
		or.prototype.controlText_ = "Play", qt.registerComponent("PlayToggle", or);
		var ar = function(e, t) { e = e < 0 ? 0 : e; var n = Math.floor(e % 60),
					r = Math.floor(e / 60 % 60),
					i = Math.floor(e / 3600),
					o = Math.floor(t / 60 % 60),
					a = Math.floor(t / 3600); return(isNaN(e) || e === 1 / 0) && (i = r = n = "-"), i = i > 0 || a > 0 ? i + ":" : "", r = ((i || o >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, i + r + n },
			sr = ar,
			lr = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e; return sr(e, t) },
			cr = function(e) {
				function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.throttledUpdateContent = Dt($t(i, i.updateContent), 25), i.on(n, "timeupdate", i.throttledUpdateContent), i } return ut(t, e), t.prototype.createEl = function(t) { var n = this.buildCSSClass(),
						r = e.prototype.createEl.call(this, "div", { className: n + " vjs-time-control vjs-control", innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>" }); return this.contentEl_ = g("span", { className: n + "-display" }, { "aria-live": "off" }), this.updateTextNode_(), r.appendChild(this.contentEl_), r }, t.prototype.dispose = function() { this.contentEl_ = null, this.textNode_ = null, e.prototype.dispose.call(this) }, t.prototype.updateTextNode_ = function() { if(this.contentEl_) { for(; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
						this.textNode_ = Le.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_) } }, t.prototype.formatTime_ = function(e) { return lr(e) }, t.prototype.updateFormattedTime_ = function(e) { var t = this.formatTime_(e);
					t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_)) }, t.prototype.updateContent = function(e) {}, t }(qt);
		cr.prototype.labelText_ = "Time", cr.prototype.controlText_ = "Time", qt.registerComponent("TimeDisplay", cr);
		var ur = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "ended", i.handleEnded), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-current-time" }, t.prototype.updateContent = function(e) { var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
				this.updateFormattedTime_(t) }, t.prototype.handleEnded = function(e) { this.player_.duration() && this.updateFormattedTime_(this.player_.duration()) }, t }(cr);
		ur.prototype.labelText_ = "Current Time", ur.prototype.controlText_ = "Current Time", qt.registerComponent("CurrentTimeDisplay", ur);
		var pr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "durationchange", i.updateContent), i.on(n, "loadedmetadata", i.throttledUpdateContent), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-duration" }, t.prototype.updateContent = function(e) { var t = this.player_.duration();
				t && this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t)) }, t }(cr);
		pr.prototype.labelText_ = "Duration", pr.prototype.controlText_ = "Duration", qt.registerComponent("DurationDisplay", pr);
		var dr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-time-control vjs-time-divider", innerHTML: "<div><span>/</span></div>" }) }, t }(qt);
		qt.registerComponent("TimeDivider", dr);
		var hr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "durationchange", i.throttledUpdateContent), i.on(n, "ended", i.handleEnded), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-remaining-time" }, t.prototype.formatTime_ = function(t) { return "-" + e.prototype.formatTime_.call(this, t) }, t.prototype.updateContent = function(e) { this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime())) }, t.prototype.handleEnded = function(e) { this.player_.duration() && this.updateFormattedTime_(0) }, t }(cr);
		hr.prototype.labelText_ = "Remaining Time", hr.prototype.controlText_ = "Remaining Time", qt.registerComponent("RemainingTimeDisplay", hr);
		var fr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i } return ut(t, e), t.prototype.createEl = function() { var t = e.prototype.createEl.call(this, "div", { className: "vjs-live-control vjs-control" }); return this.contentEl_ = g("div", { className: "vjs-live-display", innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE") }, { "aria-live": "off" }), t.appendChild(this.contentEl_), t }, t.prototype.dispose = function() { this.contentEl_ = null, e.prototype.dispose.call(this) }, t.prototype.updateShowing = function(e) { this.player().duration() === 1 / 0 ? this.show() : this.hide() }, t }(qt);
		qt.registerComponent("LiveDisplay", fr);
		var vr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i } return ut(t, e), t.prototype.enabled = function() { return this.enabled_ }, t.prototype.enable = function() { this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0) }, t.prototype.disable = function() { if(this.enabled()) { var e = this.bar.el_.ownerDocument;
					this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1 } }, t.prototype.createEl = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return n.className = n.className + " vjs-slider", n = a({ tabIndex: 0 }, n), r = a({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, r), e.prototype.createEl.call(this, t, n, r) }, t.prototype.handleMouseDown = function(e) { var t = this.bar.el_.ownerDocument; "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || Ze || e.preventDefault(), M(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e) }, t.prototype.handleMouseMove = function(e) {}, t.prototype.handleMouseUp = function() { var e = this.bar.el_.ownerDocument;
				A(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update() }, t.prototype.update = function() { if(this.el_) { var e = this.getPercent(),
						t = this.bar; if(t) {
						("number" != typeof e || e !== e || e < 0 || e === 1 / 0) && (e = 0); var n = (100 * e).toFixed(2) + "%",
							r = t.el().style; return this.vertical() ? r.height = n : r.width = n, e } } }, t.prototype.calculateDistance = function(e) { var t = L(this.el_, e); return this.vertical() ? t.y : t.x }, t.prototype.handleFocus = function() { this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress) }, t.prototype.handleKeyPress = function(e) { 37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward()) }, t.prototype.handleBlur = function() { this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress) }, t.prototype.handleClick = function(e) { e.stopImmediatePropagation(), e.preventDefault() }, t.prototype.vertical = function(e) { if(void 0 === e) return this.vertical_ || !1;
				this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal") }, t }(qt);
		qt.registerComponent("Slider", vr);
		var mr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.partEls_ = [], i.on(n, "progress", i.update), i } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-load-progress", innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>" }) }, t.prototype.dispose = function() { this.partEls_ = null, e.prototype.dispose.call(this) }, t.prototype.update = function(e) { var t = this.player_.buffered(),
					n = this.player_.duration(),
					r = this.player_.bufferedEnd(),
					i = this.partEls_,
					o = function(e, t) { var n = e / t || 0; return 100 * (n >= 1 ? 1 : n) + "%" };
				this.el_.style.width = o(r, n); for(var a = 0; a < t.length; a++) { var s = t.start(a),
						l = t.end(a),
						c = i[a];
					c || (c = this.el_.appendChild(g()), i[a] = c), c.style.left = o(s, r), c.style.width = o(l - s, r) } for(var u = i.length; u > t.length; u--) this.el_.removeChild(i[u - 1]);
				i.length = t.length }, t }(qt);
		qt.registerComponent("LoadProgressBar", mr);
		var gr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-time-tooltip" }) }, t.prototype.update = function(e, t, n) { var r = P(this.el_),
					i = P(this.player_.el()),
					o = e.width * t; if(i && r) { var a = e.left - i.left + o,
						s = e.width - o + (i.right - e.right),
						l = r.width / 2;
					a < l ? l += l - a : s < l && (l = s), l < 0 ? l = 0 : l > r.width && (l = r.width), this.el_.style.right = "-" + l + "px", y(this.el_, n) } }, t }(qt);
		qt.registerComponent("TimeTooltip", gr);
		var yr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-play-progress vjs-slider-bar", innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>" }) }, t.prototype.update = function(e, t) { var n = this;
				this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() { var r = n.player_.scrubbing() ? n.player_.getCache().currentTime : n.player_.currentTime(),
						i = lr(r, n.player_.duration()),
						o = n.getChild("timeTooltip");
					o && o.update(e, t, i) }) }, t }(qt);
		yr.prototype.options_ = { children: [] }, nt && !(nt > 8) || We || Xe || yr.prototype.options_.children.push("timeTooltip"), qt.registerComponent("PlayProgressBar", yr);
		var br = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.update = Dt($t(i, i.update), 25), i } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" }) }, t.prototype.update = function(e, t) { var n = this;
				this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() { var r = n.player_.duration(),
						i = lr(t * r, r);
					n.el_.style.left = e.width * t + "px", n.getChild("timeTooltip").update(e, t, i) }) }, t }(qt);
		br.prototype.options_ = { children: ["timeTooltip"] }, qt.registerComponent("MouseTimeDisplay", br);
		var _r = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.setEventHandlers_(), i } return ut(t, e), t.prototype.setEventHandlers_ = function() { var e = this;
				this.update = Dt($t(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function() { e.clearInterval(e.updateInterval), e.updateInterval = e.setInterval(function() { e.requestAnimationFrame(function() { e.update() }) }, 30) }), this.on(this.player_, ["ended", "pause", "waiting"], function() { e.clearInterval(e.updateInterval) }), this.on(this.player_, ["timeupdate", "ended"], this.update) }, t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") }) }, t.prototype.update_ = function(e, t) { var n = this.player_.duration();
				this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [lr(e, n), lr(n, n)], "{1} of {2}")), this.bar.update(P(this.el_), t) }, t.prototype.update = function(t) { var n = e.prototype.update.call(this); return this.update_(this.getCurrentTime_(), n), n }, t.prototype.getCurrentTime_ = function() { return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime() }, t.prototype.handleEnded = function(e) { this.update_(this.player_.duration(), 1) }, t.prototype.getPercent = function() { var e = this.getCurrentTime_() / this.player_.duration(); return e >= 1 ? 1 : e }, t.prototype.handleMouseDown = function(t) { z(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t)) }, t.prototype.handleMouseMove = function(e) { if(z(e)) { var t = this.calculateDistance(e) * this.player_.duration();
					t === this.player_.duration() && (t -= .1), this.player_.currentTime(t) } }, t.prototype.enable = function() { e.prototype.enable.call(this); var t = this.getChild("mouseTimeDisplay");
				t && t.show() }, t.prototype.disable = function() { e.prototype.disable.call(this); var t = this.getChild("mouseTimeDisplay");
				t && t.hide() }, t.prototype.handleMouseUp = function(t) { e.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }), this.videoWasPlaying && ue(this.player_.play()) }, t.prototype.stepForward = function() { this.player_.currentTime(this.player_.currentTime() + 5) }, t.prototype.stepBack = function() { this.player_.currentTime(this.player_.currentTime() - 5) }, t.prototype.handleAction = function(e) { this.player_.paused() ? this.player_.play() : this.player_.pause() }, t.prototype.handleKeyPress = function(t) { 32 === t.which || 13 === t.which ? (t.preventDefault(), this.handleAction(t)) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t) }, t }(vr);
		_r.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" }, nt && !(nt > 8) || We || Xe || _r.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), _r.prototype.playerEvent = "timeupdate", qt.registerComponent("SeekBar", _r);
		var wr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.handleMouseMove = Dt($t(i, i.handleMouseMove), 25), i.throttledHandleMouseSeek = Dt($t(i, i.handleMouseSeek), 25), i.enable(), i } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-progress-control vjs-control" }) }, t.prototype.handleMouseMove = function(e) { var t = this.getChild("seekBar"); if(t) { var n = t.getChild("mouseTimeDisplay"),
						r = t.el(),
						i = P(r),
						o = L(r, e).x;
					o > 1 ? o = 1 : o < 0 && (o = 0), n && n.update(i, o) } }, t.prototype.handleMouseSeek = function(e) { var t = this.getChild("seekBar");
				t && t.handleMouseMove(e) }, t.prototype.enabled = function() { return this.enabled_ }, t.prototype.disable = function() { this.children().forEach(function(e) { return e.disable && e.disable() }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1) }, t.prototype.enable = function() { this.children().forEach(function(e) { return e.enable && e.enable() }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0) }, t.prototype.handleMouseDown = function(e) { var t = this.el_.ownerDocument,
					n = this.getChild("seekBar");
				n && n.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp) }, t.prototype.handleMouseUp = function(e) { var t = this.el_.ownerDocument,
					n = this.getChild("seekBar");
				n && n.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp) }, t }(qt);
		wr.prototype.options_ = { children: ["seekBar"] }, qt.registerComponent("ProgressControl", wr);
		var Tr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "fullscreenchange", i.handleFullscreenChange), !1 === Le[Yt.fullscreenEnabled] && i.disable(), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this) }, t.prototype.handleFullscreenChange = function(e) { this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen") }, t.prototype.handleClick = function(e) { this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen() }, t }(nr);
		Tr.prototype.controlText_ = "Fullscreen", qt.registerComponent("FullscreenToggle", Tr);
		var Cr = function(e, t) { t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() { t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden") }) },
			Er = function(e) {
				function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>' }) }, t }(qt);
		qt.registerComponent("VolumeLevel", Er);
		var xr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on("slideractive", i.updateLastVolume_), i.on(n, "volumechange", i.updateARIAAttributes), n.ready(function() { return i.updateARIAAttributes() }), i } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" }) }, t.prototype.handleMouseDown = function(t) { z(t) && e.prototype.handleMouseDown.call(this, t) }, t.prototype.handleMouseMove = function(e) { z(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e))) }, t.prototype.checkMuted = function() { this.player_.muted() && this.player_.muted(!1) }, t.prototype.getPercent = function() { return this.player_.muted() ? 0 : this.player_.volume() }, t.prototype.stepForward = function() { this.checkMuted(), this.player_.volume(this.player_.volume() + .1) }, t.prototype.stepBack = function() { this.checkMuted(), this.player_.volume(this.player_.volume() - .1) }, t.prototype.updateARIAAttributes = function(e) { var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
				this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%") }, t.prototype.volumeAsPercentage_ = function() { return Math.round(100 * this.player_.volume()) }, t.prototype.updateLastVolume_ = function() { var e = this,
					t = this.player_.volume();
				this.one("sliderinactive", function() { 0 === e.player_.volume() && e.player_.lastVolume_(t) }) }, t }(vr);
		xr.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }, xr.prototype.playerEvent = "volumechange", qt.registerComponent("VolumeBar", xr);
		var Sr = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ct(this, t), r.vertical = r.vertical || !1, (void 0 === r.volumeBar || l(r.volumeBar)) && (r.volumeBar = r.volumeBar || {}, r.volumeBar.vertical = r.vertical); var i = pt(this, e.call(this, n, r)); return Cr(i, n), i.throttledHandleMouseMove = Dt($t(i, i.handleMouseMove), 25), i.on("mousedown", i.handleMouseDown), i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function() { i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive") }), i.on(i.volumeBar, ["blur", "sliderinactive"], function() { i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive") }), i } return ut(t, e), t.prototype.createEl = function() { var t = "vjs-volume-horizontal"; return this.options_.vertical && (t = "vjs-volume-vertical"), e.prototype.createEl.call(this, "div", { className: "vjs-volume-control vjs-control " + t }) }, t.prototype.handleMouseDown = function(e) { var t = this.el_.ownerDocument;
				this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp) }, t.prototype.handleMouseUp = function(e) { var t = this.el_.ownerDocument;
				this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp) }, t.prototype.handleMouseMove = function(e) { this.volumeBar.handleMouseMove(e) }, t }(qt);
		Sr.prototype.options_ = { children: ["volumeBar"] }, qt.registerComponent("VolumeControl", Sr);
		var kr = function(e, t) { t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() { t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden") }) },
			Or = function(e) {
				function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return kr(i, n), i.on(n, ["loadstart", "volumechange"], i.update), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-mute-control " + e.prototype.buildCSSClass.call(this) }, t.prototype.handleClick = function(e) { var t = this.player_.volume(),
						n = this.player_.lastVolume_(); if(0 === t) { var r = n < .1 ? .1 : n;
						this.player_.volume(r), this.player_.muted(!1) } else this.player_.muted(!this.player_.muted()) }, t.prototype.update = function(e) { this.updateIcon_(), this.updateControlText_() }, t.prototype.updateIcon_ = function() { var e = this.player_.volume(),
						t = 3;
					We && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2); for(var n = 0; n < 4; n++) T(this.el_, "vjs-vol-" + n);
					w(this.el_, "vjs-vol-" + t) }, t.prototype.updateControlText_ = function() { var e = this.player_.muted() || 0 === this.player_.volume(),
						t = e ? "Unmute" : "Mute";
					this.controlText() !== t && this.controlText(t) }, t }(nr);
		Or.prototype.controlText_ = "Mute", qt.registerComponent("MuteToggle", Or);
		var Mr = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ct(this, t), void 0 !== r.inline ? r.inline = r.inline : r.inline = !0, (void 0 === r.volumeControl || l(r.volumeControl)) && (r.volumeControl = r.volumeControl || {}, r.volumeControl.vertical = !r.inline); var i = pt(this, e.call(this, n, r)); return i.on(n, ["loadstart"], i.volumePanelState_), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i } return ut(t, e), t.prototype.sliderActive_ = function() { this.addClass("vjs-slider-active") }, t.prototype.sliderInactive_ = function() { this.removeClass("vjs-slider-active") }, t.prototype.volumePanelState_ = function() { this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only") }, t.prototype.createEl = function() { var t = "vjs-volume-panel-horizontal"; return this.options_.inline || (t = "vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", { className: "vjs-volume-panel vjs-control " + t }) }, t }(qt);
		Mr.prototype.options_ = { children: ["muteToggle", "volumeControl"] }, qt.registerComponent("VolumePanel", Mr);
		var Ar = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return r && (i.menuButton_ = r.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyPress), i } return ut(t, e), t.prototype.addItem = function(e) { this.addChild(e), e.on("click", $t(this, function(t) { this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== e.name() && this.menuButton_.focus()) })) }, t.prototype.createEl = function() { var t = this.options_.contentElType || "ul";
				this.contentEl_ = g(t, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu"); var n = e.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" }); return n.appendChild(this.contentEl_), X(n, "click", function(e) { e.preventDefault(), e.stopImmediatePropagation() }), n }, t.prototype.dispose = function() { this.contentEl_ = null, e.prototype.dispose.call(this) }, t.prototype.handleKeyPress = function(e) { 37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack()) }, t.prototype.stepForward = function() { var e = 0;
				void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e) }, t.prototype.stepBack = function() { var e = 0;
				void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e) }, t.prototype.focus = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = this.children().slice();
				t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus()) }, t }(qt);
		qt.registerComponent("Menu", Ar);
		var Pr = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ct(this, t); var i = pt(this, e.call(this, n, r));
				i.menuButton_ = new nr(n, r), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true"); var o = nr.prototype.buildCSSClass(); return i.menuButton_.el_.className = i.buildCSSClass() + " " + o, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "focus", i.handleFocus), i.on(i.menuButton_, "blur", i.handleBlur), i.on("keydown", i.handleSubmenuKeyPress), i } return ut(t, e), t.prototype.update = function() { var e = this.createMenu();
				this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show() }, t.prototype.createMenu = function() { var e = new Ar(this.player_, { menuButton: this }); if(this.hideThreshold_ = 0, this.options_.title) { var t = g("li", { className: "vjs-menu-title", innerHTML: ee(this.options_.title), tabIndex: -1 });
					this.hideThreshold_ += 1, e.children_.unshift(t), b(t, e.contentEl()) } if(this.items = this.createItems(), this.items)
					for(var n = 0; n < this.items.length; n++) e.addItem(this.items[n]); return e }, t.prototype.createItems = function() {}, t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: this.buildWrapperCSSClass() }, {}) }, t.prototype.buildWrapperCSSClass = function() { var t = "vjs-menu-button"; return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + nr.prototype.buildCSSClass() + " " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildCSSClass = function() { var t = "vjs-menu-button"; return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this) }, t.prototype.controlText = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el(); return this.menuButton_.controlText(e, t) }, t.prototype.handleClick = function(e) { this.one(this.menu.contentEl(), "mouseleave", $t(this, function(e) { this.unpressButton(), this.el_.blur() })), this.buttonPressed_ ? this.unpressButton() : this.pressButton() }, t.prototype.focus = function() { this.menuButton_.focus() }, t.prototype.blur = function() { this.menuButton_.blur() }, t.prototype.handleFocus = function() { X(Le, "keydown", $t(this, this.handleKeyPress)) }, t.prototype.handleBlur = function() { q(Le, "keydown", $t(this, this.handleKeyPress)) }, t.prototype.handleKeyPress = function(e) { 27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus())) : 38 !== e.which && 40 !== e.which || this.buttonPressed_ || (this.pressButton(), e.preventDefault()) }, t.prototype.handleSubmenuKeyPress = function(e) { 27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus())) }, t.prototype.pressButton = function() { if(this.enabled_) { if(this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), We && v()) return;
					this.menu.focus() } }, t.prototype.unpressButton = function() { this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false")) }, t.prototype.disable = function() { this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable() }, t.prototype.enable = function() { this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable() }, t }(qt);
		qt.registerComponent("MenuButton", Pr);
		var jr = function(e) {
			function t(n, r) { ct(this, t); var i = r.tracks,
					o = pt(this, e.call(this, n, r)); if(o.items.length <= 1 && o.hide(), !i) return pt(o); var a = $t(o, o.update); return i.addEventListener("removetrack", a), i.addEventListener("addtrack", a), o.player_.on("ready", a), o.player_.on("dispose", function() { i.removeEventListener("removetrack", a), i.removeEventListener("addtrack", a) }), o } return ut(t, e), t }(Pr);
		qt.registerComponent("TrackButton", jr);
		var Lr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.selectable = r.selectable, i.isSelected_ = r.selected || !1, i.multiSelectable = r.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i } return ut(t, e), t.prototype.createEl = function(t, n, r) { return this.nonIconControl = !0, e.prototype.createEl.call(this, "li", a({ className: "vjs-menu-item", innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>", tabIndex: -1 }, n), r) }, t.prototype.handleClick = function(e) { this.selected(!0) }, t.prototype.selected = function(e) { this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1)) }, t }(Qn);
		qt.registerComponent("MenuItem", Lr);
		var Ir = function(e) {
			function t(n, r) { ct(this, t); var i = r.track,
					o = n.textTracks();
				r.label = i.label || i.language || "Unknown", r.selected = "showing" === i.mode; var a = pt(this, e.call(this, n, r));
				a.track = i; var s = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						a.handleTracksChange.apply(a, t) },
					l = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						a.handleSelectedLanguageChange.apply(a, t) }; if(n.on(["loadstart", "texttrackchange"], s), o.addEventListener("change", s), o.addEventListener("selectedlanguagechange", l), a.on("dispose", function() { n.off(["loadstart", "texttrackchange"], s), o.removeEventListener("change", s), o.removeEventListener("selectedlanguagechange", l) }), void 0 === o.onchange) { var c = void 0;
					a.on(["tap", "click"], function() { if("object" !== lt(je.Event)) try { c = new je.Event("change") } catch(e) {} c || (c = Le.createEvent("Event"), c.initEvent("change", !0, !0)), o.dispatchEvent(c) }) } return a.handleTracksChange(), a } return ut(t, e), t.prototype.handleClick = function(t) { var n = this.track.kind,
					r = this.track.kinds,
					i = this.player_.textTracks(); if(r || (r = [n]), e.prototype.handleClick.call(this, t), i)
					for(var o = 0; o < i.length; o++) { var a = i[o];
						a === this.track && r.indexOf(a.kind) > -1 ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled") } }, t.prototype.handleTracksChange = function(e) { var t = "showing" === this.track.mode;
				t !== this.isSelected_ && this.selected(t) }, t.prototype.handleSelectedLanguageChange = function(e) { if("showing" === this.track.mode) { var t = this.player_.cache_.selectedLanguage; if(t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
					this.player_.cache_.selectedLanguage = { enabled: !0, language: this.track.language, kind: this.track.kind } } }, t.prototype.dispose = function() { this.track = null, e.prototype.dispose.call(this) }, t }(Lr);
		qt.registerComponent("TextTrackMenuItem", Ir);
		var $r = function(e) {
			function t(n, r) { return ct(this, t), r.track = { player: n, kind: r.kind, kinds: r.kinds, default: !1, mode: "disabled" }, r.kinds || (r.kinds = [r.kind]), r.label ? r.track.label = r.label : r.track.label = r.kinds.join(" and ") + " off", r.selectable = !0, r.multiSelectable = !1, pt(this, e.call(this, n, r)) } return ut(t, e), t.prototype.handleTracksChange = function(e) { for(var t = this.player().textTracks(), n = !0, r = 0, i = t.length; r < i; r++) { var o = t[r]; if(this.options_.kinds.indexOf(o.kind) > -1 && "showing" === o.mode) { n = !1; break } } n !== this.isSelected_ && this.selected(n) }, t.prototype.handleSelectedLanguageChange = function(e) { for(var t = this.player().textTracks(), n = !0, r = 0, i = t.length; r < i; r++) { var o = t[r]; if(["captions", "descriptions", "subtitles"].indexOf(o.kind) > -1 && "showing" === o.mode) { n = !1; break } } n && (this.player_.cache_.selectedLanguage = { enabled: !1 }) }, t }(Ir);
		qt.registerComponent("OffTextTrackMenuItem", $r);
		var Dr = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return ct(this, t), r.tracks = n.textTracks(), pt(this, e.call(this, n, r)) } return ut(t, e), t.prototype.createItems = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ir,
					n = void 0;
				this.label_ && (n = this.label_ + " off"), e.push(new $r(this.player_, { kinds: this.kinds_, kind: this.kind_, label: n })), this.hideThreshold_ += 1; var r = this.player_.textTracks();
				Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]); for(var i = 0; i < r.length; i++) { var o = r[i]; if(this.kinds_.indexOf(o.kind) > -1) { var a = new t(this.player_, { track: o, selectable: !0, multiSelectable: !1 });
						a.addClass("vjs-" + o.kind + "-menu-item"), e.push(a) } } return e }, t }(jr);
		qt.registerComponent("TextTrackButton", Dr);
		var Nr = function(e) {
			function t(n, r) { ct(this, t); var i = r.track,
					o = r.cue,
					a = n.currentTime();
				r.selectable = !0, r.multiSelectable = !1, r.label = o.text, r.selected = o.startTime <= a && a < o.endTime; var s = pt(this, e.call(this, n, r)); return s.track = i, s.cue = o, i.addEventListener("cuechange", $t(s, s.update)), s } return ut(t, e), t.prototype.handleClick = function(t) { e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime) }, t.prototype.update = function(e) { var t = this.cue,
					n = this.player_.currentTime();
				this.selected(t.startTime <= n && n < t.endTime) }, t }(Lr);
		qt.registerComponent("ChaptersTrackMenuItem", Nr);
		var Rr = function(e) {
			function t(n, r, i) { return ct(this, t), pt(this, e.call(this, n, r, i)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this) }, t.prototype.update = function(t) { this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), e.prototype.update.call(this) }, t.prototype.setTrack = function(e) { if(this.track_ !== e) { if(this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) { var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
						t && t.removeEventListener("load", this.updateHandler_), this.track_ = null } if(this.track_ = e, this.track_) { this.track_.mode = "hidden"; var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
						n && n.addEventListener("load", this.updateHandler_) } } }, t.prototype.findChaptersTrack = function() { for(var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) { var n = e[t]; if(n.kind === this.kind_) return n } }, t.prototype.getMenuCaption = function() { return this.track_ && this.track_.label ? this.track_.label : this.localize(ee(this.kind_)) }, t.prototype.createMenu = function() { return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this) }, t.prototype.createItems = function() { var e = []; if(!this.track_) return e; var t = this.track_.cues; if(!t) return e; for(var n = 0, r = t.length; n < r; n++) { var i = t[n],
						o = new Nr(this.player_, { track: this.track_, cue: i });
					e.push(o) } return e }, t }(Dr);
		Rr.prototype.kind_ = "chapters", Rr.prototype.controlText_ = "Chapters", qt.registerComponent("ChaptersButton", Rr);
		var zr = function(e) {
			function t(n, r, i) { ct(this, t); var o = pt(this, e.call(this, n, r, i)),
					a = n.textTracks(),
					s = $t(o, o.handleTracksChange); return a.addEventListener("change", s), o.on("dispose", function() { a.removeEventListener("change", s) }), o } return ut(t, e), t.prototype.handleTracksChange = function(e) { for(var t = this.player().textTracks(), n = !1, r = 0, i = t.length; r < i; r++) { var o = t[r]; if(o.kind !== this.kind_ && "showing" === o.mode) { n = !0; break } } n ? this.disable() : this.enable() }, t.prototype.buildCSSClass = function() { return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this) }, t }(Dr);
		zr.prototype.kind_ = "descriptions", zr.prototype.controlText_ = "Descriptions", qt.registerComponent("DescriptionsButton", zr);
		var Br = function(e) {
			function t(n, r, i) { return ct(this, t), pt(this, e.call(this, n, r, i)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this) }, t }(Dr);
		Br.prototype.kind_ = "subtitles", Br.prototype.controlText_ = "Subtitles", qt.registerComponent("SubtitlesButton", Br);
		var Fr = function(e) {
			function t(n, r) { ct(this, t), r.track = { player: n, kind: r.kind, label: r.kind + " settings", selectable: !1, default: !1, mode: "disabled" }, r.selectable = !1, r.name = "CaptionSettingsMenuItem"; var i = pt(this, e.call(this, n, r)); return i.addClass("vjs-texttrack-settings"), i.controlText(", opens " + r.kind + " settings dialog"), i } return ut(t, e), t.prototype.handleClick = function(e) { this.player().getChild("textTrackSettings").open() }, t }(Ir);
		qt.registerComponent("CaptionSettingsMenuItem", Fr);
		var Hr = function(e) {
			function t(n, r, i) { return ct(this, t), pt(this, e.call(this, n, r, i)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-captions-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this) }, t.prototype.createItems = function() { var t = []; return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Fr(this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), e.prototype.createItems.call(this, t) }, t }(Dr);
		Hr.prototype.kind_ = "captions", Hr.prototype.controlText_ = "Captions", qt.registerComponent("CaptionsButton", Hr);
		var Vr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function(t, n, r) { var i = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label); return "captions" === this.options_.track.kind && (i += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), i += "</span>", e.prototype.createEl.call(this, t, a({ innerHTML: i }, n), r) }, t }(Ir);
		qt.registerComponent("SubsCapsMenuItem", Vr);
		var Gr = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ct(this, t); var i = pt(this, e.call(this, n, r)); return i.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) > -1 && (i.label_ = "captions"), i.menuButton_.controlText(ee(i.label_)), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this) }, t.prototype.createItems = function() { var t = []; return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Fr(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), t = e.prototype.createItems.call(this, t, Vr) }, t }(Dr);
		Gr.prototype.kinds_ = ["captions", "subtitles"], Gr.prototype.controlText_ = "Subtitles", qt.registerComponent("SubsCapsButton", Gr);
		var Wr = function(e) {
			function t(n, r) { ct(this, t); var i = r.track,
					o = n.audioTracks();
				r.label = i.label || i.language || "Unknown", r.selected = i.enabled; var a = pt(this, e.call(this, n, r));
				a.track = i, a.addClass("vjs-" + i.kind + "-menu-item"); var s = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					a.handleTracksChange.apply(a, t) }; return o.addEventListener("change", s), a.on("dispose", function() { o.removeEventListener("change", s) }), a } return ut(t, e), t.prototype.createEl = function(t, n, r) { var i = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label); return "main-desc" === this.options_.track.kind && (i += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), i += "</span>", e.prototype.createEl.call(this, t, a({ innerHTML: i }, n), r) }, t.prototype.handleClick = function(t) { var n = this.player_.audioTracks();
				e.prototype.handleClick.call(this, t); for(var r = 0; r < n.length; r++) { var i = n[r];
					i.enabled = i === this.track } }, t.prototype.handleTracksChange = function(e) { this.selected(this.track.enabled) }, t }(Lr);
		qt.registerComponent("AudioTrackMenuItem", Wr);
		var Ur = function(e) {
			function t(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return ct(this, t), r.tracks = n.audioTracks(), pt(this, e.call(this, n, r)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-audio-button " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this) }, t.prototype.createItems = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				this.hideThreshold_ = 1; for(var t = this.player_.audioTracks(), n = 0; n < t.length; n++) { var r = t[n];
					e.push(new Wr(this.player_, { track: r, selectable: !0, multiSelectable: !1 })) } return e }, t }(jr);
		Ur.prototype.controlText_ = "Audio Track", qt.registerComponent("AudioTrackButton", Ur);
		var Xr = function(e) {
			function t(n, r) { ct(this, t); var i = r.rate,
					o = parseFloat(i, 10);
				r.label = i, r.selected = 1 === o, r.selectable = !0, r.multiSelectable = !1; var a = pt(this, e.call(this, n, r)); return a.label = i, a.rate = o, a.on(n, "ratechange", a.update), a } return ut(t, e), t.prototype.handleClick = function(t) { e.prototype.handleClick.call(this), this.player().playbackRate(this.rate) }, t.prototype.update = function(e) { this.selected(this.player().playbackRate() === this.rate) }, t }(Lr);
		Xr.prototype.contentElType = "button", qt.registerComponent("PlaybackRateMenuItem", Xr);
		var qr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.updateVisibility(), i.updateLabel(), i.on(n, "loadstart", i.updateVisibility), i.on(n, "ratechange", i.updateLabel), i } return ut(t, e), t.prototype.createEl = function() { var t = e.prototype.createEl.call(this); return this.labelEl_ = g("div", { className: "vjs-playback-rate-value", innerHTML: "1x" }), t.appendChild(this.labelEl_), t }, t.prototype.dispose = function() { this.labelEl_ = null, e.prototype.dispose.call(this) }, t.prototype.buildCSSClass = function() { return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this) }, t.prototype.buildWrapperCSSClass = function() { return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this) }, t.prototype.createMenu = function() { var e = new Ar(this.player()),
					t = this.playbackRates(); if(t)
					for(var n = t.length - 1; n >= 0; n--) e.addChild(new Xr(this.player(), { rate: t[n] + "x" })); return e }, t.prototype.updateARIAAttributes = function() { this.el().setAttribute("aria-valuenow", this.player().playbackRate()) }, t.prototype.handleClick = function(e) { for(var t = this.player().playbackRate(), n = this.playbackRates(), r = n[0], i = 0; i < n.length; i++)
					if(n[i] > t) { r = n[i]; break }
				this.player().playbackRate(r) }, t.prototype.playbackRates = function() { return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates }, t.prototype.playbackRateSupported = function() { return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0 }, t.prototype.updateVisibility = function(e) { this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden") }, t.prototype.updateLabel = function(e) { this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x") }, t }(Pr);
		qr.prototype.controlText_ = "Playback Rate", qt.registerComponent("PlaybackRateMenuButton", qr);
		var Yr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-spacer " + e.prototype.buildCSSClass.call(this) }, t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: this.buildCSSClass() }) }, t }(qt);
		qt.registerComponent("Spacer", Yr);
		var Kr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this) }, t.prototype.createEl = function() { var t = e.prototype.createEl.call(this, { className: this.buildCSSClass() }); return t.innerHTML = " ", t }, t }(Yr);
		qt.registerComponent("CustomControlSpacer", Kr);
		var Qr = function(e) {
			function t() { return ct(this, t), pt(this, e.apply(this, arguments)) } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "div", { className: "vjs-control-bar", dir: "ltr" }) }, t }(qt);
		Qr.prototype.options_ = { children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"] }, qt.registerComponent("ControlBar", Qr);
		var Jr = function(e) {
			function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)); return i.on(n, "error", i.open), i } return ut(t, e), t.prototype.buildCSSClass = function() { return "vjs-error-display " + e.prototype.buildCSSClass.call(this) }, t.prototype.content = function() { var e = this.player().error(); return e ? this.localize(e.message) : "" }, t }(ln);
		Jr.prototype.options_ = ne(ln.prototype.options_, { pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0 }), qt.registerComponent("ErrorDisplay", Jr);
		var Zr = ["#000", "Black"],
			ei = ["#00F", "Blue"],
			ti = ["#0FF", "Cyan"],
			ni = ["#0F0", "Green"],
			ri = ["#F0F", "Magenta"],
			ii = ["#F00", "Red"],
			oi = ["#FFF", "White"],
			ai = ["#FF0", "Yellow"],
			si = ["1", "Opaque"],
			li = ["0.5", "Semi-Transparent"],
			ci = ["0", "Transparent"],
			ui = { backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [Zr, oi, ii, ni, ei, ai, ri, ti] }, backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Transparency", options: [si, li, ci] }, color: { selector: ".vjs-fg-color > select", id: "captions-foreground-color-%s", label: "Color", options: [oi, Zr, ii, ni, ei, ai, ri, ti] }, edgeStyle: { selector: ".vjs-edge-style > select", id: "%s", label: "Text Edge Style", options: [
						["none", "None"],
						["raised", "Raised"],
						["depressed", "Depressed"],
						["uniform", "Uniform"],
						["dropshadow", "Dropshadow"]
					] }, fontFamily: { selector: ".vjs-font-family > select", id: "captions-font-family-%s", label: "Font Family", options: [
						["proportionalSansSerif", "Proportional Sans-Serif"],
						["monospaceSansSerif", "Monospace Sans-Serif"],
						["proportionalSerif", "Proportional Serif"],
						["monospaceSerif", "Monospace Serif"],
						["casual", "Casual"],
						["script", "Script"],
						["small-caps", "Small Caps"]
					] }, fontPercent: { selector: ".vjs-font-percent > select", id: "captions-font-size-%s", label: "Font Size", options: [
						["0.50", "50%"],
						["0.75", "75%"],
						["1.00", "100%"],
						["1.25", "125%"],
						["1.50", "150%"],
						["1.75", "175%"],
						["2.00", "200%"],
						["3.00", "300%"],
						["4.00", "400%"]
					], default: 2, parser: function(e) { return "1.00" === e ? null : Number(e) } }, textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Transparency", options: [si, li] }, windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color" }, windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Transparency", options: [ci, li, si] } };
		ui.windowColor.options = ui.backgroundColor.options;
		var pi = function(e) {
			function t(n, r) { ct(this, t), r.temporary = !1; var o = pt(this, e.call(this, n, r)); return o.updateDisplay = $t(o, o.updateDisplay), o.fill(), o.hasBeenOpened_ = o.hasBeenFilled_ = !0, o.endDialog = g("p", { className: "vjs-control-text", textContent: o.localize("End of dialog window.") }), o.el().appendChild(o.endDialog), o.setDefaults(), void 0 === r.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function() { o.saveSettings(), o.close() }), o.on(o.$(".vjs-default-button"), "click", function() { o.setDefaults(), o.updateDisplay() }), i(ui, function(e) { o.on(o.$(e.selector), "change", o.updateDisplay) }), o.options_.persistTextTrackSettings && o.restoreSettings(), o } return ut(t, e), t.prototype.dispose = function() { this.endDialog = null, e.prototype.dispose.call(this) }, t.prototype.createElSelect_ = function(e) { var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label",
					i = ui[e],
					o = i.id.replace("%s", this.id_),
					a = [n, o].join(" ").trim(); return ["<" + r + ' id="' + o + '" class="' + ("label" === r ? "vjs-label" : "") + '">', this.localize(i.label), "</" + r + ">", '<select aria-labelledby="' + a + '">'].concat(i.options.map(function(e) { var n = o + "-" + e[1].replace(/\W+/g, ""); return ['<option id="' + n + '" value="' + e[0] + '" ', 'aria-labelledby="' + a + " " + n + '">', t.localize(e[1]), "</option>"].join("") })).concat("</select>").join("") }, t.prototype.createElFgColor_ = function() { var e = "captions-text-legend-" + this.id_; return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("") }, t.prototype.createElBgColor_ = function() { var e = "captions-background-" + this.id_; return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("") }, t.prototype.createElWinColor_ = function() { var e = "captions-window-" + this.id_; return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("") }, t.prototype.createElColors_ = function() { return g("div", { className: "vjs-track-settings-colors", innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("") }) }, t.prototype.createElFont_ = function() { return g("div", { className: "vjs-track-settings-font", innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("") }) }, t.prototype.createElControls_ = function() { var e = this.localize("restore all settings to the default values"); return g("div", { className: "vjs-track-settings-controls", innerHTML: ['<button class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("") }) }, t.prototype.content = function() { return [this.createElColors_(), this.createElFont_(), this.createElControls_()] }, t.prototype.label = function() { return this.localize("Caption Settings Dialog") }, t.prototype.description = function() { return this.localize("Beginning of dialog window. Escape will cancel and close the window.") }, t.prototype.buildCSSClass = function() { return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings" }, t.prototype.getValues = function() { var e = this; return o(ui, function(t, n, r) { var i = Me(e.$(n.selector), n.parser); return void 0 !== i && (t[r] = i), t }, {}) }, t.prototype.setValues = function(e) { var t = this;
				i(ui, function(n, r) { Ae(t.$(n.selector), e[r], n.parser) }) }, t.prototype.setDefaults = function() { var e = this;
				i(ui, function(t) { var n = t.hasOwnProperty("default") ? t.default : 0;
					e.$(t.selector).selectedIndex = n }) }, t.prototype.restoreSettings = function() { var e = void 0; try { e = JSON.parse(je.localStorage.getItem("vjs-text-track-settings")) } catch(e) { bt.warn(e) } e && this.setValues(e) }, t.prototype.saveSettings = function() { if(this.options_.persistTextTrackSettings) { var e = this.getValues(); try { Object.keys(e).length ? je.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e)) : je.localStorage.removeItem("vjs-text-track-settings") } catch(e) { bt.warn(e) } } }, t.prototype.updateDisplay = function() { var e = this.player_.getChild("textTrackDisplay");
				e && e.updateDisplay() }, t.prototype.conditionalBlur_ = function() { this.previouslyActiveEl_ = null, this.off(Le, "keydown", this.handleKeyDown); var e = this.player_.controlBar,
					t = e && e.subsCapsButton,
					n = e && e.captionsButton;
				t ? t.focus() : n && n.focus() }, t }(ln);
		qt.registerComponent("TextTrackSettings", pi);
		var di = function(e) {
			function t(n, r) { ct(this, t); var i = r.ResizeObserver || je.ResizeObserver;
				null === r.ResizeObserver && (i = !1); var o = ne({ createEl: !i }, r),
					a = pt(this, e.call(this, n, o)); return a.ResizeObserver = r.ResizeObserver || je.ResizeObserver, a.loadListener_ = null, a.resizeObserver_ = null, a.debouncedHandler_ = Nt(function() { a.resizeHandler() }, 100, !1, n), i ? (a.resizeObserver_ = new a.ResizeObserver(a.debouncedHandler_), a.resizeObserver_.observe(n.el())) : (a.loadListener_ = function() { a.el_.contentWindow && X(a.el_.contentWindow, "resize", a.debouncedHandler_), a.off("load", a.loadListener_) }, a.on("load", a.loadListener_)), a } return ut(t, e), t.prototype.createEl = function() { return e.prototype.createEl.call(this, "iframe", { className: "vjs-resize-manager" }) }, t.prototype.resizeHandler = function() { this.player_.trigger("playerresize") }, t.prototype.dispose = function() { this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && q(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null }, t }(qt);
		qt.registerComponent("ResizeManager", di);
		var hi = function(e) { var t = e.el(); if(t.hasAttribute("src")) return e.triggerSourceset(t.src), !0; var n = e.$$("source"),
					r = [],
					i = ""; if(!n.length) return !1; for(var o = 0; o < n.length; o++) { var a = n[o].src;
					a && -1 === r.indexOf(a) && r.push(a) } return !!r.length && (1 === r.length && (i = r[0]), e.triggerSourceset(i), !0) },
			fi = {};
		tt || (fi = Object.defineProperty({}, "innerHTML", { get: function() { return this.cloneNode(!0).innerHTML }, set: function(e) { var t = Le.createElement(this.nodeName.toLowerCase());
				t.innerHTML = e; for(var n = Le.createDocumentFragment(); t.childNodes.length;) n.appendChild(t.childNodes[0]); return this.innerText = "", je.Element.prototype.appendChild.call(this, n), this.innerHTML } }));
		var vi = function(e, t) { for(var n = {}, r = 0; r < e.length && !((n = Object.getOwnPropertyDescriptor(e[r], t)) && n.set && n.get); r++); return n.enumerable = !0, n.configurable = !0, n },
			mi = function(e) { return vi([e.el(), je.HTMLMediaElement.prototype, je.Element.prototype, fi], "innerHTML") },
			gi = function(e) { var t = e.el(); if(!t.resetSourceWatch_) { var n = {},
						r = mi(e),
						i = function(n) { return function() { for(var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o]; var a = n.apply(t, i); return hi(e), a } };
					["append", "appendChild", "insertAdjacentHTML"].forEach(function(e) { t[e] && (n[e] = t[e], t[e] = i(n[e])) }), Object.defineProperty(t, "innerHTML", ne(r, { set: i(r.set) })), t.resetSourceWatch_ = function() { t.resetSourceWatch_ = null, Object.keys(n).forEach(function(e) { t[e] = n[e] }), Object.defineProperty(t, "innerHTML", r) }, e.one("sourceset", t.resetSourceWatch_) } },
			yi = {};
		tt || (yi = Object.defineProperty({}, "src", { get: function() { return this.hasAttribute("src") ? En(je.Element.prototype.getAttribute.call(this, "src")) : "" }, set: function(e) { return je.Element.prototype.setAttribute.call(this, "src", e), e } }));
		var bi = function(e) { return vi([e.el(), je.HTMLMediaElement.prototype, yi], "src") },
			_i = function(e) { if(e.featuresSourceset) { var t = e.el(); if(!t.resetSourceset_) { var n = bi(e),
							r = t.setAttribute,
							i = t.load;
						Object.defineProperty(t, "src", ne(n, { set: function(r) { var i = n.set.call(t, r); return e.triggerSourceset(t.src), i } })), t.setAttribute = function(n, i) { var o = r.call(t, n, i); return /src/i.test(n) && e.triggerSourceset(t.src), o }, t.load = function() { var n = i.call(t); return hi(e) || (e.triggerSourceset(""), gi(e)), n }, t.currentSrc ? e.triggerSourceset(t.currentSrc) : hi(e) || gi(e), t.resetSourceset_ = function() { t.resetSourceset_ = null, t.load = i, t.setAttribute = r, Object.defineProperty(t, "src", n), t.resetSourceWatch_ && t.resetSourceWatch_() } } } },
			wi = dt(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
			Ti = function(e) {
				function t(n, r) { ct(this, t); var i = pt(this, e.call(this, n, r)),
						o = n.source,
						a = !1; if(o && (i.el_.currentSrc !== o.src || n.tag && 3 === n.tag.initNetworkState_) ? i.setSource(o) : i.handleLateInit_(i.el_), n.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) { for(var s = i.el_.childNodes, l = s.length, c = []; l--;) { var u = s[l]; "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), a || i.el_.hasAttribute("crossorigin") || !Sn(u.src) || (a = !0)) : c.push(u)) } for(var p = 0; p < c.length; p++) i.el_.removeChild(c[p]) } return i.proxyNativeTracks_(), i.featuresNativeTextTracks && a && bt.warn(Ie(wi)), i.restoreMetadataTracksInIOSNativePlayer_(), (ot || Ve || Ke) && !0 === n.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i } return ut(t, e), t.prototype.dispose = function() { this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), t.disposeMediaElement(this.el_), this.options_ = null, e.prototype.dispose.call(this) }, t.prototype.setupSourcesetHandling_ = function() { _i(this) }, t.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() { var e = this.textTracks(),
						t = void 0,
						n = function() { t = []; for(var n = 0; n < e.length; n++) { var r = e[n]; "metadata" === r.kind && t.push({ track: r, storedMode: r.mode }) } };
					n(), e.addEventListener("change", n), this.on("dispose", function() { return e.removeEventListener("change", n) }); var r = function n() { for(var r = 0; r < t.length; r++) { var i = t[r]; "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode) } e.removeEventListener("change", n) };
					this.on("webkitbeginfullscreen", function() { e.removeEventListener("change", n), e.removeEventListener("change", r), e.addEventListener("change", r) }), this.on("webkitendfullscreen", function() { e.removeEventListener("change", n), e.addEventListener("change", n), e.removeEventListener("change", r) }) }, t.prototype.proxyNativeTracks_ = function() { var e = this;
					Dn.names.forEach(function(t) { var n = Dn[t],
							r = e.el()[n.getterName],
							i = e[n.getterName](); if(e["featuresNative" + n.capitalName + "Tracks"] && r && r.addEventListener) { var o = { change: function(e) { i.trigger({ type: "change", target: i, currentTarget: i, srcElement: i }) }, addtrack: function(e) { i.addTrack(e.track) }, removetrack: function(e) { i.removeTrack(e.track) } },
								a = function() { for(var e = [], t = 0; t < i.length; t++) { for(var n = !1, o = 0; o < r.length; o++)
											if(r[o] === i[t]) { n = !0; break }
										n || e.push(i[t]) } for(; e.length;) i.removeTrack(e.shift()) };
							Object.keys(o).forEach(function(t) { var n = o[t];
								r.addEventListener(t, n), e.on("dispose", function(e) { return r.removeEventListener(t, n) }) }), e.on("loadstart", a), e.on("dispose", function(t) { return e.off("loadstart", a) }) } }) }, t.prototype.createEl = function() { var e = this.options_.tag; if(!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) { if(e) { var n = e.cloneNode(!0);
							e.parentNode && e.parentNode.insertBefore(n, e), t.disposeMediaElement(e), e = n } else { e = Le.createElement("video"); var r = this.options_.tag && x(this.options_.tag),
								i = ne({}, r);
							ot && !0 === this.options_.nativeControlsForTouch || delete i.controls, E(e, a(i, { id: this.options_.techId, class: "vjs-tech" })) } e.playerId = this.options_.playerId } void 0 !== this.options_.preload && k(e, "preload", this.options_.preload); for(var o = ["loop", "muted", "playsinline", "autoplay"], s = 0; s < o.length; s++) { var l = o[s],
							c = this.options_[l];
						void 0 !== c && (c ? k(e, l, l) : O(e, l), e[l] = c) } return e }, t.prototype.handleLateInit_ = function(e) { if(0 !== e.networkState && 3 !== e.networkState) { if(0 === e.readyState) { var t = !1,
								n = function() { t = !0 };
							this.on("loadstart", n); var r = function() { t || this.trigger("loadstart") }; return this.on("loadedmetadata", r), void this.ready(function() { this.off("loadstart", n), this.off("loadedmetadata", r), t || this.trigger("loadstart") }) } var i = ["loadstart"];
						i.push("loadedmetadata"), e.readyState >= 2 && i.push("loadeddata"), e.readyState >= 3 && i.push("canplay"), e.readyState >= 4 && i.push("canplaythrough"), this.ready(function() { i.forEach(function(e) { this.trigger(e) }, this) }) } }, t.prototype.setCurrentTime = function(e) { try { this.el_.currentTime = e } catch(e) { bt(e, "Video is not ready. (Video.js)") } }, t.prototype.duration = function() { var e = this; if(this.el_.duration === 1 / 0 && Xe && Ze && 0 === this.el_.currentTime) { var t = function t() { e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", t)) }; return this.on("timeupdate", t), NaN } return this.el_.duration || NaN }, t.prototype.width = function() { return this.el_.offsetWidth }, t.prototype.height = function() { return this.el_.offsetHeight }, t.prototype.proxyWebkitFullscreen_ = function() { var e = this; if("webkitDisplayingFullscreen" in this.el_) { var t = function() { this.trigger("fullscreenchange", { isFullscreen: !1 }) },
							n = function() { "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", { isFullscreen: !0 })) };
						this.on("webkitbeginfullscreen", n), this.on("dispose", function() { e.off("webkitbeginfullscreen", n), e.off("webkitendfullscreen", t) }) } }, t.prototype.supportsFullScreen = function() { if("function" == typeof this.el_.webkitEnterFullScreen) { var e = je.navigator && je.navigator.userAgent || ""; if(/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0 } return !1 }, t.prototype.enterFullScreen = function() { var e = this.el_;
					e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() { e.pause(), e.webkitEnterFullScreen() }, 0)) : e.webkitEnterFullScreen() }, t.prototype.exitFullScreen = function() { this.el_.webkitExitFullScreen() }, t.prototype.src = function(e) { if(void 0 === e) return this.el_.src;
					this.setSrc(e) }, t.prototype.reset = function() { t.resetMediaElement(this.el_) }, t.prototype.currentSrc = function() { return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc }, t.prototype.setControls = function(e) { this.el_.controls = !!e }, t.prototype.addTextTrack = function(t, n, r) { return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, n, r) : e.prototype.addTextTrack.call(this, t, n, r) }, t.prototype.createRemoteTextTrack = function(t) { if(!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t); var n = Le.createElement("track"); return t.kind && (n.kind = t.kind), t.label && (n.label = t.label), (t.language || t.srclang) && (n.srclang = t.language || t.srclang), t.default && (n.default = t.default), t.id && (n.id = t.id), t.src && (n.src = t.src), n }, t.prototype.addRemoteTextTrack = function(t, n) { var r = e.prototype.addRemoteTextTrack.call(this, t, n); return this.featuresNativeTextTracks && this.el().appendChild(r), r }, t.prototype.removeRemoteTextTrack = function(t) { if(e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)
						for(var n = this.$$("track"), r = n.length; r--;) t !== n[r] && t !== n[r].track || this.el().removeChild(n[r]) }, t.prototype.getVideoPlaybackQuality = function() { if("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality(); var e = {}; return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), je.performance && "function" == typeof je.performance.now ? e.creationTime = je.performance.now() : je.performance && je.performance.timing && "number" == typeof je.performance.timing.navigationStart && (e.creationTime = je.Date.now() - je.performance.timing.navigationStart), e }, t }(zn);
		if(h()) { Ti.TEST_VID = Le.createElement("video"); var Ci = Le.createElement("track");
			Ci.kind = "captions", Ci.srclang = "en", Ci.label = "English", Ti.TEST_VID.appendChild(Ci) } Ti.isSupported = function() { try { Ti.TEST_VID.volume = .5 } catch(e) { return !1 } return !(!Ti.TEST_VID || !Ti.TEST_VID.canPlayType) }, Ti.canPlayType = function(e) { return Ti.TEST_VID.canPlayType(e) }, Ti.canPlaySource = function(e, t) { return Ti.canPlayType(e.type) }, Ti.canControlVolume = function() { try { var e = Ti.TEST_VID.volume; return Ti.TEST_VID.volume = e / 2 + .1, e !== Ti.TEST_VID.volume } catch(e) { return !1 } }, Ti.canMuteVolume = function() { try { var e = Ti.TEST_VID.muted; return Ti.TEST_VID.muted = !e, Ti.TEST_VID.muted ? k(Ti.TEST_VID, "muted", "muted") : O(Ti.TEST_VID, "muted"), e !== Ti.TEST_VID.muted } catch(e) { return !1 } }, Ti.canControlPlaybackRate = function() { if(Xe && Ze && et < 58) return !1; try { var e = Ti.TEST_VID.playbackRate; return Ti.TEST_VID.playbackRate = e / 2 + .1, e !== Ti.TEST_VID.playbackRate } catch(e) { return !1 } }, Ti.canOverrideAttributes = function() { if(tt) return !1; try { var e = function() {};
				Object.defineProperty(Le.createElement("video"), "src", { get: e, set: e }), Object.defineProperty(Le.createElement("audio"), "src", { get: e, set: e }), Object.defineProperty(Le.createElement("video"), "innerHTML", { get: e, set: e }), Object.defineProperty(Le.createElement("audio"), "innerHTML", { get: e, set: e }) } catch(e) { return !1 } return !0 }, Ti.supportsNativeTextTracks = function() { return it || We && Ze }, Ti.supportsNativeVideoTracks = function() { return !(!Ti.TEST_VID || !Ti.TEST_VID.videoTracks) }, Ti.supportsNativeAudioTracks = function() { return !(!Ti.TEST_VID || !Ti.TEST_VID.audioTracks) }, Ti.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Ti.prototype.featuresVolumeControl = Ti.canControlVolume(), Ti.prototype.featuresMuteControl = Ti.canMuteVolume(), Ti.prototype.featuresPlaybackRate = Ti.canControlPlaybackRate(), Ti.prototype.featuresSourceset = Ti.canOverrideAttributes(), Ti.prototype.movingMediaElementInDOM = !We, Ti.prototype.featuresFullscreenResize = !0, Ti.prototype.featuresProgressEvents = !0, Ti.prototype.featuresTimeupdateEvents = !0, Ti.prototype.featuresNativeTextTracks = Ti.supportsNativeTextTracks(), Ti.prototype.featuresNativeVideoTracks = Ti.supportsNativeVideoTracks(), Ti.prototype.featuresNativeAudioTracks = Ti.supportsNativeAudioTracks();
		var Ei = Ti.TEST_VID && Ti.TEST_VID.constructor.prototype.canPlayType,
			xi = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
			Si = /^video\/mp4/i;
		Ti.patchCanPlayType = function() { qe >= 4 && !Qe && !Ze ? Ti.TEST_VID.constructor.prototype.canPlayType = function(e) { return e && xi.test(e) ? "maybe" : Ei.call(this, e) } : Ye && (Ti.TEST_VID.constructor.prototype.canPlayType = function(e) { return e && Si.test(e) ? "maybe" : Ei.call(this, e) }) }, Ti.unpatchCanPlayType = function() { var e = Ti.TEST_VID.constructor.prototype.canPlayType; return Ti.TEST_VID.constructor.prototype.canPlayType = Ei, e }, Ti.patchCanPlayType(), Ti.disposeMediaElement = function(e) { if(e) { for(e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
				e.removeAttribute("src"), "function" == typeof e.load && function() { try { e.load() } catch(e) {} }() } }, Ti.resetMediaElement = function(e) { if(e) { for(var t = e.querySelectorAll("source"), n = t.length; n--;) e.removeChild(t[n]);
				e.removeAttribute("src"), "function" == typeof e.load && function() { try { e.load() } catch(e) {} }() } }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) { Ti.prototype[e] = function() { return this.el_[e] || this.el_.hasAttribute(e) } }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(e) { Ti.prototype["set" + ee(e)] = function(t) { this.el_[e] = t, t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e) } }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(e) { Ti.prototype[e] = function() { return this.el_[e] } }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(e) { Ti.prototype["set" + ee(e)] = function(t) { this.el_[e] = t } }), ["pause", "load", "play"].forEach(function(e) { Ti.prototype[e] = function() { return this.el_[e]() } }), zn.withSourceHandlers(Ti), Ti.nativeSourceHandler = {}, Ti.nativeSourceHandler.canPlayType = function(e) { try { return Ti.TEST_VID.canPlayType(e) } catch(e) { return "" } }, Ti.nativeSourceHandler.canHandleSource = function(e, t) { if(e.type) return Ti.nativeSourceHandler.canPlayType(e.type); if(e.src) { var n = xn(e.src); return Ti.nativeSourceHandler.canPlayType("video/" + n) } return "" }, Ti.nativeSourceHandler.handleSource = function(e, t, n) { t.setSrc(e.src) }, Ti.nativeSourceHandler.dispose = function() {}, Ti.registerSourceHandler(Ti.nativeSourceHandler), zn.registerTech("Html5", Ti);
		var ki = dt(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
			Oi = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
			Mi = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" },
			Ai = function(e) {
				function t(n, r, i) { if(ct(this, t), n.id = n.id || r.id || "vjs_video_" + B(), r = a(t.getTagSettings(n), r), r.initChildren = !1, r.createEl = !1, r.evented = !1, r.reportTouchActivity = !1, !r.language)
						if("function" == typeof n.closest) { var o = n.closest("[lang]");
							o && o.getAttribute && (r.language = o.getAttribute("lang")) } else
							for(var s = n; s && 1 === s.nodeType;) { if(x(s).hasOwnProperty("lang")) { r.language = s.getAttribute("lang"); break } s = s.parentNode }
					var l = pt(this, e.call(this, null, r, i)); if(l.isPosterFromTech_ = !1, l.queuedCallbacks_ = [], l.isReady_ = !1, l.hasStarted_ = !1, l.userActive_ = !1, !l.options_ || !l.options_.techOrder || !l.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"); if(l.tag = n, l.tagAttributes = n && x(n), l.language(l.options_.language), r.languages) { var c = {};
						Object.getOwnPropertyNames(r.languages).forEach(function(e) { c[e.toLowerCase()] = r.languages[e] }), l.languages_ = c } else l.languages_ = t.prototype.options_.languages;
					l.cache_ = {}, l.poster_ = r.poster || "", l.controls_ = !!r.controls, l.cache_.lastVolume = 1, n.controls = !1, n.removeAttribute("controls"), n.hasAttribute("autoplay") ? l.options_.autoplay = !0 : l.autoplay(l.options_.autoplay), l.scrubbing_ = !1, l.el_ = l.createEl(), l.cache_.lastPlaybackRate = l.defaultPlaybackRate(), J(l, { eventBusKey: "el_" }); var u = ne(l.options_); if(r.plugins) { var p = r.plugins;
						Object.keys(p).forEach(function(e) { if("function" != typeof this[e]) throw new Error('plugin "' + e + '" does not exist');
							this[e](p[e]) }, l) } l.options_.playerOptions = u, l.middleware_ = [], l.initChildren(), l.isAudio("audio" === n.nodeName.toLowerCase()), l.controls() ? l.addClass("vjs-controls-enabled") : l.addClass("vjs-controls-disabled"), l.el_.setAttribute("role", "region"), l.isAudio() ? l.el_.setAttribute("aria-label", l.localize("Audio Player")) : l.el_.setAttribute("aria-label", l.localize("Video Player")), l.isAudio() && l.addClass("vjs-audio"), l.flexNotSupported_() && l.addClass("vjs-no-flex"), We || l.addClass("vjs-workinghover"), t.players[l.id_] = l; var d = Re.split(".")[0]; return l.addClass("vjs-v" + d), l.userActive(!0), l.reportUserActivity(), l.one("play", l.listenForUserActivity_), l.on("fullscreenchange", l.handleFullscreenChange_), l.on("stageclick", l.handleStageClick_), l.changingSrc_ = !1, l.playWaitingForReady_ = !1, l.playOnLoadstart_ = null, l } return ut(t, e), t.prototype.dispose = function() { this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), _e(this), e.prototype.dispose.call(this) }, t.prototype.createEl = function() { var t = this.tag,
						n = void 0,
						r = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player"),
						i = "video-js" === this.tag.tagName.toLowerCase();
					r ? n = this.el_ = t.parentNode : i || (n = this.el_ = e.prototype.createEl.call(this, "div")); var o = x(t); if(i) { for(n = this.el_ = t, t = this.tag = Le.createElement("video"); n.children.length;) t.appendChild(n.firstChild);
						_(n, "video-js") || w(n, "video-js"), n.appendChild(t), r = this.playerElIngest_ = n, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach(function(e) { void 0 !== n[e] && (t[e] = n[e]) }) } if(t.setAttribute("tabindex", "-1"), nt && t.setAttribute("role", "application"), t.removeAttribute("width"), t.removeAttribute("height"), Object.getOwnPropertyNames(o).forEach(function(e) { "class" === e ? (n.className += " " + o[e], i && (t.className += " " + o[e])) : (n.setAttribute(e, o[e]), i && t.setAttribute(e, o[e])) }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = n.player = this, this.addClass("vjs-paused"), !0 !== je.VIDEOJS_NO_DYNAMIC_STYLE) { this.styleEl_ = Lt("vjs-styles-dimensions"); var a = wt(".vjs-styles-defaults"),
							s = wt("head");
						s.insertBefore(this.styleEl_, a ? a.nextSibling : s.firstChild) } this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio); for(var l = t.getElementsByTagName("a"), c = 0; c < l.length; c++) { var u = l.item(c);
						w(u, "vjs-hidden"), u.setAttribute("hidden", "hidden") } return t.initNetworkState_ = t.networkState, t.parentNode && !r && t.parentNode.insertBefore(n, t), b(t, n), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_ = n, n }, t.prototype.width = function(e) { return this.dimension("width", e) }, t.prototype.height = function(e) { return this.dimension("height", e) }, t.prototype.dimension = function(e, t) { var n = e + "_"; if(void 0 === t) return this[n] || 0; if("" === t) return this[n] = void 0, void this.updateStyleEl_(); var r = parseFloat(t); if(isNaN(r)) return void bt.error('Improper value "' + t + '" supplied for for ' + e);
					this[n] = r, this.updateStyleEl_() }, t.prototype.fluid = function(e) { if(void 0 === e) return !!this.fluid_;
					this.fluid_ = !!e, e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_() }, t.prototype.aspectRatio = function(e) { if(void 0 === e) return this.aspectRatio_; if(!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
					this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_() }, t.prototype.updateStyleEl_ = function() { if(!0 === je.VIDEOJS_NO_DYNAMIC_STYLE) { var e = "number" == typeof this.width_ ? this.width_ : this.options_.width,
							t = "number" == typeof this.height_ ? this.height_ : this.options_.height,
							n = this.tech_ && this.tech_.el(); return void(n && (e >= 0 && (n.width = e), t >= 0 && (n.height = t))) } var r = void 0,
						i = void 0,
						o = void 0,
						a = void 0;
					o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9"; var s = o.split(":"),
						l = s[1] / s[0];
					r = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, i = void 0 !== this.height_ ? this.height_ : r * l, a = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(a), It(this.styleEl_, "\n      ." + a + " {\n        width: " + r + "px;\n        height: " + i + "px;\n      }\n\n      ." + a + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ") }, t.prototype.loadTech_ = function(e, t) { var n = this;
					this.tech_ && this.unloadTech_(); var r = ee(e),
						i = e.charAt(0).toLowerCase() + e.slice(1); "Html5" !== r && this.tag && (zn.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1; var o = "string" != typeof this.autoplay() && this.autoplay(),
						s = { source: t, autoplay: o, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: this.id() + "_" + r + "_api", playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || !1, "vtt.js": this.options_["vtt.js"], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset };
					Rn.names.forEach(function(e) { var t = Rn[e];
						s[t.getterName] = n[t.privateName] }), a(s, this.options_[r]), a(s, this.options_[i]), a(s, this.options_[e.toLowerCase()]), this.tag && (s.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime); var l = zn.getTech(e); if(!l) throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
					this.tech_ = new l(s), this.tech_.ready($t(this, this.handleTechReady_), !0), an.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Oi.forEach(function(e) { n.on(n.tech_, e, n["handleTech" + ee(e) + "_"]) }), Object.keys(Mi).forEach(function(e) { n.on(n.tech_, e, function(t) { if(0 === n.tech_.playbackRate() && n.tech_.seeking()) return void n.queuedCallbacks_.push({ callback: n["handleTech" + Mi[e] + "_"].bind(n), event: t });
							n["handleTech" + Mi[e] + "_"](t) }) }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || b(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null) }, t.prototype.unloadTech_ = function() { var e = this;
					Rn.names.forEach(function(t) { var n = Rn[t];
						e[n.privateName] = e[n.getterName]() }), this.textTracksJson_ = an.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1 }, t.prototype.tech = function(e) { return void 0 === e && bt.warn(Ie(ki)), this.tech_ }, t.prototype.addTechControlsListeners_ = function() { this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_) }, t.prototype.removeTechControlsListeners_ = function() { this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_) }, t.prototype.handleTechReady_ = function() { if(this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try { delete this.tag.poster } catch(e) { bt("deleting tag.poster throws in some browsers", e) } }, t.prototype.handleTechLoadStart_ = function() { this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay()) }, t.prototype.manualAutoplay_ = function(e) { var t = this; if(this.tech_ && "string" == typeof e) { var n = function() { var e = t.muted();
								t.muted(!0); var n = t.play(); if(n && n.then && n.catch) return n.catch(function(n) { t.muted(e) }) },
							r = void 0; if("any" === e ? (r = this.play()) && r.then && r.catch && r.catch(function() { return n() }) : r = "muted" === e ? n() : this.play(), r && r.then && r.catch) return r.then(function() { t.trigger({ type: "autoplay-success", autoplay: e }) }).catch(function(n) { t.trigger({ type: "autoplay-failure", autoplay: e }) }) } }, t.prototype.updateSourceCaches_ = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = e,
						n = ""; "string" != typeof t && (t = e.src, n = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !n && (n = qn(this, t)), this.cache_.source = ne({}, e, { src: t, type: n }); for(var r = this.cache_.sources.filter(function(e) { return e.src && e.src === t }), i = [], o = this.$$("source"), a = [], s = 0; s < o.length; s++) { var l = x(o[s]);
						i.push(l), l.src && l.src === t && a.push(l.src) } a.length && !r.length ? this.cache_.sources = i : r.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t }, t.prototype.handleTechSourceset_ = function(e) { var t = this; if(!this.changingSrc_ && (this.updateSourceCaches_(e.src), !e.src)) { var n = function e(n) { "sourceset" !== n.type && t.updateSourceCaches_(t.techGet_("currentSrc")), t.tech_.off(["sourceset", "loadstart"], e) };
						this.tech_.one(["sourceset", "loadstart"], n) } this.trigger({ src: e.src, type: "sourceset" }) }, t.prototype.hasStarted = function(e) { if(void 0 === e) return this.hasStarted_;
					e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")) }, t.prototype.handleTechPlay_ = function() { this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play") }, t.prototype.handleTechRateChange_ = function() { this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) { return e.callback(e.event) }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange") }, t.prototype.handleTechWaiting_ = function() { var e = this;
					this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() { return e.removeClass("vjs-waiting") }) }, t.prototype.handleTechCanPlay_ = function() { this.removeClass("vjs-waiting"), this.trigger("canplay") }, t.prototype.handleTechCanPlayThrough_ = function() { this.removeClass("vjs-waiting"), this.trigger("canplaythrough") }, t.prototype.handleTechPlaying_ = function() { this.removeClass("vjs-waiting"), this.trigger("playing") }, t.prototype.handleTechSeeking_ = function() { this.addClass("vjs-seeking"), this.trigger("seeking") }, t.prototype.handleTechSeeked_ = function() { this.removeClass("vjs-seeking"), this.trigger("seeked") }, t.prototype.handleTechFirstPlay_ = function() { this.options_.starttime && (bt.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay") }, t.prototype.handleTechPause_ = function() { this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause") }, t.prototype.handleTechEnded_ = function() { this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended") }, t.prototype.handleTechDurationChange_ = function() { this.duration(this.techGet_("duration")) }, t.prototype.handleTechClick_ = function(e) { z(e) && this.controls_ && (this.paused() ? ue(this.play()) : this.pause()) }, t.prototype.handleTechTap_ = function() { this.userActive(!this.userActive()) }, t.prototype.handleTechTouchStart_ = function() { this.userWasActive = this.userActive() }, t.prototype.handleTechTouchMove_ = function() { this.userWasActive && this.reportUserActivity() }, t.prototype.handleTechTouchEnd_ = function(e) { e.preventDefault() }, t.prototype.handleFullscreenChange_ = function() { this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen") }, t.prototype.handleStageClick_ = function() { this.reportUserActivity() }, t.prototype.handleTechFullscreenChange_ = function(e, t) { t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange") }, t.prototype.handleTechError_ = function() { var e = this.tech_.error();
					this.error(e) }, t.prototype.handleTechTextData_ = function() { var e = null;
					arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e) }, t.prototype.getCache = function() { return this.cache_ }, t.prototype.techCall_ = function(e, t) { this.ready(function() { if(e in Gn) return me(this.middleware_, this.tech_, e, t); if(e in Wn) return ge(this.middleware_, this.tech_, e, t); try { this.tech_ && this.tech_[e](t) } catch(e) { throw bt(e), e } }, !0) }, t.prototype.techGet_ = function(e) { if(this.tech_ && this.tech_.isReady_) { if(e in Vn) return ve(this.middleware_, this.tech_, e); if(e in Wn) return ge(this.middleware_, this.tech_, e); try { return this.tech_[e]() } catch(t) { if(void 0 === this.tech_[e]) throw bt("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t; if("TypeError" === t.name) throw bt("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1, t; throw bt(t), t } } }, t.prototype.play = function() { var e = this; if(this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) { if(!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
						this.playOnLoadstart_ = function() { e.playOnLoadstart_ = null, ue(e.play()) }, this.one("loadstart", this.playOnLoadstart_) } else { if(this.playWaitingForReady_) return;
						this.playWaitingForReady_ = !0, this.ready(function() { e.playWaitingForReady_ = !1, ue(e.play()) }) } }, t.prototype.pause = function() { this.techCall_("pause") }, t.prototype.paused = function() { return !1 !== this.techGet_("paused") }, t.prototype.played = function() { return this.techGet_("played") || ae(0, 0) }, t.prototype.scrubbing = function(e) { if(void 0 === e) return this.scrubbing_;
					this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing") }, t.prototype.currentTime = function(e) { return void 0 !== e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime) }, t.prototype.duration = function(e) { if(void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
					e = parseFloat(e), e < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")) }, t.prototype.remainingTime = function() { return this.duration() - this.currentTime() }, t.prototype.remainingTimeDisplay = function() { return Math.floor(this.duration()) - Math.floor(this.currentTime()) }, t.prototype.buffered = function() { var e = this.techGet_("buffered"); return e && e.length || (e = ae(0, 0)), e }, t.prototype.bufferedPercent = function() { return se(this.buffered(), this.duration()) }, t.prototype.bufferedEnd = function() { var e = this.buffered(),
						t = this.duration(),
						n = e.end(e.length - 1); return n > t && (n = t), n }, t.prototype.volume = function(e) { var t = void 0; return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t) }, t.prototype.muted = function(e) { return void 0 !== e ? void this.techCall_("setMuted", e) : this.techGet_("muted") || !1 }, t.prototype.defaultMuted = function(e) { return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1 }, t.prototype.lastVolume_ = function(e) { return void 0 !== e && 0 !== e ? void(this.cache_.lastVolume = e) : this.cache_.lastVolume }, t.prototype.supportsFullScreen = function() { return this.techGet_("supportsFullScreen") || !1 }, t.prototype.isFullscreen = function(e) { return void 0 !== e ? void(this.isFullscreen_ = !!e) : !!this.isFullscreen_ }, t.prototype.requestFullscreen = function() { var e = Yt;
					this.isFullscreen(!0), e.requestFullscreen ? (X(Le, e.fullscreenchange, $t(this, function t(n) { this.isFullscreen(Le[e.fullscreenElement]), !1 === this.isFullscreen() && q(Le, e.fullscreenchange, t), this.trigger("fullscreenchange") })), this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")) }, t.prototype.exitFullscreen = function() { var e = Yt;
					this.isFullscreen(!1), e.requestFullscreen ? Le[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")) }, t.prototype.enterFullWindow = function() { this.isFullWindow = !0, this.docOrigOverflow = Le.documentElement.style.overflow, X(Le, "keydown", $t(this, this.fullWindowOnEscKey)), Le.documentElement.style.overflow = "hidden", w(Le.body, "vjs-full-window"), this.trigger("enterFullWindow") }, t.prototype.fullWindowOnEscKey = function(e) { 27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow()) }, t.prototype.exitFullWindow = function() { this.isFullWindow = !1, q(Le, "keydown", this.fullWindowOnEscKey), Le.documentElement.style.overflow = this.docOrigOverflow, T(Le.body, "vjs-full-window"), this.trigger("exitFullWindow") }, t.prototype.canPlayType = function(e) { for(var t = void 0, n = 0, r = this.options_.techOrder; n < r.length; n++) { var i = r[n],
							o = zn.getTech(i); if(o || (o = qt.getComponent(i)), o) { if(o.isSupported() && (t = o.canPlayType(e))) return t } else bt.error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.') } return "" }, t.prototype.selectSource = function(e) { var t = this,
						n = this.options_.techOrder.map(function(e) { return [e, zn.getTech(e)] }).filter(function(e) { var t = e[0],
								n = e[1]; return n ? n.isSupported() : (bt.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1) }),
						r = function(e, t, n) { var r = void 0; return e.some(function(e) { return t.some(function(t) { if(r = n(e, t)) return !0 }) }), r },
						i = function(e, n) { var r = e[0]; if(e[1].canPlaySource(n, t.options_[r.toLowerCase()])) return { source: n, tech: r } }; return(this.options_.sourceOrder ? r(e, n, function(e) { return function(t, n) { return e(n, t) } }(i)) : r(n, e, i)) || !1 }, t.prototype.src = function(e) { var t = this; if(void 0 === e) return this.cache_.src || ""; var n = Yn(e); if(!n.length) return void this.setTimeout(function() { this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) }) }, 0);
					this.changingSrc_ = !0, this.cache_.sources = n, this.updateSourceCaches_(n[0]), he(this, n[0], function(e, r) { if(t.middleware_ = r, t.cache_.sources = n, t.updateSourceCaches_(e), t.src_(e)) return n.length > 1 ? t.src(n.slice(1)) : (t.changingSrc_ = !1, t.setTimeout(function() { this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) }) }, 0), void t.triggerReady());
						fe(r, t.tech_) }) }, t.prototype.src_ = function(e) { var t = this,
						n = this.selectSource([e]); return !n || (te(n.tech, this.techName_) ? (this.ready(function() { this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1 }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(n.tech, n.source), this.tech_.ready(function() { t.changingSrc_ = !1 }), !1)) }, t.prototype.load = function() { this.techCall_("load") }, t.prototype.reset = function() { this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset") }, t.prototype.currentSources = function() { var e = this.currentSource(),
						t = []; return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t }, t.prototype.currentSource = function() { return this.cache_.source || {} }, t.prototype.currentSrc = function() { return this.currentSource() && this.currentSource().src || "" }, t.prototype.currentType = function() { return this.currentSource() && this.currentSource().type || "" }, t.prototype.preload = function(e) { return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload") }, t.prototype.autoplay = function(e) { if(void 0 === e) return this.options_.autoplay || !1; var t = void 0; "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = t || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", t) }, t.prototype.playsinline = function(e) { return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline") }, t.prototype.loop = function(e) { return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop") }, t.prototype.poster = function(e) { if(void 0 === e) return this.poster_;
					e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange")) }, t.prototype.handleTechPosterChange_ = function() { if((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) { var e = this.tech_.poster() || "";
						e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange")) } }, t.prototype.controls = function(e) { if(void 0 === e) return !!this.controls_;
					e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())) }, t.prototype.usingNativeControls = function(e) { if(void 0 === e) return !!this.usingNativeControls_;
					e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))) }, t.prototype.error = function(e) { return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new le(e), this.addClass("vjs-error"), bt.error("(CODE:" + this.error_.code + " " + le.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error")) }, t.prototype.reportUserActivity = function(e) { this.userActivity_ = !0 }, t.prototype.userActive = function(e) { if(void 0 === e) return this.userActive_; if((e = !!e) !== this.userActive_) { if(this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
						this.tech_ && this.tech_.one("mousemove", function(e) { e.stopPropagation(), e.preventDefault() }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive") } }, t.prototype.listenForUserActivity_ = function() { var e = void 0,
						t = void 0,
						n = void 0,
						r = $t(this, this.reportUserActivity),
						i = function(e) { e.screenX === t && e.screenY === n || (t = e.screenX, n = e.screenY, r()) },
						o = function() { r(), this.clearInterval(e), e = this.setInterval(r, 250) },
						a = function(t) { r(), this.clearInterval(e) };
					this.on("mousedown", o), this.on("mousemove", i), this.on("mouseup", a), this.on("keydown", r), this.on("keyup", r); var s = void 0;
					this.setInterval(function() { if(this.userActivity_) { this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s); var e = this.options_.inactivityTimeout;
							e <= 0 || (s = this.setTimeout(function() { this.userActivity_ || this.userActive(!1) }, e)) } }, 250) }, t.prototype.playbackRate = function(e) { return void 0 !== e ? void this.techCall_("setPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1 }, t.prototype.defaultPlaybackRate = function(e) { return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1 }, t.prototype.isAudio = function(e) { return void 0 !== e ? void(this.isAudio_ = !!e) : !!this.isAudio_ }, t.prototype.addTextTrack = function(e, t, n) { if(this.tech_) return this.tech_.addTextTrack(e, t, n) }, t.prototype.addRemoteTextTrack = function(e, t) { if(this.tech_) return this.tech_.addRemoteTextTrack(e, t) }, t.prototype.removeRemoteTextTrack = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.track,
						n = void 0 === t ? arguments[0] : t; if(this.tech_) return this.tech_.removeRemoteTextTrack(n) }, t.prototype.getVideoPlaybackQuality = function() { return this.techGet_("getVideoPlaybackQuality") }, t.prototype.videoWidth = function() { return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0 }, t.prototype.videoHeight = function() { return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0 }, t.prototype.language = function(e) { if(void 0 === e) return this.language_;
					this.language_ = String(e).toLowerCase() }, t.prototype.languages = function() { return ne(t.prototype.options_.languages, this.languages_) }, t.prototype.toJSON = function() { var e = ne(this.options_),
						t = e.tracks;
					e.tracks = []; for(var n = 0; n < t.length; n++) { var r = t[n];
						r = ne(r), r.player = void 0, e.tracks[n] = r } return e }, t.prototype.createModal = function(e, t) { var n = this;
					t = t || {}, t.content = e || ""; var r = new ln(this, t); return this.addChild(r), r.on("dispose", function() { n.removeChild(r) }), r.open(), r }, t.getTagSettings = function(e) { var t = { sources: [], tracks: [] },
						n = x(e),
						r = n["data-setup"]; if(_(e, "vjs-fluid") && (n.fluid = !0), null !== r) { var i = $e(r || "{}"),
							o = i[0],
							s = i[1];
						o && bt.error(o), a(n, s) } if(a(t, n), e.hasChildNodes())
						for(var l = e.childNodes, c = 0, u = l.length; c < u; c++) { var p = l[c],
								d = p.nodeName.toLowerCase(); "source" === d ? t.sources.push(x(p)) : "track" === d && t.tracks.push(x(p)) }
					return t }, t.prototype.flexNotSupported_ = function() { var e = Le.createElement("i"); return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style) }, t }(qt);
		Rn.names.forEach(function(e) { var t = Rn[e];
			Ai.prototype[t.getterName] = function() { return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]) } }), Ai.players = {};
		var Pi = je.navigator;
		Ai.prototype.options_ = { techOrder: zn.defaultTechOrder_, html5: {}, flash: {}, inactivityTimeout: 2e3, playbackRates: [], children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"], language: Pi && (Pi.languages && Pi.languages[0] || Pi.userLanguage || Pi.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media." }, tt || Ai.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) { Ai.prototype[e] = function() { return this.techGet_(e) } }), Oi.forEach(function(e) { Ai.prototype["handleTech" + ee(e) + "_"] = function() { return this.trigger(e) } }), qt.registerComponent("Player", Ai);
		var ji = {},
			Li = function(e) { return ji.hasOwnProperty(e) },
			Ii = function(e) { return Li(e) ? ji[e] : void 0 },
			$i = function(e, t) { e.activePlugins_ = e.activePlugins_ || {}, e.activePlugins_[t] = !0 },
			Di = function(e, t, n) { var r = (n ? "before" : "") + "pluginsetup";
				e.trigger(r, t), e.trigger(r + ":" + t.name, t) },
			Ni = function(e, t) { var n = function() { Di(this, { name: e, plugin: t, instance: null }, !0); var n = t.apply(this, arguments); return $i(this, e), Di(this, { name: e, plugin: t, instance: n }), n }; return Object.keys(t).forEach(function(e) { n[e] = t[e] }), n },
			Ri = function(e, t) { return t.prototype.name = e,
					function() { Di(this, { name: e, plugin: t, instance: null }, !0); for(var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i]; var o = new(Function.prototype.bind.apply(t, [null].concat([this].concat(r)))); return this[e] = function() { return o }, Di(this, o.getEventHash()), o } },
			zi = function() {
				function e(t) { if(ct(this, e), this.constructor === e) throw new Error("Plugin must be sub-classed; not directly instantiated.");
					this.player = t, J(this), delete this.trigger, Z(this, this.constructor.defaultState), $i(t, this.name), this.dispose = $t(this, this.dispose), t.on("dispose", this.dispose) } return e.prototype.version = function() { return this.constructor.VERSION }, e.prototype.getEventHash = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e.name = this.name, e.plugin = this.constructor, e.instance = this, e }, e.prototype.trigger = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Y(this.eventBusEl_, e, this.getEventHash(t)) }, e.prototype.handleStateChanged = function(e) {}, e.prototype.dispose = function() { var e = this.name,
						t = this.player;
					this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t.activePlugins_[e] = !1, this.player = this.state = null, t[e] = Ri(e, ji[e]) }, e.isBasic = function(t) { var n = "string" == typeof t ? Ii(t) : t; return "function" == typeof n && !e.prototype.isPrototypeOf(n.prototype) }, e.registerPlugin = function(t, n) { if("string" != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + (void 0 === t ? "undefined" : lt(t)) + "."); if(Li(t)) bt.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
					else if(Ai.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!'); if("function" != typeof n) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + (void 0 === n ? "undefined" : lt(n)) + "."); return ji[t] = n, "plugin" !== t && (e.isBasic(n) ? Ai.prototype[t] = Ni(t, n) : Ai.prototype[t] = Ri(t, n)), n }, e.deregisterPlugin = function(e) { if("plugin" === e) throw new Error("Cannot de-register base plugin.");
					Li(e) && (delete ji[e], delete Ai.prototype[e]) }, e.getPlugins = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(ji),
						t = void 0; return e.forEach(function(e) { var n = Ii(e);
						n && (t = t || {}, t[e] = n) }), t }, e.getPluginVersion = function(e) { var t = Ii(e); return t && t.VERSION || "" }, e }();
		zi.getPlugin = Ii, zi.BASE_PLUGIN_NAME = "plugin", zi.registerPlugin("plugin", zi), Ai.prototype.usingPlugin = function(e) { return !!this.activePlugins_ && !0 === this.activePlugins_[e] }, Ai.prototype.hasPlugin = function(e) { return !!Li(e) };
		var Bi = function(e, t) { if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : lt(t)));
				e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (e.super_ = t) },
			Fi = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = function() { e.apply(this, arguments) },
					r = {}; "object" === (void 0 === t ? "undefined" : lt(t)) ? (t.constructor !== Object.prototype.constructor && (n = t.constructor), r = t) : "function" == typeof t && (n = t), Bi(n, e); for(var i in r) r.hasOwnProperty(i) && (n.prototype[i] = r[i]); return n };
		"undefined" == typeof HTMLVideoElement && h() && (Le.createElement("video"), Le.createElement("audio"), Le.createElement("track"), Le.createElement("video-js"));
		var Hi = function(e) { return 0 === e.indexOf("#") ? e.slice(1) : e };
		if(Pe.hooks_ = {}, Pe.hooks = function(e, t) { return Pe.hooks_[e] = Pe.hooks_[e] || [], t && (Pe.hooks_[e] = Pe.hooks_[e].concat(t)), Pe.hooks_[e] }, Pe.hook = function(e, t) { Pe.hooks(e, t) }, Pe.hookOnce = function(e, t) { Pe.hooks(e, [].concat(t).map(function(t) { return function n() { return Pe.removeHook(e, n), t.apply(void 0, arguments) } })) }, Pe.removeHook = function(e, t) { var n = Pe.hooks(e).indexOf(t); return !(n <= -1) && (Pe.hooks_[e] = Pe.hooks_[e].slice(), Pe.hooks_[e].splice(n, 1), !0) }, !0 !== je.VIDEOJS_NO_DYNAMIC_STYLE && h()) { var Vi = wt(".vjs-styles-defaults"); if(!Vi) { Vi = Lt("vjs-styles-defaults"); var Gi = wt("head");
				Gi && Gi.insertBefore(Vi, Gi.firstChild), It(Vi, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ") } } Q(1, Pe), Pe.VERSION = Re, Pe.options = Ai.prototype.options_, Pe.getPlayers = function() { return Ai.players }, Pe.getPlayer = function(e) { var t = Ai.players,
				n = void 0; if("string" == typeof e) { var r = Hi(e),
					i = t[r]; if(i) return i;
				n = wt("#" + r) } else n = e; if(f(n)) { var o = n,
					a = o.player,
					s = o.playerId; if(a || t[s]) return a || t[s] } }, Pe.getAllPlayers = function() { return Object.keys(Ai.players).map(function(e) { return Ai.players[e] }).filter(Boolean) }, Pe.players = Ai.players, Pe.getComponent = qt.getComponent, Pe.registerComponent = function(e, t) { zn.isTech(t) && bt.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), qt.registerComponent.call(qt, e, t) }, Pe.getTech = zn.getTech, Pe.registerTech = zn.registerTech, Pe.use = de, !tt && Object.defineProperty ? (Object.defineProperty(Pe, "middleware", { value: {}, writeable: !1, enumerable: !0 }), Object.defineProperty(Pe.middleware, "TERMINATOR", { value: Hn, writeable: !1, enumerable: !0 })) : Pe.middleware = { TERMINATOR: Hn }, Pe.browser = st, Pe.TOUCH_ENABLED = ot, Pe.extend = Fi, Pe.mergeOptions = ne, Pe.bind = $t, Pe.registerPlugin = zi.registerPlugin, Pe.plugin = function(e, t) { return bt.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), zi.registerPlugin(e, t) }, Pe.getPlugins = zi.getPlugins, Pe.getPlugin = zi.getPlugin, Pe.getPluginVersion = zi.getPluginVersion, Pe.addLanguage = function(e, t) { var n; return e = ("" + e).toLowerCase(), Pe.options.languages = ne(Pe.options.languages, (n = {}, n[e] = t, n)), Pe.options.languages[e] }, Pe.log = bt, Pe.createTimeRange = Pe.createTimeRanges = ae, Pe.formatTime = lr, Pe.setFormatTime = Se, Pe.resetFormatTime = ke, Pe.parseUrl = Cn, Pe.isCrossOrigin = Sn, Pe.EventTarget = Rt, Pe.on = X, Pe.one = K, Pe.off = q, Pe.trigger = Y, Pe.xhr = De, Pe.TextTrack = An, Pe.AudioTrack = Pn, Pe.VideoTrack = jn, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(e) { Pe[e] = function() { return bt.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Ct[e].apply(null, arguments) } }), Pe.computedStyle = c, Pe.dom = Ct, Pe.url = kn, e.exports = Pe
	},
	DuR2: function(e, t) { var n;
		n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch(e) { "object" == typeof window && (n = window) } e.exports = n },
	DvOw: function(e, t) {
		function n(e) { return "string" == typeof e && (!!o[e.toLowerCase()] && e.toLowerCase()) }

		function r(e) { return "number" == typeof e && e >= 0 && e <= 100 }

		function i() { var e = 100,
				t = 3,
				i = 0,
				o = 100,
				a = 0,
				s = 100,
				l = "";
			Object.defineProperties(this, { width: { enumerable: !0, get: function() { return e }, set: function(t) { if(!r(t)) throw new Error("Width must be between 0 and 100.");
						e = t } }, lines: { enumerable: !0, get: function() { return t }, set: function(e) { if("number" != typeof e) throw new TypeError("Lines must be set to a number.");
						t = e } }, regionAnchorY: { enumerable: !0, get: function() { return o }, set: function(e) { if(!r(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
						o = e } }, regionAnchorX: { enumerable: !0, get: function() { return i }, set: function(e) { if(!r(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
						i = e } }, viewportAnchorY: { enumerable: !0, get: function() { return s }, set: function(e) { if(!r(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
						s = e } }, viewportAnchorX: { enumerable: !0, get: function() { return a }, set: function(e) { if(!r(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
						a = e } }, scroll: { enumerable: !0, get: function() { return l }, set: function(e) { var t = n(e); if(!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
						l = t } } }) } var o = { "": !0, up: !0 };
		e.exports = i },
	EGZi: function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } },
	EqjI: function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } },
	"FZ+f": function(e, t) {
		function n(e, t) { var n = e[1] || "",
				i = e[3]; if(!i) return n; if(t && "function" == typeof btoa) { var o = r(i); return [n].concat(i.sources.map(function(e) { return "/*# sourceURL=" + i.sourceRoot + e + " */" })).concat([o]).join("\n") } return [n].join("\n") }

		function r(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" } e.exports = function(e) { var t = []; return t.toString = function() { return this.map(function(t) { var r = n(t, e); return t[2] ? "@media " + t[2] + "{" + r + "}" : r }).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
					[null, e, ""]
				]); for(var r = {}, i = 0; i < this.length; i++) { var o = this[i][0]; "number" == typeof o && (r[o] = !0) } for(i = 0; i < e.length; i++) { var a = e[i]; "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a)) } }, t } },
	FeBl: function(e, t) { var n = e.exports = { version: "2.5.3" }; "number" == typeof __e && (__e = n) },
	FtD3: function(e, t, n) { "use strict"; var r = n("t8qj");
		e.exports = function(e, t, n, i, o) { var a = new Error(e); return r(a, t, n, i, o) } },
	GHBc: function(e, t, n) { "use strict"; var r = n("cGG2");
		e.exports = r.isStandardBrowserEnv() ? function() {
			function e(e) { var t = e; return n && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), { href: i.href, protocol: i.protocol ? i.protocol.replace(/:$/, "") : "", host: i.host, search: i.search ? i.search.replace(/^\?/, "") : "", hash: i.hash ? i.hash.replace(/^#/, "") : "", hostname: i.hostname, port: i.port, pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname } } var t, n = /(msie|trident)/i.test(navigator.userAgent),
				i = document.createElement("a"); return t = e(window.location.href),
				function(n) { var i = r.isString(n) ? e(n) : n; return i.protocol === t.protocol && i.host === t.host } }() : function() { return function() { return !0 } }() },
	"I/+Z": function(e, t) {
		function n(e, t) { var n, r = null; try { n = JSON.parse(e, t) } catch(e) { r = e } return [r, n] } e.exports = n },
	Ibhu: function(e, t, n) { var r = n("D2L2"),
			i = n("TcQ7"),
			o = n("vFc/")(!1),
			a = n("ax3d")("IE_PROTO");
		e.exports = function(e, t) { var n, s = i(e),
				l = 0,
				c = []; for(n in s) n != a && r(s, n) && c.push(n); for(; t.length > l;) r(s, n = t[l++]) && (~o(c, n) || c.push(n)); return c } },
	"JP+z": function(e, t, n) { "use strict";
		e.exports = function(e, t) { return function() { for(var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } } },
	KCLY: function(e, t, n) { "use strict";
		(function(t) {
			function r(e, t) {!i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var i = n("cGG2"),
				o = n("5VQ+"),
				a = { "Content-Type": "application/x-www-form-urlencoded" },
				s = { adapter: function() { var e; return "undefined" != typeof XMLHttpRequest ? e = n("7GwW") : void 0 !== t && (e = n("7GwW")), e }(), transformRequest: [function(e, t) { return o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if("string" == typeof e) try { e = JSON.parse(e) } catch(e) {}
						return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 } };
			s.headers = { common: { Accept: "application/json, text/plain, */*" } }, i.forEach(["delete", "get", "head"], function(e) { s.headers[e] = {} }), i.forEach(["post", "put", "patch"], function(e) { s.headers[e] = i.merge(a) }), e.exports = s }).call(t, n("W2nU")) },
	Kh4W: function(e, t, n) { t.f = n("dSzd") },
	LKZe: function(e, t, n) { var r = n("NpIQ"),
			i = n("X8DO"),
			o = n("TcQ7"),
			a = n("MmMw"),
			s = n("D2L2"),
			l = n("SfB7"),
			c = Object.getOwnPropertyDescriptor;
		t.f = n("+E39") ? c : function(e, t) { if(e = o(e), t = a(t, !0), l) try { return c(e, t) } catch(e) {}
			if(s(e, t)) return i(!r.f.call(e, t), e[t]) } },
	M6a0: function(e, t) {},
	MU5D: function(e, t, n) { var r = n("R9M2");
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) } },
	MmMw: function(e, t, n) { var r = n("EqjI");
		e.exports = function(e, t) { if(!r(e)) return e; var n, i; if(t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; if("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i; if(!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") } },
	NBiq: function(e, t, n) { window.videojs = n("Dia2"), videojs = videojs.default || videojs; var r = n("+9YK");
		r = r.default || r; var i = { videojs: videojs, videoPlayer: r, install: function(e) { e.component(r.name, r) } };
		e.exports = i },
	NYxO: function(e, t, n) {
		"use strict";

		function r(e) { x && (e._devtoolHook = x, x.emit("vuex:init", e), x.on("vuex:travel-to-state", function(t) { e.replaceState(t) }), e.subscribe(function(e, t) { x.emit("vuex:mutation", e, t) })) }

		function i(e, t) { Object.keys(e).forEach(function(n) { return t(e[n], n) }) }

		function o(e) { return null !== e && "object" == typeof e }

		function a(e) { return e && "function" == typeof e.then }

		function s(e, t, n) { if(t.update(n), n.modules)
				for(var r in n.modules) { if(!t.getChild(r)) return;
					s(e.concat(r), t.getChild(r), n.modules[r]) } }

		function l(e, t) { return t.indexOf(e) < 0 && t.push(e),
				function() { var n = t.indexOf(e);
					n > -1 && t.splice(n, 1) } }

		function c(e, t) { e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null); var n = e.state;
			p(e, n, [], e._modules.root, !0), u(e, n, t) }

		function u(e, t, n) { var r = e._vm;
			e.getters = {}; var o = e._wrappedGetters,
				a = {};
			i(o, function(t, n) { a[n] = function() { return t(e) }, Object.defineProperty(e.getters, n, { get: function() { return e._vm[n] }, enumerable: !0 }) }); var s = M.config.silent;
			M.config.silent = !0, e._vm = new M({ data: { $$state: t }, computed: a }), M.config.silent = s, e.strict && g(e), r && (n && e._withCommit(function() { r._data.$$state = null }), M.nextTick(function() { return r.$destroy() })) }

		function p(e, t, n, r, i) { var o = !n.length,
				a = e._modules.getNamespace(n); if(r.namespaced && (e._modulesNamespaceMap[a] = r), !o && !i) { var s = y(t, n.slice(0, -1)),
					l = n[n.length - 1];
				e._withCommit(function() { M.set(s, l, r.state) }) } var c = r.context = d(e, a, n);
			r.forEachMutation(function(t, n) { f(e, a + n, t, c) }), r.forEachAction(function(t, n) { var r = t.root ? n : a + n,
					i = t.handler || t;
				v(e, r, i, c) }), r.forEachGetter(function(t, n) { m(e, a + n, t, c) }), r.forEachChild(function(r, o) { p(e, t, n.concat(o), r, i) }) }

		function d(e, t, n) { var r = "" === t,
				i = { dispatch: r ? e.dispatch : function(n, r, i) { var o = b(n, r, i),
							a = o.payload,
							s = o.options,
							l = o.type; return s && s.root || (l = t + l), e.dispatch(l, a) }, commit: r ? e.commit : function(n, r, i) { var o = b(n, r, i),
							a = o.payload,
							s = o.options,
							l = o.type;
						s && s.root || (l = t + l), e.commit(l, a, s) } }; return Object.defineProperties(i, { getters: { get: r ? function() { return e.getters } : function() { return h(e, t) } }, state: { get: function() { return y(e.state, n) } } }), i }

		function h(e, t) { var n = {},
				r = t.length; return Object.keys(e.getters).forEach(function(i) { if(i.slice(0, r) === t) { var o = i.slice(r);
					Object.defineProperty(n, o, { get: function() { return e.getters[i] }, enumerable: !0 }) } }), n }

		function f(e, t, n, r) {
			(e._mutations[t] || (e._mutations[t] = [])).push(function(t) { n.call(e, r.state, t) }) }

		function v(e, t, n, r) {
			(e._actions[t] || (e._actions[t] = [])).push(function(t, i) { var o = n.call(e, { dispatch: r.dispatch, commit: r.commit, getters: r.getters, state: r.state, rootGetters: e.getters, rootState: e.state }, t, i); return a(o) || (o = Promise.resolve(o)), e._devtoolHook ? o.catch(function(t) { throw e._devtoolHook.emit("vuex:error", t), t }) : o }) }

		function m(e, t, n, r) { e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) { return n(r.state, r.getters, e.state, e.getters) }) }

		function g(e) { e._vm.$watch(function() { return this._data.$$state }, function() {}, { deep: !0, sync: !0 }) }

		function y(e, t) { return t.length ? t.reduce(function(e, t) { return e[t] }, e) : e }

		function b(e, t, n) { return o(e) && e.type && (n = t, t = e, e = e.type), { type: e, payload: t, options: n } }

		function _(e) { M && e === M || (M = e, E(M)) }

		function w(e) { return Array.isArray(e) ? e.map(function(e) { return { key: e, val: e } }) : Object.keys(e).map(function(t) { return { key: t, val: e[t] } }) }

		function T(e) { return function(t, n) { return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), e(t, n) } }

		function C(e, t, n) { return e._modulesNamespaceMap[n] } n.d(t, "c", function() { return I }), n.d(t, "b", function() { return $ });
		/**
		 * vuex v3.0.1
		 * (c) 2017 Evan You
		 * @license MIT
		 */
		var E = function(e) {
				function t() { var e = this.$options;
					e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store) } if(Number(e.version.split(".")[0]) >= 2) e.mixin({ beforeCreate: t });
				else { var n = e.prototype._init;
					e.prototype._init = function(e) { void 0 === e && (e = {}), e.init = e.init ? [t].concat(e.init) : t, n.call(this, e) } } },
			x = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
			S = function(e, t) { this.runtime = t, this._children = Object.create(null), this._rawModule = e; var n = e.state;
				this.state = ("function" == typeof n ? n() : n) || {} },
			k = { namespaced: { configurable: !0 } };
		k.namespaced.get = function() { return !!this._rawModule.namespaced }, S.prototype.addChild = function(e, t) { this._children[e] = t }, S.prototype.removeChild = function(e) { delete this._children[e] }, S.prototype.getChild = function(e) { return this._children[e] }, S.prototype.update = function(e) { this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters) }, S.prototype.forEachChild = function(e) { i(this._children, e) }, S.prototype.forEachGetter = function(e) { this._rawModule.getters && i(this._rawModule.getters, e) }, S.prototype.forEachAction = function(e) { this._rawModule.actions && i(this._rawModule.actions, e) }, S.prototype.forEachMutation = function(e) { this._rawModule.mutations && i(this._rawModule.mutations, e) }, Object.defineProperties(S.prototype, k);
		var O = function(e) { this.register([], e, !1) };
		O.prototype.get = function(e) { return e.reduce(function(e, t) { return e.getChild(t) }, this.root) }, O.prototype.getNamespace = function(e) { var t = this.root; return e.reduce(function(e, n) { return t = t.getChild(n), e + (t.namespaced ? n + "/" : "") }, "") }, O.prototype.update = function(e) { s([], this.root, e) }, O.prototype.register = function(e, t, n) { var r = this;
			void 0 === n && (n = !0); var o = new S(t, n); if(0 === e.length) this.root = o;
			else { this.get(e.slice(0, -1)).addChild(e[e.length - 1], o) } t.modules && i(t.modules, function(t, i) { r.register(e.concat(i), t, n) }) }, O.prototype.unregister = function(e) { var t = this.get(e.slice(0, -1)),
				n = e[e.length - 1];
			t.getChild(n).runtime && t.removeChild(n) };
		var M, A = function(e) { var t = this;
				void 0 === e && (e = {}), !M && "undefined" != typeof window && window.Vue && _(window.Vue); var n = e.plugins;
				void 0 === n && (n = []); var i = e.strict;
				void 0 === i && (i = !1); var o = e.state;
				void 0 === o && (o = {}), "function" == typeof o && (o = o() || {}), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new O(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new M; var a = this,
					s = this,
					l = s.dispatch,
					c = s.commit;
				this.dispatch = function(e, t) { return l.call(a, e, t) }, this.commit = function(e, t, n) { return c.call(a, e, t, n) }, this.strict = i, p(this, o, [], this._modules.root), u(this, o), n.forEach(function(e) { return e(t) }), M.config.devtools && r(this) },
			P = { state: { configurable: !0 } };
		P.state.get = function() { return this._vm._data.$$state }, P.state.set = function(e) {}, A.prototype.commit = function(e, t, n) { var r = this,
				i = b(e, t, n),
				o = i.type,
				a = i.payload,
				s = (i.options, { type: o, payload: a }),
				l = this._mutations[o];
			l && (this._withCommit(function() { l.forEach(function(e) { e(a) }) }), this._subscribers.forEach(function(e) { return e(s, r.state) })) }, A.prototype.dispatch = function(e, t) { var n = this,
				r = b(e, t),
				i = r.type,
				o = r.payload,
				a = { type: i, payload: o },
				s = this._actions[i]; if(s) return this._actionSubscribers.forEach(function(e) { return e(a, n.state) }), s.length > 1 ? Promise.all(s.map(function(e) { return e(o) })) : s[0](o) }, A.prototype.subscribe = function(e) { return l(e, this._subscribers) }, A.prototype.subscribeAction = function(e) { return l(e, this._actionSubscribers) }, A.prototype.watch = function(e, t, n) { var r = this; return this._watcherVM.$watch(function() { return e(r.state, r.getters) }, t, n) }, A.prototype.replaceState = function(e) { var t = this;
			this._withCommit(function() { t._vm._data.$$state = e }) }, A.prototype.registerModule = function(e, t, n) { void 0 === n && (n = {}), "string" == typeof e && (e = [e]), this._modules.register(e, t), p(this, this.state, e, this._modules.get(e), n.preserveState), u(this, this.state) }, A.prototype.unregisterModule = function(e) { var t = this; "string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit(function() { var n = y(t.state, e.slice(0, -1));
				M.delete(n, e[e.length - 1]) }), c(this) }, A.prototype.hotUpdate = function(e) { this._modules.update(e), c(this, !0) }, A.prototype._withCommit = function(e) { var t = this._committing;
			this._committing = !0, e(), this._committing = t }, Object.defineProperties(A.prototype, P);
		var j = T(function(e, t) { var n = {}; return w(t).forEach(function(t) { var r = t.key,
						i = t.val;
					n[r] = function() { var t = this.$store.state,
							n = this.$store.getters; if(e) { var r = C(this.$store, "mapState", e); if(!r) return;
							t = r.context.state, n = r.context.getters } return "function" == typeof i ? i.call(this, t, n) : t[i] }, n[r].vuex = !0 }), n }),
			L = T(function(e, t) { var n = {}; return w(t).forEach(function(t) { var r = t.key,
						i = t.val;
					n[r] = function() { for(var t = [], n = arguments.length; n--;) t[n] = arguments[n]; var r = this.$store.commit; if(e) { var o = C(this.$store, "mapMutations", e); if(!o) return;
							r = o.context.commit } return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t)) } }), n }),
			I = T(function(e, t) { var n = {}; return w(t).forEach(function(t) { var r = t.key,
						i = t.val;
					i = e + i, n[r] = function() { if(!e || C(this.$store, "mapGetters", e)) return this.$store.getters[i] }, n[r].vuex = !0 }), n }),
			$ = T(function(e, t) { var n = {}; return w(t).forEach(function(t) { var r = t.key,
						i = t.val;
					n[r] = function() { for(var t = [], n = arguments.length; n--;) t[n] = arguments[n]; var r = this.$store.dispatch; if(e) { var o = C(this.$store, "mapActions", e); if(!o) return;
							r = o.context.dispatch } return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t)) } }), n }),
			D = function(e) { return { mapState: j.bind(null, e), mapGetters: I.bind(null, e), mapMutations: L.bind(null, e), mapActions: $.bind(null, e) } },
			N = { Store: A, install: _, version: "3.0.1", mapState: j, mapMutations: L, mapGetters: I, mapActions: $, createNamespacedHelpers: D };
		t.a = N
	},
	NpIQ: function(e, t) { t.f = {}.propertyIsEnumerable },
	O4g8: function(e, t) { e.exports = !0 },
	ON07: function(e, t, n) { var r = n("EqjI"),
			i = n("7KvD").document,
			o = r(i) && r(i.createElement);
		e.exports = function(e) { return o ? i.createElement(e) : {} } },
	OYls: function(e, t, n) { n("crlp")("asyncIterator") },
	Pyiu: function(e, t, n) { "use strict"; var r = n("vRXZ"),
			i = Object.prototype.toString,
			o = Object.prototype.hasOwnProperty,
			a = function(e, t, n) { for(var r = 0, i = e.length; r < i; r++) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e)) },
			s = function(e, t, n) { for(var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e) },
			l = function(e, t, n) { for(var r in e) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e)) },
			c = function(e, t, n) { if(!r(t)) throw new TypeError("iterator must be a function"); var o;
				arguments.length >= 3 && (o = n), "[object Array]" === i.call(e) ? a(e, t, o) : "string" == typeof e ? s(e, t, o) : l(e, t, o) };
		e.exports = c },
	PzxK: function(e, t, n) { var r = n("D2L2"),
			i = n("sB3e"),
			o = n("ax3d")("IE_PROTO"),
			a = Object.prototype;
		e.exports = Object.getPrototypeOf || function(e) { return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } },
	QRG4: function(e, t, n) { var r = n("UuGF"),
			i = Math.min;
		e.exports = function(e) { return e > 0 ? i(r(e), 9007199254740991) : 0 } },
	"QWe/": function(e, t, n) { n("crlp")("observable") },
	QYuf: function(e, t) {
		function n(e) { return e.replace(/^\s*|\s*$/g, "") } t = e.exports = n, t.left = function(e) { return e.replace(/^\s*/, "") }, t.right = function(e) { return e.replace(/\s*$/, "") } },
	R4wc: function(e, t, n) { var r = n("kM2E");
		r(r.S + r.F, "Object", { assign: n("To3L") }) },
	R9M2: function(e, t) { var n = {}.toString;
		e.exports = function(e) { return n.call(e).slice(8, -1) } },
	RPLV: function(e, t, n) { var r = n("7KvD").document;
		e.exports = r && r.documentElement },
	Re3r: function(e, t) {
		function n(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }

		function r(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0)) }
		/*!
		 * Determine if an object is a Buffer
		 *
		 * @author   Feross Aboukhadijeh <https://feross.org>
		 * @license  MIT
		 */
		e.exports = function(e) { return null != e && (n(e) || r(e) || !!e._isBuffer) }
	},
	Rl2i: function(e, t) {
		function n(e) { var t = r.call(e); return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt) } e.exports = n; var r = Object.prototype.toString },
	Rrel: function(e, t, n) { var r = n("TcQ7"),
			i = n("n0T6").f,
			o = {}.toString,
			a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			s = function(e) { try { return i(e) } catch(e) { return a.slice() } };
		e.exports.f = function(e) { return a && "[object Window]" == o.call(e) ? s(e) : i(r(e)) } },
	S82l: function(e, t) { e.exports = function(e) { try { return !!e() } catch(e) { return !0 } } },
	SfB7: function(e, t, n) { e.exports = !n("+E39") && !n("S82l")(function() { return 7 != Object.defineProperty(n("ON07")("div"), "a", { get: function() { return 7 } }).a }) },
	TNV1: function(e, t, n) { "use strict"; var r = n("cGG2");
		e.exports = function(e, t, n) { return r.forEach(n, function(n) { e = n(e, t) }), e } },
	TcQ7: function(e, t, n) { var r = n("MU5D"),
			i = n("52gC");
		e.exports = function(e) { return r(i(e)) } },
	To3L: function(e, t, n) { "use strict"; var r = n("lktj"),
			i = n("1kS7"),
			o = n("NpIQ"),
			a = n("sB3e"),
			s = n("MU5D"),
			l = Object.assign;
		e.exports = !l || n("S82l")(function() { var e = {},
				t = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r }) ? function(e, t) { for(var n = a(e), l = arguments.length, c = 1, u = i.f, p = o.f; l > c;)
				for(var d, h = s(arguments[c++]), f = u ? r(h).concat(u(h)) : r(h), v = f.length, m = 0; v > m;) p.call(h, d = f[m++]) && (n[d] = h[d]); return n } : l },
	UuGF: function(e, t) { var n = Math.ceil,
			r = Math.floor;
		e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) } },
	V3tA: function(e, t, n) { n("R4wc"), e.exports = n("FeBl").Object.assign },
	"VU/8": function(e, t) { e.exports = function(e, t, n, r, i, o) { var a, s = e = e || {},
				l = typeof e.default; "object" !== l && "function" !== l || (a = e, s = e.default); var c = "function" == typeof s ? s.options : s;
			t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = i); var u; if(o ? (u = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o) }, c._ssrRegister = u) : r && (u = r), u) { var p = c.functional,
					d = p ? c.render : c.beforeCreate;
				p ? (c._injectStyles = u, c.render = function(e, t) { return u.call(t), d(e, t) }) : c.beforeCreate = d ? [].concat(d, u) : [u] } return { esModule: a, exports: s, options: c } } },
	W2nU: function(e, t) {
		function n() { throw new Error("setTimeout has not been defined") }

		function r() { throw new Error("clearTimeout has not been defined") }

		function i(e) { if(u === setTimeout) return setTimeout(e, 0); if((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0); try { return u(e, 0) } catch(t) { try { return u.call(null, e, 0) } catch(t) { return u.call(this, e, 0) } } }

		function o(e) { if(p === clearTimeout) return clearTimeout(e); if((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e); try { return p(e) } catch(t) { try { return p.call(null, e) } catch(t) { return p.call(this, e) } } }

		function a() { v && h && (v = !1, h.length ? f = h.concat(f) : m = -1, f.length && s()) }

		function s() { if(!v) { var e = i(a);
				v = !0; for(var t = f.length; t;) { for(h = f, f = []; ++m < t;) h && h[m].run();
					m = -1, t = f.length } h = null, v = !1, o(e) } }

		function l(e, t) { this.fun = e, this.array = t }

		function c() {} var u, p, d = e.exports = {};! function() { try { u = "function" == typeof setTimeout ? setTimeout : n } catch(e) { u = n } try { p = "function" == typeof clearTimeout ? clearTimeout : r } catch(e) { p = r } }(); var h, f = [],
			v = !1,
			m = -1;
		d.nextTick = function(e) { var t = new Array(arguments.length - 1); if(arguments.length > 1)
				for(var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			f.push(new l(e, t)), 1 !== f.length || v || i(s) }, l.prototype.run = function() { this.fun.apply(null, this.array) }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(e) { return [] }, d.binding = function(e) { throw new Error("process.binding is not supported") }, d.cwd = function() { return "/" }, d.chdir = function(e) { throw new Error("process.chdir is not supported") }, d.umask = function() { return 0 } },
	X8DO: function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } },
	Xc4G: function(e, t, n) { var r = n("lktj"),
			i = n("1kS7"),
			o = n("NpIQ");
		e.exports = function(e) { var t = r(e),
				n = i.f; if(n)
				for(var a, s = n(e), l = o.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a); return t } },
	XmWM: function(e, t, n) { "use strict";

		function r(e) { this.defaults = e, this.interceptors = { request: new a, response: new a } } var i = n("KCLY"),
			o = n("cGG2"),
			a = n("fuGk"),
			s = n("xLtR");
		r.prototype.request = function(e) { "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), e = o.merge(i, this.defaults, { method: "get" }, e), e.method = e.method.toLowerCase(); var t = [s, void 0],
				n = Promise.resolve(e); for(this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift()); return n }, o.forEach(["delete", "get", "head", "options"], function(e) { r.prototype[e] = function(t, n) { return this.request(o.merge(n || {}, { method: e, url: t })) } }), o.forEach(["post", "put", "patch"], function(e) { r.prototype[e] = function(t, n, r) { return this.request(o.merge(r || {}, { method: e, url: t, data: n })) } }), e.exports = r },
	Yobk: function(e, t, n) { var r = n("77Pl"),
			i = n("qio6"),
			o = n("xnc9"),
			a = n("ax3d")("IE_PROTO"),
			s = function() {},
			l = function() { var e, t = n("ON07")("iframe"),
					r = o.length; for(t.style.display = "none", n("RPLV").appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[o[r]]; return l() };
		e.exports = Object.create || function(e, t) { var n; return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t) } },
	Zzip: function(e, t, n) { e.exports = { default: n("/n6Q"), __esModule: !0 } },
	aj7g: function(e, t) {
		function n(e) { return "string" == typeof e && (!!s[e.toLowerCase()] && e.toLowerCase()) }

		function r(e) { return "string" == typeof e && (!!l[e.toLowerCase()] && e.toLowerCase()) }

		function i(e) { for(var t = 1; t < arguments.length; t++) { var n = arguments[t]; for(var r in n) e[r] = n[r] } return e }

		function o(e, t, o) { var s = this,
				l = /MSIE\s8\.0/.test(navigator.userAgent),
				c = {};
			l ? s = document.createElement("custom") : c.enumerable = !0, s.hasBeenReset = !1; var u = "",
				p = !1,
				d = e,
				h = t,
				f = o,
				v = null,
				m = "",
				g = !0,
				y = "auto",
				b = "start",
				_ = 50,
				w = "middle",
				T = 50,
				C = "middle"; if(Object.defineProperty(s, "id", i({}, c, { get: function() { return u }, set: function(e) { u = "" + e } })), Object.defineProperty(s, "pauseOnExit", i({}, c, { get: function() { return p }, set: function(e) { p = !!e } })), Object.defineProperty(s, "startTime", i({}, c, { get: function() { return d }, set: function(e) { if("number" != typeof e) throw new TypeError("Start time must be set to a number.");
						d = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "endTime", i({}, c, { get: function() { return h }, set: function(e) { if("number" != typeof e) throw new TypeError("End time must be set to a number.");
						h = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "text", i({}, c, { get: function() { return f }, set: function(e) { f = "" + e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "region", i({}, c, { get: function() { return v }, set: function(e) { v = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "vertical", i({}, c, { get: function() { return m }, set: function(e) { var t = n(e); if(!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
						m = t, this.hasBeenReset = !0 } })), Object.defineProperty(s, "snapToLines", i({}, c, { get: function() { return g }, set: function(e) { g = !!e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "line", i({}, c, { get: function() { return y }, set: function(e) { if("number" != typeof e && e !== a) throw new SyntaxError("An invalid number or illegal string was specified.");
						y = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "lineAlign", i({}, c, { get: function() { return b }, set: function(e) { var t = r(e); if(!t) throw new SyntaxError("An invalid or illegal string was specified.");
						b = t, this.hasBeenReset = !0 } })), Object.defineProperty(s, "position", i({}, c, { get: function() { return _ }, set: function(e) { if(e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
						_ = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "positionAlign", i({}, c, { get: function() { return w }, set: function(e) { var t = r(e); if(!t) throw new SyntaxError("An invalid or illegal string was specified.");
						w = t, this.hasBeenReset = !0 } })), Object.defineProperty(s, "size", i({}, c, { get: function() { return T }, set: function(e) { if(e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
						T = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "align", i({}, c, { get: function() { return C }, set: function(e) { var t = r(e); if(!t) throw new SyntaxError("An invalid or illegal string was specified.");
						C = t, this.hasBeenReset = !0 } })), s.displayState = void 0, l) return s } var a = "auto",
			s = { "": !0, lr: !0, rl: !0 },
			l = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
		o.prototype.getCueAsHTML = function() { return WebVTT.convertCueToDOMTree(window, this.text) }, e.exports = o },
	awF4: function(e, t, n) {
		(function(t) { var n;
			n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n }).call(t, n("DuR2")) },
	ax3d: function(e, t, n) { var r = n("e8AB")("keys"),
			i = n("3Eo+");
		e.exports = function(e) { return r[e] || (r[e] = i(e)) } },
	bOdI: function(e, t, n) { "use strict";
		t.__esModule = !0; var r = n("C4MV"),
			i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
		t.default = function(e, t, n) { return t in e ? (0, i.default)(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } },
	cGG2: function(e, t, n) { "use strict";

		function r(e) { return "[object Array]" === E.call(e) }

		function i(e) { return "[object ArrayBuffer]" === E.call(e) }

		function o(e) { return "undefined" != typeof FormData && e instanceof FormData }

		function a(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }

		function s(e) { return "string" == typeof e }

		function l(e) { return "number" == typeof e }

		function c(e) { return void 0 === e }

		function u(e) { return null !== e && "object" == typeof e }

		function p(e) { return "[object Date]" === E.call(e) }

		function d(e) { return "[object File]" === E.call(e) }

		function h(e) { return "[object Blob]" === E.call(e) }

		function f(e) { return "[object Function]" === E.call(e) }

		function v(e) { return u(e) && f(e.pipe) }

		function m(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }

		function g(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }

		function y() { return("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }

		function b(e, t) { if(null !== e && void 0 !== e)
				if("object" != typeof e && (e = [e]), r(e))
					for(var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
				else
					for(var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e) }

		function _() {
			function e(e, n) { "object" == typeof t[n] && "object" == typeof e ? t[n] = _(t[n], e) : t[n] = e } for(var t = {}, n = 0, r = arguments.length; n < r; n++) b(arguments[n], e); return t }

		function w(e, t, n) { return b(t, function(t, r) { e[r] = n && "function" == typeof t ? T(t, n) : t }), e } var T = n("JP+z"),
			C = n("Re3r"),
			E = Object.prototype.toString;
		e.exports = { isArray: r, isArrayBuffer: i, isBuffer: C, isFormData: o, isArrayBufferView: a, isString: s, isNumber: l, isObject: u, isUndefined: c, isDate: p, isFile: d, isBlob: h, isFunction: f, isStream: v, isURLSearchParams: m, isStandardBrowserEnv: y, forEach: b, merge: _, extend: w, trim: g } },
	cTzj: function(e, t, n) {
		/*!
		 * Vue-Lazyload.js v1.1.4
		 * (c) 2017 Awe <hilongjw@gmail.com>
		 * Released under the MIT License.
		 */
		! function(t, n) { e.exports = n() }(0, function() { "use strict";

			function e(e, t) { if(e.length) { var n = e.indexOf(t); return n > -1 ? e.splice(n, 1) : void 0 } }

			function t(e, t) { if(!e || !t) return e || {}; if(e instanceof Object)
					for(var n in t) e[n] = t[n]; return e }

			function n(e, t) { for(var n = !1, r = 0, i = e.length; r < i; r++)
					if(t(e[r])) { n = !0; break }
				return n }

			function r(e, t) { if("IMG" === e.tagName && e.getAttribute("data-srcset")) { var n = e.getAttribute("data-srcset"),
						r = [],
						i = e.parentNode,
						o = i.offsetWidth * t,
						a = void 0,
						s = void 0,
						l = void 0;
					n = n.trim().split(","), n.map(function(e) { e = e.trim(), a = e.lastIndexOf(" "), -1 === a ? (s = e, l = 999998) : (s = e.substr(0, a), l = parseInt(e.substr(a + 1, e.length - a - 2), 10)), r.push([l, s]) }), r.sort(function(e, t) { if(e[0] < t[0]) return -1; if(e[0] > t[0]) return 1; if(e[0] === t[0]) { if(-1 !== t[1].indexOf(".webp", t[1].length - 5)) return 1; if(-1 !== e[1].indexOf(".webp", e[1].length - 5)) return -1 } return 0 }); for(var c = "", u = void 0, p = r.length, d = 0; d < p; d++)
						if(u = r[d], u[0] >= o) { c = u[1]; break }
					return c } }

			function i(e, t) { for(var n = void 0, r = 0, i = e.length; r < i; r++)
					if(t(e[r])) { n = e[r]; break }
				return n }

			function o() { if(!d) return !1; var e = !0,
					t = document; try { var n = t.createElement("object");
					n.type = "image/webp", n.style.visibility = "hidden", n.innerHTML = "!", t.body.appendChild(n), e = !n.offsetWidth, t.body.removeChild(n) } catch(t) { e = !1 } return e }

			function a(e, t) { var n = null,
					r = 0; return function() { if(!n) { var i = Date.now() - r,
							o = this,
							a = arguments,
							s = function() { r = Date.now(), n = !1, e.apply(o, a) };
						i >= t ? s() : n = setTimeout(s, t) } } }

			function s(e) { return null !== e && "object" === (void 0 === e ? "undefined" : p(e)) }

			function l(e) { if(!(e instanceof Object)) return []; if(Object.keys) return Object.keys(e); var t = []; for(var n in e) e.hasOwnProperty(n) && t.push(n); return t }

			function c(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

			function u(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
				d = "undefined" != typeof window,
				h = d && "IntersectionObserver" in window,
				f = { event: "event", observer: "observer" },
				v = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return d && window.devicePixelRatio || e },
				m = function() { if(d) { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
							window.addEventListener("test", null, t) } catch(e) {} return e } }(),
				g = { on: function(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
						m ? e.addEventListener(t, n, { capture: r, passive: !0 }) : e.addEventListener(t, n, r) }, off: function(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
						e.removeEventListener(t, n, r) } },
				y = function(e, t, n) { var r = new Image;
					r.src = e.src, r.onload = function() { t({ naturalHeight: r.naturalHeight, naturalWidth: r.naturalWidth, src: r.src }) }, r.onerror = function(e) { n(e) } },
				b = function(e, t) { return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t] },
				_ = function(e) { return b(e, "overflow") + b(e, "overflow-y") + b(e, "overflow-x") },
				w = function(e) { if(d) { if(!(e instanceof HTMLElement)) return window; for(var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode;) { if(/(scroll|auto)/.test(_(t))) return t;
							t = t.parentNode } return window } },
				T = function() {
					function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
				C = {},
				E = function() {
					function e(t) { var n = t.el,
							r = t.src,
							i = t.error,
							o = t.loading,
							a = t.bindType,
							s = t.$parent,
							l = t.options,
							u = t.elRenderer;
						c(this, e), this.el = n, this.src = r, this.error = i, this.loading = o, this.bindType = a, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = l, this.filter(), this.initState(), this.performanceData = { init: Date.now(), loadStart: null, loadEnd: null }, this.rect = n.getBoundingClientRect(), this.$parent = s, this.elRenderer = u, this.render("loading", !1) } return T(e, [{ key: "initState", value: function() { this.state = { error: !1, loaded: !1, rendered: !1 } } }, { key: "record", value: function(e) { this.performanceData[e] = Date.now() } }, { key: "update", value: function(e) { var t = e.src,
								n = e.loading,
								r = e.error,
								i = this.src;
							this.src = t, this.loading = n, this.error = r, this.filter(), i !== this.src && (this.attempt = 0, this.initState()) } }, { key: "getRect", value: function() { this.rect = this.el.getBoundingClientRect() } }, { key: "checkInView", value: function() { return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0 } }, { key: "filter", value: function() { var e = this;
							l(this.options.filter).map(function(t) { e.options.filter[t](e, e.options) }) } }, { key: "renderLoading", value: function(e) { var t = this;
							y({ src: this.loading }, function(n) { t.render("loading", !1), e() }, function(n) { e(), t.options.silent }) } }, { key: "load", value: function() { var e = this; return this.attempt > this.options.attempt - 1 && this.state.error ? void this.options.silent : this.state.loaded || C[this.src] ? this.render("loaded", !0) : void this.renderLoading(function() { e.attempt++, e.record("loadStart"), y({ src: e.src }, function(t) { e.naturalHeight = t.naturalHeight, e.naturalWidth = t.naturalWidth, e.state.loaded = !0, e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), C[e.src] = 1 }, function(t) { e.state.error = !0, e.state.loaded = !1, e.render("error", !1) }) }) } }, { key: "render", value: function(e, t) { this.elRenderer(this, e, t) } }, { key: "performance", value: function() { var e = "loading",
								t = 0; return this.state.loaded && (e = "loaded", t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (e = "error"), { src: this.src, state: e, time: t } } }, { key: "destroy", value: function() { this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0 } }]), e }(),
				x = function() {
					function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
				S = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
				k = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
				O = { rootMargin: "0px", threshold: 0 },
				M = function(l) { return function() {
						function c(e) { var t = e.preLoad,
								n = e.error,
								r = e.throttleWait,
								i = e.preLoadTop,
								s = e.dispatchEvent,
								l = e.loading,
								p = e.attempt,
								d = e.silent,
								h = e.scale,
								m = e.listenEvents,
								g = (e.hasbind, e.filter),
								y = e.adapter,
								b = e.observer,
								_ = e.observerOptions;
							u(this, c), this.version = "1.1.4", this.mode = f.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = { silent: d || !0, dispatchEvent: !!s, throttleWait: r || 200, preLoad: t || 1.3, preLoadTop: i || 0, error: n || S, loading: l || S, attempt: p || 3, scale: h || v(h), ListenEvents: m || k, hasbind: !1, supportWebp: o(), filter: g || {}, adapter: y || {}, observer: !!b, observerOptions: _ || O }, this._initEvent(), this.lazyLoadHandler = a(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? f.observer : f.event) } return x(c, [{ key: "config", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								t(this.options, e) } }, { key: "performance", value: function() { var e = []; return this.ListenerQueue.map(function(t) { e.push(t.performance()) }), e } }, { key: "addLazyBox", value: function(e) { this.ListenerQueue.push(e), d && (this._addListenerTarget(window), this._observer && this._observer.observe(e.el), e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode)) } }, { key: "add", value: function(e, t, i) { var o = this; if(n(this.ListenerQueue, function(t) { return t.el === e })) return this.update(e, t), l.nextTick(this.lazyLoadHandler); var a = this._valueFormatter(t.value),
									s = a.src,
									c = a.loading,
									u = a.error;
								l.nextTick(function() { s = r(e, o.options.scale) || s, o._observer && o._observer.observe(e); var n = Object.keys(t.modifiers)[0],
										a = void 0;
									n && (a = i.context.$refs[n], a = a ? a.$el || a : document.getElementById(n)), a || (a = w(e)); var p = new E({ bindType: t.arg, $parent: a, el: e, loading: c, error: u, src: s, elRenderer: o._elRenderer.bind(o), options: o.options });
									o.ListenerQueue.push(p), d && (o._addListenerTarget(window), o._addListenerTarget(a)), o.lazyLoadHandler(), l.nextTick(function() { return o.lazyLoadHandler() }) }) } }, { key: "update", value: function(e, t) { var n = this,
									o = this._valueFormatter(t.value),
									a = o.src,
									s = o.loading,
									c = o.error;
								a = r(e, this.options.scale) || a; var u = i(this.ListenerQueue, function(t) { return t.el === e });
								u && u.update({ src: a, loading: s, error: c }), this._observer && this._observer.observe(e), this.lazyLoadHandler(), l.nextTick(function() { return n.lazyLoadHandler() }) } }, { key: "remove", value: function(t) { if(t) { this._observer && this._observer.unobserve(t); var n = i(this.ListenerQueue, function(e) { return e.el === t });
									n && (this._removeListenerTarget(n.$parent), this._removeListenerTarget(window), e(this.ListenerQueue, n) && n.destroy()) } } }, { key: "removeComponent", value: function(t) { t && (e(this.ListenerQueue, t), this._observer && this._observer.unobserve(t.el), t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode), this._removeListenerTarget(window)) } }, { key: "setMode", value: function(e) { var t = this;
								h || e !== f.observer || (e = f.event), this.mode = e, e === f.event ? (this._observer && (this.ListenerQueue.forEach(function(e) { t._observer.unobserve(e.el) }), this._observer = null), this.TargetQueue.forEach(function(e) { t._initListen(e.el, !0) })) : (this.TargetQueue.forEach(function(e) { t._initListen(e.el, !1) }), this._initIntersectionObserver()) } }, { key: "_addListenerTarget", value: function(e) { if(e) { var t = i(this.TargetQueue, function(t) { return t.el === e }); return t ? t.childrenCount++ : (t = { el: e, id: ++this.TargetIndex, childrenCount: 1, listened: !0 }, this.mode === f.event && this._initListen(t.el, !0), this.TargetQueue.push(t)), this.TargetIndex } } }, { key: "_removeListenerTarget", value: function(e) { var t = this;
								this.TargetQueue.forEach(function(n, r) { n.el === e && (--n.childrenCount || (t._initListen(n.el, !1), t.TargetQueue.splice(r, 1), n = null)) }) } }, { key: "_initListen", value: function(e, t) { var n = this;
								this.options.ListenEvents.forEach(function(r) { return g[t ? "on" : "off"](e, r, n.lazyLoadHandler) }) } }, { key: "_initEvent", value: function() { var t = this;
								this.Event = { listeners: { loading: [], loaded: [], error: [] } }, this.$on = function(e, n) { t.Event.listeners[e].push(n) }, this.$once = function(e, n) {
									function r() { i.$off(e, r), n.apply(i, arguments) } var i = t;
									t.$on(e, r) }, this.$off = function(n, r) { if(!r) return void(t.Event.listeners[n] = []);
									e(t.Event.listeners[n], r) }, this.$emit = function(e, n, r) { t.Event.listeners[e].forEach(function(e) { return e(n, r) }) } } }, { key: "_lazyLoadHandler", value: function() { var e = !1;
								this.ListenerQueue.forEach(function(t) { t.state.loaded || (e = t.checkInView()) && t.load() }) } }, { key: "_initIntersectionObserver", value: function() { var e = this;
								h && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(function(t) { e._observer.observe(t.el) })) } }, { key: "_observerHandler", value: function(e, t) { var n = this;
								e.forEach(function(e) { e.isIntersecting && n.ListenerQueue.forEach(function(t) { if(t.el === e.target) { if(t.state.loaded) return n._observer.unobserve(t.el);
											t.load() } }) }) } }, { key: "_elRenderer", value: function(e, t, n) { if(e.el) { var r = e.el,
										i = e.bindType,
										o = void 0; switch(t) {
										case "loading":
											o = e.loading; break;
										case "error":
											o = e.error; break;
										default:
											o = e.src } if(i ? r.style[i] = "url(" + o + ")" : r.getAttribute("src") !== o && r.setAttribute("src", o), r.setAttribute("lazy", t), this.$emit(t, e, n), this.options.adapter[t] && this.options.adapter[t](e, this.options), this.options.dispatchEvent) { var a = new CustomEvent(t, { detail: e });
										r.dispatchEvent(a) } } } }, { key: "_valueFormatter", value: function(e) { var t = e,
									n = this.options.loading,
									r = this.options.error; return s(e) && (e.src || this.options.silent, t = e.src, n = e.loading || this.options.loading, r = e.error || this.options.error), { src: t, loading: n, error: r } } }]), c }() },
				A = function(e) { return { props: { tag: { type: String, default: "div" } }, render: function(e) { return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default) }, data: function() { return { el: null, state: { loaded: !1 }, rect: {}, show: !1 } }, mounted: function() { this.el = this.$el, e.addLazyBox(this), e.lazyLoadHandler() }, beforeDestroy: function() { e.removeComponent(this) }, methods: { getRect: function() { this.rect = this.$el.getBoundingClientRect() }, checkInView: function() { return this.getRect(), d && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0 }, load: function() { this.show = !0, this.state.loaded = !0, this.$emit("show", this) } } } }; return { install: function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = M(e),
						i = new r(n),
						o = "2" === e.version.split(".")[0];
					e.prototype.$Lazyload = i, n.lazyComponent && e.component("lazy-component", A(i)), o ? e.directive("lazy", { bind: i.add.bind(i), update: i.update.bind(i), componentUpdated: i.lazyLoadHandler.bind(i), unbind: i.remove.bind(i) }) : e.directive("lazy", { bind: i.lazyLoadHandler.bind(i), update: function(e, n) { t(this.vm.$refs, this.vm.$els), i.add(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: e, oldValue: n }, { context: this.vm }) }, unbind: function() { i.remove(this.el) } }) } } })
	},
	cWxy: function(e, t, n) { "use strict";

		function r(e) { if("function" != typeof e) throw new TypeError("executor must be a function."); var t;
			this.promise = new Promise(function(e) { t = e }); var n = this;
			e(function(e) { n.reason || (n.reason = new i(e), t(n.reason)) }) } var i = n("dVOP");
		r.prototype.throwIfRequested = function() { if(this.reason) throw this.reason }, r.source = function() { var e; return { token: new r(function(t) { e = t }), cancel: e } }, e.exports = r },
	ciWi: function(e, t, n) { var r = n("awF4"),
			i = e.exports = { WebVTT: n("dlST"), VTTCue: n("aj7g"), VTTRegion: n("DvOw") };
		r.vttjs = i, r.WebVTT = i.WebVTT; var o = i.VTTCue,
			a = i.VTTRegion,
			s = r.VTTCue,
			l = r.VTTRegion;
		i.shim = function() { r.VTTCue = o, r.VTTRegion = a }, i.restore = function() { r.VTTCue = s, r.VTTRegion = l }, r.VTTCue || i.shim() },
	crlp: function(e, t, n) { var r = n("7KvD"),
			i = n("FeBl"),
			o = n("O4g8"),
			a = n("Kh4W"),
			s = n("evD5").f;
		e.exports = function(e) { var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) }) } },
	dIwP: function(e, t, n) { "use strict";
		e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) } },
	dSzd: function(e, t, n) { var r = n("e8AB")("wks"),
			i = n("3Eo+"),
			o = n("7KvD").Symbol,
			a = "function" == typeof o;
		(e.exports = function(e) { return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e)) }).store = r },
	dVOP: function(e, t, n) { "use strict";

		function r(e) { this.message = e } r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r },
	dlST: function(e, t) {
		function n(e, t) { this.name = "ParsingError", this.code = e.code, this.message = t || e.message }

		function r(e) {
			function t(e, t, n, r) { return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | r) / 1e3 } var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/); return n ? n[3] ? t(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? t(n[1], n[2], 0, n[4]) : t(0, n[1], n[2], n[4]) : null }

		function i() { this.values = m(null) }

		function o(e, t, n, r) { var i = r ? e.split(r) : [e]; for(var o in i)
				if("string" == typeof i[o]) { var a = i[o].split(n); if(2 === a.length) { var s = a[0],
							l = a[1];
						t(s, l) } } }

		function a(e, t, a) {
			function s() { var t = r(e); if(null === t) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + c); return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t }

			function l() { e = e.replace(/^\s+/, "") } var c = e; if(l(), t.startTime = s(), l(), "--\x3e" !== e.substr(0, 3)) throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + c);
			e = e.substr(3), l(), t.endTime = s(), l(),
				function(e, t) { var n = new i;
					o(e, function(e, t) { switch(e) {
							case "region":
								for(var r = a.length - 1; r >= 0; r--)
									if(a[r].id === t) { n.set(e, a[r].region); break }
								break;
							case "vertical":
								n.alt(e, t, ["rl", "lr"]); break;
							case "line":
								var i = t.split(","),
									o = i[0];
								n.integer(e, o), n.percent(e, o) && n.set("snapToLines", !1), n.alt(e, o, ["auto"]), 2 === i.length && n.alt("lineAlign", i[1], ["start", "middle", "end"]); break;
							case "position":
								i = t.split(","), n.percent(e, i[0]), 2 === i.length && n.alt("positionAlign", i[1], ["start", "middle", "end"]); break;
							case "size":
								n.percent(e, t); break;
							case "align":
								n.alt(e, t, ["start", "middle", "end", "left", "right"]) } }, /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", ""), t.line = n.get("line", "auto"), t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", "middle"), t.position = n.get("position", { start: 0, left: 0, middle: 50, end: 100, right: 100 }, t.align), t.positionAlign = n.get("positionAlign", { start: "start", left: "start", middle: "middle", end: "end", right: "end" }, t.align) }(e, t) }

		function s(e, t) {
			function n(e) { return g[e] } for(var i, o = e.document.createElement("div"), a = o, s = []; null !== (i = function() { if(!t) return null; var e = t.match(/^([^<]*)(<[^>]*>?)?/); return function(e) { return t = t.substr(e.length), e }(e[1] ? e[1] : e[2]) }());)
				if("<" !== i[0]) a.appendChild(e.document.createTextNode(function(e) { for(; u = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(u[0], n); return e }(i)));
				else { if("/" === i[1]) { s.length && s[s.length - 1] === i.substr(2).replace(">", "") && (s.pop(), a = a.parentNode); continue } var l, c = r(i.substr(1, i.length - 2)); if(c) { l = e.document.createProcessingInstruction("timestamp", c), a.appendChild(l); continue } var u = i.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); if(!u) continue; if(!(l = function(t, n) { var r = y[t]; if(!r) return null; var i = e.document.createElement(r);
							i.localName = r; var o = b[t]; return o && n && (i[o] = n.trim()), i }(u[1], u[3]))) continue; if(! function(e, t) { return !_[t.localName] || _[t.localName] === e.localName }(a, l)) continue;
					u[2] && (l.className = u[2].substr(1).replace(".", " ")), s.push(u[1]), a.appendChild(l), a = l }
			return o }

		function l(e) { for(var t = 0; t < w.length; t++) { var n = w[t]; if(e >= n[0] && e <= n[1]) return !0 } return !1 }

		function c(e) {
			function t(e, t) { for(var n = t.childNodes.length - 1; n >= 0; n--) e.push(t.childNodes[n]) }

			function n(e) { if(!e || !e.length) return null; var r = e.pop(),
					i = r.textContent || r.innerText; if(i) { var o = i.match(/^.*(\n|\r)/); return o ? (e.length = 0, o[0]) : i } return "ruby" === r.tagName ? n(e) : r.childNodes ? (t(e, r), n(e)) : void 0 } var r, i = [],
				o = ""; if(!e || !e.childNodes) return "ltr"; for(t(i, e); o = n(i);)
				for(var a = 0; a < o.length; a++)
					if(r = o.charCodeAt(a), l(r)) return "rtl"; return "ltr" }

		function u(e) { if("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line; if(!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1; for(var t = e.track, n = t.textTrackList, r = 0, i = 0; i < n.length && n[i] !== t; i++) "showing" === n[i].mode && r++; return -1 * ++r }

		function p() {}

		function d(e, t, n) { var r = /MSIE\s8\.0/.test(navigator.userAgent),
				i = "rgba(255, 255, 255, 1)",
				o = "rgba(0, 0, 0, 0.8)";
			r && (i = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), p.call(this), this.cue = t, this.cueDiv = s(e, t.text); var a = { color: i, backgroundColor: o, position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline" };
			r || (a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", a.unicodeBidi = "plaintext"), this.applyStyles(a, this.cueDiv), this.div = e.document.createElement("div"), a = { textAlign: "middle" === t.align ? "center" : t.align, font: n.font, whiteSpace: "pre-line", position: "absolute" }, r || (a.direction = c(this.cueDiv), a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(a), this.div.appendChild(this.cueDiv); var l = 0; switch(t.positionAlign) {
				case "start":
					l = t.position; break;
				case "middle":
					l = t.position - t.size / 2; break;
				case "end":
					l = t.position - t.size } "" === t.vertical ? this.applyStyles({ left: this.formatStyle(l, "%"), width: this.formatStyle(t.size, "%") }) : this.applyStyles({ top: this.formatStyle(l, "%"), height: this.formatStyle(t.size, "%") }), this.move = function(e) { this.applyStyles({ top: this.formatStyle(e.top, "px"), bottom: this.formatStyle(e.bottom, "px"), left: this.formatStyle(e.left, "px"), right: this.formatStyle(e.right, "px"), height: this.formatStyle(e.height, "px"), width: this.formatStyle(e.width, "px") }) } }

		function h(e) { var t, n, r, i, o = /MSIE\s8\.0/.test(navigator.userAgent); if(e.div) { n = e.div.offsetHeight, r = e.div.offsetWidth, i = e.div.offsetTop; var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
				e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0 } this.left = e.left, this.right = e.right, this.top = e.top || i, this.height = e.height || n, this.bottom = e.bottom || i + (e.height || n), this.width = e.width || r, this.lineHeight = void 0 !== t ? t : e.lineHeight, o && !this.lineHeight && (this.lineHeight = 13) }

		function f(e, t, n, r) { var i = new h(t),
				o = t.cue,
				a = u(o),
				s = []; if(o.snapToLines) { var l; switch(o.vertical) {
					case "":
						s = ["+y", "-y"], l = "height"; break;
					case "rl":
						s = ["+x", "-x"], l = "width"; break;
					case "lr":
						s = ["-x", "+x"], l = "width" } var c = i.lineHeight,
					p = c * Math.round(a),
					d = n[l] + c,
					f = s[0];
				Math.abs(p) > d && (p = p < 0 ? -1 : 1, p *= Math.ceil(d / c) * c), a < 0 && (p += "" === o.vertical ? n.height : n.width, s = s.reverse()), i.move(f, p) } else { var v = i.lineHeight / n.height * 100; switch(o.lineAlign) {
					case "middle":
						a -= v / 2; break;
					case "end":
						a -= v } switch(o.vertical) {
					case "":
						t.applyStyles({ top: t.formatStyle(a, "%") }); break;
					case "rl":
						t.applyStyles({ left: t.formatStyle(a, "%") }); break;
					case "lr":
						t.applyStyles({ right: t.formatStyle(a, "%") }) } s = ["+y", "-x", "+x", "-y"], i = new h(t) } var m = function(e, t) { for(var i, o = new h(e), a = 1, s = 0; s < t.length; s++) { for(; e.overlapsOppositeAxis(n, t[s]) || e.within(n) && e.overlapsAny(r);) e.move(t[s]); if(e.within(n)) return e; var l = e.intersectPercentage(n);
					a > l && (i = new h(e), a = l), e = new h(o) } return i || o }(i, s);
			t.move(m.toCSSCompatValues(n)) }

		function v() {} var m = Object.create || function() {
			function e() {} return function(t) { if(1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter."); return e.prototype = t, new e } }();
		n.prototype = m(Error.prototype), n.prototype.constructor = n, n.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, i.prototype = { set: function(e, t) { this.get(e) || "" === t || (this.values[e] = t) }, get: function(e, t, n) { return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t }, has: function(e) { return e in this.values }, alt: function(e, t, n) { for(var r = 0; r < n.length; ++r)
					if(t === n[r]) { this.set(e, t); break } }, integer: function(e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)) }, percent: function(e, t) { return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0) } }; var g = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " " },
			y = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" },
			b = { v: "title", lang: "lang" },
			_ = { rt: "ruby" },
			w = [
				[1470, 1470],
				[1472, 1472],
				[1475, 1475],
				[1478, 1478],
				[1488, 1514],
				[1520, 1524],
				[1544, 1544],
				[1547, 1547],
				[1549, 1549],
				[1563, 1563],
				[1566, 1610],
				[1645, 1647],
				[1649, 1749],
				[1765, 1766],
				[1774, 1775],
				[1786, 1805],
				[1807, 1808],
				[1810, 1839],
				[1869, 1957],
				[1969, 1969],
				[1984, 2026],
				[2036, 2037],
				[2042, 2042],
				[2048, 2069],
				[2074, 2074],
				[2084, 2084],
				[2088, 2088],
				[2096, 2110],
				[2112, 2136],
				[2142, 2142],
				[2208, 2208],
				[2210, 2220],
				[8207, 8207],
				[64285, 64285],
				[64287, 64296],
				[64298, 64310],
				[64312, 64316],
				[64318, 64318],
				[64320, 64321],
				[64323, 64324],
				[64326, 64449],
				[64467, 64829],
				[64848, 64911],
				[64914, 64967],
				[65008, 65020],
				[65136, 65140],
				[65142, 65276],
				[67584, 67589],
				[67592, 67592],
				[67594, 67637],
				[67639, 67640],
				[67644, 67644],
				[67647, 67669],
				[67671, 67679],
				[67840, 67867],
				[67872, 67897],
				[67903, 67903],
				[67968, 68023],
				[68030, 68031],
				[68096, 68096],
				[68112, 68115],
				[68117, 68119],
				[68121, 68147],
				[68160, 68167],
				[68176, 68184],
				[68192, 68223],
				[68352, 68405],
				[68416, 68437],
				[68440, 68466],
				[68472, 68479],
				[68608, 68680],
				[126464, 126467],
				[126469, 126495],
				[126497, 126498],
				[126500, 126500],
				[126503, 126503],
				[126505, 126514],
				[126516, 126519],
				[126521, 126521],
				[126523, 126523],
				[126530, 126530],
				[126535, 126535],
				[126537, 126537],
				[126539, 126539],
				[126541, 126543],
				[126545, 126546],
				[126548, 126548],
				[126551, 126551],
				[126553, 126553],
				[126555, 126555],
				[126557, 126557],
				[126559, 126559],
				[126561, 126562],
				[126564, 126564],
				[126567, 126570],
				[126572, 126578],
				[126580, 126583],
				[126585, 126588],
				[126590, 126590],
				[126592, 126601],
				[126603, 126619],
				[126625, 126627],
				[126629, 126633],
				[126635, 126651],
				[1114109, 1114109]
			];
		p.prototype.applyStyles = function(e, t) { t = t || this.div; for(var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]) }, p.prototype.formatStyle = function(e, t) { return 0 === e ? 0 : e + t }, d.prototype = m(p.prototype), d.prototype.constructor = d, h.prototype.move = function(e, t) { switch(t = void 0 !== t ? t : this.lineHeight, e) {
				case "+x":
					this.left += t, this.right += t; break;
				case "-x":
					this.left -= t, this.right -= t; break;
				case "+y":
					this.top += t, this.bottom += t; break;
				case "-y":
					this.top -= t, this.bottom -= t } }, h.prototype.overlaps = function(e) { return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top }, h.prototype.overlapsAny = function(e) { for(var t = 0; t < e.length; t++)
				if(this.overlaps(e[t])) return !0; return !1 }, h.prototype.within = function(e) { return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right }, h.prototype.overlapsOppositeAxis = function(e, t) { switch(t) {
				case "+x":
					return this.left < e.left;
				case "-x":
					return this.right > e.right;
				case "+y":
					return this.top < e.top;
				case "-y":
					return this.bottom > e.bottom } }, h.prototype.intersectPercentage = function(e) { return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width) }, h.prototype.toCSSCompatValues = function(e) { return { top: this.top - e.top, bottom: e.bottom - this.bottom, left: this.left - e.left, right: e.right - this.right, height: this.height, width: this.width } }, h.getSimpleBoxPosition = function(e) { var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
				n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
				r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0; return e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e, { left: e.left, right: e.right, top: e.top || r, height: e.height || t, bottom: e.bottom || r + (e.height || t), width: e.width || n } }, v.StringDecoder = function() { return { decode: function(e) { if(!e) return ""; if("string" != typeof e) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e)) } } }, v.convertCueToDOMTree = function(e, t) { return e && t ? s(e, t) : null };
		v.processCues = function(e, t, n) { if(!e || !t || !n) return null; for(; n.firstChild;) n.removeChild(n.firstChild); var r = e.document.createElement("div"); if(r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", n.appendChild(r), function(e) { for(var t = 0; t < e.length; t++)
						if(e[t].hasBeenReset || !e[t].displayState) return !0; return !1 }(t)) { var i = [],
					o = h.getSimpleBoxPosition(r),
					a = Math.round(.05 * o.height * 100) / 100,
					s = { font: a + "px sans-serif" };! function() { for(var n, a, l = 0; l < t.length; l++) a = t[l], n = new d(e, a, s), r.appendChild(n.div), f(e, n, o, i), a.displayState = n.div, i.push(h.getSimpleBoxPosition(n)) }() } else
				for(var l = 0; l < t.length; l++) r.appendChild(t[l].displayState) }, v.Parser = function(e, t, n) { n || (n = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = [] }, v.Parser.prototype = { reportOrThrowError: function(e) { if(!(e instanceof n)) throw e;
				this.onparsingerror && this.onparsingerror(e) }, parse: function(e) {
				function t() { for(var e = c.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t; var n = e.substr(0, t); return "\r" === e[t] && ++t, "\n" === e[t] && ++t, c.buffer = e.substr(t), n }

				function s(e) { var t = new i; if(o(e, function(e, n) { switch(e) {
								case "id":
									t.set(e, n); break;
								case "width":
									t.percent(e, n); break;
								case "lines":
									t.integer(e, n); break;
								case "regionanchor":
								case "viewportanchor":
									var r = n.split(","); if(2 !== r.length) break; var o = new i; if(o.percent("x", r[0]), o.percent("y", r[1]), !o.has("x") || !o.has("y")) break;
									t.set(e + "X", o.get("x")), t.set(e + "Y", o.get("y")); break;
								case "scroll":
									t.alt(e, n, ["up"]) } }, /=/, /\s/), t.has("id")) { var n = new(c.vttjs.VTTRegion || c.window.VTTRegion);
						n.width = t.get("width", 100), n.lines = t.get("lines", 3), n.regionAnchorX = t.get("regionanchorX", 0), n.regionAnchorY = t.get("regionanchorY", 100), n.viewportAnchorX = t.get("viewportanchorX", 0), n.viewportAnchorY = t.get("viewportanchorY", 100), n.scroll = t.get("scroll", ""), c.onregion && c.onregion(n), c.regionList.push({ id: t.get("id"), region: n }) } }

				function l(e) { var t = new i;
					o(e, function(e, n) { switch(e) {
							case "MPEGT":
								t.integer(e + "S", n); break;
							case "LOCA":
								t.set(e + "L", r(n)) } }, /[^\d]:/, /,/), c.ontimestampmap && c.ontimestampmap({ MPEGTS: t.get("MPEGTS"), LOCAL: t.get("LOCAL") }) } var c = this;
				e && (c.buffer += c.decoder.decode(e, { stream: !0 })); try { var u; if("INITIAL" === c.state) { if(!/\r\n|\n/.test(c.buffer)) return this;
						u = t(); var p = u.match(/^WEBVTT([ \t].*)?$/); if(!p || !p[0]) throw new n(n.Errors.BadSignature);
						c.state = "HEADER" } for(var d = !1; c.buffer;) { if(!/\r\n|\n/.test(c.buffer)) return this; switch(d ? d = !1 : u = t(), c.state) {
							case "HEADER":
								/:/.test(u) ? function(e) { e.match(/X-TIMESTAMP-MAP/) ? o(e, function(e, t) { switch(e) {
											case "X-TIMESTAMP-MAP":
												l(t) } }, /=/) : o(e, function(e, t) { switch(e) {
											case "Region":
												s(t) } }, /:/) }(u) : u || (c.state = "ID"); continue;
							case "NOTE":
								u || (c.state = "ID"); continue;
							case "ID":
								if(/^NOTE($|[ \t])/.test(u)) { c.state = "NOTE"; break } if(!u) continue; if(c.cue = new(c.vttjs.VTTCue || c.window.VTTCue)(0, 0, ""), c.state = "CUE", -1 === u.indexOf("--\x3e")) { c.cue.id = u; continue }
							case "CUE":
								try { a(u, c.cue, c.regionList) } catch(e) { c.reportOrThrowError(e), c.cue = null, c.state = "BADCUE"; continue } c.state = "CUETEXT"; continue;
							case "CUETEXT":
								var h = -1 !== u.indexOf("--\x3e"); if(!u || h && (d = !0)) { c.oncue && c.oncue(c.cue), c.cue = null, c.state = "ID"; continue } c.cue.text && (c.cue.text += "\n"), c.cue.text += u; continue;
							case "BADCUE":
								u || (c.state = "ID"); continue } } } catch(e) { c.reportOrThrowError(e), "CUETEXT" === c.state && c.cue && c.oncue && c.oncue(c.cue), c.cue = null, c.state = "INITIAL" === c.state ? "BADWEBVTT" : "BADCUE" } return this }, flush: function() { var e = this; try { if(e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new n(n.Errors.BadSignature) } catch(t) { e.reportOrThrowError(t) } return e.onflush && e.onflush(), this } }, e.exports = v },
	"dwO+": function(e, t, n) {
		(function(t) { var r, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
				o = n(0); "undefined" != typeof document ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), e.exports = r }).call(t, n("DuR2")) },
	e6n0: function(e, t, n) { var r = n("evD5").f,
			i = n("D2L2"),
			o = n("dSzd")("toStringTag");
		e.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, o) && r(e, o, { configurable: !0, value: t }) } },
	e8AB: function(e, t, n) { var r = n("7KvD"),
			i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
		e.exports = function(e) { return i[e] || (i[e] = {}) } },
	evD5: function(e, t, n) { var r = n("77Pl"),
			i = n("SfB7"),
			o = n("MmMw"),
			a = Object.defineProperty;
		t.f = n("+E39") ? Object.defineProperty : function(e, t, n) { if(r(e), t = o(t, !0), r(n), i) try { return a(e, t, n) } catch(e) {}
			if("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } },
	f1Eh: function(e, t) { e.exports = function(e) { if(!e.webpackPolyfill) { var t = Object.create(e);
				t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), Object.defineProperty(t, "exports", { enumerable: !0 }), t.webpackPolyfill = 1 } return t } },
	fWfb: function(e, t, n) { "use strict"; var r = n("7KvD"),
			i = n("D2L2"),
			o = n("+E39"),
			a = n("kM2E"),
			s = n("880/"),
			l = n("06OY").KEY,
			c = n("S82l"),
			u = n("e8AB"),
			p = n("e6n0"),
			d = n("3Eo+"),
			h = n("dSzd"),
			f = n("Kh4W"),
			v = n("crlp"),
			m = n("Xc4G"),
			g = n("7UMu"),
			y = n("77Pl"),
			b = n("EqjI"),
			_ = n("TcQ7"),
			w = n("MmMw"),
			T = n("X8DO"),
			C = n("Yobk"),
			E = n("Rrel"),
			x = n("LKZe"),
			S = n("evD5"),
			k = n("lktj"),
			O = x.f,
			M = S.f,
			A = E.f,
			P = r.Symbol,
			j = r.JSON,
			L = j && j.stringify,
			I = h("_hidden"),
			$ = h("toPrimitive"),
			D = {}.propertyIsEnumerable,
			N = u("symbol-registry"),
			R = u("symbols"),
			z = u("op-symbols"),
			B = Object.prototype,
			F = "function" == typeof P,
			H = r.QObject,
			V = !H || !H.prototype || !H.prototype.findChild,
			G = o && c(function() { return 7 != C(M({}, "a", { get: function() { return M(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = O(B, t);
				r && delete B[t], M(e, t, n), r && e !== B && M(B, t, r) } : M,
			W = function(e) { var t = R[e] = C(P.prototype); return t._k = e, t },
			U = F && "symbol" == typeof P.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof P },
			X = function(e, t, n) { return e === B && X(z, t, n), y(e), t = w(t, !0), y(n), i(R, t) ? (n.enumerable ? (i(e, I) && e[I][t] && (e[I][t] = !1), n = C(n, { enumerable: T(0, !1) })) : (i(e, I) || M(e, I, T(1, {})), e[I][t] = !0), G(e, t, n)) : M(e, t, n) },
			q = function(e, t) { y(e); for(var n, r = m(t = _(t)), i = 0, o = r.length; o > i;) X(e, n = r[i++], t[n]); return e },
			Y = function(e, t) { return void 0 === t ? C(e) : q(C(e), t) },
			K = function(e) { var t = D.call(this, e = w(e, !0)); return !(this === B && i(R, e) && !i(z, e)) && (!(t || !i(this, e) || !i(R, e) || i(this, I) && this[I][e]) || t) },
			Q = function(e, t) { if(e = _(e), t = w(t, !0), e !== B || !i(R, t) || i(z, t)) { var n = O(e, t); return !n || !i(R, t) || i(e, I) && e[I][t] || (n.enumerable = !0), n } },
			J = function(e) { for(var t, n = A(_(e)), r = [], o = 0; n.length > o;) i(R, t = n[o++]) || t == I || t == l || r.push(t); return r },
			Z = function(e) { for(var t, n = e === B, r = A(n ? z : _(e)), o = [], a = 0; r.length > a;) !i(R, t = r[a++]) || n && !i(B, t) || o.push(R[t]); return o };
		F || (P = function() { if(this instanceof P) throw TypeError("Symbol is not a constructor!"); var e = d(arguments.length > 0 ? arguments[0] : void 0),
				t = function(n) { this === B && t.call(z, n), i(this, I) && i(this[I], e) && (this[I][e] = !1), G(this, e, T(1, n)) }; return o && V && G(B, e, { configurable: !0, set: t }), W(e) }, s(P.prototype, "toString", function() { return this._k }), x.f = Q, S.f = X, n("n0T6").f = E.f = J, n("NpIQ").f = K, n("1kS7").f = Z, o && !n("O4g8") && s(B, "propertyIsEnumerable", K, !0), f.f = function(e) { return W(h(e)) }), a(a.G + a.W + a.F * !F, { Symbol: P }); for(var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) h(ee[te++]); for(var ne = k(h.store), re = 0; ne.length > re;) v(ne[re++]);
		a(a.S + a.F * !F, "Symbol", { for: function(e) { return i(N, e += "") ? N[e] : N[e] = P(e) }, keyFor: function(e) { if(!U(e)) throw TypeError(e + " is not a symbol!"); for(var t in N)
					if(N[t] === e) return t }, useSetter: function() { V = !0 }, useSimple: function() { V = !1 } }), a(a.S + a.F * !F, "Object", { create: Y, defineProperty: X, defineProperties: q, getOwnPropertyDescriptor: Q, getOwnPropertyNames: J, getOwnPropertySymbols: Z }), j && a(a.S + a.F * (!F || c(function() { var e = P(); return "[null]" != L([e]) || "{}" != L({ a: e }) || "{}" != L(Object(e)) })), "JSON", { stringify: function(e) { for(var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); if(n = t = r[1], (b(t) || void 0 !== e) && !U(e)) return g(t) || (t = function(e, t) { if("function" == typeof n && (t = n.call(this, e, t)), !U(t)) return t }), r[1] = t, L.apply(j, r) } }), P.prototype[$] || n("hJx8")(P.prototype, $, P.prototype.valueOf), p(P, "Symbol"), p(Math, "Math", !0), p(r.JSON, "JSON", !0) },
	fkB2: function(e, t, n) { var r = n("UuGF"),
			i = Math.max,
			o = Math.min;
		e.exports = function(e, t) { return e = r(e), e < 0 ? i(e + t, 0) : o(e, t) } },
	fuGk: function(e, t, n) { "use strict";

		function r() { this.handlers = [] } var i = n("cGG2");
		r.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, r.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, r.prototype.forEach = function(e) { i.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = r },
	gsqX: function(e, t, n) {! function(t, n) { e.exports = n() }(0, function() { "use strict";

			function e(e, t) { var n = [],
					r = 0; if(e && !t && e instanceof Ne) return e; if(e)
					if("string" == typeof e) { var i, o, a = e.trim(); if(a.indexOf("<") >= 0 && a.indexOf(">") >= 0) { var s = "div"; for(0 === a.indexOf("<li") && (s = "ul"), 0 === a.indexOf("<tr") && (s = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (s = "tr"), 0 === a.indexOf("<tbody") && (s = "table"), 0 === a.indexOf("<option") && (s = "select"), o = $e.createElement(s), o.innerHTML = a, r = 0; r < o.childNodes.length; r += 1) n.push(o.childNodes[r]) } else
							for(i = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || $e).querySelectorAll(e.trim()) : [$e.getElementById(e.trim().split("#")[1])], r = 0; r < i.length; r += 1) i[r] && n.push(i[r]) } else if(e.nodeType || e === De || e === $e) n.push(e);
				else if(e.length > 0 && e[0].nodeType)
					for(r = 0; r < e.length; r += 1) n.push(e[r]); return new Ne(n) }

			function t(e) { for(var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }

			function n(e) { var t = this; if(void 0 === e) return this; for(var n = e.split(" "), r = 0; r < n.length; r += 1)
					for(var i = 0; i < this.length; i += 1) void 0 !== t[i].classList && t[i].classList.add(n[r]); return this }

			function r(e) { for(var t = this, n = e.split(" "), r = 0; r < n.length; r += 1)
					for(var i = 0; i < this.length; i += 1) void 0 !== t[i].classList && t[i].classList.remove(n[r]); return this }

			function i(e) { return !!this[0] && this[0].classList.contains(e) }

			function o(e) { for(var t = this, n = e.split(" "), r = 0; r < n.length; r += 1)
					for(var i = 0; i < this.length; i += 1) void 0 !== t[i].classList && t[i].classList.toggle(n[r]); return this }

			function a(e, t) { var n = arguments,
					r = this; if(1 !== arguments.length || "string" != typeof e) { for(var i = 0; i < this.length; i += 1)
						if(2 === n.length) r[i].setAttribute(e, t);
						else
							for(var o in e) r[i][o] = e[o], r[i].setAttribute(o, e[o]); return this } if(this[0]) return this[0].getAttribute(e) }

			function s(e) { for(var t = this, n = 0; n < this.length; n += 1) t[n].removeAttribute(e); return this }

			function l(e, t) { var n, r = this; if(void 0 !== t) { for(var i = 0; i < this.length; i += 1) n = r[i], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t; return this } if(n = this[0]) { if(n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e]; var o = n.getAttribute("data-" + e); if(o) return o } else; }

			function c(e) { for(var t = this, n = 0; n < this.length; n += 1) { var r = t[n].style;
					r.webkitTransform = e, r.transform = e } return this }

			function u(e) { var t = this; "string" != typeof e && (e += "ms"); for(var n = 0; n < this.length; n += 1) { var r = t[n].style;
					r.webkitTransitionDuration = e, r.transitionDuration = e } return this }

			function p() {
				function t(t) { var n = t.target; if(n) { var r = t.target.dom7EventData || []; if(r.indexOf(t) < 0 && r.unshift(t), e(n).is(l)) c.apply(n, r);
						else
							for(var i = e(n).parents(), o = 0; o < i.length; o += 1) e(i[o]).is(l) && c.apply(i[o], r) } }

				function n(e) { var t = e && e.target ? e.target.dom7EventData || [] : [];
					t.indexOf(e) < 0 && t.unshift(e), c.apply(this, t) } for(var r, i = this, o = [], a = arguments.length; a--;) o[a] = arguments[a]; var s = o[0],
					l = o[1],
					c = o[2],
					u = o[3]; "function" == typeof o[1] && (r = o, s = r[0], c = r[1], u = r[2], l = void 0), u || (u = !1); for(var p, d = s.split(" "), h = 0; h < this.length; h += 1) { var f = i[h]; if(l)
						for(p = 0; p < d.length; p += 1) { var v = d[p];
							f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[v] || (f.dom7LiveListeners[v] = []), f.dom7LiveListeners[v].push({ listener: c, proxyListener: t }), f.addEventListener(v, t, u) } else
							for(p = 0; p < d.length; p += 1) { var m = d[p];
								f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[m] || (f.dom7Listeners[m] = []), f.dom7Listeners[m].push({ listener: c, proxyListener: n }), f.addEventListener(m, n, u) } } return this }

			function d() { for(var e, t = this, n = [], r = arguments.length; r--;) n[r] = arguments[r]; var i = n[0],
					o = n[1],
					a = n[2],
					s = n[3]; "function" == typeof n[1] && (e = n, i = e[0], a = e[1], s = e[2], o = void 0), s || (s = !1); for(var l = i.split(" "), c = 0; c < l.length; c += 1)
					for(var u = l[c], p = 0; p < this.length; p += 1) { var d = t[p],
							h = void 0; if(!o && d.dom7Listeners ? h = d.dom7Listeners[u] : o && d.dom7LiveListeners && (h = d.dom7LiveListeners[u]), h && h.length)
							for(var f = h.length - 1; f >= 0; f -= 1) { var v = h[f];
								a && v.listener === a ? (d.removeEventListener(u, v.proxyListener, s), h.splice(f, 1)) : a || (d.removeEventListener(u, v.proxyListener, s), h.splice(f, 1)) } }
				return this }

			function h() { for(var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n]; for(var r = t[0].split(" "), i = t[1], o = 0; o < r.length; o += 1)
					for(var a = r[o], s = 0; s < this.length; s += 1) { var l = e[s],
							c = void 0; try { c = new De.CustomEvent(a, { detail: i, bubbles: !0, cancelable: !0 }) } catch(e) { c = $e.createEvent("Event"), c.initEvent(a, !0, !0), c.detail = i } l.dom7EventData = t.filter(function(e, t) { return t > 0 }), l.dispatchEvent(c), l.dom7EventData = [], delete l.dom7EventData }
				return this }

			function f(e) {
				function t(o) { if(o.target === this)
						for(e.call(this, o), n = 0; n < r.length; n += 1) i.off(r[n], t) } var n, r = ["webkitTransitionEnd", "transitionend"],
					i = this; if(e)
					for(n = 0; n < r.length; n += 1) i.on(r[n], t); return this }

			function v(e) { if(this.length > 0) { if(e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }

			function m(e) { if(this.length > 0) { if(e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }

			function g() { if(this.length > 0) { var e = this[0],
						t = e.getBoundingClientRect(),
						n = $e.body,
						r = e.clientTop || n.clientTop || 0,
						i = e.clientLeft || n.clientLeft || 0,
						o = e === De ? De.scrollY : e.scrollTop,
						a = e === De ? De.scrollX : e.scrollLeft; return { top: t.top + o - r, left: t.left + a - i } } return null }

			function y() { return this[0] ? De.getComputedStyle(this[0], null) : {} }

			function b(e, t) { var n, r = this; if(1 === arguments.length) { if("string" != typeof e) { for(n = 0; n < this.length; n += 1)
							for(var i in e) r[n].style[i] = e[i]; return this } if(this[0]) return De.getComputedStyle(this[0], null).getPropertyValue(e) } if(2 === arguments.length && "string" == typeof e) { for(n = 0; n < this.length; n += 1) r[n].style[e] = t; return this } return this }

			function _(e) { var t = this; if(!e) return this; for(var n = 0; n < this.length; n += 1)
					if(!1 === e.call(t[n], n, t[n])) return t; return this }

			function w(e) { var t = this; if(void 0 === e) return this[0] ? this[0].innerHTML : void 0; for(var n = 0; n < this.length; n += 1) t[n].innerHTML = e; return this }

			function T(e) { var t = this; if(void 0 === e) return this[0] ? this[0].textContent.trim() : null; for(var n = 0; n < this.length; n += 1) t[n].textContent = e; return this }

			function C(t) { var n, r, i = this[0]; if(!i || void 0 === t) return !1; if("string" == typeof t) { if(i.matches) return i.matches(t); if(i.webkitMatchesSelector) return i.webkitMatchesSelector(t); if(i.msMatchesSelector) return i.msMatchesSelector(t); for(n = e(t), r = 0; r < n.length; r += 1)
						if(n[r] === i) return !0; return !1 } if(t === $e) return i === $e; if(t === De) return i === De; if(t.nodeType || t instanceof Ne) { for(n = t.nodeType ? [t] : t, r = 0; r < n.length; r += 1)
						if(n[r] === i) return !0; return !1 } return !1 }

			function E() { var e, t = this[0]; if(t) { for(e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } }

			function x(e) { if(void 0 === e) return this; var t, n = this.length; return e > n - 1 ? new Ne([]) : e < 0 ? (t = n + e, new Ne(t < 0 ? [] : [this[t]])) : new Ne([this[e]]) }

			function S() { for(var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n]; for(var r, i = 0; i < t.length; i += 1) { r = t[i]; for(var o = 0; o < this.length; o += 1)
						if("string" == typeof r) { var a = $e.createElement("div"); for(a.innerHTML = r; a.firstChild;) e[o].appendChild(a.firstChild) } else if(r instanceof Ne)
						for(var s = 0; s < r.length; s += 1) e[o].appendChild(r[s]);
					else e[o].appendChild(r) } return this }

			function k(e) { var t, n, r = this; for(t = 0; t < this.length; t += 1)
					if("string" == typeof e) { var i = $e.createElement("div"); for(i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) r[t].insertBefore(i.childNodes[n], r[t].childNodes[0]) } else if(e instanceof Ne)
					for(n = 0; n < e.length; n += 1) r[t].insertBefore(e[n], r[t].childNodes[0]);
				else r[t].insertBefore(e, r[t].childNodes[0]); return this }

			function O(t) { return new Ne(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []) }

			function M(t) { var n = [],
					r = this[0]; if(!r) return new Ne([]); for(; r.nextElementSibling;) { var i = r.nextElementSibling;
					t ? e(i).is(t) && n.push(i) : n.push(i), r = i } return new Ne(n) }

			function A(t) { if(this.length > 0) { var n = this[0]; return new Ne(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : []) } return new Ne([]) }

			function P(t) { var n = [],
					r = this[0]; if(!r) return new Ne([]); for(; r.previousElementSibling;) { var i = r.previousElementSibling;
					t ? e(i).is(t) && n.push(i) : n.push(i), r = i } return new Ne(n) }

			function j(n) { for(var r = this, i = [], o = 0; o < this.length; o += 1) null !== r[o].parentNode && (n ? e(r[o].parentNode).is(n) && i.push(r[o].parentNode) : i.push(r[o].parentNode)); return e(t(i)) }

			function L(n) { for(var r = this, i = [], o = 0; o < this.length; o += 1)
					for(var a = r[o].parentNode; a;) n ? e(a).is(n) && i.push(a) : i.push(a), a = a.parentNode; return e(t(i)) }

			function I(e) { var t = this; return void 0 === e ? new Ne([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }

			function $(e) { for(var t = this, n = [], r = 0; r < this.length; r += 1)
					for(var i = t[r].querySelectorAll(e), o = 0; o < i.length; o += 1) n.push(i[o]); return new Ne(n) }

			function D(n) { for(var r = this, i = [], o = 0; o < this.length; o += 1)
					for(var a = r[o].childNodes, s = 0; s < a.length; s += 1) n ? 1 === a[s].nodeType && e(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]); return new Ne(t(i)) }

			function N() { for(var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]); return this }

			function R() { for(var t = [], n = arguments.length; n--;) t[n] = arguments[n]; var r, i, o = this; for(r = 0; r < t.length; r += 1) { var a = e(t[r]); for(i = 0; i < a.length; i += 1) o[o.length] = a[i], o.length += 1 } return o }

			function z() { var e, t, n = this,
					r = n.$el;
				e = void 0 !== n.params.width ? n.params.width : r[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : r[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), t = t - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), ze.extend(n, { width: e, height: t, size: n.isHorizontal() ? e : t })) }

			function B() { var e = this,
					t = e.params,
					n = e.$wrapperEl,
					r = e.size,
					i = e.rtlTranslate,
					o = e.wrongRTL,
					a = e.virtual && t.virtual.enabled,
					s = a ? e.virtual.slides.length : e.slides.length,
					l = n.children("." + e.params.slideClass),
					c = a ? e.virtual.slides.length : l.length,
					u = [],
					p = [],
					d = [],
					h = t.slidesOffsetBefore; "function" == typeof h && (h = t.slidesOffsetBefore.call(e)); var f = t.slidesOffsetAfter; "function" == typeof f && (f = t.slidesOffsetAfter.call(e)); var v = e.snapGrid.length,
					m = e.snapGrid.length,
					g = t.spaceBetween,
					y = -h,
					b = 0,
					_ = 0; if(void 0 !== r) { "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * r), e.virtualSize = -g, i ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }); var w;
					t.slidesPerColumn > 1 && (w = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn))); for(var T, C = t.slidesPerColumn, E = w / C, x = E - (t.slidesPerColumn * E - c), S = 0; S < c; S += 1) { T = 0; var k = l.eq(S); if(t.slidesPerColumn > 1) { var O = void 0,
								M = void 0,
								A = void 0; "column" === t.slidesPerColumnFill ? (M = Math.floor(S / C), A = S - M * C, (M > x || M === x && A === C - 1) && (A += 1) >= C && (A = 0, M += 1), O = M + A * w / C, k.css({ "-webkit-box-ordinal-group": O, "-moz-box-ordinal-group": O, "-ms-flex-order": O, "-webkit-order": O, order: O })) : (A = Math.floor(S / E), M = S - A * E), k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", A) } if("none" !== k.css("display")) { if("auto" === t.slidesPerView) { var P = De.getComputedStyle(k[0], null),
									j = k[0].style.transform,
									L = k[0].style.webkitTransform;
								j && (k[0].style.transform = "none"), L && (k[0].style.webkitTransform = "none"), T = e.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(P.getPropertyValue("margin-left")) + parseFloat(P.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(P.getPropertyValue("margin-top")) + parseFloat(P.getPropertyValue("margin-bottom")), j && (k[0].style.transform = j), L && (k[0].style.webkitTransform = L), t.roundLengths && (T = Math.floor(T)) } else T = (r - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[S] && (e.isHorizontal() ? l[S].style.width = T + "px" : l[S].style.height = T + "px");
							l[S] && (l[S].swiperSlideSize = T), d.push(T), t.centeredSlides ? (y = y + T / 2 + b / 2 + g, 0 === b && 0 !== S && (y = y - r / 2 - g), 0 === S && (y = y - r / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), _ % t.slidesPerGroup == 0 && u.push(y), p.push(y)) : (t.roundLengths && (y = Math.floor(y)), _ % t.slidesPerGroup == 0 && u.push(y), p.push(y), y = y + T + g), e.virtualSize += T + g, b = T, _ += 1 } } e.virtualSize = Math.max(e.virtualSize, r) + f; var I; if(i && o && ("slide" === t.effect || "coverflow" === t.effect) && n.css({ width: e.virtualSize + t.spaceBetween + "px" }), Be.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) { I = []; for(var $ = 0; $ < u.length; $ += 1) { var D = u[$];
							t.roundLengths && (D = Math.floor(D)), u[$] < e.virtualSize + u[0] && I.push(D) } u = I } if(!t.centeredSlides) { I = []; for(var N = 0; N < u.length; N += 1) { var R = u[N];
							t.roundLengths && (R = Math.floor(R)), u[N] <= e.virtualSize - r && I.push(R) } u = I, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r) } 0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? i ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), ze.extend(e, { slides: l, snapGrid: u, slidesGrid: p, slidesSizesGrid: d }), c !== s && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset() } }

			function F(e) { var t, n = this,
					r = [],
					i = 0; if("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
					for(t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) { var o = n.activeIndex + t; if(o > n.slides.length) break;
						r.push(n.slides.eq(o)[0]) } else r.push(n.slides.eq(n.activeIndex)[0]); for(t = 0; t < r.length; t += 1)
					if(void 0 !== r[t]) { var a = r[t].offsetHeight;
						i = a > i ? a : i }
				i && n.$wrapperEl.css("height", i + "px") }

			function H() { for(var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop }

			function V(e) { void 0 === e && (e = this && this.translate || 0); var t = this,
					n = t.params,
					r = t.slides,
					i = t.rtlTranslate; if(0 !== r.length) { void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset(); var o = -e;
					i && (o = e), r.removeClass(n.slideVisibleClass); for(var a = 0; a < r.length; a += 1) { var s = r[a],
							l = (o + (n.centeredSlides ? t.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + n.spaceBetween); if(n.watchSlidesVisibility) { var c = -(o - s.swiperSlideOffset),
								u = c + t.slidesSizesGrid[a];
							(c >= 0 && c < t.size || u > 0 && u <= t.size || c <= 0 && u >= t.size) && r.eq(a).addClass(n.slideVisibleClass) } s.progress = i ? -l : l } } }

			function G(e) { void 0 === e && (e = this && this.translate || 0); var t = this,
					n = t.params,
					r = t.maxTranslate() - t.minTranslate(),
					i = t.progress,
					o = t.isBeginning,
					a = t.isEnd,
					s = o,
					l = a;
				0 === r ? (i = 0, o = !0, a = !0) : (i = (e - t.minTranslate()) / r, o = i <= 0, a = i >= 1), ze.extend(t, { progress: i, isBeginning: o, isEnd: a }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), o && !s && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (s && !o || l && !a) && t.emit("fromEdge"), t.emit("progress", i) }

			function W() { var e = this,
					t = e.slides,
					n = e.params,
					r = e.$wrapperEl,
					i = e.activeIndex,
					o = e.realIndex,
					a = e.virtual && n.virtual.enabled;
				t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass); var s;
				s = a ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + i + '"]') : t.eq(i), s.addClass(n.slideActiveClass), n.loop && (s.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(n.slideDuplicateActiveClass)); var l = s.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
				n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass)); var c = s.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
				n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass)) }

			function U(e) { var t, n = this,
					r = n.rtlTranslate ? n.translate : -n.translate,
					i = n.slidesGrid,
					o = n.snapGrid,
					a = n.params,
					s = n.activeIndex,
					l = n.realIndex,
					c = n.snapIndex,
					u = e; if(void 0 === u) { for(var p = 0; p < i.length; p += 1) void 0 !== i[p + 1] ? r >= i[p] && r < i[p + 1] - (i[p + 1] - i[p]) / 2 ? u = p : r >= i[p] && r < i[p + 1] && (u = p + 1) : r >= i[p] && (u = p);
					a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0) } if(t = o.indexOf(r) >= 0 ? o.indexOf(r) : Math.floor(u / a.slidesPerGroup), t >= o.length && (t = o.length - 1), u === s) return void(t !== c && (n.snapIndex = t, n.emit("snapIndexChange"))); var d = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
				ze.extend(n, { snapIndex: t, realIndex: d, previousIndex: s, activeIndex: u }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== d && n.emit("realIndexChange"), n.emit("slideChange") }

			function X(t) { var n = this,
					r = n.params,
					i = e(t.target).closest("." + r.slideClass)[0],
					o = !1; if(i)
					for(var a = 0; a < n.slides.length; a += 1) n.slides[a] === i && (o = !0); if(!i || !o) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
				n.clickedSlide = i, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(i).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(i).index(), r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide() }

			function q(e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this,
					n = t.params,
					r = t.rtlTranslate,
					i = t.translate,
					o = t.$wrapperEl; if(n.virtualTranslate) return r ? -i : i; var a = ze.getTranslate(o[0], e); return r && (a = -a), a || 0 }

			function Y(e, t) { var n = this,
					r = n.rtlTranslate,
					i = n.params,
					o = n.$wrapperEl,
					a = n.progress,
					s = 0,
					l = 0;
				n.isHorizontal() ? s = r ? -e : e : l = e, i.roundLengths && (s = Math.floor(s), l = Math.floor(l)), i.virtualTranslate || (Be.transforms3d ? o.transform("translate3d(" + s + "px, " + l + "px, 0px)") : o.transform("translate(" + s + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? s : l; var c, u = n.maxTranslate() - n.minTranslate();
				c = 0 === u ? 0 : (e - n.minTranslate()) / u, c !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t) }

			function K() { return -this.snapGrid[0] }

			function Q() { return -this.snapGrid[this.snapGrid.length - 1] }

			function J(e, t) { var n = this;
				n.$wrapperEl.transition(e), n.emit("setTransition", e, t) }

			function Z(e, t) { void 0 === e && (e = !0); var n = this,
					r = n.activeIndex,
					i = n.params,
					o = n.previousIndex;
				i.autoHeight && n.updateAutoHeight(); var a = t; if(a || (a = r > o ? "next" : r < o ? "prev" : "reset"), n.emit("transitionStart"), e && r !== o) { if("reset" === a) return void n.emit("slideResetTransitionStart");
					n.emit("slideChangeTransitionStart"), "next" === a ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart") } }

			function ee(e, t) { void 0 === e && (e = !0); var n = this,
					r = n.activeIndex,
					i = n.previousIndex;
				n.animating = !1, n.setTransition(0); var o = t; if(o || (o = r > i ? "next" : r < i ? "prev" : "reset"), n.emit("transitionEnd"), e && r !== i) { if("reset" === o) return void n.emit("slideResetTransitionEnd");
					n.emit("slideChangeTransitionEnd"), "next" === o ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd") } }

			function te(e, t, n, r) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0); var i = this,
					o = e;
				o < 0 && (o = 0); var a = i.params,
					s = i.snapGrid,
					l = i.slidesGrid,
					c = i.previousIndex,
					u = i.activeIndex,
					p = i.rtlTranslate; if(i.animating && a.preventIntercationOnTransition) return !1; var d = Math.floor(o / a.slidesPerGroup);
				d >= s.length && (d = s.length - 1), (u || a.initialSlide || 0) === (c || 0) && n && i.emit("beforeSlideChangeStart"); var h = -s[d]; if(i.updateProgress(h), a.normalizeSlideIndex)
					for(var f = 0; f < l.length; f += 1) - Math.floor(100 * h) >= Math.floor(100 * l[f]) && (o = f); if(i.initialized && o !== u) { if(!i.allowSlideNext && h < i.translate && h < i.minTranslate()) return !1; if(!i.allowSlidePrev && h > i.translate && h > i.maxTranslate() && (u || 0) !== o) return !1 } var v; return v = o > u ? "next" : o < u ? "prev" : "reset", p && -h === i.translate || !p && h === i.translate ? (i.updateActiveIndex(o), a.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), "slide" !== a.effect && i.setTranslate(h), "reset" !== v && (i.transitionStart(n, v), i.transitionEnd(n, v)), !1) : (0 !== t && Be.transition ? (i.setTransition(t), i.setTranslate(h), i.updateActiveIndex(o), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, r), i.transitionStart(n, v), i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) { i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd), i.transitionEnd(n, v)) }), i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd))) : (i.setTransition(0), i.setTranslate(h), i.updateActiveIndex(o), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, r), i.transitionStart(n, v), i.transitionEnd(n, v)), !0) }

			function ne(e, t, n, r) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0); var i = this,
					o = e; return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, r) }

			function re(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var r = this,
					i = r.params,
					o = r.animating; return i.loop ? !o && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, r.slideTo(r.activeIndex + i.slidesPerGroup, e, t, n)) : r.slideTo(r.activeIndex + i.slidesPerGroup, e, t, n) }

			function ie(e, t, n) {
				function r(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this,
					o = i.params,
					a = i.animating,
					s = i.snapGrid,
					l = i.slidesGrid,
					c = i.rtlTranslate; if(o.loop) { if(a) return !1;
					i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft } var u, p = c ? i.translate : -i.translate,
					d = r(p),
					h = s.map(function(e) { return r(e) }),
					f = (l.map(function(e) { return r(e) }), s[h.indexOf(d)], s[h.indexOf(d) - 1]); return void 0 !== f && (u = l.indexOf(f)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n) }

			function oe(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var r = this; return r.slideTo(r.activeIndex, e, t, n) }

			function ae(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var r = this,
					i = r.activeIndex,
					o = Math.floor(i / r.params.slidesPerGroup); if(o < r.snapGrid.length - 1) { var a = r.rtlTranslate ? r.translate : -r.translate,
						s = r.snapGrid[o];
					a - s > (r.snapGrid[o + 1] - s) / 2 && (i = r.params.slidesPerGroup) } return r.slideTo(i, e, t, n) }

			function se() { var t, n = this,
					r = n.params,
					i = n.$wrapperEl,
					o = "auto" === r.slidesPerView ? n.slidesPerViewDynamic() : r.slidesPerView,
					a = n.clickedIndex; if(r.loop) { if(n.animating) return;
					t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10), r.centeredSlides ? a < n.loopedSlides - o / 2 || a > n.slides.length - n.loopedSlides + o / 2 ? (n.loopFix(), a = i.children("." + r.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + r.slideDuplicateClass + ")").eq(0).index(), ze.nextTick(function() { n.slideTo(a) })) : n.slideTo(a) : a > n.slides.length - o ? (n.loopFix(), a = i.children("." + r.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + r.slideDuplicateClass + ")").eq(0).index(), ze.nextTick(function() { n.slideTo(a) })) : n.slideTo(a) } else n.slideTo(a) }

			function le() { var t = this,
					n = t.params,
					r = t.$wrapperEl;
				r.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(); var i = r.children("." + n.slideClass); if(n.loopFillGroupWithBlank) { var o = n.slidesPerGroup - i.length % n.slidesPerGroup; if(o !== n.slidesPerGroup) { for(var a = 0; a < o; a += 1) { var s = e($e.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
							r.append(s) } i = r.children("." + n.slideClass) } } "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > i.length && (t.loopedSlides = i.length); var l = [],
					c = [];
				i.each(function(n, r) { var o = e(r);
					n < t.loopedSlides && c.push(r), n < i.length && n >= i.length - t.loopedSlides && l.push(r), o.attr("data-swiper-slide-index", n) }); for(var u = 0; u < c.length; u += 1) r.append(e(c[u].cloneNode(!0)).addClass(n.slideDuplicateClass)); for(var p = l.length - 1; p >= 0; p -= 1) r.prepend(e(l[p].cloneNode(!0)).addClass(n.slideDuplicateClass)) }

			function ce() { var e, t = this,
					n = t.params,
					r = t.activeIndex,
					i = t.slides,
					o = t.loopedSlides,
					a = t.allowSlidePrev,
					s = t.allowSlideNext,
					l = t.snapGrid,
					c = t.rtlTranslate;
				t.allowSlidePrev = !0, t.allowSlideNext = !0; var u = -l[r],
					p = u - t.getTranslate(); if(r < o) { e = i.length - 3 * o + r, e += o;
					t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((c ? -t.translate : t.translate) - p) } else if("auto" === n.slidesPerView && r >= 2 * o || r >= i.length - o) { e = -i.length + r + o, e += o; var d = t.slideTo(e, 0, !1, !0);
					d && 0 !== p && t.setTranslate((c ? -t.translate : t.translate) - p) } t.allowSlidePrev = a, t.allowSlideNext = s }

			function ue() { var e = this,
					t = e.$wrapperEl,
					n = e.params,
					r = e.slides;
				t.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(), r.removeAttr("data-swiper-slide-index") }

			function pe(e) { var t = this; if(!(Be.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) { var n = t.el;
					n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab" } }

			function de() { var e = this;
				Be.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "") }

			function he(e) { var t = this,
					n = t.$wrapperEl,
					r = t.params; if(r.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for(var i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
				else n.append(e);
				r.loop && t.loopCreate(), r.observer && Be.observer || t.update() }

			function fe(e) { var t = this,
					n = t.params,
					r = t.$wrapperEl,
					i = t.activeIndex;
				n.loop && t.loopDestroy(); var o = i + 1; if("object" == typeof e && "length" in e) { for(var a = 0; a < e.length; a += 1) e[a] && r.prepend(e[a]);
					o = i + e.length } else r.prepend(e);
				n.loop && t.loopCreate(), n.observer && Be.observer || t.update(), t.slideTo(o, 0, !1) }

			function ve(e, t) { var n = this,
					r = n.$wrapperEl,
					i = n.params,
					o = n.activeIndex,
					a = o;
				i.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = r.children("." + i.slideClass)); var s = n.slides.length; if(e <= 0) return void n.prependSlide(t); if(e >= s) return void n.appendSlide(t); for(var l = a > e ? a + 1 : a, c = [], u = s - 1; u >= e; u -= 1) { var p = n.slides.eq(u);
					p.remove(), c.unshift(p) } if("object" == typeof t && "length" in t) { for(var d = 0; d < t.length; d += 1) t[d] && r.append(t[d]);
					l = a > e ? a + t.length : a } else r.append(t); for(var h = 0; h < c.length; h += 1) r.append(c[h]);
				i.loop && n.loopCreate(), i.observer && Be.observer || n.update(), i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1) }

			function me(e) { var t = this,
					n = t.params,
					r = t.$wrapperEl,
					i = t.activeIndex,
					o = i;
				n.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = r.children("." + n.slideClass)); var a, s = o; if("object" == typeof e && "length" in e) { for(var l = 0; l < e.length; l += 1) a = e[l], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
					s = Math.max(s, 0) } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
				n.loop && t.loopCreate(), n.observer && Be.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1) }

			function ge() { for(var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
				e.removeSlide(t) }

			function ye(t) { var n = this,
					r = n.touchEventsData,
					i = n.params,
					o = n.touches; if(!n.animating || !i.preventIntercationOnTransition) { var a = t; if(a.originalEvent && (a = a.originalEvent), r.isTouchEvent = "touchstart" === a.type, (r.isTouchEvent || !("which" in a) || 3 !== a.which) && (!r.isTouched || !r.isMoved)) { if(i.noSwiping && e(a.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) return void(n.allowClick = !0); if(!i.swipeHandler || e(a).closest(i.swipeHandler)[0]) { o.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, o.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY; var s = o.currentX,
								l = o.currentY; if(!Ke.ios || Ke.cordova || !i.iOSEdgeSwipeDetection || !(s <= i.iOSEdgeSwipeThreshold || s >= De.screen.width - i.iOSEdgeSwipeThreshold)) { if(ze.extend(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = s, o.startY = l, r.touchStartTime = ze.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, i.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== a.type) { var c = !0;
									e(a.target).is(r.formElements) && (c = !1), $e.activeElement && e($e.activeElement).is(r.formElements) && $e.activeElement !== a.target && $e.activeElement.blur(), c && n.allowTouchMove && a.preventDefault() } n.emit("touchStart", a) } } } } }

			function be(t) { var n = this,
					r = n.touchEventsData,
					i = n.params,
					o = n.touches,
					a = n.rtlTranslate,
					s = t; if(s.originalEvent && (s = s.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s)); if(!r.isTouchEvent || "mousemove" !== s.type) { var l = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
						c = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY; if(s.preventedByNestedSwiper) return o.startX = l, void(o.startY = c); if(!n.allowTouchMove) return n.allowClick = !1, void(r.isTouched && (ze.extend(o, { startX: l, startY: c, currentX: l, currentY: c }), r.touchStartTime = ze.now())); if(r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
						if(n.isVertical()) { if(c < o.startY && n.translate <= n.maxTranslate() || c > o.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1) } else if(l < o.startX && n.translate <= n.maxTranslate() || l > o.startX && n.translate >= n.minTranslate()) return; if(r.isTouchEvent && $e.activeElement && s.target === $e.activeElement && e(s.target).is(r.formElements)) return r.isMoved = !0, void(n.allowClick = !1); if(r.allowTouchCallbacks && n.emit("touchMove", s), !(s.targetTouches && s.targetTouches.length > 1)) { o.currentX = l, o.currentY = c; var u = o.currentX - o.startX,
							p = o.currentY - o.startY; if(void 0 === r.isScrolling) { var d;
							n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : u * u + p * p >= 25 && (d = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, r.isScrolling = n.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle) } if(r.isScrolling && n.emit("touchMoveOpposite", s), "undefined" == typeof startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1); if(r.startMoving) { n.allowClick = !1, s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation(), r.isMoved || (i.loop && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", s)), n.emit("sliderMove", s), r.isMoved = !0; var h = n.isHorizontal() ? u : p;
							o.diff = h, h *= i.touchRatio, a && (h = -h), n.swipeDirection = h > 0 ? "prev" : "next", r.currentTranslate = h + r.startTranslate; var f = !0,
								v = i.resistanceRatio; if(i.touchReleaseOnEdges && (v = 0), h > 0 && r.currentTranslate > n.minTranslate() ? (f = !1, i.resistance && (r.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + r.startTranslate + h, v))) : h < 0 && r.currentTranslate < n.maxTranslate() && (f = !1, i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - r.startTranslate - h, v))), f && (s.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), i.threshold > 0) { if(!(Math.abs(h) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate); if(!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void(o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY) } i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), i.freeMode && (0 === r.velocities.length && r.velocities.push({ position: o[n.isHorizontal() ? "startX" : "startY"], time: r.touchStartTime }), r.velocities.push({ position: o[n.isHorizontal() ? "currentX" : "currentY"], time: ze.now() })), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate)) } } } }

			function _e(e) { var t = this,
					n = t.touchEventsData,
					r = t.params,
					i = t.touches,
					o = t.rtlTranslate,
					a = t.$wrapperEl,
					s = t.slidesGrid,
					l = t.snapGrid,
					c = e; if(c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
				r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var u = ze.now(),
					p = u - n.touchStartTime; if(t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), p < 300 && u - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = ze.nextTick(function() { t && !t.destroyed && t.emit("click", c) }, 300)), p < 300 && u - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", c))), n.lastClickTime = ze.now(), ze.nextTick(function() { t.destroyed || (t.allowClick = !0) }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
				n.isTouched = !1, n.isMoved = !1, n.startMoving = !1; var d; if(d = r.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, r.freeMode) { if(d < -t.minTranslate()) return void t.slideTo(t.activeIndex); if(d > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if(r.freeModeMomentum) { if(n.velocities.length > 1) { var h = n.velocities.pop(),
								f = n.velocities.pop(),
								v = h.position - f.position,
								m = h.time - f.time;
							t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || ze.now() - h.time > 300) && (t.velocity = 0) } else t.velocity = 0;
						t.velocity *= r.freeModeMomentumVelocityRatio, n.velocities.length = 0; var g = 1e3 * r.freeModeMomentumRatio,
							y = t.velocity * g,
							b = t.translate + y;
						o && (b = -b); var _, w, T = !1,
							C = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio; if(b < t.maxTranslate()) r.freeModeMomentumBounce ? (b + t.maxTranslate() < -C && (b = t.maxTranslate() - C), _ = t.maxTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), r.loop && r.centeredSlides && (w = !0);
						else if(b > t.minTranslate()) r.freeModeMomentumBounce ? (b - t.minTranslate() > C && (b = t.minTranslate() + C), _ = t.minTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), r.loop && r.centeredSlides && (w = !0);
						else if(r.freeModeSticky) { for(var E, x = 0; x < l.length; x += 1)
								if(l[x] > -b) { E = x; break }
							b = Math.abs(l[E] - b) < Math.abs(l[E - 1] - b) || "next" === t.swipeDirection ? l[E] : l[E - 1], b = -b } if(w && t.once("transitionEnd", function() { t.loopFix() }), 0 !== t.velocity) g = o ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
						else if(r.freeModeSticky) return void t.slideToClosest();
						r.freeModeMomentumBounce && T ? (t.updateProgress(_), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function() { t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(r.speed), t.setTranslate(_), a.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses() } else if(r.freeModeSticky) return void t.slideToClosest(); return void((!r.freeModeMomentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())) } for(var S = 0, k = t.slidesSizesGrid[0], O = 0; O < s.length; O += r.slidesPerGroup) void 0 !== s[O + r.slidesPerGroup] ? d >= s[O] && d < s[O + r.slidesPerGroup] && (S = O, k = s[O + r.slidesPerGroup] - s[O]) : d >= s[O] && (S = O, k = s[s.length - 1] - s[s.length - 2]); var M = (d - s[S]) / k; if(p > r.longSwipesMs) { if(!r.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (M >= r.longSwipesRatio ? t.slideTo(S + r.slidesPerGroup) : t.slideTo(S)), "prev" === t.swipeDirection && (M > 1 - r.longSwipesRatio ? t.slideTo(S + r.slidesPerGroup) : t.slideTo(S)) } else { if(!r.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(S + r.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(S) } }

			function we() { var e = this,
					t = e.params,
					n = e.el; if(!n || 0 !== n.offsetWidth) { t.breakpoints && e.setBreakpoint(); var r = e.allowSlideNext,
						i = e.allowSlidePrev,
						o = e.snapGrid; if(e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) { var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
						e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight() } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
					e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow() } }

			function Te(e) { var t = this;
				t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }

			function Ce() { var e = this,
					t = e.params,
					n = e.touchEvents,
					r = e.el,
					i = e.wrapperEl;
				e.onTouchStart = ye.bind(e), e.onTouchMove = be.bind(e), e.onTouchEnd = _e.bind(e), e.onClick = Te.bind(e); var o = "container" === t.touchEventsTarget ? r : i,
					a = !!t.nested; if(Be.touch || !Be.pointerEvents && !Be.prefixedPointerEvents) { if(Be.touch) { var s = !("touchstart" !== n.start || !Be.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
						o.addEventListener(n.start, e.onTouchStart, s), o.addEventListener(n.move, e.onTouchMove, Be.passiveListener ? { passive: !1, capture: a } : a), o.addEventListener(n.end, e.onTouchEnd, s) }(t.simulateTouch && !Ke.ios && !Ke.android || t.simulateTouch && !Be.touch && Ke.ios) && (o.addEventListener("mousedown", e.onTouchStart, !1), $e.addEventListener("mousemove", e.onTouchMove, a), $e.addEventListener("mouseup", e.onTouchEnd, !1)) } else o.addEventListener(n.start, e.onTouchStart, !1), $e.addEventListener(n.move, e.onTouchMove, a), $e.addEventListener(n.end, e.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && o.addEventListener("click", e.onClick, !0), e.on(Ke.ios || Ke.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we, !0) }

			function Ee() { var e = this,
					t = e.params,
					n = e.touchEvents,
					r = e.el,
					i = e.wrapperEl,
					o = "container" === t.touchEventsTarget ? r : i,
					a = !!t.nested; if(Be.touch || !Be.pointerEvents && !Be.prefixedPointerEvents) { if(Be.touch) { var s = !("onTouchStart" !== n.start || !Be.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
						o.removeEventListener(n.start, e.onTouchStart, s), o.removeEventListener(n.move, e.onTouchMove, a), o.removeEventListener(n.end, e.onTouchEnd, s) }(t.simulateTouch && !Ke.ios && !Ke.android || t.simulateTouch && !Be.touch && Ke.ios) && (o.removeEventListener("mousedown", e.onTouchStart, !1), $e.removeEventListener("mousemove", e.onTouchMove, a), $e.removeEventListener("mouseup", e.onTouchEnd, !1)) } else o.removeEventListener(n.start, e.onTouchStart, !1), $e.removeEventListener(n.move, e.onTouchMove, a), $e.removeEventListener(n.end, e.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && o.removeEventListener("click", e.onClick, !0), e.off(Ke.ios || Ke.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we) }

			function xe() { var e = this,
					t = e.activeIndex,
					n = e.initialized,
					r = e.loopedSlides;
				void 0 === r && (r = 0); var i = e.params,
					o = i.breakpoints; if(o && (!o || 0 !== Object.keys(o).length)) { var a = e.getBreakpoint(o); if(a && e.currentBreakpoint !== a) { var s = a in o ? o[a] : e.originalParams,
							l = i.loop && s.slidesPerView !== i.slidesPerView;
						ze.extend(e.params, s), ze.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = a, l && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", s) } } }

			function Se(e) { if(e) { var t = !1,
						n = [];
					Object.keys(e).forEach(function(e) { n.push(e) }), n.sort(function(e, t) { return parseInt(e, 10) - parseInt(t, 10) }); for(var r = 0; r < n.length; r += 1) { var i = n[r];
						i >= De.innerWidth && !t && (t = i) } return t || "max" } }

			function ke() { var e = this,
					t = e.classNames,
					n = e.params,
					r = e.rtl,
					i = e.$el,
					o = [];
				o.push(n.direction), n.freeMode && o.push("free-mode"), Be.flexbox || o.push("no-flexbox"), n.autoHeight && o.push("autoheight"), r && o.push("rtl"), n.slidesPerColumn > 1 && o.push("multirow"), Ke.android && o.push("android"), Ke.ios && o.push("ios"), Ze.isIE && (Be.pointerEvents || Be.prefixedPointerEvents) && o.push("wp8-" + n.direction), o.forEach(function(e) { t.push(n.containerModifierClass + e) }), i.addClass(t.join(" ")) }

			function Oe() { var e = this,
					t = e.$el,
					n = e.classNames;
				t.removeClass(n.join(" ")) }

			function Me(e, t, n, r, i, o) {
				function a() { o && o() } var s;
				e.complete && i ? a() : t ? (s = new De.Image, s.onload = a, s.onerror = a, r && (s.sizes = r), n && (s.srcset = n), t && (s.src = t)) : a() }

			function Ae() {
				function e() { void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady"))) } var t = this;
				t.imagesToLoad = t.$el.find("img"); for(var n = 0; n < t.imagesToLoad.length; n += 1) { var r = t.imagesToLoad[n];
					t.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, e) } }

			function Pe() { var e = this,
					t = e.isLocked;
				e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update()) }

			function je() { var e = "onwheel" in $e; if(!e) { var t = $e.createElement("div");
					t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel } return !e && $e.implementation && $e.implementation.hasFeature && !0 !== $e.implementation.hasFeature("", "") && (e = $e.implementation.hasFeature("Events.wheel", "3.0")), e } var Le;
			Le = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document; var Ie, $e = Le;
			Ie = "undefined" == typeof window ? { document: $e, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window; var De = Ie,
				Ne = function(e) { for(var t = this, n = 0; n < e.length; n += 1) t[n] = e[n]; return t.length = e.length, this };
			e.fn = Ne.prototype, e.Class = Ne, e.Dom7 = Ne; var Re = { addClass: n, removeClass: r, hasClass: i, toggleClass: o, attr: a, removeAttr: s, data: l, transform: c, transition: u, on: p, off: d, trigger: h, transitionEnd: f, outerWidth: v, outerHeight: m, offset: g, css: b, each: _, html: w, text: T, is: C, index: E, eq: x, append: S, prepend: k, next: O, nextAll: M, prev: A, prevAll: P, parent: j, parents: L, closest: I, find: $, children: D, remove: N, add: R, styles: y };
			Object.keys(Re).forEach(function(t) { e.fn[t] = Re[t] }); var ze = { deleteProps: function(e) { var t = e;
						Object.keys(t).forEach(function(e) { try { t[e] = null } catch(e) {} try { delete t[e] } catch(e) {} }) }, nextTick: function(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }, now: function() { return Date.now() }, getTranslate: function(e, t) { void 0 === t && (t = "x"); var n, r, i, o = De.getComputedStyle(e, null); return De.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), i = new De.WebKitCSSMatrix("none" === r ? "" : r)) : (i = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = i.toString().split(",")), "x" === t && (r = De.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = De.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0 }, parseUrlQuery: function(e) { var t, n, r, i, o = {},
							a = e || De.location.href; if("string" == typeof a && a.length)
							for(a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "", n = a.split("&").filter(function(e) { return "" !== e }), i = n.length, t = 0; t < i; t += 1) r = n[t].replace(/#\S+/g, "").split("="), o[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || ""; return o }, isObject: function(e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object }, extend: function() { for(var e = [], t = arguments.length; t--;) e[t] = arguments[t]; for(var n = Object(e[0]), r = 1; r < e.length; r += 1) { var i = e[r]; if(void 0 !== i && null !== i)
								for(var o = Object.keys(Object(i)), a = 0, s = o.length; a < s; a += 1) { var l = o[a],
										c = Object.getOwnPropertyDescriptor(i, l);
									void 0 !== c && c.enumerable && (ze.isObject(n[l]) && ze.isObject(i[l]) ? ze.extend(n[l], i[l]) : !ze.isObject(n[l]) && ze.isObject(i[l]) ? (n[l] = {}, ze.extend(n[l], i[l])) : n[l] = i[l]) } } return n } },
				Be = function() { var e = $e.createElement("div"); return { touch: De.Modernizr && !0 === De.Modernizr.touch || function() { return !!("ontouchstart" in De || De.DocumentTouch && $e instanceof De.DocumentTouch) }(), pointerEvents: !(!De.navigator.pointerEnabled && !De.PointerEvent), prefixedPointerEvents: !!De.navigator.msPointerEnabled, transition: function() { var t = e.style; return "transition" in t || "webkitTransition" in t || "MozTransition" in t }(), transforms3d: De.Modernizr && !0 === De.Modernizr.csstransforms3d || function() { var t = e.style; return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t }(), flexbox: function() { for(var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), r = 0; r < n.length; r += 1)
								if(n[r] in t) return !0; return !1 }(), observer: function() { return "MutationObserver" in De || "WebkitMutationObserver" in De }(), passiveListener: function() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
								De.addEventListener("testPassiveListener", null, t) } catch(e) {} return e }(), gestures: function() { return "ongesturestart" in De }() } }(),
				Fe = function(e) { void 0 === e && (e = {}); var t = this;
					t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) { t.on(e, t.params.on[e]) }) },
				He = { components: { configurable: !0 } };
			Fe.prototype.on = function(e, t, n) { var r = this; if("function" != typeof t) return r; var i = n ? "unshift" : "push"; return e.split(" ").forEach(function(e) { r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t) }), r }, Fe.prototype.once = function(e, t, n) {
				function r() { for(var n = [], o = arguments.length; o--;) n[o] = arguments[o];
					t.apply(i, n), i.off(e, r) } var i = this; return "function" != typeof t ? i : i.on(e, r, n) }, Fe.prototype.off = function(e, t) { var n = this; return n.eventsListeners ? (e.split(" ").forEach(function(e) { void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(r, i) { r === t && n.eventsListeners[e].splice(i, 1) }) }), n) : n }, Fe.prototype.emit = function() { for(var e = [], t = arguments.length; t--;) e[t] = arguments[t]; var n = this; if(!n.eventsListeners) return n; var r, i, o; return "string" == typeof e[0] || Array.isArray(e[0]) ? (r = e[0], i = e.slice(1, e.length), o = n) : (r = e[0].events, i = e[0].data, o = e[0].context || n), (Array.isArray(r) ? r : r.split(" ")).forEach(function(e) { if(n.eventsListeners && n.eventsListeners[e]) { var t = [];
						n.eventsListeners[e].forEach(function(e) { t.push(e) }), t.forEach(function(e) { e.apply(o, i) }) } }), n }, Fe.prototype.useModulesParams = function(e) { var t = this;
				t.modules && Object.keys(t.modules).forEach(function(n) { var r = t.modules[n];
					r.params && ze.extend(e, r.params) }) }, Fe.prototype.useModules = function(e) { void 0 === e && (e = {}); var t = this;
				t.modules && Object.keys(t.modules).forEach(function(n) { var r = t.modules[n],
						i = e[n] || {};
					r.instance && Object.keys(r.instance).forEach(function(e) { var n = r.instance[e];
						t[e] = "function" == typeof n ? n.bind(t) : n }), r.on && t.on && Object.keys(r.on).forEach(function(e) { t.on(e, r.on[e]) }), r.create && r.create.bind(t)(i) }) }, He.components.set = function(e) { var t = this;
				t.use && t.use(e) }, Fe.installModule = function(e) { for(var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1]; var r = this;
				r.prototype.modules || (r.prototype.modules = {}); var i = e.name || Object.keys(r.prototype.modules).length + "_" + ze.now(); return r.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(function(t) { r.prototype[t] = e.proto[t] }), e.static && Object.keys(e.static).forEach(function(t) { r[t] = e.static[t] }), e.install && e.install.apply(r, t), r }, Fe.use = function(e) { for(var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1]; var r = this; return Array.isArray(e) ? (e.forEach(function(e) { return r.installModule(e) }), r) : r.installModule.apply(r, [e].concat(t)) }, Object.defineProperties(Fe, He); var Ve = { updateSize: z, updateSlides: B, updateAutoHeight: F, updateSlidesOffset: H, updateSlidesProgress: V, updateProgress: G, updateSlidesClasses: W, updateActiveIndex: U, updateClickedSlide: X },
				Ge = { getTranslate: q, setTranslate: Y, minTranslate: K, maxTranslate: Q },
				We = { setTransition: J, transitionStart: Z, transitionEnd: ee },
				Ue = { slideTo: te, slideToLoop: ne, slideNext: re, slidePrev: ie, slideReset: oe, slideToClosest: ae, slideToClickedSlide: se },
				Xe = { loopCreate: le, loopFix: ce, loopDestroy: ue },
				qe = { setGrabCursor: pe, unsetGrabCursor: de },
				Ye = { appendSlide: he, prependSlide: fe, addSlide: ve, removeSlide: me, removeAllSlides: ge },
				Ke = function() { var e = De.navigator.userAgent,
						t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: De.cordova || De.phonegap, phonegap: De.cordova || De.phonegap },
						n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
						r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
						i = e.match(/(iPad).*OS\s([\d_]+)/),
						o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
						a = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/); if(n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), r && !n && (t.os = "android", t.osVersion = r[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (i || a || o) && (t.os = "ios", t.ios = !0), a && !o && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), i && (t.osVersion = i[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || i || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) { var s = t.osVersion.split("."),
							l = $e.querySelector('meta[name="viewport"]');
						t.minimalUi = !t.webView && (o || a) && (1 * s[0] == 7 ? 1 * s[1] >= 1 : 1 * s[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0 } return t.pixelRatio = De.devicePixelRatio || 1, t }(),
				Qe = { attachEvents: Ce, detachEvents: Ee },
				Je = { setBreakpoint: xe, getBreakpoint: Se },
				Ze = function() { return { isIE: !!De.navigator.userAgent.match(/Trident/g) || !!De.navigator.userAgent.match(/MSIE/g), isSafari: function() { var e = De.navigator.userAgent.toLowerCase(); return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(De.navigator.userAgent) } }(),
				et = { addClasses: ke, removeClasses: Oe },
				tt = { loadImage: Me, preloadImages: Ae },
				nt = { checkOverflow: Pe },
				rt = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
				it = { update: Ve, translate: Ge, transition: We, slide: Ue, loop: Xe, grabCursor: qe, manipulation: Ye, events: Qe, breakpoints: Je, checkOverflow: nt, classes: et, images: tt },
				ot = {},
				at = function(t) {
					function n() { for(var r, i = [], o = arguments.length; o--;) i[o] = arguments[o]; var a, s;
						1 === i.length && i[0].constructor && i[0].constructor === Object ? s = i[0] : (r = i, a = r[0], s = r[1]), s || (s = {}), s = ze.extend({}, s), a && !s.el && (s.el = a), t.call(this, s), Object.keys(it).forEach(function(e) { Object.keys(it[e]).forEach(function(t) { n.prototype[t] || (n.prototype[t] = it[e][t]) }) }); var l = this;
						void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) { var t = l.modules[e]; if(t.params) { var n = Object.keys(t.params)[0],
									r = t.params[n]; if("object" != typeof r) return; if(!(n in s && "enabled" in r)) return;!0 === s[n] && (s[n] = { enabled: !0 }), "object" != typeof s[n] || "enabled" in s[n] || (s[n].enabled = !0), s[n] || (s[n] = { enabled: !1 }) } }); var c = ze.extend({}, rt);
						l.useModulesParams(c), l.params = ze.extend({}, c, ot, s), l.originalParams = ze.extend({}, l.params), l.passedParams = ze.extend({}, s), l.$ = e; var u = e(l.params.el); if(a = u[0]) { if(u.length > 1) { var p = []; return u.each(function(e, t) { var r = ze.extend({}, s, { el: t });
									p.push(new n(r)) }), p } a.swiper = l, u.data("swiper", l); var d = u.children("." + l.params.wrapperClass); return ze.extend(l, { $el: u, el: a, $wrapperEl: d, wrapperEl: d[0], classNames: [], slides: e(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === l.params.direction }, isVertical: function() { return "vertical" === l.params.direction }, rtl: "rtl" === a.dir.toLowerCase() || "rtl" === u.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === u.css("direction")), wrongRTL: "-webkit-box" === d.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: function() { var e = ["touchstart", "touchmove", "touchend"],
										t = ["mousedown", "mousemove", "mouseup"]; return Be.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : Be.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: e[0], move: e[1], end: e[2] }, l.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }, Be.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: ze.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), l } } t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n; var r = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } }; return n.prototype.slidesPerViewDynamic = function() { var e = this,
							t = e.params,
							n = e.slides,
							r = e.slidesGrid,
							i = e.size,
							o = e.activeIndex,
							a = 1; if(t.centeredSlides) { for(var s, l = n[o].swiperSlideSize, c = o + 1; c < n.length; c += 1) n[c] && !s && (l += n[c].swiperSlideSize, a += 1, l > i && (s = !0)); for(var u = o - 1; u >= 0; u -= 1) n[u] && !s && (l += n[u].swiperSlideSize, a += 1, l > i && (s = !0)) } else
							for(var p = o + 1; p < n.length; p += 1) r[p] - r[o] < i && (a += 1); return a }, n.prototype.update = function() {
						function e() { var e = t.rtlTranslate ? -1 * t.translate : t.translate,
								n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
							t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses() } var t = this; if(t && !t.destroyed) { var n = t.snapGrid,
								r = t.params;
							r.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
							t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update") } }, n.prototype.init = function() { var e = this;
						e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init")) }, n.prototype.destroy = function(e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var n = this,
							r = n.params,
							i = n.$el,
							o = n.$wrapperEl,
							a = n.slides; return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) { n.off(e) }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), ze.deleteProps(n)), n.destroyed = !0, null) }, n.extendDefaults = function(e) { ze.extend(ot, e) }, r.extendedDefaults.get = function() { return ot }, r.defaults.get = function() { return rt }, r.Class.get = function() { return t }, r.$.get = function() { return e }, Object.defineProperties(n, r), n }(Fe),
				st = { name: "device", proto: { device: Ke }, static: { device: Ke } },
				lt = { name: "support", proto: { support: Be }, static: { support: Be } },
				ct = { name: "browser", proto: { browser: Ze }, static: { browser: Ze } },
				ut = { name: "resize", create: function() { var e = this;
						ze.extend(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function() { var e = this;
							De.addEventListener("resize", e.resize.resizeHandler), De.addEventListener("orientationchange", e.resize.orientationChangeHandler) }, destroy: function() { var e = this;
							De.removeEventListener("resize", e.resize.resizeHandler), De.removeEventListener("orientationchange", e.resize.orientationChangeHandler) } } },
				pt = { func: De.MutationObserver || De.WebkitMutationObserver, attach: function(e, t) { void 0 === t && (t = {}); var n = this,
							r = pt.func,
							i = new r(function(e) { e.forEach(function(e) { n.emit("observerUpdate", e) }) });
						i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(i) }, init: function() { var e = this; if(Be.observer && e.params.observer) { if(e.params.observeParents)
								for(var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
							e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 }) } }, destroy: function() { var e = this;
						e.observer.observers.forEach(function(e) { e.disconnect() }), e.observer.observers = [] } },
				dt = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { var e = this;
						ze.extend(e, { observer: { init: pt.init.bind(e), attach: pt.attach.bind(e), destroy: pt.destroy.bind(e), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
				ht = { update: function(e) {
						function t() { n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load() } var n = this,
							r = n.params,
							i = r.slidesPerView,
							o = r.slidesPerGroup,
							a = r.centeredSlides,
							s = n.virtual,
							l = s.from,
							c = s.to,
							u = s.slides,
							p = s.slidesGrid,
							d = s.renderSlide,
							h = s.offset;
						n.updateActiveIndex(); var f, v = n.activeIndex || 0;
						f = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top"; var m, g;
						a ? (m = Math.floor(i / 2) + o, g = Math.floor(i / 2) + o) : (m = i + (o - 1), g = o); var y = Math.max((v || 0) - g, 0),
							b = Math.min((v || 0) + m, u.length - 1),
							_ = (n.slidesGrid[y] || 0) - (n.slidesGrid[0] || 0); if(ze.extend(n.virtual, { from: y, to: b, offset: _, slidesGrid: n.slidesGrid }), l === y && c === b && !e) return n.slidesGrid !== p && _ !== h && n.slides.css(f, _ + "px"), void n.updateProgress(); if(n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, { offset: _, from: y, to: b, slides: function() { for(var e = [], t = y; t <= b; t += 1) e.push(u[t]); return e }() }), void t(); var w = [],
							T = []; if(e) n.$wrapperEl.find("." + n.params.slideClass).remove();
						else
							for(var C = l; C <= c; C += 1)(C < y || C > b) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove(); for(var E = 0; E < u.length; E += 1) E >= y && E <= b && (void 0 === c || e ? T.push(E) : (E > c && T.push(E), E < l && w.push(E)));
						T.forEach(function(e) { n.$wrapperEl.append(d(u[e], e)) }), w.sort(function(e, t) { return e < t }).forEach(function(e) { n.$wrapperEl.prepend(d(u[e], e)) }), n.$wrapperEl.children(".swiper-slide").css(f, _ + "px"), t() }, renderSlide: function(t, n) { var r = this,
							i = r.params.virtual; if(i.cache && r.virtual.cache[n]) return r.virtual.cache[n]; var o = e(i.renderSlide ? i.renderSlide.call(r, t, n) : '<div class="' + r.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>"); return o.attr("data-swiper-slide-index") || o.attr("data-swiper-slide-index", n), i.cache && (r.virtual.cache[n] = o), o }, appendSlide: function(e) { var t = this;
						t.virtual.slides.push(e), t.virtual.update(!0) }, prependSlide: function(e) { var t = this; if(t.virtual.slides.unshift(e), t.params.virtual.cache) { var n = t.virtual.cache,
								r = {};
							Object.keys(n).forEach(function(e) { r[e + 1] = n[e] }), t.virtual.cache = r } t.virtual.update(!0), t.slideNext(0) } },
				ft = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function() { var e = this;
						ze.extend(e, { virtual: { update: ht.update.bind(e), appendSlide: ht.appendSlide.bind(e), prependSlide: ht.prependSlide.bind(e), renderSlide: ht.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } }) }, on: { beforeInit: function() { var e = this; if(e.params.virtual.enabled) { e.classNames.push(e.params.containerModifierClass + "virtual"); var t = { watchSlidesProgress: !0 };
								ze.extend(e.params, t), ze.extend(e.originalParams, t), e.virtual.update() } }, setTranslate: function() { var e = this;
							e.params.virtual.enabled && e.virtual.update() } } },
				vt = { handle: function(e) { var t = this,
							n = t.rtlTranslate,
							r = e;
						r.originalEvent && (r = r.originalEvent); var i = r.keyCode || r.charCode; if(!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1; if(!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1; if(!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || $e.activeElement && $e.activeElement.nodeName && ("input" === $e.activeElement.nodeName.toLowerCase() || "textarea" === $e.activeElement.nodeName.toLowerCase()))) { if(t.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) { var o = !1; if(t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return; var a = De.innerWidth,
									s = De.innerHeight,
									l = t.$el.offset();
								n && (l.left -= t.$el[0].scrollLeft); for(var c = [
										[l.left, l.top],
										[l.left + t.width, l.top],
										[l.left, l.top + t.height],
										[l.left + t.width, l.top + t.height]
									], u = 0; u < c.length; u += 1) { var p = c[u];
									p[0] >= 0 && p[0] <= a && p[1] >= 0 && p[1] <= s && (o = !0) } if(!o) return } t.isHorizontal() ? (37 !== i && 39 !== i || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (39 === i && !n || 37 === i && n) && t.slideNext(), (37 === i && !n || 39 === i && n) && t.slidePrev()) : (38 !== i && 40 !== i || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i) } }, enable: function() { var t = this;
						t.keyboard.enabled || (e($e).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0) }, disable: function() { var t = this;
						t.keyboard.enabled && (e($e).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1) } },
				mt = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { var e = this;
						ze.extend(e, { keyboard: { enabled: !1, enable: vt.enable.bind(e), disable: vt.disable.bind(e), handle: vt.handle.bind(e) } }) }, on: { init: function() { var e = this;
							e.params.keyboard.enabled && e.keyboard.enable() }, destroy: function() { var e = this;
							e.keyboard.enabled && e.keyboard.disable() } } },
				gt = { lastScrollTime: ze.now(), event: function() { return De.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : je() ? "wheel" : "mousewheel" }(), normalize: function(e) { var t = 0,
							n = 0,
							r = 0,
							i = 0; return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, i = 10 * n, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: r, pixelY: i } }, handleMouseEnter: function() { this.mouseEntered = !0 }, handleMouseLeave: function() { this.mouseEntered = !1 }, handle: function(e) { var t = e,
							n = this,
							r = n.params.mousewheel; if(!n.mouseEntered && !r.releaseOnEdges) return !0;
						t.originalEvent && (t = t.originalEvent); var i = 0,
							o = n.rtlTranslate ? -1 : 1,
							a = gt.normalize(t); if(r.forceToAxis)
							if(n.isHorizontal()) { if(!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
								i = a.pixelX * o } else { if(!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
								i = a.pixelY } else i = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * o : -a.pixelY; if(0 === i) return !0; if(r.invert && (i = -i), n.params.freeMode) { n.params.loop && n.loopFix(); var s = n.getTranslate() + i * r.sensitivity,
								l = n.isBeginning,
								c = n.isEnd; if(s >= n.minTranslate() && (s = n.minTranslate()), s <= n.maxTranslate() && (s = n.maxTranslate()), n.setTransition(0), n.setTranslate(s), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = ze.nextTick(function() { n.slideToClosest() }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), s === n.minTranslate() || s === n.maxTranslate()) return !0 } else { if(ze.now() - n.mousewheel.lastScrollTime > 60)
								if(i < 0)
									if(n.isEnd && !n.params.loop || n.animating) { if(r.releaseOnEdges) return !0 } else n.slideNext(), n.emit("scroll", t);
							else if(n.isBeginning && !n.params.loop || n.animating) { if(r.releaseOnEdges) return !0 } else n.slidePrev(), n.emit("scroll", t);
							n.mousewheel.lastScrollTime = (new De.Date).getTime() } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 }, enable: function() { var t = this; if(!gt.event) return !1; if(t.mousewheel.enabled) return !1; var n = t.$el; return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.on("mouseenter", t.mousewheel.handleMouseEnter), n.on("mouseleave", t.mousewheel.handleMouseLeave), n.on(gt.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0 }, disable: function() { var t = this; if(!gt.event) return !1; if(!t.mousewheel.enabled) return !1; var n = t.$el; return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.off(gt.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0 } },
				yt = { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function() { var e = this;
						ze.extend(e, { mousewheel: { enabled: !1, enable: gt.enable.bind(e), disable: gt.disable.bind(e), handle: gt.handle.bind(e), handleMouseEnter: gt.handleMouseEnter.bind(e), handleMouseLeave: gt.handleMouseLeave.bind(e), lastScrollTime: ze.now() } }) }, on: { init: function() { var e = this;
							e.params.mousewheel.enabled && e.mousewheel.enable() }, destroy: function() { var e = this;
							e.mousewheel.enabled && e.mousewheel.disable() } } },
				bt = { update: function() { var e = this,
							t = e.params.navigation; if(!e.params.loop) { var n = e.navigation,
								r = n.$nextEl,
								i = n.$prevEl;
							i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), r && r.length > 0 && (e.isEnd ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)) } }, init: function() { var t = this,
							n = t.params.navigation; if(n.nextEl || n.prevEl) { var r, i;
							n.nextEl && (r = e(n.nextEl), t.params.uniqueNavElements && "string" == typeof n.nextEl && r.length > 1 && 1 === t.$el.find(n.nextEl).length && (r = t.$el.find(n.nextEl))), n.prevEl && (i = e(n.prevEl), t.params.uniqueNavElements && "string" == typeof n.prevEl && i.length > 1 && 1 === t.$el.find(n.prevEl).length && (i = t.$el.find(n.prevEl))), r && r.length > 0 && r.on("click", function(e) { e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext() }), i && i.length > 0 && i.on("click", function(e) { e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev() }), ze.extend(t.navigation, { $nextEl: r, nextEl: r && r[0], $prevEl: i, prevEl: i && i[0] }) } }, destroy: function() { var e = this,
							t = e.navigation,
							n = t.$nextEl,
							r = t.$prevEl;
						n && n.length && (n.off("click"), n.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click"), r.removeClass(e.params.navigation.disabledClass)) } },
				_t = { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function() { var e = this;
						ze.extend(e, { navigation: { init: bt.init.bind(e), update: bt.update.bind(e), destroy: bt.destroy.bind(e) } }) }, on: { init: function() { var e = this;
							e.navigation.init(), e.navigation.update() }, toEdge: function() { this.navigation.update() }, fromEdge: function() { this.navigation.update() }, destroy: function() { this.navigation.destroy() }, click: function(t) { var n = this,
								r = n.navigation,
								i = r.$nextEl,
								o = r.$prevEl;!n.params.navigation.hideOnClick || e(t.target).is(o) || e(t.target).is(i) || (i && i.toggleClass(n.params.navigation.hiddenClass), o && o.toggleClass(n.params.navigation.hiddenClass)) } } },
				wt = { update: function() { var t = this,
							n = t.rtl,
							r = t.params.pagination; if(r.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) { var i, o = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
								a = t.pagination.$el,
								s = t.params.loop ? Math.ceil((o - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length; if(t.params.loop ? (i = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), i > o - 1 - 2 * t.loopedSlides && (i -= o - 2 * t.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== t.params.paginationType && (i = s + i)) : i = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) { var l, c, u, p = t.pagination.bullets; if(r.dynamicBullets && (t.pagination.bulletSize = p.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), r.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += i - t.previousIndex, t.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = i - t.pagination.dynamicBulletIndex, c = l + (Math.min(p.length, r.dynamicMainBullets) - 1), u = (c + l) / 2), p.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), a.length > 1) p.each(function(t, n) { var o = e(n),
										a = o.index();
									a === i && o.addClass(r.bulletActiveClass), r.dynamicBullets && (a >= l && a <= c && o.addClass(r.bulletActiveClass + "-main"), a === l && o.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), a === c && o.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")) });
								else { if(p.eq(i).addClass(r.bulletActiveClass), r.dynamicBullets) { for(var d = p.eq(l), h = p.eq(c), f = l; f <= c; f += 1) p.eq(f).addClass(r.bulletActiveClass + "-main");
										d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next") } } if(r.dynamicBullets) { var v = Math.min(p.length, r.dynamicMainBullets + 4),
										m = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - u * t.pagination.bulletSize,
										g = n ? "right" : "left";
									p.css(t.isHorizontal() ? g : "top", m + "px") } } if("fraction" === r.type && (a.find("." + r.currentClass).text(r.formatFractionCurrent(i + 1)), a.find("." + r.totalClass).text(r.formatFractionTotal(s))), "progressbar" === r.type) { var y;
								y = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical"; var b = (i + 1) / s,
									_ = 1,
									w = 1; "horizontal" === y ? _ = b : w = b, a.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + _ + ") scaleY(" + w + ")").transition(t.params.speed) } "custom" === r.type && r.renderCustom ? (a.html(r.renderCustom(t, i + 1, s)), t.emit("paginationRender", t, a[0])) : t.emit("paginationUpdate", t, a[0]), a[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](r.lockClass) } }, render: function() { var e = this,
							t = e.params.pagination; if(t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
								r = e.pagination.$el,
								i = ""; if("bullets" === t.type) { for(var o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < o; a += 1) t.renderBullet ? i += t.renderBullet.call(e, a, t.bulletClass) : i += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
								r.html(i), e.pagination.bullets = r.find("." + t.bulletClass) } "fraction" === t.type && (i = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', r.html(i)), "progressbar" === t.type && (i = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', r.html(i)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]) } }, init: function() { var t = this,
							n = t.params.pagination; if(n.el) { var r = e(n.el);
							0 !== r.length && (t.params.uniqueNavElements && "string" == typeof n.el && r.length > 1 && 1 === t.$el.find(n.el).length && (r = t.$el.find(n.el)), "bullets" === n.type && n.clickable && r.addClass(n.clickableClass), r.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (r.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && r.addClass(n.progressbarOppositeClass), n.clickable && r.on("click", "." + n.bulletClass, function(n) { n.preventDefault(); var r = e(this).index() * t.params.slidesPerGroup;
								t.params.loop && (r += t.loopedSlides), t.slideTo(r) }), ze.extend(t.pagination, { $el: r, el: r[0] })) } }, destroy: function() { var e = this,
							t = e.params.pagination; if(t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var n = e.pagination.$el;
							n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass) } } },
				Tt = { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(e) { return e }, formatFractionTotal: function(e) { return e }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { var e = this;
						ze.extend(e, { pagination: { init: wt.init.bind(e), render: wt.render.bind(e), update: wt.update.bind(e), destroy: wt.destroy.bind(e), dynamicBulletIndex: 0 } }) }, on: { init: function() { var e = this;
							e.pagination.init(), e.pagination.render(), e.pagination.update() }, activeIndexChange: function() { var e = this;
							e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update() }, snapIndexChange: function() { var e = this;
							e.params.loop || e.pagination.update() }, slidesLengthChange: function() { var e = this;
							e.params.loop && (e.pagination.render(), e.pagination.update()) }, snapGridLengthChange: function() { var e = this;
							e.params.loop || (e.pagination.render(), e.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(t) { var n = this;
							n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && n.pagination.$el.toggleClass(n.params.pagination.hiddenClass) } } },
				Ct = { setTranslate: function() { var e = this; if(e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar,
								n = e.rtlTranslate,
								r = e.progress,
								i = t.dragSize,
								o = t.trackSize,
								a = t.$dragEl,
								s = t.$el,
								l = e.params.scrollbar,
								c = i,
								u = (o - i) * r;
							n ? (u = -u, u > 0 ? (c = i - u, u = 0) : -u + i > o && (c = o + u)) : u < 0 ? (c = i + u, u = 0) : u + i > o && (c = o - u), e.isHorizontal() ? (Be.transforms3d ? a.transform("translate3d(" + u + "px, 0, 0)") : a.transform("translateX(" + u + "px)"), a[0].style.width = c + "px") : (Be.transforms3d ? a.transform("translate3d(0px, " + u + "px, 0)") : a.transform("translateY(" + u + "px)"), a[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), s[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() { s[0].style.opacity = 0, s.transition(400) }, 1e3)) } }, setTransition: function(e) { var t = this;
						t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e) }, updateSize: function() { var e = this; if(e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar,
								n = t.$dragEl,
								r = t.$el;
							n[0].style.width = "", n[0].style.height = ""; var i, o = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
								a = e.size / e.virtualSize,
								s = a * (o / e.size);
							i = "auto" === e.params.scrollbar.dragSize ? o * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = i + "px" : n[0].style.height = i + "px", r[0].style.display = a >= 1 ? "none" : "", e.params.scrollbarHide && (r[0].style.opacity = 0), ze.extend(t, { trackSize: o, divider: a, moveDivider: s, dragSize: i }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass) } }, setDragPosition: function(e) { var t, n = this,
							r = n.scrollbar,
							i = n.rtlTranslate,
							o = r.$el,
							a = r.dragSize,
							s = r.trackSize;
						t = n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY; var l;
						l = (t - o.offset()[n.isHorizontal() ? "left" : "top"] - a / 2) / (s - a), l = Math.max(Math.min(l, 1), 0), i && (l = 1 - l); var c = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * l;
						n.updateProgress(c), n.setTranslate(c), n.updateActiveIndex(), n.updateSlidesClasses() }, onDragStart: function(e) { var t = this,
							n = t.params.scrollbar,
							r = t.scrollbar,
							i = t.$wrapperEl,
							o = r.$el,
							a = r.$dragEl;
						t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), a.transition(100), r.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), o.transition(0), n.hide && o.css("opacity", 1), t.emit("scrollbarDragStart", e) }, onDragMove: function(e) { var t = this,
							n = t.scrollbar,
							r = t.$wrapperEl,
							i = n.$el,
							o = n.$dragEl;
						t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), r.transition(0), i.transition(0), o.transition(0), t.emit("scrollbarDragMove", e)) }, onDragEnd: function(e) { var t = this,
							n = t.params.scrollbar,
							r = t.scrollbar,
							i = r.$el;
						t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ze.nextTick(function() { i.css("opacity", 0), i.transition(400) }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest()) }, enableDraggable: function() { var e = this; if(e.params.scrollbar.el) { var t = e.scrollbar,
								n = e.touchEvents,
								r = e.touchEventsDesktop,
								i = e.params,
								o = t.$el,
								a = o[0],
								s = !(!Be.passiveListener || !i.passiveListener) && { passive: !1, capture: !1 },
								l = !(!Be.passiveListener || !i.passiveListener) && { passive: !0, capture: !1 };
							Be.touch || !Be.pointerEvents && !Be.prefixedPointerEvents ? (Be.touch && (a.addEventListener(n.start, e.scrollbar.onDragStart, s), a.addEventListener(n.move, e.scrollbar.onDragMove, s), a.addEventListener(n.end, e.scrollbar.onDragEnd, l)), (i.simulateTouch && !Ke.ios && !Ke.android || i.simulateTouch && !Be.touch && Ke.ios) && (a.addEventListener("mousedown", e.scrollbar.onDragStart, s), $e.addEventListener("mousemove", e.scrollbar.onDragMove, s), $e.addEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (a.addEventListener(r.start, e.scrollbar.onDragStart, s), $e.addEventListener(r.move, e.scrollbar.onDragMove, s), $e.addEventListener(r.end, e.scrollbar.onDragEnd, l)) } }, disableDraggable: function() { var e = this; if(e.params.scrollbar.el) { var t = e.scrollbar,
								n = e.touchEvents,
								r = e.touchEventsDesktop,
								i = e.params,
								o = t.$el,
								a = o[0],
								s = !(!Be.passiveListener || !i.passiveListener) && { passive: !1, capture: !1 },
								l = !(!Be.passiveListener || !i.passiveListener) && { passive: !0, capture: !1 };
							Be.touch || !Be.pointerEvents && !Be.prefixedPointerEvents ? (Be.touch && (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), a.removeEventListener(n.move, e.scrollbar.onDragMove, s), a.removeEventListener(n.end, e.scrollbar.onDragEnd, l)), (i.simulateTouch && !Ke.ios && !Ke.android || i.simulateTouch && !Be.touch && Ke.ios) && (a.removeEventListener("mousedown", e.scrollbar.onDragStart, s), $e.removeEventListener("mousemove", e.scrollbar.onDragMove, s), $e.removeEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (a.removeEventListener(r.start, e.scrollbar.onDragStart, s), $e.removeEventListener(r.move, e.scrollbar.onDragMove, s), $e.removeEventListener(r.end, e.scrollbar.onDragEnd, l)) } }, init: function() { var t = this; if(t.params.scrollbar.el) { var n = t.scrollbar,
								r = t.$el,
								i = t.params.scrollbar,
								o = e(i.el);
							t.params.uniqueNavElements && "string" == typeof i.el && o.length > 1 && 1 === r.find(i.el).length && (o = r.find(i.el)); var a = o.find("." + t.params.scrollbar.dragClass);
							0 === a.length && (a = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), o.append(a)), ze.extend(n, { $el: o, el: o[0], $dragEl: a, dragEl: a[0] }), i.draggable && n.enableDraggable() } }, destroy: function() { this.scrollbar.disableDraggable() } },
				Et = { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { var e = this;
						ze.extend(e, { scrollbar: { init: Ct.init.bind(e), destroy: Ct.destroy.bind(e), updateSize: Ct.updateSize.bind(e), setTranslate: Ct.setTranslate.bind(e), setTransition: Ct.setTransition.bind(e), enableDraggable: Ct.enableDraggable.bind(e), disableDraggable: Ct.disableDraggable.bind(e), setDragPosition: Ct.setDragPosition.bind(e), onDragStart: Ct.onDragStart.bind(e), onDragMove: Ct.onDragMove.bind(e), onDragEnd: Ct.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function() { var e = this;
							e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(e) { this.scrollbar.setTransition(e) }, destroy: function() { this.scrollbar.destroy() } } },
				xt = { setTransform: function(t, n) { var r = this,
							i = r.rtl,
							o = e(t),
							a = i ? -1 : 1,
							s = o.attr("data-swiper-parallax") || "0",
							l = o.attr("data-swiper-parallax-x"),
							c = o.attr("data-swiper-parallax-y"),
							u = o.attr("data-swiper-parallax-scale"),
							p = o.attr("data-swiper-parallax-opacity"); if(l || c ? (l = l || "0", c = c || "0") : r.isHorizontal() ? (l = s, c = "0") : (c = s, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * a + "%" : l * n * a + "px", c = c.indexOf("%") >= 0 ? parseInt(c, 10) * n + "%" : c * n + "px", void 0 !== p && null !== p) { var d = p - (p - 1) * (1 - Math.abs(n));
							o[0].style.opacity = d } if(void 0 === u || null === u) o.transform("translate3d(" + l + ", " + c + ", 0px)");
						else { var h = u - (u - 1) * (1 - Math.abs(n));
							o.transform("translate3d(" + l + ", " + c + ", 0px) scale(" + h + ")") } }, setTranslate: function() { var t = this,
							n = t.$el,
							r = t.slides,
							i = t.progress,
							o = t.snapGrid;
						n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) { t.parallax.setTransform(n, i) }), r.each(function(n, r) { var a = r.progress;
							t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(n / 2) - i * (o.length - 1)), a = Math.min(Math.max(a, -1), 1), e(r).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) { t.parallax.setTransform(n, a) }) }) }, setTransition: function(t) { void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(n, r) { var i = e(r),
								o = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
							0 === t && (o = 0), i.transition(o) }) } },
				St = { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { var e = this;
						ze.extend(e, { parallax: { setTransform: xt.setTransform.bind(e), setTranslate: xt.setTranslate.bind(e), setTransition: xt.setTransition.bind(e) } }) }, on: { beforeInit: function() { var e = this;
							e.params.parallax.enabled && (e.params.watchSlidesProgress = !0) }, init: function() { var e = this;
							e.params.parallax && e.parallax.setTranslate() }, setTranslate: function() { var e = this;
							e.params.parallax && e.parallax.setTranslate() }, setTransition: function(e) { var t = this;
							t.params.parallax && t.parallax.setTransition(e) } } },
				kt = { getDistanceBetweenTouches: function(e) { if(e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX,
							n = e.targetTouches[0].pageY,
							r = e.targetTouches[1].pageX,
							i = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(r - t, 2) + Math.pow(i - n, 2)) }, onGestureStart: function(t) { var n = this,
							r = n.params.zoom,
							i = n.zoom,
							o = i.gesture; if(i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !Be.gestures) { if("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
							i.fakeGestureTouched = !0, o.scaleStart = kt.getDistanceBetweenTouches(t) } if(!(o.$slideEl && o.$slideEl.length || (o.$slideEl = e(t.target).closest(".swiper-slide"), 0 === o.$slideEl.length && (o.$slideEl = n.slides.eq(n.activeIndex)), o.$imageEl = o.$slideEl.find("img, svg, canvas"), o.$imageWrapEl = o.$imageEl.parent("." + r.containerClass), o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, 0 !== o.$imageWrapEl.length))) return void(o.$imageEl = void 0);
						o.$imageEl.transition(0), n.zoom.isScaling = !0 }, onGestureChange: function(e) { var t = this,
							n = t.params.zoom,
							r = t.zoom,
							i = r.gesture; if(!Be.gestures) { if("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
							r.fakeGestureMoved = !0, i.scaleMove = kt.getDistanceBetweenTouches(e) } i.$imageEl && 0 !== i.$imageEl.length && (Be.gestures ? t.zoom.scale = e.scale * r.currentScale : r.scale = i.scaleMove / i.scaleStart * r.currentScale, r.scale > i.maxRatio && (r.scale = i.maxRatio - 1 + Math.pow(r.scale - i.maxRatio + 1, .5)), r.scale < n.minRatio && (r.scale = n.minRatio + 1 - Math.pow(n.minRatio - r.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")")) }, onGestureEnd: function(e) { var t = this,
							n = t.params.zoom,
							r = t.zoom,
							i = r.gesture; if(!Be.gestures) { if(!r.fakeGestureTouched || !r.fakeGestureMoved) return; if("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Ke.android) return;
							r.fakeGestureTouched = !1, r.fakeGestureMoved = !1 } i.$imageEl && 0 !== i.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, i.maxRatio), n.minRatio), i.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (i.$slideEl = void 0)) }, onTouchStart: function(e) { var t = this,
							n = t.zoom,
							r = n.gesture,
							i = n.image;
						r.$imageEl && 0 !== r.$imageEl.length && (i.isTouched || (Ke.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function(e) { var t = this,
							n = t.zoom,
							r = n.gesture,
							i = n.image,
							o = n.velocity; if(r.$imageEl && 0 !== r.$imageEl.length && (t.allowClick = !1, i.isTouched && r.$slideEl)) { i.isMoved || (i.width = r.$imageEl[0].offsetWidth, i.height = r.$imageEl[0].offsetHeight, i.startX = ze.getTranslate(r.$imageWrapEl[0], "x") || 0, i.startY = ze.getTranslate(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), t.rtl && (i.startX = -i.startX, i.startY = -i.startY)); var a = i.width * n.scale,
								s = i.height * n.scale; if(!(a < r.slideWidth && s < r.slideHeight)) { if(i.minX = Math.min(r.slideWidth / 2 - a / 2, 0), i.maxX = -i.minX, i.minY = Math.min(r.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !i.isMoved && !n.isScaling) { if(t.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x)) return void(i.isTouched = !1); if(!t.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y)) return void(i.isTouched = !1) } e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), o.prevPositionX || (o.prevPositionX = i.touchesCurrent.x), o.prevPositionY || (o.prevPositionY = i.touchesCurrent.y), o.prevTime || (o.prevTime = Date.now()), o.x = (i.touchesCurrent.x - o.prevPositionX) / (Date.now() - o.prevTime) / 2, o.y = (i.touchesCurrent.y - o.prevPositionY) / (Date.now() - o.prevTime) / 2, Math.abs(i.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0), Math.abs(i.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0), o.prevPositionX = i.touchesCurrent.x, o.prevPositionY = i.touchesCurrent.y, o.prevTime = Date.now(), r.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)") } } }, onTouchEnd: function() { var e = this,
							t = e.zoom,
							n = t.gesture,
							r = t.image,
							i = t.velocity; if(n.$imageEl && 0 !== n.$imageEl.length) { if(!r.isTouched || !r.isMoved) return r.isTouched = !1, void(r.isMoved = !1);
							r.isTouched = !1, r.isMoved = !1; var o = 300,
								a = 300,
								s = i.x * o,
								l = r.currentX + s,
								c = i.y * a,
								u = r.currentY + c;
							0 !== i.x && (o = Math.abs((l - r.currentX) / i.x)), 0 !== i.y && (a = Math.abs((u - r.currentY) / i.y)); var p = Math.max(o, a);
							r.currentX = l, r.currentY = u; var d = r.width * t.scale,
								h = r.height * t.scale;
							r.minX = Math.min(n.slideWidth / 2 - d / 2, 0), r.maxX = -r.minX, r.minY = Math.min(n.slideHeight / 2 - h / 2, 0), r.maxY = -r.minY, r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX), r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY), n.$imageWrapEl.transition(p).transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)") } }, onTransitionEnd: function() { var e = this,
							t = e.zoom,
							n = t.gesture;
						n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1) }, toggle: function(e) { var t = this,
							n = t.zoom;
						n.scale && 1 !== n.scale ? n.out() : n.in(e) }, in: function(t) { var n = this,
							r = n.zoom,
							i = n.params.zoom,
							o = r.gesture,
							a = r.image; if(o.$slideEl || (o.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex), o.$imageEl = o.$slideEl.find("img, svg, canvas"), o.$imageWrapEl = o.$imageEl.parent("." + i.containerClass)), o.$imageEl && 0 !== o.$imageEl.length) { o.$slideEl.addClass("" + i.zoomedSlideClass); var s, l, c, u, p, d, h, f, v, m, g, y, b, _, w, T, C, E;
							void 0 === a.touchesStart.x && t ? (s = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (s = a.touchesStart.x, l = a.touchesStart.y), r.scale = o.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, r.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, t ? (C = o.$slideEl[0].offsetWidth, E = o.$slideEl[0].offsetHeight, c = o.$slideEl.offset().left, u = o.$slideEl.offset().top, p = c + C / 2 - s, d = u + E / 2 - l, v = o.$imageEl[0].offsetWidth, m = o.$imageEl[0].offsetHeight, g = v * r.scale, y = m * r.scale, b = Math.min(C / 2 - g / 2, 0), _ = Math.min(E / 2 - y / 2, 0), w = -b, T = -_, h = p * r.scale, f = d * r.scale, h < b && (h = b), h > w && (h = w), f < _ && (f = _), f > T && (f = T)) : (h = 0, f = 0), o.$imageWrapEl.transition(300).transform("translate3d(" + h + "px, " + f + "px,0)"), o.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")") } }, out: function() { var t = this,
							n = t.zoom,
							r = t.params.zoom,
							i = n.gesture;
						i.$slideEl || (i.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + r.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (n.scale = 1, n.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + r.zoomedSlideClass), i.$slideEl = void 0) }, enable: function() { var e = this,
							t = e.zoom; if(!t.enabled) { t.enabled = !0; var n = !("touchstart" !== e.touchEvents.start || !Be.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
							Be.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } }, disable: function() { var e = this,
							t = e.zoom; if(t.enabled) { e.zoom.enabled = !1; var n = !("touchstart" !== e.touchEvents.start || !Be.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
							Be.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } } },
				Ot = { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function() { var e = this,
							t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) { t[n] = kt[n].bind(e) }), ze.extend(e, { zoom: t }) }, on: { init: function() { var e = this;
							e.params.zoom.enabled && e.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(e) { var t = this;
							t.zoom.enabled && t.zoom.onTouchStart(e) }, touchEnd: function(e) { var t = this;
							t.zoom.enabled && t.zoom.onTouchEnd(e) }, doubleTap: function(e) { var t = this;
							t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e) }, transitionEnd: function() { var e = this;
							e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd() } } },
				Mt = { loadInSlide: function(t, n) { void 0 === n && (n = !0); var r = this,
							i = r.params.lazy; if(void 0 !== t && 0 !== r.slides.length) { var o = r.virtual && r.params.virtual.enabled,
								a = o ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : r.slides.eq(t),
								s = a.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");!a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (s = s.add(a[0])), 0 !== s.length && s.each(function(t, o) { var s = e(o);
								s.addClass(i.loadingClass); var l = s.attr("data-background"),
									c = s.attr("data-src"),
									u = s.attr("data-srcset"),
									p = s.attr("data-sizes");
								r.loadImage(s[0], c || l, u, p, !1, function() { if(void 0 !== r && null !== r && r && (!r || r.params) && !r.destroyed) { if(l ? (s.css("background-image", 'url("' + l + '")'), s.removeAttr("data-background")) : (u && (s.attr("srcset", u), s.removeAttr("data-srcset")), p && (s.attr("sizes", p), s.removeAttr("data-sizes")), c && (s.attr("src", c), s.removeAttr("data-src"))), s.addClass(i.loadedClass).removeClass(i.loadingClass), a.find("." + i.preloaderClass).remove(), r.params.loop && n) { var e = a.attr("data-swiper-slide-index"); if(a.hasClass(r.params.slideDuplicateClass)) { var t = r.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + r.params.slideDuplicateClass + ")");
												r.lazy.loadInSlide(t.index(), !1) } else { var o = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
												r.lazy.loadInSlide(o.index(), !1) } } r.emit("lazyImageReady", a[0], s[0]) } }), r.emit("lazyImageLoad", a[0], s[0]) }) } }, load: function() {
						function t(e) { if(l) { if(i.children("." + o.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if(a[e]) return !0; return !1 }

						function n(t) { return l ? e(t).attr("data-swiper-slide-index") : e(t).index() } var r = this,
							i = r.$wrapperEl,
							o = r.params,
							a = r.slides,
							s = r.activeIndex,
							l = r.virtual && o.virtual.enabled,
							c = o.lazy,
							u = o.slidesPerView; if("auto" === u && (u = 0), r.lazy.initialImageLoaded || (r.lazy.initialImageLoaded = !0), r.params.watchSlidesVisibility) i.children("." + o.slideVisibleClass).each(function(t, n) { var i = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
							r.lazy.loadInSlide(i) });
						else if(u > 1)
							for(var p = s; p < s + u; p += 1) t(p) && r.lazy.loadInSlide(p);
						else r.lazy.loadInSlide(s); if(c.loadPrevNext)
							if(u > 1 || c.loadPrevNextAmount && c.loadPrevNextAmount > 1) { for(var d = c.loadPrevNextAmount, h = u, f = Math.min(s + h + Math.max(d, h), a.length), v = Math.max(s - Math.max(h, d), 0), m = s + u; m < f; m += 1) t(m) && r.lazy.loadInSlide(m); for(var g = v; g < s; g += 1) t(g) && r.lazy.loadInSlide(g) } else { var y = i.children("." + o.slideNextClass);
								y.length > 0 && r.lazy.loadInSlide(n(y)); var b = i.children("." + o.slidePrevClass);
								b.length > 0 && r.lazy.loadInSlide(n(b)) } } },
				At = { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { var e = this;
						ze.extend(e, { lazy: { initialImageLoaded: !1, load: Mt.load.bind(e), loadInSlide: Mt.loadInSlide.bind(e) } }) }, on: { beforeInit: function() { var e = this;
							e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1) }, init: function() { var e = this;
							e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load() }, scroll: function() { var e = this;
							e.params.freeMode && !e.params.freeModeSticky && e.lazy.load() }, resize: function() { var e = this;
							e.params.lazy.enabled && e.lazy.load() }, scrollbarDragMove: function() { var e = this;
							e.params.lazy.enabled && e.lazy.load() }, transitionStart: function() { var e = this;
							e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load() }, transitionEnd: function() { var e = this;
							e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load() } } },
				Pt = { LinearSpline: function(e, t) { var n = function() { var e, t, n; return function(r, i) { for(t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= i ? t = n : e = n; return e } }();
						this.x = e, this.y = t, this.lastIndex = e.length - 1; var r, i; return this.interpolate = function(e) { return e ? (i = n(this.x, e), r = i - 1, (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0 }, this }, getInterpolateFunction: function(e) { var t = this;
						t.controller.spline || (t.controller.spline = t.params.loop ? new Pt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Pt.LinearSpline(t.snapGrid, e.snapGrid)) }, setTranslate: function(e, t) {
						function n(e) { var t = o.rtlTranslate ? -o.translate : o.translate; "slide" === o.params.controller.by && (o.controller.getInterpolateFunction(e), i = -o.controller.spline.interpolate(-t)), i && "container" !== o.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), i = (t - o.minTranslate()) * r + e.minTranslate()), o.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, o), e.updateActiveIndex(), e.updateSlidesClasses() } var r, i, o = this,
							a = o.controller.control; if(Array.isArray(a))
							for(var s = 0; s < a.length; s += 1) a[s] !== t && a[s] instanceof at && n(a[s]);
						else a instanceof at && t !== a && n(a) }, setTransition: function(e, t) {
						function n(t) { t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() { o && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd()) })) } var r, i = this,
							o = i.controller.control; if(Array.isArray(o))
							for(r = 0; r < o.length; r += 1) o[r] !== t && o[r] instanceof at && n(o[r]);
						else o instanceof at && t !== o && n(o) } },
				jt = { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { var e = this;
						ze.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: Pt.getInterpolateFunction.bind(e), setTranslate: Pt.setTranslate.bind(e), setTransition: Pt.setTransition.bind(e) } }) }, on: { update: function() { var e = this;
							e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, resize: function() { var e = this;
							e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, observerUpdate: function() { var e = this;
							e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, setTranslate: function(e, t) { var n = this;
							n.controller.control && n.controller.setTranslate(e, t) }, setTransition: function(e, t) { var n = this;
							n.controller.control && n.controller.setTransition(e, t) } } },
				Lt = { makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e }, addElRole: function(e, t) { return e.attr("role", t), e }, addElLabel: function(e, t) { return e.attr("aria-label", t), e }, disableEl: function(e) { return e.attr("aria-disabled", !0), e }, enableEl: function(e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function(t) { var n = this,
							r = n.params.a11y; if(13 === t.keyCode) { var i = e(t.target);
							n.navigation && n.navigation.$nextEl && i.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(), n.isEnd ? n.a11y.notify(r.lastSlideMessage) : n.a11y.notify(r.nextSlideMessage)), n.navigation && n.navigation.$prevEl && i.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(), n.isBeginning ? n.a11y.notify(r.firstSlideMessage) : n.a11y.notify(r.prevSlideMessage)), n.pagination && i.is("." + n.params.pagination.bulletClass) && i[0].click() } }, notify: function(e) { var t = this,
							n = t.a11y.liveRegion;
						0 !== n.length && (n.html(""), n.html(e)) }, updateNavigation: function() { var e = this; if(!e.params.loop) { var t = e.navigation,
								n = t.$nextEl,
								r = t.$prevEl;
							r && r.length > 0 && (e.isBeginning ? e.a11y.disableEl(r) : e.a11y.enableEl(r)), n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n)) } }, updatePagination: function() { var t = this,
							n = t.params.a11y;
						t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(r, i) { var o = e(i);
							t.a11y.makeElFocusable(o), t.a11y.addElRole(o, "button"), t.a11y.addElLabel(o, n.paginationBulletMessage.replace(/{{index}}/, o.index() + 1)) }) }, init: function() { var e = this;
						e.$el.append(e.a11y.liveRegion); var t, n, r = e.params.a11y;
						e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, r.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, r.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey) }, destroy: function() { var e = this;
						e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(); var t, n;
						e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey) } },
				It = { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function() { var t = this;
						ze.extend(t, { a11y: { liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(Lt).forEach(function(e) { t.a11y[e] = Lt[e].bind(t) }) }, on: { init: function() { var e = this;
							e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation()) }, toEdge: function() { var e = this;
							e.params.a11y.enabled && e.a11y.updateNavigation() }, fromEdge: function() { var e = this;
							e.params.a11y.enabled && e.a11y.updateNavigation() }, paginationUpdate: function() { var e = this;
							e.params.a11y.enabled && e.a11y.updatePagination() }, destroy: function() { var e = this;
							e.params.a11y.enabled && e.a11y.destroy() } } },
				$t = { init: function() { var e = this; if(e.params.history) { if(!De.history || !De.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0); var t = e.history;
							t.initialized = !0, t.paths = $t.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || De.addEventListener("popstate", e.history.setHistoryPopState)) } }, destroy: function() { var e = this;
						e.params.history.replaceState || De.removeEventListener("popstate", e.history.setHistoryPopState) }, setHistoryPopState: function() { var e = this;
						e.history.paths = $t.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1) }, getPathValues: function() { var e = De.location.pathname.slice(1).split("/").filter(function(e) { return "" !== e }),
							t = e.length; return { key: e[t - 2], value: e[t - 1] } }, setHistory: function(e, t) { var n = this; if(n.history.initialized && n.params.history.enabled) { var r = n.slides.eq(t),
								i = $t.slugify(r.attr("data-history"));
							De.location.pathname.includes(e) || (i = e + "/" + i); var o = De.history.state;
							o && o.value === i || (n.params.history.replaceState ? De.history.replaceState({ value: i }, null, i) : De.history.pushState({ value: i }, null, i)) } }, slugify: function(e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function(e, t, n) { var r = this; if(t)
							for(var i = 0, o = r.slides.length; i < o; i += 1) { var a = r.slides.eq(i),
									s = $t.slugify(a.attr("data-history")); if(s === t && !a.hasClass(r.params.slideDuplicateClass)) { var l = a.index();
									r.slideTo(l, e, n) } } else r.slideTo(0, e, n) } },
				Dt = { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { var e = this;
						ze.extend(e, { history: { init: $t.init.bind(e), setHistory: $t.setHistory.bind(e), setHistoryPopState: $t.setHistoryPopState.bind(e), scrollToSlide: $t.scrollToSlide.bind(e), destroy: $t.destroy.bind(e) } }) }, on: { init: function() { var e = this;
							e.params.history.enabled && e.history.init() }, destroy: function() { var e = this;
							e.params.history.enabled && e.history.destroy() }, transitionEnd: function() { var e = this;
							e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex) } } },
				Nt = { onHashCange: function() { var e = this,
							t = $e.location.hash.replace("#", "");
						t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index()) }, setHash: function() { var e = this; if(e.hashNavigation.initialized && e.params.hashNavigation.enabled)
							if(e.params.hashNavigation.replaceState && De.history && De.history.replaceState) De.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
							else { var t = e.slides.eq(e.activeIndex),
									n = t.attr("data-hash") || t.attr("data-history");
								$e.location.hash = n || "" } }, init: function() { var t = this; if(!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) { t.hashNavigation.initialized = !0; var n = $e.location.hash.replace("#", ""); if(n)
								for(var r = 0, i = t.slides.length; r < i; r += 1) { var o = t.slides.eq(r),
										a = o.attr("data-hash") || o.attr("data-history"); if(a === n && !o.hasClass(t.params.slideDuplicateClass)) { var s = o.index();
										t.slideTo(s, 0, t.params.runCallbacksOnInit, !0) } } t.params.hashNavigation.watchState && e(De).on("hashchange", t.hashNavigation.onHashCange) } }, destroy: function() { var t = this;
						t.params.hashNavigation.watchState && e(De).off("hashchange", t.hashNavigation.onHashCange) } },
				Rt = { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { var e = this;
						ze.extend(e, { hashNavigation: { initialized: !1, init: Nt.init.bind(e), destroy: Nt.destroy.bind(e), setHash: Nt.setHash.bind(e), onHashCange: Nt.onHashCange.bind(e) } }) }, on: { init: function() { var e = this;
							e.params.hashNavigation.enabled && e.hashNavigation.init() }, destroy: function() { var e = this;
							e.params.hashNavigation.enabled && e.hashNavigation.destroy() }, transitionEnd: function() { var e = this;
							e.hashNavigation.initialized && e.hashNavigation.setHash() } } },
				zt = { run: function() { var e = this,
							t = e.slides.eq(e.activeIndex),
							n = e.params.autoplay.delay;
						t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ze.nextTick(function() { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, n) }, start: function() { var e = this; return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)) }, stop: function() { var e = this; return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)) }, pause: function(e) { var t = this;
						t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run()))) } },
				Bt = { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function() { var e = this;
						ze.extend(e, { autoplay: { running: !1, paused: !1, run: zt.run.bind(e), start: zt.start.bind(e), stop: zt.stop.bind(e), pause: zt.pause.bind(e), onTransitionEnd: function(t) { e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()) } } }) }, on: { init: function() { var e = this;
							e.params.autoplay.enabled && e.autoplay.start() }, beforeTransitionStart: function(e, t) { var n = this;
							n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop()) }, sliderFirstMove: function() { var e = this;
							e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause()) }, destroy: function() { var e = this;
							e.autoplay.running && e.autoplay.stop() } } },
				Ft = { setTranslate: function() { for(var e = this, t = e.slides, n = 0; n < t.length; n += 1) { var r = e.slides.eq(n),
								i = r[0].swiperSlideOffset,
								o = -i;
							e.params.virtualTranslate || (o -= e.translate); var a = 0;
							e.isHorizontal() || (a = o, o = 0); var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0);
							r.css({ opacity: s }).transform("translate3d(" + o + "px, " + a + "px, 0px)") } }, setTransition: function(e) { var t = this,
							n = t.slides,
							r = t.$wrapperEl; if(n.transition(e), t.params.virtualTranslate && 0 !== e) { var i = !1;
							n.transitionEnd(function() { if(!i && t && !t.destroyed) { i = !0, t.animating = !1; for(var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n]) } }) } } },
				Ht = { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function() { var e = this;
						ze.extend(e, { fadeEffect: { setTranslate: Ft.setTranslate.bind(e), setTransition: Ft.setTransition.bind(e) } }) }, on: { beforeInit: function() { var e = this; if("fade" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "fade"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
								ze.extend(e.params, t), ze.extend(e.originalParams, t) } }, setTranslate: function() { var e = this; "fade" === e.params.effect && e.fadeEffect.setTranslate() }, setTransition: function(e) { var t = this; "fade" === t.params.effect && t.fadeEffect.setTransition(e) } } },
				Vt = { setTranslate: function() { var t, n = this,
							r = n.$el,
							i = n.$wrapperEl,
							o = n.slides,
							a = n.width,
							s = n.height,
							l = n.rtlTranslate,
							c = n.size,
							u = n.params.cubeEffect,
							p = n.isHorizontal(),
							d = n.virtual && n.params.virtual.enabled,
							h = 0;
						u.shadow && (p ? (t = i.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({ height: a + "px" })) : (t = r.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)))); for(var f = 0; f < o.length; f += 1) { var v = o.eq(f),
								m = f;
							d && (m = parseInt(v.attr("data-swiper-slide-index"), 10)); var g = 90 * m,
								y = Math.floor(g / 360);
							l && (g = -g, y = Math.floor(-g / 360)); var b = Math.max(Math.min(v[0].progress, 1), -1),
								_ = 0,
								w = 0,
								T = 0;
							m % 4 == 0 ? (_ = 4 * -y * c, T = 0) : (m - 1) % 4 == 0 ? (_ = 0, T = 4 * -y * c) : (m - 2) % 4 == 0 ? (_ = c + 4 * y * c, T = c) : (m - 3) % 4 == 0 && (_ = -c, T = 3 * c + 4 * c * y), l && (_ = -_), p || (w = _, _ = 0); var C = "rotateX(" + (p ? 0 : -g) + "deg) rotateY(" + (p ? g : 0) + "deg) translate3d(" + _ + "px, " + w + "px, " + T + "px)"; if(b <= 1 && b > -1 && (h = 90 * m + 90 * b, l && (h = 90 * -m - 90 * b)), v.transform(C), u.slideShadows) { var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
									x = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
								0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === x.length && (x = e('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(x)), E.length && (E[0].style.opacity = Math.max(-b, 0)), x.length && (x[0].style.opacity = Math.max(b, 0)) } } if(i.css({ "-webkit-transform-origin": "50% 50% -" + c / 2 + "px", "-moz-transform-origin": "50% 50% -" + c / 2 + "px", "-ms-transform-origin": "50% 50% -" + c / 2 + "px", "transform-origin": "50% 50% -" + c / 2 + "px" }), u.shadow)
							if(p) t.transform("translate3d(0px, " + (a / 2 + u.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
							else { var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
									k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
									O = u.shadowScale,
									M = u.shadowScale / k,
									A = u.shadowOffset;
								t.transform("scale3d(" + O + ", 1, " + M + ") translate3d(0px, " + (s / 2 + A) + "px, " + -s / 2 / M + "px) rotateX(-90deg)") }
						var P = Ze.isSafari || Ze.isUiWebView ? -c / 2 : 0;
						i.transform("translate3d(0px,0," + P + "px) rotateX(" + (n.isHorizontal() ? 0 : h) + "deg) rotateY(" + (n.isHorizontal() ? -h : 0) + "deg)") }, setTransition: function(e) { var t = this,
							n = t.$el;
						t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e) } },
				Gt = { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function() { var e = this;
						ze.extend(e, { cubeEffect: { setTranslate: Vt.setTranslate.bind(e), setTransition: Vt.setTransition.bind(e) } }) }, on: { beforeInit: function() { var e = this; if("cube" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
								ze.extend(e.params, t), ze.extend(e.originalParams, t) } }, setTranslate: function() { var e = this; "cube" === e.params.effect && e.cubeEffect.setTranslate() }, setTransition: function(e) { var t = this; "cube" === t.params.effect && t.cubeEffect.setTransition(e) } } },
				Wt = { setTranslate: function() { for(var t = this, n = t.slides, r = t.rtlTranslate, i = 0; i < n.length; i += 1) { var o = n.eq(i),
								a = o[0].progress;
							t.params.flipEffect.limitRotation && (a = Math.max(Math.min(o[0].progress, 1), -1)); var s = o[0].swiperSlideOffset,
								l = -180 * a,
								c = l,
								u = 0,
								p = -s,
								d = 0; if(t.isHorizontal() ? r && (c = -c) : (d = p, p = 0, u = -c, c = 0), o[0].style.zIndex = -Math.abs(Math.round(a)) + n.length, t.params.flipEffect.slideShadows) { var h = t.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
									f = t.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
								0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), o.append(h)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(f)), h.length && (h[0].style.opacity = Math.max(-a, 0)), f.length && (f[0].style.opacity = Math.max(a, 0)) } o.transform("translate3d(" + p + "px, " + d + "px, 0px) rotateX(" + u + "deg) rotateY(" + c + "deg)") } }, setTransition: function(e) { var t = this,
							n = t.slides,
							r = t.activeIndex,
							i = t.$wrapperEl; if(n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) { var o = !1;
							n.eq(r).transitionEnd(function() { if(!o && t && !t.destroyed) { o = !0, t.animating = !1; for(var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n]) } }) } } },
				Ut = { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function() { var e = this;
						ze.extend(e, { flipEffect: { setTranslate: Wt.setTranslate.bind(e), setTransition: Wt.setTransition.bind(e) } }) }, on: { beforeInit: function() { var e = this; if("flip" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
								ze.extend(e.params, t), ze.extend(e.originalParams, t) } }, setTranslate: function() { var e = this; "flip" === e.params.effect && e.flipEffect.setTranslate() }, setTransition: function(e) { var t = this; "flip" === t.params.effect && t.flipEffect.setTransition(e) } } },
				Xt = { setTranslate: function() { for(var t = this, n = t.width, r = t.height, i = t.slides, o = t.$wrapperEl, a = t.slidesSizesGrid, s = t.params.coverflowEffect, l = t.isHorizontal(), c = t.translate, u = l ? n / 2 - c : r / 2 - c, p = l ? s.rotate : -s.rotate, d = s.depth, h = 0, f = i.length; h < f; h += 1) { var v = i.eq(h),
								m = a[h],
								g = v[0].swiperSlideOffset,
								y = (u - g - m / 2) / m * s.modifier,
								b = l ? p * y : 0,
								_ = l ? 0 : p * y,
								w = -d * Math.abs(y),
								T = l ? 0 : s.stretch * y,
								C = l ? s.stretch * y : 0;
							Math.abs(C) < .001 && (C = 0), Math.abs(T) < .001 && (T = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(_) < .001 && (_ = 0); var E = "translate3d(" + C + "px," + T + "px," + w + "px)  rotateX(" + _ + "deg) rotateY(" + b + "deg)"; if(v.transform(E), v[0].style.zIndex = 1 - Math.abs(Math.round(y)), s.slideShadows) { var x = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
									S = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
								0 === x.length && (x = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), v.append(x)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), v.append(S)), x.length && (x[0].style.opacity = y > 0 ? y : 0), S.length && (S[0].style.opacity = -y > 0 ? -y : 0) } } if(Be.pointerEvents || Be.prefixedPointerEvents) { o[0].style.perspectiveOrigin = u + "px 50%" } }, setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } },
				qt = { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { var e = this;
						ze.extend(e, { coverflowEffect: { setTranslate: Xt.setTranslate.bind(e), setTransition: Xt.setTransition.bind(e) } }) }, on: { beforeInit: function() { var e = this; "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { var e = this; "coverflow" === e.params.effect && e.coverflowEffect.setTranslate() }, setTransition: function(e) { var t = this; "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e) } } },
				Yt = [st, lt, ct, ut, dt, ft, mt, yt, _t, Tt, Et, St, Ot, At, jt, It, Dt, Rt, Bt, Ht, Gt, Ut, qt]; return void 0 === at.use && (at.use = at.Class.use, at.installModule = at.Class.installModule), at.use(Yt), at }) },
	h65t: function(e, t, n) { var r = n("UuGF"),
			i = n("52gC");
		e.exports = function(e) { return function(t, n) { var o, a, s = String(i(t)),
					l = r(n),
					c = s.length; return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536) } } },
	hJx8: function(e, t, n) { var r = n("evD5"),
			i = n("X8DO");
		e.exports = n("+E39") ? function(e, t, n) { return r.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e } },
	kM2E: function(e, t, n) { var r = n("7KvD"),
			i = n("FeBl"),
			o = n("+ZMJ"),
			a = n("hJx8"),
			s = function(e, t, n) { var l, c, u, p = e & s.F,
					d = e & s.G,
					h = e & s.S,
					f = e & s.P,
					v = e & s.B,
					m = e & s.W,
					g = d ? i : i[t] || (i[t] = {}),
					y = g.prototype,
					b = d ? r : h ? r[t] : (r[t] || {}).prototype;
				d && (n = t); for(l in n)(c = !p && b && void 0 !== b[l]) && l in g || (u = c ? b[l] : n[l], g[l] = d && "function" != typeof b[l] ? n[l] : v && c ? o(u, r) : m && b[l] == u ? function(e) { var t = function(t, n, r) { if(this instanceof e) { switch(arguments.length) {
								case 0:
									return new e;
								case 1:
									return new e(t);
								case 2:
									return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(u) : f && "function" == typeof u ? o(Function.call, u) : u, f && ((g.virtual || (g.virtual = {}))[l] = u, e & s.R && y && !y[l] && a(y, l, u))) };
		s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s },
	kxFB: function(e, t) { e.exports = function(e) { return /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e } },
	lOnJ: function(e, t) { e.exports = function(e) { if("function" != typeof e) throw TypeError(e + " is not a function!"); return e } },
	lktj: function(e, t, n) { var r = n("Ibhu"),
			i = n("xnc9");
		e.exports = Object.keys || function(e) { return r(e, i) } },
	mClu: function(e, t, n) { var r = n("kM2E");
		r(r.S + r.F * !n("+E39"), "Object", { defineProperty: n("evD5").f }) },
	mtWM: function(e, t, n) { e.exports = n("tIFN") },
	mvHQ: function(e, t, n) { e.exports = { default: n("qkKv"), __esModule: !0 } },
	mypn: function(e, t, n) {
		(function(e, t) {! function(e, n) { "use strict";

				function r(e) { "function" != typeof e && (e = new Function("" + e)); for(var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1]; var r = { callback: e, args: t }; return c[l] = r, s(l), l++ }

				function i(e) { delete c[e] }

				function o(e) { var t = e.callback,
						r = e.args; switch(r.length) {
						case 0:
							t(); break;
						case 1:
							t(r[0]); break;
						case 2:
							t(r[0], r[1]); break;
						case 3:
							t(r[0], r[1], r[2]); break;
						default:
							t.apply(n, r) } }

				function a(e) { if(u) setTimeout(a, 0, e);
					else { var t = c[e]; if(t) { u = !0; try { o(t) } finally { i(e), u = !1 } } } } if(!e.setImmediate) { var s, l = 1,
						c = {},
						u = !1,
						p = e.document,
						d = Object.getPrototypeOf && Object.getPrototypeOf(e);
					d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function() { s = function(e) { t.nextTick(function() { a(e) }) } }() : function() { if(e.postMessage && !e.importScripts) { var t = !0,
								n = e.onmessage; return e.onmessage = function() { t = !1 }, e.postMessage("", "*"), e.onmessage = n, t } }() ? function() { var t = "setImmediate$" + Math.random() + "$",
							n = function(n) { n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length)) };
						e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function(n) { e.postMessage(t + n, "*") } }() : e.MessageChannel ? function() { var e = new MessageChannel;
						e.port1.onmessage = function(e) { a(e.data) }, s = function(t) { e.port2.postMessage(t) } }() : p && "onreadystatechange" in p.createElement("script") ? function() { var e = p.documentElement;
						s = function(t) { var n = p.createElement("script");
							n.onreadystatechange = function() { a(t), n.onreadystatechange = null, e.removeChild(n), n = null }, e.appendChild(n) } }() : function() { s = function(e) { setTimeout(a, 0, e) } }(), d.setImmediate = r, d.clearImmediate = i } }("undefined" == typeof self ? void 0 === e ? this : e : self) }).call(t, n("DuR2"), n("W2nU")) },
	n0T6: function(e, t, n) { var r = n("Ibhu"),
			i = n("xnc9").concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) { return r(e, i) } },
	nErl: function(e, t) {
		(function(t) { e.exports = t }).call(t, {}) },
	oJlt: function(e, t, n) { "use strict"; var r = n("cGG2"),
			i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
		e.exports = function(e) { var t, n, o, a = {}; return e ? (r.forEach(e.split("\n"), function(e) { if(o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) { if(a[t] && i.indexOf(t) >= 0) return;
					a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n } }), a) : a } },
	p1b6: function(e, t, n) { "use strict"; var r = n("cGG2");
		e.exports = r.isStandardBrowserEnv() ? function() { return { write: function(e, t, n, i, o, a) { var s = [];
					s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }() },
	pBtG: function(e, t, n) { "use strict";
		e.exports = function(e) { return !(!e || !e.__CANCEL__) } },
	pFYg: function(e, t, n) { "use strict";

		function r(e) { return e && e.__esModule ? e : { default: e } } t.__esModule = !0; var i = n("Zzip"),
			o = r(i),
			a = n("5QVw"),
			s = r(a),
			l = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e };
		t.default = "function" == typeof s.default && "symbol" === l(o.default) ? function(e) { return void 0 === e ? "undefined" : l(e) } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : l(e) } },
	pxG4: function(e, t, n) { "use strict";
		e.exports = function(e) { return function(t) { return e.apply(null, t) } } },
	"q+vg": function(e, t) {
		function n() { for(var e = {}, t = 0; t < arguments.length; t++) { var n = arguments[t]; for(var i in n) r.call(n, i) && (e[i] = n[i]) } return e } e.exports = n; var r = Object.prototype.hasOwnProperty },
	qRfI: function(e, t, n) { "use strict";
		e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e } },
	qio6: function(e, t, n) { var r = n("evD5"),
			i = n("77Pl"),
			o = n("lktj");
		e.exports = n("+E39") ? Object.defineProperties : function(e, t) { i(e); for(var n, a = o(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]); return e } },
	qkKv: function(e, t, n) { var r = n("FeBl"),
			i = r.JSON || (r.JSON = { stringify: JSON.stringify });
		e.exports = function(e) { return i.stringify.apply(i, arguments) } },
	rjj0: function(e, t, n) {
		function r(e) { for(var t = 0; t < e.length; t++) { var n = e[t],
					r = u[n.id]; if(r) { r.refs++; for(var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]); for(; i < n.parts.length; i++) r.parts.push(o(n.parts[i]));
					r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { for(var a = [], i = 0; i < n.parts.length; i++) a.push(o(n.parts[i]));
					u[n.id] = { id: n.id, refs: 1, parts: a } } } }

		function i() { var e = document.createElement("style"); return e.type = "text/css", p.appendChild(e), e }

		function o(e) { var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]'); if(r) { if(f) return v;
				r.parentNode.removeChild(r) } if(m) { var o = h++;
				r = d || (d = i()), t = a.bind(null, r, o, !1), n = a.bind(null, r, o, !0) } else r = i(), t = s.bind(null, r), n = function() { r.parentNode.removeChild(r) }; return t(e),
				function(r) { if(r) { if(r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
						t(e = r) } else n() } }

		function a(e, t, n, r) { var i = n ? "" : r.css; if(e.styleSheet) e.styleSheet.cssText = g(t, i);
			else { var o = document.createTextNode(i),
					a = e.childNodes;
				a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o) } }

		function s(e, t) { var n = t.css,
				r = t.media,
				i = t.sourceMap; if(r && e.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
			else { for(; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n)) } } var l = "undefined" != typeof document; if("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var c = n("tTVk"),
			u = {},
			p = l && (document.head || document.getElementsByTagName("head")[0]),
			d = null,
			h = 0,
			f = !1,
			v = function() {},
			m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		e.exports = function(e, t, n) { f = n; var i = c(e, t); return r(i),
				function(t) { for(var n = [], o = 0; o < i.length; o++) { var a = i[o],
							s = u[a.id];
						s.refs--, n.push(s) } t ? (i = c(e, t), r(i)) : i = []; for(var o = 0; o < n.length; o++) { var s = n[o]; if(0 === s.refs) { for(var l = 0; l < s.parts.length; l++) s.parts[l]();
							delete u[s.id] } } } }; var g = function() { var e = []; return function(t, n) { return e[t] = n, e.filter(Boolean).join("\n") } }() },
	sB3e: function(e, t, n) { var r = n("52gC");
		e.exports = function(e) { return Object(r(e)) } },
	sD9O: function(e, t, n) { var r = n("QYuf"),
			i = n("Pyiu"),
			o = function(e) { return "[object Array]" === Object.prototype.toString.call(e) };
		e.exports = function(e) { if(!e) return {}; var t = {}; return i(r(e).split("\n"), function(e) { var n = e.indexOf(":"),
					i = r(e.slice(0, n)).toLowerCase(),
					a = r(e.slice(n + 1));
				void 0 === t[i] ? t[i] = a : o(t[i]) ? t[i].push(a) : t[i] = [t[i], a] }), t } },
	sN1u: function(e, t) {
		function n(e) { return e.replace(/\n\r?\s*/g, "") } e.exports = function(e) { for(var t = "", r = 0; r < arguments.length; r++) t += n(e[r]) + (arguments[r + 1] || ""); return t } },
	t8qj: function(e, t, n) { "use strict";
		e.exports = function(e, t, n, r, i) { return e.config = t, n && (e.code = n), e.request = r, e.response = i, e } },
	tIFN: function(e, t, n) { "use strict";

		function r(e) { var t = new a(e),
				n = o(a.prototype.request, t); return i.extend(n, a.prototype, t), i.extend(n, t), n } var i = n("cGG2"),
			o = n("JP+z"),
			a = n("XmWM"),
			s = n("KCLY"),
			l = r(s);
		l.Axios = a, l.create = function(e) { return r(i.merge(s, e)) }, l.Cancel = n("dVOP"), l.CancelToken = n("cWxy"), l.isCancel = n("pBtG"), l.all = function(e) { return Promise.all(e) }, l.spread = n("pxG4"), e.exports = l, e.exports.default = l },
	tTVk: function(e, t) { e.exports = function(e, t) { for(var n = [], r = {}, i = 0; i < t.length; i++) { var o = t[i],
					a = o[0],
					s = o[1],
					l = o[2],
					c = o[3],
					u = { id: e + ":" + i, css: s, media: l, sourceMap: c };
				r[a] ? r[a].parts.push(u) : n.push(r[a] = { id: a, parts: [u] }) } return n } },
	thJu: function(e, t, n) { "use strict";

		function r() { this.message = "String contains an invalid character" }

		function i(e) { for(var t, n, i = String(e), a = "", s = 0, l = o; i.charAt(0 | s) || (l = "=", s % 1); a += l.charAt(63 & t >> 8 - s % 1 * 8)) { if((n = i.charCodeAt(s += .75)) > 255) throw new r;
				t = t << 8 | n } return a } var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = i },
	"vFc/": function(e, t, n) { var r = n("TcQ7"),
			i = n("QRG4"),
			o = n("fkB2");
		e.exports = function(e) { return function(t, n, a) { var s, l = r(t),
					c = i(l.length),
					u = o(a, c); if(e && n != n) { for(; c > u;)
						if((s = l[u++]) != s) return !0 } else
					for(; c > u; u++)
						if((e || u in l) && l[u] === n) return e || u || 0; return !e && -1 } } },
	"vIB/": function(e, t, n) { "use strict"; var r = n("O4g8"),
			i = n("kM2E"),
			o = n("880/"),
			a = n("hJx8"),
			s = n("D2L2"),
			l = n("/bQp"),
			c = n("94VQ"),
			u = n("e6n0"),
			p = n("PzxK"),
			d = n("dSzd")("iterator"),
			h = !([].keys && "next" in [].keys()),
			f = function() { return this };
		e.exports = function(e, t, n, v, m, g, y) { c(n, t, v); var b, _, w, T = function(e) { if(!h && e in S) return S[e]; switch(e) {
						case "keys":
						case "values":
							return function() { return new n(this, e) } } return function() { return new n(this, e) } },
				C = t + " Iterator",
				E = "values" == m,
				x = !1,
				S = e.prototype,
				k = S[d] || S["@@iterator"] || m && S[m],
				O = !h && k || T(m),
				M = m ? E ? T("entries") : O : void 0,
				A = "Array" == t ? S.entries || k : k; if(A && (w = p(A.call(new e))) !== Object.prototype && w.next && (u(w, C, !0), r || s(w, d) || a(w, d, f)), E && k && "values" !== k.name && (x = !0, O = function() { return k.call(this) }), r && !y || !h && !x && S[d] || a(S, d, O), l[t] = O, l[C] = f, m)
				if(b = { values: E ? O : T("values"), keys: g ? O : T("keys"), entries: M }, y)
					for(_ in b) _ in S || o(S, _, b[_]);
				else i(i.P + i.F * (h || x), t, b); return b } },
	vRXZ: function(e, t, n) { "use strict"; var r = Function.prototype.toString,
			i = /^\s*class /,
			o = function(e) { try { var t = r.call(e),
						n = t.replace(/\/\/.*\n/g, ""),
						o = n.replace(/\/\*[.\s\S]*\*\//g, ""),
						a = o.replace(/\n/gm, " ").replace(/ {2}/g, " "); return i.test(a) } catch(e) { return !1 } },
			a = function(e) { try { return !o(e) && (r.call(e), !0) } catch(e) { return !1 } },
			s = Object.prototype.toString,
			l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
		e.exports = function(e) { if(!e) return !1; if("function" != typeof e && "object" != typeof e) return !1; if(l) return a(e); if(o(e)) return !1; var t = s.call(e); return "[object Function]" === t || "[object GeneratorFunction]" === t } },
	woOf: function(e, t, n) { e.exports = { default: n("V3tA"), __esModule: !0 } },
	xGkn: function(e, t, n) { "use strict"; var r = n("4mcu"),
			i = n("EGZi"),
			o = n("/bQp"),
			a = n("TcQ7");
		e.exports = n("vIB/")(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() { var e = this._t,
				t = this._k,
				n = this._i++; return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]]) }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries") },
	xLtR: function(e, t, n) { "use strict";

		function r(e) { e.cancelToken && e.cancelToken.throwIfRequested() } var i = n("cGG2"),
			o = n("TNV1"),
			a = n("pBtG"),
			s = n("KCLY"),
			l = n("dIwP"),
			c = n("qRfI");
		e.exports = function(e) { return r(e), e.baseURL && !l(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || s.adapter)(e).then(function(t) { return r(e), t.data = o(t.data, t.headers, e.transformResponse), t }, function(t) { return a(t) || (r(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) }) } },
	xnc9: function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") },
	zQR9: function(e, t, n) { "use strict"; var r = n("h65t")(!0);
		n("vIB/")(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
				n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 }) }) }
});