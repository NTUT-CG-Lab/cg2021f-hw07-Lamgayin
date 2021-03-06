!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("core-js/stable"), require("lodash")) : "function" == typeof define && define.amd ? define(["core-js/stable", "lodash"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Dicom2Raw = e()
}(this, (function() {
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        t(e)
    }
    function e(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a)
              , c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }
    function r(t) {
        return function() {
            var r = this
              , n = arguments;
            return new Promise((function(o, i) {
                var a = t.apply(r, n);
                function u(t) {
                    e(a, o, i, u, c, "next", t)
                }
                function c(t) {
                    e(a, o, i, u, c, "throw", t)
                }
                u(void 0)
            }
            ))
        }
    }
    function n(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r];
        return n
    }
    function i(t, e) {
        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!r) {
            if (Array.isArray(t) || (r = function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return o(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, u = !0, c = !1;
        return {
            s: function() {
                r = r.call(t)
            },
            n: function() {
                var t = r.next();
                return u = t.done,
                t
            },
            e: function(t) {
                c = !0,
                a = t
            },
            f: function() {
                try {
                    u || null == r.return || r.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    !function(e) {
        var r = function(e) {
            var r, n = Object.prototype, o = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var o = e && e.prototype instanceof g ? e : g
                  , i = Object.create(o.prototype)
                  , a = new A(n || []);
                return i._invoke = function(t, e, r) {
                    var n = h;
                    return function(o, i) {
                        if (n === y)
                            throw new Error("Generator is already running");
                        if (n === d) {
                            if ("throw" === o)
                                throw i;
                            return R()
                        }
                        for (r.method = o,
                        r.arg = i; ; ) {
                            var a = r.delegate;
                            if (a) {
                                var u = E(a, r);
                                if (u) {
                                    if (u === v)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === r.method)
                                r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === h)
                                    throw n = d,
                                    r.arg;
                                r.dispatchException(r.arg)
                            } else
                                "return" === r.method && r.abrupt("return", r.arg);
                            n = y;
                            var c = l(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? d : p,
                                c.arg === v)
                                    continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = d,
                            r.method = "throw",
                            r.arg = c.arg)
                        }
                    }
                }(t, r, a),
                i
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , y = "executing"
              , d = "completed"
              , v = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , j = _ && _(_(I([])));
            j && j !== n && o.call(j, a) && (w = j);
            var k = m.prototype = g.prototype = Object.create(w);
            function x(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(e, r) {
                function n(i, a, u, c) {
                    var s = l(e[i], e, a);
                    if ("throw" !== s.type) {
                        var f = s.arg
                          , h = f.value;
                        return h && "object" === t(h) && o.call(h, "__await") ? r.resolve(h.__await).then((function(t) {
                            n("next", t, u, c)
                        }
                        ), (function(t) {
                            n("throw", t, u, c)
                        }
                        )) : r.resolve(h).then((function(t) {
                            f.value = t,
                            u(f)
                        }
                        ), (function(t) {
                            return n("throw", t, u, c)
                        }
                        ))
                    }
                    c(s.arg)
                }
                var i;
                this._invoke = function(t, e) {
                    function o() {
                        return new r((function(r, o) {
                            n(t, e, r, o)
                        }
                        ))
                    }
                    return i = i ? i.then(o, o) : o()
                }
            }
            function E(t, e) {
                var n = t.iterator[e.method];
                if (n === r) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return",
                        e.arg = r,
                        E(t, e),
                        "throw" === e.method))
                            return v;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var o = l(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    v;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = r),
                e.delegate = null,
                v) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                v)
            }
            function L(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function A(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(L, this),
                this.reset(!0)
            }
            function I(t) {
                if (t) {
                    var e = t[a];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , i = function e() {
                            for (; ++n < t.length; )
                                if (o.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = r,
                            e.done = !0,
                            e
                        };
                        return i.next = i
                    }
                }
                return {
                    next: R
                }
            }
            function R() {
                return {
                    value: r,
                    done: !0
                }
            }
            return b.prototype = m,
            s(k, "constructor", m),
            s(m, "constructor", b),
            b.displayName = s(m, c, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, c, "GeneratorFunction")),
                t.prototype = Object.create(k),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            x(O.prototype),
            s(O.prototype, u, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            x(k),
            s(k, c, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = [];
                for (var r in t)
                    e.push(r);
                return e.reverse(),
                function r() {
                    for (; e.length; ) {
                        var n = e.pop();
                        if (n in t)
                            return r.value = n,
                            r.done = !1,
                            r
                    }
                    return r.done = !0,
                    r
                }
            }
            ,
            e.values = I,
            A.prototype = {
                constructor: A,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = r,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = r,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(n, o) {
                        return u.type = "throw",
                        u.arg = t,
                        e.next = n,
                        o && (e.method = "next",
                        e.arg = r),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , u = a.completion;
                        if ("root" === a.tryLoc)
                            return n("end");
                        if (a.tryLoc <= this.prev) {
                            var c = o.call(a, "catchLoc")
                              , s = o.call(a, "finallyLoc");
                            if (c && s) {
                                if (this.prev < a.catchLoc)
                                    return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return n(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc)
                                    return n(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    v
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            v
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: I(t),
                        resultName: e,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = r),
                    v
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = r
        } catch (e) {
            "object" === ("undefined" == typeof globalThis ? "undefined" : t(globalThis)) ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    }({
        exports: {}
    });
    var u = {
        exports: {}
    };
    !function(e, r) {
        var n = "__lodash_hash_undefined__"
          , o = 9007199254740991
          , i = "[object Arguments]"
          , u = "[object Boolean]"
          , c = "[object Date]"
          , s = "[object Function]"
          , f = "[object GeneratorFunction]"
          , l = "[object Map]"
          , h = "[object Number]"
          , p = "[object Object]"
          , y = "[object Promise]"
          , d = "[object RegExp]"
          , v = "[object Set]"
          , g = "[object String]"
          , b = "[object Symbol]"
          , m = "[object WeakMap]"
          , w = "[object ArrayBuffer]"
          , _ = "[object DataView]"
          , j = "[object Float32Array]"
          , k = "[object Float64Array]"
          , x = "[object Int8Array]"
          , O = "[object Int16Array]"
          , E = "[object Int32Array]"
          , L = "[object Uint8Array]"
          , S = "[object Uint8ClampedArray]"
          , A = "[object Uint16Array]"
          , I = "[object Uint32Array]"
          , R = /\w*$/
          , P = /^\[object .+?Constructor\]$/
          , T = /^(?:0|[1-9]\d*)$/
          , F = {};
        F[i] = F["[object Array]"] = F[w] = F[_] = F[u] = F[c] = F[j] = F[k] = F[x] = F[O] = F[E] = F[l] = F[h] = F[p] = F[d] = F[v] = F[g] = F[b] = F[L] = F[S] = F[A] = F[I] = !0,
        F["[object Error]"] = F[s] = F[m] = !1;
        var D = "object" == t(a) && a && a.Object === Object && a
          , C = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self
          , N = D || C || Function("return this")()
          , B = r && !r.nodeType && r
          , G = B && e && !e.nodeType && e
          , U = G && G.exports === B;
        function $(t, e) {
            return t.set(e[0], e[1]),
            t
        }
        function M(t, e) {
            return t.add(e),
            t
        }
        function V(t, e, r, n) {
            var o = -1
              , i = t ? t.length : 0;
            for (n && i && (r = t[++o]); ++o < i; )
                r = e(r, t[o], o, t);
            return r
        }
        function q(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
                try {
                    e = !!(t + "")
                } catch (t) {}
            return e
        }
        function z(t) {
            var e = -1
              , r = Array(t.size);
            return t.forEach((function(t, n) {
                r[++e] = [n, t]
            }
            )),
            r
        }
        function W(t, e) {
            return function(r) {
                return t(e(r))
            }
        }
        function Y(t) {
            var e = -1
              , r = Array(t.size);
            return t.forEach((function(t) {
                r[++e] = t
            }
            )),
            r
        }
        var H, X = Array.prototype, J = Function.prototype, K = Object.prototype, Q = N["__core-js_shared__"], Z = (H = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "")) ? "Symbol(src)_1." + H : "", tt = J.toString, et = K.hasOwnProperty, rt = K.toString, nt = RegExp("^" + tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ot = U ? N.Buffer : void 0, it = N.Symbol, at = N.Uint8Array, ut = W(Object.getPrototypeOf, Object), ct = Object.create, st = K.propertyIsEnumerable, ft = X.splice, lt = Object.getOwnPropertySymbols, ht = ot ? ot.isBuffer : void 0, pt = W(Object.keys, Object), yt = Gt(N, "DataView"), dt = Gt(N, "Map"), vt = Gt(N, "Promise"), gt = Gt(N, "Set"), bt = Gt(N, "WeakMap"), mt = Gt(Object, "create"), wt = qt(yt), _t = qt(dt), jt = qt(vt), kt = qt(gt), xt = qt(bt), Ot = it ? it.prototype : void 0, Et = Ot ? Ot.valueOf : void 0;
        function Lt(t) {
            var e = -1
              , r = t ? t.length : 0;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function St(t) {
            var e = -1
              , r = t ? t.length : 0;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function At(t) {
            var e = -1
              , r = t ? t.length : 0;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function It(t) {
            this.__data__ = new St(t)
        }
        function Rt(e, r) {
            var n = Wt(e) || function(e) {
                return function(e) {
                    return function(e) {
                        return !!e && "object" == t(e)
                    }(e) && Yt(e)
                }(e) && et.call(e, "callee") && (!st.call(e, "callee") || rt.call(e) == i)
            }(e) ? function(t, e) {
                for (var r = -1, n = Array(t); ++r < t; )
                    n[r] = e(r);
                return n
            }(e.length, String) : []
              , o = n.length
              , a = !!o;
            for (var u in e)
                !r && !et.call(e, u) || a && ("length" == u || Mt(u, o)) || n.push(u);
            return n
        }
        function Pt(t, e, r) {
            var n = t[e];
            et.call(t, e) && zt(n, r) && (void 0 !== r || e in t) || (t[e] = r)
        }
        function Tt(t, e) {
            for (var r = t.length; r--; )
                if (zt(t[r][0], e))
                    return r;
            return -1
        }
        function Ft(t, e, r, n, o, a, y) {
            var m;
            if (n && (m = a ? n(t, o, a, y) : n(t)),
            void 0 !== m)
                return m;
            if (!Jt(t))
                return t;
            var P = Wt(t);
            if (P) {
                if (m = function(t) {
                    var e = t.length
                      , r = t.constructor(e);
                    e && "string" == typeof t[0] && et.call(t, "index") && (r.index = t.index,
                    r.input = t.input);
                    return r
                }(t),
                !e)
                    return function(t, e) {
                        var r = -1
                          , n = t.length;
                        e || (e = Array(n));
                        for (; ++r < n; )
                            e[r] = t[r];
                        return e
                    }(t, m)
            } else {
                var T = $t(t)
                  , D = T == s || T == f;
                if (Ht(t))
                    return function(t, e) {
                        if (e)
                            return t.slice();
                        var r = new t.constructor(t.length);
                        return t.copy(r),
                        r
                    }(t, e);
                if (T == p || T == i || D && !a) {
                    if (q(t))
                        return a ? t : {};
                    if (m = function(t) {
                        return "function" != typeof t.constructor || Vt(t) ? {} : (e = ut(t),
                        Jt(e) ? ct(e) : {});
                        var e
                    }(D ? {} : t),
                    !e)
                        return function(t, e) {
                            return Nt(t, Ut(t), e)
                        }(t, function(t, e) {
                            return t && Nt(e, Kt(e), t)
                        }(m, t))
                } else {
                    if (!F[T])
                        return a ? t : {};
                    m = function(t, e, r, n) {
                        var o = t.constructor;
                        switch (e) {
                        case w:
                            return Ct(t);
                        case u:
                        case c:
                            return new o(+t);
                        case _:
                            return function(t, e) {
                                var r = e ? Ct(t.buffer) : t.buffer;
                                return new t.constructor(r,t.byteOffset,t.byteLength)
                            }(t, n);
                        case j:
                        case k:
                        case x:
                        case O:
                        case E:
                        case L:
                        case S:
                        case A:
                        case I:
                            return function(t, e) {
                                var r = e ? Ct(t.buffer) : t.buffer;
                                return new t.constructor(r,t.byteOffset,t.length)
                            }(t, n);
                        case l:
                            return function(t, e, r) {
                                return V(e ? r(z(t), !0) : z(t), $, new t.constructor)
                            }(t, n, r);
                        case h:
                        case g:
                            return new o(t);
                        case d:
                            return function(t) {
                                var e = new t.constructor(t.source,R.exec(t));
                                return e.lastIndex = t.lastIndex,
                                e
                            }(t);
                        case v:
                            return function(t, e, r) {
                                return V(e ? r(Y(t), !0) : Y(t), M, new t.constructor)
                            }(t, n, r);
                        case b:
                            return i = t,
                            Et ? Object(Et.call(i)) : {}
                        }
                        var i
                    }(t, T, Ft, e)
                }
            }
            y || (y = new It);
            var C = y.get(t);
            if (C)
                return C;
            if (y.set(t, m),
            !P)
                var N = r ? function(t) {
                    return function(t, e, r) {
                        var n = e(t);
                        return Wt(t) ? n : function(t, e) {
                            for (var r = -1, n = e.length, o = t.length; ++r < n; )
                                t[o + r] = e[r];
                            return t
                        }(n, r(t))
                    }(t, Kt, Ut)
                }(t) : Kt(t);
            return function(t, e) {
                for (var r = -1, n = t ? t.length : 0; ++r < n && !1 !== e(t[r], r, t); )
                    ;
            }(N || t, (function(o, i) {
                N && (o = t[i = o]),
                Pt(m, i, Ft(o, e, r, n, i, t, y))
            }
            )),
            m
        }
        function Dt(t) {
            return !(!Jt(t) || (e = t,
            Z && Z in e)) && (Xt(t) || q(t) ? nt : P).test(qt(t));
            var e
        }
        function Ct(t) {
            var e = new t.constructor(t.byteLength);
            return new at(e).set(new at(t)),
            e
        }
        function Nt(t, e, r, n) {
            r || (r = {});
            for (var o = -1, i = e.length; ++o < i; ) {
                var a = e[o]
                  , u = n ? n(r[a], t[a], a, r, t) : void 0;
                Pt(r, a, void 0 === u ? t[a] : u)
            }
            return r
        }
        function Bt(e, r) {
            var n, o, i = e.__data__;
            return ("string" == (o = t(n = r)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== n : null === n) ? i["string" == typeof r ? "string" : "hash"] : i.map
        }
        function Gt(t, e) {
            var r = function(t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return Dt(r) ? r : void 0
        }
        Lt.prototype.clear = function() {
            this.__data__ = mt ? mt(null) : {}
        }
        ,
        Lt.prototype.delete = function(t) {
            return this.has(t) && delete this.__data__[t]
        }
        ,
        Lt.prototype.get = function(t) {
            var e = this.__data__;
            if (mt) {
                var r = e[t];
                return r === n ? void 0 : r
            }
            return et.call(e, t) ? e[t] : void 0
        }
        ,
        Lt.prototype.has = function(t) {
            var e = this.__data__;
            return mt ? void 0 !== e[t] : et.call(e, t)
        }
        ,
        Lt.prototype.set = function(t, e) {
            return this.__data__[t] = mt && void 0 === e ? n : e,
            this
        }
        ,
        St.prototype.clear = function() {
            this.__data__ = []
        }
        ,
        St.prototype.delete = function(t) {
            var e = this.__data__
              , r = Tt(e, t);
            return !(r < 0) && (r == e.length - 1 ? e.pop() : ft.call(e, r, 1),
            !0)
        }
        ,
        St.prototype.get = function(t) {
            var e = this.__data__
              , r = Tt(e, t);
            return r < 0 ? void 0 : e[r][1]
        }
        ,
        St.prototype.has = function(t) {
            return Tt(this.__data__, t) > -1
        }
        ,
        St.prototype.set = function(t, e) {
            var r = this.__data__
              , n = Tt(r, t);
            return n < 0 ? r.push([t, e]) : r[n][1] = e,
            this
        }
        ,
        At.prototype.clear = function() {
            this.__data__ = {
                hash: new Lt,
                map: new (dt || St),
                string: new Lt
            }
        }
        ,
        At.prototype.delete = function(t) {
            return Bt(this, t).delete(t)
        }
        ,
        At.prototype.get = function(t) {
            return Bt(this, t).get(t)
        }
        ,
        At.prototype.has = function(t) {
            return Bt(this, t).has(t)
        }
        ,
        At.prototype.set = function(t, e) {
            return Bt(this, t).set(t, e),
            this
        }
        ,
        It.prototype.clear = function() {
            this.__data__ = new St
        }
        ,
        It.prototype.delete = function(t) {
            return this.__data__.delete(t)
        }
        ,
        It.prototype.get = function(t) {
            return this.__data__.get(t)
        }
        ,
        It.prototype.has = function(t) {
            return this.__data__.has(t)
        }
        ,
        It.prototype.set = function(t, e) {
            var r = this.__data__;
            if (r instanceof St) {
                var n = r.__data__;
                if (!dt || n.length < 199)
                    return n.push([t, e]),
                    this;
                r = this.__data__ = new At(n)
            }
            return r.set(t, e),
            this
        }
        ;
        var Ut = lt ? W(lt, Object) : function() {
            return []
        }
          , $t = function(t) {
            return rt.call(t)
        };
        function Mt(t, e) {
            return !!(e = null == e ? o : e) && ("number" == typeof t || T.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        function Vt(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || K)
        }
        function qt(t) {
            if (null != t) {
                try {
                    return tt.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
        function zt(t, e) {
            return t === e || t != t && e != e
        }
        (yt && $t(new yt(new ArrayBuffer(1))) != _ || dt && $t(new dt) != l || vt && $t(vt.resolve()) != y || gt && $t(new gt) != v || bt && $t(new bt) != m) && ($t = function(t) {
            var e = rt.call(t)
              , r = e == p ? t.constructor : void 0
              , n = r ? qt(r) : void 0;
            if (n)
                switch (n) {
                case wt:
                    return _;
                case _t:
                    return l;
                case jt:
                    return y;
                case kt:
                    return v;
                case xt:
                    return m
                }
            return e
        }
        );
        var Wt = Array.isArray;
        function Yt(t) {
            return null != t && function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
            }(t.length) && !Xt(t)
        }
        var Ht = ht || function() {
            return !1
        }
        ;
        function Xt(t) {
            var e = Jt(t) ? rt.call(t) : "";
            return e == s || e == f
        }
        function Jt(e) {
            var r = t(e);
            return !!e && ("object" == r || "function" == r)
        }
        function Kt(t) {
            return Yt(t) ? Rt(t) : function(t) {
                if (!Vt(t))
                    return pt(t);
                var e = [];
                for (var r in Object(t))
                    et.call(t, r) && "constructor" != r && e.push(r);
                return e
            }(t)
        }
        e.exports = function(t) {
            return Ft(t, !0, !0)
        }
    }(u, u.exports);
    var c, s, f, l, h = u.exports, p = function() {
        var t = r(regeneratorRuntime.mark((function t(e, r, n, o) {
            var i, a, u, c, s, f, l, h, p, y = arguments;
            return regeneratorRuntime.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        for (i = y.length > 4 && void 0 !== y[4] ? y[4] : 1,
                        a = e.match(/%([0-9]+)?d/)[0],
                        u = a.match(/[0-9]+/),
                        c = u ? +u[0] : 0,
                        s = [],
                        f = function(t) {
                            return new Promise((function(e) {
                                var r = new XMLHttpRequest;
                                r.responseType = "arraybuffer",
                                r.onload = function() {
                                    return e(new DataView(r.response))
                                }
                                ,
                                r.open("GET", t),
                                r.send()
                            }
                            ))
                        }
                        ,
                        l = n; l <= o; l += i) {
                            for (h = l.toString(); h.length < c; )
                                h = "0" + h;
                            s.push(f(r + e.replace(/%([0-9]+)?d/, h)))
                        }
                        return t.next = 9,
                        Promise.all(s);
                    case 9:
                        return p = t.sent,
                        t.abrupt("return", p);
                    case 11:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function(e, r, n, o) {
            return t.apply(this, arguments)
        }
    }(), y = function() {
        var t = null
          , e = document.createElement("input");
        e.type = "file",
        e.webkitdirectory = !0,
        e.customFileReaderCallback = function() {}
        ;
        var n = function(t) {
            return new Promise((function(e) {
                var r = new FileReader;
                r.onload = function() {
                    e(new DataView(r.result))
                }
                ,
                r.readAsArrayBuffer(t)
            }
            ))
        };
        return e.addEventListener("change", function() {
            var o = r(regeneratorRuntime.mark((function r(o) {
                var a, u, c, s, f, l;
                return regeneratorRuntime.wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            a = e.files,
                            u = a[0].webkitRelativePath.split("/").shift(),
                            (c = []).dirName = u,
                            s = i(a),
                            r.prev = 5,
                            s.s();
                        case 7:
                            if ((f = s.n()).done) {
                                r.next = 18;
                                break
                            }
                            if (l = f.value,
                            "string" != typeof t || l.name.split(".").pop() == t) {
                                r.next = 11;
                                break
                            }
                            return r.abrupt("continue", 16);
                        case 11:
                            return r.t0 = c,
                            r.next = 14,
                            n(l);
                        case 14:
                            r.t1 = r.sent,
                            r.t0.push.call(r.t0, r.t1);
                        case 16:
                            r.next = 7;
                            break;
                        case 18:
                            r.next = 23;
                            break;
                        case 20:
                            r.prev = 20,
                            r.t2 = r.catch(5),
                            s.e(r.t2);
                        case 23:
                            return r.prev = 23,
                            s.f(),
                            r.finish(23);
                        case 26:
                            "function" == typeof e.customFileReaderCallback && e.customFileReaderCallback(c);
                        case 27:
                        case "end":
                            return r.stop()
                        }
                }
                ), r, null, [[5, 20, 23, 26]])
            }
            )));
            return function(t) {
                return o.apply(this, arguments)
            }
        }()),
        e.addEventListener("click", (function(t) {
            e.value = null
        }
        )),
        {
            select: function(t) {
                e.customFileReaderCallback = t,
                e.click()
            },
            set extCheck(e) {
                t = e
            }
        }
    }(), d = (c = new WeakMap,
    s = function(t, e) {
        var r = c.get(t);
        return void 0 === r ? void 0 : r[e]
    }
    ,
    f = function(t, e, r) {
        var n = c.get(t);
        if (void 0 === n) {
            var o = {};
            return o[e] = r,
            void c.set(t, o)
        }
        n[e] = r,
        c.set(t, n)
    }
    ,
    l = "https://cdn.jsdelivr.net/npm/daikon@1.2.42/release/current/daikon-min.js",
    function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            f(this, "rawBuf", null),
            f(this, "series", new daikon.Series),
            f(this, "rawData", null),
            f(this, "octRawData", null)
        }
        var e, r, o;
        return e = t,
        r = [{
            key: "readSeries",
            value: function(t, e, r, n, o, i) {
                var a = this;
                p(t, e, r, n, o).then((function(t) {
                    f(a, "rawBuf", t),
                    "function" == typeof i && i()
                }
                ))
            }
        }, {
            key: "readSeriesFromDir",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , e = arguments.length > 1 ? arguments[1] : void 0
                  , r = this;
                "string" == typeof t && (y.extCheck = t),
                y.select((function(t) {
                    f(r, "rawBuf", t),
                    "function" == typeof e && e()
                }
                ))
            }
        }, {
            key: "build",
            value: function() {
                var t, e = s(this, "rawBuf"), r = s(this, "series"), n = i(e);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var o = t.value
                          , a = daikon.Series.parseImage(o);
                        r.addImage(a)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                r.buildSeries()
            }
        }, {
            key: "concatnate",
            value: function(t) {
                var e = s(this, "series")
                  , r = h(e)
                  , n = this;
                r.concatenateImageData(null, (function(e) {
                    f(n, "rawData", e),
                    "function" == typeof t && t()
                }
                ))
            }
        }, {
            key: "getDim",
            value: function() {
                var t = s(this, "series");
                return {
                    x: t.images[0].getRows(),
                    y: t.images[0].getCols(),
                    z: t.images.length
                }
            }
        }, {
            key: "renderPixel",
            value: function(t, e, r, n) {
                return void 0 === s(this, "series").images[e] ? console.error("Image Not Found") : console.error("The last version had the implementation, but I took it out")
            }
        }, {
            key: "getImagePixel",
            value: function(t) {
                var e = s(this, "series");
                return void 0 === e.images[t] ? console.error("Image Not Found") : h(e.images[t].getRawData())
            }
        }, 
        {
            key: "getImage",
            value: function(t) {
                var e = s(this, "series");
                return void 0 === e.images[t] ? console.error("Image Not Found") : h(e.images[t].getRawData())
            }
        }, 
        {
            key: "series",
            get: function() {
                return s(this, "series")
            }
        }, {
            key: "cloneSeries",
            get: function() {
                return h(s(this, "series"))
            }
        }, {
            key: "rawData",
            get: function() {
                return s(this, "rawData")
            }
        }, {
            key: "bitDepth16",
            get: function() {
                return console.error("The last version had the implementation, but I took it out")
            }
        }, {
            key: "bitDepth8",
            get: function() {
                return console.error("The last version had the implementation, but I took it out")
            }
        }],
        o = [{
            key: "daikonCDN",
            get: function() {
                return l
            },
            set: function(t) {
                l = t
            }
        }, {
            key: "isInstalled",
            get: function() {
                return void 0 !== window.daikon && void 0 !== window.daikon.CompressionUtils
            }
        }, {
            key: "installLibrary",
            value: function(t) {
                var e = document.createElement("script");
                e.src = l,
                document.head.appendChild(e),
                "function" == typeof t && e.addEventListener("load", t)
            }
        }, {
            key: "downloadData",
            value: function(t, e) {
                !function(t, e) {
                    var r = new Blob([e],{
                        type: "application/octet-stream"
                    })
                      , n = document.createElement("a");
                    n.download = t,
                    n.href = URL.createObjectURL(r),
                    n.click()
                }(t, e)
            }
        }],
        r && n(e.prototype, r),
        o && n(e, o),
        t
    }());
    return d
}
));