! function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = n, i
        }
    }
}((function() {
    function extend() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }
    return function init(e) {
        function api(t, n, i) {
            var r;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = extend({
                        path: "/"
                    }, api.defaults, i)).expires) {
                        var o = new Date;
                        o.setMilliseconds(o.getMilliseconds() + 864e5 * i.expires), i.expires = o
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        r = JSON.stringify(n), /^[\{\[]/.test(r) && (n = r)
                    } catch (e) {}
                    n = e.write ? e.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var a in i) i[a] && (s += "; " + a, !0 !== i[a] && (s += "=" + i[a]));
                    return document.cookie = t + "=" + n + s
                }
                t || (r = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, f = 0; f < u.length; f++) {
                    var p = u[f].split("="),
                        d = p.slice(1).join("=");
                    this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                    try {
                        var l = p[0].replace(c, decodeURIComponent);
                        if (d = e.read ? e.read(d, l) : e(d, l) || d.replace(c, decodeURIComponent), this.json) try {
                            d = JSON.parse(d)
                        } catch (e) {}
                        if (t === l) {
                            r = d;
                            break
                        }
                        t || (r[l] = d)
                    } catch (e) {}
                }
                return r
            }
        }
        return api.set = api, api.get = function(e) {
            return api.call(api, e)
        }, api.getJSON = function() {
            return api.apply({
                json: !0
            }, [].slice.call(arguments))
        }, api.defaults = {}, api.remove = function(e, t) {
            api(e, "", extend(t, {
                expires: -1
            }))
        }, api.withConverter = init, api
    }((function() {}))
})),
    /**
     * @license jQuery webcam plugin v1.0.0 09/12/2010
     * http://www.xarg.org/project/jquery-webcam-plugin/
     *
     * Copyright (c) 2010, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
    function(e) {
        var t = {
            extern: null,
            append: !0,
            width: 320,
            height: 240,
            mode: "callback",
            swffile: "jscam.swf",
            quality: 85,
            debug: function() {},
            onCapture: function() {},
            onTick: function() {},
            onSave: function() {},
            onLoad: function() {}
        };
        window.webcam = t, e.fn.webcam = function(n) {
            if ("object" == typeof n)
                for (var i in t) void 0 !== n[i] && (t[i] = n[i]);
            var r = '<object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="' + t.swffile + '" width="' + t.width + '" height="' + t.height + '"><param name="movie" value="' + t.swffile + '" /><param name="FlashVars" value="mode=' + t.mode + "&amp;quality=" + t.quality + '" /><param name="allowScriptAccess" value="always" /></object>';
            null !== t.extern ? e(t.extern)[t.append ? "append" : "html"](r) : this[t.append ? "append" : "html"](r);
            var o = 3;
            (_register = function() {
                var e = document.getElementById("XwebcamXobjectX");
                e && void 0 !== e.capture ? (t.capture = function(t) {
                    try {
                        return e.capture(t)
                    } catch (e) {}
                }, t.save = function(t) {
                    try {
                        return e.save(t)
                    } catch (e) {}
                }, t.setCamera = function(t) {
                    try {
                        return e.setCamera(t)
                    } catch (e) {}
                }, t.getCameraList = function() {
                    try {
                        return e.getCameraList()
                    } catch (e) {}
                }, t.pauseCamera = function() {
                    try {
                        return e.pauseCamera()
                    } catch (e) {}
                }, t.resumeCamera = function() {
                    try {
                        return e.resumeCamera()
                    } catch (e) {}
                }, t.onLoad()) : 0 == o ? t.debug("error", "Flash movie not yet registered!") : (o--, window.setTimeout(_register, 1e3 * (4 - o)))
            })()
        }
    }(jQuery),
    function(e) {
        "undefined" != typeof module && void 0 !== module.exports ? module.exports = e : window.aspect = e
    }(function() {
        var threeParams = function() {
            if (3 !== arguments.length) throw new Error("Aspect requires three parameters.");
            if ("object" != typeof arguments[0]) throw new Error('Aspect requires an object-type parameter for "object".');
            if ("string" != typeof arguments[1]) throw new Error('Aspect requires an string-type parameter for "method".');
            if ("function" != typeof arguments[2]) throw new Error('Aspect requires an function-type parameter for "advice".')
        };
        return {
            before: function(e, t, n) {
                threeParams.apply(this, arguments);
                var i = e[t];
                e[t] = function() {
                    return n.apply(null, arguments), i.apply(null, arguments)
                }
            },
            after: function(e, t, n) {
                threeParams.apply(this, arguments);
                var i = e[t];
                e[t] = function() {
                    var e, t = Array.prototype.slice.call(arguments, 0);
                    try {
                        return e = i.apply(null, arguments), t.unshift(e), n.apply(null, t), e
                    } catch (i) {
                        throw e = i, t.unshift(e), n.apply(null, t), i
                    }
                }
            },
            afterReturn: function(e, t, n) {
                threeParams.apply(this, arguments);
                var i = e[t];
                e[t] = function() {
                    var e = i.apply(null, arguments),
                        t = Array.prototype.slice.call(arguments, 0);
                    return t.unshift(e), n.apply(null, t), e
                }
            },
            afterThrow: function(e, t, n) {
                threeParams.apply(this, arguments);
                var i = e[t];
                e[t] = function() {
                    try {
                        return i.apply(null, arguments)
                    } catch (t) {
                        var e = Array.prototype.slice.call(arguments, 0);
                        throw e.unshift(t), n.apply(null, e), t
                    }
                }
            },
            around: function(e, t, n) {
                threeParams.apply(this, arguments);
                var i = e[t];
                e[t] = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return e.unshift(i), n.apply(null, e)
                }
            }
        }
    }());
var CryptoJS = CryptoJS || function(e, t) {
    var n = {},
        i = n.lib = {},
        r = i.Base = function() {
            function F() {}
            return {
                extend: function(e) {
                    F.prototype = this;
                    var t = new F;
                    return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
        }(),
        o = i.WordArray = r.extend({
            init: function(e, t) {
                e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
            },
            toString: function(e) {
                return (e || a).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    n = e.words,
                    i = this.sigBytes,
                    r = e.sigBytes;
                if (this.clamp(), i % 4)
                    for (var o = 0; o < r; o++) {
                        var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                    } else if (n.length > 65535)
                    for (o = 0; o < r; o += 4) t[i + o >>> 2] = n[o >>> 2];
                else t.push.apply(t, n);
                return this.sigBytes += r, this
            },
            clamp: function() {
                var t = this.words,
                    n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
            },
            clone: function() {
                var e = r.clone.call(this);
                return e.words = this.words.slice(0), e
            },
            random: function(t) {
                for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                return new o.init(n, t)
            }
        }),
        s = n.enc = {},
        a = s.Hex = {
            stringify: function(e) {
                for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                    var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                }
                return i.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new o.init(n, t / 2)
            }
        },
        u = s.Latin1 = {
            stringify: function(e) {
                for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                    var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    i.push(String.fromCharCode(o))
                }
                return i.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                return new o.init(n, t)
            }
        },
        c = s.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(u.stringify(e)))
                } catch (e) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return u.parse(unescape(encodeURIComponent(e)))
            }
        },
        f = i.BufferedBlockAlgorithm = r.extend({
            reset: function() {
                this._data = new o.init, this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
            },
            _process: function(t) {
                var n = this._data,
                    i = n.words,
                    r = n.sigBytes,
                    s = this.blockSize,
                    a = r / (4 * s),
                    u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                    c = e.min(4 * u, r);
                if (u) {
                    for (var f = 0; f < u; f += s) this._doProcessBlock(i, f);
                    var p = i.splice(0, u);
                    n.sigBytes -= c
                }
                return new o.init(p, c)
            },
            clone: function() {
                var e = r.clone.call(this);
                return e._data = this._data.clone(), e
            },
            _minBufferSize: 0
        }),
        p = (i.Hasher = f.extend({
            cfg: r.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e), this.reset()
            },
            reset: function() {
                f.reset.call(this), this._doReset()
            },
            update: function(e) {
                return this._append(e), this._process(), this
            },
            finalize: function(e) {
                return e && this._append(e), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(e) {
                return function(t, n) {
                    return new e.init(n).finalize(t)
                }
            },
            _createHmacHelper: function(e) {
                return function(t, n) {
                    return new p.HMAC.init(e, n).finalize(t)
                }
            }
        }), n.algo = {});
    return n
}(Math);
! function(e) {
    var t = CryptoJS,
        n = t.lib,
        i = n.WordArray,
        r = n.Hasher,
        o = t.algo,
        s = [],
        a = [];
    ! function() {
        function isPrime(t) {
            for (var n = e.sqrt(t), i = 2; i <= n; i++)
                if (!(t % i)) return !1;
            return !0
        }
        function getFractionalBits(e) {
            return 4294967296 * (e - (0 | e)) | 0
        }
        for (var t = 2, n = 0; n < 64;) isPrime(t) && (n < 8 && (s[n] = getFractionalBits(e.pow(t, .5))), a[n] = getFractionalBits(e.pow(t, 1 / 3)), n++), t++
    }();
    var u = [],
        c = o.SHA256 = r.extend({
            _doReset: function() {
                this._hash = new i.init(s.slice(0))
            },
            _doProcessBlock: function(e, t) {
                for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], c = n[4], f = n[5], p = n[6], d = n[7], l = 0; l < 64; l++) {
                    if (l < 16) u[l] = 0 | e[t + l];
                    else {
                        var h = u[l - 15],
                            m = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                            g = u[l - 2],
                            w = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                        u[l] = m + u[l - 7] + w + u[l - 16]
                    }
                    var v = i & r ^ i & o ^ r & o,
                        y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                        S = d + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & f ^ ~c & p) + a[l] + u[l];
                    d = p, p = f, f = c, c = s + S | 0, s = o, o = r, r = i, i = S + (y + v) | 0
                }
                n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0, n[5] = n[5] + f | 0, n[6] = n[6] + p | 0, n[7] = n[7] + d | 0
            },
            _doFinalize: function() {
                var t = this._data,
                    n = t.words,
                    i = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(i / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * n.length, this._process(), this._hash
            },
            clone: function() {
                var e = r.clone.call(this);
                return e._hash = this._hash.clone(), e
            }
        });
    t.SHA256 = r._createHelper(c), t.HmacSHA256 = r._createHmacHelper(c)
}(Math),
    function() {
        var e = CryptoJS,
            t = e.lib.Base,
            n = e.enc.Utf8;
        e.algo.HMAC = t.extend({
            init: function(e, t) {
                e = this._hasher = new e.init, "string" == typeof t && (t = n.parse(t));
                var i = e.blockSize,
                    r = 4 * i;
                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                for (var o = this._oKey = t.clone(), s = this._iKey = t.clone(), a = o.words, u = s.words, c = 0; c < i; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                o.sigBytes = s.sigBytes = r, this.reset()
            },
            reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey)
            },
            update: function(e) {
                return this._hasher.update(e), this
            },
            finalize: function(e) {
                var t = this._hasher,
                    n = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(n))
            }
        })
    }(),
    function(e) {
        var t, n, i, r = ["startTimer", "stopTimer", "sendTimer", "sendMetric", "setPageGroup", "getPageGroup", "resetPageGroup", "setABTest", "getABTest", "resetABTest", "setDimension", "resetDimension", "setSessionID", "getSessionID", "startSession", "incrementSessionLength", "setSessionLength", "getSessionLength", "setSessionStart", "getSessionStart", "transferBoomerangSession", "subscribe"],
            o = ["before_beacon", "beacon"],
            s = 0,
            a = !1,
            u = !1,
            c = +new Date;
        function fetchUrl(n, i) {
            t || ("function" == typeof XDomainRequest || "object" == typeof XDomainRequest ? (a = !0, t = function() {
                return new XDomainRequest
            }) : "function" == typeof XMLHttpRequest || "object" == typeof XMLHttpRequest ? t = function() {
                return new XMLHttpRequest
            } : "undefined" != typeof Ti && Ti.Network && "function" == typeof Ti.Network.createHTTPClient ? t = Ti.Network.createHTTPClient : "function" == typeof require ? t = function() {
                return new(0, require("xmlhttprequest").XMLHttpRequest)
            } : e && void 0 !== e.ActiveXObject && (t = function() {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            }));
            var r = t();
            "function" == typeof i && (a ? r.onload = function() {
                i(r.responseText)
            } : r.onreadystatechange = function() {
                4 === r.readyState && i(r.responseText)
            }), r.open("GET", n, !0), r.send()
        }
        if (n = "undefined" != typeof process && "function" == typeof process.nextTick ? process.nextTick.bind(process) : void 0 !== e ? e.setImmediate ? e.setImmediate.bind(e) : e.msSetImmediate ? e.msSetImmediate.bind(e) : e.webkitSetImmediate ? e.webkitSetImmediate.bind(e) : e.mozSetImmediate ? e.mozSetImmediate.bind(e) : function(e) {
            setTimeout(e, 10)
        } : function(e) {
            setTimeout(e, 10)
        }, void 0 !== e)
            if (void 0 !== e.performance && "function" == typeof e.performance.now) u = e.performance.now.bind(e.performance);
            else if (void 0 !== e.performance) {
                var f = ["webkitNow", "msNow", "mozNow"];
                for (s = 0; s < f.length; s++)
                    if ("function" == typeof e.performance[f[s]]) {
                        u = e.performance[f[s]];
                        break
                    }
            }
        function warn(e) {
            "object" == typeof console && console.warn
        }
        function createApp(t, i, r) {
            r = r || {};
            var a = t,
                c = i,
                f = "//c.go-mpulse.net/api/v2/config.json",
                p = !1,
                d = {},
                l = !1,
                h = !1,
                m = [],
                g = !1,
                w = !1,
                v = !1,
                y = {},
                S = {},
                b = !1,
                x = {},
                _ = {},
                C = {},
                B = -1,
                T = u(),
                O = 0,
                D = {};
            for (s = 0; s < o.length; s++) D[o[s]] = [];
            function ensureUrlPrefix(t) {
                return -1 !== t.indexOf("http://") || -1 !== t.indexOf("https://") || (p ? t = "https:" + t : void 0 === e ? -1 === t.indexOf("http:") && (t = "http:" + t) : void 0 !== e && "file:" === e.location.protocol && -1 === t.indexOf("http:") && (t = "http:" + t)), t
            }
            function getConfigUrl() {
                var e = f,
                    t = +new Date;
                return -1 !== e.indexOf("?") ? e += "&" : e += "?", e += "key=" + a, e += "&t=" + t, ensureUrlPrefix(e += "&s=" + function signConfig(e, t, n) {
                    var i = void 0 !== CryptoJS && CryptoJS.HmacSHA256;
                    return "function" != typeof i && "function" == typeof require && (i = require("crypto-js/hmac-sha256")), "function" != typeof i ? (warn(), "") : i("key=" + e + "&t=" + n, t).toString()
                }(a, c, t))
            }
            function parseConfig(e) {
                try {
                    var t = JSON.parse(e);
                    for (var i in t) t.hasOwnProperty(i) && (d[i] = t[i])
                } catch (e) {
                    return void(h = !1)
                }
                if (b || startSession(d.session_id), x = {}, C = {}, S = {}, d.PageParams) {
                    var r = d.PageParams.customMetrics,
                        o = d.PageParams.customTimers,
                        a = d.PageParams.customDimensions;
                    if (r)
                        for (s = 0; s < r.length; s++) {
                            var u = r[s];
                            x[u.name] = u.label
                        }
                    if (o)
                        for (s = 0; s < o.length; s++) {
                            var c = o[s];
                            C[c.name] = c.label
                        }
                    if (a)
                        for (s = 0; s < a.length; s++) {
                            var f = a[s];
                            S[f.name] = f.label
                        }
                }
                h = !0, l = !0, setTimeout(fetchConfig, 3e5), n(processQueue)
            }
            function fetchConfig() {
                if ("" !== f) {
                    var e = getConfigUrl();
                    l && (e += "&r="), fetchUrl(e, parseConfig)
                }
            }
            function getCurrentDimensions() {
                var e = {};
                for (var t in y) y.hasOwnProperty(t) && (e[t] = y[t]);
                return e
            }
            function addToQueue(e, t, n) {
                m.push({
                    type: e,
                    name: t,
                    value: n,
                    group: w,
                    ab: v,
                    dimensions: getCurrentDimensions(),
                    when: +new Date
                })
            }
            function processQueue(e) {
                if (0 !== m.length)
                    if (h) {
                        var t = m.shift(),
                            i = t.type,
                            r = t.name,
                            o = t.value,
                            s = {};
                        for (var a in "boolean" != typeof t.group && (s["h.pg"] = t.group), "boolean" != typeof t.ab && (s["h.ab"] = t.ab), s["rt.tstart"] = s["rt.end"] = t.when, t.dimensions) t.dimensions.hasOwnProperty(a) && (void 0 !== S[a] ? s[S[a]] = t.dimensions[a] : warn());
                        "metric" === i ? void 0 !== x[r] ? (s[x[r]] = o, sendBeacon(s)) : warn() : "timer" === i && (void 0 !== C[r] ? (s.t_other = C[r] + "|" + o, sendBeacon(s)) : warn()), n(processQueue)
                    } else g && !e || (g = !0, setTimeout((function() {
                        processQueue(!0)
                    }), 5e3))
            }
            function sendBeacon(e) {
                e.d = d.site_domain, e["h.key"] = d["h.key"], e["h.d"] = d["h.d"], e["h.cr"] = d["h.cr"], e["h.t"] = d["h.t"], e["http.initiator"] = "api", e["rt.start"] = "api", !1 !== b && (e["rt.si"] = b, e["rt.ss"] = T, e["rt.sl"] = O), e.api = 1, e["api.v"] = 2, e["api.l"] = "js", e["api.lv"] = "1.2.0", fireEvent("before_beacon", e);
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + (void 0 === e[n] || null === e[n] ? "" : encodeURIComponent(e[n])));
                var i = function getBeaconUrl() {
                        return ensureUrlPrefix(d.beacon_url)
                    }(),
                    r = i + (i.indexOf("?") > -1 ? "&" : "?") + t.join("&");
                fireEvent("beacon", e), fetchUrl(r)
            }
            function sendTimer(e, t) {
                return "string" != typeof e || "number" != typeof t || t < 0 ? -1 : (addToQueue("timer", e, t = Math.round(t)), n(processQueue), t)
            }
            function resetDimension(e) {
                void 0 !== e && void 0 !== y[e] && delete y[e]
            }
            function setSessionID(e) {
                "string" != typeof e && "number" != typeof e || ("number" == typeof e && (e = "" + e), b = e)
            }
            function getSessionID() {
                return b
            }
            function startSession(e) {
                return setSessionID(e || function generateSessionID() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    }))
                }()), setSessionLength(0), setSessionStart(u()), getSessionID()
            }
            function setSessionLength(e) {
                "number" != typeof e || e < 0 || (O = e)
            }
            function setSessionStart(e) {
                "number" != typeof e || e < 0 || (T = e)
            }
            function fireEvent(e, t) {
                for (var n = 0; n < D[e].length; n++) D[e][n](t)
            }
            return void 0 !== r.configUrl && (f = r.configUrl), r.forceSSL && (p = !0), fetchConfig(), {
                startTimer: function startTimer(e) {
                    return "string" != typeof e ? -1 : (B++, _[B] = {
                        time: u(),
                        name: e
                    }, B)
                },
                stopTimer: function stopTimer(e) {
                    if ("number" != typeof e || e < 0) return -1;
                    var t = _[e],
                        n = 0;
                    return t ? (n = Math.round(u() - t.time), sendTimer(t.name, n), delete _[e], n) : -1
                },
                sendTimer: sendTimer,
                sendMetric: function sendMetric(e, t) {
                    "string" == typeof e && (void 0 !== t && "number" != typeof t || (void 0 === t && (t = 1), addToQueue("metric", e, t), n(processQueue)))
                },
                setPageGroup: function setPageGroup(e) {
                    "string" == typeof e && (w = e)
                },
                getPageGroup: function getPageGroup() {
                    return w
                },
                resetPageGroup: function resetPageGroup() {
                    w = !1
                },
                setABTest: function setABTest(e) {
                    return "string" == typeof e && (!1 !== /^[a-zA-Z0-9_ -]{1,25}$/.test(e) && (v = e, !0))
                },
                getABTest: function getABTest() {
                    return v
                },
                resetABTest: function resetABTest() {
                    v = !1
                },
                setDimension: function setDimension(e, t) {
                    void 0 !== e && (void 0 !== t ? y[e] = t : resetDimension(e))
                },
                resetDimension: resetDimension,
                setSessionID: setSessionID,
                getSessionID: getSessionID,
                startSession: startSession,
                incrementSessionLength: function incrementSessionLength() {
                    O++
                },
                setSessionLength: setSessionLength,
                getSessionLength: function getSessionLength() {
                    return O
                },
                setSessionStart: setSessionStart,
                getSessionStart: function getSessionStart() {
                    return T
                },
                transferBoomerangSession: function transferBoomerangSession(t) {
                    return void 0 === t && void 0 !== e && (t = e), !!(void 0 !== t && t.BOOMR && t.BOOMR.session && t.BOOMR.session.ID && t.BOOMR.session.start && t.BOOMR.session.length) && (setSessionID(t.BOOMR.session.ID + "-" + Math.round(t.BOOMR.session.start / 1e3).toString(36)), setSessionLength(t.BOOMR.session.length), setSessionStart(t.BOOMR.session.start), !0)
                },
                subscribe: function subscribe(e, t) {
                    D.hasOwnProperty(e) && "function" == typeof t && D[e].push(t)
                },
                parseConfig: parseConfig
            }
        }
        void 0 !== e && "performance" in e && e.performance && e.performance.timing && e.performance.timing.navigationStart && (c = e.performance.timing.navigationStart), u || (u = "undefined" != typeof Date && Date.now ? function() {
            return Date.now() - c
        } : function() {
            return +new Date - c
        });
        var p, d, l = !1,
            h = {};
        function nop() {}
        for (void 0 !== e && (d = (p = e).mPulse), i = {
            version: "1.2.0",
            noConflict: function noConflict() {
                return p.mPulse = d, i
            },
            init: function init(e, t, n) {
                if (n = n || {}, void 0 !== e) {
                    if (void 0 !== t) {
                        if (void 0 !== n.name && void 0 !== h[n.name]) return h[n.name];
                        var o = createApp(e, t, n);
                        if (!1 === l) {
                            l = o;
                            for (var s = 0; s < r.length; s++) {
                                var a = r[s];
                                i[a] = l[a]
                            }
                        }
                        return void 0 !== n.name && (h[n.name] = o), o
                    }
                    warn()
                } else warn()
            },
            getApp: function getApp(e) {
                return h[e]
            },
            stop: function stop(e) {
                void 0 !== h[e] && delete h[e]
            },
            now: u
        }, s = 0; s < r.length; s++) i[r[s]] = nop;
        "function" == typeof define && define.amd ? define([], (function() {
            return i
        })) : "undefined" != typeof module && module.exports ? module.exports = i : void 0 !== p && (p.mPulse = i)
    }("undefined" != typeof window ? window : void 0),
    function() {
        if ("function" == typeof window.CustomEvent) return !1;
        function CustomEvent(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent
    }(),
    /**
     * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
     * @version v5.2.10
     * @link https://github.com/ten1seven/what-input
     * @license MIT
     */
    function webpackUniversalModuleDefinition(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("whatInput", [], t) : "object" == typeof exports ? exports.whatInput = t() : e.whatInput = t()
    }(this, (function() {
        return function(e) {
            var t = {};
            function __webpack_require__(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(i.exports, i, i.exports, __webpack_require__), i.loaded = !0, i.exports
            }
            return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.p = "", __webpack_require__(0)
        }([function(e, t) {
            e.exports = function() {
                if ("undefined" == typeof document || "undefined" == typeof window) return {
                    ask: function ask() {
                        return "initial"
                    },
                    element: function element() {
                        return null
                    },
                    ignoreKeys: function ignoreKeys() {},
                    specificKeys: function specificKeys() {},
                    registerOnChange: function registerOnChange() {},
                    unRegisterOnChange: function unRegisterOnChange() {}
                };
                var e = document.documentElement,
                    t = null,
                    n = "initial",
                    i = n,
                    r = Date.now(),
                    o = "false",
                    s = ["button", "input", "select", "textarea"],
                    a = [],
                    u = [16, 17, 18, 91, 93],
                    c = [],
                    f = {
                        keydown: "keyboard",
                        keyup: "keyboard",
                        mousedown: "mouse",
                        mousemove: "mouse",
                        MSPointerDown: "pointer",
                        MSPointerMove: "pointer",
                        pointerdown: "pointer",
                        pointermove: "pointer",
                        touchstart: "touch",
                        touchend: "touch"
                    },
                    p = !1,
                    d = {
                        x: null,
                        y: null
                    },
                    l = {
                        2: "touch",
                        3: "touch",
                        4: "mouse"
                    },
                    h = !1;
                try {
                    var m = Object.defineProperty({}, "passive", {
                        get: function get() {
                            h = !0
                        }
                    });
                    window.addEventListener("test", null, m)
                } catch (e) {}
                var g = function addListeners() {
                        var e = !!h && {
                            passive: !0
                        };
                        document.addEventListener("DOMContentLoaded", w), window.PointerEvent ? (window.addEventListener("pointerdown", v), window.addEventListener("pointermove", S)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", v), window.addEventListener("MSPointerMove", S)) : (window.addEventListener("mousedown", v), window.addEventListener("mousemove", S), "ontouchstart" in window && (window.addEventListener("touchstart", v, e), window.addEventListener("touchend", v))), window.addEventListener(T(), S, e), window.addEventListener("keydown", v), window.addEventListener("keyup", v), window.addEventListener("focusin", b), window.addEventListener("focusout", x)
                    },
                    w = function setPersist() {
                        if (o = !(e.getAttribute("data-whatpersist") || "false" === document.body.getAttribute("data-whatpersist"))) try {
                            window.sessionStorage.getItem("what-input") && (n = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (i = window.sessionStorage.getItem("what-intent"))
                        } catch (e) {}
                        y("input"), y("intent")
                    },
                    v = function setInput(e) {
                        var t = e.which,
                            r = f[e.type];
                        "pointer" === r && (r = C(e));
                        var o = !c.length && -1 === u.indexOf(t),
                            a = c.length && -1 !== c.indexOf(t),
                            p = "keyboard" === r && t && (o || a) || "mouse" === r || "touch" === r;
                        if (B(r) && (p = !1), p && n !== r && (_("input", n = r), y("input")), p && i !== r) {
                            var d = document.activeElement;
                            d && d.nodeName && (-1 === s.indexOf(d.nodeName.toLowerCase()) || "button" === d.nodeName.toLowerCase() && !k(d, "form")) && (_("intent", i = r), y("intent"))
                        }
                    },
                    y = function doUpdate(t) {
                        e.setAttribute("data-what" + t, "input" === t ? n : i), O(t)
                    },
                    S = function setIntent(e) {
                        var t = f[e.type];
                        "pointer" === t && (t = C(e)), D(e), (!p && !B(t) || p && "wheel" === e.type || "mousewheel" === e.type || "DOMMouseScroll" === e.type) && i !== t && (_("intent", i = t), y("intent"))
                    },
                    b = function setElement(n) {
                        n.target.nodeName ? (t = n.target.nodeName.toLowerCase(), e.setAttribute("data-whatelement", t), n.target.classList && n.target.classList.length && e.setAttribute("data-whatclasses", n.target.classList.toString().replace(" ", ","))) : x()
                    },
                    x = function clearElement() {
                        t = null, e.removeAttribute("data-whatelement"), e.removeAttribute("data-whatclasses")
                    },
                    _ = function persistInput(e, t) {
                        if (o) try {
                            window.sessionStorage.setItem("what-" + e, t)
                        } catch (e) {}
                    },
                    C = function pointerType(e) {
                        return "number" == typeof e.pointerType ? l[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType
                    },
                    B = function validateTouch(e) {
                        var t = Date.now(),
                            i = "mouse" === e && "touch" === n && t - r < 200;
                        return r = t, i
                    },
                    T = function detectWheel() {
                        return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                    },
                    O = function fireFunctions(e) {
                        for (var t = 0, r = a.length; t < r; t++) a[t].type === e && a[t].fn.call(void 0, "input" === e ? n : i)
                    },
                    D = function detectScrolling(e) {
                        d.x !== e.screenX || d.y !== e.screenY ? (p = !1, d.x = e.screenX, d.y = e.screenY) : p = !0
                    },
                    k = function checkClosest(e, t) {
                        var n = window.Element.prototype;
                        if (n.matches || (n.matches = n.msMatchesSelector || n.webkitMatchesSelector), n.closest) return e.closest(t);
                        do {
                            if (e.matches(t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    };
                return "addEventListener" in window && Array.prototype.indexOf && function setUp() {
                    f[T()] = "mouse", g()
                }(), {
                    ask: function ask(e) {
                        return "intent" === e ? i : n
                    },
                    element: function element() {
                        return t
                    },
                    ignoreKeys: function ignoreKeys(e) {
                        u = e
                    },
                    specificKeys: function specificKeys(e) {
                        c = e
                    },
                    registerOnChange: function registerOnChange(e, t) {
                        a.push({
                            fn: e,
                            type: t || "input"
                        })
                    },
                    unRegisterOnChange: function unRegisterOnChange(e) {
                        var t = function objPos(e) {
                            for (var t = 0, n = a.length; t < n; t++)
                                if (a[t].fn === e) return t
                        }(e);
                        (t || 0 === t) && a.splice(t, 1)
                    },
                    clearStorage: function clearStorage() {
                        window.sessionStorage.clear()
                    }
                }
            }()
        }])
    }));