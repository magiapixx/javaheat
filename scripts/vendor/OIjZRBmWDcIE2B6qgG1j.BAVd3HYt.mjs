import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { M as t, R as n, T as r, y as i, z as a } from "./react.DfujhmXs.mjs";
import { K as o, Mt as s, o as c, pt as l } from "./framer.DGJFnpg_.mjs";
var u, d, f;
function p() {
  return (p = e(() => {
    (o(),
      (u = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (d = {
        ...u,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (f = {
        onClick: { type: c.EventHandler },
        onMouseEnter: { type: c.EventHandler },
        onMouseLeave: { type: c.EventHandler },
      }),
      c.Number,
      c.Boolean,
      c.String,
      c.Enum);
  }))();
}
function m(e, t) {
  return g(!0, e, t);
}
function h(e, t) {
  return g(!1, e, t);
}
function g(e, t, n = !0) {
  let r = l();
  i(() => {
    n && r === e && t();
  }, [r]);
}
function _() {
  return (_ = e(() => {
    (o(), r());
  }))();
}
function v() {
  return (v = e(() => {
    r();
  }))();
}
function y() {
  return (y = e(() => {
    o();
  }))();
}
function b() {
  return (b = e(() => {
    o();
  }))();
}
function x() {
  return (x = e(() => {
    r();
  }))();
}
function S() {
  return (S = e(() => {
    o();
  }))();
}
var C, w;
function T() {
  return (T = e(() => {
    (n(),
      r(),
      (C = () => {
        if (a !== void 0) {
          let e = a.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        }
        return !1;
      }),
      (w = () => t(() => C(), [])));
  }))();
}
function E() {
  return (E = e(() => {
    (r(), b());
  }))();
}
function D() {
  return (D = e(() => {
    (r(), o(), b(), v());
  }))();
}
function O() {
  return (O = e(() => {
    (o(), r(), p());
  }))();
}
function k() {
  return t(() => s.current(), []);
}
function A() {
  return t(() => s.current() === s.canvas, []);
}
function j() {
  return (j = e(() => {
    (r(), o());
  }))();
}
function M() {
  return (M = e(() => {
    r();
  }))();
}
function N(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var P;
function F() {
  return (F = e(() => {
    (r(),
      o(),
      (P = {
        borderRadius: {
          title: `Radius`,
          type: c.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      c.FusedNumber);
  }))();
}
function I() {
  return (I = e(() => {
    (p(), _(), v(), y(), b(), x(), S(), T(), E(), D(), O(), j(), M(), F());
  }))();
}
export {
  j as a,
  T as c,
  m as d,
  h as f,
  p as g,
  d as h,
  N as i,
  w as l,
  f as m,
  P as n,
  A as o,
  u as p,
  F as r,
  k as s,
  I as t,
  _ as u,
};
//# sourceMappingURL=OIjZRBmWDcIE2B6qgG1j.BAVd3HYt.mjs.map
