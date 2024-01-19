import { css as Mr, LitElement as Ur, html as Pe } from "lit";
import { property as At, customElement as Vr } from "lit/decorators.js";
import { when as Wr } from "lit/directives/when.js";
function zr(c, s) {
  for (var T = 0; T < s.length; T++) {
    const P = s[T];
    if (typeof P != "string" && !Array.isArray(P)) {
      for (const b in P)
        if (b !== "default" && !(b in c)) {
          const j = Object.getOwnPropertyDescriptor(P, b);
          j && Object.defineProperty(c, b, j.get ? j : {
            enumerable: !0,
            get: () => P[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
function Yr(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var ze = { exports: {} }, fe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fe.exports;
var Tt;
function qr() {
  return Tt || (Tt = 1, function(c, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var T = "18.2.0", P = Symbol.for("react.element"), b = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), L = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), q = Symbol.iterator, pe = "@@iterator";
      function Z(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = q && e[q] || e[pe];
        return typeof t == "function" ? t : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, B = {
        transition: null
      }, x = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, V = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, K = {}, J = null;
      function ve(e) {
        J = e;
      }
      K.setExtraStackFrame = function(e) {
        J = e;
      }, K.getCurrentStack = null, K.getStackAddendum = function() {
        var e = "";
        J && (e += J);
        var t = K.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var ue = !1, ke = !1, ye = !1, ie = !1, te = !1, Y = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: B,
        ReactCurrentOwner: V
      };
      Y.ReactDebugCurrentFrame = K, Y.ReactCurrentActQueue = x;
      function G(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          X("warn", e, n);
        }
      }
      function f(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          X("error", e, n);
        }
      }
      function X(e, t, n) {
        {
          var a = Y.ReactDebugCurrentFrame, o = a.getStackAddendum();
          o !== "" && (t += "%s", n = n.concat([o]));
          var l = n.map(function(i) {
            return String(i);
          });
          l.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, l);
        }
      }
      var he = {};
      function r(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", o = a + "." + t;
          if (he[o])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), he[o] = !0;
        }
      }
      var u = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          r(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, a) {
          r(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, a) {
          r(e, "setState");
        }
      }, p = Object.assign, m = {};
      Object.freeze(m);
      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
      }
      y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, y.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var E = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, t) {
          Object.defineProperty(y.prototype, e, {
            get: function() {
              G("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var R in E)
          E.hasOwnProperty(R) && k(R, E[R]);
      }
      function w() {
      }
      w.prototype = y.prototype;
      function M(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
      }
      var Ae = M.prototype = new w();
      Ae.constructor = M, p(Ae, y.prototype), Ae.isPureReactComponent = !0;
      function $t() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var xt = Array.isArray;
      function me(e) {
        return xt(e);
      }
      function Dt(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function It(e) {
        try {
          return qe(e), !1;
        } catch {
          return !0;
        }
      }
      function qe(e) {
        return "" + e;
      }
      function ge(e) {
        if (It(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(e)), qe(e);
      }
      function Lt(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var o = t.displayName || t.name || "";
        return o !== "" ? n + "(" + o + ")" : n;
      }
      function Be(e) {
        return e.displayName || "Context";
      }
      function Q(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case j:
            return "Fragment";
          case b:
            return "Portal";
          case F:
            return "Profiler";
          case D:
            return "StrictMode";
          case W:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              var t = e;
              return Be(t) + ".Consumer";
            case N:
              var n = e;
              return Be(n._context) + ".Provider";
            case $:
              return Lt(e, e.render, "ForwardRef");
            case g:
              var a = e.displayName || null;
              return a !== null ? a : Q(e.type) || "Memo";
            case z: {
              var o = e, l = o._payload, i = o._init;
              try {
                return Q(i(l));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var se = Object.prototype.hasOwnProperty, He = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ke, Ge, je;
      je = {};
      function Qe(e) {
        if (se.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (se.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Ft(e, t) {
        var n = function() {
          Ke || (Ke = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Nt(e, t) {
        var n = function() {
          Ge || (Ge = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Mt(e) {
        if (typeof e.ref == "string" && V.current && e.__self && V.current.stateNode !== e.__self) {
          var t = Q(V.current.type);
          je[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), je[t] = !0);
        }
      }
      var $e = function(e, t, n, a, o, l, i) {
        var d = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: P,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: i,
          // Record the component responsible for creating this element.
          _owner: l
        };
        return d._store = {}, Object.defineProperty(d._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(d, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(d, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
      };
      function Ut(e, t, n) {
        var a, o = {}, l = null, i = null, d = null, h = null;
        if (t != null) {
          Qe(t) && (i = t.ref, Mt(t)), Je(t) && (ge(t.key), l = "" + t.key), d = t.__self === void 0 ? null : t.__self, h = t.__source === void 0 ? null : t.__source;
          for (a in t)
            se.call(t, a) && !He.hasOwnProperty(a) && (o[a] = t[a]);
        }
        var _ = arguments.length - 2;
        if (_ === 1)
          o.children = n;
        else if (_ > 1) {
          for (var C = Array(_), S = 0; S < _; S++)
            C[S] = arguments[S + 2];
          Object.freeze && Object.freeze(C), o.children = C;
        }
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (a in O)
            o[a] === void 0 && (o[a] = O[a]);
        }
        if (l || i) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && Ft(o, A), i && Nt(o, A);
        }
        return $e(e, l, i, d, h, V.current, o);
      }
      function Vt(e, t) {
        var n = $e(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Wt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, o = p({}, e.props), l = e.key, i = e.ref, d = e._self, h = e._source, _ = e._owner;
        if (t != null) {
          Qe(t) && (i = t.ref, _ = V.current), Je(t) && (ge(t.key), l = "" + t.key);
          var C;
          e.type && e.type.defaultProps && (C = e.type.defaultProps);
          for (a in t)
            se.call(t, a) && !He.hasOwnProperty(a) && (t[a] === void 0 && C !== void 0 ? o[a] = C[a] : o[a] = t[a]);
        }
        var S = arguments.length - 2;
        if (S === 1)
          o.children = n;
        else if (S > 1) {
          for (var O = Array(S), A = 0; A < S; A++)
            O[A] = arguments[A + 2];
          o.children = O;
        }
        return $e(e.type, l, i, d, h, _, o);
      }
      function re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === P;
      }
      var Xe = ".", zt = ":";
      function Yt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(o) {
          return n[o];
        });
        return "$" + a;
      }
      var Ze = !1, qt = /\/+/g;
      function et(e) {
        return e.replace(qt, "$&/");
      }
      function xe(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Yt("" + e.key)) : t.toString(36);
      }
      function _e(e, t, n, a, o) {
        var l = typeof e;
        (l === "undefined" || l === "boolean") && (e = null);
        var i = !1;
        if (e === null)
          i = !0;
        else
          switch (l) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case P:
                case b:
                  i = !0;
              }
          }
        if (i) {
          var d = e, h = o(d), _ = a === "" ? Xe + xe(d, 0) : a;
          if (me(h)) {
            var C = "";
            _ != null && (C = et(_) + "/"), _e(h, t, C, "", function(Nr) {
              return Nr;
            });
          } else
            h != null && (re(h) && (h.key && (!d || d.key !== h.key) && ge(h.key), h = Vt(
              h,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (h.key && (!d || d.key !== h.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                et("" + h.key) + "/"
              ) : "") + _
            )), t.push(h));
          return 1;
        }
        var S, O, A = 0, I = a === "" ? Xe : a + zt;
        if (me(e))
          for (var Te = 0; Te < e.length; Te++)
            S = e[Te], O = I + xe(S, Te), A += _e(S, t, n, O, o);
        else {
          var We = Z(e);
          if (typeof We == "function") {
            var Ct = e;
            We === Ct.entries && (Ze || G("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Lr = We.call(Ct), St, Fr = 0; !(St = Lr.next()).done; )
              S = St.value, O = I + xe(S, Fr++), A += _e(S, t, n, O, o);
          } else if (l === "object") {
            var Ot = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ot === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ot) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return A;
      }
      function be(e, t, n) {
        if (e == null)
          return e;
        var a = [], o = 0;
        return _e(e, a, "", "", function(l) {
          return t.call(n, l, o++);
        }), a;
      }
      function Bt(e) {
        var t = 0;
        return be(e, function() {
          t++;
        }), t;
      }
      function Ht(e, t, n) {
        be(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Kt(e) {
        return be(e, function(t) {
          return t;
        }) || [];
      }
      function Gt(e) {
        if (!re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Qt(e) {
        var t = {
          $$typeof: L,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: N,
          _context: t
        };
        var n = !1, a = !1, o = !1;
        {
          var l = {
            $$typeof: L,
            _context: t
          };
          Object.defineProperties(l, {
            Provider: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(i) {
                t.Provider = i;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(i) {
                t._currentValue = i;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(i) {
                t._currentValue2 = i;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(i) {
                t._threadCount = i;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(i) {
                o || (G("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), o = !0);
              }
            }
          }), t.Consumer = l;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var ce = -1, De = 0, tt = 1, Jt = 2;
      function Xt(e) {
        if (e._status === ce) {
          var t = e._result, n = t();
          if (n.then(function(l) {
            if (e._status === De || e._status === ce) {
              var i = e;
              i._status = tt, i._result = l;
            }
          }, function(l) {
            if (e._status === De || e._status === ce) {
              var i = e;
              i._status = Jt, i._result = l;
            }
          }), e._status === ce) {
            var a = e;
            a._status = De, a._result = n;
          }
        }
        if (e._status === tt) {
          var o = e._result;
          return o === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, o), "default" in o || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, o), o.default;
        } else
          throw e._result;
      }
      function Zt(e) {
        var t = {
          // We use these fields to store the result.
          _status: ce,
          _result: e
        }, n = {
          $$typeof: z,
          _payload: t,
          _init: Xt
        };
        {
          var a, o;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(l) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = l, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(l) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = l, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function er(e) {
        e != null && e.$$typeof === g ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: $,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      var rt;
      rt = Symbol.for("react.module.reference");
      function nt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === j || e === F || te || e === D || e === W || e === H || ie || e === de || ue || ke || ye || typeof e == "object" && e !== null && (e.$$typeof === z || e.$$typeof === g || e.$$typeof === N || e.$$typeof === L || e.$$typeof === $ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === rt || e.getModuleId !== void 0));
      }
      function tr(e, t) {
        nt(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: g,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return n;
      }
      function U() {
        var e = ee.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function rr(e) {
        var t = U();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function nr(e) {
        var t = U();
        return t.useState(e);
      }
      function ar(e, t, n) {
        var a = U();
        return a.useReducer(e, t, n);
      }
      function or(e) {
        var t = U();
        return t.useRef(e);
      }
      function ur(e, t) {
        var n = U();
        return n.useEffect(e, t);
      }
      function ir(e, t) {
        var n = U();
        return n.useInsertionEffect(e, t);
      }
      function sr(e, t) {
        var n = U();
        return n.useLayoutEffect(e, t);
      }
      function cr(e, t) {
        var n = U();
        return n.useCallback(e, t);
      }
      function lr(e, t) {
        var n = U();
        return n.useMemo(e, t);
      }
      function fr(e, t, n) {
        var a = U();
        return a.useImperativeHandle(e, t, n);
      }
      function dr(e, t) {
        {
          var n = U();
          return n.useDebugValue(e, t);
        }
      }
      function pr() {
        var e = U();
        return e.useTransition();
      }
      function vr(e) {
        var t = U();
        return t.useDeferredValue(e);
      }
      function yr() {
        var e = U();
        return e.useId();
      }
      function hr(e, t, n) {
        var a = U();
        return a.useSyncExternalStore(e, t, n);
      }
      var le = 0, at, ot, ut, it, st, ct, lt;
      function ft() {
      }
      ft.__reactDisabledLog = !0;
      function mr() {
        {
          if (le === 0) {
            at = console.log, ot = console.info, ut = console.warn, it = console.error, st = console.group, ct = console.groupCollapsed, lt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ft,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          le++;
        }
      }
      function gr() {
        {
          if (le--, le === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: p({}, e, {
                value: at
              }),
              info: p({}, e, {
                value: ot
              }),
              warn: p({}, e, {
                value: ut
              }),
              error: p({}, e, {
                value: it
              }),
              group: p({}, e, {
                value: st
              }),
              groupCollapsed: p({}, e, {
                value: ct
              }),
              groupEnd: p({}, e, {
                value: lt
              })
            });
          }
          le < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ie = Y.ReactCurrentDispatcher, Le;
      function Ee(e, t, n) {
        {
          if (Le === void 0)
            try {
              throw Error();
            } catch (o) {
              var a = o.stack.trim().match(/\n( *(at )?)/);
              Le = a && a[1] || "";
            }
          return `
` + Le + e;
        }
      }
      var Fe = !1, Re;
      {
        var _r = typeof WeakMap == "function" ? WeakMap : Map;
        Re = new _r();
      }
      function dt(e, t) {
        if (!e || Fe)
          return "";
        {
          var n = Re.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Fe = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var l;
        l = Ie.current, Ie.current = null, mr();
        try {
          if (t) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (I) {
                a = I;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (I) {
                a = I;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (I) {
              a = I;
            }
            e();
          }
        } catch (I) {
          if (I && a && typeof I.stack == "string") {
            for (var d = I.stack.split(`
`), h = a.stack.split(`
`), _ = d.length - 1, C = h.length - 1; _ >= 1 && C >= 0 && d[_] !== h[C]; )
              C--;
            for (; _ >= 1 && C >= 0; _--, C--)
              if (d[_] !== h[C]) {
                if (_ !== 1 || C !== 1)
                  do
                    if (_--, C--, C < 0 || d[_] !== h[C]) {
                      var S = `
` + d[_].replace(" at new ", " at ");
                      return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, S), S;
                    }
                  while (_ >= 1 && C >= 0);
                break;
              }
          }
        } finally {
          Fe = !1, Ie.current = l, gr(), Error.prepareStackTrace = o;
        }
        var O = e ? e.displayName || e.name : "", A = O ? Ee(O) : "";
        return typeof e == "function" && Re.set(e, A), A;
      }
      function br(e, t, n) {
        return dt(e, !1);
      }
      function Er(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function we(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, Er(e));
        if (typeof e == "string")
          return Ee(e);
        switch (e) {
          case W:
            return Ee("Suspense");
          case H:
            return Ee("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case $:
              return br(e.render);
            case g:
              return we(e.type, t, n);
            case z: {
              var a = e, o = a._payload, l = a._init;
              try {
                return we(l(o), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var pt = {}, vt = Y.ReactDebugCurrentFrame;
      function Ce(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          vt.setExtraStackFrame(n);
        } else
          vt.setExtraStackFrame(null);
      }
      function Rr(e, t, n, a, o) {
        {
          var l = Function.call.bind(se);
          for (var i in e)
            if (l(e, i)) {
              var d = void 0;
              try {
                if (typeof e[i] != "function") {
                  var h = Error((a || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw h.name = "Invariant Violation", h;
                }
                d = e[i](t, i, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (_) {
                d = _;
              }
              d && !(d instanceof Error) && (Ce(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, i, typeof d), Ce(null)), d instanceof Error && !(d.message in pt) && (pt[d.message] = !0, Ce(o), f("Failed %s type: %s", n, d.message), Ce(null));
            }
        }
      }
      function ne(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          ve(n);
        } else
          ve(null);
      }
      var Ne;
      Ne = !1;
      function yt() {
        if (V.current) {
          var e = Q(V.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function wr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Cr(e) {
        return e != null ? wr(e.__source) : "";
      }
      var ht = {};
      function Sr(e) {
        var t = yt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function mt(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Sr(t);
          if (!ht[n]) {
            ht[n] = !0;
            var a = "";
            e && e._owner && e._owner !== V.current && (a = " It was passed a child from " + Q(e._owner.type) + "."), ne(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ne(null);
          }
        }
      }
      function gt(e, t) {
        if (typeof e == "object") {
          if (me(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              re(a) && mt(a, t);
            }
          else if (re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = Z(e);
            if (typeof o == "function" && o !== e.entries)
              for (var l = o.call(e), i; !(i = l.next()).done; )
                re(i.value) && mt(i.value, t);
          }
        }
      }
      function _t(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === $ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === g))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = Q(t);
            Rr(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !Ne) {
            Ne = !0;
            var o = Q(t);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Or(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              ne(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ne(null);
              break;
            }
          }
          e.ref !== null && (ne(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
        }
      }
      function bt(e, t, n) {
        var a = nt(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var l = Cr(t);
          l ? o += l : o += yt();
          var i;
          e === null ? i = "null" : me(e) ? i = "array" : e !== void 0 && e.$$typeof === P ? (i = "<" + (Q(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, o);
        }
        var d = Ut.apply(this, arguments);
        if (d == null)
          return d;
        if (a)
          for (var h = 2; h < arguments.length; h++)
            gt(arguments[h], e);
        return e === j ? Or(d) : _t(d), d;
      }
      var Et = !1;
      function Tr(e) {
        var t = bt.bind(null, e);
        return t.type = e, Et || (Et = !0, G("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return G("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Pr(e, t, n) {
        for (var a = Wt.apply(this, arguments), o = 2; o < arguments.length; o++)
          gt(arguments[o], a.type);
        return _t(a), a;
      }
      function kr(e, t) {
        var n = B.transition;
        B.transition = {};
        var a = B.transition;
        B.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (B.transition = n, n === null && a._updatedFibers) {
            var o = a._updatedFibers.size;
            o > 10 && G("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Rt = !1, Se = null;
      function Ar(e) {
        if (Se === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = c && c[t];
            Se = n.call(c, "timers").setImmediate;
          } catch {
            Se = function(o) {
              Rt === !1 && (Rt = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var l = new MessageChannel();
              l.port1.onmessage = o, l.port2.postMessage(void 0);
            };
          }
        return Se(e);
      }
      var ae = 0, wt = !1;
      function jr(e) {
        {
          var t = ae;
          ae++, x.current === null && (x.current = []);
          var n = x.isBatchingLegacy, a;
          try {
            if (x.isBatchingLegacy = !0, a = e(), !n && x.didScheduleLegacyUpdate) {
              var o = x.current;
              o !== null && (x.didScheduleLegacyUpdate = !1, Ve(o));
            }
          } catch (O) {
            throw Oe(t), O;
          } finally {
            x.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var l = a, i = !1, d = {
              then: function(O, A) {
                i = !0, l.then(function(I) {
                  Oe(t), ae === 0 ? Me(I, O, A) : O(I);
                }, function(I) {
                  Oe(t), A(I);
                });
              }
            };
            return !wt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (wt = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), d;
          } else {
            var h = a;
            if (Oe(t), ae === 0) {
              var _ = x.current;
              _ !== null && (Ve(_), x.current = null);
              var C = {
                then: function(O, A) {
                  x.current === null ? (x.current = [], Me(h, O, A)) : O(h);
                }
              };
              return C;
            } else {
              var S = {
                then: function(O, A) {
                  O(h);
                }
              };
              return S;
            }
          }
        }
      }
      function Oe(e) {
        e !== ae - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ae = e;
      }
      function Me(e, t, n) {
        {
          var a = x.current;
          if (a !== null)
            try {
              Ve(a), Ar(function() {
                a.length === 0 ? (x.current = null, t(e)) : Me(e, t, n);
              });
            } catch (o) {
              n(o);
            }
          else
            t(e);
        }
      }
      var Ue = !1;
      function Ve(e) {
        if (!Ue) {
          Ue = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(t + 1), a;
          } finally {
            Ue = !1;
          }
        }
      }
      var $r = bt, xr = Pr, Dr = Tr, Ir = {
        map: be,
        forEach: Ht,
        count: Bt,
        toArray: Kt,
        only: Gt
      };
      s.Children = Ir, s.Component = y, s.Fragment = j, s.Profiler = F, s.PureComponent = M, s.StrictMode = D, s.Suspense = W, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, s.cloneElement = xr, s.createContext = Qt, s.createElement = $r, s.createFactory = Dr, s.createRef = $t, s.forwardRef = er, s.isValidElement = re, s.lazy = Zt, s.memo = tr, s.startTransition = kr, s.unstable_act = jr, s.useCallback = cr, s.useContext = rr, s.useDebugValue = dr, s.useDeferredValue = vr, s.useEffect = ur, s.useId = yr, s.useImperativeHandle = fr, s.useInsertionEffect = ir, s.useLayoutEffect = sr, s.useMemo = lr, s.useReducer = ar, s.useRef = or, s.useState = nr, s.useSyncExternalStore = hr, s.useTransition = pr, s.version = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fe, fe.exports)), fe.exports;
}
var v = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Br() {
  if (Pt)
    return v;
  Pt = 1;
  var c = Symbol.for("react.element"), s = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), D = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), W = Symbol.iterator;
  function H(r) {
    return r === null || typeof r != "object" ? null : (r = W && r[W] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var g = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, z = Object.assign, de = {};
  function q(r, u, p) {
    this.props = r, this.context = u, this.refs = de, this.updater = p || g;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(r, u) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, u, "setState");
  }, q.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = q.prototype;
  function Z(r, u, p) {
    this.props = r, this.context = u, this.refs = de, this.updater = p || g;
  }
  var ee = Z.prototype = new pe();
  ee.constructor = Z, z(ee, q.prototype), ee.isPureReactComponent = !0;
  var B = Array.isArray, x = Object.prototype.hasOwnProperty, V = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(r, u, p) {
    var m, y = {}, E = null, k = null;
    if (u != null)
      for (m in u.ref !== void 0 && (k = u.ref), u.key !== void 0 && (E = "" + u.key), u)
        x.call(u, m) && !K.hasOwnProperty(m) && (y[m] = u[m]);
    var R = arguments.length - 2;
    if (R === 1)
      y.children = p;
    else if (1 < R) {
      for (var w = Array(R), M = 0; M < R; M++)
        w[M] = arguments[M + 2];
      y.children = w;
    }
    if (r && r.defaultProps)
      for (m in R = r.defaultProps, R)
        y[m] === void 0 && (y[m] = R[m]);
    return { $$typeof: c, type: r, key: E, ref: k, props: y, _owner: V.current };
  }
  function ve(r, u) {
    return { $$typeof: c, type: r.type, key: u, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function ue(r) {
    return typeof r == "object" && r !== null && r.$$typeof === c;
  }
  function ke(r) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(p) {
      return u[p];
    });
  }
  var ye = /\/+/g;
  function ie(r, u) {
    return typeof r == "object" && r !== null && r.key != null ? ke("" + r.key) : u.toString(36);
  }
  function te(r, u, p, m, y) {
    var E = typeof r;
    (E === "undefined" || E === "boolean") && (r = null);
    var k = !1;
    if (r === null)
      k = !0;
    else
      switch (E) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case c:
            case s:
              k = !0;
          }
      }
    if (k)
      return k = r, y = y(k), r = m === "" ? "." + ie(k, 0) : m, B(y) ? (p = "", r != null && (p = r.replace(ye, "$&/") + "/"), te(y, u, p, "", function(M) {
        return M;
      })) : y != null && (ue(y) && (y = ve(y, p + (!y.key || k && k.key === y.key ? "" : ("" + y.key).replace(ye, "$&/") + "/") + r)), u.push(y)), 1;
    if (k = 0, m = m === "" ? "." : m + ":", B(r))
      for (var R = 0; R < r.length; R++) {
        E = r[R];
        var w = m + ie(E, R);
        k += te(E, u, p, w, y);
      }
    else if (w = H(r), typeof w == "function")
      for (r = w.call(r), R = 0; !(E = r.next()).done; )
        E = E.value, w = m + ie(E, R++), k += te(E, u, p, w, y);
    else if (E === "object")
      throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Y(r, u, p) {
    if (r == null)
      return r;
    var m = [], y = 0;
    return te(r, m, "", "", function(E) {
      return u.call(p, E, y++);
    }), m;
  }
  function G(r) {
    if (r._status === -1) {
      var u = r._result;
      u = u(), u.then(function(p) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = p);
      }, function(p) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = p);
      }), r._status === -1 && (r._status = 0, r._result = u);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var f = { current: null }, X = { transition: null }, he = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: X, ReactCurrentOwner: V };
  return v.Children = { map: Y, forEach: function(r, u, p) {
    Y(r, function() {
      u.apply(this, arguments);
    }, p);
  }, count: function(r) {
    var u = 0;
    return Y(r, function() {
      u++;
    }), u;
  }, toArray: function(r) {
    return Y(r, function(u) {
      return u;
    }) || [];
  }, only: function(r) {
    if (!ue(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, v.Component = q, v.Fragment = T, v.Profiler = b, v.PureComponent = Z, v.StrictMode = P, v.Suspense = N, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, v.cloneElement = function(r, u, p) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var m = z({}, r.props), y = r.key, E = r.ref, k = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (E = u.ref, k = V.current), u.key !== void 0 && (y = "" + u.key), r.type && r.type.defaultProps)
        var R = r.type.defaultProps;
      for (w in u)
        x.call(u, w) && !K.hasOwnProperty(w) && (m[w] = u[w] === void 0 && R !== void 0 ? R[w] : u[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      m.children = p;
    else if (1 < w) {
      R = Array(w);
      for (var M = 0; M < w; M++)
        R[M] = arguments[M + 2];
      m.children = R;
    }
    return { $$typeof: c, type: r.type, key: y, ref: E, props: m, _owner: k };
  }, v.createContext = function(r) {
    return r = { $$typeof: D, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: j, _context: r }, r.Consumer = r;
  }, v.createElement = J, v.createFactory = function(r) {
    var u = J.bind(null, r);
    return u.type = r, u;
  }, v.createRef = function() {
    return { current: null };
  }, v.forwardRef = function(r) {
    return { $$typeof: F, render: r };
  }, v.isValidElement = ue, v.lazy = function(r) {
    return { $$typeof: $, _payload: { _status: -1, _result: r }, _init: G };
  }, v.memo = function(r, u) {
    return { $$typeof: L, type: r, compare: u === void 0 ? null : u };
  }, v.startTransition = function(r) {
    var u = X.transition;
    X.transition = {};
    try {
      r();
    } finally {
      X.transition = u;
    }
  }, v.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, v.useCallback = function(r, u) {
    return f.current.useCallback(r, u);
  }, v.useContext = function(r) {
    return f.current.useContext(r);
  }, v.useDebugValue = function() {
  }, v.useDeferredValue = function(r) {
    return f.current.useDeferredValue(r);
  }, v.useEffect = function(r, u) {
    return f.current.useEffect(r, u);
  }, v.useId = function() {
    return f.current.useId();
  }, v.useImperativeHandle = function(r, u, p) {
    return f.current.useImperativeHandle(r, u, p);
  }, v.useInsertionEffect = function(r, u) {
    return f.current.useInsertionEffect(r, u);
  }, v.useLayoutEffect = function(r, u) {
    return f.current.useLayoutEffect(r, u);
  }, v.useMemo = function(r, u) {
    return f.current.useMemo(r, u);
  }, v.useReducer = function(r, u, p) {
    return f.current.useReducer(r, u, p);
  }, v.useRef = function(r) {
    return f.current.useRef(r);
  }, v.useState = function(r) {
    return f.current.useState(r);
  }, v.useSyncExternalStore = function(r, u, p) {
    return f.current.useSyncExternalStore(r, u, p);
  }, v.useTransition = function() {
    return f.current.useTransition();
  }, v.version = "18.2.0", v;
}
process.env.NODE_ENV === "production" ? ze.exports = Br() : ze.exports = qr();
var jt = ze.exports;
const Hr = /* @__PURE__ */ Yr(jt), Kr = /* @__PURE__ */ zr({
  __proto__: null,
  default: Hr
}, [jt]);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gr = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), kt = /* @__PURE__ */ new WeakMap(), Qr = (c, s, T, P, b) => {
  const j = b == null ? void 0 : b[s];
  j === void 0 || T === P ? (c[s] = T, T == null && s in HTMLElement.prototype && c.removeAttribute(s)) : ((D, F, N) => {
    let L = kt.get(D);
    L === void 0 && kt.set(D, L = /* @__PURE__ */ new Map());
    let $ = L.get(F);
    N !== void 0 ? $ === void 0 ? (L.set(F, $ = { handleEvent: N }), D.addEventListener(F, $)) : $.handleEvent = N : $ !== void 0 && (L.delete(F), D.removeEventListener(F, $));
  })(c, j, T);
}, Jr = ({ react: c, tagName: s, elementClass: T, events: P, displayName: b }) => {
  const j = new Set(Object.keys(P ?? {})), D = c.forwardRef((F, N) => {
    const L = c.useRef(null), $ = c.useRef(null), W = {}, H = {};
    for (const [g, z] of Object.entries(F))
      Gr.has(g) ? W[g === "className" ? "class" : g] = z : j.has(g) || g in T.prototype ? H[g] = z : W[g] = z;
    return c.useLayoutEffect(() => {
      if ($.current !== null) {
        for (const g in H)
          Qr($.current, g, F[g], L.current ? L.current[g] : void 0, P);
        L.current = F;
      }
    }), c.useLayoutEffect(() => {
      var g;
      (g = $.current) == null || g.removeAttribute("defer-hydration");
    }, []), W.suppressHydrationWarning = !0, c.createElement(s, { ...W, ref: c.useCallback((g) => {
      $.current = g, typeof N == "function" ? N(g) : N !== null && (N.current = g);
    }, [N]) });
  });
  return D.displayName = b ?? T.name, D;
};
var Xr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, Ye = (c, s, T, P) => {
  for (var b = P > 1 ? void 0 : P ? Zr(s, T) : s, j = c.length - 1, D; j >= 0; j--)
    (D = c[j]) && (b = (P ? D(s, T, b) : D(b)) || b);
  return P && b && Xr(s, T, b), b;
};
class en {
  constructor(s, T) {
    this.name = s, this.answers = T;
  }
}
let oe = class extends Ur {
  constructor() {
    super(...arguments), this.question = {
      name: "What color is the dog ???",
      answers: ["blue", "black", "red", "yellow"]
    }, this.correctAnswer = "black", this.isPassed = !1, this.isSelected = !1, this.message = "";
  }
  render() {
    if (typeof this.question == "string") {
      const c = JSON.parse(this.question);
      this.question = c;
    }
    return Pe`
      ${Wr(
      this.isPassed,
      () => Pe`
          <div
            style="display: flex; flex-direction: column; align-items:center"
          >
            <h1 style="text-align: center">Passed</h1>
            <button style="max-width: 50px" @click="${this.resetQuiz}">
              Reset
            </button>
          </div>
        `,
      () => Pe`
            <div class="quiz-container">
              <h3>${this.question.name}</h3>
              <ul class="answer__list">
                ${this.question.answers.map((c, s) => Pe`
                    <li class="answer__list-item">
                      <div class="item__checkbox">
                        <input
                          ?disabled=${this.isSelected}
                          @input=${this.onSelected}
                          id="${c}"
                          name="${this.question}"
                          type="radio"
                          value="${c}"
                        />
                        <label for="${c}"
                          >${this.numberToAlphabet(
        s + 1
      )}.${c}</label
                        >
                      </div>
                    </li>
                  `)}
              </ul>
              <h1>${this.message}</h1>
              <button ?hidden=${!this.isSelected} style="max-width: 50px" @click="${this.resetQuiz}">
                Reset
              </button>
            </div>
          `
    )}
    `;
  }
  numberToAlphabet(c) {
    return Number.isInteger(c) && c > 0 ? String.fromCharCode(c + 64) : "Invalid input. Please provide a positive integer.";
  }
  onSelected(c) {
    c.preventDefault();
    const s = c.target;
    this.correctAnswer === s.value ? (this.isPassed = !this.isPassed, this.isSelected = !this.isSelected, this.requestUpdate()) : (this.message = "Your answer is incorrect", this.isSelected = !this.isSelected, this.requestUpdate());
  }
  resetQuiz() {
    this.isPassed = !1, this.isSelected = !1, this.message = "", this.requestUpdate();
  }
};
oe.styles = Mr`
    h3 {
      text-align: center;
    }
    ul {
      list-style-type: none;
    }
    .quiz-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .answer__list {
      display: flex;
      flex-wrap: wrap;
      max-width: 400px;
    }
    .answer__list-item {
      flex: 1 0 100px;
    }
  `;
Ye([
  At({ type: en })
], oe.prototype, "question", 2);
Ye([
  At({ type: String })
], oe.prototype, "correctAnswer", 2);
oe = Ye([
  Vr("cox-quiz")
], oe);
const an = Jr({
  tagName: "cox-quiz",
  elementClass: oe,
  react: Kr
});
export {
  oe as CoxQuiz,
  an as CoxQuizReact
};
//# sourceMappingURL=cox-quiz.js.map
