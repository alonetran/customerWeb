/*! Video.js v4.4.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function () {
  var b = void 0,
    f = !0,
    h = null,
    l = !1;
  function m() {
    return function () {};
  }
  function p(a) {
    return function () {
      return this[a];
    };
  }
  function r(a) {
    return function () {
      return a;
    };
  }
  var t;
  document.createElement("video");
  document.createElement("audio");
  document.createElement("track");
  function u(a, c, d) {
    if ("string" === typeof a) {
      0 === a.indexOf("#") && (a = a.slice(1));
      if (u.va[a]) return u.va[a];
      a = u.u(a);
    }
    if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
    return a.player || new u.Player(a, c, d);
  }
  var videojs = u;
  window.Vd = window.Wd = u;
  u.Qb = "4.4";
  u.Dc = "https:" == document.location.protocol ? "https://" : "https://";
  u.options = { techOrder: ["html5", "flash"], html5: {}, flash: {}, width: 300, height: 150, defaultVolume: 0, children: { mediaLoader: {}, posterImage: {}, textTrackDisplay: {}, loadingSpinner: {}, bigPlayButton: {}, controlBar: {} }, notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="https://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="https://adobe.ly/mwfN1">Adobe Flash Player</a>.' };
  "GENERATED_CDN_VSN" !== u.Qb && (videojs.options.flash.swf = u.Dc + "vjs.zencdn.net/" + u.Qb + "/video-js.swf");
  u.va = {};
  "function" === typeof define && define.amd
    ? define([], function () {
        return videojs;
      })
    : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
  u.ka = u.CoreObject = m();
  u.ka.extend = function (a) {
    var c, d;
    a = a || {};
    c = a.init || a.h || this.prototype.init || this.prototype.h || m();
    d = function () {
      c.apply(this, arguments);
    };
    d.prototype = u.k.create(this.prototype);
    d.prototype.constructor = d;
    d.extend = u.ka.extend;
    d.create = u.ka.create;
    for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
    return d;
  };
  u.ka.create = function () {
    var a = u.k.create(this.prototype);
    this.apply(a, arguments);
    return a;
  };
  u.d = function (a, c, d) {
    var e = u.getData(a);
    e.z || (e.z = {});
    e.z[c] || (e.z[c] = []);
    d.s || (d.s = u.s++);
    e.z[c].push(d);
    e.U ||
      ((e.disabled = l),
      (e.U = function (c) {
        if (!e.disabled) {
          c = u.hc(c);
          var d = e.z[c.type];
          if (d) for (var d = d.slice(0), k = 0, q = d.length; k < q && !c.oc(); k++) d[k].call(a, c);
        }
      }));
    1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.U, l) : document.attachEvent && a.attachEvent("on" + c, e.U));
  };
  u.o = function (a, c, d) {
    if (u.lc(a)) {
      var e = u.getData(a);
      if (e.z)
        if (c) {
          var g = e.z[c];
          if (g) {
            if (d) {
              if (d.s) for (e = 0; e < g.length; e++) g[e].s === d.s && g.splice(e--, 1);
            } else e.z[c] = [];
            u.dc(a, c);
          }
        } else for (g in e.z) (c = g), (e.z[c] = []), u.dc(a, c);
    }
  };
  u.dc = function (a, c) {
    var d = u.getData(a);
    0 === d.z[c].length && (delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.U, l) : document.detachEvent && a.detachEvent("on" + c, d.U));
    u.Ab(d.z) && (delete d.z, delete d.U, delete d.disabled);
    u.Ab(d) && u.sc(a);
  };
  u.hc = function (a) {
    function c() {
      return f;
    }
    function d() {
      return l;
    }
    if (!a || !a.Bb) {
      var e = a || window.event;
      a = {};
      for (var g in e) "layerX" !== g && "layerY" !== g && "keyboardEvent.keyLocation" !== g && (("returnValue" == g && e.preventDefault) || (a[g] = e[g]));
      a.target || (a.target = a.srcElement || document);
      a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
      a.preventDefault = function () {
        e.preventDefault && e.preventDefault();
        a.returnValue = l;
        a.zb = c;
      };
      a.zb = d;
      a.stopPropagation = function () {
        e.stopPropagation && e.stopPropagation();
        a.cancelBubble = f;
        a.Bb = c;
      };
      a.Bb = d;
      a.stopImmediatePropagation = function () {
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        a.oc = c;
        a.stopPropagation();
      };
      a.oc = d;
      if (a.clientX != h) {
        g = document.documentElement;
        var j = document.body;
        a.pageX = a.clientX + ((g && g.scrollLeft) || (j && j.scrollLeft) || 0) - ((g && g.clientLeft) || (j && j.clientLeft) || 0);
        a.pageY = a.clientY + ((g && g.scrollTop) || (j && j.scrollTop) || 0) - ((g && g.clientTop) || (j && j.clientTop) || 0);
      }
      a.which = a.charCode || a.keyCode;
      a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0);
    }
    return a;
  };
  u.j = function (a, c) {
    var d = u.lc(a) ? u.getData(a) : {},
      e = a.parentNode || a.ownerDocument;
    "string" === typeof c && (c = { type: c, target: a });
    c = u.hc(c);
    d.U && d.U.call(a, c);
    if (e && !c.Bb() && c.bubbles !== l) u.j(e, c);
    else if (!e && !c.zb() && ((d = u.getData(c.target)), c.target[c.type])) {
      d.disabled = f;
      if ("function" === typeof c.target[c.type]) c.target[c.type]();
      d.disabled = l;
    }
    return !c.zb();
  };
  u.T = function (a, c, d) {
    function e() {
      u.o(a, c, e);
      d.apply(this, arguments);
    }
    e.s = d.s = d.s || u.s++;
    u.d(a, c, e);
  };
  var v = Object.prototype.hasOwnProperty;
  u.e = function (a, c) {
    var d, e;
    d = document.createElement(a || "div");
    for (e in c) v.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : (d[e] = c[e]));
    return d;
  };
  u.Y = function (a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  u.k = {};
  u.k.create =
    Object.create ||
    function (a) {
      function c() {}
      c.prototype = a;
      return new c();
    };
  u.k.ra = function (a, c, d) {
    for (var e in a) v.call(a, e) && c.call(d || this, e, a[e]);
  };
  u.k.B = function (a, c) {
    if (!c) return a;
    for (var d in c) v.call(c, d) && (a[d] = c[d]);
    return a;
  };
  u.k.Vc = function (a, c) {
    var d, e, g;
    a = u.k.copy(a);
    for (d in c) v.call(c, d) && ((e = a[d]), (g = c[d]), (a[d] = u.k.Ma(e) && u.k.Ma(g) ? u.k.Vc(e, g) : c[d]));
    return a;
  };
  u.k.copy = function (a) {
    return u.k.B({}, a);
  };
  u.k.Ma = function (a) {
    return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object;
  };
  u.bind = function (a, c, d) {
    function e() {
      return c.apply(a, arguments);
    }
    c.s || (c.s = u.s++);
    e.s = d ? d + "_" + c.s : c.s;
    return e;
  };
  u.pa = {};
  u.s = 1;
  u.expando = "vdata" + new Date().getTime();
  u.getData = function (a) {
    var c = a[u.expando];
    c || ((c = a[u.expando] = u.s++), (u.pa[c] = {}));
    return u.pa[c];
  };
  u.lc = function (a) {
    a = a[u.expando];
    return !(!a || u.Ab(u.pa[a]));
  };
  u.sc = function (a) {
    var c = a[u.expando];
    if (c) {
      delete u.pa[c];
      try {
        delete a[u.expando];
      } catch (d) {
        a.removeAttribute ? a.removeAttribute(u.expando) : (a[u.expando] = h);
      }
    }
  };
  u.Ab = function (a) {
    for (var c in a) if (a[c] !== h) return l;
    return f;
  };
  u.n = function (a, c) {
    -1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c);
  };
  u.t = function (a, c) {
    var d, e;
    if (-1 != a.className.indexOf(c)) {
      d = a.className.split(" ");
      for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
      a.className = d.join(" ");
    }
  };
  u.ea = u.e("video");
  u.I = navigator.userAgent;
  u.Jc = /iPhone/i.test(u.I);
  u.Ic = /iPad/i.test(u.I);
  u.Kc = /iPod/i.test(u.I);
  u.Hc = u.Jc || u.Ic || u.Kc;
  var aa = u,
    w;
  var x = u.I.match(/OS (\d+)_/i);
  w = x && x[1] ? x[1] : b;
  aa.Hd = w;
  u.Gc = /Android/i.test(u.I);
  var ba = u,
    y;
  var z = u.I.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    A,
    B;
  z ? ((A = z[1] && parseFloat(z[1])), (B = z[2] && parseFloat(z[2])), (y = A && B ? parseFloat(z[1] + "." + z[2]) : A ? A : h)) : (y = h);
  ba.Ec = y;
  u.Lc = u.Gc && /webkit/i.test(u.I) && 2.3 > u.Ec;
  u.Tb = /Firefox/i.test(u.I);
  u.Id = /Chrome/i.test(u.I);
  u.Zb = !!("ontouchstart" in window || (window.Fc && document instanceof window.Fc));
  u.wb = function (a) {
    var c, d, e, g;
    c = {};
    if (a && a.attributes && 0 < a.attributes.length) {
      d = a.attributes;
      for (var j = d.length - 1; 0 <= j; j--) {
        e = d[j].name;
        g = d[j].value;
        if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== h ? f : l;
        c[e] = g;
      }
    }
    return c;
  };
  u.Md = function (a, c) {
    var d = "";
    document.defaultView && document.defaultView.getComputedStyle ? (d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c)) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
    return d;
  };
  u.yb = function (a, c) {
    c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a);
  };
  u.Nb = {};
  u.u = function (a) {
    0 === a.indexOf("#") && (a = a.slice(1));
    return document.getElementById(a);
  };
  u.ta = function (a, c) {
    c = c || a;
    var d = Math.floor(a % 60),
      e = Math.floor((a / 60) % 60),
      g = Math.floor(a / 3600),
      j = Math.floor((c / 60) % 60),
      k = Math.floor(c / 3600);
    if (isNaN(a) || Infinity === a) g = e = d = "-";
    g = 0 < g || 0 < k ? g + ":" : "";
    return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d);
  };
  u.Rc = function () {
    document.body.focus();
    document.onselectstart = r(l);
  };
  u.Cd = function () {
    document.onselectstart = r(f);
  };
  u.trim = function (a) {
    return (a + "").replace(/^\s+|\s+$/g, "");
  };
  u.round = function (a, c) {
    c || (c = 0);
    return Math.round(a * Math.pow(10, c)) / Math.pow(10, c);
  };
  u.sb = function (a, c) {
    return {
      length: 1,
      start: function () {
        return a;
      },
      end: function () {
        return c;
      },
    };
  };
  u.get = function (a, c, d) {
    var e, g;
    "undefined" === typeof XMLHttpRequest &&
      (window.XMLHttpRequest = function () {
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (a) {}
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (c) {}
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (d) {}
        throw Error("This browser does not support XMLHttpRequest.");
      });
    g = new XMLHttpRequest();
    try {
      g.open("GET", a);
    } catch (j) {
      d(j);
    }
    e = 0 === a.indexOf("file:") || (0 === window.location.href.indexOf("file:") && -1 === a.indexOf("https"));
    g.onreadystatechange = function () {
      4 === g.readyState && (200 === g.status || (e && 0 === g.status) ? c(g.responseText) : d && d());
    };
    try {
      g.send();
    } catch (k) {
      d && d(k);
    }
  };
  u.ud = function (a) {
    try {
      var c = window.localStorage || l;
      c && (c.volume = a);
    } catch (d) {
      22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d);
    }
  };
  u.jc = function (a) {
    a.match(/^https?:\/\//) || (a = u.e("div", { innerHTML: '<a href="' + a + '">x</a>' }).firstChild.href);
    return a;
  };
  u.log = function () {
    u.log.history = u.log.history || [];
    u.log.history.push(arguments);
    window.console && window.console.log(Array.prototype.slice.call(arguments));
  };
  u.bd = function (a) {
    var c, d;
    a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
    if (!c) return { left: 0, top: 0 };
    a = document.documentElement;
    d = document.body;
    return { left: c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0), top: c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0) };
  };
  u.ja = {};
  u.ja.Fb = function (a, c) {
    var d, e, g;
    a = u.k.copy(a);
    for (d in c) c.hasOwnProperty(d) && ((e = a[d]), (g = c[d]), (a[d] = u.k.Ma(e) && u.k.Ma(g) ? u.ja.Fb(e, g) : c[d]));
    return a;
  };
  u.b = u.ka.extend({
    h: function (a, c, d) {
      this.c = a;
      this.g = u.k.copy(this.g);
      c = this.options(c);
      this.Q = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.s++);
      this.jd = c.name || h;
      this.a = c.el || this.e();
      this.J = [];
      this.Ia = {};
      this.Ja = {};
      this.mc();
      this.H(d);
      if (c.tc !== l) {
        var e, g;
        e = u.bind(this.C(), this.C().reportUserActivity);
        this.d("touchstart", function () {
          e();
          clearInterval(g);
          g = setInterval(e, 250);
        });
        a = function () {
          e();
          clearInterval(g);
        };
        this.d("touchmove", e);
        this.d("touchend", a);
        this.d("touchcancel", a);
      }
    },
  });
  t = u.b.prototype;
  t.dispose = function () {
    this.j({ type: "dispose", bubbles: l });
    if (this.J) for (var a = this.J.length - 1; 0 <= a; a--) this.J[a].dispose && this.J[a].dispose();
    this.Ja = this.Ia = this.J = h;
    this.o();
    this.a.parentNode && this.a.parentNode.removeChild(this.a);
    u.sc(this.a);
    this.a = h;
  };
  t.c = f;
  t.C = p("c");
  t.options = function (a) {
    return a === b ? this.g : (this.g = u.ja.Fb(this.g, a));
  };
  t.e = function (a, c) {
    return u.e(a, c);
  };
  t.u = p("a");
  t.Ka = function () {
    return this.F || this.a;
  };
  t.id = p("Q");
  t.name = p("jd");
  t.children = p("J");
  t.dd = function (a) {
    return this.Ia[a];
  };
  t.fa = function (a) {
    return this.Ja[a];
  };
  t.X = function (a, c) {
    var d, e;
    "string" === typeof a ? ((e = a), (c = c || {}), (d = c.componentClass || u.Y(e)), (c.name = e), (d = new window.videojs[d](this.c || this, c))) : (d = a);
    this.J.push(d);
    "function" === typeof d.id && (this.Ia[d.id()] = d);
    (e = e || (d.name && d.name())) && (this.Ja[e] = d);
    "function" === typeof d.el && d.el() && this.Ka().appendChild(d.el());
    return d;
  };
  t.removeChild = function (a) {
    "string" === typeof a && (a = this.fa(a));
    if (a && this.J) {
      for (var c = l, d = this.J.length - 1; 0 <= d; d--)
        if (this.J[d] === a) {
          c = f;
          this.J.splice(d, 1);
          break;
        }
      c && ((this.Ia[a.id] = h), (this.Ja[a.name] = h), (c = a.u()) && c.parentNode === this.Ka() && this.Ka().removeChild(a.u()));
    }
  };
  t.mc = function () {
    var a = this.g;
    if (a && a.children) {
      var c = this;
      u.k.ra(a.children, function (a, e) {
        e !== l && !e.loadEvent && (c[a] = c.X(a, e));
      });
    }
  };
  t.P = r("");
  t.d = function (a, c) {
    u.d(this.a, a, u.bind(this, c));
    return this;
  };
  t.o = function (a, c) {
    u.o(this.a, a, c);
    return this;
  };
  t.T = function (a, c) {
    u.T(this.a, a, u.bind(this, c));
    return this;
  };
  t.j = function (a, c) {
    u.j(this.a, a, c);
    return this;
  };
  t.H = function (a) {
    a && (this.$ ? a.call(this) : (this.Ta === b && (this.Ta = []), this.Ta.push(a)));
    return this;
  };
  t.Wa = function () {
    this.$ = f;
    var a = this.Ta;
    if (a && 0 < a.length) {
      for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
      this.Ta = [];
      this.j("ready");
    }
  };
  t.n = function (a) {
    u.n(this.a, a);
    return this;
  };
  t.t = function (a) {
    u.t(this.a, a);
    return this;
  };
  t.show = function () {
    this.a.style.display = "block";
    return this;
  };
  t.D = function () {
    this.a.style.display = "none";
    return this;
  };
  function D(a) {
    a.t("vjs-lock-showing");
  }
  t.disable = function () {
    this.D();
    this.show = m();
  };
  t.width = function (a, c) {
    return E(this, "width", a, c);
  };
  t.height = function (a, c) {
    return E(this, "height", a, c);
  };
  t.Xc = function (a, c) {
    return this.width(a, f).height(c);
  };
  function E(a, c, d, e) {
    if (d !== b) return (a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px"), e || a.j("resize"), a;
    if (!a.a) return 0;
    d = a.a.style[c];
    e = d.indexOf("px");
    return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.Y(c)], 10);
  }
  u.q = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      var d = l;
      this.d("touchstart", function (a) {
        a.preventDefault();
        d = f;
      });
      this.d("touchmove", function () {
        d = l;
      });
      var e = this;
      this.d("touchend", function (a) {
        d && e.p(a);
        a.preventDefault();
      });
      this.d("click", this.p);
      this.d("focus", this.Pa);
      this.d("blur", this.Oa);
    },
  });
  t = u.q.prototype;
  t.e = function (a, c) {
    c = u.k.B({ className: this.P(), innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "</span></div>", role: "button", "aria-live": "polite", tabIndex: 0 }, c);
    return u.b.prototype.e.call(this, a, c);
  };
  t.P = function () {
    return "vjs-control " + u.b.prototype.P.call(this);
  };
  t.p = m();
  t.Pa = function () {
    u.d(document, "keyup", u.bind(this, this.aa));
  };
  t.aa = function (a) {
    if (32 == a.which || 13 == a.which) a.preventDefault(), this.p();
  };
  t.Oa = function () {
    u.o(document, "keyup", u.bind(this, this.aa));
  };
  u.N = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      this.Qc = this.fa(this.g.barName);
      this.handle = this.fa(this.g.handleName);
      a.d(this.qc, u.bind(this, this.update));
      this.d("mousedown", this.Qa);
      this.d("touchstart", this.Qa);
      this.d("focus", this.Pa);
      this.d("blur", this.Oa);
      this.d("click", this.p);
      this.c.d("controlsvisible", u.bind(this, this.update));
      a.H(u.bind(this, this.update));
      this.O = {};
    },
  });
  t = u.N.prototype;
  t.e = function (a, c) {
    c = c || {};
    c.className += " vjs-slider";
    c = u.k.B({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, c);
    return u.b.prototype.e.call(this, a, c);
  };
  t.Qa = function (a) {
    a.preventDefault();
    u.Rc();
    this.O.move = u.bind(this, this.Hb);
    this.O.end = u.bind(this, this.Ib);
    u.d(document, "mousemove", this.O.move);
    u.d(document, "mouseup", this.O.end);
    u.d(document, "touchmove", this.O.move);
    u.d(document, "touchend", this.O.end);
    this.Hb(a);
  };
  t.Ib = function () {
    u.Cd();
    u.o(document, "mousemove", this.O.move, l);
    u.o(document, "mouseup", this.O.end, l);
    u.o(document, "touchmove", this.O.move, l);
    u.o(document, "touchend", this.O.end, l);
    this.update();
  };
  t.update = function () {
    if (this.a) {
      var a,
        c = this.xb(),
        d = this.handle,
        e = this.Qc;
      isNaN(c) && (c = 0);
      a = c;
      if (d) {
        a = this.a.offsetWidth;
        var g = d.u().offsetWidth;
        a = g ? g / a : 0;
        c *= 1 - a;
        a = c + a / 2;
        d.u().style.left = u.round(100 * c, 2) + "%";
      }
      e.u().style.width = u.round(100 * a, 2) + "%";
    }
  };
  function F(a, c) {
    var d, e, g, j;
    d = a.a;
    e = u.bd(d);
    j = g = d.offsetWidth;
    d = a.handle;
    if (a.g.Dd) return (j = e.top), (e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY), d && ((d = d.u().offsetHeight), (j += d / 2), (g -= d)), Math.max(0, Math.min(1, (j - e + g) / g));
    g = e.left;
    e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
    d && ((d = d.u().offsetWidth), (g += d / 2), (j -= d));
    return Math.max(0, Math.min(1, (e - g) / j));
  }
  t.Pa = function () {
    u.d(document, "keyup", u.bind(this, this.aa));
  };
  t.aa = function (a) {
    37 == a.which ? (a.preventDefault(), this.wc()) : 39 == a.which && (a.preventDefault(), this.xc());
  };
  t.Oa = function () {
    u.o(document, "keyup", u.bind(this, this.aa));
  };
  t.p = function (a) {
    a.stopImmediatePropagation();
    a.preventDefault();
  };
  u.V = u.b.extend();
  u.V.prototype.defaultValue = 0;
  u.V.prototype.e = function (a, c) {
    c = c || {};
    c.className += " vjs-slider-handle";
    c = u.k.B({ innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>" }, c);
    return u.b.prototype.e.call(this, "div", c);
  };
  u.la = u.b.extend();
  function ca(a, c) {
    a.X(c);
    c.d(
      "click",
      u.bind(a, function () {
        D(this);
      })
    );
  }
  u.la.prototype.e = function () {
    var a = this.options().Tc || "ul";
    this.F = u.e(a, { className: "vjs-menu-content" });
    a = u.b.prototype.e.call(this, "div", { append: this.F, className: "vjs-menu" });
    a.appendChild(this.F);
    u.d(a, "click", function (a) {
      a.preventDefault();
      a.stopImmediatePropagation();
    });
    return a;
  };
  u.M = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
      this.selected(c.selected);
    },
  });
  u.M.prototype.e = function (a, c) {
    return u.q.prototype.e.call(this, "li", u.k.B({ className: "vjs-menu-item", innerHTML: this.g.label }, c));
  };
  u.M.prototype.p = function () {
    this.selected(f);
  };
  u.M.prototype.selected = function (a) {
    a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l));
  };
  u.R = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
      this.ua = this.La();
      this.X(this.ua);
      this.K && 0 === this.K.length && this.D();
      this.d("keyup", this.aa);
      this.a.setAttribute("aria-haspopup", f);
      this.a.setAttribute("role", "button");
    },
  });
  t = u.R.prototype;
  t.na = l;
  t.La = function () {
    var a = new u.la(this.c);
    this.options().title && a.u().appendChild(u.e("li", { className: "vjs-menu-title", innerHTML: u.Y(this.A), Ad: -1 }));
    if ((this.K = this.createItems())) for (var c = 0; c < this.K.length; c++) ca(a, this.K[c]);
    return a;
  };
  t.qa = m();
  t.P = function () {
    return this.className + " vjs-menu-button " + u.q.prototype.P.call(this);
  };
  t.Pa = m();
  t.Oa = m();
  t.p = function () {
    this.T(
      "mouseout",
      u.bind(this, function () {
        D(this.ua);
        this.a.blur();
      })
    );
    this.na ? G(this) : H(this);
  };
  t.aa = function (a) {
    a.preventDefault();
    32 == a.which || 13 == a.which ? (this.na ? G(this) : H(this)) : 27 == a.which && this.na && G(this);
  };
  function H(a) {
    a.na = f;
    a.ua.n("vjs-lock-showing");
    a.a.setAttribute("aria-pressed", f);
    a.K && 0 < a.K.length && a.K[0].u().focus();
  }
  function G(a) {
    a.na = l;
    D(a.ua);
    a.a.setAttribute("aria-pressed", l);
  }
  u.Player = u.b.extend({
    h: function (a, c, d) {
      this.L = a;
      a.id = a.id || "vjs_video_" + u.s++;
      c = u.k.B(da(a), c);
      this.v = {};
      this.rc = c.poster;
      this.rb = c.controls;
      a.controls = l;
      c.tc = l;
      u.b.call(this, this, c, d);
      this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
      this.T("play", function (a) {
        u.j(this.a, { type: "firstplay", target: this.a }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation());
      });
      this.d("ended", this.kd);
      this.d("play", this.Kb);
      this.d("firstplay", this.ld);
      this.d("pause", this.Jb);
      this.d("progress", this.nd);
      this.d("durationchange", this.pc);
      this.d("error", this.Gb);
      this.d("fullscreenchange", this.md);
      u.va[this.Q] = this;
      c.plugins &&
        u.k.ra(
          c.plugins,
          function (a, c) {
            this[a](c);
          },
          this
        );
      var e, g, j, k;
      e = u.bind(this, this.reportUserActivity);
      this.d("mousedown", function () {
        e();
        clearInterval(g);
        g = setInterval(e, 250);
      });
      this.d("mousemove", e);
      this.d("mouseup", function () {
        e();
        clearInterval(g);
      });
      this.d("keydown", e);
      this.d("keyup", e);
      j = setInterval(
        u.bind(this, function () {
          this.ia &&
            ((this.ia = l),
            this.userActive(f),
            clearTimeout(k),
            (k = setTimeout(
              u.bind(this, function () {
                this.ia || this.userActive(l);
              }),
              2e3
            )));
        }),
        250
      );
      this.d("dispose", function () {
        clearInterval(j);
        clearTimeout(k);
      });
    },
  });
  t = u.Player.prototype;
  t.g = u.options;
  t.dispose = function () {
    this.j("dispose");
    this.o("dispose");
    u.va[this.Q] = h;
    this.L && this.L.player && (this.L.player = h);
    this.a && this.a.player && (this.a.player = h);
    clearInterval(this.Sa);
    this.wa();
    this.i && this.i.dispose();
    u.b.prototype.dispose.call(this);
  };
  function da(a) {
    var c = { sources: [], tracks: [] };
    u.k.B(c, u.wb(a));
    if (a.hasChildNodes()) {
      var d, e, g, j;
      a = a.childNodes;
      g = 0;
      for (j = a.length; g < j; g++) (d = a[g]), (e = d.nodeName.toLowerCase()), "source" === e ? c.sources.push(u.wb(d)) : "track" === e && c.tracks.push(u.wb(d));
    }
    return c;
  }
  t.e = function () {
    var a = (this.a = u.b.prototype.e.call(this, "div")),
      c = this.L;
    c.removeAttribute("width");
    c.removeAttribute("height");
    if (c.hasChildNodes()) {
      var d, e, g, j, k;
      d = c.childNodes;
      e = d.length;
      for (k = []; e--; ) (g = d[e]), (j = g.nodeName.toLowerCase()), "track" === j && k.push(g);
      for (d = 0; d < k.length; d++) c.removeChild(k[d]);
    }
    a.id = c.id;
    a.className = c.className;
    c.id += "_html5_api";
    c.className = "vjs-tech";
    c.player = a.player = this;
    this.n("vjs-paused");
    this.width(this.g.width, f);
    this.height(this.g.height, f);
    c.parentNode && c.parentNode.insertBefore(a, c);
    u.yb(c, a);
    return a;
  };
  function I(a, c, d) {
    a.i && ((a.$ = l), a.i.dispose(), a.Db && ((a.Db = l), clearInterval(a.Sa)), a.Eb && J(a), (a.i = l));
    "Html5" !== c && a.L && (u.l.fc(a.L), (a.L = h));
    a.xa = c;
    a.$ = l;
    var e = u.k.B({ source: d, parentEl: a.a }, a.g[c.toLowerCase()]);
    d && (d.src == a.v.src && 0 < a.v.currentTime && (e.startTime = a.v.currentTime), (a.v.src = d.src));
    a.i = new window.videojs[c](a, e);
    a.i.H(function () {
      this.c.Wa();
      if (!this.m.progressEvents) {
        var a = this.c;
        a.Db = f;
        a.Sa = setInterval(
          u.bind(a, function () {
            this.v.mb < this.buffered().end(0) ? this.j("progress") : 1 == this.bufferedPercent() && (clearInterval(this.Sa), this.j("progress"));
          }),
          500
        );
        a.i.T("progress", function () {
          this.m.progressEvents = f;
          var a = this.c;
          a.Db = l;
          clearInterval(a.Sa);
        });
      }
      this.m.timeupdateEvents ||
        ((a = this.c),
        (a.Eb = f),
        a.d("play", a.Ac),
        a.d("pause", a.wa),
        a.i.T("timeupdate", function () {
          this.m.timeupdateEvents = f;
          J(this.c);
        }));
    });
  }
  function J(a) {
    a.Eb = l;
    a.wa();
    a.o("play", a.Ac);
    a.o("pause", a.wa);
  }
  t.Ac = function () {
    this.ec && this.wa();
    this.ec = setInterval(
      u.bind(this, function () {
        this.j("timeupdate");
      }),
      250
    );
  };
  t.wa = function () {
    clearInterval(this.ec);
  };
  t.Kb = function () {
    u.t(this.a, "vjs-paused");
    u.n(this.a, "vjs-playing");
  };
  t.ld = function () {
    this.g.starttime && this.currentTime(this.g.starttime);
    this.n("vjs-has-started");
  };
  t.Jb = function () {
    u.t(this.a, "vjs-playing");
    u.n(this.a, "vjs-paused");
  };
  t.nd = function () {
    1 == this.bufferedPercent() && this.j("loadedalldata");
  };
  t.kd = function () {
    this.g.loop && (this.currentTime(0), this.play());
  };
  t.pc = function () {
    var a = K(this, "duration");
    a && this.duration(a);
  };
  t.md = function () {
    this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen");
  };
  t.Gb = function (a) {
    u.log("Video Error", a);
  };
  function L(a, c, d) {
    if (a.i && !a.i.$)
      a.i.H(function () {
        this[c](d);
      });
    else
      try {
        a.i[c](d);
      } catch (e) {
        throw (u.log(e), e);
      }
  }
  function K(a, c) {
    if (a.i && a.i.$)
      try {
        return a.i[c]();
      } catch (d) {
        throw (a.i[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.xa + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.xa + " playback technology element.", d), (a.i.$ = l)) : u.log(d), d);
      }
  }
  t.play = function () {
    L(this, "play");
    return this;
  };
  t.pause = function () {
    L(this, "pause");
    return this;
  };
  t.paused = function () {
    return K(this, "paused") === l ? l : f;
  };
  t.currentTime = function (a) {
    return a !== b ? (L(this, "setCurrentTime", a), this.Eb && this.j("timeupdate"), this) : (this.v.currentTime = K(this, "currentTime") || 0);
  };
  t.duration = function (a) {
    if (a !== b) return (this.v.duration = parseFloat(a)), this;
    this.v.duration === b && this.pc();
    return this.v.duration || 0;
  };
  t.buffered = function () {
    var a = K(this, "buffered"),
      c = a.length - 1,
      d = (this.v.mb = this.v.mb || 0);
    a && 0 <= c && a.end(c) !== d && ((d = a.end(c)), (this.v.mb = d));
    return u.sb(0, d);
  };
  t.bufferedPercent = function () {
    return this.duration() ? this.buffered().end(0) / this.duration() : 0;
  };
  t.volume = function (a) {
    if (a !== b) return (a = Math.max(0, Math.min(1, parseFloat(a)))), (this.v.volume = a), L(this, "setVolume", a), u.ud(a), this;
    a = parseFloat(K(this, "volume"));
    return isNaN(a) ? 1 : a;
  };
  t.muted = function (a) {
    return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l;
  };
  t.Va = function () {
    return K(this, "supportsFullScreen") || l;
  };
  t.nc = l;
  t.isFullScreen = function (a) {
    return a !== b ? ((this.nc = a), this) : this.nc;
  };
  t.requestFullScreen = function () {
    var a = u.Nb.requestFullScreen;
    this.isFullScreen(f);
    a
      ? (u.d(
          document,
          a.ub,
          u.bind(this, function (c) {
            this.isFullScreen(document[a.isFullScreen]);
            this.isFullScreen() === l && u.o(document, a.ub, arguments.callee);
            this.j("fullscreenchange");
          })
        ),
        this.a[a.uc]())
      : this.i.Va()
      ? L(this, "enterFullScreen")
      : ((this.ed = f), (this.Yc = document.documentElement.style.overflow), u.d(document, "keydown", u.bind(this, this.ic)), (document.documentElement.style.overflow = "hidden"), u.n(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange"));
    return this;
  };
  t.cancelFullScreen = function () {
    var a = u.Nb.requestFullScreen;
    this.isFullScreen(l);
    if (a) document[a.ob]();
    else this.i.Va() ? L(this, "exitFullScreen") : (M(this), this.j("fullscreenchange"));
    return this;
  };
  t.ic = function (a) {
    27 === a.keyCode && (this.isFullScreen() === f ? this.cancelFullScreen() : M(this));
  };
  function M(a) {
    a.ed = l;
    u.o(document, "keydown", a.ic);
    document.documentElement.style.overflow = a.Yc;
    u.t(document.body, "vjs-full-window");
    a.j("exitFullWindow");
  }
  t.src = function (a) {
    if (a instanceof Array) {
      var c;
      a: {
        c = a;
        for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
          var g = u.Y(e[d]),
            j = window.videojs[g];
          if (j.isSupported())
            for (var k = 0, q = c; k < q.length; k++) {
              var n = q[k];
              if (j.canPlaySource(n)) {
                c = { source: n, i: g };
                break a;
              }
            }
        }
        c = l;
      }
      c ? ((a = c.source), (c = c.i), c == this.xa ? this.src(a) : I(this, c, a)) : this.a.appendChild(u.e("p", { innerHTML: this.options().notSupportedMessage }));
    } else
      a instanceof Object
        ? window.videojs[this.xa].canPlaySource(a)
          ? this.src(a.src)
          : this.src([a])
        : ((this.v.src = a),
          this.$
            ? (L(this, "src", a), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play())
            : this.H(function () {
                this.src(a);
              }));
    return this;
  };
  t.load = function () {
    L(this, "load");
    return this;
  };
  t.currentSrc = function () {
    return K(this, "currentSrc") || this.v.src || "";
  };
  t.Ra = function (a) {
    return a !== b ? (L(this, "setPreload", a), (this.g.preload = a), this) : K(this, "preload");
  };
  t.autoplay = function (a) {
    return a !== b ? (L(this, "setAutoplay", a), (this.g.autoplay = a), this) : K(this, "autoplay");
  };
  t.loop = function (a) {
    return a !== b ? (L(this, "setLoop", a), (this.g.loop = a), this) : K(this, "loop");
  };
  t.poster = function (a) {
    if (a === b) return this.rc;
    this.rc = a;
    L(this, "setPoster", a);
    this.j("posterchange");
  };
  t.controls = function (a) {
    return a !== b ? ((a = !!a), this.rb !== a && ((this.rb = a) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.rb;
  };
  u.Player.prototype.Pb;
  t = u.Player.prototype;
  t.usingNativeControls = function (a) {
    return a !== b ? ((a = !!a), this.Pb !== a && ((this.Pb = a) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Pb;
  };
  t.error = function () {
    return K(this, "error");
  };
  t.ended = function () {
    return K(this, "ended");
  };
  t.seeking = function () {
    return K(this, "seeking");
  };
  t.ia = f;
  t.reportUserActivity = function () {
    this.ia = f;
  };
  t.Ob = f;
  t.userActive = function (a) {
    return a !== b
      ? ((a = !!a),
        a !== this.Ob &&
          ((this.Ob = a)
            ? ((this.ia = f), this.t("vjs-user-inactive"), this.n("vjs-user-active"), this.j("useractive"))
            : ((this.ia = l),
              this.i.T("mousemove", function (a) {
                a.stopPropagation();
                a.preventDefault();
              }),
              this.t("vjs-user-active"),
              this.n("vjs-user-inactive"),
              this.j("userinactive"))),
        this)
      : this.Ob;
  };
  var N, O, P;
  P = document.createElement("div");
  O = {};
  P.Jd !== b ? ((O.uc = "requestFullscreen"), (O.ob = "exitFullscreen"), (O.ub = "fullscreenchange"), (O.isFullScreen = "fullScreen")) : (document.mozCancelFullScreen ? ((N = "moz"), (O.isFullScreen = N + "FullScreen")) : ((N = "webkit"), (O.isFullScreen = N + "IsFullScreen")), P[N + "RequestFullScreen"] && ((O.uc = N + "RequestFullScreen"), (O.ob = N + "CancelFullScreen")), (O.ub = N + "fullscreenchange"));
  document[O.ob] && (u.Nb.requestFullScreen = O);
  u.Ca = u.b.extend();
  u.Ca.prototype.g = { Od: "play", children: { playToggle: {}, currentTimeDisplay: {}, timeDivider: {}, durationDisplay: {}, remainingTimeDisplay: {}, progressControl: {}, fullscreenToggle: {}, volumeControl: {}, muteToggle: {} } };
  u.Ca.prototype.e = function () {
    return u.e("div", { className: "vjs-control-bar" });
  };
  u.Wb = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
      a.d("play", u.bind(this, this.Kb));
      a.d("pause", u.bind(this, this.Jb));
    },
  });
  t = u.Wb.prototype;
  t.oa = "Play";
  t.P = function () {
    return "vjs-play-control " + u.q.prototype.P.call(this);
  };
  t.p = function () {
    this.c.paused() ? this.c.play() : this.c.pause();
  };
  t.Kb = function () {
    u.t(this.a, "vjs-paused");
    u.n(this.a, "vjs-playing");
    this.a.children[0].children[0].innerHTML = "Pause";
  };
  t.Jb = function () {
    u.t(this.a, "vjs-playing");
    u.n(this.a, "vjs-paused");
    this.a.children[0].children[0].innerHTML = "Play";
  };
  u.$a = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.ca));
    },
  });
  u.$a.prototype.e = function () {
    var a = u.b.prototype.e.call(this, "div", { className: "vjs-current-time vjs-time-controls vjs-control" });
    this.F = u.e("div", { className: "vjs-current-time-display", innerHTML: '<span class="vjs-control-text">Current Time </span>0:00', "aria-live": "off" });
    a.appendChild(this.F);
    return a;
  };
  u.$a.prototype.ca = function () {
    var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
    this.F.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.ta(a, this.c.duration());
  };
  u.ab = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.ca));
    },
  });
  u.ab.prototype.e = function () {
    var a = u.b.prototype.e.call(this, "div", { className: "vjs-duration vjs-time-controls vjs-control" });
    this.F = u.e("div", { className: "vjs-duration-display", innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00', "aria-live": "off" });
    a.appendChild(this.F);
    return a;
  };
  u.ab.prototype.ca = function () {
    var a = this.c.duration();
    a && (this.F.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.ta(a));
  };
  u.ac = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
    },
  });
  u.ac.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-time-divider", innerHTML: "<div><span>/</span></div>" });
  };
  u.gb = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.ca));
    },
  });
  u.gb.prototype.e = function () {
    var a = u.b.prototype.e.call(this, "div", { className: "vjs-remaining-time vjs-time-controls vjs-control" });
    this.F = u.e("div", { className: "vjs-remaining-time-display", innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00', "aria-live": "off" });
    a.appendChild(this.F);
    return a;
  };
  u.gb.prototype.ca = function () {
    this.c.duration() && (this.F.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.ta(this.c.duration() - this.c.currentTime()));
  };
  u.Da = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
    },
  });
  u.Da.prototype.oa = "Fullscreen";
  u.Da.prototype.P = function () {
    return "vjs-fullscreen-control " + u.q.prototype.P.call(this);
  };
  u.Da.prototype.p = function () {
    this.c.isFullScreen() ? (this.c.cancelFullScreen(), (this.a.children[0].children[0].innerHTML = "Fullscreen")) : (this.c.requestFullScreen(), (this.a.children[0].children[0].innerHTML = "Non-Fullscreen"));
  };
  u.fb = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
    },
  });
  u.fb.prototype.g = { children: { seekBar: {} } };
  u.fb.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-progress-control vjs-control" });
  };
  u.Xb = u.N.extend({
    h: function (a, c) {
      u.N.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.za));
      a.H(u.bind(this, this.za));
    },
  });
  t = u.Xb.prototype;
  t.g = { children: { loadProgressBar: {}, playProgressBar: {}, seekHandle: {} }, barName: "playProgressBar", handleName: "seekHandle" };
  t.qc = "timeupdate";
  t.e = function () {
    return u.N.prototype.e.call(this, "div", { className: "vjs-progress-holder", "aria-label": "video progress bar" });
  };
  t.za = function () {
    var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
    this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2));
    this.a.setAttribute("aria-valuetext", u.ta(a, this.c.duration()));
  };
  t.xb = function () {
    return this.c.currentTime() / this.c.duration();
  };
  t.Qa = function (a) {
    u.N.prototype.Qa.call(this, a);
    this.c.Ua = f;
    this.Ed = !this.c.paused();
    this.c.pause();
  };
  t.Hb = function (a) {
    a = F(this, a) * this.c.duration();
    a == this.c.duration() && (a -= 0.1);
    this.c.currentTime(a);
  };
  t.Ib = function (a) {
    u.N.prototype.Ib.call(this, a);
    this.c.Ua = l;
    this.Ed && this.c.play();
  };
  t.xc = function () {
    this.c.currentTime(this.c.currentTime() + 5);
  };
  t.wc = function () {
    this.c.currentTime(this.c.currentTime() - 5);
  };
  u.cb = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.d("progress", u.bind(this, this.update));
    },
  });
  u.cb.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-load-progress", innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>' });
  };
  u.cb.prototype.update = function () {
    this.a.style && (this.a.style.width = u.round(100 * this.c.bufferedPercent(), 2) + "%");
  };
  u.Vb = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
    },
  });
  u.Vb.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-play-progress", innerHTML: '<span class="vjs-control-text">Progress: 0%</span>' });
  };
  u.Fa = u.V.extend({
    h: function (a, c) {
      u.V.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.ca));
    },
  });
  u.Fa.prototype.defaultValue = "00:00";
  u.Fa.prototype.e = function () {
    return u.V.prototype.e.call(this, "div", { className: "vjs-seek-handle", "aria-live": "off" });
  };
  u.Fa.prototype.ca = function () {
    var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
    this.a.innerHTML = '<span class="vjs-control-text">' + u.ta(a, this.c.duration()) + "</span>";
  };
  u.ib = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.i && a.i.m && a.i.m.volumeControl === l && this.n("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden");
        })
      );
    },
  });
  u.ib.prototype.g = { children: { volumeBar: {} } };
  u.ib.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-volume-control vjs-control" });
  };
  u.hb = u.N.extend({
    h: function (a, c) {
      u.N.call(this, a, c);
      a.d("volumechange", u.bind(this, this.za));
      a.H(u.bind(this, this.za));
      setTimeout(u.bind(this, this.update), 0);
    },
  });
  t = u.hb.prototype;
  t.za = function () {
    this.a.setAttribute("aria-valuenow", u.round(100 * this.c.volume(), 2));
    this.a.setAttribute("aria-valuetext", u.round(100 * this.c.volume(), 2) + "%");
  };
  t.g = { children: { volumeLevel: {}, volumeHandle: {} }, barName: "volumeLevel", handleName: "volumeHandle" };
  t.qc = "volumechange";
  t.e = function () {
    return u.N.prototype.e.call(this, "div", { className: "vjs-volume-bar", "aria-label": "volume level" });
  };
  t.Hb = function (a) {
    this.c.muted() && this.c.muted(l);
    this.c.volume(F(this, a));
  };
  t.xb = function () {
    return this.c.muted() ? 0 : this.c.volume();
  };
  t.xc = function () {
    this.c.volume(this.c.volume() + 0.1);
  };
  t.wc = function () {
    this.c.volume(this.c.volume() - 0.1);
  };
  u.bc = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
    },
  });
  u.bc.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>' });
  };
  u.jb = u.V.extend();
  u.jb.prototype.defaultValue = "00:00";
  u.jb.prototype.e = function () {
    return u.V.prototype.e.call(this, "div", { className: "vjs-volume-handle" });
  };
  u.da = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
      a.d("volumechange", u.bind(this, this.update));
      a.i && a.i.m && a.i.m.volumeControl === l && this.n("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden");
        })
      );
    },
  });
  u.da.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", { className: "vjs-mute-control vjs-control", innerHTML: '<div><span class="vjs-control-text">Mute</span></div>' });
  };
  u.da.prototype.p = function () {
    this.c.muted(this.c.muted() ? l : f);
  };
  u.da.prototype.update = function () {
    var a = this.c.volume(),
      c = 3;
    0 === a || this.c.muted() ? (c = 0) : 0.33 > a ? (c = 1) : 0.67 > a && (c = 2);
    this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
    for (a = 0; 4 > a; a++) u.t(this.a, "vjs-vol-" + a);
    u.n(this.a, "vjs-vol-" + c);
  };
  u.ma = u.R.extend({
    h: function (a, c) {
      u.R.call(this, a, c);
      a.d("volumechange", u.bind(this, this.update));
      a.i && a.i.m && a.i.m.Bc === l && this.n("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.i.m && a.i.m.Bc === l ? this.n("vjs-hidden") : this.t("vjs-hidden");
        })
      );
      this.n("vjs-menu-button");
    },
  });
  u.ma.prototype.La = function () {
    var a = new u.la(this.c, { Tc: "div" }),
      c = new u.hb(this.c, u.k.B({ Dd: f }, this.g.Xd));
    a.X(c);
    return a;
  };
  u.ma.prototype.p = function () {
    u.da.prototype.p.call(this);
    u.R.prototype.p.call(this);
  };
  u.ma.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", { className: "vjs-volume-menu-button vjs-menu-button vjs-control", innerHTML: '<div><span class="vjs-control-text">Mute</span></div>' });
  };
  u.ma.prototype.update = u.da.prototype.update;
  u.Ea = u.q.extend({
    h: function (a, c) {
      u.q.call(this, a, c);
      a.poster() && this.src(a.poster());
      (!a.poster() || !a.controls()) && this.D();
      a.d(
        "posterchange",
        u.bind(this, function () {
          this.src(a.poster());
        })
      );
      a.d("play", u.bind(this, this.D));
    },
  });
  var Q = "backgroundSize" in u.ea.style;
  u.Ea.prototype.e = function () {
    var a = u.e("div", { className: "vjs-poster", tabIndex: -1 });
    Q || a.appendChild(u.e("img"));
    return a;
  };
  u.Ea.prototype.src = function (a) {
    var c = this.u();
    a !== b && (Q ? (c.style.backgroundImage = 'url("' + a + '")') : (c.firstChild.src = a));
  };
  u.Ea.prototype.p = function () {
    this.C().controls() && this.c.play();
  };
  u.Ub = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      a.d("canplay", u.bind(this, this.D));
      a.d("canplaythrough", u.bind(this, this.D));
      a.d("playing", u.bind(this, this.D));
      a.d("seeked", u.bind(this, this.D));
      a.d("seeking", u.bind(this, this.show));
      a.d("seeked", u.bind(this, this.D));
      a.d("error", u.bind(this, this.show));
      a.d("waiting", u.bind(this, this.show));
    },
  });
  u.Ub.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-loading-spinner" });
  };
  u.Ya = u.q.extend();
  u.Ya.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", { className: "vjs-big-play-button", innerHTML: '<span aria-hidden="true"></span>', "aria-label": "play video" });
  };
  u.Ya.prototype.p = function () {
    this.c.play();
  };
  u.r = u.b.extend({
    h: function (a, c, d) {
      c = c || {};
      c.tc = l;
      u.b.call(this, a, c, d);
      var e, g;
      g = this;
      e = this.C();
      a = function () {
        if (e.controls() && !e.usingNativeControls()) {
          var a;
          g.d("mousedown", g.p);
          g.d("touchstart", function (c) {
            c.preventDefault();
            a = this.c.userActive();
          });
          g.d("touchmove", function () {
            a && this.C().reportUserActivity();
          });
          var c, d, n, s;
          c = 0;
          g.d("touchstart", function () {
            c = new Date().getTime();
            n = f;
          });
          s = function () {
            n = l;
          };
          g.d("touchmove", s);
          g.d("touchleave", s);
          g.d("touchcancel", s);
          g.d("touchend", function () {
            n === f && ((d = new Date().getTime() - c), 250 > d && this.j("tap"));
          });
          g.d("tap", g.od);
        }
      };
      c = u.bind(g, g.rd);
      this.H(a);
      e.d("controlsenabled", a);
      e.d("controlsdisabled", c);
    },
  });
  u.r.prototype.rd = function () {
    this.o("tap");
    this.o("touchstart");
    this.o("touchmove");
    this.o("touchleave");
    this.o("touchcancel");
    this.o("touchend");
    this.o("click");
    this.o("mousedown");
  };
  u.r.prototype.p = function (a) {
    0 === a.button && this.C().controls() && (this.C().paused() ? this.C().play() : this.C().pause());
  };
  u.r.prototype.od = function () {
    this.C().userActive(!this.C().userActive());
  };
  u.r.prototype.m = { volumeControl: f, fullscreenResize: l, progressEvents: l, timeupdateEvents: l };
  u.media = {};
  u.media.Xa = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
  function ea() {
    var a = u.media.Xa[i];
    return function () {
      throw Error('The "' + a + "\" method is not available on the playback technology's API");
    };
  }
  for (var i = u.media.Xa.length - 1; 0 <= i; i--) u.r.prototype[u.media.Xa[i]] = ea();
  u.l = u.r.extend({
    h: function (a, c, d) {
      this.m.volumeControl = u.l.Sc();
      this.m.movingMediaElementInDOM = !u.Hc;
      this.m.fullscreenResize = f;
      u.r.call(this, a, c, d);
      for (d = u.l.bb.length - 1; 0 <= d; d--) u.d(this.a, u.l.bb[d], u.bind(this.c, this.$c));
      (c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.j("loadstart") : c && (this.a.src = c.src);
      if (u.Zb && a.options().nativeControlsForTouch !== l) {
        var e, g, j, k;
        e = this;
        g = this.C();
        c = g.controls();
        e.a.controls = !!c;
        j = function () {
          e.a.controls = f;
        };
        k = function () {
          e.a.controls = l;
        };
        g.d("controlsenabled", j);
        g.d("controlsdisabled", k);
        c = function () {
          g.o("controlsenabled", j);
          g.o("controlsdisabled", k);
        };
        e.d("dispose", c);
        g.d("usingcustomcontrols", c);
        g.usingNativeControls(f);
      }
      a.H(function () {
        this.L && this.g.autoplay && this.paused() && (delete this.L.poster, this.play());
      });
      this.Wa();
    },
  });
  t = u.l.prototype;
  t.dispose = function () {
    u.r.prototype.dispose.call(this);
  };
  t.e = function () {
    var a = this.c,
      c = a.L,
      d;
    if (!c || this.m.movingMediaElementInDOM === l) c ? ((d = c.cloneNode(l)), u.l.fc(c), (c = d), (a.L = h)) : (c = u.e("video", { id: a.id() + "_html5_api", className: "vjs-tech" })), (c.player = a), u.yb(c, a.u());
    d = ["autoplay", "preload", "loop", "muted"];
    for (var e = d.length - 1; 0 <= e; e--) {
      var g = d[e];
      a.g[g] !== h && (c[g] = a.g[g]);
    }
    return c;
  };
  t.$c = function (a) {
    this.j(a);
    a.stopPropagation();
  };
  t.play = function () {
    this.a.play();
  };
  t.pause = function () {
    this.a.pause();
  };
  t.paused = function () {
    return this.a.paused;
  };
  t.currentTime = function () {
    return this.a.currentTime;
  };
  t.td = function (a) {
    try {
      this.a.currentTime = a;
    } catch (c) {
      u.log(c, "Video is not ready. (Video.js)");
    }
  };
  t.duration = function () {
    return this.a.duration || 0;
  };
  t.buffered = function () {
    return this.a.buffered;
  };
  t.volume = function () {
    return this.a.volume;
  };
  t.yd = function (a) {
    this.a.volume = a;
  };
  t.muted = function () {
    return this.a.muted;
  };
  t.wd = function (a) {
    this.a.muted = a;
  };
  t.width = function () {
    return this.a.offsetWidth;
  };
  t.height = function () {
    return this.a.offsetHeight;
  };
  t.Va = function () {
    return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.I) || !/Chrome|Mac OS X 10.5/.test(u.I)) ? f : l;
  };
  t.gc = function () {
    var a = this.a;
    a.paused && a.networkState <= a.Gd
      ? (this.a.play(),
        setTimeout(function () {
          a.pause();
          a.webkitEnterFullScreen();
        }, 0))
      : a.webkitEnterFullScreen();
  };
  t.ad = function () {
    this.a.webkitExitFullScreen();
  };
  t.src = function (a) {
    this.a.src = a;
  };
  t.load = function () {
    this.a.load();
  };
  t.currentSrc = function () {
    return this.a.currentSrc;
  };
  t.poster = function () {
    return this.a.poster;
  };
  t.Ra = function () {
    return this.a.Ra;
  };
  t.xd = function (a) {
    this.a.Ra = a;
  };
  t.autoplay = function () {
    return this.a.autoplay;
  };
  t.sd = function (a) {
    this.a.autoplay = a;
  };
  t.controls = function () {
    return this.a.controls;
  };
  t.loop = function () {
    return this.a.loop;
  };
  t.vd = function (a) {
    this.a.loop = a;
  };
  t.error = function () {
    return this.a.error;
  };
  t.seeking = function () {
    return this.a.seeking;
  };
  t.ended = function () {
    return this.a.ended;
  };
  u.l.isSupported = function () {
    return !!u.ea.canPlayType;
  };
  u.l.nb = function (a) {
    try {
      return !!u.ea.canPlayType(a.type);
    } catch (c) {
      return "";
    }
  };
  u.l.Sc = function () {
    var a = u.ea.volume;
    u.ea.volume = a / 2 + 0.1;
    return a !== u.ea.volume;
  };
  u.l.bb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
  u.l.fc = function (a) {
    if (a) {
      a.player = h;
      for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes(); ) a.removeChild(a.firstChild);
      a.removeAttribute("src");
      "function" === typeof a.load && a.load();
    }
  };
  u.Lc &&
    (document.createElement("video").constructor.prototype.canPlayType = function (a) {
      return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : "";
    });
  u.f = u.r.extend({
    h: function (a, c, d) {
      u.r.call(this, a, c, d);
      var e = c.source;
      d = c.parentEl;
      var g = (this.a = u.e("div", { id: a.id() + "_temp_flash" })),
        j = a.id() + "_flash_api";
      a = a.g;
      var k = u.k.B({ readyFunction: "videojs.Flash.onReady", eventProxyFunction: "videojs.Flash.onEvent", errorEventProxyFunction: "videojs.Flash.onError", autoplay: a.autoplay, preload: a.Ra, loop: a.loop, muted: a.muted }, c.flashVars),
        q = u.k.B({ wmode: "opaque", bgcolor: "#000000" }, c.params),
        n = u.k.B({ id: j, name: j, class: "vjs-tech" }, c.attributes),
        s;
      e && (e.type && u.f.gd(e.type) ? ((a = u.f.yc(e.src)), (k.rtmpConnection = encodeURIComponent(a.qb)), (k.rtmpStream = encodeURIComponent(a.Mb))) : (k.src = encodeURIComponent(u.jc(e.src))));
      this.setCurrentTime = function (a) {
        s = a;
        this.a.vjs_setProperty("currentTime", a);
      };
      this.currentTime = function () {
        return this.seeking() ? s : this.a.vjs_getProperty("currentTime");
      };
      u.yb(g, d);
      c.startTime &&
        this.H(function () {
          this.load();
          this.play();
          this.currentTime(c.startTime);
        });
      u.Tb &&
        this.H(function () {
          u.d(
            this.u(),
            "mousemove",
            u.bind(this, function () {
              this.C().j({ type: "mousemove", bubbles: l });
            })
          );
        });
      if (c.iFrameMode === f && !u.Tb) {
        var C = u.e("iframe", { id: j + "_iframe", name: j + "_iframe", className: "vjs-tech", scrolling: "no", marginWidth: 0, marginHeight: 0, frameBorder: 0 });
        k.readyFunction = "ready";
        k.eventProxyFunction = "events";
        k.errorEventProxyFunction = "errors";
        u.d(
          C,
          "load",
          u.bind(this, function () {
            var a,
              d = C.contentWindow;
            a = C.contentDocument ? C.contentDocument : C.contentWindow.document;
            a.write(u.f.kc(c.swf, k, q, n));
            d.player = this.c;
            d.ready = u.bind(this.c, function (c) {
              var d = this.i;
              d.a = a.getElementById(c);
              u.f.pb(d);
            });
            d.events = u.bind(this.c, function (a, c) {
              this && "flash" === this.xa && this.j(c);
            });
            d.errors = u.bind(this.c, function (a, c) {
              u.log("Flash Error", c);
            });
          })
        );
        g.parentNode.replaceChild(C, g);
      } else u.f.Zc(c.swf, g, k, q, n);
    },
  });
  t = u.f.prototype;
  t.dispose = function () {
    u.r.prototype.dispose.call(this);
  };
  t.play = function () {
    this.a.vjs_play();
  };
  t.pause = function () {
    this.a.vjs_pause();
  };
  t.src = function (a) {
    u.f.fd(a) ? ((a = u.f.yc(a)), this.Sd(a.qb), this.Td(a.Mb)) : ((a = u.jc(a)), this.a.vjs_src(a));
    if (this.c.autoplay()) {
      var c = this;
      setTimeout(function () {
        c.play();
      }, 0);
    }
  };
  t.currentSrc = function () {
    var a = this.a.vjs_getProperty("currentSrc");
    if (a == h) {
      var c = this.Qd(),
        d = this.Rd();
      c && d && (a = u.f.zd(c, d));
    }
    return a;
  };
  t.load = function () {
    this.a.vjs_load();
  };
  t.poster = function () {
    this.a.vjs_getProperty("poster");
  };
  t.buffered = function () {
    return u.sb(0, this.a.vjs_getProperty("buffered"));
  };
  t.Va = r(l);
  t.gc = r(l);
  var R = u.f.prototype,
    S = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
    T = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
  function fa() {
    var a = S[U],
      c = a.charAt(0).toUpperCase() + a.slice(1);
    R["set" + c] = function (c) {
      return this.a.vjs_setProperty(a, c);
    };
  }
  function V(a) {
    R[a] = function () {
      return this.a.vjs_getProperty(a);
    };
  }
  var U;
  for (U = 0; U < S.length; U++) V(S[U]), fa();
  for (U = 0; U < T.length; U++) V(T[U]);
  u.f.isSupported = function () {
    return 10 <= u.f.version()[0];
  };
  u.f.nb = function (a) {
    if (!a.type) return "";
    a = a.type.replace(/;.*/, "").toLowerCase();
    if (a in u.f.cd || a in u.f.zc) return "maybe";
  };
  u.f.cd = { "video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4" };
  u.f.zc = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" };
  u.f.onReady = function (a) {
    a = u.u(a);
    var c = a.player || a.parentNode.player,
      d = c.i;
    a.player = c;
    d.a = a;
    u.f.pb(d);
  };
  u.f.pb = function (a) {
    a.u().vjs_getProperty
      ? a.Wa()
      : setTimeout(function () {
          u.f.pb(a);
        }, 50);
  };
  u.f.onEvent = function (a, c) {
    u.u(a).player.j(c);
  };
  u.f.onError = function (a, c) {
    u.u(a).player.j("error");
    u.log("Flash Error", c, a);
  };
  u.f.version = function () {
    var a = "0,0,0";
    try {
      a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        .GetVariable("$version")
        .replace(/\D+/g, ",")
        .match(/^,?(.+),?$/)[1];
    } catch (c) {
      try {
        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]);
      } catch (d) {}
    }
    return a.split(",");
  };
  u.f.Zc = function (a, c, d, e, g) {
    a = u.f.kc(a, d, e, g);
    a = u.e("div", { innerHTML: a }).childNodes[0];
    d = c.parentNode;
    c.parentNode.replaceChild(a, c);
    var j = d.childNodes[0];
    setTimeout(function () {
      j.style.display = "block";
    }, 1e3);
  };
  u.f.kc = function (a, c, d, e) {
    var g = "",
      j = "",
      k = "";
    c &&
      u.k.ra(c, function (a, c) {
        g += a + "=" + c + "&amp;";
      });
    d = u.k.B({ movie: a, flashvars: g, allowScriptAccess: "always", allowNetworking: "all" }, d);
    u.k.ra(d, function (a, c) {
      j += '<param name="' + a + '" value="' + c + '" />';
    });
    e = u.k.B({ data: a, width: "100%", height: "100%" }, e);
    u.k.ra(e, function (a, c) {
      k += a + '="' + c + '" ';
    });
    return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>";
  };
  u.f.zd = function (a, c) {
    return a + "&" + c;
  };
  u.f.yc = function (a) {
    var c = { qb: "", Mb: "" };
    if (!a) return c;
    var d = a.indexOf("&"),
      e;
    -1 !== d ? (e = d + 1) : ((d = e = a.lastIndexOf("/") + 1), 0 === d && (d = e = a.length));
    c.qb = a.substring(0, d);
    c.Mb = a.substring(e, a.length);
    return c;
  };
  u.f.gd = function (a) {
    return a in u.f.zc;
  };
  u.f.Nc = /^rtmp[set]?:\/\//i;
  u.f.fd = function (a) {
    return u.f.Nc.test(a);
  };
  u.Mc = u.b.extend({
    h: function (a, c, d) {
      u.b.call(this, a, c, d);
      if (!a.g.sources || 0 === a.g.sources.length) {
        c = 0;
        for (d = a.g.techOrder; c < d.length; c++) {
          var e = u.Y(d[c]),
            g = window.videojs[e];
          if (g && g.isSupported()) {
            I(a, e);
            break;
          }
        }
      } else a.src(a.g.sources);
    },
  });
  u.Player.prototype.textTracks = function () {
    return (this.ya = this.ya || []);
  };
  function W(a, c, d) {
    for (var e = a.ya, g = 0, j = e.length, k, q; g < j; g++) (k = e[g]), k.id() === c ? (k.show(), (q = k)) : d && k.G() == d && 0 < k.mode() && k.disable();
    (c = q ? q.G() : d ? d : l) && a.j(c + "trackchange");
  }
  u.w = u.b.extend({
    h: function (a, c) {
      u.b.call(this, a, c);
      this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.s++;
      this.vc = c.src;
      this.Wc = c["default"] || c.dflt;
      this.Bd = c.title;
      this.Nd = c.srclang;
      this.hd = c.label;
      this.Z = [];
      this.kb = [];
      this.ga = this.ha = 0;
      this.c.d("fullscreenchange", u.bind(this, this.Pc));
    },
  });
  t = u.w.prototype;
  t.G = p("A");
  t.src = p("vc");
  t.tb = p("Wc");
  t.title = p("Bd");
  t.label = p("hd");
  t.Uc = p("Z");
  t.Oc = p("kb");
  t.readyState = p("ha");
  t.mode = p("ga");
  t.Pc = function () {
    this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%" : "";
  };
  t.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-" + this.A + " vjs-text-track" });
  };
  t.show = function () {
    X(this);
    this.ga = 2;
    u.b.prototype.show.call(this);
  };
  t.D = function () {
    X(this);
    this.ga = 1;
    u.b.prototype.D.call(this);
  };
  t.disable = function () {
    2 == this.ga && this.D();
    this.c.o("timeupdate", u.bind(this, this.update, this.Q));
    this.c.o("ended", u.bind(this, this.reset, this.Q));
    this.reset();
    this.c.fa("textTrackDisplay").removeChild(this);
    this.ga = 0;
  };
  function X(a) {
    0 === a.ha && a.load();
    0 === a.ga && (a.c.d("timeupdate", u.bind(a, a.update, a.Q)), a.c.d("ended", u.bind(a, a.reset, a.Q)), ("captions" === a.A || "subtitles" === a.A) && a.c.fa("textTrackDisplay").X(a));
  }
  t.load = function () {
    0 === this.ha && ((this.ha = 1), u.get(this.vc, u.bind(this, this.pd), u.bind(this, this.Gb)));
  };
  t.Gb = function (a) {
    this.error = a;
    this.ha = 3;
    this.j("error");
  };
  t.pd = function (a) {
    var c, d;
    a = a.split("\n");
    for (var e = "", g = 1, j = a.length; g < j; g++)
      if ((e = u.trim(a[g]))) {
        -1 == e.indexOf("--\x3e") ? ((c = e), (e = u.trim(a[++g]))) : (c = this.Z.length);
        c = { id: c, index: this.Z.length };
        d = e.split(" --\x3e ");
        c.startTime = Y(d[0]);
        c.sa = Y(d[1]);
        for (d = []; a[++g] && (e = u.trim(a[g])); ) d.push(e);
        c.text = d.join("<br/>");
        this.Z.push(c);
      }
    this.ha = 2;
    this.j("loaded");
  };
  function Y(a) {
    var c = a.split(":");
    a = 0;
    var d, e, g;
    3 == c.length ? ((d = c[0]), (e = c[1]), (c = c[2])) : ((d = 0), (e = c[0]), (c = c[1]));
    c = c.split(/\s+/);
    c = c.splice(0, 1)[0];
    c = c.split(/\.|,/);
    g = parseFloat(c[1]);
    c = c[0];
    a += 3600 * parseFloat(d);
    a += 60 * parseFloat(e);
    a += parseFloat(c);
    g && (a += g / 1e3);
    return a;
  }
  t.update = function () {
    if (0 < this.Z.length) {
      var a = this.c.currentTime();
      if (this.Lb === b || a < this.Lb || this.Na <= a) {
        var c = this.Z,
          d = this.c.duration(),
          e = 0,
          g = l,
          j = [],
          k,
          q,
          n,
          s;
        a >= this.Na || this.Na === b ? (s = this.vb !== b ? this.vb : 0) : ((g = f), (s = this.Cb !== b ? this.Cb : c.length - 1));
        for (;;) {
          n = c[s];
          if (n.sa <= a) (e = Math.max(e, n.sa)), n.Ha && (n.Ha = l);
          else if (a < n.startTime) {
            if (((d = Math.min(d, n.startTime)), n.Ha && (n.Ha = l), !g)) break;
          } else g ? (j.splice(0, 0, n), q === b && (q = s), (k = s)) : (j.push(n), k === b && (k = s), (q = s)), (d = Math.min(d, n.sa)), (e = Math.max(e, n.startTime)), (n.Ha = f);
          if (g)
            if (0 === s) break;
            else s--;
          else if (s === c.length - 1) break;
          else s++;
        }
        this.kb = j;
        this.Na = d;
        this.Lb = e;
        this.vb = k;
        this.Cb = q;
        a = this.kb;
        c = "";
        d = 0;
        for (e = a.length; d < e; d++) c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
        this.a.innerHTML = c;
        this.j("cuechange");
      }
    }
  };
  t.reset = function () {
    this.Na = 0;
    this.Lb = this.c.duration();
    this.Cb = this.vb = 0;
  };
  u.Rb = u.w.extend();
  u.Rb.prototype.A = "captions";
  u.Yb = u.w.extend();
  u.Yb.prototype.A = "subtitles";
  u.Sb = u.w.extend();
  u.Sb.prototype.A = "chapters";
  u.$b = u.b.extend({
    h: function (a, c, d) {
      u.b.call(this, a, c, d);
      if (a.g.tracks && 0 < a.g.tracks.length) {
        c = this.c;
        a = a.g.tracks;
        var e;
        for (d = 0; d < a.length; d++) {
          e = a[d];
          var g = c,
            j = e.kind,
            k = e.label,
            q = e.language,
            n = e;
          e = g.ya = g.ya || [];
          n = n || {};
          n.kind = j;
          n.label = k;
          n.language = q;
          j = u.Y(j || "subtitles");
          g = new window.videojs[j + "Track"](g, n);
          e.push(g);
        }
      }
    },
  });
  u.$b.prototype.e = function () {
    return u.b.prototype.e.call(this, "div", { className: "vjs-text-track-display" });
  };
  u.W = u.M.extend({
    h: function (a, c) {
      var d = (this.ba = c.track);
      c.label = d.label();
      c.selected = d.tb();
      u.M.call(this, a, c);
      this.c.d(d.G() + "trackchange", u.bind(this, this.update));
    },
  });
  u.W.prototype.p = function () {
    u.M.prototype.p.call(this);
    W(this.c, this.ba.Q, this.ba.G());
  };
  u.W.prototype.update = function () {
    this.selected(2 == this.ba.mode());
  };
  u.eb = u.W.extend({
    h: function (a, c) {
      c.track = {
        G: function () {
          return c.kind;
        },
        C: a,
        label: function () {
          return c.kind + " off";
        },
        tb: r(l),
        mode: r(l),
      };
      u.W.call(this, a, c);
      this.selected(f);
    },
  });
  u.eb.prototype.p = function () {
    u.W.prototype.p.call(this);
    W(this.c, this.ba.Q, this.ba.G());
  };
  u.eb.prototype.update = function () {
    for (var a = this.c.textTracks(), c = 0, d = a.length, e, g = f; c < d; c++) (e = a[c]), e.G() == this.ba.G() && 2 == e.mode() && (g = l);
    this.selected(g);
  };
  u.S = u.R.extend({
    h: function (a, c) {
      u.R.call(this, a, c);
      1 >= this.K.length && this.D();
    },
  });
  u.S.prototype.qa = function () {
    var a = [],
      c;
    a.push(new u.eb(this.c, { kind: this.A }));
    for (var d = 0; d < this.c.textTracks().length; d++) (c = this.c.textTracks()[d]), c.G() === this.A && a.push(new u.W(this.c, { track: c }));
    return a;
  };
  u.Aa = u.S.extend({
    h: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Captions Menu");
    },
  });
  u.Aa.prototype.A = "captions";
  u.Aa.prototype.oa = "Captions";
  u.Aa.prototype.className = "vjs-captions-button";
  u.Ga = u.S.extend({
    h: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Subtitles Menu");
    },
  });
  u.Ga.prototype.A = "subtitles";
  u.Ga.prototype.oa = "Subtitles";
  u.Ga.prototype.className = "vjs-subtitles-button";
  u.Ba = u.S.extend({
    h: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Chapters Menu");
    },
  });
  t = u.Ba.prototype;
  t.A = "chapters";
  t.oa = "Chapters";
  t.className = "vjs-chapters-button";
  t.qa = function () {
    for (var a = [], c, d = 0; d < this.c.textTracks().length; d++) (c = this.c.textTracks()[d]), c.G() === this.A && a.push(new u.W(this.c, { track: c }));
    return a;
  };
  t.La = function () {
    for (var a = this.c.textTracks(), c = 0, d = a.length, e, g, j = (this.K = []); c < d; c++)
      if (((e = a[c]), e.G() == this.A && e.tb())) {
        if (2 > e.readyState()) {
          this.Kd = e;
          e.d("loaded", u.bind(this, this.La));
          return;
        }
        g = e;
        break;
      }
    a = this.ua = new u.la(this.c);
    a.a.appendChild(u.e("li", { className: "vjs-menu-title", innerHTML: u.Y(this.A), Ad: -1 }));
    if (g) {
      e = g.Z;
      for (var k, c = 0, d = e.length; c < d; c++) (k = e[c]), (k = new u.Za(this.c, { track: g, cue: k })), j.push(k), a.X(k);
    }
    0 < this.K.length && this.show();
    return a;
  };
  u.Za = u.M.extend({
    h: function (a, c) {
      var d = (this.ba = c.track),
        e = (this.cue = c.cue),
        g = a.currentTime();
      c.label = e.text;
      c.selected = e.startTime <= g && g < e.sa;
      u.M.call(this, a, c);
      d.d("cuechange", u.bind(this, this.update));
    },
  });
  u.Za.prototype.p = function () {
    u.M.prototype.p.call(this);
    this.c.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  };
  u.Za.prototype.update = function () {
    var a = this.cue,
      c = this.c.currentTime();
    this.selected(a.startTime <= c && c < a.sa);
  };
  u.k.B(u.Ca.prototype.g.children, { subtitlesButton: {}, captionsButton: {}, chaptersButton: {} });
  if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
  else {
    u.JSON = {};
    var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    u.JSON.parse = function (a, c) {
      function d(a, e) {
        var k,
          q,
          n = a[e];
        if (n && "object" === typeof n) for (k in n) Object.prototype.hasOwnProperty.call(n, k) && ((q = d(n, k)), q !== b ? (n[k] = q) : delete n[k]);
        return c.call(a, e, n);
      }
      var e;
      a = String(a);
      Z.lastIndex = 0;
      Z.test(a) &&
        (a = a.replace(Z, function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          a
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (e = eval("(" + a + ")")), "function" === typeof c ? d({ "": e }, "") : e;
      throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
    };
  }
  u.cc = function () {
    var a,
      c,
      d = document.getElementsByTagName("video");
    if (d && 0 < d.length)
      for (var e = 0, g = d.length; e < g; e++)
        if ((c = d[e]) && c.getAttribute) c.player === b && ((a = c.getAttribute("data-setup")), a !== h && ((a = u.JSON.parse(a || "{}")), videojs(c, a)));
        else {
          u.lb();
          break;
        }
    else u.Cc || u.lb();
  };
  u.lb = function () {
    setTimeout(u.cc, 1);
  };
  "complete" === document.readyState
    ? (u.Cc = f)
    : u.T(window, "load", function () {
        u.Cc = f;
      });
  u.lb();
  u.qd = function (a, c) {
    u.Player.prototype[a] = c;
  };
  var ga = this;
  ga.Fd = f;
  function $(a, c) {
    var d = a.split("."),
      e = ga;
    !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
    for (var g; d.length && (g = d.shift()); ) !d.length && c !== b ? (e[g] = c) : (e = e[g] ? e[g] : (e[g] = {}));
  }
  $("videojs", u);
  $("_V_", u);
  $("videojs.options", u.options);
  $("videojs.players", u.va);
  $("videojs.TOUCH_ENABLED", u.Zb);
  $("videojs.cache", u.pa);
  $("videojs.Component", u.b);
  u.b.prototype.player = u.b.prototype.C;
  u.b.prototype.options = u.b.prototype.options;
  u.b.prototype.init = u.b.prototype.h;
  u.b.prototype.dispose = u.b.prototype.dispose;
  u.b.prototype.createEl = u.b.prototype.e;
  u.b.prototype.contentEl = u.b.prototype.Ka;
  u.b.prototype.el = u.b.prototype.u;
  u.b.prototype.addChild = u.b.prototype.X;
  u.b.prototype.getChild = u.b.prototype.fa;
  u.b.prototype.getChildById = u.b.prototype.dd;
  u.b.prototype.children = u.b.prototype.children;
  u.b.prototype.initChildren = u.b.prototype.mc;
  u.b.prototype.removeChild = u.b.prototype.removeChild;
  u.b.prototype.on = u.b.prototype.d;
  u.b.prototype.off = u.b.prototype.o;
  u.b.prototype.one = u.b.prototype.T;
  u.b.prototype.trigger = u.b.prototype.j;
  u.b.prototype.triggerReady = u.b.prototype.Wa;
  u.b.prototype.show = u.b.prototype.show;
  u.b.prototype.hide = u.b.prototype.D;
  u.b.prototype.width = u.b.prototype.width;
  u.b.prototype.height = u.b.prototype.height;
  u.b.prototype.dimensions = u.b.prototype.Xc;
  u.b.prototype.ready = u.b.prototype.H;
  u.b.prototype.addClass = u.b.prototype.n;
  u.b.prototype.removeClass = u.b.prototype.t;
  u.b.prototype.buildCSSClass = u.b.prototype.P;
  u.Player.prototype.ended = u.Player.prototype.ended;
  $("videojs.MediaLoader", u.Mc);
  $("videojs.TextTrackDisplay", u.$b);
  $("videojs.ControlBar", u.Ca);
  $("videojs.Button", u.q);
  $("videojs.PlayToggle", u.Wb);
  $("videojs.FullscreenToggle", u.Da);
  $("videojs.BigPlayButton", u.Ya);
  $("videojs.LoadingSpinner", u.Ub);
  $("videojs.CurrentTimeDisplay", u.$a);
  $("videojs.DurationDisplay", u.ab);
  $("videojs.TimeDivider", u.ac);
  $("videojs.RemainingTimeDisplay", u.gb);
  $("videojs.Slider", u.N);
  $("videojs.ProgressControl", u.fb);
  $("videojs.SeekBar", u.Xb);
  $("videojs.LoadProgressBar", u.cb);
  $("videojs.PlayProgressBar", u.Vb);
  $("videojs.SeekHandle", u.Fa);
  $("videojs.VolumeControl", u.ib);
  $("videojs.VolumeBar", u.hb);
  $("videojs.VolumeLevel", u.bc);
  $("videojs.VolumeMenuButton", u.ma);
  $("videojs.VolumeHandle", u.jb);
  $("videojs.MuteToggle", u.da);
  $("videojs.PosterImage", u.Ea);
  $("videojs.Menu", u.la);
  $("videojs.MenuItem", u.M);
  $("videojs.MenuButton", u.R);
  u.R.prototype.createItems = u.R.prototype.qa;
  u.S.prototype.createItems = u.S.prototype.qa;
  u.Ba.prototype.createItems = u.Ba.prototype.qa;
  $("videojs.SubtitlesButton", u.Ga);
  $("videojs.CaptionsButton", u.Aa);
  $("videojs.ChaptersButton", u.Ba);
  $("videojs.MediaTechController", u.r);
  u.r.prototype.features = u.r.prototype.m;
  u.r.prototype.m.volumeControl = u.r.prototype.m.Bc;
  u.r.prototype.m.fullscreenResize = u.r.prototype.m.Ld;
  u.r.prototype.m.progressEvents = u.r.prototype.m.Pd;
  u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Ud;
  $("videojs.Html5", u.l);
  u.l.Events = u.l.bb;
  u.l.isSupported = u.l.isSupported;
  u.l.canPlaySource = u.l.nb;
  u.l.prototype.setCurrentTime = u.l.prototype.td;
  u.l.prototype.setVolume = u.l.prototype.yd;
  u.l.prototype.setMuted = u.l.prototype.wd;
  u.l.prototype.setPreload = u.l.prototype.xd;
  u.l.prototype.setAutoplay = u.l.prototype.sd;
  u.l.prototype.setLoop = u.l.prototype.vd;
  u.l.prototype.enterFullScreen = u.l.prototype.gc;
  u.l.prototype.exitFullScreen = u.l.prototype.ad;
  $("videojs.Flash", u.f);
  u.f.isSupported = u.f.isSupported;
  u.f.canPlaySource = u.f.nb;
  u.f.onReady = u.f.onReady;
  $("videojs.TextTrack", u.w);
  u.w.prototype.label = u.w.prototype.label;
  u.w.prototype.kind = u.w.prototype.G;
  u.w.prototype.mode = u.w.prototype.mode;
  u.w.prototype.cues = u.w.prototype.Uc;
  u.w.prototype.activeCues = u.w.prototype.Oc;
  $("videojs.CaptionsTrack", u.Rb);
  $("videojs.SubtitlesTrack", u.Yb);
  $("videojs.ChaptersTrack", u.Sb);
  $("videojs.autoSetup", u.cc);
  $("videojs.plugin", u.qd);
  $("videojs.createTimeRange", u.sb);
  $("videojs.util", u.ja);
  u.ja.mergeOptions = u.ja.Fb;
})();
