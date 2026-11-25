import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  D as n,
  E as r,
  F as i,
  L as a,
  M as o,
  P as s,
  R as c,
  S as l,
  T as u,
  _ as d,
  b as f,
  c as p,
  j as m,
  k as h,
  l as g,
  o as _,
  p as v,
  s as y,
  w as ee,
  x as b,
  y as x,
} from "./react.DfujhmXs.mjs";
import {
  B as te,
  K as ne,
  Q as S,
  T as C,
  W as w,
  et as T,
  i as E,
  m as re,
  o as D,
  t as O,
  v as ie,
  w as ae,
} from "./motion.BoJ_50qN.mjs";
import {
  $ as oe,
  A as k,
  At as A,
  B as j,
  C as M,
  Ct as se,
  D as ce,
  E as le,
  Et as ue,
  K as de,
  L as N,
  Mt as fe,
  Ot as P,
  S as F,
  T as pe,
  _t as me,
  a as I,
  bt as he,
  ct as ge,
  dt as _e,
  f as L,
  ft as ve,
  i as R,
  j as z,
  k as B,
  m as ye,
  mt as V,
  o as H,
  st as be,
  t as xe,
  u as Se,
  v as Ce,
  vt as we,
  w as Te,
  wt as Ee,
  xt as De,
  y as U,
  yt as Oe,
  z as W,
} from "./framer.DGJFnpg_.mjs";
import {
  a as ke,
  c as Ae,
  g as je,
  h as G,
  i as Me,
  l as Ne,
  o as K,
  r as Pe,
  s as q,
  u as Fe,
} from "./toplevel-deps.XDVeXK4X.mjs";
import {
  a as Ie,
  c as Le,
  i as Re,
  n as ze,
  o as J,
  r as Be,
  s as Ve,
  t as He,
} from "./NumberAnimator.Bo2em_sU.mjs";
import { i as Ue, r as We } from "./shared-lib.C0OaH8ZN.mjs";
import { n as Ge, t as Ke } from "./ac59bCYp4.C7MwWm7Z.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./l__4UHlzt.74k9u9BQ.mjs";
import { n as Ze, t as Qe } from "./iy216z1H2.RkE08bQ8.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./GzMbxD0G0.KqlKB3xq.mjs";
import { i as rt, n as it, r as at, t as ot } from "./XorWCRDBg.Cyw4W0eA.mjs";
import { i as st, n as ct, r as lt, t as ut } from "./CkbU37qav.BqWyj--f.mjs";
import { i as dt, n as ft, r as pt, t as mt } from "./P89o9sRK1.DNBvNxpc.mjs";
import { n as ht, t as gt } from "./q98WlWaa9.DeV4Bwei.mjs";
import { n as _t, t as vt } from "./t0GRKkwHB.4mSMwzSd.mjs";
import { n as yt, t as bt } from "./UKogvHbQu.CY3gQZfl.mjs";
import { i as xt, n as St, r as Ct, t as wt } from "./mOcxLNaxt.D2yYFsej.mjs";
import { i as Tt, t as Et } from "./n0JwbvZ2A.BJNPcq3v.mjs";
import { i as Dt, t as Ot } from "./QPz26w_mL.Bloxq0OJ.mjs";
import { i as kt, t as At } from "./zBTWiSfRK.CBeXZjSN.mjs";
import { i as jt, n as Mt, r as Nt, t as Pt } from "./lR3sdILUN.CtI7Sz3I.mjs";
import { i as Ft, n as It, r as Lt, t as Rt } from "./mbODXwEBO.DVh8Mvma.mjs";
import { i as zt, n as Bt, r as Vt, t as Ht } from "./v03SSkN8P.ClDd94vB.mjs";
import { n as Ut, r as Wt } from "./augiA20Il.DRm_s8mD.mjs";
var Gt;
function Kt() {
  return (Kt = e(() => {
    Gt = (e) => e;
  }))();
}
function qt() {
  return (qt = e(() => {
    Kt();
  }))();
}
function Jt() {
  return (Jt = e(() => {
    qt();
  }))();
}
function Yt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
function Xt() {
  return (Xt = e(() => {}))();
}
var Zt;
function Qt() {
  return (Qt = e(() => {
    ((Zt = {}),
      Object.defineProperty(Zt, "__esModule", { value: !0 }),
      (Zt.warning = function () {}),
      (Zt.invariant = function () {}),
      Zt.__esModule,
      Zt.warning,
      Zt.invariant);
  }))();
}
function $t() {
  return ($t = e(() => {
    Kt();
  }))();
}
function en(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function tn(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = en(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : wn[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function nn(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function rn({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Tn.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return nn(e, n);
        },
      });
    });
}
function an(e) {
  e.forEach(rn);
}
function on() {
  typeof ResizeObserver < `u` && (En = new ResizeObserver(an));
}
function sn(e, t) {
  En || on();
  let n = en(e);
  return (
    n.forEach((e) => {
      let n = Tn.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), Tn.set(e, n)), n.add(t), En?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Tn.get(e);
        (n?.delete(t), (n != null && n.size) || En == null || En.unobserve(e));
      });
    }
  );
}
function cn() {
  ((On = () => {
    let e = { width: t.innerWidth, height: t.innerHeight },
      n = { target: t, size: e, contentSize: e };
    Dn.forEach((e) => e(n));
  }),
    t.addEventListener(`resize`, On));
}
function ln(e) {
  return (
    Dn.add(e),
    On || cn(),
    () => {
      (Dn.delete(e), !Dn.size && On && (On = void 0));
    }
  );
}
function un(e, t) {
  return typeof e == `function` ? ln(e) : sn(e, t);
}
function dn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function fn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn;
function Mn() {
  return (Mn = e(() => {
    (c(),
      Kt(),
      Jt(),
      Xt(),
      Qt(),
      $t(),
      (pn = [``, `X`, `Y`, `Z`]),
      (mn = [`translate`, `scale`, `rotate`, `skew`]),
      (hn = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (gn = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: hn,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Gt },
        skew: hn,
      }),
      (_n = /* @__PURE__ */ new Map()),
      (vn = (e) => `--motion-${e}`),
      (yn = [`x`, `y`, `z`]),
      mn.forEach((e) => {
        pn.forEach((t) => {
          (yn.push(e + t), _n.set(vn(e + t), gn[e]));
        });
      }),
      new Set(yn),
      (bn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (xn = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            bn({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!bn({ opacity: [0, 1] }).finished,
      }),
      (Sn = {}),
      (Cn = {}));
    for (let e in xn) Cn[e] = () => (Sn[e] === void 0 && (Sn[e] = xn[e]()), Sn[e]);
    ((wn = { any: 0, all: 1 }),
      (Tn = /* @__PURE__ */ new WeakMap()),
      (Dn = /* @__PURE__ */ new Set()),
      (kn = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return tn(
            e,
            (r) => {
              if ((t(), fn(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), fn(e, `viewleave`, t));
                };
            },
            Yt(r, [`once`])
          );
        },
      }),
      (An = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), dn(e, t, r));
      }),
      (jn = {
        inView: kn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = An(e, `hoverstart`, t),
              i = An(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: n, disable: r }) => {
            let i = (n) => {
                (r(), dn(e, `pressend`, n), t.removeEventListener(`pointerup`, i));
              },
              a = (r) => {
                (n(), dn(e, `pressstart`, r), t.addEventListener(`pointerup`, i));
              };
            return (
              e.addEventListener(`pointerdown`, a),
              () => {
                (e.removeEventListener(`pointerdown`, a), t.removeEventListener(`pointerup`, i));
              }
            );
          },
        },
      }),
      [...Object.keys(jn)]);
  }))();
}
function Nn() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function Pn(e) {
  let t = b.useRef(Nn);
  return (
    b.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      In() && Nn();
      let n = t.current;
      return n(...e);
    }
  );
}
var Fn, In;
function Ln() {
  return (Ln = e(() => {
    (u(),
      (Fn = b.createContext(!0)),
      (In =
        `use` in b
          ? () => {
              try {
                return b.use(Fn);
              } catch {
                return !1;
              }
            }
          : () => !1));
  }))();
}
function Rn(e) {
  let {
      slots: i = [],
      startFrom: a,
      direction: o,
      effectsOptions: c,
      autoPlayControl: l,
      dragControl: u,
      alignment: p,
      gap: m,
      padding: v,
      paddingPerSide: y,
      paddingTop: ee,
      paddingRight: b,
      paddingBottom: E,
      paddingLeft: D,
      itemAmount: O,
      fadeOptions: ae,
      intervalControl: oe,
      transitionControl: k,
      arrowOptions: A,
      borderRadius: j,
      progressOptions: M,
      style: se,
    } = e,
    {
      effectsOpacity: ce,
      effectsScale: le,
      effectsRotate: ue,
      effectsPerspective: de,
      effectsHover: N,
      playOffscreen: P,
    } = c,
    { fadeContent: F, overflow: pe, fadeWidth: me, fadeInset: I, fadeAlpha: he } = ae,
    {
      showMouseControls: ge,
      arrowSize: _e,
      arrowRadius: L,
      arrowFill: ve,
      leftArrow: R,
      rightArrow: z,
      arrowShouldSpace: B = !0,
      arrowShouldFadeIn: ye = !1,
      arrowPosition: V,
      arrowPadding: H,
      arrowGap: be,
      arrowPaddingTop: xe,
      arrowPaddingRight: Se,
      arrowPaddingBottom: Ce,
      arrowPaddingLeft: we,
    } = A,
    {
      showProgressDots: Te,
      dotSize: Ee,
      dotsInset: De,
      dotsRadius: U,
      dotsPadding: Oe,
      dotsGap: W,
      dotsFill: ke,
      dotsBackground: Ae,
      dotsActiveOpacity: je,
      dotsOpacity: G,
      dotsBlur: Me,
    } = M,
    Ne = y ? `${ee}px ${b}px ${E}px ${D}px` : `${v}px`,
    K = fe.current() === fe.canvas,
    Pe = i.filter(Boolean),
    q = r.count(Pe);
  if (!(q > 0))
    return /*#__PURE__*/ g(`section`, {
      style: Yn,
      children: [
        /*#__PURE__*/ _(`div`, { style: Xn, children: `⭐️` }),
        /*#__PURE__*/ _(`p`, { style: Zn, children: `Connect to Content` }),
        /*#__PURE__*/ _(`p`, {
          style: Qn,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Fe = f(null),
    Ie = f(null),
    Le = h((e) => {
      ((Fe.current = e), Fe.current && tt());
    }, []),
    [Re, ze] = d({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    J = o === `left` || o === `right`,
    Be = Bn(),
    Ve = J && Be === `rtl` ? -1 : 1,
    [He, Ue] = d(!1),
    [We, Ge] = d(l),
    [Ke, qe] = d(!1),
    Je = Re?.item !== null && Re?.parent !== null && Be !== null,
    Ye = Math.ceil((a + O) / q),
    Xe = [],
    Ze = Ye * 4;
  (K || !Je) && (Ze = Ye);
  let [Qe, $e] = d(a + q);
  x(() => {
    if (!Re.item || !Be) return;
    let e = -1 * Qe * ((Re.item ?? 0) + m) * (Be === `rtl` ? -1 : 1);
    ct.get() !== e && re(ct, e, k);
  }, [Qe, Re.item, m, Be]);
  let et = () => {
      let e = Ie.current;
      if (!e) return;
      let n = e.width,
        r = e.height,
        i = J ? n : r,
        a = Math.max(1, O),
        o = Math.max(0, (i - m * (a - 1)) / a),
        s = q * (o + m),
        c = J ? o : n,
        l = J ? r : o,
        u = J
          ? Math.max(document.documentElement.clientWidth || 0, t.innerWidth || 0, n)
          : Math.max(document.documentElement.clientHeight || 0, t.innerHeight || 0, r);
      ze({ parent: i, children: s, item: o, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    tt = Pn(() => {
      ie.read(et, !1, !0);
    });
  (n(() => {
    tt();
  }, [Pe.length, O, m, o, v, y, ee, b, E, D]),
    x(() => {
      let e = Fe.current;
      if (e)
        return un(e, ({ size: e }) => {
          ((Ie.current = e), e.width && e.height && tt());
        });
    }, []));
  let nt = K ? 0 : Re?.children,
    [rt, it] = d(!1),
    at = f(null),
    ot = te(at),
    st = ne() && ot,
    ct = w(nt),
    lt = K
      ? w(0)
      : S(ct, (e) => {
          let t = nt ?? 0,
            n = e ?? 0,
            r = T(-t * Ve, -t * Ve * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    ut = T(0, q, Qe),
    dt = (e) => {
      s(() => $e((t) => t + e));
    },
    ft = (e) => {
      let t = e - T(0, q, Qe);
      s(() => $e((e) => e + t));
    },
    pt = (o === `right` || o === `bottom` ? -1 : 1) * Ve,
    mt = l && We && (P || st) && !K && q > 1 && !rt && Je;
  x(() => {
    if (!mt) return;
    let e = setTimeout(() => {
      dt(pt);
    }, oe * 1e3);
    return () => clearTimeout(e);
  }, [mt, pt, oe, Qe]);
  let ht = () => {
      s(() => it(!0));
    },
    gt = (e, { offset: t, velocity: n }) => {
      s(() => it(!1));
      let r = J ? t.x : t.y,
        i = J ? n.x : n.y,
        a = r < -Re.item / 2,
        o = r > Re.item / 2,
        c = Math.round(Math.abs(r) / Re.item),
        l = c === 0 ? 1 : c;
      i > 200 ? dt(-l * Ve) : i < -200 ? dt(l * Ve) : (a && dt(c * Ve), o && dt(-c * Ve));
    },
    _t = Math.max(0, Math.min(a ?? 0, Math.max(0, q - 1))),
    vt = (_t * 100) / O,
    yt = (_t * m) / O,
    bt = 0,
    xt = `calc(${100 / O}% - ${m}px + ${m / O}px)`;
  for (let e = 0; e < Ze; e++)
    Xe = Xe.concat(
      r.map(Pe, (t, n) =>
        /*#__PURE__*/ _(
          nr,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: J && O > 1 ? xt : `100%`,
            height: J ? `100%` : O > 1 ? xt : `100%`,
            size: Re,
            child: t,
            numChildren: Pe?.length,
            wrappedXOrY: lt,
            childCounter: bt++,
            gap: m,
            isCanvas: K,
            isInitialized: Je,
            isHorizontal: J,
            effectsOpacity: ce,
            effectsScale: le,
            effectsRotate: ue,
            writingDirection: Be,
            rtlDirectionModifier: Ve,
            children: e + n,
          },
          e + n + `lg`
        )
      )
    );
  let St = J ? `to right` : `to bottom`,
    Ct = me / 2,
    wt = 100 - me / 2,
    Tt = `linear-gradient(${St}, rgba(0, 0, 0, ${he}) ${tr(I, 0, Ct)}%, rgba(0, 0, 0, 1) ${Ct}%, rgba(0, 0, 0, 1) ${wt}%, rgba(0, 0, 0, ${he}) ${100 - I}%)`,
    Et = [],
    Dt = {};
  if (Te) {
    for (let e = 0; e < Pe?.length; e++)
      Et.push(
        /*#__PURE__*/ _(
          rr,
          {
            dotStyle: { ...ar, width: Ee, height: Ee, backgroundColor: ke },
            buttonStyle: $n,
            selectedOpacity: je,
            opacity: G,
            disabled: !K && !Je,
            onClick: () => ft(e),
            wrappedIndex: K || !Je ? _t : ut,
            total: q,
            index: e,
            gap: W,
            padding: Oe,
            isHorizontal: J,
          },
          e
        )
      );
    Me > 0 && (Dt.backdropFilter = Dt.WebkitBackdropFilter = `blur(${Me}px)`);
  }
  let Ot =
      Je && u
        ? {
            drag: J ? `x` : `y`,
            onDragStart: ht,
            onDragEnd: gt,
            dragDirectionLock: !0,
            values: { x: ct, y: ct },
            dragMomentum: !1,
          }
        : {},
    kt = V === `top-left` || V === `top-mid` || V === `top-right`,
    At = V === `bottom-left` || V === `bottom-mid` || V === `bottom-right`,
    jt = V === `top-left` || V === `bottom-left`,
    Mt = V === `top-right` || V === `bottom-right`,
    Nt = V === `top-mid` || V === `bottom-mid` || V === `auto`,
    Pt = R || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    Ft = z || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return /*#__PURE__*/ g(`section`, {
    className: `${Hn} ${J ? Un : Wn}`,
    style: {
      ...Jn,
      padding: Ne,
      WebkitMaskImage: F ? Tt : void 0,
      maskImage: F ? Tt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Ue(!0), N || Ge(!1));
    },
    onMouseLeave: () => {
      (Ue(!1), N || Ge(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), s(() => qe(!0)));
    },
    onMouseUp: () => s(() => qe(!1)),
    ref: at,
    children: [
      /*#__PURE__*/ _(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: pe ? `visible` : `hidden`,
          borderRadius: j,
          userSelect: `none`,
          perspective: K ? `none` : de,
        },
        children: /*#__PURE__*/ _(C.ul, {
          ref: Le,
          ...Ot,
          style: {
            ...Jn,
            gap: m,
            placeItems: p,
            ...(K || !Je
              ? {
                  transform: J
                    ? `translateX(calc(${Kn} * (${vt}% + ${yt}px)))`
                    : `translateY(calc(${Kn} * (${vt}% + ${yt}px)))`,
                }
              : { x: J ? lt : 0, y: J ? 0 : lt }),
            flexDirection: J ? `row` : `column`,
            transformStyle: ue !== 0 && !K ? `preserve-3d` : void 0,
            cursor: (K || Je) && u ? (Ke ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...se,
          },
          children: Xe,
        }),
      }),
      /*#__PURE__*/ g(`fieldset`, {
        style: { ...er },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          /*#__PURE__*/ g(C.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: J ? `row` : `column`,
              justifyContent: B ? `space-between` : `center`,
              gap: B ? `unset` : be,
              opacity: ye || (!K && !Je) ? 0 : 1,
              alignItems: `center`,
              inset: H,
              top: B ? H : kt ? xe : `unset`,
              left: B ? H : jt ? we : Nt ? 0 : `unset`,
              right: B ? H : Mt ? Se : Nt ? 0 : `unset`,
              bottom: B ? H : At ? Ce : `unset`,
            },
            animate: K || Je ? (ye ? { opacity: +!!He } : { opacity: 1 }) : { opacity: 0 },
            transition: k,
            children: [
              /*#__PURE__*/ _(C.button, {
                type: `button`,
                style: {
                  ...$n,
                  backgroundColor: ve,
                  width: _e,
                  height: _e,
                  borderRadius: L,
                  rotate: J ? 0 : 90,
                  display: ge ? `block` : `none`,
                  pointerEvents: K || Je ? `auto` : `none`,
                  cursor: K || Je ? `pointer` : `default`,
                },
                disabled: !(K || Je),
                onClick: () => dt(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ _(`img`, {
                  decoding: `async`,
                  width: _e,
                  height: _e,
                  src: J && Be === `rtl` ? Ft : Pt,
                  alt: `Back Arrow`,
                }),
              }),
              /*#__PURE__*/ _(C.button, {
                type: `button`,
                style: {
                  ...$n,
                  backgroundColor: ve,
                  width: _e,
                  height: _e,
                  borderRadius: L,
                  rotate: J ? 0 : 90,
                  display: ge ? `block` : `none`,
                  pointerEvents: K || Je ? `auto` : `none`,
                  cursor: K || Je ? `pointer` : `default`,
                },
                disabled: !(K || Je),
                onClick: () => dt(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ _(`img`, {
                  decoding: `async`,
                  width: _e,
                  height: _e,
                  src: J && Be === `rtl` ? Pt : Ft,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Et.length > 1
            ? /*#__PURE__*/ _(C.div, {
                style: {
                  ...ir,
                  left: J ? `50%` : De,
                  top: J ? `unset` : `50%`,
                  transform: J ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: J ? `row` : `column`,
                  bottom: J ? De : `unset`,
                  borderRadius: U,
                  backgroundColor: Ae,
                  userSelect: `none`,
                  ...Dt,
                  opacity: +!!K,
                  pointerEvents: K || Je ? `auto` : `none`,
                },
                animate: { opacity: +!!Je },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Et,
              })
            : null,
        ],
      }),
    ],
  });
}
function zn() {
  return t?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Bn() {
  let [e, t] = d(null);
  return (
    x(
      () => (
        t(zn()),
        Vn(() => {
          t(zn());
        })
      ),
      []
    ),
    e
  );
}
function Vn(e) {
  return (
    sr.push(e),
    or ||
      ((or = new MutationObserver(() => sr.forEach((e) => e()))),
      or.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (sr.splice(sr.indexOf(e), 1), sr.length === 0 && (or?.disconnect(), (or = null)));
    }
  );
}
var Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr;
function cr() {
  return (cr = e(() => {
    (c(),
      y(),
      Mn(),
      de(),
      O(),
      u(),
      Ln(),
      (Hn = `framer-slideshow`),
      (Un = `framer-slideshow-axis-x`),
      (Wn = `framer-slideshow-axis-y`),
      (Gn = `--framer-dir-multiplier`),
      (Kn = `var(${Gn}, -1)`),
      (qn = Ee(
        Rn,
        [`.${Un} { ${Gn}: -1; }`, `html[dir="rtl"] .${Un} { ${Gn}: 1; }`, `.${Wn} { ${Gn}: -1; }`],
        `framer-slideshow-component`
      )),
      (qn.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      ce(qn, {
        slots: { type: H.Array, title: `Content`, control: { type: H.ComponentInstance } },
        direction: {
          type: H.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: qn.defaultProps.direction,
        },
        autoPlayControl: { type: H.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: H.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: H.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: H.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: qn.defaultProps.startFrom,
        },
        effectsOptions: {
          type: H.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: qn.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: H.Number,
              title: `Scale`,
              defaultValue: qn.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: H.Number,
              title: `Perspective`,
              defaultValue: qn.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: H.Number,
              title: `Rotate`,
              defaultValue: qn.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: H.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: qn.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: H.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: qn.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: H.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: H.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: qn.defaultProps.itemAmount,
        },
        gap: { type: H.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: H.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: H.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: H.Transition,
          defaultValue: qn.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: H.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: H.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: H.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: H.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: H.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: H.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: H.Boolean,
              title: `Show`,
              defaultValue: qn.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: H.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: qn.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: H.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: H.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: H.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: qn.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: H.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: H.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: qn.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: H.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: H.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: H.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: H.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: H.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: H.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: H.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: H.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: H.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: H.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: H.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: H.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: H.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: H.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Jn = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Yn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Xn = { fontSize: 32, marginBottom: 10 }),
      (Zn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Qn = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      ($n = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (er = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (tr = (e, t, n) => Math.min(Math.max(e, t), n)),
      (nr = /*#__PURE__*/ l(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: i,
            size: o,
            gap: s,
            wrappedXOrY: c,
            numChildren: l,
            childCounter: u,
            isCanvas: d,
            isInitialized: p,
            effectsOpacity: m,
            effectsScale: h,
            effectsRotate: g,
            isHorizontal: v,
            index: y,
            writingDirection: ee,
            rtlDirectionModifier: b,
          } = e,
          te = f(null),
          ne = o?.item ?? 0,
          C = o?.parent ?? 0,
          w = (ne + s) * u,
          T = (v && ee === `rtl` ? [ne - s, 0, -C + ne - s, -C - s] : [-ne, 0, C - ne + s, C]).map(
            (e) => e - w * b
          ),
          re = !d && S(c, T, v && ee === `rtl` ? [g, 0, 0, -g] : [-g, 0, 0, g]),
          D = !d && S(c, T, [g, 0, 0, -g]),
          O = !d && S(c, T, [m, 1, 1, m]),
          ie = !d && S(c, T, [h, 1, 1, h]),
          oe = !d && S(c, T, v && ee === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          k =
            !d &&
            S(c, (e) => {
              let t = Math.min(T[1], T[2]),
                n = Math.max(T[1], T[2]);
              return e >= t && e <= n;
            });
        x(() => {
          if (!k || !p) return;
          function e(e) {
            let t = te?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(k.get()),
            k.on(`change`, (t) => {
              e(t);
            })
          );
        }, [p]);
        let A = d
            ? `visible`
            : S(
                c,
                [T[0] - o.viewportLength * b, ae(T[1], T[2], 0.5), T[3] + o.viewportLength * b],
                [`hidden`, `visible`, `hidden`]
              ),
          j = t + `child`;
        return /*#__PURE__*/ _(E, {
          inherit: `id`,
          id: j,
          children: /*#__PURE__*/ _(`li`, {
            style: { display: `contents` },
            children: /*#__PURE__*/ a(i, {
              ref: te,
              key: j,
              style: {
                ...i.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(p
                  ? {
                      opacity: O,
                      scale: ie,
                      originX: v ? oe : 0.5,
                      originY: v ? 0.5 : oe,
                      rotateY: v ? re : 0,
                      rotateX: v ? 0 : D,
                      visibility: A,
                    }
                  : {}),
              },
              layoutId: i.props.layoutId ? i.props.layoutId + `-original-` + y : void 0,
            }),
          }),
        });
      })),
      (rr = /*#__PURE__*/ l(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          h = l ? (r === 0 ? c : f) : c,
          g = l ? (r === n - 1 ? c : f) : c;
        return /*#__PURE__*/ _(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: h,
            paddingInlineEnd: g,
          },
          children: /*#__PURE__*/ _(C.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (ir = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (ar = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (or = null),
      (sr = []));
  }))();
}
function lr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Y;
function Sr() {
  return (Sr = e(() => {
    (y(),
      de(),
      O(),
      u(),
      K(),
      Fe(),
      (ur = [`v_6dzJNZD`, `aug10VDJu`, `y0rHWo5tm`]),
      (dr = `framer-WwK9m`),
      (fr = {
        aug10VDJu: `framer-v-26h5b5`,
        v_6dzJNZD: `framer-v-1728rtm`,
        y0rHWo5tm: `framer-v-1g7lpl8`,
      }),
      (pr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (hr = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (gr = C.create(i)),
      (_r = {
        "Black - Desktop": `y0rHWo5tm`,
        "Default - Desktop": `v_6dzJNZD`,
        "White - Desktop": `aug10VDJu`,
      }),
      (vr = ({ height: e, icon: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        ekCy3cFsq: t ??
          a.ekCy3cFsq ?? {
            alt: `Check Mark Arrow`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        TzoAmWk5W: r ?? a.TzoAmWk5W ?? `Manual & automated assembly`,
        variant: _r[a.variant] ?? a.variant ?? `v_6dzJNZD`,
      })),
      (yr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (br = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            ekCy3cFsq: m,
            TzoAmWk5W: h,
            ...v
          } = vr(e),
          {
            baseVariant: y,
            classNames: b,
            clearLoadingGesture: x,
            gestureHandlers: te,
            gestureVariant: ne,
            isLoading: S,
            setGestureState: w,
            setVariant: T,
            variants: re,
          } = se({
            cycleOrder: ur,
            defaultVariant: `v_6dzJNZD`,
            ref: r,
            variant: p,
            variantClassNames: fr,
          }),
          D = yr(e, re),
          O = B(dr, Pe, q);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(gr, {
            animate: re,
            initial: !1,
            children: /*#__PURE__*/ _(hr, {
              value: pr,
              children: /*#__PURE__*/ g(C.div, {
                ...v,
                ...te,
                className: B(O, `framer-1728rtm`, u, b),
                "data-framer-name": `Default - Desktop`,
                layoutDependency: D,
                layoutId: `v_6dzJNZD`,
                ref: r,
                style: { ...l },
                ...lr(
                  {
                    aug10VDJu: { "data-framer-name": `White - Desktop` },
                    y0rHWo5tm: { "data-framer-name": `Black - Desktop` },
                  },
                  y,
                  ne
                ),
                children: [
                  /*#__PURE__*/ _(C.div, {
                    className: `framer-qiz0od`,
                    "data-framer-name": `Icon`,
                    layoutDependency: D,
                    layoutId: `mOM26T8wN`,
                    children: /*#__PURE__*/ _(L, {
                      background: {
                        alt: `Check Mark Arrow`,
                        fit: `fit`,
                        loading: j((c?.y || 0) + 0 + 2),
                        pixelHeight: 10,
                        pixelWidth: 15,
                        sizes: `12px`,
                        ...mr(m),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-60wp9a`,
                      "data-framer-name": `Icon`,
                      layoutDependency: D,
                      layoutId: `e1Uxdik9Y`,
                      ...lr(
                        {
                          aug10VDJu: {
                            background: {
                              alt: `Check Mark Arrow`,
                              fit: `fit`,
                              loading: j((c?.y || 0) + 0 + 5),
                              pixelHeight: 10,
                              pixelWidth: 15,
                              sizes: `12px`,
                              ...mr(m),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          y0rHWo5tm: {
                            background: {
                              alt: `Check Mark Arrow`,
                              fit: `fit`,
                              loading: j((c?.y || 0) + 0 + 5),
                              pixelHeight: 10,
                              pixelWidth: 15,
                              sizes: `12px`,
                              ...mr(m),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        y,
                        ne
                      ),
                    }),
                  }),
                  /*#__PURE__*/ _(M, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ _(i, {
                      children: /*#__PURE__*/ _(C.p, {
                        className: `framer-styles-preset-15frtqy`,
                        "data-styles-preset": `P89o9sRK1`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                        },
                        children: `Manual & automated assembly`,
                      }),
                    }),
                    className: `framer-188r3g2`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `DXnFAF_Za`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    },
                    text: h,
                    variants: {
                      aug10VDJu: {
                        "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...lr(
                      {
                        aug10VDJu: {
                          children: /*#__PURE__*/ _(i, {
                            children: /*#__PURE__*/ _(C.p, {
                              className: `framer-styles-preset-gf9yid`,
                              "data-styles-preset": `XorWCRDBg`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                              },
                              children: `Manual & automated assembly`,
                            }),
                          }),
                        },
                        y0rHWo5tm: {
                          children: /*#__PURE__*/ _(i, {
                            children: /*#__PURE__*/ _(C.p, {
                              className: `framer-styles-preset-gf9yid`,
                              "data-styles-preset": `XorWCRDBg`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                              },
                              children: `Manual & automated assembly`,
                            }),
                          }),
                        },
                      },
                      y,
                      ne
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (xr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-WwK9m.framer-uaksb6, .framer-WwK9m .framer-uaksb6 { display: block; }`,
        `.framer-WwK9m.framer-1728rtm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 317px; }`,
        `.framer-WwK9m .framer-qiz0od { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-WwK9m .framer-60wp9a { flex: none; height: 12px; overflow: visible; position: relative; width: 12px; }`,
        `.framer-WwK9m .framer-188r3g2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-WwK9m.framer-v-26h5b5 .framer-qiz0od, .framer-WwK9m.framer-v-1g7lpl8 .framer-qiz0od { padding: 5px 0px 0px 0px; }`,
        ...Me,
        ...Ae,
      ]),
      (Y = Ee(br, xr, `framer-WwK9m`)),
      (Y.displayName = `Check List`),
      (Y.defaultProps = { height: 17, width: 317 }),
      ce(Y, {
        variant: {
          options: [`v_6dzJNZD`, `aug10VDJu`, `y0rHWo5tm`],
          optionTitles: [`Default - Desktop`, `White - Desktop`, `Black - Desktop`],
          title: `Variant`,
          type: H.Enum,
        },
        ekCy3cFsq: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `Check Mark Arrow`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `Icon`,
          type: H.ResponsiveImage,
        },
        TzoAmWk5W: {
          defaultValue: `Manual & automated assembly`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
      }),
      le(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...W(ke),
          ...W(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Cr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr;
function zr() {
  return (zr = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      rt(),
      (wr = { NEnlwlRlK: { hover: !0 } }),
      (Tr = [`NEnlwlRlK`, `hWM89qj0G`]),
      (Er = `framer-WGmml`),
      (Dr = { hWM89qj0G: `framer-v-1belnfl`, NEnlwlRlK: `framer-v-ghsq4f` }),
      (Or = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (kr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ar = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (jr = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Mr = { Desktop: `NEnlwlRlK`, Phone: `hWM89qj0G` }),
      (Nr = C.create(i)),
      (Pr = ({ height: e, id: t, image: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        GoiPb5LP9: r ?? o.GoiPb5LP9,
        jn6f0OKFO: i ?? o.jn6f0OKFO ?? `Breakthroughs powering manufacturing efficiency`,
        U8DtyHtUS: n ??
          o.U8DtyHtUS ?? {
            alt: `Blog Image`,
            pixelHeight: 720,
            pixelWidth: 700,
            src: `../../assets/images/u48JppC0L67MN952GwxQr0v8uY8.webp`,
            srcSet: `../../assets/images/u48JppC0L67MN952GwxQr0v8uY8.webp 700w`,
          },
        variant: Mr[o.variant] ?? o.variant ?? `NEnlwlRlK`,
      })),
      (Fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ir = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            jn6f0OKFO: m,
            U8DtyHtUS: h,
            GoiPb5LP9: v,
            ...y
          } = Pr(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: te,
            gestureHandlers: ne,
            gestureVariant: S,
            isLoading: w,
            setGestureState: T,
            setVariant: re,
            variants: D,
          } = se({
            cycleOrder: Tr,
            defaultVariant: `NEnlwlRlK`,
            enabledGestures: wr,
            ref: r,
            variant: p,
            variantClassNames: Dr,
          }),
          O = Fr(e, D),
          ie = B(Er, nt, ot),
          ae = kr(h);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(Nr, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ _(jr, {
              value: Or,
              children: /*#__PURE__*/ _(ye, {
                href: v,
                motionChild: !0,
                nodeId: `NEnlwlRlK`,
                openInNewTab: !1,
                scopeId: `K_DPGBMiS`,
                smoothScroll: !0,
                children: /*#__PURE__*/ g(C.a, {
                  ...y,
                  ...ne,
                  className: `${B(ie, `framer-ghsq4f`, u, x)} framer-1x52u9p`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `NEnlwlRlK`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...l,
                  },
                  ...Cr(
                    {
                      "NEnlwlRlK-hover": { "data-framer-name": void 0 },
                      hWM89qj0G: { "data-framer-name": `Phone` },
                    },
                    b,
                    S
                  ),
                  children: [
                    /*#__PURE__*/ g(C.div, {
                      className: `framer-8zipmx`,
                      "data-framer-name": `Info`,
                      layoutDependency: O,
                      layoutId: `lMnUgV0zE`,
                      children: [
                        /*#__PURE__*/ _(M, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ _(i, {
                            children: /*#__PURE__*/ _(C.h3, {
                              className: `framer-styles-preset-1f8or04`,
                              "data-styles-preset": `GzMbxD0G0`,
                              style: {
                                "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                              },
                              children: `Breakthroughs powering manufacturing efficiency`,
                            }),
                          }),
                          className: `framer-1rvbiqp`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `vFt2TgGQp`,
                          style: {
                            "--extracted-a0htzi": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                          },
                          text: m,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-12xchay`,
                          "data-border": !0,
                          "data-framer-name": `Text`,
                          layoutDependency: O,
                          layoutId: `jlkwlTIsM`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.p, {
                                className: `framer-styles-preset-gf9yid`,
                                "data-styles-preset": `XorWCRDBg`,
                                style: {
                                  "--framer-text-alignment": `right`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)))`,
                                },
                                children: `Read full blog`,
                              }),
                            }),
                            className: `framer-1j46pbg`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `p8zpchLDF`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52))`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    ae !== !1 &&
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-1v0re4k`,
                        "data-framer-name": `Image`,
                        layoutDependency: O,
                        layoutId: `Nq0Jrtsog`,
                        children: [
                          /*#__PURE__*/ _(C.div, {
                            className: `framer-1npkzaq`,
                            "data-framer-name": `Overlay`,
                            layoutDependency: O,
                            layoutId: `FbkUZfhof`,
                            style: {
                              background: `linear-gradient(180deg, var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0)) 0%, var(--token-e172eefe-fa79-4b58-b004-11668c5910f9, rgba(21, 21, 21, 0.85)) 100%)`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                          /*#__PURE__*/ _(L, {
                            background: {
                              alt: `Blog Image`,
                              fit: `fill`,
                              loading: j(
                                (c?.y || 0) +
                                  0 +
                                  (0 +
                                    ((c?.height || 553) -
                                      0 -
                                      0 -
                                      ((c?.height || 553) - 0 - 0) * 1) /
                                      2)
                              ),
                              pixelHeight: 720,
                              pixelWidth: 700,
                              sizes: `max(${c?.width || `100vw`}, 1px)`,
                              ...Ar(h),
                            },
                            className: `framer-1b86zz2`,
                            "data-border": !0,
                            "data-framer-name": `Image`,
                            layoutDependency: O,
                            layoutId: `ScbDmNs_g`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              borderBottomLeftRadius: 4,
                              borderBottomRightRadius: 4,
                              borderTopLeftRadius: 4,
                              borderTopRightRadius: 4,
                              scale: 1,
                            },
                            variants: { "NEnlwlRlK-hover": { scale: 1.05 } },
                            ...Cr(
                              {
                                hWM89qj0G: {
                                  background: {
                                    alt: `Blog Image`,
                                    fit: `fill`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (0 +
                                          ((c?.height || 400) -
                                            0 -
                                            0 -
                                            ((c?.height || 400) - 0 - 0) * 1) /
                                            2)
                                    ),
                                    pixelHeight: 720,
                                    pixelWidth: 700,
                                    sizes: `max(${c?.width || `100vw`}, 1px)`,
                                    ...Ar(h),
                                  },
                                },
                              },
                              b,
                              S
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Lr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-WGmml.framer-1x52u9p, .framer-WGmml .framer-1x52u9p { display: block; }`,
        `.framer-WGmml.framer-ghsq4f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 553px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; text-decoration: none; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-WGmml .framer-8zipmx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 200px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-WGmml .framer-1rvbiqp { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-WGmml .framer-12xchay { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-WGmml .framer-1j46pbg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-WGmml .framer-1v0re4k { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-WGmml .framer-1npkzaq { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }`,
        `.framer-WGmml .framer-1b86zz2 { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-WGmml.framer-v-1belnfl.framer-ghsq4f { cursor: unset; height: 400px; padding: 16px; }`,
        `.framer-WGmml.framer-v-1belnfl .framer-8zipmx { padding: 150px 0px 0px 0px; }`,
        ...et,
        ...it,
        `.framer-WGmml[data-border="true"]::after, .framer-WGmml [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Rr = Ee(Ir, Lr, `framer-WGmml`)),
      (Rr.displayName = `Latest Blog Card`),
      (Rr.defaultProps = { height: 553, width: 560 }),
      ce(Rr, {
        variant: {
          options: [`NEnlwlRlK`, `hWM89qj0G`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        jn6f0OKFO: {
          defaultValue: `Breakthroughs powering manufacturing efficiency`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        onjn6f0OKFOChange: { changes: `jn6f0OKFO`, type: H.ChangeHandler },
        U8DtyHtUS: {
          __defaultAssetReference: `data:framer/asset-reference,u48JppC0L67MN952GwxQr0v8uY8.webp?originalFilename=image+1.webp&width=700&height=720`,
          __vekterDefault: {
            alt: `Blog Image`,
            assetReference: `data:framer/asset-reference,u48JppC0L67MN952GwxQr0v8uY8.webp?originalFilename=image+1.webp&width=700&height=720`,
          },
          description: `Recommended size 700px X 720px`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
        GoiPb5LP9: { title: `Link`, type: H.Link },
      }),
      le(
        Rr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...W(tt),
          ...W(at),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei;
function ti() {
  return (ti = e(() => {
    (y(),
      de(),
      O(),
      u(),
      st(),
      rt(),
      (Br = ue(C.div)),
      (Vr = `framer-EUl0m`),
      (Hr = { e_jHhFHyX: `framer-v-1lvroi` }),
      (Ur = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Wr = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Gr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Wr,
        x: 0,
        y: 40,
      }),
      (Kr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Jr = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Yr = C.create(i)),
      (Xr = ({ height: e, id: t, image: n, jobTitle: r, name1: i, width: a, ...o }) => ({
        ...o,
        tgLOgzZYO: n ??
          o.tgLOgzZYO ?? {
            alt: `Hero Image`,
            pixelHeight: 3616,
            pixelWidth: 4800,
            src: `../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok-f58482.png`,
            srcSet: `../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok.png 512w,../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok-1d1c81.png 1024w,../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok-47bd52.png 2048w,../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok-644c13.png 4096w,../../assets/images/yZK2vzwKqUH8m15aeLGrA2alok-f58482.png 4800w`,
          },
        VEVmW5Gd_: r ?? o.VEVmW5Gd_ ?? `Founder & CEO`,
        zjkgRPS9n: i ?? o.zjkgRPS9n ?? `Michael R. Bennett`,
      })),
      (Zr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qr = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            tgLOgzZYO: m,
            zjkgRPS9n: h,
            VEVmW5Gd_: v,
            ...y
          } = Xr(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: te,
            gestureHandlers: ne,
            gestureVariant: S,
            isLoading: w,
            setGestureState: T,
            setVariant: re,
            variants: D,
          } = se({ defaultVariant: `e_jHhFHyX`, ref: r, variant: p, variantClassNames: Hr }),
          O = Zr(e, D),
          ie = B(Vr, ot, ut);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(Yr, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ _(Jr, {
              value: Kr,
              children: /*#__PURE__*/ g(Br, {
                ...y,
                ...ne,
                __framer__animate: { transition: Wr },
                __framer__animateOnce: !0,
                __framer__enter: Ur,
                __framer__exit: Gr,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                className: B(ie, `framer-1lvroi`, u, x),
                "data-border": !0,
                "data-framer-name": `Desktop`,
                layoutDependency: O,
                layoutId: `e_jHhFHyX`,
                ref: r,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-5193ac17-06d0-41c0-8684-9ecb585b5e26, rgba(21, 21, 21, 0.6))`,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  ...l,
                },
                children: [
                  /*#__PURE__*/ _(C.div, {
                    className: `framer-j7s405`,
                    "data-framer-name": `Top`,
                    layoutDependency: O,
                    layoutId: `XZ2mk6Giw`,
                    children: /*#__PURE__*/ _(L, {
                      background: {
                        alt: `Hero Image`,
                        fit: `fill`,
                        loading: j(
                          (c?.y || 0) + 10 + (((c?.height || 260) - 20 - 409) / 2 + 0 + 0) + 0
                        ),
                        pixelHeight: 3616,
                        pixelWidth: 4800,
                        sizes: `max(${c?.width || `100vw`} - 20px, 1px)`,
                        ...qr(m),
                      },
                      className: `framer-1ufu7h3`,
                      "data-framer-name": `Image`,
                      fitImageDimension: `height`,
                      layoutDependency: O,
                      layoutId: `kx6TDbOfd`,
                      style: {
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                    }),
                  }),
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-ugzn2i`,
                    "data-framer-name": `Bottom`,
                    layoutDependency: O,
                    layoutId: `HDEVWp3nW`,
                    children: [
                      /*#__PURE__*/ _(M, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ _(i, {
                          children: /*#__PURE__*/ _(C.p, {
                            className: `framer-styles-preset-gf9yid`,
                            "data-styles-preset": `XorWCRDBg`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                            },
                            children: `Michael R. Bennett`,
                          }),
                        }),
                        className: `framer-1dwmdlw`,
                        "data-framer-name": `Name`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `hfEJgzcyC`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                        },
                        text: h,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ _(M, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ _(i, {
                          children: /*#__PURE__*/ _(C.p, {
                            className: `framer-styles-preset-ecqg04`,
                            "data-styles-preset": `CkbU37qav`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162)))`,
                            },
                            children: `Founder & CEO`,
                          }),
                        }),
                        className: `framer-1slduo2`,
                        "data-framer-name": `Job Position`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `KuCg1wQdr`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      ($r = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-EUl0m.framer-14prkxk, .framer-EUl0m .framer-14prkxk { display: block; }`,
        `.framer-EUl0m.framer-1lvroi { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 250px; }`,
        `.framer-EUl0m .framer-j7s405 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EUl0m .framer-1ufu7h3 { flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
        `.framer-EUl0m .framer-ugzn2i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EUl0m .framer-1dwmdlw, .framer-EUl0m .framer-1slduo2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...it,
        ...ct,
        `.framer-EUl0m[data-border="true"]::after, .framer-EUl0m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (ei = Ee(Qr, $r, `framer-EUl0m`)),
      (ei.displayName = `Founder Card`),
      (ei.defaultProps = { height: 260, width: 250 }),
      ce(ei, {
        tgLOgzZYO: {
          __defaultAssetReference: `data:framer/asset-reference,yZK2vzwKqUH8m15aeLGrA2alok.png?originalFilename=Quote+Image.png&width=4800&height=3616`,
          __vekterDefault: {
            alt: `Hero Image`,
            assetReference: `data:framer/asset-reference,yZK2vzwKqUH8m15aeLGrA2alok.png?originalFilename=Quote+Image.png&width=4800&height=3616`,
          },
          description: `Recommended size 500px X 337px`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
        zjkgRPS9n: {
          defaultValue: `Michael R. Bennett`,
          displayTextArea: !0,
          title: `Name`,
          type: H.String,
        },
        onzjkgRPS9nChange: { changes: `zjkgRPS9n`, type: H.ChangeHandler },
        VEVmW5Gd_: {
          defaultValue: `Founder & CEO`,
          displayTextArea: !0,
          title: `Job Title`,
          type: H.String,
        },
        onVEVmW5Gd_Change: { changes: `VEVmW5Gd_`, type: H.ChangeHandler },
      }),
      le(
        ei,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...W(at),
          ...W(lt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function ni(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ri, ii, ai, oi, si, ci, X, li, ui, di, fi, pi, mi, hi, gi, _i;
function vi() {
  return (vi = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      dt(),
      rt(),
      J(),
      (ri = N(Ie)),
      (ii = [
        `TSrBstCza`,
        `qoYLd6aKR`,
        `qK9oeFfnY`,
        `r8jpcqWSX`,
        `uCXGgphvg`,
        `WQ1xzXXq7`,
        `YWjkBi3H1`,
        `ytEWO0O4M`,
        `NellhytPy`,
        `Gf1qe6zMq`,
      ]),
      (ai = `framer-xtRER`),
      (oi = {
        Gf1qe6zMq: `framer-v-myrv71`,
        NellhytPy: `framer-v-8jf0gy`,
        qK9oeFfnY: `framer-v-18na1h7`,
        qoYLd6aKR: `framer-v-1p9inwa`,
        r8jpcqWSX: `framer-v-61e47k`,
        TSrBstCza: `framer-v-1q5nreu`,
        uCXGgphvg: `framer-v-rs1f19`,
        WQ1xzXXq7: `framer-v-1lpdwvm`,
        ytEWO0O4M: `framer-v-1xu03hb`,
        YWjkBi3H1: `framer-v-7mi35m`,
      }),
      (si = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ci = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (li = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (ui = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (di = {
        "01 - Desktop": `TSrBstCza`,
        "01 - Phone": `WQ1xzXXq7`,
        "02 - Desktop": `qoYLd6aKR`,
        "02 - Phone": `YWjkBi3H1`,
        "03 - Desktop": `qK9oeFfnY`,
        "03 - Phone": `ytEWO0O4M`,
        "04 - Desktop": `r8jpcqWSX`,
        "04 - Phone": `NellhytPy`,
        "05 - Desktop": `uCXGgphvg`,
        "05 - Phone": `Gf1qe6zMq`,
      }),
      (fi = C.create(i)),
      (pi = ({
        height: e,
        id: t,
        tab1Avatar: n,
        tab1Description: r,
        tab1JobPosition: i,
        tab1Name: a,
        tab1RatingImage: o,
        tab2Avatar: s,
        tab2Description: c,
        tab2JobPosition: l,
        tab2Name: u,
        tab2RatingImage: d,
        tab3Avatar: f,
        tab3Description: p,
        tab3JobPosition: m,
        tab3Name: h,
        tab3RatingImage: g,
        tab4Avatar: _,
        tab4Description: v,
        tab4JobPosition: y,
        tab4Name: ee,
        tab4RatingImage: b,
        tab5Description: x,
        tab5JobPosition: te,
        tab5Name: ne,
        tab5RatingImage: S,
        width: C,
        ...w
      }) => ({
        ...w,
        AYDvo4x_3:
          p ??
          w.AYDvo4x_3 ??
          `Their precision engineering and attention to detail exceeded our expectations. From prototyping to delivery, the entire process was seamless and professional.`,
        b7QmGeWjC: m ?? w.b7QmGeWjC ?? `Procurement Manager`,
        bCEw0vtd4: b ??
          w.bCEw0vtd4 ?? {
            alt: `Rating Image`,
            pixelHeight: 19,
            pixelWidth: 121,
            src: `../../assets/images/2oshyrQnew7F9A6eokTgCg977o.svg`,
          },
        BcmyJu68n: l ?? w.BcmyJu68n ?? `Operations Manager`,
        COUeMXyAq: ee ?? w.COUeMXyAq ?? `Sofia Ramirez`,
        cp2ByEuWM: f ??
          w.cp2ByEuWM ?? {
            alt: `Avatar`,
            pixelHeight: 120,
            pixelWidth: 120,
            src: `../../assets/images/hhiqAWN8uopSow2Pn5F5PWR0lNM.png`,
          },
        cQ5qBV9Qo: te ?? w.cQ5qBV9Qo ?? `Project Coordinator at Stellar Industries`,
        F6ja_mTBa: _ ??
          w.F6ja_mTBa ?? {
            alt: `Avatar`,
            pixelHeight: 120,
            pixelWidth: 120,
            src: `../../assets/images/qtkXyVdAco2lPifyM5liIizpW4c.png`,
          },
        IJIykWyOe: n ??
          w.IJIykWyOe ?? {
            alt: `Avatar`,
            pixelHeight: 120,
            pixelWidth: 120,
            src: `../../assets/images/0jxLgyu1KT3iisfQG2TUjYiR02E.png`,
          },
        jNFlylFYR: d ??
          w.jNFlylFYR ?? {
            alt: `Rating Image`,
            pixelHeight: 19,
            pixelWidth: 121,
            src: `../../assets/images/2oshyrQnew7F9A6eokTgCg977o.svg`,
          },
        JsFD0M9Am:
          v ??
          w.JsFD0M9Am ??
          `I was impressed by their professionalism and attention to detail. Communication was clear, and the final product exceeded our expectations.`,
        mTKmyEice: y ?? w.mTKmyEice ?? `Marketing Lead at BrightWave Tech`,
        Ng1Eyn0qa: o ??
          w.Ng1Eyn0qa ?? {
            alt: `Rating Image`,
            pixelHeight: 19,
            pixelWidth: 121,
            src: `../../assets/images/2oshyrQnew7F9A6eokTgCg977o.svg`,
          },
        o4uJBiqrn: h ?? w.o4uJBiqrn ?? `John Matthews`,
        OxRja_wIU: s ??
          w.OxRja_wIU ?? {
            alt: `Avatar`,
            pixelHeight: 60,
            pixelWidth: 60,
            src: `../../assets/images/6i5vOQgN6XtXD6yWyD6yQkmNxM.png`,
          },
        q9aPVLc1l: g ??
          w.q9aPVLc1l ?? {
            alt: `Rating Image`,
            pixelHeight: 19,
            pixelWidth: 121,
            src: `../../assets/images/2oshyrQnew7F9A6eokTgCg977o.svg`,
          },
        QI2E_V7XK:
          r ??
          w.QI2E_V7XK ??
          `The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.`,
        SzFPWGX0i:
          c ??
          w.SzFPWGX0i ??
          `The precision and efficiency they demonstrated made the entire process effortless. I highly recommend them for any technical project.`,
        tUrrVs_VX:
          x ??
          w.tUrrVs_VX ??
          `The level of professionalism and commitment to quality was exceptional. Every detail was meticulously handled, making our collaboration stress-free.`,
        variant: di[w.variant] ?? w.variant ?? `TSrBstCza`,
        X4gLdF6fY: i ?? w.X4gLdF6fY ?? `Product Designer`,
        xYkDQSZCY: S ??
          w.xYkDQSZCY ?? {
            alt: `Rating Image`,
            pixelHeight: 19,
            pixelWidth: 121,
            src: `../../assets/images/2oshyrQnew7F9A6eokTgCg977o.svg`,
          },
        Ydtgst8YJ: a ?? w.Ydtgst8YJ ?? `Emily Carter`,
        Z023RuVYP: ne ?? w.Z023RuVYP ?? `Ethan Brooks`,
        ZXEDRpSP1: u ?? w.ZXEDRpSP1 ?? `Liam Thompson`,
      })),
      (mi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hi = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            IJIykWyOe: m,
            Ng1Eyn0qa: h,
            QI2E_V7XK: v,
            Ydtgst8YJ: y,
            X4gLdF6fY: b,
            OxRja_wIU: x,
            jNFlylFYR: te,
            SzFPWGX0i: ne,
            ZXEDRpSP1: S,
            BcmyJu68n: w,
            cp2ByEuWM: T,
            q9aPVLc1l: re,
            AYDvo4x_3: D,
            o4uJBiqrn: O,
            b7QmGeWjC: ie,
            F6ja_mTBa: ae,
            bCEw0vtd4: oe,
            JsFD0M9Am: k,
            COUeMXyAq: A,
            mTKmyEice: ce,
            xYkDQSZCY: le,
            tUrrVs_VX: ue,
            Z023RuVYP: de,
            cQ5qBV9Qo: N,
            ...fe
          } = pi(e),
          {
            baseVariant: P,
            classNames: F,
            clearLoadingGesture: pe,
            gestureHandlers: I,
            gestureVariant: he,
            isLoading: _e,
            setGestureState: ve,
            setVariant: z,
            variants: ye,
          } = se({
            cycleOrder: ii,
            defaultVariant: `TSrBstCza`,
            ref: r,
            variant: p,
            variantClassNames: oi,
          }),
          V = mi(e, ye),
          { activeVariantCallback: H, delay: xe } = be(P),
          Se = H(async (...e) => {
            z(`TSrBstCza`);
          }),
          Ce = H(async (...e) => {
            z(`WQ1xzXXq7`);
          }),
          we = H(async (...e) => {
            z(`qoYLd6aKR`);
          }),
          Ee = H(async (...e) => {
            z(`YWjkBi3H1`);
          }),
          De = H(async (...e) => {
            z(`qK9oeFfnY`);
          }),
          U = H(async (...e) => {
            z(`ytEWO0O4M`);
          }),
          Oe = H(async (...e) => {
            z(`r8jpcqWSX`);
          }),
          W = H(async (...e) => {
            z(`NellhytPy`);
          }),
          ke = H(async (...e) => {
            z(`uCXGgphvg`);
          }),
          Ae = H(async (...e) => {
            z(`Gf1qe6zMq`);
          }),
          je = B(ai, ot, nt, mt);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(fi, {
            animate: ye,
            initial: !1,
            children: /*#__PURE__*/ _(ui, {
              value: si,
              children: /*#__PURE__*/ g(C.div, {
                ...fe,
                ...I,
                className: B(je, `framer-1q5nreu`, u, F),
                "data-framer-name": `01 - Desktop`,
                layoutDependency: V,
                layoutId: `TSrBstCza`,
                ref: r,
                style: { ...l },
                ...ni(
                  {
                    Gf1qe6zMq: { "data-framer-name": `05 - Phone` },
                    NellhytPy: { "data-framer-name": `04 - Phone` },
                    qK9oeFfnY: { "data-framer-name": `03 - Desktop` },
                    qoYLd6aKR: { "data-framer-name": `02 - Desktop` },
                    r8jpcqWSX: { "data-framer-name": `04 - Desktop` },
                    uCXGgphvg: { "data-framer-name": `05 - Desktop` },
                    WQ1xzXXq7: { "data-framer-name": `01 - Phone` },
                    ytEWO0O4M: { "data-framer-name": `03 - Phone` },
                    YWjkBi3H1: { "data-framer-name": `02 - Phone` },
                  },
                  P,
                  he
                ),
                children: [
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-1lnpnwy`,
                    "data-framer-name": `Avatar Tab`,
                    layoutDependency: V,
                    layoutId: `NEzcyMheW`,
                    style: {
                      backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: [
                      /*#__PURE__*/ _(R, {
                        height: 50,
                        y: (c?.y || 0) + (0 + ((c?.height || 494) - 0 - 394) / 2) + 40 + 0,
                        ...ni(
                          {
                            Gf1qe6zMq: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            NellhytPy: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            r8jpcqWSX: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 0,
                            },
                            uCXGgphvg: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 0,
                            },
                            WQ1xzXXq7: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            ytEWO0O4M: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            YWjkBi3H1: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                          },
                          P,
                          he
                        ),
                        children: /*#__PURE__*/ _(Te, {
                          className: `framer-1i4j7m8-container`,
                          layoutDependency: V,
                          layoutId: `jSlWn0LnL-container`,
                          nodeId: `jSlWn0LnL`,
                          rendersWithMotion: !0,
                          scopeId: `mS2bfJ_OY`,
                          style: { opacity: 1 },
                          variants: {
                            Gf1qe6zMq: { opacity: 0.4 },
                            NellhytPy: { opacity: 0.4 },
                            qK9oeFfnY: { opacity: 0.4 },
                            qoYLd6aKR: { opacity: 0.4 },
                            r8jpcqWSX: { opacity: 0.4 },
                            uCXGgphvg: { opacity: 0.4 },
                            WQ1xzXXq7: { opacity: 1 },
                            ytEWO0O4M: { opacity: 0.4 },
                            YWjkBi3H1: { opacity: 0.4 },
                          },
                          children: /*#__PURE__*/ _(Ie, {
                            aEbvs76M6: ci(m),
                            gqcGLt8l2: Se,
                            height: `100%`,
                            id: `jSlWn0LnL`,
                            layoutId: `jSlWn0LnL`,
                            N1uOc8q4J: `10+`,
                            variant: X(`pBXYULulL`),
                            width: `100%`,
                            ...ni(
                              {
                                Gf1qe6zMq: { gqcGLt8l2: Ce, variant: X(`XDTRZ1Gi6`) },
                                NellhytPy: { gqcGLt8l2: Ce, variant: X(`XDTRZ1Gi6`) },
                                qK9oeFfnY: { gqcGLt8l2: void 0, variant: X(`GqNC55u34`) },
                                qoYLd6aKR: { variant: X(`GqNC55u34`) },
                                r8jpcqWSX: { variant: X(`GqNC55u34`) },
                                uCXGgphvg: { variant: X(`GqNC55u34`) },
                                WQ1xzXXq7: { gqcGLt8l2: Ce, variant: X(`BgIREeWdx`) },
                                ytEWO0O4M: { variant: X(`XDTRZ1Gi6`) },
                                YWjkBi3H1: { gqcGLt8l2: Ce, variant: X(`XDTRZ1Gi6`) },
                              },
                              P,
                              he
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ _(R, {
                        height: 50,
                        y: (c?.y || 0) + (0 + ((c?.height || 494) - 0 - 394) / 2) + 40 + 66,
                        ...ni(
                          {
                            Gf1qe6zMq: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            NellhytPy: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            r8jpcqWSX: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 66,
                            },
                            uCXGgphvg: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 66,
                            },
                            WQ1xzXXq7: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            ytEWO0O4M: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            YWjkBi3H1: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                          },
                          P,
                          he
                        ),
                        children: /*#__PURE__*/ _(Te, {
                          className: `framer-uax909-container`,
                          layoutDependency: V,
                          layoutId: `nI3nqEO_y-container`,
                          nodeId: `nI3nqEO_y`,
                          rendersWithMotion: !0,
                          scopeId: `mS2bfJ_OY`,
                          style: { opacity: 0.4 },
                          variants: { qoYLd6aKR: { opacity: 1 }, YWjkBi3H1: { opacity: 1 } },
                          children: /*#__PURE__*/ _(Ie, {
                            aEbvs76M6: li(
                              {
                                pixelHeight: 60,
                                pixelWidth: 60,
                                src: `../../assets/images/6i5vOQgN6XtXD6yWyD6yQkmNxM.png`,
                              },
                              `Avatar`
                            ),
                            gqcGLt8l2: we,
                            height: `100%`,
                            id: `nI3nqEO_y`,
                            layoutId: `nI3nqEO_y`,
                            N1uOc8q4J: `10+`,
                            variant: X(`GqNC55u34`),
                            width: `100%`,
                            ...ni(
                              {
                                Gf1qe6zMq: { gqcGLt8l2: Ee, variant: X(`XDTRZ1Gi6`) },
                                NellhytPy: { gqcGLt8l2: Ee, variant: X(`XDTRZ1Gi6`) },
                                qK9oeFfnY: { aEbvs76M6: ci(x) },
                                qoYLd6aKR: { aEbvs76M6: ci(x), variant: X(`pBXYULulL`) },
                                r8jpcqWSX: { aEbvs76M6: ci(x) },
                                uCXGgphvg: { aEbvs76M6: ci(x) },
                                WQ1xzXXq7: { gqcGLt8l2: Ee, variant: X(`XDTRZ1Gi6`) },
                                ytEWO0O4M: { gqcGLt8l2: Ee, variant: X(`XDTRZ1Gi6`) },
                                YWjkBi3H1: { gqcGLt8l2: Ee, variant: X(`BgIREeWdx`) },
                              },
                              P,
                              he
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ _(R, {
                        height: 50,
                        y: (c?.y || 0) + (0 + ((c?.height || 494) - 0 - 394) / 2) + 40 + 132,
                        ...ni(
                          {
                            Gf1qe6zMq: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            NellhytPy: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            r8jpcqWSX: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 132,
                            },
                            uCXGgphvg: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 132,
                            },
                            WQ1xzXXq7: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            ytEWO0O4M: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            YWjkBi3H1: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                          },
                          P,
                          he
                        ),
                        children: /*#__PURE__*/ _(Te, {
                          className: `framer-1eqb68u-container`,
                          layoutDependency: V,
                          layoutId: `lSSTBnIe4-container`,
                          nodeId: `lSSTBnIe4`,
                          rendersWithMotion: !0,
                          scopeId: `mS2bfJ_OY`,
                          style: { opacity: 0.4 },
                          variants: { qK9oeFfnY: { opacity: 1 }, ytEWO0O4M: { opacity: 1 } },
                          children: /*#__PURE__*/ _(Ie, {
                            aEbvs76M6: li(
                              {
                                pixelHeight: 120,
                                pixelWidth: 120,
                                src: `../../assets/images/hhiqAWN8uopSow2Pn5F5PWR0lNM.png`,
                              },
                              `Avatar`
                            ),
                            gqcGLt8l2: De,
                            height: `100%`,
                            id: `lSSTBnIe4`,
                            layoutId: `lSSTBnIe4`,
                            N1uOc8q4J: `10+`,
                            variant: X(`GqNC55u34`),
                            width: `100%`,
                            ...ni(
                              {
                                Gf1qe6zMq: { gqcGLt8l2: U, variant: X(`XDTRZ1Gi6`) },
                                NellhytPy: { gqcGLt8l2: U, variant: X(`XDTRZ1Gi6`) },
                                qK9oeFfnY: { aEbvs76M6: ci(T), variant: X(`pBXYULulL`) },
                                r8jpcqWSX: { aEbvs76M6: ci(T) },
                                uCXGgphvg: { aEbvs76M6: ci(T) },
                                WQ1xzXXq7: { gqcGLt8l2: U, variant: X(`XDTRZ1Gi6`) },
                                ytEWO0O4M: { gqcGLt8l2: U, variant: X(`BgIREeWdx`) },
                                YWjkBi3H1: { gqcGLt8l2: U, variant: X(`XDTRZ1Gi6`) },
                              },
                              P,
                              he
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ _(R, {
                        height: 50,
                        y: (c?.y || 0) + (0 + ((c?.height || 494) - 0 - 394) / 2) + 40 + 198,
                        ...ni(
                          {
                            Gf1qe6zMq: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            NellhytPy: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            r8jpcqWSX: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 198,
                            },
                            uCXGgphvg: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 198,
                            },
                            WQ1xzXXq7: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            ytEWO0O4M: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            YWjkBi3H1: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                          },
                          P,
                          he
                        ),
                        children: /*#__PURE__*/ _(Te, {
                          className: `framer-1oflhmj-container`,
                          layoutDependency: V,
                          layoutId: `pbfZdmxxm-container`,
                          nodeId: `pbfZdmxxm`,
                          rendersWithMotion: !0,
                          scopeId: `mS2bfJ_OY`,
                          style: { opacity: 0.4 },
                          variants: { NellhytPy: { opacity: 1 }, r8jpcqWSX: { opacity: 1 } },
                          children: /*#__PURE__*/ _(Ie, {
                            aEbvs76M6: li(
                              {
                                pixelHeight: 120,
                                pixelWidth: 120,
                                src: `../../assets/images/qtkXyVdAco2lPifyM5liIizpW4c.png`,
                              },
                              `Avatar`
                            ),
                            gqcGLt8l2: Oe,
                            height: `100%`,
                            id: `pbfZdmxxm`,
                            layoutId: `pbfZdmxxm`,
                            N1uOc8q4J: `10+`,
                            variant: X(`GqNC55u34`),
                            width: `100%`,
                            ...ni(
                              {
                                Gf1qe6zMq: { gqcGLt8l2: W, variant: X(`XDTRZ1Gi6`) },
                                NellhytPy: { gqcGLt8l2: W, variant: X(`BgIREeWdx`) },
                                r8jpcqWSX: { aEbvs76M6: ci(ae), variant: X(`pBXYULulL`) },
                                uCXGgphvg: { aEbvs76M6: ci(ae) },
                                WQ1xzXXq7: { gqcGLt8l2: W, variant: X(`XDTRZ1Gi6`) },
                                ytEWO0O4M: { gqcGLt8l2: W, variant: X(`XDTRZ1Gi6`) },
                                YWjkBi3H1: { gqcGLt8l2: W, variant: X(`XDTRZ1Gi6`) },
                              },
                              P,
                              he
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ _(R, {
                        height: 50,
                        y: (c?.y || 0) + (0 + ((c?.height || 494) - 0 - 394) / 2) + 40 + 264,
                        ...ni(
                          {
                            Gf1qe6zMq: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            NellhytPy: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            r8jpcqWSX: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 264,
                            },
                            uCXGgphvg: {
                              y: (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 394) / 2) + 40 + 264,
                            },
                            WQ1xzXXq7: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            ytEWO0O4M: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                            YWjkBi3H1: {
                              y:
                                (c?.y || 0) +
                                0 +
                                (((c?.height || 396) - 0 - 484.8) / 2 + 0 + 0) +
                                20,
                            },
                          },
                          P,
                          he
                        ),
                        children: /*#__PURE__*/ _(Te, {
                          className: `framer-el13iw-container`,
                          layoutDependency: V,
                          layoutId: `GATUxH2XV-container`,
                          nodeId: `GATUxH2XV`,
                          rendersWithMotion: !0,
                          scopeId: `mS2bfJ_OY`,
                          style: { opacity: 0.4 },
                          variants: { Gf1qe6zMq: { opacity: 1 }, uCXGgphvg: { opacity: 1 } },
                          children: /*#__PURE__*/ _(Ie, {
                            aEbvs76M6: li(
                              {
                                pixelHeight: 120,
                                pixelWidth: 120,
                                src: `../../assets/images/MEha40YUOB8a1BMhpa1x6CKgHM.png`,
                              },
                              `Avatar`
                            ),
                            gqcGLt8l2: ke,
                            height: `100%`,
                            id: `GATUxH2XV`,
                            layoutId: `GATUxH2XV`,
                            N1uOc8q4J: `10+`,
                            variant: X(`GqNC55u34`),
                            width: `100%`,
                            ...ni(
                              {
                                Gf1qe6zMq: { gqcGLt8l2: Ae, variant: X(`BgIREeWdx`) },
                                NellhytPy: { gqcGLt8l2: Ae, variant: X(`XDTRZ1Gi6`) },
                                uCXGgphvg: { variant: X(`pBXYULulL`) },
                                WQ1xzXXq7: { gqcGLt8l2: Ae, variant: X(`XDTRZ1Gi6`) },
                                ytEWO0O4M: { gqcGLt8l2: Ae, variant: X(`XDTRZ1Gi6`) },
                                YWjkBi3H1: { gqcGLt8l2: Ae, variant: X(`XDTRZ1Gi6`) },
                              },
                              P,
                              he
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-1gzeut5`,
                    "data-framer-name": `Info`,
                    layoutDependency: V,
                    layoutId: `rQnnI4hPe`,
                    style: {
                      backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: [
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-1kx57mw`,
                        "data-framer-name": `Top`,
                        layoutDependency: V,
                        layoutId: `UyiDGoWYl`,
                        children: [
                          /*#__PURE__*/ _(L, {
                            background: {
                              alt: `Rating Image`,
                              fit: `fit`,
                              loading: j(
                                (c?.y || 0) +
                                  (0 +
                                    ((c?.height || 494) - 0 - ((c?.height || 494) - 0) * 1) / 2) +
                                  50 +
                                  (0 + ((((c?.height || 494) - 0) * 1 - 100 - 281.8) / 1) * 0) +
                                  0 +
                                  0
                              ),
                              pixelHeight: 19,
                              pixelWidth: 121,
                              sizes: `182px`,
                              ...ci(h),
                              positionX: `center`,
                              positionY: `center`,
                            },
                            className: `framer-qhyrbn`,
                            fitImageDimension: `height`,
                            layoutDependency: V,
                            layoutId: `agsyCcUKY`,
                            ...ni(
                              {
                                Gf1qe6zMq: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 396) - 0 - 484.8) / 2 + 90 + 30) +
                                        20 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `140px`,
                                    ...ci(le),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                NellhytPy: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 396) - 0 - 484.8) / 2 + 90 + 30) +
                                        20 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `140px`,
                                    ...ci(oe),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                qK9oeFfnY: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        (0 +
                                          ((c?.height || 494) - 0 - ((c?.height || 494) - 0) * 1) /
                                            2) +
                                        50 +
                                        (0 +
                                          ((((c?.height || 494) - 0) * 1 - 100 - 281.8) / 1) * 0) +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `182px`,
                                    ...ci(re),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                qoYLd6aKR: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        (0 +
                                          ((c?.height || 494) - 0 - ((c?.height || 494) - 0) * 1) /
                                            2) +
                                        50 +
                                        (0 +
                                          ((((c?.height || 494) - 0) * 1 - 100 - 281.8) / 1) * 0) +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `182px`,
                                    ...ci(te),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                r8jpcqWSX: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        (0 +
                                          ((c?.height || 200) - 0 - ((c?.height || 200) - 0) * 1) /
                                            2) +
                                        50 +
                                        (0 +
                                          ((((c?.height || 200) - 0) * 1 - 100 - 281.8) / 1) * 0) +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `182px`,
                                    ...ci(oe),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                uCXGgphvg: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        (0 +
                                          ((c?.height || 200) - 0 - ((c?.height || 200) - 0) * 1) /
                                            2) +
                                        50 +
                                        (0 +
                                          ((((c?.height || 200) - 0) * 1 - 100 - 281.8) / 1) * 0) +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `182px`,
                                    ...ci(le),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                WQ1xzXXq7: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 396) - 0 - 484.8) / 2 + 90 + 30) +
                                        20 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `140px`,
                                    ...ci(h),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                ytEWO0O4M: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 396) - 0 - 484.8) / 2 + 90 + 30) +
                                        20 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `140px`,
                                    ...ci(re),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                                YWjkBi3H1: {
                                  background: {
                                    alt: `Rating Image`,
                                    fit: `fit`,
                                    loading: j(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 396) - 0 - 484.8) / 2 + 90 + 30) +
                                        20 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 19,
                                    pixelWidth: 121,
                                    sizes: `140px`,
                                    ...ci(te),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                },
                              },
                              P,
                              he
                            ),
                          }),
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.p, {
                                className: `framer-styles-preset-gf9yid`,
                                "data-styles-preset": `XorWCRDBg`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: `The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.`,
                              }),
                            }),
                            className: `framer-14sa6cp`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: V,
                            layoutId: `QRMU0FcKl`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...ni(
                              {
                                Gf1qe6zMq: { text: ue },
                                NellhytPy: { text: k },
                                qK9oeFfnY: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-gf9yid`,
                                      "data-styles-preset": `XorWCRDBg`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Their precision engineering and attention to detail exceeded our expectations. From prototyping to delivery, the entire process was seamless and professional.`,
                                    }),
                                  }),
                                  text: D,
                                },
                                qoYLd6aKR: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-gf9yid`,
                                      "data-styles-preset": `XorWCRDBg`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `The precision and efficiency they demonstrated made the entire process effortless. I highly recommend them for any technical project.`,
                                    }),
                                  }),
                                  text: ne,
                                },
                                r8jpcqWSX: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-gf9yid`,
                                      "data-styles-preset": `XorWCRDBg`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `I was impressed by their professionalism and attention to detail. Communication was clear, and the final product exceeded our expectations.`,
                                    }),
                                  }),
                                  text: k,
                                },
                                uCXGgphvg: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-gf9yid`,
                                      "data-styles-preset": `XorWCRDBg`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `The level of professionalism and commitment to quality was exceptional. Every detail was meticulously handled, making our collaboration stress-free.`,
                                    }),
                                  }),
                                  text: ue,
                                },
                                ytEWO0O4M: { text: D },
                                YWjkBi3H1: { text: ne },
                              },
                              P,
                              he
                            ),
                          }),
                        ],
                      }),
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-17ie5y3`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: V,
                        layoutId: `DoFTNVRS7`,
                        children: [
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: `Emily carter`,
                              }),
                            }),
                            className: `framer-1n8f8h`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: V,
                            layoutId: `dNiKdNuri`,
                            style: {
                              "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...ni(
                              {
                                Gf1qe6zMq: { text: de },
                                NellhytPy: { text: A },
                                qK9oeFfnY: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `John matthews`,
                                    }),
                                  }),
                                  text: O,
                                },
                                qoYLd6aKR: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Liam thompson`,
                                    }),
                                  }),
                                  text: S,
                                },
                                r8jpcqWSX: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Sofia ramirez`,
                                    }),
                                  }),
                                  text: A,
                                },
                                uCXGgphvg: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Ethan brooks`,
                                    }),
                                  }),
                                  text: de,
                                },
                                ytEWO0O4M: { text: O },
                                YWjkBi3H1: { text: S },
                              },
                              P,
                              he
                            ),
                          }),
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.p, {
                                className: `framer-styles-preset-15frtqy`,
                                "data-styles-preset": `P89o9sRK1`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Product Designer`,
                              }),
                            }),
                            className: `framer-bmtc5o`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: V,
                            layoutId: `gIPxegZlp`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: b,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...ni(
                              {
                                Gf1qe6zMq: { text: N },
                                NellhytPy: { text: ce },
                                qK9oeFfnY: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-15frtqy`,
                                      "data-styles-preset": `P89o9sRK1`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Procurement Manager`,
                                    }),
                                  }),
                                  text: ie,
                                },
                                qoYLd6aKR: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-15frtqy`,
                                      "data-styles-preset": `P89o9sRK1`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Operations Manager`,
                                    }),
                                  }),
                                  text: w,
                                },
                                r8jpcqWSX: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-15frtqy`,
                                      "data-styles-preset": `P89o9sRK1`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Marketing Lead at BrightWave Tech`,
                                    }),
                                  }),
                                  text: ce,
                                },
                                uCXGgphvg: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-15frtqy`,
                                      "data-styles-preset": `P89o9sRK1`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Project Coordinator at Stellar Industries`,
                                    }),
                                  }),
                                  text: N,
                                },
                                ytEWO0O4M: { text: ie },
                                YWjkBi3H1: { text: w },
                              },
                              P,
                              he
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (gi = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-xtRER.framer-17iwt5t, .framer-xtRER .framer-17iwt5t { display: block; }`,
        `.framer-xtRER.framer-1q5nreu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 912px; }`,
        `.framer-xtRER .framer-1lnpnwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 40px 20px 40px 20px; position: relative; width: min-content; }`,
        `.framer-xtRER .framer-1i4j7m8-container, .framer-xtRER .framer-uax909-container, .framer-xtRER .framer-1eqb68u-container, .framer-xtRER .framer-1oflhmj-container, .framer-xtRER .framer-el13iw-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-xtRER .framer-1gzeut5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 50px; position: relative; width: 1px; }`,
        `.framer-xtRER .framer-1kx57mw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xtRER .framer-qhyrbn { flex: none; height: auto; overflow: visible; position: relative; width: 182px; }`,
        `.framer-xtRER .framer-14sa6cp { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-xtRER .framer-17ie5y3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xtRER .framer-1n8f8h, .framer-xtRER .framer-bmtc5o { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-xtRER.framer-v-1lpdwvm.framer-1q5nreu, .framer-xtRER.framer-v-7mi35m.framer-1q5nreu, .framer-xtRER.framer-v-1xu03hb.framer-1q5nreu, .framer-xtRER.framer-v-8jf0gy.framer-1q5nreu, .framer-xtRER.framer-v-myrv71.framer-1q5nreu { flex-direction: column; width: 390px; }`,
        `.framer-xtRER.framer-v-1lpdwvm .framer-1lnpnwy, .framer-xtRER.framer-v-7mi35m .framer-1lnpnwy, .framer-xtRER.framer-v-1xu03hb .framer-1lnpnwy, .framer-xtRER.framer-v-8jf0gy .framer-1lnpnwy, .framer-xtRER.framer-v-myrv71 .framer-1lnpnwy { flex-direction: row; gap: 12px; justify-content: flex-start; padding: 20px; width: 100%; }`,
        `.framer-xtRER.framer-v-1lpdwvm .framer-1gzeut5, .framer-xtRER.framer-v-7mi35m .framer-1gzeut5, .framer-xtRER.framer-v-1xu03hb .framer-1gzeut5, .framer-xtRER.framer-v-8jf0gy .framer-1gzeut5, .framer-xtRER.framer-v-myrv71 .framer-1gzeut5 { align-self: unset; flex: none; gap: 50px; height: min-content; justify-content: flex-start; padding: 20px; width: 100%; }`,
        `.framer-xtRER.framer-v-1lpdwvm .framer-qhyrbn, .framer-xtRER.framer-v-7mi35m .framer-qhyrbn, .framer-xtRER.framer-v-1xu03hb .framer-qhyrbn, .framer-xtRER.framer-v-8jf0gy .framer-qhyrbn, .framer-xtRER.framer-v-myrv71 .framer-qhyrbn { width: 140px; }`,
        ...it,
        ...et,
        ...ft,
      ]),
      (_i = Ee(hi, gi, `framer-xtRER`)),
      (_i.displayName = `Testimonial Card`),
      (_i.defaultProps = { height: 494, width: 912 }),
      ce(_i, {
        variant: {
          options: [
            `TSrBstCza`,
            `qoYLd6aKR`,
            `qK9oeFfnY`,
            `r8jpcqWSX`,
            `uCXGgphvg`,
            `WQ1xzXXq7`,
            `YWjkBi3H1`,
            `ytEWO0O4M`,
            `NellhytPy`,
            `Gf1qe6zMq`,
          ],
          optionTitles: [
            `01 - Desktop`,
            `02 - Desktop`,
            `03 - Desktop`,
            `04 - Desktop`,
            `05 - Desktop`,
            `01 - Phone`,
            `02 - Phone`,
            `03 - Phone`,
            `04 - Phone`,
            `05 - Phone`,
          ],
          title: `Variant`,
          type: H.Enum,
        },
        IJIykWyOe: {
          __defaultAssetReference: `data:framer/asset-reference,0jxLgyu1KT3iisfQG2TUjYiR02E.png?originalFilename=Avatar+I+%282%29.png&width=120&height=120`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,0jxLgyu1KT3iisfQG2TUjYiR02E.png?originalFilename=Avatar+I+%282%29.png&width=120&height=120`,
          },
          description: `Recommended size 120px X 120px`,
          title: `Tab 1 - Avatar`,
          type: H.ResponsiveImage,
        },
        Ng1Eyn0qa: {
          __defaultAssetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          __vekterDefault: {
            alt: `Rating Image`,
            assetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          },
          title: `Tab 1 - Rating Image`,
          type: H.ResponsiveImage,
        },
        QI2E_V7XK: {
          defaultValue: `The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.`,
          displayTextArea: !0,
          title: `Tab 1 - Description`,
          type: H.String,
        },
        onQI2E_V7XKChange: { changes: `QI2E_V7XK`, type: H.ChangeHandler },
        Ydtgst8YJ: {
          defaultValue: `Emily Carter`,
          displayTextArea: !0,
          title: `Tab 1 - Name`,
          type: H.String,
        },
        onYdtgst8YJChange: { changes: `Ydtgst8YJ`, type: H.ChangeHandler },
        X4gLdF6fY: {
          defaultValue: `Product Designer`,
          displayTextArea: !0,
          title: `Tab 1 - Job Position`,
          type: H.String,
        },
        onX4gLdF6fYChange: { changes: `X4gLdF6fY`, type: H.ChangeHandler },
        OxRja_wIU: {
          __defaultAssetReference: `data:framer/asset-reference,6i5vOQgN6XtXD6yWyD6yQkmNxM.png?originalFilename=Client+images+%282%29.png&width=60&height=60`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,6i5vOQgN6XtXD6yWyD6yQkmNxM.png?originalFilename=Client+images+%282%29.png&width=60&height=60`,
          },
          title: `Tab 2 - Avatar`,
          type: H.ResponsiveImage,
        },
        jNFlylFYR: {
          __defaultAssetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          __vekterDefault: {
            alt: `Rating Image`,
            assetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          },
          title: `Tab 2 - Rating Image`,
          type: H.ResponsiveImage,
        },
        SzFPWGX0i: {
          defaultValue: `The precision and efficiency they demonstrated made the entire process effortless. I highly recommend them for any technical project.`,
          displayTextArea: !0,
          title: `Tab 2 - Description`,
          type: H.String,
        },
        onSzFPWGX0iChange: { changes: `SzFPWGX0i`, type: H.ChangeHandler },
        ZXEDRpSP1: {
          defaultValue: `Liam Thompson`,
          displayTextArea: !0,
          title: `Tab 2 - Name`,
          type: H.String,
        },
        onZXEDRpSP1Change: { changes: `ZXEDRpSP1`, type: H.ChangeHandler },
        BcmyJu68n: {
          defaultValue: `Operations Manager`,
          displayTextArea: !0,
          title: `Tab 2 - Job Position`,
          type: H.String,
        },
        onBcmyJu68nChange: { changes: `BcmyJu68n`, type: H.ChangeHandler },
        cp2ByEuWM: {
          __defaultAssetReference: `data:framer/asset-reference,hhiqAWN8uopSow2Pn5F5PWR0lNM.png?originalFilename=Avatar+I+%283%29.png&width=120&height=120`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,hhiqAWN8uopSow2Pn5F5PWR0lNM.png?originalFilename=Avatar+I+%283%29.png&width=120&height=120`,
          },
          title: `Tab 3 - Avatar`,
          type: H.ResponsiveImage,
        },
        q9aPVLc1l: {
          __defaultAssetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          __vekterDefault: {
            alt: `Rating Image`,
            assetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          },
          title: `Tab 3 - Rating Image`,
          type: H.ResponsiveImage,
        },
        AYDvo4x_3: {
          defaultValue: `Their precision engineering and attention to detail exceeded our expectations. From prototyping to delivery, the entire process was seamless and professional.`,
          displayTextArea: !0,
          title: `Tab 3 - Description`,
          type: H.String,
        },
        onAYDvo4x_3Change: { changes: `AYDvo4x_3`, type: H.ChangeHandler },
        o4uJBiqrn: {
          defaultValue: `John Matthews`,
          displayTextArea: !0,
          title: `Tab 3 - Name`,
          type: H.String,
        },
        ono4uJBiqrnChange: { changes: `o4uJBiqrn`, type: H.ChangeHandler },
        b7QmGeWjC: {
          defaultValue: `Procurement Manager`,
          displayTextArea: !0,
          title: `Tab 3 - Job Position`,
          type: H.String,
        },
        onb7QmGeWjCChange: { changes: `b7QmGeWjC`, type: H.ChangeHandler },
        F6ja_mTBa: {
          __defaultAssetReference: `data:framer/asset-reference,qtkXyVdAco2lPifyM5liIizpW4c.png?originalFilename=Avatar+I+%284%29.png&width=120&height=120`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,qtkXyVdAco2lPifyM5liIizpW4c.png?originalFilename=Avatar+I+%284%29.png&width=120&height=120`,
          },
          title: `Tab 4 - Avatar`,
          type: H.ResponsiveImage,
        },
        bCEw0vtd4: {
          __defaultAssetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          __vekterDefault: {
            alt: `Rating Image`,
            assetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          },
          title: `Tab 4 - Rating Image`,
          type: H.ResponsiveImage,
        },
        JsFD0M9Am: {
          defaultValue: `I was impressed by their professionalism and attention to detail. Communication was clear, and the final product exceeded our expectations.`,
          displayTextArea: !0,
          title: `Tab 4 - Description`,
          type: H.String,
        },
        onJsFD0M9AmChange: { changes: `JsFD0M9Am`, type: H.ChangeHandler },
        COUeMXyAq: {
          defaultValue: `Sofia Ramirez`,
          displayTextArea: !0,
          title: `Tab 4 - Name`,
          type: H.String,
        },
        onCOUeMXyAqChange: { changes: `COUeMXyAq`, type: H.ChangeHandler },
        mTKmyEice: {
          defaultValue: `Marketing Lead at BrightWave Tech`,
          displayTextArea: !0,
          title: `Tab 4 - Job Position`,
          type: H.String,
        },
        onmTKmyEiceChange: { changes: `mTKmyEice`, type: H.ChangeHandler },
        xYkDQSZCY: {
          __defaultAssetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          __vekterDefault: {
            alt: `Rating Image`,
            assetReference: `data:framer/asset-reference,2oshyrQnew7F9A6eokTgCg977o.svg?originalFilename=Testimonial+Star.svg&width=121&height=19`,
          },
          title: `Tab 5 - Rating Image`,
          type: H.ResponsiveImage,
        },
        tUrrVs_VX: {
          defaultValue: `The level of professionalism and commitment to quality was exceptional. Every detail was meticulously handled, making our collaboration stress-free.`,
          displayTextArea: !0,
          title: `Tab 5 - Description`,
          type: H.String,
        },
        ontUrrVs_VXChange: { changes: `tUrrVs_VX`, type: H.ChangeHandler },
        Z023RuVYP: {
          defaultValue: `Ethan Brooks`,
          displayTextArea: !0,
          title: `Tab 5 - Name`,
          type: H.String,
        },
        onZ023RuVYPChange: { changes: `Z023RuVYP`, type: H.ChangeHandler },
        cQ5qBV9Qo: {
          defaultValue: `Project Coordinator at Stellar Industries`,
          displayTextArea: !0,
          title: `Tab 5 - Job Position`,
          type: H.String,
        },
        oncQ5qBV9QoChange: { changes: `cQ5qBV9Qo`, type: H.ChangeHandler },
      }),
      le(
        _i,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ri,
          ...W(at),
          ...W(tt),
          ...W(pt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_i.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(Ie, {}, t)])) }));
  }))();
}
var yi, bi, xi;
function Si() {
  return (Si = e(() => {
    (de(),
      k.loadFonts([`GF;Geist-500`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (yi = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `../../assets/fonts/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (bi = [
        `.framer-ePAtQ .framer-styles-preset-1reuwed:not(.rich-text-wrapper), .framer-ePAtQ .framer-styles-preset-1reuwed.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, #5c5c5c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-ePAtQ .framer-styles-preset-1reuwed:not(.rich-text-wrapper), .framer-ePAtQ .framer-styles-preset-1reuwed.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, #5c5c5c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-ePAtQ .framer-styles-preset-1reuwed:not(.rich-text-wrapper), .framer-ePAtQ .framer-styles-preset-1reuwed.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, #5c5c5c); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (xi = `framer-ePAtQ`));
  }))();
}
function Ci(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii;
function Li() {
  return (Li = e(() => {
    (y(),
      de(),
      O(),
      u(),
      Si(),
      (wi = { KqtsDX8py: { hover: !0 } }),
      (Ti = [`KqtsDX8py`, `gnmI31P7W`]),
      (Ei = `framer-KwTPN`),
      (Di = { gnmI31P7W: `framer-v-12wp10g`, KqtsDX8py: `framer-v-75bjdf` }),
      (Oi = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ki = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Ai = C.create(i)),
      (ji = { Desktop: `KqtsDX8py`, Phone: `gnmI31P7W` }),
      (Mi = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        dVdDIQ4OJ: r ?? a.dVdDIQ4OJ ?? `Scroll down`,
        nD6jRCaV0: n ?? a.nD6jRCaV0,
        variant: ji[a.variant] ?? a.variant ?? `KqtsDX8py`,
      })),
      (Ni = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pi = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me();
        ge();
        let {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            dVdDIQ4OJ: p,
            nD6jRCaV0: m,
            ...h
          } = Mi(e),
          {
            baseVariant: g,
            classNames: v,
            clearLoadingGesture: y,
            gestureHandlers: b,
            gestureVariant: x,
            isLoading: te,
            setGestureState: ne,
            setVariant: S,
            variants: w,
          } = se({
            cycleOrder: Ti,
            defaultVariant: `KqtsDX8py`,
            enabledGestures: wi,
            ref: r,
            variant: d,
            variantClassNames: Di,
          }),
          T = Ni(e, w),
          re = B(Ei, xi);
        return /*#__PURE__*/ _(E, {
          id: u ?? a,
          children: /*#__PURE__*/ _(Ai, {
            animate: w,
            initial: !1,
            children: /*#__PURE__*/ _(ki, {
              value: Oi,
              children: /*#__PURE__*/ _(ye, {
                href: m,
                motionChild: !0,
                nodeId: `KqtsDX8py`,
                openInNewTab: !1,
                scopeId: `P1krWzzdk`,
                smoothScroll: !0,
                children: /*#__PURE__*/ _(C.a, {
                  ...h,
                  ...b,
                  className: `${B(re, `framer-75bjdf`, l, v)} framer-16x6g7y`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `KqtsDX8py`,
                  ref: r,
                  style: { ...c },
                  ...Ci(
                    {
                      "KqtsDX8py-hover": { "data-framer-name": void 0 },
                      gnmI31P7W: { "data-framer-name": `Phone` },
                    },
                    g,
                    x
                  ),
                  children: /*#__PURE__*/ _(M, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ _(i, {
                      children: /*#__PURE__*/ _(C.div, {
                        className: `framer-styles-preset-1reuwed`,
                        "data-styles-preset": `xyixXvFvK`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-tcooor, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                        },
                        children: `Scroll down`,
                      }),
                    }),
                    className: `framer-9a7226`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    layoutDependency: T,
                    layoutId: `QM3vb28Oi`,
                    style: {
                      "--extracted-tcooor": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: p,
                    variants: {
                      "KqtsDX8py-hover": {
                        "--extracted-tcooor": `var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ci(
                      {
                        "KqtsDX8py-hover": {
                          children: /*#__PURE__*/ _(i, {
                            children: /*#__PURE__*/ _(C.div, {
                              className: `framer-styles-preset-1reuwed`,
                              "data-styles-preset": `xyixXvFvK`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-tcooor, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)))`,
                              },
                              children: `Scroll down`,
                            }),
                          }),
                        },
                      },
                      g,
                      x
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Fi = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-KwTPN.framer-16x6g7y, .framer-KwTPN .framer-16x6g7y { display: block; }`,
        `.framer-KwTPN.framer-75bjdf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-KwTPN .framer-9a7226 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-KwTPN.framer-v-12wp10g.framer-75bjdf { cursor: unset; }`,
        ...bi,
      ]),
      (Ii = Ee(Pi, Fi, `framer-KwTPN`)),
      (Ii.displayName = `Upparcase Button`),
      (Ii.defaultProps = { height: 17, width: 102 }),
      ce(Ii, {
        variant: {
          options: [`KqtsDX8py`, `gnmI31P7W`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        dVdDIQ4OJ: {
          defaultValue: `Scroll down`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        nD6jRCaV0: { title: `Link`, type: H.Link },
      }),
      le(
        Ii,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...W(yi),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Ri(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea;
function ta() {
  return (ta = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      rt(),
      Sr(),
      (zi = N(Y)),
      (Bi = [`NbqFrvhra`, `eoMLL3q3H`]),
      (Vi = `framer-v2pOw`),
      (Hi = { eoMLL3q3H: `framer-v-183jcs3`, NbqFrvhra: `framer-v-pylday` }),
      (Ui = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Gi = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ki = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (qi = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Ji = { Desktop: `NbqFrvhra`, Phone: `eoMLL3q3H` }),
      (Yi = C.create(i)),
      (Xi = ({
        description: e,
        height: t,
        icon: n,
        id: r,
        image: i,
        listIcon: a,
        listTitle: o,
        listTitleThree: s,
        listTitleTwo: c,
        title: l,
        width: u,
        ...d
      }) => ({
        ...d,
        cXL55vzZf: n ??
          d.cXL55vzZf ?? {
            alt: `Industry Icon`,
            pixelHeight: 21,
            pixelWidth: 18,
            src: `../../assets/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg`,
          },
        K3KIa0ZGW: o ?? d.K3KIa0ZGW ?? `Full material traceability`,
        KfejWDbmR: c ?? d.KfejWDbmR ?? `NADCAP special process approval`,
        ls0uQFyGv:
          e ??
          d.ls0uQFyGv ??
          `Certified aerospace components built for mission-critical performance and full traceability.`,
        M8NJH1hNy: a ??
          d.M8NJH1hNy ?? {
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        NHyxpVYJs: s ?? d.NHyxpVYJs ?? `Critical safety component expertise`,
        ppdAP8Xgj: i ??
          d.ppdAP8Xgj ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I-e359c9.jpg`,
            srcSet: `../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I.jpg 512w,../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I-e359c9.jpg 533w`,
          },
        variant: Ji[d.variant] ?? d.variant ?? `NbqFrvhra`,
        xohdZsMw3: l ?? d.xohdZsMw3 ?? `Aerospace`,
      })),
      (Zi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qi = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            ppdAP8Xgj: m,
            cXL55vzZf: h,
            xohdZsMw3: v,
            ls0uQFyGv: y,
            M8NJH1hNy: b,
            K3KIa0ZGW: x,
            KfejWDbmR: te,
            NHyxpVYJs: ne,
            ...S
          } = Xi(e),
          {
            baseVariant: w,
            classNames: T,
            clearLoadingGesture: re,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: ie,
            setGestureState: ae,
            setVariant: oe,
            variants: k,
          } = se({
            cycleOrder: Bi,
            defaultVariant: `NbqFrvhra`,
            ref: r,
            variant: p,
            variantClassNames: Hi,
          }),
          A = Zi(e, k),
          ce = B(Vi, nt, ot),
          le = Gi(x),
          ue = Gi(te),
          de = Gi(ne);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(Yi, {
            animate: k,
            initial: !1,
            children: /*#__PURE__*/ _(qi, {
              value: Ui,
              children: /*#__PURE__*/ g(C.div, {
                ...S,
                ...D,
                className: B(ce, `framer-pylday`, u, T),
                "data-border": !0,
                "data-framer-name": `Desktop`,
                layoutDependency: A,
                layoutId: `NbqFrvhra`,
                ref: r,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-41dbab4b-4d8a-40dc-a562-4b7709d86f82, rgba(92, 92, 92, 0.2))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  ...l,
                },
                ...Ri({ eoMLL3q3H: { "data-framer-name": `Phone` } }, w, O),
                children: [
                  /*#__PURE__*/ _(C.div, {
                    className: `framer-8ydwlz`,
                    "data-framer-name": `Left`,
                    layoutDependency: A,
                    layoutId: `quSdbKnc0`,
                    style: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: /*#__PURE__*/ _(L, {
                      background: {
                        alt: `Industry Image`,
                        fit: `fill`,
                        loading: j(
                          (c?.y || 0) +
                            30 +
                            (0 +
                              (((c?.height || 330) - 60) * 1 -
                                0 -
                                (((c?.height || 330) - 60) * 1 - 0) * 1) /
                                2)
                        ),
                        pixelHeight: 355,
                        pixelWidth: 533,
                        sizes: `max((${c?.width || `100vw`} - 90px) / 2, 1px)`,
                        ...Wi(m),
                      },
                      className: `framer-19iq966`,
                      "data-framer-name": `Image`,
                      layoutDependency: A,
                      layoutId: `a2ZdtFpbb`,
                      ...Ri(
                        {
                          eoMLL3q3H: {
                            background: {
                              alt: `Industry Image`,
                              fit: `fill`,
                              loading: j((c?.y || 0) + 30 + 0 + 0),
                              pixelHeight: 355,
                              pixelWidth: 533,
                              sizes: `max(${c?.width || `100vw`} - 60px, 1px)`,
                              ...Wi(m),
                            },
                            fitImageDimension: `height`,
                          },
                        },
                        w,
                        O
                      ),
                    }),
                  }),
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-a0r3xq`,
                    "data-framer-name": `Right`,
                    layoutDependency: A,
                    layoutId: `GwHMhF2nL`,
                    children: [
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-s4gs9k`,
                        "data-framer-name": `Top`,
                        layoutDependency: A,
                        layoutId: `g_jcR63cS`,
                        children: [
                          /*#__PURE__*/ _(C.div, {
                            className: `framer-1976m3a`,
                            "data-framer-name": `Icon`,
                            layoutDependency: A,
                            layoutId: `jiu2HPLF0`,
                            style: {
                              backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                            children: /*#__PURE__*/ _(L, {
                              background: {
                                alt: `Industry Icon`,
                                fit: `fit`,
                                loading: j((c?.y || 0) + 30 + 0 + 0 + 0 + 0 + 10),
                                pixelHeight: 21,
                                pixelWidth: 18,
                                sizes: `16px`,
                                ...Wi(h),
                                positionX: `center`,
                                positionY: `center`,
                              },
                              className: `framer-pbhrdl`,
                              "data-framer-name": `Image`,
                              layoutDependency: A,
                              layoutId: `msWz2wsa0`,
                              ...Ri(
                                {
                                  eoMLL3q3H: {
                                    background: {
                                      alt: `Industry Icon`,
                                      fit: `fit`,
                                      loading: j((c?.y || 0) + 30 + 236 + 0 + 0 + 0 + 0 + 10),
                                      pixelHeight: 21,
                                      pixelWidth: 18,
                                      sizes: `16px`,
                                      ...Wi(h),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                  },
                                },
                                w,
                                O
                              ),
                            }),
                          }),
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h4, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: `Aerospace`,
                              }),
                            }),
                            className: `framer-gppgay`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `gSnCFd4C4`,
                            style: {
                              "--extracted-1eung3n": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.p, {
                                className: `framer-styles-preset-gf9yid`,
                                "data-styles-preset": `XorWCRDBg`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Certified aerospace components built for mission-critical performance and full traceability.`,
                              }),
                            }),
                            className: `framer-zrcd5g`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `gxchr4RSg`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-ci10p2`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: A,
                        layoutId: `dJStxQ9VD`,
                        children: [
                          le !== !1 &&
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              width: `max((${c?.width || `100vw`} - 90px) / 2, 1px)`,
                              y: (c?.y || 0) + 30 + 0 + 236.8 + 0 + 40.5,
                              ...Ri(
                                {
                                  eoMLL3q3H: {
                                    width: `calc(${c?.width || `100vw`} - 60px)`,
                                    y: (c?.y || 0) + 30 + 236 + 0 + 224.8 + 0 + 40.5,
                                  },
                                },
                                w,
                                O
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-19uc1xv-container`,
                                layoutDependency: A,
                                layoutId: `oy7UQiO3w-container`,
                                nodeId: `oy7UQiO3w`,
                                rendersWithMotion: !0,
                                scopeId: `N4yR9Nqtq`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: Wi(b),
                                  height: `100%`,
                                  id: `oy7UQiO3w`,
                                  layoutId: `oy7UQiO3w`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: x,
                                  variant: Ki(`v_6dzJNZD`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ue !== !1 &&
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              width: `max((${c?.width || `100vw`} - 90px) / 2, 1px)`,
                              y: (c?.y || 0) + 30 + 0 + 236.8 + 0 + 40.5,
                              ...Ri(
                                {
                                  eoMLL3q3H: {
                                    width: `calc(${c?.width || `100vw`} - 60px)`,
                                    y: (c?.y || 0) + 30 + 236 + 0 + 224.8 + 0 + 40.5,
                                  },
                                },
                                w,
                                O
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-1oeorey-container`,
                                layoutDependency: A,
                                layoutId: `fOyfFrjxG-container`,
                                nodeId: `fOyfFrjxG`,
                                rendersWithMotion: !0,
                                scopeId: `N4yR9Nqtq`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: Wi(b),
                                  height: `100%`,
                                  id: `fOyfFrjxG`,
                                  layoutId: `fOyfFrjxG`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: te,
                                  variant: Ki(`v_6dzJNZD`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          de !== !1 &&
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              width: `max((${c?.width || `100vw`} - 90px) / 2, 1px)`,
                              y: (c?.y || 0) + 30 + 0 + 236.8 + 0 + 40.5,
                              ...Ri(
                                {
                                  eoMLL3q3H: {
                                    width: `calc(${c?.width || `100vw`} - 60px)`,
                                    y: (c?.y || 0) + 30 + 236 + 0 + 224.8 + 0 + 40.5,
                                  },
                                },
                                w,
                                O
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-vsjpuy-container`,
                                layoutDependency: A,
                                layoutId: `B0AyRZOWA-container`,
                                nodeId: `B0AyRZOWA`,
                                rendersWithMotion: !0,
                                scopeId: `N4yR9Nqtq`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: Wi(b),
                                  height: `100%`,
                                  id: `B0AyRZOWA`,
                                  layoutId: `B0AyRZOWA`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: ne,
                                  variant: Ki(`v_6dzJNZD`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      ($i = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-v2pOw.framer-9xmpfm, .framer-v2pOw .framer-9xmpfm { display: block; }`,
        `.framer-v2pOw.framer-pylday { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 330px; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 720px; }`,
        `.framer-v2pOw .framer-8ydwlz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-v2pOw .framer-19iq966 { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }`,
        `.framer-v2pOw .framer-a0r3xq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-v2pOw .framer-s4gs9k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-v2pOw .framer-1976m3a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-v2pOw .framer-pbhrdl { flex: none; height: 16px; overflow: visible; position: relative; width: 16px; }`,
        `.framer-v2pOw .framer-gppgay { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-v2pOw .framer-zrcd5g { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-v2pOw .framer-ci10p2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-v2pOw .framer-19uc1xv-container, .framer-v2pOw .framer-1oeorey-container, .framer-v2pOw .framer-vsjpuy-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-v2pOw.framer-v-183jcs3.framer-pylday { flex-direction: column; gap: 16px; height: min-content; width: 390px; }`,
        `.framer-v2pOw.framer-v-183jcs3 .framer-8ydwlz { flex: none; height: min-content; width: 100%; }`,
        `.framer-v2pOw.framer-v-183jcs3 .framer-19iq966 { height: auto; }`,
        `.framer-v2pOw.framer-v-183jcs3 .framer-a0r3xq { flex: none; width: 100%; }`,
        `.framer-v2pOw.framer-v-183jcs3 .framer-s4gs9k { gap: 10px; }`,
        ...et,
        ...it,
        `.framer-v2pOw[data-border="true"]::after, .framer-v2pOw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (ea = Ee(Qi, $i, `framer-v2pOw`)),
      (ea.displayName = `Industry Item Card`),
      (ea.defaultProps = { height: 330, width: 720 }),
      ce(ea, {
        variant: {
          options: [`NbqFrvhra`, `eoMLL3q3H`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        ppdAP8Xgj: {
          __defaultAssetReference: `data:framer/asset-reference,yHbIIVOj7hK29ucygE5eIDV47I.jpg?originalFilename=3930.jpg&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,yHbIIVOj7hK29ucygE5eIDV47I.jpg?originalFilename=3930.jpg&width=533&height=355`,
          },
          description: `Recommended size 533px X 355px`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
        cXL55vzZf: {
          __defaultAssetReference: `data:framer/asset-reference,bWWmYghlGrjGsS6uGMAjDrFi0.svg?originalFilename=Industry+icon.svg&width=18&height=21`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,bWWmYghlGrjGsS6uGMAjDrFi0.svg?originalFilename=Industry+icon.svg&width=18&height=21`,
          },
          title: `Icon`,
          type: H.ResponsiveImage,
        },
        xohdZsMw3: {
          defaultValue: `Aerospace`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        onxohdZsMw3Change: { changes: `xohdZsMw3`, type: H.ChangeHandler },
        ls0uQFyGv: {
          defaultValue: `Certified aerospace components built for mission-critical performance and full traceability.`,
          displayTextArea: !0,
          title: `Description`,
          type: H.String,
        },
        onls0uQFyGvChange: { changes: `ls0uQFyGv`, type: H.ChangeHandler },
        M8NJH1hNy: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          title: `List Icon`,
          type: H.ResponsiveImage,
        },
        K3KIa0ZGW: {
          defaultValue: `Full material traceability`,
          displayTextArea: !0,
          title: `List Title`,
          type: H.String,
        },
        onK3KIa0ZGWChange: { changes: `K3KIa0ZGW`, type: H.ChangeHandler },
        KfejWDbmR: {
          defaultValue: `NADCAP special process approval`,
          displayTextArea: !0,
          title: `List Title - Two`,
          type: H.String,
        },
        onKfejWDbmRChange: { changes: `KfejWDbmR`, type: H.ChangeHandler },
        NHyxpVYJs: {
          defaultValue: `Critical safety component expertise`,
          displayTextArea: !0,
          title: `List Title - Three`,
          type: H.String,
        },
        onNHyxpVYJsChange: { changes: `NHyxpVYJs`, type: H.ChangeHandler },
      }),
      le(
        ea,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...zi,
          ...W(tt),
          ...W(at),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ea.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(Y, {}, t)])) }));
  }))();
}
function na(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa;
function Ca() {
  return (Ca = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      ta(),
      (ra = N(ea)),
      (ia = [
        `eo0cM38nh`,
        `jmYbshGPm`,
        `liDMdYE3e`,
        `ibssbU_6C`,
        `I72xT487l`,
        `rVsEfdfno`,
        `vp5ZC60Dn`,
      ]),
      (aa = `framer-5Kg0o`),
      (oa = {
        eo0cM38nh: `framer-v-ojg3e2`,
        I72xT487l: `framer-v-ybyxer`,
        ibssbU_6C: `framer-v-15jweiq`,
        jmYbshGPm: `framer-v-1hqa57s`,
        liDMdYE3e: `framer-v-1s6kdlo`,
        rVsEfdfno: `framer-v-1thvpd5`,
        vp5ZC60Dn: `framer-v-10hk5z6`,
      }),
      (sa = void 0),
      (ca = void 0),
      (la = void 0),
      (ua = void 0),
      (da = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (fa = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (pa = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ma = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (ha = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (ga = {
        "01": `eo0cM38nh`,
        "02": `jmYbshGPm`,
        "03": `liDMdYE3e`,
        "04": `ibssbU_6C`,
        "05": `I72xT487l`,
        Phone: `vp5ZC60Dn`,
        Tablet: `rVsEfdfno`,
      }),
      (_a = C.create(i)),
      (va = ({
        _01Description: e,
        _01Icon: t,
        _01Image: n,
        _01LinkText: r,
        _01ListIcon: i,
        _01ListTitle: a,
        _01ListTitle02: o,
        _01ListTitle03: s,
        _01Title: c,
        _02Description: l,
        _02Icon: u,
        _02Image: d,
        _02LinkText: f,
        _02ListIcon: p,
        _02ListTitle: m,
        _02ListTitleThree: h,
        _02ListTitleTwo02: g,
        _02Title: _,
        _03Description: v,
        _03Icon: y,
        _03Image: ee,
        _03LinkText: b,
        _03ListIcon: x,
        _03ListTitle: te,
        _03ListTitle02: ne,
        _03ListTitle03: S,
        _03Title: C,
        _04Description: w,
        _04Icon: T,
        _04Image: E,
        _04LinkText: re,
        _04ListIcon: D,
        _04ListTitle: O,
        _04ListTitle02: ie,
        _04ListTitle03: ae,
        _04Title: oe,
        _05Description: k,
        _05Icon: A,
        _05Image: j,
        _05LinkText: M,
        _05ListIcon: se,
        _05ListTitle: ce,
        _05ListTitle02: le,
        _05ListTitle03: ue,
        _05Title: de,
        height: N,
        id: fe,
        width: P,
        ...F
      }) => ({
        ...F,
        Aa1aIlno8: E ??
          F.Aa1aIlno8 ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/RHmYXV4VSws5GeKU40cbCo9U1s-b4b34e.jpg`,
            srcSet: `../../assets/images/RHmYXV4VSws5GeKU40cbCo9U1s.jpg 512w,../../assets/images/RHmYXV4VSws5GeKU40cbCo9U1s-b4b34e.jpg 533w`,
          },
        aUwtwUVDl: x ??
          F.aUwtwUVDl ?? {
            alt: `List Icon`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        B80pNUA3d: f ?? F.B80pNUA3d ?? `Automotive`,
        CnywnGpgr: ie ?? F.CnywnGpgr ?? `Efficiency Optimization`,
        diAybB7Q6: te ?? F.diAybB7Q6 ?? `Enhanced Patient Care`,
        dqvEMGjVV: m ?? F.dqvEMGjVV ?? `Precision engine parts`,
        dWT6cERwY: ce ?? F.dWT6cERwY ?? `Full material traceability`,
        e3PG4VZNG: se ??
          F.e3PG4VZNG ?? {
            alt: `List Icon`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        FN_pqwvle: re ?? F.FN_pqwvle ?? `Energy & power`,
        FOAXuYJcG: C ?? F.FOAXuYJcG ?? `Medical devices`,
        gNJmrI40g: u ??
          F.gNJmrI40g ?? {
            alt: `Industry Icon`,
            pixelHeight: 81,
            pixelWidth: 108,
            src: `../../assets/images/dXQpMFhJwNSSRjwhFBc6NvTSoV8.svg`,
          },
        J4wexecxz: o ?? F.J4wexecxz ?? `NADCAP special process approval`,
        JiGA69t3G: T ??
          F.JiGA69t3G ?? {
            alt: `Industry Icon`,
            pixelHeight: 81,
            pixelWidth: 69,
            src: `../../assets/images/R4mMde0cjB1c4ZhabEBPZMsqg.svg`,
          },
        JtpyhvPJP: D ??
          F.JtpyhvPJP ?? {
            alt: `List Icon`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        ju11PZcol: t ??
          F.ju11PZcol ?? {
            alt: `Industry Icon`,
            pixelHeight: 21,
            pixelWidth: 18,
            src: `../../assets/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg`,
          },
        KAfDz0BYA:
          k ??
          F.KAfDz0BYA ??
          `Certified aerospace components built for mission-critical performance and full traceability.`,
        KLQBZ8OGd: b ?? F.KLQBZ8OGd ?? `Medical devices`,
        kT1hPw7RZ:
          w ??
          F.kT1hPw7RZ ??
          `Innovative energy systems delivering reliable, efficient, and sustainable performance.`,
        ldZuhPeFd: de ?? F.ldZuhPeFd ?? `Aerospace`,
        LsTt0KSsM: n ??
          F.LsTt0KSsM ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I-e359c9.jpg`,
            srcSet: `../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I.jpg 512w,../../assets/images/yHbIIVOj7hK29ucygE5eIDV47I-e359c9.jpg 533w`,
          },
        lv64Fdrng: M ?? F.lv64Fdrng ?? `Industrial equipment`,
        lX4rsLjbM:
          l ??
          F.lX4rsLjbM ??
          `Precision automotive components engineered for peak performance and complete reliability.`,
        MBL9ZbIYS: r ?? F.MBL9ZbIYS ?? `Aerospace industry`,
        NBlSDF81o: h ?? F.NBlSDF81o ?? `Durable structural elements`,
        P6cC_F5zZ: ae ?? F.P6cC_F5zZ ?? `Sustainability Focused`,
        pmKL5EKjX: s ?? F.pmKL5EKjX ?? `Critical safety component expertise`,
        pPA8tgTYw: le ?? F.pPA8tgTYw ?? `NADCAP special process approval`,
        pzK2bz_T_: A ??
          F.pzK2bz_T_ ?? {
            alt: `Industry Icon`,
            pixelHeight: 81,
            pixelWidth: 81,
            src: `../../assets/images/Zo8ubzvw7MMm9ssAAV1qNgNSI.svg`,
          },
        QteTzYk1P: O ?? F.QteTzYk1P ?? `Reliable Energy Supply`,
        qZtefZiKX:
          v ??
          F.qZtefZiKX ??
          `High-precision medical devices for safer, more effective patient care and diagnostics.`,
        rXZ4KdYNj: a ?? F.rXZ4KdYNj ?? `Full material traceability`,
        S0rNpXwpL: S ?? F.S0rNpXwpL ?? `Operational Efficiency`,
        S3s3c366L: y ??
          F.S3s3c366L ?? {
            alt: `Industry Icon`,
            pixelHeight: 81,
            pixelWidth: 95,
            src: `../../assets/images/xg4OTqug8Ek8xtuBU1ZGJkgPq0g.svg`,
          },
        s6KwfWNWQ: ue ?? F.s6KwfWNWQ ?? `Critical safety component expertise`,
        ThaOztGwM: d ??
          F.ThaOztGwM ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI-59ca13.jpg`,
            srcSet: `../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI.jpg 512w,../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI-59ca13.jpg 533w`,
          },
        TMpxbc4MB: i ??
          F.TMpxbc4MB ?? {
            alt: `List Icon`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        variant: ga[F.variant] ?? F.variant ?? `eo0cM38nh`,
        vFL_HndNO: _ ?? F.vFL_HndNO ?? `Automotive`,
        wPPtN00Ml: p ??
          F.wPPtN00Ml ?? {
            alt: `List Icon`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        X02GLY2Zj: oe ?? F.X02GLY2Zj ?? `Energy & Power`,
        xBAKpfRpz: g ?? F.xBAKpfRpz ?? `Reliable transmission components`,
        XOSvduK4c: j ??
          F.XOSvduK4c ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/6bWPpYR9eYKPnt1xJ9tGEXaSaE8-0fcced.png`,
            srcSet: `../../assets/images/6bWPpYR9eYKPnt1xJ9tGEXaSaE8.png 512w,../../assets/images/6bWPpYR9eYKPnt1xJ9tGEXaSaE8-0fcced.png 533w`,
          },
        Y7lKpFUgx: ee ??
          F.Y7lKpFUgx ?? {
            alt: `Industry Image`,
            pixelHeight: 355,
            pixelWidth: 533,
            src: `../../assets/images/aywXQjeib9xpXV2UOvQIZh9M3KQ-20059e.jpg`,
            srcSet: `../../assets/images/aywXQjeib9xpXV2UOvQIZh9M3KQ.jpg 512w,../../assets/images/aywXQjeib9xpXV2UOvQIZh9M3KQ-20059e.jpg 533w`,
          },
        YJw_EsDOr: ne ?? F.YJw_EsDOr ?? `Safety and Reliability`,
        yttIB7R8q:
          e ??
          F.yttIB7R8q ??
          `Certified aerospace components built for mission-critical performance and full traceability.`,
        ZPa7OqRJj: c ?? F.ZPa7OqRJj ?? `Aerospace`,
      })),
      (ya = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ba = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            MBL9ZbIYS: m,
            LsTt0KSsM: h,
            ju11PZcol: v,
            ZPa7OqRJj: y,
            yttIB7R8q: b,
            TMpxbc4MB: x,
            rXZ4KdYNj: te,
            J4wexecxz: ne,
            pmKL5EKjX: S,
            B80pNUA3d: w,
            ThaOztGwM: T,
            gNJmrI40g: re,
            vFL_HndNO: D,
            lX4rsLjbM: O,
            wPPtN00Ml: ie,
            dqvEMGjVV: ae,
            xBAKpfRpz: oe,
            NBlSDF81o: k,
            KLQBZ8OGd: A,
            Y7lKpFUgx: j,
            S3s3c366L: ce,
            FOAXuYJcG: le,
            qZtefZiKX: ue,
            aUwtwUVDl: de,
            diAybB7Q6: N,
            YJw_EsDOr: fe,
            S0rNpXwpL: P,
            FN_pqwvle: F,
            Aa1aIlno8: pe,
            JiGA69t3G: I,
            X02GLY2Zj: he,
            kT1hPw7RZ: _e,
            JtpyhvPJP: L,
            QteTzYk1P: ve,
            CnywnGpgr: z,
            P6cC_F5zZ: ye,
            lv64Fdrng: V,
            XOSvduK4c: H,
            pzK2bz_T_: xe,
            ldZuhPeFd: Se,
            KAfDz0BYA: Ce,
            e3PG4VZNG: we,
            dWT6cERwY: Ee,
            pPA8tgTYw: De,
            s6KwfWNWQ: U,
            ...Oe
          } = va(e),
          {
            baseVariant: W,
            classNames: ke,
            clearLoadingGesture: Ae,
            gestureHandlers: je,
            gestureVariant: G,
            isLoading: Me,
            setGestureState: Ne,
            setVariant: K,
            variants: Pe,
          } = se({
            cycleOrder: ia,
            defaultVariant: `eo0cM38nh`,
            ref: r,
            variant: p,
            variantClassNames: oa,
          }),
          q = ya(e, Pe),
          { activeVariantCallback: Fe, delay: Ie } = be(W),
          Le = Fe(async (...e) => {
            K(`eo0cM38nh`);
          }),
          Re = Fe(async (...e) => {
            K(`jmYbshGPm`);
          }),
          ze = Fe(async (...e) => {
            K(`liDMdYE3e`);
          }),
          J = Fe(async (...e) => {
            K(`ibssbU_6C`);
          }),
          Be = Fe(async (...e) => {
            K(`I72xT487l`);
          }),
          Ve = B(aa, nt),
          He = () => ![`rVsEfdfno`, `vp5ZC60Dn`].includes(W),
          Ue = () => ![`jmYbshGPm`, `liDMdYE3e`, `ibssbU_6C`, `I72xT487l`].includes(W),
          We = () => !![`jmYbshGPm`, `rVsEfdfno`, `vp5ZC60Dn`].includes(W),
          Ge = () => !![`liDMdYE3e`, `rVsEfdfno`, `vp5ZC60Dn`].includes(W),
          Ke = () => !![`ibssbU_6C`, `rVsEfdfno`, `vp5ZC60Dn`].includes(W),
          qe = () => !![`I72xT487l`, `rVsEfdfno`, `vp5ZC60Dn`].includes(W);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(_a, {
            animate: Pe,
            initial: !1,
            children: /*#__PURE__*/ _(ha, {
              value: da,
              children: /*#__PURE__*/ g(C.div, {
                ...Oe,
                ...je,
                className: B(Ve, `framer-ojg3e2`, u, ke),
                "data-framer-name": `01`,
                layoutDependency: q,
                layoutId: `eo0cM38nh`,
                ref: r,
                style: { ...l },
                ...na(
                  {
                    I72xT487l: { "data-framer-name": `05` },
                    ibssbU_6C: { "data-framer-name": `04` },
                    jmYbshGPm: { "data-framer-name": `02` },
                    liDMdYE3e: { "data-framer-name": `03` },
                    rVsEfdfno: { "data-framer-name": `Tablet` },
                    vp5ZC60Dn: { "data-framer-name": `Phone` },
                  },
                  W,
                  G
                ),
                children: [
                  He() &&
                    /*#__PURE__*/ g(C.div, {
                      className: `framer-1j1npxo`,
                      "data-framer-name": `Left`,
                      layoutDependency: q,
                      layoutId: `JTEJt_F3f`,
                      children: [
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-ek2meb`,
                          "data-framer-name": `Divider`,
                          layoutDependency: q,
                          layoutId: `KVfMoExpv`,
                          style: {
                            backgroundColor: `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                          },
                          children: /*#__PURE__*/ _(C.div, {
                            className: `framer-145ygzw`,
                            "data-framer-name": `Fill`,
                            layoutDependency: q,
                            layoutId: `UxdtF7s6v`,
                            style: {
                              backgroundColor: `var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52))`,
                            },
                          }),
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-urv5kc`,
                          "data-framer-name": `Tab Link`,
                          "data-highlight": !0,
                          layoutDependency: q,
                          layoutId: `aVzgzOMga`,
                          onTap: Le,
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: `Aerospace industry`,
                              }),
                            }),
                            className: `framer-1az2yo0`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: q,
                            layoutId: `A00RPLYvM`,
                            style: {
                              "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                            },
                            text: m,
                            variants: {
                              I72xT487l: {
                                "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              },
                              ibssbU_6C: {
                                "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              },
                              jmYbshGPm: {
                                "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              },
                              liDMdYE3e: {
                                "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...na(
                              {
                                I72xT487l: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Aerospace industry`,
                                    }),
                                  }),
                                },
                                ibssbU_6C: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Aerospace industry`,
                                    }),
                                  }),
                                },
                                jmYbshGPm: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Aerospace industry`,
                                    }),
                                  }),
                                },
                                liDMdYE3e: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                      },
                                      children: `Aerospace industry`,
                                    }),
                                  }),
                                },
                              },
                              W,
                              G
                            ),
                          }),
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-1tor374`,
                          "data-framer-name": `Tab Link`,
                          "data-highlight": !0,
                          layoutDependency: q,
                          layoutId: `ZMivhl0WM`,
                          onTap: Re,
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Automotive`,
                              }),
                            }),
                            className: `framer-z7iwa7`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: q,
                            layoutId: `WJOhs1eZu`,
                            style: {
                              "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                            },
                            text: w,
                            variants: {
                              jmYbshGPm: {
                                "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...na(
                              {
                                I72xT487l: { text: sa },
                                ibssbU_6C: { text: sa },
                                jmYbshGPm: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Automotive`,
                                    }),
                                  }),
                                  text: sa,
                                },
                                liDMdYE3e: { text: sa },
                              },
                              W,
                              G
                            ),
                          }),
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-1nzaqhr`,
                          "data-framer-name": `Tab Link`,
                          "data-highlight": !0,
                          layoutDependency: q,
                          layoutId: `ZMXznCDJS`,
                          onTap: ze,
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Medical devices`,
                              }),
                            }),
                            className: `framer-120zs6f`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: q,
                            layoutId: `hqeKIzb05`,
                            style: {
                              "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                            },
                            text: A,
                            variants: {
                              liDMdYE3e: {
                                "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...na(
                              {
                                I72xT487l: { text: ca },
                                ibssbU_6C: { text: ca },
                                liDMdYE3e: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Medical devices`,
                                    }),
                                  }),
                                  text: ca,
                                },
                              },
                              W,
                              G
                            ),
                          }),
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-jmukml`,
                          "data-framer-name": `Tab Link`,
                          "data-highlight": !0,
                          layoutDependency: q,
                          layoutId: `bHKwUah4h`,
                          onTap: J,
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Energy & power`,
                              }),
                            }),
                            className: `framer-jv6tl7`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: q,
                            layoutId: `hNiRuzGBg`,
                            style: {
                              "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                            },
                            text: F,
                            variants: {
                              ibssbU_6C: {
                                "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...na(
                              {
                                I72xT487l: { text: la },
                                ibssbU_6C: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Energy & power`,
                                    }),
                                  }),
                                  text: la,
                                },
                              },
                              W,
                              G
                            ),
                          }),
                        }),
                        /*#__PURE__*/ _(C.div, {
                          className: `framer-1rvms43`,
                          "data-framer-name": `Tab Link`,
                          "data-highlight": !0,
                          layoutDependency: q,
                          layoutId: `pkOZvDt3o`,
                          onTap: Be,
                          children: /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Industrial equipment`,
                              }),
                            }),
                            className: `framer-1io3q9m`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: q,
                            layoutId: `Za0OKXE9Q`,
                            style: {
                              "--extracted-a0htzi": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                            },
                            text: V,
                            variants: {
                              I72xT487l: {
                                "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...na(
                              {
                                I72xT487l: {
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h3, {
                                      className: `framer-styles-preset-1f8or04`,
                                      "data-styles-preset": `GzMbxD0G0`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                      },
                                      children: `Industrial equipment`,
                                    }),
                                  }),
                                  text: ua,
                                },
                              },
                              W,
                              G
                            ),
                          }),
                        }),
                      ],
                    }),
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-1cc52kl`,
                    "data-framer-name": `Right`,
                    layoutDependency: q,
                    layoutId: `XQVEb9nMS`,
                    children: [
                      Ue() &&
                        /*#__PURE__*/ _(R, {
                          height: 330,
                          width: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                          y: (c?.y || 0) + 0 + 0 + 0,
                          ...na(
                            {
                              rVsEfdfno: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 1770) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                              vp5ZC60Dn: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                            },
                            W,
                            G
                          ),
                          children: /*#__PURE__*/ _(Te, {
                            className: `framer-1hbtmvv-container`,
                            "data-framer-name": `01`,
                            layoutDependency: q,
                            layoutId: `z5nDBANbL-container`,
                            name: `01`,
                            nodeId: `z5nDBANbL`,
                            rendersWithMotion: !0,
                            scopeId: `QNq5ngZcF`,
                            children: /*#__PURE__*/ _(ea, {
                              cXL55vzZf: fa(v),
                              height: `100%`,
                              id: `z5nDBANbL`,
                              K3KIa0ZGW: te,
                              KfejWDbmR: ne,
                              layoutId: `z5nDBANbL`,
                              ls0uQFyGv: b,
                              M8NJH1hNy: fa(x),
                              name: `01`,
                              NHyxpVYJs: S,
                              ppdAP8Xgj: fa(h),
                              style: { height: `100%`, width: `100%` },
                              variant: pa(`NbqFrvhra`),
                              width: `100%`,
                              xohdZsMw3: y,
                              ...na(
                                {
                                  rVsEfdfno: { style: { width: `100%` } },
                                  vp5ZC60Dn: { style: { width: `100%` }, variant: pa(`eoMLL3q3H`) },
                                },
                                W,
                                G
                              ),
                            }),
                          }),
                        }),
                      We() &&
                        /*#__PURE__*/ _(R, {
                          ...na(
                            {
                              jmYbshGPm: {
                                height: 330,
                                width: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                                y: (c?.y || 0) + 0 + 0 + 0,
                              },
                              rVsEfdfno: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 1770) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  360,
                              },
                              vp5ZC60Dn: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  360,
                              },
                            },
                            W,
                            G
                          ),
                          children: /*#__PURE__*/ _(Te, {
                            className: `framer-urwsl9-container`,
                            "data-framer-name": `02`,
                            layoutDependency: q,
                            layoutId: `nElh6NFCB-container`,
                            name: `02`,
                            nodeId: `nElh6NFCB`,
                            rendersWithMotion: !0,
                            scopeId: `QNq5ngZcF`,
                            children: /*#__PURE__*/ _(ea, {
                              cXL55vzZf: fa(re),
                              height: `100%`,
                              id: `nElh6NFCB`,
                              K3KIa0ZGW: ae,
                              KfejWDbmR: oe,
                              layoutId: `nElh6NFCB`,
                              ls0uQFyGv: O,
                              M8NJH1hNy: fa(ie),
                              name: `02`,
                              NHyxpVYJs: k,
                              ppdAP8Xgj: fa(T),
                              style: { height: `100%`, width: `100%` },
                              variant: pa(`NbqFrvhra`),
                              width: `100%`,
                              xohdZsMw3: D,
                              ...na(
                                {
                                  jmYbshGPm: {
                                    ppdAP8Xgj: ma(
                                      {
                                        pixelHeight: 355,
                                        pixelWidth: 533,
                                        src: `../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI-59ca13.jpg`,
                                        srcSet: `../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI.jpg 512w,../../assets/images/UYphAIgKvT1hPYfH9ZPB6xWyrmI-59ca13.jpg 533w`,
                                      },
                                      `Industry Image`
                                    ),
                                  },
                                  rVsEfdfno: { style: { width: `100%` } },
                                  vp5ZC60Dn: { style: { width: `100%` }, variant: pa(`eoMLL3q3H`) },
                                },
                                W,
                                G
                              ),
                            }),
                          }),
                        }),
                      Ge() &&
                        /*#__PURE__*/ _(R, {
                          ...na(
                            {
                              liDMdYE3e: {
                                height: 330,
                                width: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                                y: (c?.y || 0) + 0 + 0 + 0,
                              },
                              rVsEfdfno: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 1770) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  720,
                              },
                              vp5ZC60Dn: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  720,
                              },
                            },
                            W,
                            G
                          ),
                          children: /*#__PURE__*/ _(Te, {
                            className: `framer-o7ijdl-container`,
                            "data-framer-name": `03`,
                            layoutDependency: q,
                            layoutId: `veIBZ2W78-container`,
                            name: `03`,
                            nodeId: `veIBZ2W78`,
                            rendersWithMotion: !0,
                            scopeId: `QNq5ngZcF`,
                            children: /*#__PURE__*/ _(ea, {
                              cXL55vzZf: fa(ce),
                              height: `100%`,
                              id: `veIBZ2W78`,
                              K3KIa0ZGW: N,
                              KfejWDbmR: fe,
                              layoutId: `veIBZ2W78`,
                              ls0uQFyGv: ue,
                              M8NJH1hNy: fa(de),
                              name: `03`,
                              NHyxpVYJs: P,
                              ppdAP8Xgj: fa(j),
                              style: { height: `100%`, width: `100%` },
                              variant: pa(`NbqFrvhra`),
                              width: `100%`,
                              xohdZsMw3: le,
                              ...na(
                                {
                                  rVsEfdfno: { style: { width: `100%` } },
                                  vp5ZC60Dn: { style: { width: `100%` }, variant: pa(`eoMLL3q3H`) },
                                },
                                W,
                                G
                              ),
                            }),
                          }),
                        }),
                      Ke() &&
                        /*#__PURE__*/ _(R, {
                          ...na(
                            {
                              ibssbU_6C: {
                                height: 330,
                                width: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                                y: (c?.y || 0) + 0 + 0 + 0,
                              },
                              rVsEfdfno: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 1770) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  1080,
                              },
                              vp5ZC60Dn: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  1080,
                              },
                            },
                            W,
                            G
                          ),
                          children: /*#__PURE__*/ _(Te, {
                            className: `framer-2h5er6-container`,
                            "data-framer-name": `04`,
                            layoutDependency: q,
                            layoutId: `iyP8ZRpB3-container`,
                            name: `04`,
                            nodeId: `iyP8ZRpB3`,
                            rendersWithMotion: !0,
                            scopeId: `QNq5ngZcF`,
                            children: /*#__PURE__*/ _(ea, {
                              cXL55vzZf: fa(I),
                              height: `100%`,
                              id: `iyP8ZRpB3`,
                              K3KIa0ZGW: ve,
                              KfejWDbmR: z,
                              layoutId: `iyP8ZRpB3`,
                              ls0uQFyGv: _e,
                              M8NJH1hNy: fa(L),
                              name: `04`,
                              NHyxpVYJs: ye,
                              ppdAP8Xgj: fa(pe),
                              style: { height: `100%`, width: `100%` },
                              variant: pa(`NbqFrvhra`),
                              width: `100%`,
                              xohdZsMw3: he,
                              ...na(
                                {
                                  rVsEfdfno: { style: { width: `100%` } },
                                  vp5ZC60Dn: { style: { width: `100%` }, variant: pa(`eoMLL3q3H`) },
                                },
                                W,
                                G
                              ),
                            }),
                          }),
                        }),
                      qe() &&
                        /*#__PURE__*/ _(R, {
                          ...na(
                            {
                              I72xT487l: {
                                height: 330,
                                width: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                                y: (c?.y || 0) + 0 + 0 + 0,
                              },
                              rVsEfdfno: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 1770) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  1440,
                              },
                              vp5ZC60Dn: {
                                height: 330,
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 200) - 0 - 1770) / 2 + 0 + 0) +
                                  0 +
                                  1440,
                              },
                            },
                            W,
                            G
                          ),
                          children: /*#__PURE__*/ _(Te, {
                            className: `framer-1ybi8zg-container`,
                            "data-framer-name": `05`,
                            layoutDependency: q,
                            layoutId: `jpxGkszYO-container`,
                            name: `05`,
                            nodeId: `jpxGkszYO`,
                            rendersWithMotion: !0,
                            scopeId: `QNq5ngZcF`,
                            children: /*#__PURE__*/ _(ea, {
                              cXL55vzZf: fa(xe),
                              height: `100%`,
                              id: `jpxGkszYO`,
                              K3KIa0ZGW: Ee,
                              KfejWDbmR: De,
                              layoutId: `jpxGkszYO`,
                              ls0uQFyGv: Ce,
                              M8NJH1hNy: fa(we),
                              name: `05`,
                              NHyxpVYJs: U,
                              ppdAP8Xgj: fa(H),
                              style: { height: `100%`, width: `100%` },
                              variant: pa(`NbqFrvhra`),
                              width: `100%`,
                              xohdZsMw3: Se,
                              ...na(
                                {
                                  rVsEfdfno: { style: { width: `100%` } },
                                  vp5ZC60Dn: { style: { width: `100%` }, variant: pa(`eoMLL3q3H`) },
                                },
                                W,
                                G
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (xa = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-5Kg0o.framer-8w4zj2, .framer-5Kg0o .framer-8w4zj2 { display: block; }`,
        `.framer-5Kg0o.framer-ojg3e2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1140px; }`,
        `.framer-5Kg0o .framer-1j1npxo { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 400px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 30px; position: relative; width: 1px; }`,
        `.framer-5Kg0o .framer-ek2meb { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 3px; z-index: 1; }`,
        `.framer-5Kg0o .framer-145ygzw { flex: none; height: 51px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-5Kg0o .framer-urv5kc, .framer-5Kg0o .framer-1tor374, .framer-5Kg0o .framer-1nzaqhr, .framer-5Kg0o .framer-jmukml, .framer-5Kg0o .framer-1rvms43 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }`,
        `.framer-5Kg0o .framer-1az2yo0, .framer-5Kg0o .framer-z7iwa7, .framer-5Kg0o .framer-120zs6f, .framer-5Kg0o .framer-jv6tl7, .framer-5Kg0o .framer-1io3q9m { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5Kg0o .framer-1cc52kl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 330px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5Kg0o .framer-1hbtmvv-container, .framer-5Kg0o .framer-urwsl9-container, .framer-5Kg0o .framer-o7ijdl-container, .framer-5Kg0o .framer-2h5er6-container, .framer-5Kg0o .framer-1ybi8zg-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-5Kg0o.framer-v-1hqa57s .framer-145ygzw { top: 51px; }`,
        `.framer-5Kg0o.framer-v-1s6kdlo .framer-145ygzw { top: 102px; }`,
        `.framer-5Kg0o.framer-v-15jweiq .framer-145ygzw { top: 154px; }`,
        `.framer-5Kg0o.framer-v-ybyxer .framer-145ygzw { bottom: 0px; height: unset; right: unset; top: 205px; width: 3px; }`,
        `.framer-5Kg0o.framer-v-1thvpd5.framer-ojg3e2 { flex-direction: column; width: 810px; }`,
        `.framer-5Kg0o.framer-v-1thvpd5 .framer-1cc52kl, .framer-5Kg0o.framer-v-10hk5z6 .framer-1cc52kl { flex: none; gap: 30px; height: min-content; width: 100%; }`,
        `.framer-5Kg0o.framer-v-1thvpd5 .framer-1hbtmvv-container, .framer-5Kg0o.framer-v-1thvpd5 .framer-urwsl9-container, .framer-5Kg0o.framer-v-1thvpd5 .framer-o7ijdl-container, .framer-5Kg0o.framer-v-1thvpd5 .framer-2h5er6-container, .framer-5Kg0o.framer-v-1thvpd5 .framer-1ybi8zg-container, .framer-5Kg0o.framer-v-10hk5z6 .framer-1hbtmvv-container, .framer-5Kg0o.framer-v-10hk5z6 .framer-urwsl9-container, .framer-5Kg0o.framer-v-10hk5z6 .framer-o7ijdl-container, .framer-5Kg0o.framer-v-10hk5z6 .framer-2h5er6-container, .framer-5Kg0o.framer-v-10hk5z6 .framer-1ybi8zg-container { flex: none; height: auto; }`,
        `.framer-5Kg0o.framer-v-10hk5z6.framer-ojg3e2 { flex-direction: column; width: 390px; }`,
        ...et,
      ]),
      (Sa = Ee(ba, xa, `framer-5Kg0o`)),
      (Sa.displayName = `Industry Card`),
      (Sa.defaultProps = { height: 330, width: 1140 }),
      ce(Sa, {
        variant: {
          options: [
            `eo0cM38nh`,
            `jmYbshGPm`,
            `liDMdYE3e`,
            `ibssbU_6C`,
            `I72xT487l`,
            `rVsEfdfno`,
            `vp5ZC60Dn`,
          ],
          optionTitles: [`01`, `02`, `03`, `04`, `05`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        MBL9ZbIYS: {
          defaultValue: `Aerospace industry`,
          displayTextArea: !0,
          title: `01 Link Text`,
          type: H.String,
        },
        onMBL9ZbIYSChange: { changes: `MBL9ZbIYS`, type: H.ChangeHandler },
        LsTt0KSsM: {
          __defaultAssetReference: `data:framer/asset-reference,yHbIIVOj7hK29ucygE5eIDV47I.jpg?originalFilename=3930.jpg&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,yHbIIVOj7hK29ucygE5eIDV47I.jpg?originalFilename=3930.jpg&width=533&height=355`,
          },
          description: `Recommended size 533px X 355px`,
          title: `01 Image`,
          type: H.ResponsiveImage,
        },
        ju11PZcol: {
          __defaultAssetReference: `data:framer/asset-reference,bWWmYghlGrjGsS6uGMAjDrFi0.svg?originalFilename=Industry+icon.svg&width=18&height=21`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,bWWmYghlGrjGsS6uGMAjDrFi0.svg?originalFilename=Industry+icon.svg&width=18&height=21`,
          },
          title: `01 Icon`,
          type: H.ResponsiveImage,
        },
        ZPa7OqRJj: {
          defaultValue: `Aerospace`,
          displayTextArea: !0,
          title: `01 Title`,
          type: H.String,
        },
        onZPa7OqRJjChange: { changes: `ZPa7OqRJj`, type: H.ChangeHandler },
        yttIB7R8q: {
          defaultValue: `Certified aerospace components built for mission-critical performance and full traceability.`,
          displayTextArea: !0,
          title: `01 Description`,
          type: H.String,
        },
        onyttIB7R8qChange: { changes: `yttIB7R8q`, type: H.ChangeHandler },
        TMpxbc4MB: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `List Icon`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `01 List Icon`,
          type: H.ResponsiveImage,
        },
        rXZ4KdYNj: {
          defaultValue: `Full material traceability`,
          displayTextArea: !0,
          title: `01 List Title`,
          type: H.String,
        },
        onrXZ4KdYNjChange: { changes: `rXZ4KdYNj`, type: H.ChangeHandler },
        J4wexecxz: {
          defaultValue: `NADCAP special process approval`,
          displayTextArea: !0,
          title: `01 List Title 02`,
          type: H.String,
        },
        onJ4wexecxzChange: { changes: `J4wexecxz`, type: H.ChangeHandler },
        pmKL5EKjX: {
          defaultValue: `Critical safety component expertise`,
          displayTextArea: !0,
          title: `01 List Title 03`,
          type: H.String,
        },
        onpmKL5EKjXChange: { changes: `pmKL5EKjX`, type: H.ChangeHandler },
        B80pNUA3d: {
          defaultValue: `Automotive`,
          displayTextArea: !0,
          title: `02 Link Text`,
          type: H.String,
        },
        onB80pNUA3dChange: { changes: `B80pNUA3d`, type: H.ChangeHandler },
        ThaOztGwM: {
          __defaultAssetReference: `data:framer/asset-reference,UYphAIgKvT1hPYfH9ZPB6xWyrmI.jpg?originalFilename=3+%283%29.jpg&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,UYphAIgKvT1hPYfH9ZPB6xWyrmI.jpg?originalFilename=3+%283%29.jpg&width=533&height=355`,
          },
          title: `02 Image`,
          type: H.ResponsiveImage,
        },
        gNJmrI40g: {
          __defaultAssetReference: `data:framer/asset-reference,dXQpMFhJwNSSRjwhFBc6NvTSoV8.svg?originalFilename=Automotive.svg&width=108&height=81`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,dXQpMFhJwNSSRjwhFBc6NvTSoV8.svg?originalFilename=Automotive.svg&width=108&height=81`,
          },
          title: `02 Icon`,
          type: H.ResponsiveImage,
        },
        vFL_HndNO: {
          defaultValue: `Automotive`,
          displayTextArea: !0,
          title: `02 Title`,
          type: H.String,
        },
        onvFL_HndNOChange: { changes: `vFL_HndNO`, type: H.ChangeHandler },
        lX4rsLjbM: {
          defaultValue: `Precision automotive components engineered for peak performance and complete reliability.`,
          displayTextArea: !0,
          title: `02 Description`,
          type: H.String,
        },
        onlX4rsLjbMChange: { changes: `lX4rsLjbM`, type: H.ChangeHandler },
        wPPtN00Ml: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `List Icon`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `02 List Icon`,
          type: H.ResponsiveImage,
        },
        dqvEMGjVV: {
          defaultValue: `Precision engine parts`,
          displayTextArea: !0,
          title: `02 List Title`,
          type: H.String,
        },
        ondqvEMGjVVChange: { changes: `dqvEMGjVV`, type: H.ChangeHandler },
        xBAKpfRpz: {
          defaultValue: `Reliable transmission components`,
          displayTextArea: !0,
          title: `02 List Title Two-02`,
          type: H.String,
        },
        onxBAKpfRpzChange: { changes: `xBAKpfRpz`, type: H.ChangeHandler },
        NBlSDF81o: {
          defaultValue: `Durable structural elements`,
          displayTextArea: !0,
          title: `02 List Title Three`,
          type: H.String,
        },
        onNBlSDF81oChange: { changes: `NBlSDF81o`, type: H.ChangeHandler },
        KLQBZ8OGd: {
          defaultValue: `Medical devices`,
          displayTextArea: !0,
          title: `03 Link Text`,
          type: H.String,
        },
        onKLQBZ8OGdChange: { changes: `KLQBZ8OGd`, type: H.ChangeHandler },
        Y7lKpFUgx: {
          __defaultAssetReference: `data:framer/asset-reference,aywXQjeib9xpXV2UOvQIZh9M3KQ.jpg?originalFilename=3+%281%29.jpg&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,aywXQjeib9xpXV2UOvQIZh9M3KQ.jpg?originalFilename=3+%281%29.jpg&width=533&height=355`,
          },
          title: `03 Image`,
          type: H.ResponsiveImage,
        },
        S3s3c366L: {
          __defaultAssetReference: `data:framer/asset-reference,xg4OTqug8Ek8xtuBU1ZGJkgPq0g.svg?originalFilename=Medical+devices.svg&width=95&height=81`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,xg4OTqug8Ek8xtuBU1ZGJkgPq0g.svg?originalFilename=Medical+devices.svg&width=95&height=81`,
          },
          title: `03 Icon`,
          type: H.ResponsiveImage,
        },
        FOAXuYJcG: {
          defaultValue: `Medical devices`,
          displayTextArea: !0,
          title: `03 Title`,
          type: H.String,
        },
        onFOAXuYJcGChange: { changes: `FOAXuYJcG`, type: H.ChangeHandler },
        qZtefZiKX: {
          defaultValue: `High-precision medical devices for safer, more effective patient care and diagnostics.`,
          displayTextArea: !0,
          title: `03 Description`,
          type: H.String,
        },
        onqZtefZiKXChange: { changes: `qZtefZiKX`, type: H.ChangeHandler },
        aUwtwUVDl: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `List Icon`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `03 List Icon`,
          type: H.ResponsiveImage,
        },
        diAybB7Q6: {
          defaultValue: `Enhanced Patient Care`,
          displayTextArea: !0,
          title: `03 List Title`,
          type: H.String,
        },
        ondiAybB7Q6Change: { changes: `diAybB7Q6`, type: H.ChangeHandler },
        YJw_EsDOr: {
          defaultValue: `Safety and Reliability`,
          displayTextArea: !0,
          title: `03 List Title 02`,
          type: H.String,
        },
        onYJw_EsDOrChange: { changes: `YJw_EsDOr`, type: H.ChangeHandler },
        S0rNpXwpL: {
          defaultValue: `Operational Efficiency`,
          displayTextArea: !0,
          title: `03 List Title 03`,
          type: H.String,
        },
        onS0rNpXwpLChange: { changes: `S0rNpXwpL`, type: H.ChangeHandler },
        FN_pqwvle: {
          defaultValue: `Energy & power`,
          displayTextArea: !0,
          title: `04 Link Text`,
          type: H.String,
        },
        onFN_pqwvleChange: { changes: `FN_pqwvle`, type: H.ChangeHandler },
        Aa1aIlno8: {
          __defaultAssetReference: `data:framer/asset-reference,RHmYXV4VSws5GeKU40cbCo9U1s.jpg?originalFilename=3+%282%29.jpg&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,RHmYXV4VSws5GeKU40cbCo9U1s.jpg?originalFilename=3+%282%29.jpg&width=533&height=355`,
          },
          title: `04 Image`,
          type: H.ResponsiveImage,
        },
        JiGA69t3G: {
          __defaultAssetReference: `data:framer/asset-reference,R4mMde0cjB1c4ZhabEBPZMsqg.svg?originalFilename=Energy+%26+Power.svg&width=69&height=81`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,R4mMde0cjB1c4ZhabEBPZMsqg.svg?originalFilename=Energy+%26+Power.svg&width=69&height=81`,
          },
          title: `04 Icon`,
          type: H.ResponsiveImage,
        },
        X02GLY2Zj: {
          defaultValue: `Energy & Power`,
          displayTextArea: !0,
          title: `04 Title`,
          type: H.String,
        },
        onX02GLY2ZjChange: { changes: `X02GLY2Zj`, type: H.ChangeHandler },
        kT1hPw7RZ: {
          defaultValue: `Innovative energy systems delivering reliable, efficient, and sustainable performance.`,
          displayTextArea: !0,
          title: `04 Description`,
          type: H.String,
        },
        onkT1hPw7RZChange: { changes: `kT1hPw7RZ`, type: H.ChangeHandler },
        JtpyhvPJP: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `List Icon`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `04 List Icon`,
          type: H.ResponsiveImage,
        },
        QteTzYk1P: {
          defaultValue: `Reliable Energy Supply`,
          displayTextArea: !0,
          title: `04 List Title`,
          type: H.String,
        },
        onQteTzYk1PChange: { changes: `QteTzYk1P`, type: H.ChangeHandler },
        CnywnGpgr: {
          defaultValue: `Efficiency Optimization`,
          displayTextArea: !0,
          title: `04 List Title 02`,
          type: H.String,
        },
        onCnywnGpgrChange: { changes: `CnywnGpgr`, type: H.ChangeHandler },
        P6cC_F5zZ: {
          defaultValue: `Sustainability Focused`,
          displayTextArea: !0,
          title: `04 List Title 03`,
          type: H.String,
        },
        onP6cC_F5zZChange: { changes: `P6cC_F5zZ`, type: H.ChangeHandler },
        lv64Fdrng: {
          defaultValue: `Industrial equipment`,
          displayTextArea: !0,
          title: `05 Link Text`,
          type: H.String,
        },
        onlv64FdrngChange: { changes: `lv64Fdrng`, type: H.ChangeHandler },
        XOSvduK4c: {
          __defaultAssetReference: `data:framer/asset-reference,6bWPpYR9eYKPnt1xJ9tGEXaSaE8.png?originalFilename=2.png&width=533&height=355`,
          __vekterDefault: {
            alt: `Industry Image`,
            assetReference: `data:framer/asset-reference,6bWPpYR9eYKPnt1xJ9tGEXaSaE8.png?originalFilename=2.png&width=533&height=355`,
          },
          title: `05 Image`,
          type: H.ResponsiveImage,
        },
        pzK2bz_T_: {
          __defaultAssetReference: `data:framer/asset-reference,Zo8ubzvw7MMm9ssAAV1qNgNSI.svg?originalFilename=Industrial+equipment.svg&width=81&height=81`,
          __vekterDefault: {
            alt: `Industry Icon`,
            assetReference: `data:framer/asset-reference,Zo8ubzvw7MMm9ssAAV1qNgNSI.svg?originalFilename=Industrial+equipment.svg&width=81&height=81`,
          },
          title: `05 Icon`,
          type: H.ResponsiveImage,
        },
        ldZuhPeFd: {
          defaultValue: `Aerospace`,
          displayTextArea: !0,
          title: `05 Title`,
          type: H.String,
        },
        onldZuhPeFdChange: { changes: `ldZuhPeFd`, type: H.ChangeHandler },
        KAfDz0BYA: {
          defaultValue: `Certified aerospace components built for mission-critical performance and full traceability.`,
          displayTextArea: !0,
          title: `05 Description`,
          type: H.String,
        },
        onKAfDz0BYAChange: { changes: `KAfDz0BYA`, type: H.ChangeHandler },
        e3PG4VZNG: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `List Icon`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `05 List Icon`,
          type: H.ResponsiveImage,
        },
        dWT6cERwY: {
          defaultValue: `Full material traceability`,
          displayTextArea: !0,
          title: `05 List Title`,
          type: H.String,
        },
        ondWT6cERwYChange: { changes: `dWT6cERwY`, type: H.ChangeHandler },
        pPA8tgTYw: {
          defaultValue: `NADCAP special process approval`,
          displayTextArea: !0,
          title: `05 List Title 02`,
          type: H.String,
        },
        onpPA8tgTYwChange: { changes: `pPA8tgTYw`, type: H.ChangeHandler },
        s6KwfWNWQ: {
          defaultValue: `Critical safety component expertise`,
          displayTextArea: !0,
          title: `05 List Title 03`,
          type: H.String,
        },
        ons6KwfWNWQChange: { changes: `s6KwfWNWQ`, type: H.ChangeHandler },
      }),
      le(
        Sa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ra,
          ...W(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Sa.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(ea, {}, t)])) }));
  }))();
}
function wa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba;
function Va() {
  return (Va = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      xt(),
      rt(),
      je(),
      (Ta = N(G)),
      (Ea = [`nqYh41WA9`, `taQ36ybFO`, `u92gFu2i4`]),
      (Da = `framer-aMlgB`),
      (Oa = {
        nqYh41WA9: `framer-v-svwd5b`,
        taQ36ybFO: `framer-v-uie1j2`,
        u92gFu2i4: `framer-v-3ldi5w`,
      }),
      (ka = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Aa = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ja = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ma = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Na = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Pa = { Desktop: `nqYh41WA9`, Phone: `u92gFu2i4`, Tablet: `taQ36ybFO` }),
      (Fa = C.create(i)),
      (Ia = ({
        clientImage: e,
        description: t,
        height: n,
        id: r,
        image: i,
        link: a,
        scope: o,
        scopeText: s,
        title: c,
        width: l,
        ...u
      }) => ({
        ...u,
        kJVrTF5u9: a ?? u.kJVrTF5u9,
        ltrwyz8e3: c ?? u.ltrwyz8e3 ?? `Surface treatment innovation for corrosion resistance`,
        NGDhrhKmB: s ?? u.NGDhrhKmB ?? `Metal parts`,
        P2tXBGhUM: e ??
          u.P2tXBGhUM ?? {
            alt: `Client Image`,
            pixelHeight: 32,
            pixelWidth: 93,
            src: `https://framerusercontent.com/images/AngtJiNuorzWaCtTuzqFMmKYtdc.svg?width=93&height=32`,
          },
        QFGEtggyA: o ?? u.QFGEtggyA ?? `65%`,
        TGxii02c7:
          t ??
          u.TGxii02c7 ??
          `Developed a new coating process to extend the lifespan of metal parts in harsh environments.`,
        variant: Pa[u.variant] ?? u.variant ?? `nqYh41WA9`,
        Wq3TdOL6Y: i ??
          u.Wq3TdOL6Y ?? {
            alt: `Case Study Image`,
            pixelHeight: 404,
            pixelWidth: 760,
            src: `https://framerusercontent.com/images/OIMqoBvHS5lKEuZB5Et9Thkxs.webp?width=760&height=404`,
            srcSet: `https://framerusercontent.com/images/OIMqoBvHS5lKEuZB5Et9Thkxs.webp?scale-down-to=512&width=760&height=404 512w,https://framerusercontent.com/images/OIMqoBvHS5lKEuZB5Et9Thkxs.webp?width=760&height=404 760w`,
          },
      })),
      (La = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ra = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            ltrwyz8e3: m,
            TGxii02c7: h,
            QFGEtggyA: v,
            NGDhrhKmB: y,
            P2tXBGhUM: b,
            Wq3TdOL6Y: x,
            kJVrTF5u9: te,
            ...ne
          } = Ia(e),
          {
            baseVariant: S,
            classNames: w,
            clearLoadingGesture: T,
            gestureHandlers: re,
            gestureVariant: D,
            isLoading: O,
            setGestureState: ie,
            setVariant: ae,
            variants: oe,
          } = se({
            cycleOrder: Ea,
            defaultVariant: `nqYh41WA9`,
            ref: r,
            variant: p,
            variantClassNames: Oa,
          }),
          k = La(e, oe),
          A = B(Da, nt, ot, wt),
          ce = Aa(h),
          le = Aa(v),
          ue = Aa(y),
          de = Aa(b),
          N = Aa(x);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(Fa, {
            animate: oe,
            initial: !1,
            children: /*#__PURE__*/ _(Na, {
              value: ka,
              children: /*#__PURE__*/ g(C.div, {
                ...ne,
                ...re,
                className: B(A, `framer-svwd5b`, u, w),
                "data-framer-name": `Desktop`,
                layoutDependency: k,
                layoutId: `nqYh41WA9`,
                ref: r,
                style: { ...l },
                ...wa(
                  {
                    taQ36ybFO: { "data-framer-name": `Tablet` },
                    u92gFu2i4: { "data-framer-name": `Phone` },
                  },
                  S,
                  D
                ),
                children: [
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-1x73lxe`,
                    "data-framer-name": `Left`,
                    layoutDependency: k,
                    layoutId: `gqg1C4cRC`,
                    style: {
                      backgroundColor: `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: [
                      /*#__PURE__*/ _(L, {
                        background: {
                          alt: `Shadow`,
                          fit: `fill`,
                          loading: j((c?.y || 0) + 0 + -59),
                          pixelHeight: 806,
                          pixelWidth: 1071,
                          sizes: `192px`,
                          src: `../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-bca553.png`,
                          srcSet: `../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg.png 512w,../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-6fba84.png 1024w,../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-bca553.png 1071w`,
                        },
                        className: `framer-14mk8i4`,
                        "data-framer-name": `Form Shadow`,
                        layoutDependency: k,
                        layoutId: `u1N4WjfZl`,
                        ...wa(
                          {
                            u92gFu2i4: {
                              background: {
                                alt: `Shadow`,
                                fit: `fill`,
                                loading: j(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 610) - 0 - 678.2) / 2 + 0 + 0) +
                                    -59
                                ),
                                pixelHeight: 806,
                                pixelWidth: 1071,
                                sizes: `192px`,
                                src: `../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-bca553.png`,
                                srcSet: `../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg.png 512w,../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-6fba84.png 1024w,../../assets/images/a3o6wwpeWsYan5iOW6HpKyDjg-bca553.png 1071w`,
                              },
                            },
                          },
                          S,
                          D
                        ),
                      }),
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-1bjivg4`,
                        "data-framer-name": `Top`,
                        layoutDependency: k,
                        layoutId: `IsGdaTul_`,
                        children: [
                          /*#__PURE__*/ _(M, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ _(i, {
                              children: /*#__PURE__*/ _(C.h3, {
                                className: `framer-styles-preset-1f8or04`,
                                "data-styles-preset": `GzMbxD0G0`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                },
                                children: `Surface treatment innovation for corrosion resistance`,
                              }),
                            }),
                            className: `framer-1yitqfn`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `js9DQ1I9y`,
                            style: {
                              "--extracted-a0htzi": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                            },
                            text: m,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          ce !== !1 &&
                            /*#__PURE__*/ _(M, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ _(i, {
                                children: /*#__PURE__*/ _(C.p, {
                                  className: `framer-styles-preset-gf9yid`,
                                  "data-styles-preset": `XorWCRDBg`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162)))`,
                                  },
                                  children: `Developed a new coating process to extend the lifespan of metal parts in harsh environments.`,
                                }),
                              }),
                              className: `framer-hmnxv6`,
                              "data-framer-name": `Description`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `quR7XuGGB`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-k7tefx`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: k,
                        layoutId: `LVHJCIaNM`,
                        children: [
                          /*#__PURE__*/ g(C.div, {
                            className: `framer-1hfvxra`,
                            "data-framer-name": `Info`,
                            layoutDependency: k,
                            layoutId: `Ia8fZbB4A`,
                            children: [
                              le !== !1 &&
                                /*#__PURE__*/ _(M, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.h4, {
                                      className: `framer-styles-preset-1b4mdza`,
                                      "data-styles-preset": `mOcxLNaxt`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1eung3n, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                      },
                                      children: `65%`,
                                    }),
                                  }),
                                  className: `framer-16vrds5`,
                                  "data-framer-name": `Counter`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `avUE0qTN3`,
                                  style: {
                                    "--extracted-1eung3n": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                  },
                                  text: v,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ue !== !1 &&
                                /*#__PURE__*/ _(M, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ _(i, {
                                    children: /*#__PURE__*/ _(C.p, {
                                      className: `framer-styles-preset-gf9yid`,
                                      "data-styles-preset": `XorWCRDBg`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162)))`,
                                      },
                                      children: `Metal parts`,
                                    }),
                                  }),
                                  className: `framer-ubchg`,
                                  "data-framer-name": `Scope Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `OKvYIhTK6`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                                  },
                                  text: y,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                          /*#__PURE__*/ _(R, {
                            height: 52,
                            y:
                              (c?.y || 0) +
                              0 +
                              30 +
                              (154.8 + ((((c?.height || 323) - 0) * 1 - 60 - 323.2) / 1) * 1) +
                              58.2,
                            ...wa(
                              {
                                u92gFu2i4: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 610) - 0 - 678.2) / 2 + 0 + 0) +
                                    20 +
                                    184.8 +
                                    0 +
                                    178.4,
                                },
                              },
                              S,
                              D
                            ),
                            children: /*#__PURE__*/ _(Te, {
                              className: `framer-dfi0m5-container`,
                              layoutDependency: k,
                              layoutId: `XVl0ChMyq-container`,
                              nodeId: `XVl0ChMyq`,
                              rendersWithMotion: !0,
                              scopeId: `UxItRCxoH`,
                              children: /*#__PURE__*/ _(G, {
                                gr8i9ifqK: te,
                                height: `100%`,
                                id: `XVl0ChMyq`,
                                layoutId: `XVl0ChMyq`,
                                LkRCOsI08: `View case`,
                                variant: ja(`pWspeyDyb`),
                                width: `100%`,
                                xgHJht2Sv: !1,
                                ...wa(
                                  {
                                    taQ36ybFO: { variant: ja(`N7uhFy2RI`) },
                                    u92gFu2i4: { variant: ja(`N7uhFy2RI`) },
                                  },
                                  S,
                                  D
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  /*#__PURE__*/ g(C.div, {
                    className: `framer-ch3pus`,
                    "data-framer-name": `Right`,
                    layoutDependency: k,
                    layoutId: `vpS1aqZPR`,
                    style: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: [
                      de !== !1 &&
                        /*#__PURE__*/ _(L, {
                          background: {
                            alt: `Client Image`,
                            fit: `fit`,
                            loading: j((c?.y || 0) + 0 + 30),
                            pixelHeight: 32,
                            pixelWidth: 93,
                            sizes: `119px`,
                            ...Ma(b),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-y61br3`,
                          "data-framer-name": `Client Image`,
                          fitImageDimension: `height`,
                          layoutDependency: k,
                          layoutId: `LdmH6Lfpm`,
                          ...wa(
                            {
                              u92gFu2i4: {
                                background: {
                                  alt: `Client Image`,
                                  fit: `fit`,
                                  loading: j(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 610) - 0 - 678.2) / 2 + 455.2 + 16) +
                                      20
                                  ),
                                  pixelHeight: 32,
                                  pixelWidth: 93,
                                  sizes: `119px`,
                                  ...Ma(b),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            S,
                            D
                          ),
                        }),
                      N !== !1 &&
                        /*#__PURE__*/ _(L, {
                          background: {
                            alt: `Case Study Image`,
                            fit: `fill`,
                            loading: j(
                              (c?.y || 0) +
                                0 +
                                0 +
                                ((((c?.height || 323) - 0) * 1 - 0 - -100) / 2 + 0 + 0)
                            ),
                            pixelHeight: 404,
                            pixelWidth: 760,
                            sizes: `max((${c?.width || `100vw`} - 20px) / 2, 1px)`,
                            ...Ma(x),
                          },
                          className: `framer-1ec8r68`,
                          "data-framer-name": `Image`,
                          layoutDependency: k,
                          layoutId: `wBaf6ZN1h`,
                          ...wa(
                            {
                              u92gFu2i4: {
                                background: {
                                  alt: `Case Study Image`,
                                  fit: `fill`,
                                  loading: j(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 610) - 0 - 678.2) / 2 + 455.2 + 16) +
                                      0 +
                                      153.5
                                  ),
                                  pixelHeight: 404,
                                  pixelWidth: 760,
                                  sizes: c?.width || `100vw`,
                                  ...Ma(x),
                                },
                                fitImageDimension: `height`,
                              },
                            },
                            S,
                            D
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (za = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-aMlgB.framer-3n3epy, .framer-aMlgB .framer-3n3epy { display: block; }`,
        `.framer-aMlgB.framer-svwd5b { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 323px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1360px; }`,
        `.framer-aMlgB .framer-1x73lxe { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-aMlgB .framer-14mk8i4 { -webkit-user-select: none; flex: none; height: 159px; overflow: visible; pointer-events: none; position: absolute; right: -61px; top: -59px; user-select: none; width: 192px; z-index: 1; }`,
        `.framer-aMlgB .framer-1bjivg4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aMlgB .framer-1yitqfn, .framer-aMlgB .framer-hmnxv6, .framer-aMlgB .framer-16vrds5 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-aMlgB .framer-k7tefx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aMlgB .framer-1hfvxra { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-aMlgB .framer-ubchg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-aMlgB .framer-dfi0m5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-aMlgB .framer-ch3pus { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-aMlgB .framer-y61br3 { flex: none; height: auto; left: 30px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 30px; width: 119px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-aMlgB .framer-1ec8r68 { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-aMlgB.framer-v-3ldi5w.framer-svwd5b { flex-direction: column; gap: 16px; height: min-content; width: 390px; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-1x73lxe { flex: none; gap: 30px; height: min-content; justify-content: center; padding: 20px; width: 100%; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-k7tefx { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-1hfvxra { flex: none; gap: 4px; width: 100%; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-ch3pus { flex: none; height: min-content; width: 100%; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-y61br3 { left: 20px; top: 20px; }`,
        `.framer-aMlgB.framer-v-3ldi5w .framer-1ec8r68 { flex: none; height: auto; }`,
        ...et,
        ...it,
        ...St,
      ]),
      (Ba = Ee(Ra, za, `framer-aMlgB`)),
      (Ba.displayName = `Case Study Split Card`),
      (Ba.defaultProps = { height: 323, width: 1360 }),
      ce(Ba, {
        variant: {
          options: [`nqYh41WA9`, `taQ36ybFO`, `u92gFu2i4`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        ltrwyz8e3: {
          defaultValue: `Surface treatment innovation for corrosion resistance`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        onltrwyz8e3Change: { changes: `ltrwyz8e3`, type: H.ChangeHandler },
        TGxii02c7: {
          defaultValue: `Developed a new coating process to extend the lifespan of metal parts in harsh environments.`,
          displayTextArea: !0,
          title: `Description`,
          type: H.String,
        },
        onTGxii02c7Change: { changes: `TGxii02c7`, type: H.ChangeHandler },
        QFGEtggyA: { defaultValue: `65%`, displayTextArea: !1, title: `Scope`, type: H.String },
        onQFGEtggyAChange: { changes: `QFGEtggyA`, type: H.ChangeHandler },
        NGDhrhKmB: {
          defaultValue: `Metal parts`,
          displayTextArea: !0,
          title: `Scope Text`,
          type: H.String,
        },
        onNGDhrhKmBChange: { changes: `NGDhrhKmB`, type: H.ChangeHandler },
        P2tXBGhUM: {
          __defaultAssetReference: `data:framer/asset-reference,AngtJiNuorzWaCtTuzqFMmKYtdc.svg?originalFilename=Client+image+5.svg&width=93&height=32`,
          __vekterDefault: {
            alt: `Client Image`,
            assetReference: `data:framer/asset-reference,AngtJiNuorzWaCtTuzqFMmKYtdc.svg?originalFilename=Client+image+5.svg&width=93&height=32`,
          },
          title: `Client Image`,
          type: H.ResponsiveImage,
        },
        Wq3TdOL6Y: {
          __defaultAssetReference: `data:framer/asset-reference,OIMqoBvHS5lKEuZB5Et9Thkxs.webp?originalFilename=case+study+image+5.webp&width=760&height=404`,
          __vekterDefault: {
            alt: `Case Study Image`,
            assetReference: `data:framer/asset-reference,OIMqoBvHS5lKEuZB5Et9Thkxs.webp?originalFilename=case+study+image+5.webp&width=760&height=404`,
          },
          description: `Recommended size 760px X 404px`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
        kJVrTF5u9: { title: `Link`, type: H.Link },
      }),
      le(
        Ba,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ta,
          ...W(tt),
          ...W(at),
          ...W(Ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ba.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(G, {}, t)])) }));
  }))();
}
function Ha(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io;
function ao() {
  return (ao = e(() => {
    (y(),
      de(),
      O(),
      u(),
      Le(),
      qe(),
      je(),
      (Ua = N(Ve)),
      (Wa = N(G)),
      (Ga = [`j2NEhDvUH`, `wQ5GIaC5J`, `QCu0S8syS`]),
      (Ka = `framer-B7abq`),
      (qa = {
        j2NEhDvUH: `framer-v-1gkhnn4`,
        QCu0S8syS: `framer-v-9rur5v`,
        wQ5GIaC5J: `framer-v-umuork`,
      }),
      (Ja = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ya = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (Xa = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Za = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (Qa = C.create(i)),
      ($a = { Desktop: `j2NEhDvUH`, Phone: `QCu0S8syS`, Tablet: `wQ5GIaC5J` }),
      (eo = ({ buttonTitle: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        DDeORrCV2: i ?? o.DDeORrCV2 ?? `Ready to start your next project?`,
        HdZm6FR4M: r ?? o.HdZm6FR4M,
        LdLEw6rhv: e ?? o.LdLEw6rhv ?? `Schedule now`,
        variant: $a[o.variant] ?? o.variant ?? `j2NEhDvUH`,
      })),
      (to = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (no = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            DDeORrCV2: m,
            LdLEw6rhv: h,
            HdZm6FR4M: v,
            ...y
          } = eo(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: te,
            gestureHandlers: ne,
            gestureVariant: S,
            isLoading: w,
            setGestureState: T,
            setVariant: re,
            variants: D,
          } = se({
            cycleOrder: Ga,
            defaultVariant: `j2NEhDvUH`,
            ref: r,
            variant: p,
            variantClassNames: qa,
          }),
          O = to(e, D),
          ie = B(Ka, Xe);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(Qa, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ _(Za, {
              value: Ja,
              children: /*#__PURE__*/ _(C.div, {
                ...y,
                ...ne,
                className: B(ie, `framer-1gkhnn4`, u, x),
                "data-framer-name": `Desktop`,
                layoutDependency: O,
                layoutId: `j2NEhDvUH`,
                ref: r,
                style: {
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  ...l,
                },
                ...Ha(
                  {
                    QCu0S8syS: { "data-framer-name": `Phone` },
                    wQ5GIaC5J: { "data-framer-name": `Tablet` },
                  },
                  b,
                  S
                ),
                children: /*#__PURE__*/ _(C.div, {
                  className: `framer-mv55og`,
                  "data-framer-name": `Container`,
                  layoutDependency: O,
                  layoutId: `yhK3X2Y_T`,
                  children: /*#__PURE__*/ g(C.div, {
                    className: `framer-cgrg2a`,
                    "data-framer-name": `Content`,
                    layoutDependency: O,
                    layoutId: `N0eETZZET`,
                    style: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: [
                      /*#__PURE__*/ _(M, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ _(i, {
                          children: /*#__PURE__*/ _(C.h2, {
                            className: `framer-styles-preset-ujbs82`,
                            "data-styles-preset": `l__4UHlzt`,
                            style: {
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                            },
                            children: `Ready to start your next project?`,
                          }),
                        }),
                        className: `framer-ml5hz0`,
                        "data-framer-name": `Title`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `DtipSTAYX`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ g(C.div, {
                        className: `framer-dg92vk`,
                        "data-framer-name": `Button`,
                        layoutDependency: O,
                        layoutId: `Ef7wR6qas`,
                        children: [
                          /*#__PURE__*/ _(R, {
                            children: /*#__PURE__*/ _(Te, {
                              className: `framer-1jg61l3-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: O,
                              layoutId: `M9bpjYNle-container`,
                              nodeId: `M9bpjYNle`,
                              rendersWithMotion: !0,
                              scopeId: `Vp40XEbFR`,
                              children: /*#__PURE__*/ _(Ve, {
                                fontControl: {
                                  fontFamily: `"Geist", "Geist Placeholder", sans-serif`,
                                  fontSize: `18px`,
                                  fontStyle: `normal`,
                                  fontWeight: 500,
                                  letterSpacing: `0em`,
                                  lineHeight: `1.2em`,
                                },
                                height: `100%`,
                                hoverOptions: {
                                  scale: 1.05,
                                  transition: {
                                    delay: 0,
                                    duration: 0.4,
                                    ease: [0.44, 0, 0.56, 1],
                                    type: `tween`,
                                  },
                                },
                                iconOptions: {
                                  alignment: `end`,
                                  color: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                  image: Ya(
                                    {
                                      pixelHeight: 17,
                                      pixelWidth: 19,
                                      src: `../../assets/images/FMYHIQjdikOhoXe2cvZxTA5KY.svg`,
                                    },
                                    `Icon`
                                  ),
                                  size: 18,
                                  type: `Custom`,
                                },
                                id: `M9bpjYNle`,
                                layoutId: `M9bpjYNle`,
                                srcFile: `https://framerusercontent.com/assets/v9AJ9QDAVxlfeZvrmT5L6X1m3I.pdf`,
                                srcType: `Upload`,
                                srcURL: ``,
                                styleOptions: {
                                  backgroundColor: `var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0))`,
                                  borderRadius: 0,
                                  color: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                  gap: 8,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                },
                                text: `Download brochure`,
                                width: `100%`,
                                ...Ha(
                                  {
                                    QCu0S8syS: {
                                      fontControl: {
                                        fontFamily: `"Geist", "Geist Placeholder", sans-serif`,
                                        fontSize: `16px`,
                                        fontStyle: `normal`,
                                        fontWeight: 500,
                                        letterSpacing: `0em`,
                                        lineHeight: `1.2em`,
                                      },
                                      hoverOptions: void 0,
                                      iconOptions: {
                                        alignment: `end`,
                                        color: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                        image: Ya(
                                          {
                                            pixelHeight: 17,
                                            pixelWidth: 19,
                                            src: `../../assets/images/FMYHIQjdikOhoXe2cvZxTA5KY.svg`,
                                          },
                                          `Icon`
                                        ),
                                        size: 16,
                                        type: `Custom`,
                                      },
                                    },
                                    wQ5GIaC5J: { hoverOptions: void 0 },
                                  },
                                  b,
                                  S
                                ),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ _(R, {
                            height: 52,
                            ...Ha(
                              {
                                QCu0S8syS: {
                                  y:
                                    (c?.y || 0) +
                                    (0 + ((c?.height || 200) - 0 - 260) / 2) +
                                    0 +
                                    0 +
                                    88 +
                                    0 +
                                    120,
                                },
                              },
                              b,
                              S
                            ),
                            children: /*#__PURE__*/ _(Te, {
                              className: `framer-1p0whjh-container`,
                              layoutDependency: O,
                              layoutId: `XLpXKfAcD-container`,
                              nodeId: `XLpXKfAcD`,
                              rendersWithMotion: !0,
                              scopeId: `Vp40XEbFR`,
                              children: /*#__PURE__*/ _(G, {
                                gr8i9ifqK: v,
                                height: `100%`,
                                id: `XLpXKfAcD`,
                                layoutId: `XLpXKfAcD`,
                                LkRCOsI08: h,
                                variant: Xa(`egt0_wuli`),
                                width: `100%`,
                                xgHJht2Sv: !1,
                                ...Ha(
                                  {
                                    QCu0S8syS: { variant: Xa(`Ag3jLliLD`) },
                                    wQ5GIaC5J: { variant: Xa(`Ag3jLliLD`) },
                                  },
                                  b,
                                  S
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (ro = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-B7abq.framer-ex55qi, .framer-B7abq .framer-ex55qi { display: block; }`,
        `.framer-B7abq.framer-1gkhnn4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1100px; }`,
        `.framer-B7abq .framer-mv55og { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-B7abq .framer-cgrg2a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-B7abq .framer-ml5hz0 { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-B7abq .framer-dg92vk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-B7abq .framer-1jg61l3-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-B7abq .framer-1p0whjh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-B7abq.framer-v-umuork.framer-1gkhnn4 { width: 810px; }`,
        `.framer-B7abq.framer-v-9rur5v.framer-1gkhnn4 { width: 390px; }`,
        `.framer-B7abq.framer-v-9rur5v .framer-mv55og { padding: 0px 16px 0px 16px; }`,
        `.framer-B7abq.framer-v-9rur5v .framer-cgrg2a { flex-direction: column; gap: 40px; justify-content: center; }`,
        `.framer-B7abq.framer-v-9rur5v .framer-ml5hz0 { flex: none; width: 100%; }`,
        `.framer-B7abq.framer-v-9rur5v .framer-dg92vk { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 20px; justify-content: center; width: 100%; }`,
        ...Je,
      ]),
      (io = Ee(no, ro, `framer-B7abq`)),
      (io.displayName = `Split CTA`),
      (io.defaultProps = { height: 96, width: 1100 }),
      ce(io, {
        variant: {
          options: [`j2NEhDvUH`, `wQ5GIaC5J`, `QCu0S8syS`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        DDeORrCV2: {
          defaultValue: `Ready to start your next project?`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        LdLEw6rhv: {
          defaultValue: `Schedule now`,
          displayTextArea: !0,
          title: `Button Title`,
          type: H.String,
        },
        HdZm6FR4M: { title: `Link`, type: H.Link },
      }),
      le(
        io,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `../../assets/fonts/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Ua,
          ...Wa,
          ...W(Ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function oo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo;
function To() {
  return (To = e(() => {
    (y(),
      de(),
      O(),
      u(),
      $e(),
      dt(),
      Sr(),
      (so = N(Y)),
      (co = { f_NyN_jsX: { hover: !0 } }),
      (lo = [`f_NyN_jsX`, `C2umEqTRx`, `mrTU5HeeU`]),
      (uo = `framer-dX1IQ`),
      (fo = {
        C2umEqTRx: `framer-v-s35ux6`,
        f_NyN_jsX: `framer-v-hrub5m`,
        mrTU5HeeU: `framer-v-1mha0lw`,
      }),
      (po = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (mo = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ho = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (go = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_o = ({ value: e, children: t }) => {
        let n = m(D),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ _(D.Provider, { value: i, children: t });
      }),
      (vo = { Desktop: `f_NyN_jsX`, Phone: `mrTU5HeeU`, Tablet: `C2umEqTRx` }),
      (yo = C.create(i)),
      (bo = ({
        featureTextFour: e,
        featureTextOne: t,
        featureTextThree: n,
        featureTextTwo: r,
        height: i,
        id: a,
        link: o,
        listIconFour: s,
        listIconOne: c,
        listIconThree: l,
        listIconTwo: u,
        newTab: d,
        serviceIcon: f,
        serviceImage: p,
        title: m,
        width: h,
        ...g
      }) => ({
        ...g,
        dkVPAP1AU: f ??
          g.dkVPAP1AU ?? {
            alt: `Service Icon`,
            pixelHeight: 41,
            pixelWidth: 41,
            src: `../../assets/images/8A2bCLa6pyOXwAS0i8tAQrdLhTU.svg`,
          },
        ePstuBbZd: r ?? g.ePstuBbZd ?? `Functional testing protocols`,
        EQXskm2c_: l ??
          g.EQXskm2c_ ?? {
            alt: `Check Mark Arrow`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        JC0Vlg9Ij: d ?? g.JC0Vlg9Ij,
        LITdA5bQW: n ?? g.LITdA5bQW ?? `Custom packaging design`,
        Nkj13OxLQ: c ??
          g.Nkj13OxLQ ?? {
            alt: `Check Mark Arrow`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        rb9Hn8unZ: o ?? g.rb9Hn8unZ,
        uDuV871j4: m ?? g.uDuV871j4 ?? `Product assembly`,
        variant: vo[g.variant] ?? g.variant ?? `f_NyN_jsX`,
        vY7wYQZvk: p ??
          g.vY7wYQZvk ?? {
            alt: `Service Image`,
            pixelHeight: 800,
            pixelWidth: 1400,
            src: `../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp`,
            srcSet: `../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA-87ff81.webp 512w,../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA-7acbbe.webp 1024w,../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp 1400w`,
          },
        WdGXGluV4: s ??
          g.WdGXGluV4 ?? {
            alt: `Check Mark Arrow`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        X4Xiuc8OV: t ?? g.X4Xiuc8OV ?? `Manual & automated assembly`,
        Xugb6TYJY: u ??
          g.Xugb6TYJY ?? {
            alt: `Check Mark Arrow`,
            pixelHeight: 10,
            pixelWidth: 15,
            src: `../../assets/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg`,
          },
        Y3Yl9FCtq: e ?? g.Y3Yl9FCtq ?? `Supply chain management`,
      })),
      (xo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (So = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: o, setLocale: s } = me(),
          c = ge(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            dkVPAP1AU: m,
            vY7wYQZvk: h,
            uDuV871j4: v,
            Nkj13OxLQ: y,
            X4Xiuc8OV: b,
            Xugb6TYJY: x,
            ePstuBbZd: te,
            EQXskm2c_: ne,
            LITdA5bQW: S,
            WdGXGluV4: w,
            Y3Yl9FCtq: T,
            rb9Hn8unZ: re,
            JC0Vlg9Ij: D,
            ...O
          } = bo(e),
          {
            baseVariant: ie,
            classNames: ae,
            clearLoadingGesture: oe,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: ce,
            setGestureState: le,
            setVariant: ue,
            variants: de,
          } = se({
            cycleOrder: lo,
            defaultVariant: `f_NyN_jsX`,
            enabledGestures: co,
            ref: r,
            variant: p,
            variantClassNames: fo,
          }),
          N = xo(e, de),
          fe = B(uo, nt, mt),
          P = mo(m),
          F = mo(h),
          pe = () => ![`C2umEqTRx`, `mrTU5HeeU`].includes(ie);
        return /*#__PURE__*/ _(E, {
          id: d ?? a,
          children: /*#__PURE__*/ _(yo, {
            animate: de,
            initial: !1,
            children: /*#__PURE__*/ _(_o, {
              value: po,
              children: /*#__PURE__*/ _(ye, {
                href: re,
                motionChild: !0,
                nodeId: `f_NyN_jsX`,
                openInNewTab: D,
                scopeId: `XU2kBCsCR`,
                smoothScroll: !0,
                children: /*#__PURE__*/ g(C.a, {
                  ...O,
                  ...k,
                  className: `${B(fe, `framer-hrub5m`, u, ae)} framer-sh74g8`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `f_NyN_jsX`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `var(--token-41dbab4b-4d8a-40dc-a562-4b7709d86f82, rgba(92, 92, 92, 0.2))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                    ...l,
                  },
                  ...oo(
                    {
                      "f_NyN_jsX-hover": { "data-framer-name": void 0 },
                      C2umEqTRx: { "data-framer-name": `Tablet` },
                      mrTU5HeeU: { "data-framer-name": `Phone` },
                    },
                    ie,
                    A
                  ),
                  children: [
                    P !== !1 &&
                      /*#__PURE__*/ _(L, {
                        background: {
                          alt: `Service Icon`,
                          fit: `fit`,
                          loading: j((c?.y || 0) + 40),
                          pixelHeight: 41,
                          pixelWidth: 41,
                          sizes: `30px`,
                          ...ho(m),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-130gigc`,
                        "data-framer-name": `Icon`,
                        fitImageDimension: `height`,
                        layoutDependency: N,
                        layoutId: `sE7yzYGFQ`,
                        ...oo(
                          {
                            mrTU5HeeU: {
                              background: {
                                alt: `Service Icon`,
                                fit: `fit`,
                                loading: j((c?.y || 0) + 16 + 0),
                                pixelHeight: 41,
                                pixelWidth: 41,
                                sizes: `30px`,
                                ...ho(m),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                          },
                          ie,
                          A
                        ),
                      }),
                    F !== !1 &&
                      /*#__PURE__*/ _(C.div, {
                        className: `framer-1iww2sc`,
                        "data-framer-name": `Image`,
                        layoutDependency: N,
                        layoutId: `Za852X0lx`,
                        style: {
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                        children: /*#__PURE__*/ _(L, {
                          background: {
                            alt: `Service Image`,
                            fit: `fill`,
                            loading: j((c?.y || 0) + 40 + 0),
                            pixelHeight: 800,
                            pixelWidth: 1400,
                            ...ho(h),
                          },
                          className: `framer-19lhsbc`,
                          "data-framer-name": `Image`,
                          fitImageDimension: `height`,
                          layoutDependency: N,
                          layoutId: `trUL6Lz7c`,
                          style: { scale: 1 },
                          variants: { "f_NyN_jsX-hover": { scale: 1.05 } },
                          ...oo(
                            {
                              mrTU5HeeU: {
                                background: {
                                  alt: `Service Image`,
                                  fit: `fill`,
                                  loading: j((c?.y || 0) + 16 + 0 + 0),
                                  pixelHeight: 800,
                                  pixelWidth: 1400,
                                  sizes: `max(${c?.width || `100vw`} - 32px, 1px)`,
                                  ...ho(h),
                                },
                              },
                            },
                            ie,
                            A
                          ),
                        }),
                      }),
                    /*#__PURE__*/ _(C.div, {
                      className: `framer-19648j6`,
                      "data-framer-name": `Title`,
                      layoutDependency: N,
                      layoutId: `QDffZjG6a`,
                      children: /*#__PURE__*/ _(M, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ _(i, {
                          children: /*#__PURE__*/ _(C.h3, {
                            className: `framer-styles-preset-1f8or04`,
                            "data-styles-preset": `GzMbxD0G0`,
                            style: {
                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                            },
                            children: `Product assembly`,
                          }),
                        }),
                        className: `framer-1qata7y`,
                        "data-framer-name": `Title`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `SKTpJ_6Va`,
                        style: {
                          "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    /*#__PURE__*/ g(C.div, {
                      className: `framer-wh3e6y`,
                      "data-framer-name": `Info`,
                      layoutDependency: N,
                      layoutId: `LYvsk9rdI`,
                      children: [
                        /*#__PURE__*/ _(M, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ _(i, {
                            children: /*#__PURE__*/ _(C.p, {
                              className: `framer-styles-preset-15frtqy`,
                              "data-styles-preset": `P89o9sRK1`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                              },
                              children: `Features`,
                            }),
                          }),
                          className: `framer-1dl1gr5`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `zQdabQYpk`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ g(C.div, {
                          className: `framer-1ylzjzz`,
                          "data-framer-name": `Feature List`,
                          layoutDependency: N,
                          layoutId: `XLpd3QUJp`,
                          children: [
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              y: (c?.y || 0) + 40 + 0 + 124 + 0 + 0,
                              ...oo(
                                {
                                  mrTU5HeeU: {
                                    width: `calc(${c?.width || `100vw`} - 32px)`,
                                    y: (c?.y || 0) + 16 + 46.8 + 0 + 94 + 0 + 0,
                                  },
                                },
                                ie,
                                A
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-bg784t-container`,
                                layoutDependency: N,
                                layoutId: `ZZkDj71N0-container`,
                                nodeId: `ZZkDj71N0`,
                                rendersWithMotion: !0,
                                scopeId: `XU2kBCsCR`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: ho(y),
                                  height: `100%`,
                                  id: `ZZkDj71N0`,
                                  layoutId: `ZZkDj71N0`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: b,
                                  variant: go(`y0rHWo5tm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              y: (c?.y || 0) + 40 + 0 + 124 + 0 + 27,
                              ...oo(
                                {
                                  mrTU5HeeU: {
                                    width: `calc(${c?.width || `100vw`} - 32px)`,
                                    y: (c?.y || 0) + 16 + 46.8 + 0 + 94 + 0 + 27,
                                  },
                                },
                                ie,
                                A
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-vcldoq-container`,
                                layoutDependency: N,
                                layoutId: `GZpEcYkMk-container`,
                                nodeId: `GZpEcYkMk`,
                                rendersWithMotion: !0,
                                scopeId: `XU2kBCsCR`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: ho(x),
                                  height: `100%`,
                                  id: `GZpEcYkMk`,
                                  layoutId: `GZpEcYkMk`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: te,
                                  variant: go(`y0rHWo5tm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              y: (c?.y || 0) + 40 + 0 + 124 + 0 + 54,
                              ...oo(
                                {
                                  mrTU5HeeU: {
                                    width: `calc(${c?.width || `100vw`} - 32px)`,
                                    y: (c?.y || 0) + 16 + 46.8 + 0 + 94 + 0 + 54,
                                  },
                                },
                                ie,
                                A
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-munrb3-container`,
                                layoutDependency: N,
                                layoutId: `HVqYBkB9p-container`,
                                nodeId: `HVqYBkB9p`,
                                rendersWithMotion: !0,
                                scopeId: `XU2kBCsCR`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: ho(ne),
                                  height: `100%`,
                                  id: `HVqYBkB9p`,
                                  layoutId: `HVqYBkB9p`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: S,
                                  variant: go(`y0rHWo5tm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ _(R, {
                              height: 17,
                              y: (c?.y || 0) + 40 + 0 + 124 + 0 + 81,
                              ...oo(
                                {
                                  mrTU5HeeU: {
                                    width: `calc(${c?.width || `100vw`} - 32px)`,
                                    y: (c?.y || 0) + 16 + 46.8 + 0 + 94 + 0 + 81,
                                  },
                                },
                                ie,
                                A
                              ),
                              children: /*#__PURE__*/ _(Te, {
                                className: `framer-5a87iu-container`,
                                layoutDependency: N,
                                layoutId: `XiRpTtMSo-container`,
                                nodeId: `XiRpTtMSo`,
                                rendersWithMotion: !0,
                                scopeId: `XU2kBCsCR`,
                                children: /*#__PURE__*/ _(Y, {
                                  ekCy3cFsq: ho(w),
                                  height: `100%`,
                                  id: `XiRpTtMSo`,
                                  layoutId: `XiRpTtMSo`,
                                  style: { width: `100%` },
                                  TzoAmWk5W: T,
                                  variant: go(`y0rHWo5tm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _(C.div, {
                      className: `framer-9oadd5`,
                      "data-framer-name": `Button`,
                      layoutDependency: N,
                      layoutId: `qClmajT0o`,
                      style: {
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 14,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                      children: /*#__PURE__*/ g(C.div, {
                        className: `framer-nge7ge`,
                        "data-framer-name": `Icon`,
                        layoutDependency: N,
                        layoutId: `L0i6k4N1G`,
                        style: {
                          background: `linear-gradient(45deg, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 0%, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)) 100%)`,
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        variants: {
                          C2umEqTRx: {
                            background: `linear-gradient(45deg, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 0%, var(--token-f77bd4e9-b817-4bf0-a253-dffefe6609e4, rgb(158, 50, 17)) 100%)`,
                          },
                          mrTU5HeeU: {
                            background: `linear-gradient(45deg, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 0%, var(--token-f77bd4e9-b817-4bf0-a253-dffefe6609e4, rgb(158, 50, 17)) 100%)`,
                          },
                        },
                        children: [
                          /*#__PURE__*/ _(L, {
                            background: {
                              alt: `Button Icon`,
                              fit: `fit`,
                              loading: j((c?.y || 0) + 40 + 0 + 14),
                              pixelHeight: 12,
                              pixelWidth: 16,
                              positionX: `center`,
                              positionY: `center`,
                              sizes: `16px`,
                              src: `../../assets/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg`,
                            },
                            className: `framer-zzftte`,
                            "data-framer-name": `Hover Icon`,
                            fitImageDimension: `height`,
                            layoutDependency: N,
                            layoutId: `YXNO62KXD`,
                            style: {
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                            ...oo(
                              {
                                mrTU5HeeU: {
                                  background: {
                                    alt: `Button Icon`,
                                    fit: `fit`,
                                    loading: j((c?.y || 0) + 16 + 254.8 + 0 + 14),
                                    pixelHeight: 12,
                                    pixelWidth: 16,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `16px`,
                                    src: `../../assets/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg`,
                                  },
                                },
                              },
                              ie,
                              A
                            ),
                          }),
                          pe() &&
                            /*#__PURE__*/ _(L, {
                              background: {
                                alt: `Button Icon`,
                                fit: `fit`,
                                loading: j((c?.y || 0) + 40 + 0 + 14),
                                pixelHeight: 12,
                                pixelWidth: 16,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `16px`,
                                src: `../../assets/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg`,
                              },
                              className: `framer-m48kht`,
                              "data-framer-name": `Hover Icon`,
                              fitImageDimension: `height`,
                              layoutDependency: N,
                              layoutId: `bQIQJuhuV`,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Co = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-dX1IQ.framer-sh74g8, .framer-dX1IQ .framer-sh74g8 { display: block; }`,
        `.framer-dX1IQ.framer-hrub5m { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 20px 40px 20px; position: relative; text-decoration: none; width: 1076px; }`,
        `.framer-dX1IQ .framer-130gigc { flex: none; height: auto; overflow: visible; position: relative; width: 30px; }`,
        `.framer-dX1IQ .framer-1iww2sc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-dX1IQ .framer-19lhsbc { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-dX1IQ .framer-19648j6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-dX1IQ .framer-1qata7y { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-dX1IQ .framer-wh3e6y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-dX1IQ .framer-1dl1gr5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-dX1IQ .framer-1ylzjzz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dX1IQ .framer-bg784t-container, .framer-dX1IQ .framer-vcldoq-container, .framer-dX1IQ .framer-munrb3-container, .framer-dX1IQ .framer-5a87iu-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-dX1IQ .framer-9oadd5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-dX1IQ .framer-nge7ge { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-dX1IQ .framer-zzftte { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-dX1IQ .framer-m48kht { flex: none; height: auto; left: -16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 14px; width: 16px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-dX1IQ.framer-v-s35ux6.framer-hrub5m { cursor: unset; gap: 20px; width: 810px; }`,
        `.framer-dX1IQ.framer-v-s35ux6 .framer-nge7ge, .framer-dX1IQ.framer-v-1mha0lw .framer-nge7ge { order: 0; }`,
        `.framer-dX1IQ.framer-v-1mha0lw.framer-hrub5m { cursor: unset; flex-direction: column; gap: 16px; padding: 16px; width: 390px; }`,
        `.framer-dX1IQ.framer-v-1mha0lw .framer-1iww2sc, .framer-dX1IQ.framer-v-1mha0lw .framer-19648j6 { flex: none; width: 100%; }`,
        `.framer-dX1IQ.framer-v-1mha0lw .framer-wh3e6y { flex: none; gap: 10px; width: 100%; }`,
        ...et,
        ...ft,
        `.framer-dX1IQ[data-border="true"]::after, .framer-dX1IQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (wo = Ee(So, Co, `framer-dX1IQ`)),
      (wo.displayName = `Service Card LG`),
      (wo.defaultProps = { height: 253, width: 1076 }),
      ce(wo, {
        variant: {
          options: [`f_NyN_jsX`, `C2umEqTRx`, `mrTU5HeeU`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        dkVPAP1AU: {
          __defaultAssetReference: `data:framer/asset-reference,8A2bCLa6pyOXwAS0i8tAQrdLhTU.svg?originalFilename=Service+Icon+%285%29.svg&width=41&height=41`,
          __vekterDefault: {
            alt: `Service Icon`,
            assetReference: `data:framer/asset-reference,8A2bCLa6pyOXwAS0i8tAQrdLhTU.svg?originalFilename=Service+Icon+%285%29.svg&width=41&height=41`,
          },
          title: `Service Icon`,
          type: H.ResponsiveImage,
        },
        vY7wYQZvk: {
          __defaultAssetReference: `data:framer/asset-reference,YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp?originalFilename=Service+Image+%286%29.webp&width=1400&height=800`,
          __vekterDefault: {
            alt: `Service Image`,
            assetReference: `data:framer/asset-reference,YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp?originalFilename=Service+Image+%286%29.webp&width=1400&height=800`,
          },
          description: `Recommended size 533px X 355px`,
          title: `Service Image`,
          type: H.ResponsiveImage,
        },
        uDuV871j4: {
          defaultValue: `Product assembly`,
          displayTextArea: !0,
          title: `Title`,
          type: H.String,
        },
        onuDuV871j4Change: { changes: `uDuV871j4`, type: H.ChangeHandler },
        Nkj13OxLQ: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `Check Mark Arrow`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `List Icon One`,
          type: H.ResponsiveImage,
        },
        X4Xiuc8OV: {
          defaultValue: `Manual & automated assembly`,
          displayTextArea: !0,
          title: `Feature Text One`,
          type: H.String,
        },
        onX4Xiuc8OVChange: { changes: `X4Xiuc8OV`, type: H.ChangeHandler },
        Xugb6TYJY: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `Check Mark Arrow`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `List Icon  Two`,
          type: H.ResponsiveImage,
        },
        ePstuBbZd: {
          defaultValue: `Functional testing protocols`,
          displayTextArea: !0,
          title: `Feature Text Two`,
          type: H.String,
        },
        onePstuBbZdChange: { changes: `ePstuBbZd`, type: H.ChangeHandler },
        EQXskm2c_: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `Check Mark Arrow`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `List Icon Three`,
          type: H.ResponsiveImage,
        },
        LITdA5bQW: {
          defaultValue: `Custom packaging design`,
          displayTextArea: !0,
          title: `Feature Text Three`,
          type: H.String,
        },
        onLITdA5bQWChange: { changes: `LITdA5bQW`, type: H.ChangeHandler },
        WdGXGluV4: {
          __defaultAssetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          __vekterDefault: {
            alt: `Check Mark Arrow`,
            assetReference: `data:framer/asset-reference,nfR4iB5cTWHHV0q6ZNSUKbFw.svg?originalFilename=list+icon.svg&width=15&height=10`,
          },
          title: `List Icon Four`,
          type: H.ResponsiveImage,
        },
        Y3Yl9FCtq: {
          defaultValue: `Supply chain management`,
          displayTextArea: !0,
          title: `Feature Text Four`,
          type: H.String,
        },
        onY3Yl9FCtqChange: { changes: `Y3Yl9FCtq`, type: H.ChangeHandler },
        rb9Hn8unZ: { title: `Link`, type: H.Link },
        JC0Vlg9Ij: { defaultValue: !1, title: `New Tab`, type: H.Boolean },
        onJC0Vlg9IjChange: { changes: `JC0Vlg9Ij`, type: H.ChangeHandler },
      }),
      le(
        wo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...so,
          ...W(tt),
          ...W(pt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (wo.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(Y, {}, t)])) }));
  }))();
}
var Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  Z,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  Q,
  ys,
  bs,
  xs,
  $,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc;
function cc() {
  return (cc = e(() => {
    (y(),
      de(),
      O(),
      u(),
      Le(),
      Ue(),
      cr(),
      Ge(),
      Sr(),
      je(),
      J(),
      Re(),
      Ze(),
      zr(),
      ti(),
      vi(),
      Li(),
      ht(),
      Ca(),
      _t(),
      yt(),
      Va(),
      ao(),
      To(),
      ze(),
      Tt(),
      Dt(),
      kt(),
      st(),
      $e(),
      jt(),
      Ft(),
      dt(),
      zt(),
      rt(),
      Ut(),
      (Eo = N(gt)),
      (Do = P(I)),
      (Oo = P(M)),
      (ko = P(C.div)),
      (Ao = N(G)),
      (jo = N(Ii)),
      (Mo = N(vt)),
      (No = N(Be)),
      (Po = N(ei)),
      (Fo = ue(M)),
      (Io = ue(I)),
      (Lo = N(Ie)),
      (Ro = ue(C.div)),
      (zo = N(Ve)),
      (Bo = N(wo)),
      (Vo = N(Qe)),
      (Ho = ue(L)),
      (Uo = N(bt)),
      (Wo = N(io)),
      (Go = N(Sa)),
      (Ko = N(Ba)),
      (qo = N(qn)),
      (Jo = N(Ke)),
      (Yo = A(ue(C.div))),
      (Xo = N(Y)),
      (Zo = N(_i)),
      (Qo = N(He)),
      ($o = N(Rr)),
      (es = N(We)),
      (ts = {
        ecJfk_H5I: `(max-width: 809.98px)`,
        V9c8RUPbD: `(min-width: 810px) and (max-width: 1199.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
      }),
      (ns = () => typeof document < `u`),
      (rs = []),
      (is = `framer-kYqNX`),
      (as = {
        ecJfk_H5I: `framer-v-gfjczm`,
        V9c8RUPbD: `framer-v-1ewydtq`,
        WQLkyLRf1: `framer-v-72rtr7`,
      }),
      (os = (e, t, n) => (e && t ? `position` : n)),
      (ss = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (cs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ss,
        x: 0,
        y: 0,
      }),
      (ls = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (us = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ds = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: us,
        x: 0,
        y: 0,
      }),
      (fs = { delay: 0.1, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ps = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: fs,
        x: 0,
        y: 0,
      }),
      (ms = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (hs = { delay: 0.15, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (gs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: hs,
        x: 0,
        y: 0,
      }),
      (_s = { delay: 0.2, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (vs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: _s,
        x: 0,
        y: 0,
      }),
      (Q = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (ys = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: fs,
        x: 0,
        y: 40,
      }),
      (bs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ss,
        x: 0,
        y: 40,
      }),
      (xs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: us,
        x: 0,
        y: 40,
      }),
      ($ = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (Ss = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: hs,
        x: 0,
        y: 40,
      }),
      (Cs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: _s,
        x: 0,
        y: 40,
      }),
      (ws = { delay: 0.25, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ts = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ws,
        x: 0,
        y: 40,
      }),
      (Es = { delay: 0.3, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ds = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Es,
        x: 0,
        y: 40,
      }),
      (Os = { delay: 0.35, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ks = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Os,
        x: 0,
        y: 40,
      }),
      (As = { delay: 0.4, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (js = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: As,
        x: 0,
        y: 40,
      }),
      (Ms = (e, t) => `translateX(-50%) ${t}`),
      (Ns = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ps = () => ({
        from: { alias: `X_2yCkqG5`, data: Et, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `X_2yCkqG5`, name: `ZxZNZ93ck`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `Io3xnY3qJ`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `nutGQoQ5u`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `SpyzCQGnz`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `KMuY_LU8S`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `RWhrJayk3`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `X_2yCkqG5`, name: `id`, type: `Identifier` },
        ],
      })),
      (Fs = ({ query: e, pageSize: t, children: n }) => n(Oe(e))),
      (Is = () => ({
        from: { alias: `txKlpmEvx`, data: Et, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `txKlpmEvx`, name: `ZxZNZ93ck`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `Io3xnY3qJ`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `nutGQoQ5u`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `SpyzCQGnz`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `KMuY_LU8S`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `RWhrJayk3`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `txKlpmEvx`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ls = () => ({
        from: { alias: `smOLZonwo`, data: Et, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `smOLZonwo`, name: `ZxZNZ93ck`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `Io3xnY3qJ`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `nutGQoQ5u`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `SpyzCQGnz`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `KMuY_LU8S`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `RWhrJayk3`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `smOLZonwo`, name: `id`, type: `Identifier` },
        ],
      })),
      (Rs = () => ({
        from: { alias: `qBmNJnYDO`, data: Et, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 3 },
        select: [
          { collection: `qBmNJnYDO`, name: `ZxZNZ93ck`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `Io3xnY3qJ`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `nutGQoQ5u`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `SpyzCQGnz`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `KMuY_LU8S`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `RWhrJayk3`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `qBmNJnYDO`, name: `id`, type: `Identifier` },
        ],
      })),
      (zs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Bs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transition: us,
        x: 0,
        y: 40,
      }),
      (Vs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transition: fs,
        x: 0,
        y: 40,
      }),
      (Hs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transition: hs,
        x: 0,
        y: 40,
      }),
      (Us = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transition: _s,
        x: 0,
        y: 40,
      }),
      (Ws = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transition: ws,
        x: 0,
        y: 40,
      }),
      (Gs = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ks = () => ({
        from: { alias: `HjSJ8VMEE`, data: At, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 0 },
        select: [
          { collection: `HjSJ8VMEE`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `okl2KJaEX`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `HjSJ8VMEE`, name: `id`, type: `Identifier` },
        ],
      })),
      (qs = () => ({
        from: { alias: `BdUqzXc_K`, data: At, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `BdUqzXc_K`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `okl2KJaEX`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `BdUqzXc_K`, name: `id`, type: `Identifier` },
        ],
      })),
      (Js = () => ({
        from: { alias: `M5y1Ffhhb`, data: At, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 2 },
        select: [
          { collection: `M5y1Ffhhb`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `okl2KJaEX`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `M5y1Ffhhb`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ys = () => ({
        from: { alias: `jCtiafYTs`, data: At, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        offset: { type: `LiteralValue`, value: 3 },
        select: [
          { collection: `jCtiafYTs`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `okl2KJaEX`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `jCtiafYTs`, name: `id`, type: `Identifier` },
        ],
      })),
      (Xs = () => ({
        from: { alias: `jO6Gg7cEr`, data: At, type: `Collection` },
        limit: { type: `LiteralValue`, value: 4 },
        select: [
          { collection: `jO6Gg7cEr`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `okl2KJaEX`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `jO6Gg7cEr`, name: `id`, type: `Identifier` },
        ],
      })),
      (Zs = { delay: 0.45, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Qs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Zs,
        x: 0,
        y: 40,
      }),
      ($s = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
      (ec = () => ({
        from: { alias: `WT8cChdH7`, data: Ot, type: `Collection` },
        limit: { type: `LiteralValue`, value: 3 },
        select: [
          { collection: `WT8cChdH7`, name: `b0IRHKgVb`, type: `Identifier` },
          { collection: `WT8cChdH7`, name: `CqxXSwKeM`, type: `Identifier` },
          { collection: `WT8cChdH7`, name: `je6JvlZZ8`, type: `Identifier` },
          { collection: `WT8cChdH7`, name: `id`, type: `Identifier` },
        ],
      })),
      (tc = { Desktop: `WQLkyLRf1`, Phone: `ecJfk_H5I`, Tablet: `V9c8RUPbD` }),
      (nc = ({ value: e }) =>
        V()
          ? null
          : /*#__PURE__*/ _(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (rc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tc[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (ic = /*#__PURE__*/ v(function (e, t) {
        let n = f(null),
          r = t ?? n,
          a = ee(),
          { activeLocale: s, setLocale: c } = me(),
          l = ge(),
          { style: u, className: d, layoutId: h, variant: v, ...y } = rc(e),
          b = o(() => Wt({}, s), [s]);
        we(b);
        let [x, te] = ve(v, ts, !1),
          ne = B(is, Pt, mt, ot, Ht, ut, nt, Rt),
          S = m(Se)?.isLayoutTemplate,
          w = !!m(D)?.transition?.layout,
          T = os(S, w);
        De();
        let re = () => !ns() || x !== `ecJfk_H5I`,
          O = () => !ns() || ![`V9c8RUPbD`, `ecJfk_H5I`].includes(x),
          ie = he(`lGZHRSmRF`),
          ae = f(null),
          oe = () => !(ns() && ![`V9c8RUPbD`, `ecJfk_H5I`].includes(x)),
          k = () => !ns() || x !== `V9c8RUPbD`,
          A = () => !ns() || x === `V9c8RUPbD`;
        return (
          _e({}),
          /*#__PURE__*/ _(Se.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: tc,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: as,
            },
            children: /*#__PURE__*/ g(E, {
              id: h ?? a,
              children: [
                /*#__PURE__*/ _(nc, {
                  value: `html body { background: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ g(C.div, {
                  ...y,
                  className: B(ne, `framer-72rtr7`, d),
                  ref: r,
                  style: { ...u },
                  children: [
                    /*#__PURE__*/ g(C.main, {
                      className: `framer-vmlhsw`,
                      "data-framer-name": `Main`,
                      layout: T,
                      children: [
                        /*#__PURE__*/ g(`section`, {
                          className: `framer-1u51rf3`,
                          "data-framer-name": `Hero`,
                          children: [
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-eucpn4`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-carzw6`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    /*#__PURE__*/ g(`div`, {
                                      className: `framer-12cpr2a`,
                                      "data-framer-name": `Left`,
                                      children: [
                                        /*#__PURE__*/ _(R, {
                                          height: 33,
                                          children: /*#__PURE__*/ _(Do, {
                                            animate: cs,
                                            className: `framer-bzotf3-container`,
                                            "data-framer-appear-id": `bzotf3`,
                                            initial: ls,
                                            nodeId: `UUo4YparA`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ _(gt, {
                                              height: `100%`,
                                              id: `UUo4YparA`,
                                              layoutId: `UUo4YparA`,
                                              RX1q43PHo: `Trusted manufacturing partner`,
                                              variant: Z(`hi1tTl8yF`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(Oo, {
                                          __fromCanvasComponent: !0,
                                          animate: ds,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ g(`h1`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                              },
                                              children: [
                                                `From raw `,
                                                /*#__PURE__*/ _(`span`, {
                                                  style: {
                                                    "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                  },
                                                  children: `materials`,
                                                }),
                                                ` to finished products`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-jqhpro`,
                                          "data-framer-appear-id": `jqhpro`,
                                          "data-framer-name": `Title`,
                                          fonts: [`Inter`],
                                          initial: ls,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ g(`div`, {
                                      className: `framer-vn8858`,
                                      "data-framer-name": `Right`,
                                      children: [
                                        /*#__PURE__*/ g(ko, {
                                          animate: ps,
                                          className: `framer-147b85o`,
                                          "data-framer-appear-id": `147b85o`,
                                          "data-framer-name": `Info`,
                                          initial: ms,
                                          optimized: !0,
                                          children: [
                                            /*#__PURE__*/ _(M, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ _(i, {
                                                children: /*#__PURE__*/ _(`p`, {
                                                  className: `framer-styles-preset-15frtqy`,
                                                  "data-styles-preset": `P89o9sRK1`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                  },
                                                  children: `// SINCE - 2005 //`,
                                                }),
                                              }),
                                              className: `framer-1hwx51r`,
                                              "data-framer-name": `Title`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ _(M, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ _(i, {
                                                children: /*#__PURE__*/ _(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                                                  },
                                                  children: `We deliver end-to-end manufacturing solutions from machining and fabrication to molding and assembly engineered for quality, efficiency, and on-time delivery.`,
                                                }),
                                              }),
                                              className: `framer-jc53wk`,
                                              "data-framer-name": `Description`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ _(F, {
                                          links: [
                                            {
                                              href: { webPageId: `cw4t799ht` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `cw4t799ht` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `cw4t799ht` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            /*#__PURE__*/ _(R, {
                                              height: 52,
                                              children: /*#__PURE__*/ _(Do, {
                                                animate: gs,
                                                className: `framer-1p4ykg8-container`,
                                                "data-framer-appear-id": `1p4ykg8`,
                                                initial: ms,
                                                nodeId: `uRm91_nKp`,
                                                optimized: !0,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: {
                                                      gr8i9ifqK: e[2],
                                                      variant: Z(`oP3WJd3dc`),
                                                    },
                                                    V9c8RUPbD: {
                                                      gr8i9ifqK: e[1],
                                                      variant: Z(`oP3WJd3dc`),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ _(G, {
                                                    gr8i9ifqK: e[0],
                                                    height: `100%`,
                                                    id: `uRm91_nKp`,
                                                    layoutId: `uRm91_nKp`,
                                                    LkRCOsI08: `Explore our capabilities`,
                                                    variant: Z(`J5IGQfKo3`),
                                                    width: `100%`,
                                                    xgHJht2Sv: !1,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ g(ko, {
                                  animate: vs,
                                  className: `framer-1ilib8f`,
                                  "data-framer-appear-id": `1ilib8f`,
                                  "data-framer-name": `Bottom`,
                                  initial: ls,
                                  optimized: !0,
                                  children: [
                                    /*#__PURE__*/ _(M, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ _(i, {
                                        children: /*#__PURE__*/ _(`p`, {
                                          className: `framer-styles-preset-15frtqy`,
                                          "data-styles-preset": `P89o9sRK1`,
                                          style: {
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: `Based in: Los Angeles, USA`,
                                        }),
                                      }),
                                      className: `framer-1dhe386`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ _(F, {
                                      links: [
                                        {
                                          href: { hash: `:lGZHRSmRF`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:lGZHRSmRF`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:lGZHRSmRF`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ _(R, {
                                          height: 17,
                                          children: /*#__PURE__*/ _(I, {
                                            className: `framer-1jyqp51-container`,
                                            nodeId: `Ginra3RbY`,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ _(U, {
                                              breakpoint: x,
                                              overrides: {
                                                ecJfk_H5I: {
                                                  nD6jRCaV0: e[2],
                                                  variant: Z(`gnmI31P7W`),
                                                },
                                                V9c8RUPbD: {
                                                  nD6jRCaV0: e[1],
                                                  variant: Z(`gnmI31P7W`),
                                                },
                                              },
                                              children: /*#__PURE__*/ _(Ii, {
                                                dVdDIQ4OJ: `Scroll down`,
                                                height: `100%`,
                                                id: `Ginra3RbY`,
                                                layoutId: `Ginra3RbY`,
                                                nD6jRCaV0: e[0],
                                                variant: Z(`KqtsDX8py`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ _(M, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ _(i, {
                                        children: /*#__PURE__*/ _(`p`, {
                                          className: `framer-styles-preset-15frtqy`,
                                          "data-styles-preset": `P89o9sRK1`,
                                          style: {
                                            "--framer-text-alignment": `right`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: `21.0278° N, 105.8342° E`,
                                        }),
                                      }),
                                      className: `framer-5kwgms`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-1cbnq60`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-103bnyl`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-yimy06`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-48fhju`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    re() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-pnr1hz hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-139t8uu hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-1e55581 hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ _(R, {
                                  width: l?.width || `100vw`,
                                  children: /*#__PURE__*/ _(I, {
                                    className: `framer-12sz93g-container`,
                                    nodeId: `oSMFbLqwp`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ _(vt, {
                                      height: `100%`,
                                      id: `oSMFbLqwp`,
                                      layoutId: `oSMFbLqwp`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ g(`div`, {
                          className: `framer-pstkpi`,
                          "data-framer-name": `Video`,
                          children: [
                            /*#__PURE__*/ _(U, {
                              breakpoint: x,
                              overrides: {
                                ecJfk_H5I: { height: 610.8576 },
                                V9c8RUPbD: { height: 711.3276 },
                              },
                              children: /*#__PURE__*/ _(R, {
                                height: 1032.8316,
                                width: l?.width || `100vw`,
                                children: /*#__PURE__*/ _(I, {
                                  className: `framer-1fuhlt9-container`,
                                  nodeId: `u3ITN8LTL`,
                                  scopeId: `augiA20Il`,
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { variant: Z(`b_Xr33rnP`) } },
                                    children: /*#__PURE__*/ _(Be, {
                                      height: `100%`,
                                      id: `u3ITN8LTL`,
                                      layoutId: `u3ITN8LTL`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`GWgO0_eD_`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `framer-1i1fdp5`,
                              "data-framer-name": `Container`,
                              children: /*#__PURE__*/ g(`div`, {
                                className: `framer-1p7mgi0`,
                                "data-framer-name": `Content`,
                                children: [
                                  /*#__PURE__*/ _(R, {
                                    height: 200,
                                    width: `min(min(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 500px), 250px)`,
                                    children: /*#__PURE__*/ _(I, {
                                      className: `framer-3kgzg6-container`,
                                      nodeId: `ZQcbO2W_Z`,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ _(ei, {
                                        height: `100%`,
                                        id: `ZQcbO2W_Z`,
                                        layoutId: `ZQcbO2W_Z`,
                                        style: { maxWidth: `100%`, width: `100%` },
                                        VEVmW5Gd_: `Founder & CEO`,
                                        width: `100%`,
                                        zjkgRPS9n: `Michael R. Bennett`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(Fo, {
                                    __framer__animate: { transition: fs },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: ys,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: /*#__PURE__*/ _(i, {
                                      children: /*#__PURE__*/ _(`p`, {
                                        className: `framer-styles-preset-gf9yid`,
                                        "data-styles-preset": `XorWCRDBg`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                        },
                                        children: `Great manufacturing isn't just about precision it's about vision, commitment, and the relentless pursuit of excellence.`,
                                      }),
                                    }),
                                    className: `framer-1w3hnhg`,
                                    "data-framer-name": `Description`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ g(`section`, {
                          className: `framer-1ri1odl`,
                          "data-framer-name": `About`,
                          id: ie,
                          ref: ae,
                          children: [
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-1j1gpev`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-1pexz6o`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    /*#__PURE__*/ g(`div`, {
                                      className: `framer-1hnd7cz`,
                                      "data-framer-name": `Left`,
                                      children: [
                                        /*#__PURE__*/ _(R, {
                                          height: 33,
                                          children: /*#__PURE__*/ _(Io, {
                                            __framer__animate: { transition: ss },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: bs,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-segap6-container`,
                                            nodeId: `jvvoRek0t`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ _(gt, {
                                              height: `100%`,
                                              id: `jvvoRek0t`,
                                              layoutId: `jvvoRek0t`,
                                              RX1q43PHo: `Who we are`,
                                              variant: Z(`hi1tTl8yF`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ g(`div`, {
                                          className: `framer-btkbjl`,
                                          "data-framer-name": `Image/Text`,
                                          children: [
                                            /*#__PURE__*/ g(Ro, {
                                              __framer__animate: { transition: us },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: xs,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1t88ijs`,
                                              "data-framer-name": `Image`,
                                              children: [
                                                /*#__PURE__*/ _(R, {
                                                  height: 50,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-fu5vmo-container`,
                                                    nodeId: `CPTeQGEgx`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(Ie, {
                                                      height: `100%`,
                                                      id: `CPTeQGEgx`,
                                                      layoutId: `CPTeQGEgx`,
                                                      N1uOc8q4J: `10+`,
                                                      variant: Z(`Yh1RI_Dm8`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(R, {
                                                  height: 50,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-czg48l-container`,
                                                    nodeId: `VlNXEFNex`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(Ie, {
                                                      aEbvs76M6: $(
                                                        {
                                                          pixelHeight: 121,
                                                          pixelWidth: 120,
                                                          src: `../../assets/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png`,
                                                        },
                                                        `Avatar`
                                                      ),
                                                      height: `100%`,
                                                      id: `VlNXEFNex`,
                                                      layoutId: `VlNXEFNex`,
                                                      N1uOc8q4J: `10+`,
                                                      variant: Z(`Yh1RI_Dm8`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(R, {
                                                  height: 50,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-s88jy0-container`,
                                                    nodeId: `vIPYhgMtb`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(Ie, {
                                                      aEbvs76M6: $(
                                                        {
                                                          pixelHeight: 121,
                                                          pixelWidth: 120,
                                                          src: `../../assets/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png`,
                                                        },
                                                        `Avatar`
                                                      ),
                                                      height: `100%`,
                                                      id: `vIPYhgMtb`,
                                                      layoutId: `vIPYhgMtb`,
                                                      N1uOc8q4J: `10+`,
                                                      variant: Z(`Yh1RI_Dm8`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(R, {
                                                  height: 50,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-zcsros-container`,
                                                    nodeId: `GhJEe_yOQ`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(Ie, {
                                                      aEbvs76M6: $(
                                                        {
                                                          pixelHeight: 121,
                                                          pixelWidth: 120,
                                                          src: `../../assets/images/crOykN7l4AlMK9acNXCVRzJmcg.png`,
                                                        },
                                                        `Avatar`
                                                      ),
                                                      height: `100%`,
                                                      id: `GhJEe_yOQ`,
                                                      layoutId: `GhJEe_yOQ`,
                                                      N1uOc8q4J: `10+`,
                                                      variant: Z(`Yh1RI_Dm8`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                /*#__PURE__*/ _(R, {
                                                  height: 50,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-1l5x3l0-container`,
                                                    nodeId: `BHdN8xDd3`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(Ie, {
                                                      aEbvs76M6: $(
                                                        {
                                                          pixelHeight: 121,
                                                          pixelWidth: 120,
                                                          src: `../../assets/images/crOykN7l4AlMK9acNXCVRzJmcg.png`,
                                                        },
                                                        `Avatar`
                                                      ),
                                                      height: `100%`,
                                                      id: `BHdN8xDd3`,
                                                      layoutId: `BHdN8xDd3`,
                                                      N1uOc8q4J: `10+`,
                                                      variant: Z(`VJjIj4IuP`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ _(Fo, {
                                              __framer__animate: { transition: fs },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: ys,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __fromCanvasComponent: !0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              children: /*#__PURE__*/ _(i, {
                                                children: /*#__PURE__*/ _(`p`, {
                                                  className: `framer-styles-preset-15frtqy`,
                                                  "data-styles-preset": `P89o9sRK1`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                                  },
                                                  children: `Team of passionate professionals`,
                                                }),
                                              }),
                                              className: `framer-pxdb72`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ g(`div`, {
                                      className: `framer-n6mlh1`,
                                      "data-framer-name": `Right`,
                                      children: [
                                        /*#__PURE__*/ _(Fo, {
                                          __framer__animate: { transition: hs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: Ss,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ g(`h2`, {
                                              className: `framer-styles-preset-2r53jr`,
                                              "data-styles-preset": `v03SSkN8P`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                              },
                                              children: [
                                                `Driven by technology, backed by experience, focused on `,
                                                /*#__PURE__*/ _(`span`, {
                                                  style: {
                                                    "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                  },
                                                  children: `manufacturing`,
                                                }),
                                                ` excellence`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-yg964b`,
                                          "data-framer-name": `Title`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ _(Fo, {
                                          __framer__animate: { transition: _s },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: Cs,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ _(`p`, {
                                              className: `framer-styles-preset-gf9yid`,
                                              "data-styles-preset": `XorWCRDBg`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                                              },
                                              children: `Backed by advanced technology, skilled craftsmanship, and a commitment to quality, we help businesses bring their ideas to life with confidence and speed. Whether it’s prototyping or full-scale production, we’re your trusted partner every step of the way.`,
                                            }),
                                          }),
                                          className: `framer-1dpooo4`,
                                          "data-framer-name": `Description`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(Ro, {
                                          __framer__animate: { transition: ws },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: Ts,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1ary702`,
                                          "data-framer-name": `Button`,
                                          children: [
                                            /*#__PURE__*/ _(F, {
                                              links: [
                                                {
                                                  href: { webPageId: `L_B7D5dU4` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `L_B7D5dU4` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `L_B7D5dU4` },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                /*#__PURE__*/ _(R, {
                                                  height: 52,
                                                  children: /*#__PURE__*/ _(I, {
                                                    className: `framer-8y5fwl-container`,
                                                    nodeId: `OcBvls1GH`,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(U, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        ecJfk_H5I: {
                                                          gr8i9ifqK: e[2],
                                                          variant: Z(`oP3WJd3dc`),
                                                        },
                                                        V9c8RUPbD: {
                                                          gr8i9ifqK: e[1],
                                                          variant: Z(`oP3WJd3dc`),
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ _(G, {
                                                        gr8i9ifqK: e[0],
                                                        height: `100%`,
                                                        id: `OcBvls1GH`,
                                                        layoutId: `OcBvls1GH`,
                                                        LkRCOsI08: `Learn more about us`,
                                                        variant: Z(`J5IGQfKo3`),
                                                        width: `100%`,
                                                        xgHJht2Sv: !1,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                            /*#__PURE__*/ _(R, {
                                              children: /*#__PURE__*/ _(I, {
                                                className: `framer-10hpy5y-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `j3CvTIEae`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: {
                                                      fontControl: {
                                                        fontFamily: `"Geist", "Geist Placeholder", sans-serif`,
                                                        fontSize: `16px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1.2em`,
                                                      },
                                                      hoverOptions: void 0,
                                                      iconOptions: {
                                                        alignment: `end`,
                                                        color: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                        image: $(
                                                          {
                                                            pixelHeight: 40,
                                                            pixelWidth: 40,
                                                            src: `../../assets/images/ss0bmyns6jeXRaMshGzNYH68.svg`,
                                                          },
                                                          `Icon`
                                                        ),
                                                        size: 16,
                                                        type: `Custom`,
                                                      },
                                                    },
                                                    V9c8RUPbD: { hoverOptions: void 0 },
                                                  },
                                                  children: /*#__PURE__*/ _(Ve, {
                                                    fontControl: {
                                                      fontFamily: `"Geist", "Geist Placeholder", sans-serif`,
                                                      fontSize: `18px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 500,
                                                      letterSpacing: `0em`,
                                                      lineHeight: `1.2em`,
                                                    },
                                                    height: `100%`,
                                                    hoverOptions: {
                                                      scale: 1.05,
                                                      transition: {
                                                        delay: 0,
                                                        duration: 0.4,
                                                        ease: [0.44, 0, 0.56, 1],
                                                        type: `tween`,
                                                      },
                                                    },
                                                    iconOptions: {
                                                      alignment: `end`,
                                                      color: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                      image: $(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 40,
                                                          src: `../../assets/images/ss0bmyns6jeXRaMshGzNYH68.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                      size: 18,
                                                      type: `Custom`,
                                                    },
                                                    id: `j3CvTIEae`,
                                                    layoutId: `j3CvTIEae`,
                                                    srcFile: `https://framerusercontent.com/assets/v9AJ9QDAVxlfeZvrmT5L6X1m3I.pdf`,
                                                    srcType: `Upload`,
                                                    srcURL: ``,
                                                    styleOptions: {
                                                      backgroundColor: `var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0))`,
                                                      borderRadius: 0,
                                                      color: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                      gap: 8,
                                                      padding: 0,
                                                      paddingBottom: 0,
                                                      paddingLeft: 0,
                                                      paddingPerSide: !1,
                                                      paddingRight: 0,
                                                      paddingTop: 0,
                                                    },
                                                    text: `Download brochure`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-1qu3668`,
                                  "data-framer-name": `Bottom`,
                                  children: [
                                    /*#__PURE__*/ g(Ro, {
                                      __framer__animate: { transition: Es },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: Ds,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-mx9euk`,
                                      "data-border": !0,
                                      "data-framer-name": `Step 1`,
                                      children: [
                                        /*#__PURE__*/ _(L, {
                                          background: {
                                            alt: `About Logo`,
                                            fit: `fit`,
                                            pixelHeight: 23,
                                            pixelWidth: 182,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `94px`,
                                            src: `../../assets/images/GhFAf9Nzk8NxLNAoAlvgFnivlg.svg`,
                                          },
                                          className: `framer-g77xq8`,
                                          fitImageDimension: `height`,
                                        }),
                                        /*#__PURE__*/ _(M, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ g(`h2`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: [
                                                `100`,
                                                /*#__PURE__*/ _(`span`, {
                                                  style: {
                                                    "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                  },
                                                  children: `+`,
                                                }),
                                              ],
                                            }),
                                          }),
                                          className: `framer-nh6ocy`,
                                          "data-framer-name": `Counter`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ _(M, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ _(`p`, {
                                              className: `framer-styles-preset-ecqg04`,
                                              "data-styles-preset": `CkbU37qav`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                              },
                                              children: `Trusted by businesses across multiple manufacturing industries worldwide`,
                                            }),
                                          }),
                                          className: `framer-1mgk4br`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ g(`div`, {
                                          className: `framer-nhw6iw`,
                                          "data-framer-name": `Info`,
                                          children: [
                                            /*#__PURE__*/ g(`div`, {
                                              className: `framer-13sht8f`,
                                              "data-framer-name": `Counter`,
                                              children: [
                                                /*#__PURE__*/ _(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ _(i, {
                                                    children: /*#__PURE__*/ _(`h2`, {
                                                      className: `framer-styles-preset-1f8or04`,
                                                      "data-styles-preset": `GzMbxD0G0`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                      },
                                                      children: `4.9`,
                                                    }),
                                                  }),
                                                  className: `framer-wjd73x`,
                                                  "data-framer-name": `Number`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ _(`div`, {
                                                  className: `framer-cp4ey8`,
                                                  "data-framer-name": `Counter`,
                                                  children: /*#__PURE__*/ _(M, {
                                                    __fromCanvasComponent: !0,
                                                    children: /*#__PURE__*/ _(i, {
                                                      children: /*#__PURE__*/ _(`p`, {
                                                        className: `framer-styles-preset-ecqg04`,
                                                        "data-styles-preset": `CkbU37qav`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                        },
                                                        children: `/5.0`,
                                                      }),
                                                    }),
                                                    className: `framer-60n2uu`,
                                                    "data-framer-name": `Number`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ _(`div`, {
                                              className: `framer-hotfb5`,
                                              "data-framer-name": `Review`,
                                              children: /*#__PURE__*/ _(L, {
                                                background: {
                                                  alt: `Review Star`,
                                                  fit: `fit`,
                                                  pixelHeight: 14,
                                                  pixelWidth: 95,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `94px`,
                                                  src: `../../assets/images/vLIB1zDP4bI0m0N2PXLiIxcw5Y.svg`,
                                                },
                                                className: `framer-163ddmt`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(Ro, {
                                      __framer__animate: { transition: Os },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: ks,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1ubr94r`,
                                      "data-framer-name": `Step 2`,
                                      children: /*#__PURE__*/ _(U, {
                                        breakpoint: x,
                                        overrides: {
                                          ecJfk_H5I: {
                                            background: {
                                              alt: `About Step Image`,
                                              fit: `fill`,
                                              pixelHeight: 500,
                                              pixelWidth: 500,
                                              sizes: `300px`,
                                              src: `../../assets/images/4hIoQd7fUjgL9EiEVuQro0eTrfc.webp`,
                                            },
                                          },
                                          V9c8RUPbD: {
                                            background: {
                                              alt: `About Step Image`,
                                              fit: `fill`,
                                              pixelHeight: 500,
                                              pixelWidth: 500,
                                              sizes: `350px`,
                                              src: `../../assets/images/4hIoQd7fUjgL9EiEVuQro0eTrfc.webp`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ _(L, {
                                          background: {
                                            alt: `About Step Image`,
                                            fit: `fill`,
                                            pixelHeight: 500,
                                            pixelWidth: 500,
                                            sizes: `430px`,
                                            src: `../../assets/images/4hIoQd7fUjgL9EiEVuQro0eTrfc.webp`,
                                          },
                                          className: `framer-41hx6f`,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ g(Ro, {
                                      __framer__animate: { transition: As },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: js,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1luk9d5`,
                                      "data-border": !0,
                                      "data-framer-name": `Step 3`,
                                      children: [
                                        /*#__PURE__*/ _(M, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ _(`p`, {
                                              className: `framer-styles-preset-gf9yid`,
                                              "data-styles-preset": `XorWCRDBg`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                              },
                                              children: `// 2005-2K26 //`,
                                            }),
                                          }),
                                          className: `framer-bpatlz`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ _(M, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ _(`h2`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                              },
                                              children: `20+`,
                                            }),
                                          }),
                                          className: `framer-1vpx60d`,
                                          "data-framer-name": `Counter`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ _(M, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ _(i, {
                                            children: /*#__PURE__*/ _(`p`, {
                                              className: `framer-styles-preset-ecqg04`,
                                              "data-styles-preset": `CkbU37qav`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                              },
                                              children: `Delivering consistent manufacturing excellence since day one.`,
                                            }),
                                          }),
                                          className: `framer-ffo7yh`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              background: {
                                                alt: `About Image`,
                                                fit: `fit`,
                                                pixelHeight: 164,
                                                pixelWidth: 124,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `49.1463px`,
                                                src: `../../assets/images/7deJkILirgC0DVZq9WujKIpwKY.png`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ _(L, {
                                            background: {
                                              alt: `About Image`,
                                              fit: `fit`,
                                              pixelHeight: 164,
                                              pixelWidth: 124,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `68.0488px`,
                                              src: `../../assets/images/7deJkILirgC0DVZq9WujKIpwKY.png`,
                                            },
                                            className: `framer-1rk9172`,
                                            fitImageDimension: `width`,
                                            transformTemplate: Ms,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-17t0rn4`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-1neivhm`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1ho1l7`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-s13ie4`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    re() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-16ptz1e hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-1fyqe6m hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-5q1ve8 hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ _(R, {
                                  width: l?.width || `100vw`,
                                  children: /*#__PURE__*/ _(I, {
                                    className: `framer-1j75b1i-container`,
                                    nodeId: `KXormNfZB`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ _(vt, {
                                      height: `100%`,
                                      id: `KXormNfZB`,
                                      layoutId: `KXormNfZB`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `framer-1488cms`,
                          "data-framer-name": `Service`,
                          children: /*#__PURE__*/ g(`div`, {
                            className: `framer-mfke0b`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-1r2rk8u`,
                                "data-framer-name": `Top`,
                                children: [
                                  /*#__PURE__*/ g(Ro, {
                                    __framer__animate: { transition: us },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: xs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-knlv5f`,
                                    "data-framer-name": `Info`,
                                    children: [
                                      /*#__PURE__*/ _(R, {
                                        height: 33,
                                        children: /*#__PURE__*/ _(I, {
                                          className: `framer-2nlw3i-container`,
                                          nodeId: `aSHDTqOtk`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ _(gt, {
                                            height: `100%`,
                                            id: `aSHDTqOtk`,
                                            layoutId: `aSHDTqOtk`,
                                            RX1q43PHo: `What we do`,
                                            variant: Z(`R_XotlKFx`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ _(M, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ _(i, {
                                          children: /*#__PURE__*/ g(`h2`, {
                                            className: `framer-styles-preset-2r53jr`,
                                            "data-styles-preset": `v03SSkN8P`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                            },
                                            children: [
                                              `Scalable `,
                                              /*#__PURE__*/ _(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                },
                                                children: `capabilities`,
                                              }),
                                              ` for every challenge`,
                                            ],
                                          }),
                                        }),
                                        className: `framer-1ewxh3m`,
                                        "data-framer-name": `Title`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-1gwb5ga`,
                                    "data-framer-name": `Button`,
                                    children: /*#__PURE__*/ _(F, {
                                      links: [
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ _(R, {
                                          height: 52,
                                          children: /*#__PURE__*/ _(Io, {
                                            __framer__animate: { transition: fs },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: ys,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1ok8beb-container`,
                                            nodeId: `rxYzhrJqj`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ _(U, {
                                              breakpoint: x,
                                              overrides: {
                                                ecJfk_H5I: {
                                                  gr8i9ifqK: e[2],
                                                  variant: Z(`oP3WJd3dc`),
                                                },
                                                V9c8RUPbD: {
                                                  gr8i9ifqK: e[1],
                                                  variant: Z(`oP3WJd3dc`),
                                                },
                                              },
                                              children: /*#__PURE__*/ _(G, {
                                                gr8i9ifqK: e[0],
                                                height: `100%`,
                                                id: `rxYzhrJqj`,
                                                layoutId: `rxYzhrJqj`,
                                                LkRCOsI08: `Explore all capabilities`,
                                                variant: Z(`J5IGQfKo3`),
                                                width: `100%`,
                                                xgHJht2Sv: !1,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ g(Ro, {
                                __framer__animate: { transition: hs },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__exit: Ss,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-19uzsdt`,
                                "data-framer-name": `Content`,
                                children: [
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-157djwm`,
                                    "data-framer-name": `Service`,
                                    children: /*#__PURE__*/ _(xe, {
                                      children: /*#__PURE__*/ _(Fs, {
                                        query: Ps(),
                                        children: (e, t, n) =>
                                          /*#__PURE__*/ _(p, {
                                            children: e?.map(
                                              (
                                                {
                                                  IAu1rJT3C: e,
                                                  id: t,
                                                  Io3xnY3qJ: n,
                                                  KMuY_LU8S: r,
                                                  NPodIY0by: i,
                                                  nutGQoQ5u: a,
                                                  RWhrJayk3: o,
                                                  SpyzCQGnz: s,
                                                  ZxZNZ93ck: c,
                                                },
                                                u
                                              ) => (
                                                (e ??= ``),
                                                (a ??= ``),
                                                (s ??= ``),
                                                (r ??= ``),
                                                (o ??= ``),
                                                (i ??= ``),
                                                /*#__PURE__*/ _(
                                                  E,
                                                  {
                                                    id: `X_2yCkqG5-${t}`,
                                                    children: /*#__PURE__*/ _(Ce.Provider, {
                                                      value: { NPodIY0by: i },
                                                      children: /*#__PURE__*/ _(`div`, {
                                                        className: `framer-hy24f`,
                                                        "data-framer-name": `Service`,
                                                        children: /*#__PURE__*/ _(F, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            /*#__PURE__*/ _(U, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                ecJfk_H5I: {
                                                                  width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 1px)`,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ _(R, {
                                                                height: 253,
                                                                width: `max(min(${l?.width || `100vw`}, 1880px) - 60px, 1px)`,
                                                                children: /*#__PURE__*/ _(I, {
                                                                  className: `framer-1vvijkq-container`,
                                                                  nodeId: `xMcBRGqNj`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: /*#__PURE__*/ _(U, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      ecJfk_H5I: {
                                                                        rb9Hn8unZ: t[2],
                                                                        variant: Z(`mrTU5HeeU`),
                                                                      },
                                                                      V9c8RUPbD: {
                                                                        rb9Hn8unZ: t[1],
                                                                        variant: Z(`C2umEqTRx`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ _(wo, {
                                                                      dkVPAP1AU: Ns(c),
                                                                      ePstuBbZd: s,
                                                                      height: `100%`,
                                                                      id: `xMcBRGqNj`,
                                                                      JC0Vlg9Ij: !1,
                                                                      layoutId: `xMcBRGqNj`,
                                                                      LITdA5bQW: r,
                                                                      rb9Hn8unZ: t[0],
                                                                      style: { width: `100%` },
                                                                      uDuV871j4: e,
                                                                      variant: Z(`f_NyN_jsX`),
                                                                      vY7wYQZvk: Ns(n),
                                                                      width: `100%`,
                                                                      X4Xiuc8OV: a,
                                                                      Y3Yl9FCtq: o,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-1eae6fj`,
                                    "data-framer-name": `Service`,
                                    children: /*#__PURE__*/ _(xe, {
                                      children: /*#__PURE__*/ _(Fs, {
                                        query: Is(),
                                        children: (e, t, n) =>
                                          /*#__PURE__*/ _(p, {
                                            children: e?.map(
                                              (
                                                {
                                                  IAu1rJT3C: e,
                                                  id: t,
                                                  Io3xnY3qJ: n,
                                                  KMuY_LU8S: r,
                                                  NPodIY0by: i,
                                                  nutGQoQ5u: a,
                                                  RWhrJayk3: o,
                                                  SpyzCQGnz: s,
                                                  ZxZNZ93ck: c,
                                                },
                                                u
                                              ) => (
                                                (e ??= ``),
                                                (a ??= ``),
                                                (s ??= ``),
                                                (r ??= ``),
                                                (o ??= ``),
                                                (i ??= ``),
                                                /*#__PURE__*/ _(
                                                  E,
                                                  {
                                                    id: `txKlpmEvx-${t}`,
                                                    children: /*#__PURE__*/ _(Ce.Provider, {
                                                      value: { NPodIY0by: i },
                                                      children: /*#__PURE__*/ _(`div`, {
                                                        className: `framer-101wqtz`,
                                                        "data-framer-name": `Service`,
                                                        children: /*#__PURE__*/ _(F, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            /*#__PURE__*/ _(U, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                ecJfk_H5I: {
                                                                  width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 1px)`,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ _(R, {
                                                                height: 253,
                                                                width: `max(min(${l?.width || `100vw`}, 1880px) - 60px, 1px)`,
                                                                children: /*#__PURE__*/ _(I, {
                                                                  className: `framer-fjrvse-container`,
                                                                  nodeId: `boHD8wj_B`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: /*#__PURE__*/ _(U, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      ecJfk_H5I: {
                                                                        rb9Hn8unZ: t[2],
                                                                        variant: Z(`mrTU5HeeU`),
                                                                      },
                                                                      V9c8RUPbD: {
                                                                        rb9Hn8unZ: t[1],
                                                                        variant: Z(`C2umEqTRx`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ _(wo, {
                                                                      dkVPAP1AU: Ns(c),
                                                                      ePstuBbZd: s,
                                                                      height: `100%`,
                                                                      id: `boHD8wj_B`,
                                                                      JC0Vlg9Ij: !1,
                                                                      layoutId: `boHD8wj_B`,
                                                                      LITdA5bQW: r,
                                                                      rb9Hn8unZ: t[0],
                                                                      style: { width: `100%` },
                                                                      uDuV871j4: e,
                                                                      variant: Z(`f_NyN_jsX`),
                                                                      vY7wYQZvk: Ns(n),
                                                                      width: `100%`,
                                                                      X4Xiuc8OV: a,
                                                                      Y3Yl9FCtq: o,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-1x67vrh`,
                                    "data-framer-name": `Service`,
                                    children: /*#__PURE__*/ _(xe, {
                                      children: /*#__PURE__*/ _(Fs, {
                                        query: Ls(),
                                        children: (e, t, n) =>
                                          /*#__PURE__*/ _(p, {
                                            children: e?.map(
                                              (
                                                {
                                                  IAu1rJT3C: e,
                                                  id: t,
                                                  Io3xnY3qJ: n,
                                                  KMuY_LU8S: r,
                                                  NPodIY0by: i,
                                                  nutGQoQ5u: a,
                                                  RWhrJayk3: o,
                                                  SpyzCQGnz: s,
                                                  ZxZNZ93ck: c,
                                                },
                                                u
                                              ) => (
                                                (e ??= ``),
                                                (a ??= ``),
                                                (s ??= ``),
                                                (r ??= ``),
                                                (o ??= ``),
                                                (i ??= ``),
                                                /*#__PURE__*/ _(
                                                  E,
                                                  {
                                                    id: `smOLZonwo-${t}`,
                                                    children: /*#__PURE__*/ _(Ce.Provider, {
                                                      value: { NPodIY0by: i },
                                                      children: /*#__PURE__*/ _(`div`, {
                                                        className: `framer-1l8k3f5`,
                                                        "data-framer-name": `Service`,
                                                        children: /*#__PURE__*/ _(F, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            /*#__PURE__*/ _(U, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                ecJfk_H5I: {
                                                                  width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 1px)`,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ _(R, {
                                                                height: 253,
                                                                width: `max(min(${l?.width || `100vw`}, 1880px) - 60px, 1px)`,
                                                                children: /*#__PURE__*/ _(I, {
                                                                  className: `framer-1mlf0zu-container`,
                                                                  nodeId: `gAfu2DYyU`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: /*#__PURE__*/ _(U, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      ecJfk_H5I: {
                                                                        rb9Hn8unZ: t[2],
                                                                        variant: Z(`mrTU5HeeU`),
                                                                      },
                                                                      V9c8RUPbD: {
                                                                        rb9Hn8unZ: t[1],
                                                                        variant: Z(`C2umEqTRx`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ _(wo, {
                                                                      dkVPAP1AU: Ns(c),
                                                                      ePstuBbZd: s,
                                                                      height: `100%`,
                                                                      id: `gAfu2DYyU`,
                                                                      JC0Vlg9Ij: !1,
                                                                      layoutId: `gAfu2DYyU`,
                                                                      LITdA5bQW: r,
                                                                      rb9Hn8unZ: t[0],
                                                                      style: { width: `100%` },
                                                                      uDuV871j4: e,
                                                                      variant: Z(`f_NyN_jsX`),
                                                                      vY7wYQZvk: Ns(n),
                                                                      width: `100%`,
                                                                      X4Xiuc8OV: a,
                                                                      Y3Yl9FCtq: o,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-btjull`,
                                    "data-framer-name": `Service`,
                                    children: /*#__PURE__*/ _(xe, {
                                      children: /*#__PURE__*/ _(Fs, {
                                        query: Rs(),
                                        children: (e, t, n) =>
                                          /*#__PURE__*/ _(p, {
                                            children: e?.map(
                                              (
                                                {
                                                  IAu1rJT3C: e,
                                                  id: t,
                                                  Io3xnY3qJ: n,
                                                  KMuY_LU8S: r,
                                                  NPodIY0by: i,
                                                  nutGQoQ5u: a,
                                                  RWhrJayk3: o,
                                                  SpyzCQGnz: s,
                                                  ZxZNZ93ck: c,
                                                },
                                                u
                                              ) => (
                                                (e ??= ``),
                                                (a ??= ``),
                                                (s ??= ``),
                                                (r ??= ``),
                                                (o ??= ``),
                                                (i ??= ``),
                                                /*#__PURE__*/ _(
                                                  E,
                                                  {
                                                    id: `qBmNJnYDO-${t}`,
                                                    children: /*#__PURE__*/ _(Ce.Provider, {
                                                      value: { NPodIY0by: i },
                                                      children: /*#__PURE__*/ _(`div`, {
                                                        className: `framer-ky45eq`,
                                                        "data-framer-name": `Service`,
                                                        children: /*#__PURE__*/ _(F, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: i },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            /*#__PURE__*/ _(U, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                ecJfk_H5I: {
                                                                  width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 1px)`,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ _(R, {
                                                                height: 253,
                                                                width: `max(min(${l?.width || `100vw`}, 1880px) - 60px, 1px)`,
                                                                children: /*#__PURE__*/ _(I, {
                                                                  className: `framer-2qicb4-container`,
                                                                  nodeId: `ED1zVGVQY`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: /*#__PURE__*/ _(U, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      ecJfk_H5I: {
                                                                        rb9Hn8unZ: t[2],
                                                                        variant: Z(`mrTU5HeeU`),
                                                                      },
                                                                      V9c8RUPbD: {
                                                                        rb9Hn8unZ: t[1],
                                                                        variant: Z(`C2umEqTRx`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ _(wo, {
                                                                      dkVPAP1AU: Ns(c),
                                                                      ePstuBbZd: s,
                                                                      height: `100%`,
                                                                      id: `ED1zVGVQY`,
                                                                      JC0Vlg9Ij: !1,
                                                                      layoutId: `ED1zVGVQY`,
                                                                      LITdA5bQW: r,
                                                                      rb9Hn8unZ: t[0],
                                                                      style: { width: `100%` },
                                                                      uDuV871j4: e,
                                                                      variant: Z(`f_NyN_jsX`),
                                                                      vY7wYQZvk: Ns(n),
                                                                      width: `100%`,
                                                                      X4Xiuc8OV: a,
                                                                      Y3Yl9FCtq: o,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  O() &&
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1ftznop hidden-1ewydtq hidden-gfjczm`,
                                      "data-framer-name": `Empty Space`,
                                    }),
                                ],
                              }),
                              /*#__PURE__*/ _(F, {
                                links: [
                                  {
                                    href: { webPageId: `UUF_p9mVZ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UUF_p9mVZ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UUF_p9mVZ` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: {
                                      ecJfk_H5I: {
                                        width: `calc(min(${l?.width || `100vw`}, 1880px) - 32px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 196,
                                      width: `calc(min(${l?.width || `100vw`}, 1880px) - 60px)`,
                                      children: /*#__PURE__*/ _(Io, {
                                        __framer__animate: { transition: _s },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: Cs,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-mrdxho-container`,
                                        nodeId: `YkSkEqLlP`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: { variant: Z(`fMopB7F65`), Y9FG_7OXx: e[2] },
                                            V9c8RUPbD: { variant: Z(`SDRL6ENgf`), Y9FG_7OXx: e[1] },
                                          },
                                          children: /*#__PURE__*/ _(Qe, {
                                            F9Alxl5fC: !1,
                                            height: `100%`,
                                            id: `YkSkEqLlP`,
                                            layoutId: `YkSkEqLlP`,
                                            oW2m16Ewg: `Ready to start your next project?`,
                                            PrYHp3zjy: `Schedule consultation`,
                                            style: { width: `100%` },
                                            variant: Z(`phecyeq0O`),
                                            width: `100%`,
                                            Y9FG_7OXx: e[0],
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(`section`, {
                          className: `framer-105e3re`,
                          "data-framer-name": `Product`,
                          children: [
                            /*#__PURE__*/ _(`div`, {
                              className: `framer-18fz3xm`,
                              "data-framer-name": `BG Shadow`,
                              children: /*#__PURE__*/ _(U, {
                                breakpoint: x,
                                overrides: {
                                  ecJfk_H5I: {
                                    background: {
                                      alt: `BG Image`,
                                      fit: `fill`,
                                      pixelHeight: 653,
                                      pixelWidth: 2225,
                                      sizes: `calc(${l?.width || `100vw`} + 160px)`,
                                      src: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png`,
                                      srcSet: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-00a8b1.png 512w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-8de959.png 1024w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak.png 2048w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png 2225w`,
                                    },
                                  },
                                  V9c8RUPbD: {
                                    background: {
                                      alt: `BG Image`,
                                      fit: `fill`,
                                      pixelHeight: 653,
                                      pixelWidth: 2225,
                                      sizes: `calc(${l?.width || `100vw`} + 160px)`,
                                      src: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png`,
                                      srcSet: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-00a8b1.png 512w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-8de959.png 1024w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak.png 2048w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png 2225w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ _(L, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    pixelHeight: 653,
                                    pixelWidth: 2225,
                                    sizes: `calc(${l?.width || `100vw`} + 200px)`,
                                    src: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png`,
                                    srcSet: `../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-00a8b1.png 512w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-8de959.png 1024w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak.png 2048w,../../assets/images/8VGjgC528A5Gc4HiKedmx0Ak-97a375.png 2225w`,
                                  },
                                  className: `framer-14diyer`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-fksdu4`,
                              "data-framer-name": `Manufacturing`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-9vgxvy`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1eg3bbb`,
                                      "data-framer-name": `Top`,
                                      children: /*#__PURE__*/ g(`div`, {
                                        className: `framer-x78bqz`,
                                        "data-framer-name": `Content`,
                                        children: [
                                          /*#__PURE__*/ _(R, {
                                            height: 33,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: us },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: xs,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-gyhdp9-container`,
                                              nodeId: `qi_15krg9`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(gt, {
                                                height: `100%`,
                                                id: `qi_15krg9`,
                                                layoutId: `qi_15krg9`,
                                                RX1q43PHo: `What we manufacture`,
                                                variant: Z(`l2EqAU8kn`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ g(Ro, {
                                            __framer__animate: { transition: fs },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: ys,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1sxt1ag`,
                                            "data-framer-name": `Info`,
                                            children: [
                                              /*#__PURE__*/ _(M, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ _(i, {
                                                  children: /*#__PURE__*/ g(`h2`, {
                                                    className: `framer-styles-preset-891qt7`,
                                                    "data-styles-preset": `lR3sdILUN`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                    },
                                                    children: [
                                                      `50,000`,
                                                      /*#__PURE__*/ _(`span`, {
                                                        style: {
                                                          "--framer-text-color": `var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52))`,
                                                        },
                                                        children: `+`,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-108epe0`,
                                                "data-framer-name": `Counter`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ _(M, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ _(i, {
                                                  children: /*#__PURE__*/ _(`p`, {
                                                    className: `framer-styles-preset-gf9yid`,
                                                    "data-styles-preset": `XorWCRDBg`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                                                    },
                                                    children: `Precision-built products delivered to clients across industries and continents.`,
                                                  }),
                                                }),
                                                className: `framer-1lbk2ez`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    /*#__PURE__*/ _(U, {
                                      breakpoint: x,
                                      overrides: {
                                        ecJfk_H5I: {
                                          background: {
                                            alt: `Product Info Image`,
                                            fit: `fill`,
                                            pixelHeight: 486,
                                            pixelWidth: 1106,
                                            sizes: `calc(min(${l?.width || `100vw`}, 1360px) - 32px)`,
                                            src: `../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw.svg`,
                                            srcSet: `../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw-261769.svg 512w,../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw-b096d0.svg 1024w,../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw.svg 1106w`,
                                          },
                                        },
                                      },
                                      children: /*#__PURE__*/ _(Ho, {
                                        __framer__animate: { transition: hs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: Ss,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Product Info Image`,
                                          fit: `fill`,
                                          pixelHeight: 486,
                                          pixelWidth: 1106,
                                          sizes: `calc(min(${l?.width || `100vw`}, 1360px) - 60px)`,
                                          src: `../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw.svg`,
                                          srcSet: `../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw-261769.svg 512w,../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw-b096d0.svg 1024w,../../assets/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw.svg 1106w`,
                                        },
                                        className: `framer-1m8d1lk`,
                                        "data-framer-name": `Image`,
                                        fitImageDimension: `height`,
                                      }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ _(`section`, {
                                  className: `framer-ksd5sk`,
                                  "data-framer-name": `Product List`,
                                  children: /*#__PURE__*/ _(`div`, {
                                    className: `framer-1so711d`,
                                    "data-framer-name": `Container`,
                                    children: /*#__PURE__*/ g(`div`, {
                                      className: `framer-9558q9`,
                                      "data-framer-name": `Grid`,
                                      children: [
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 50px)`,
                                            },
                                            V9c8RUPbD: {
                                              width: `max((min(${l?.width || `100vw`}, 1880px) - 90px) / 2, 50px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 446,
                                            width: `max((min(${l?.width || `100vw`}, 1880px) - 150px) / 4, 50px)`,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: us },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: xs,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-q32052-container`,
                                              nodeId: `oOU9xrfvD`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    style: { maxWidth: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(bt, {
                                                  AQl38ID5_: `CNC Machining`,
                                                  dNgBprfRM: `Aluminum gear housing`,
                                                  DOp5yuQBX: `Capability`,
                                                  height: `100%`,
                                                  id: `oOU9xrfvD`,
                                                  kkAbNmXqq: `Size Range`,
                                                  layoutId: `oOU9xrfvD`,
                                                  NtHhGC6fK: `Material`,
                                                  ohPaHrIBH: `Custom dimensions up to 500mm`,
                                                  style: { height: `100%`, width: `100%` },
                                                  Ut0DO6nSR: `Aluminum 6061 / 7075`,
                                                  variant: Z(`fJng5dGho`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 50px)`,
                                            },
                                            V9c8RUPbD: {
                                              width: `max((min(${l?.width || `100vw`}, 1880px) - 90px) / 2, 50px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 446,
                                            width: `max((min(${l?.width || `100vw`}, 1880px) - 150px) / 4, 50px)`,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: fs },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: ys,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-ri2mtv-container`,
                                              nodeId: `lK3ahTXEo`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    style: { maxWidth: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(bt, {
                                                  AQl38ID5_: `Injection Molding`,
                                                  dNgBprfRM: `Custom plastic enclosures`,
                                                  DOp5yuQBX: `Capability`,
                                                  height: `100%`,
                                                  id: `lK3ahTXEo`,
                                                  kkAbNmXqq: `Size Range`,
                                                  layoutId: `lK3ahTXEo`,
                                                  NtHhGC6fK: `Material`,
                                                  ohPaHrIBH: `Varies – custom moldable`,
                                                  ri2CipoBl: $(
                                                    {
                                                      pixelHeight: 300,
                                                      pixelWidth: 525,
                                                      src: `../../assets/images/f0RFFjVJlOXDEiaSuyLTCybZqQ-d8daf8.png`,
                                                      srcSet: `../../assets/images/f0RFFjVJlOXDEiaSuyLTCybZqQ.png 512w,../../assets/images/f0RFFjVJlOXDEiaSuyLTCybZqQ-d8daf8.png 525w`,
                                                    },
                                                    `Product Image`
                                                  ),
                                                  style: { height: `100%`, width: `100%` },
                                                  Ut0DO6nSR: `ABS, Polycarbonate, Nylon`,
                                                  variant: Z(`fJng5dGho`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 50px)`,
                                            },
                                            V9c8RUPbD: {
                                              width: `max((min(${l?.width || `100vw`}, 1880px) - 90px) / 2, 50px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 446,
                                            width: `max((min(${l?.width || `100vw`}, 1880px) - 150px) / 4, 50px)`,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: hs },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: Ss,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1jcdmf2-container`,
                                              nodeId: `RjLsS0f8x`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    style: { maxWidth: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(bt, {
                                                  AQl38ID5_: `Sheet Metal Fabrication & Assembly`,
                                                  dNgBprfRM: `Electrical control panels`,
                                                  DOp5yuQBX: `Capability`,
                                                  height: `100%`,
                                                  id: `RjLsS0f8x`,
                                                  kkAbNmXqq: `Size Range`,
                                                  layoutId: `RjLsS0f8x`,
                                                  NtHhGC6fK: `Material`,
                                                  ohPaHrIBH: `Small to full-scale cabinets`,
                                                  ri2CipoBl: $(
                                                    {
                                                      pixelHeight: 300,
                                                      pixelWidth: 525,
                                                      src: `../../assets/images/tAtl9axoEYtWCItpE02pQkhJW4-987d65.webp`,
                                                      srcSet: `../../assets/images/tAtl9axoEYtWCItpE02pQkhJW4.webp 512w,../../assets/images/tAtl9axoEYtWCItpE02pQkhJW4-987d65.webp 525w`,
                                                    },
                                                    `Product Image`
                                                  ),
                                                  style: { height: `100%`, width: `100%` },
                                                  Ut0DO6nSR: `Mild Steel, Stainless Steel`,
                                                  variant: Z(`fJng5dGho`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `max(min(${l?.width || `100vw`}, 1880px) - 32px, 50px)`,
                                            },
                                            V9c8RUPbD: {
                                              width: `max((min(${l?.width || `100vw`}, 1880px) - 90px) / 2, 50px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 446,
                                            width: `max((min(${l?.width || `100vw`}, 1880px) - 150px) / 4, 50px)`,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: _s },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: Cs,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1wg1e9h-container`,
                                              nodeId: `Q7N1pfTQI`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    style: { maxWidth: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(bt, {
                                                  AQl38ID5_: `Turning & Grinding`,
                                                  dNgBprfRM: `Precision shaft assemblies`,
                                                  DOp5yuQBX: `Capability`,
                                                  height: `100%`,
                                                  id: `Q7N1pfTQI`,
                                                  kkAbNmXqq: `Size Range`,
                                                  layoutId: `Q7N1pfTQI`,
                                                  NtHhGC6fK: `Material`,
                                                  ohPaHrIBH: `Up to 1200mm`,
                                                  ri2CipoBl: $(
                                                    {
                                                      pixelHeight: 300,
                                                      pixelWidth: 525,
                                                      src: `../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0-20cfc1.webp`,
                                                      srcSet: `../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0.webp 512w,../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0-20cfc1.webp 525w`,
                                                    },
                                                    `Product Image`
                                                  ),
                                                  style: { height: `100%`, width: `100%` },
                                                  Ut0DO6nSR: `Alloy Steel, Stainless Steel`,
                                                  variant: Z(`fJng5dGho`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(Ro, {
                                  __framer__animate: { transition: ws },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Q,
                                  __framer__exit: Ts,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-fiyrp9`,
                                  "data-framer-name": `CTA`,
                                  children: /*#__PURE__*/ _(F, {
                                    links: [
                                      {
                                        href: { webPageId: `Xs_UfQc0Y` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Xs_UfQc0Y` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Xs_UfQc0Y` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ _(R, {
                                        height: 96,
                                        width: `max(${l?.width || `100vw`}, 1px)`,
                                        children: /*#__PURE__*/ _(I, {
                                          className: `framer-pm4y9d-container`,
                                          nodeId: `yiL2onDlm`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ _(U, {
                                            breakpoint: x,
                                            overrides: {
                                              ecJfk_H5I: {
                                                HdZm6FR4M: e[2],
                                                variant: Z(`QCu0S8syS`),
                                              },
                                              V9c8RUPbD: {
                                                HdZm6FR4M: e[1],
                                                variant: Z(`wQ5GIaC5J`),
                                              },
                                            },
                                            children: /*#__PURE__*/ _(io, {
                                              DDeORrCV2: `Explore our complete product range across industries.`,
                                              HdZm6FR4M: e[0],
                                              height: `100%`,
                                              id: `yiL2onDlm`,
                                              layoutId: `yiL2onDlm`,
                                              LdLEw6rhv: `View all products`,
                                              style: { width: `100%` },
                                              variant: Z(`j2NEhDvUH`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(`div`, {
                              className: `framer-1blo66z`,
                              "data-framer-name": `BG Item`,
                              children: /*#__PURE__*/ g(`div`, {
                                className: `framer-1e7f2sr`,
                                "data-framer-name": `Container`,
                                children: [
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-lvuppf`,
                                    "data-border": !0,
                                    "data-framer-name": `Divider`,
                                  }),
                                  /*#__PURE__*/ _(`div`, {
                                    className: `framer-mh2c9p`,
                                    "data-border": !0,
                                    "data-framer-name": `Divider`,
                                  }),
                                  re() &&
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-101tmof hidden-gfjczm`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                  O() &&
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1ekxoji hidden-1ewydtq hidden-gfjczm`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                  O() &&
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1wo6xe8 hidden-1ewydtq hidden-gfjczm`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ g(`section`, {
                          className: `framer-19x11f6`,
                          "data-framer-name": `Industry`,
                          children: [
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-13v6e3a`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-1xlzbcy`,
                                  "data-framer-name": `Info`,
                                  children: [
                                    /*#__PURE__*/ _(R, {
                                      height: 33,
                                      children: /*#__PURE__*/ _(Io, {
                                        __framer__animate: { transition: ss },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: bs,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-4gdpz7-container`,
                                        nodeId: `vfsxZRfiI`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(gt, {
                                          height: `100%`,
                                          id: `vfsxZRfiI`,
                                          layoutId: `vfsxZRfiI`,
                                          RX1q43PHo: `Build for every industry`,
                                          variant: Z(`hi1tTl8yF`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ _(Fo, {
                                      __framer__animate: { transition: us },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: xs,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ _(i, {
                                        children: /*#__PURE__*/ g(`h2`, {
                                          className: `framer-styles-preset-2r53jr`,
                                          "data-styles-preset": `v03SSkN8P`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: [
                                            `Manufacturing `,
                                            /*#__PURE__*/ _(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: `solutions`,
                                            }),
                                            ` for every industry`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-8738b5`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ _(U, {
                                  breakpoint: x,
                                  overrides: {
                                    ecJfk_H5I: {
                                      width: `calc(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px)`,
                                    },
                                  },
                                  children: /*#__PURE__*/ _(R, {
                                    height: 330,
                                    width: `calc(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px)`,
                                    children: /*#__PURE__*/ _(Io, {
                                      __framer__animate: { transition: fs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: ys,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-lkvk6m-container`,
                                      nodeId: `A3MzTgJIa`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ _(U, {
                                        breakpoint: x,
                                        overrides: {
                                          ecJfk_H5I: { variant: Z(`vp5ZC60Dn`) },
                                          V9c8RUPbD: { variant: Z(`rVsEfdfno`) },
                                        },
                                        children: /*#__PURE__*/ _(Sa, {
                                          B80pNUA3d: `Automotive`,
                                          CnywnGpgr: `Efficiency Optimization`,
                                          diAybB7Q6: `Enhanced Patient Care`,
                                          dqvEMGjVV: `Precision engine parts`,
                                          dWT6cERwY: `Full material traceability`,
                                          FN_pqwvle: `Energy & power`,
                                          FOAXuYJcG: `Medical devices`,
                                          height: `100%`,
                                          id: `A3MzTgJIa`,
                                          J4wexecxz: `NADCAP special process approval`,
                                          KAfDz0BYA: `Certified aerospace components built for mission-critical performance and full traceability.`,
                                          KLQBZ8OGd: `Medical devices`,
                                          kT1hPw7RZ: `Innovative energy systems delivering reliable, efficient, and sustainable performance.`,
                                          layoutId: `A3MzTgJIa`,
                                          ldZuhPeFd: `Aerospace`,
                                          lv64Fdrng: `Industrial equipment`,
                                          lX4rsLjbM: `Precision automotive components engineered for peak performance and complete reliability.`,
                                          MBL9ZbIYS: `Aerospace industry`,
                                          NBlSDF81o: `Durable structural elements`,
                                          P6cC_F5zZ: `Sustainability Focused`,
                                          pmKL5EKjX: `Critical safety component expertise`,
                                          pPA8tgTYw: `NADCAP special process approval`,
                                          QteTzYk1P: `Reliable Energy Supply`,
                                          qZtefZiKX: `High-precision medical devices for safer, more effective patient care and diagnostics.`,
                                          rXZ4KdYNj: `Full material traceability`,
                                          S0rNpXwpL: `Operational Efficiency`,
                                          s6KwfWNWQ: `Critical safety component expertise`,
                                          style: { width: `100%` },
                                          variant: Z(`eo0cM38nh`),
                                          vFL_HndNO: `Automotive`,
                                          width: `100%`,
                                          X02GLY2Zj: `Energy & Power`,
                                          xBAKpfRpz: `Reliable transmission components`,
                                          YJw_EsDOr: `Safety and Reliability`,
                                          yttIB7R8q: `Certified aerospace components built for mission-critical performance and full traceability.`,
                                          ZPa7OqRJj: `Aerospace`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ g(`div`, {
                              className: `framer-mihuor`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ g(`div`, {
                                  className: `framer-1hfzguf`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-1te0z64`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ _(`div`, {
                                      className: `framer-14lsd7j`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    re() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-1twpzvy hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-1r46f6n hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    O() &&
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-g0lk6n hidden-1ewydtq hidden-gfjczm`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ _(U, {
                                  breakpoint: x,
                                  overrides: {
                                    ecJfk_H5I: { height: 682.8 },
                                    V9c8RUPbD: { height: 782.8 },
                                  },
                                  children: /*#__PURE__*/ _(R, {
                                    height: 902.8,
                                    width: l?.width || `100vw`,
                                    children: /*#__PURE__*/ _(I, {
                                      className: `framer-1ke9s5w-container`,
                                      nodeId: `mUkF85NNM`,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ _(vt, {
                                        height: `100%`,
                                        id: `mUkF85NNM`,
                                        layoutId: `mUkF85NNM`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            O() &&
                              /*#__PURE__*/ _(Ho, {
                                __framer__animate: { transition: us },
                                __framer__animateOnce: !0,
                                __framer__enter: zs,
                                __framer__exit: Bs,
                                __framer__spring: {
                                  bounce: 0,
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.45,
                                  durationBasedSpring: !0,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__threshold: 0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.5,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 0.9,
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  pixelHeight: 148,
                                  pixelWidth: 133,
                                  sizes: `110px`,
                                  src: `../../assets/images/inSfrD3tHL2yCbk6TpNeYJBFr4.png`,
                                },
                                className: `framer-sow2sm hidden-1ewydtq hidden-gfjczm`,
                                "data-framer-name": `BG Image`,
                                fitImageDimension: `height`,
                              }),
                            O() &&
                              /*#__PURE__*/ _(Ho, {
                                __framer__animate: { transition: fs },
                                __framer__animateOnce: !0,
                                __framer__enter: zs,
                                __framer__exit: Vs,
                                __framer__spring: {
                                  bounce: 0,
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.45,
                                  durationBasedSpring: !0,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__threshold: 0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.5,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 0.9,
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  pixelHeight: 153,
                                  pixelWidth: 143,
                                  sizes: `130px`,
                                  src: `../../assets/images/2N1iIeGw0VS4o01YwbUJAH9c60.png`,
                                },
                                className: `framer-kpz6eo hidden-1ewydtq hidden-gfjczm`,
                                "data-framer-name": `BG Image`,
                                fitImageDimension: `height`,
                              }),
                            O() &&
                              /*#__PURE__*/ _(Ho, {
                                __framer__animate: { transition: hs },
                                __framer__animateOnce: !0,
                                __framer__enter: zs,
                                __framer__exit: Hs,
                                __framer__spring: {
                                  bounce: 0,
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.45,
                                  durationBasedSpring: !0,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__threshold: 0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.5,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 0.9,
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  pixelHeight: 95,
                                  pixelWidth: 117,
                                  sizes: `100px`,
                                  src: `../../assets/images/aaChcJEU2R7cxvi02ODkb5dmzI.png`,
                                },
                                className: `framer-1wtemke hidden-1ewydtq hidden-gfjczm`,
                                "data-framer-name": `BG Image`,
                                fitImageDimension: `height`,
                              }),
                            O() &&
                              /*#__PURE__*/ _(Ho, {
                                __framer__animate: { transition: _s },
                                __framer__animateOnce: !0,
                                __framer__enter: zs,
                                __framer__exit: Us,
                                __framer__spring: {
                                  bounce: 0,
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.45,
                                  durationBasedSpring: !0,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__threshold: 0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.5,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 0.9,
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  pixelHeight: 102,
                                  pixelWidth: 126,
                                  sizes: `100px`,
                                  src: `../../assets/images/xRjLSmgCiuy2wR5xUfrj0ECzVI.png`,
                                },
                                className: `framer-1ppm0zu hidden-1ewydtq hidden-gfjczm`,
                                "data-framer-name": `BG Image`,
                                fitImageDimension: `height`,
                              }),
                            O() &&
                              /*#__PURE__*/ _(Ho, {
                                __framer__animate: { transition: ws },
                                __framer__animateOnce: !0,
                                __framer__enter: zs,
                                __framer__exit: Ws,
                                __framer__spring: {
                                  bounce: 0,
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.45,
                                  durationBasedSpring: !0,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__threshold: 0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.5,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 0.9,
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  pixelHeight: 139,
                                  pixelWidth: 137,
                                  sizes: `120px`,
                                  src: `../../assets/images/hbb0cUpLiNLr8I7f7AjFPnX4ZI.png`,
                                },
                                className: `framer-vm8mnq hidden-1ewydtq hidden-gfjczm`,
                                "data-framer-name": `BG Image`,
                                fitImageDimension: `height`,
                              }),
                          ],
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `framer-7zpxri`,
                          "data-framer-name": `Case Study`,
                          children: /*#__PURE__*/ g(`div`, {
                            className: `framer-ifktsj`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-1an9v5g`,
                                "data-framer-name": `Top`,
                                children: [
                                  /*#__PURE__*/ _(R, {
                                    height: 33,
                                    children: /*#__PURE__*/ _(Io, {
                                      __framer__animate: { transition: ss },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: bs,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-m1q0dm-container`,
                                      nodeId: `kLTjEkSvJ`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ _(gt, {
                                        height: `100%`,
                                        id: `kLTjEkSvJ`,
                                        layoutId: `kLTjEkSvJ`,
                                        RX1q43PHo: `Real-world success`,
                                        variant: Z(`R_XotlKFx`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(Fo, {
                                    __framer__animate: { transition: us },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: xs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: /*#__PURE__*/ _(i, {
                                      children: /*#__PURE__*/ g(`h2`, {
                                        className: `framer-styles-preset-2r53jr`,
                                        "data-styles-preset": `v03SSkN8P`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                        },
                                        children: [
                                          `Real `,
                                          /*#__PURE__*/ _(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                            },
                                            children: `results`,
                                          }),
                                          ` from real projects`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1rievit`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-13bf870`,
                                "data-framer-name": `Bottom`,
                                children: [
                                  O() &&
                                    /*#__PURE__*/ _(R, {
                                      children: /*#__PURE__*/ _(Io, {
                                        __framer__animate: { transition: fs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: ys,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-st1i50-container hidden-1ewydtq hidden-gfjczm`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `Vp7_bYfVA`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(qn, {
                                          alignment: `center`,
                                          arrowOptions: {
                                            arrowFill: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                                            arrowGap: 10,
                                            arrowPadding: 20,
                                            arrowPaddingBottom: 0,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: -110,
                                            arrowPosition: `top-right`,
                                            arrowRadius: 6,
                                            arrowShouldFadeIn: !1,
                                            arrowShouldSpace: !1,
                                            arrowSize: 40,
                                            leftArrow: `../../assets/images/8LN97HM95izP6JQ7OY7aPMZ4SH0.svg`,
                                            rightArrow: `../../assets/images/KV8XN8iXG1N2u7CGP58Nl2KlQ.svg`,
                                            showMouseControls: !0,
                                          },
                                          autoPlayControl: !1,
                                          borderRadius: 6,
                                          direction: `left`,
                                          dragControl: !0,
                                          effectsOptions: {
                                            effectsHover: !0,
                                            effectsOpacity: 1,
                                            effectsPerspective: 1200,
                                            effectsRotate: 0,
                                            effectsScale: 1,
                                            playOffscreen: !1,
                                          },
                                          fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 25,
                                            overflow: !1,
                                          },
                                          gap: 10,
                                          height: `100%`,
                                          id: `Vp7_bYfVA`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `Vp7_bYfVA`,
                                          padding: 0,
                                          paddingBottom: 0,
                                          paddingLeft: 0,
                                          paddingPerSide: !1,
                                          paddingRight: 0,
                                          paddingTop: 0,
                                          progressOptions: {
                                            dotsActiveOpacity: 1,
                                            dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                            dotsBlur: 0,
                                            dotsFill: `rgb(255, 255, 255)`,
                                            dotsGap: 10,
                                            dotsInset: 10,
                                            dotSize: 10,
                                            dotsOpacity: 0.5,
                                            dotsPadding: 10,
                                            dotsRadius: 50,
                                            showProgressDots: !1,
                                          },
                                          slots: [
                                            /*#__PURE__*/ _(C.div, {
                                              className: `framer-11q6kml`,
                                              "data-framer-name": `case studies`,
                                              children: /*#__PURE__*/ _(xe, {
                                                children: /*#__PURE__*/ _(Fs, {
                                                  query: Ks(),
                                                  children: (e, t, n) =>
                                                    /*#__PURE__*/ _(p, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            EQtUZjKlv: e,
                                                            GEnNpt0Iw: t,
                                                            id: n,
                                                            ilYZL2LIm: r,
                                                            kIllSH8oL: i,
                                                            NY1JAN3Dg: a,
                                                            okl2KJaEX: o,
                                                            RcjclLkIy: s,
                                                          },
                                                          c
                                                        ) => {
                                                          ((s ??= ``),
                                                            (o ??= ``),
                                                            (a ??= ``),
                                                            (r ??= ``),
                                                            (t ??= ``));
                                                          let l = Gs(s);
                                                          return /*#__PURE__*/ _(
                                                            E,
                                                            {
                                                              id: `HjSJ8VMEE-${n}`,
                                                              children: /*#__PURE__*/ _(
                                                                Ce.Provider,
                                                                {
                                                                  value: { GEnNpt0Iw: t },
                                                                  children: /*#__PURE__*/ _(C.div, {
                                                                    className: `framer-1vlog02`,
                                                                    children:
                                                                      l !== !1 &&
                                                                      /*#__PURE__*/ _(F, {
                                                                        links: [
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                GEnNpt0Iw: t,
                                                                              },
                                                                              webPageId: `bSiIVuvYs`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                        ],
                                                                        children: (t) =>
                                                                          /*#__PURE__*/ _(R, {
                                                                            height: 330,
                                                                            width: `1360px`,
                                                                            children:
                                                                              /*#__PURE__*/ _(I, {
                                                                                className: `framer-1vht6jl-container`,
                                                                                "data-framer-name": `01`,
                                                                                inComponentSlot: !0,
                                                                                name: `01`,
                                                                                nodeId: `p66H0gQgf`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `augiA20Il`,
                                                                                children:
                                                                                  /*#__PURE__*/ _(
                                                                                    Ba,
                                                                                    {
                                                                                      height: `100%`,
                                                                                      id: `p66H0gQgf`,
                                                                                      kJVrTF5u9:
                                                                                        t[0],
                                                                                      layoutId: `p66H0gQgf`,
                                                                                      ltrwyz8e3: s,
                                                                                      name: `01`,
                                                                                      NGDhrhKmB: r,
                                                                                      P2tXBGhUM:
                                                                                        Ns(e),
                                                                                      QFGEtggyA: a,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      TGxii02c7: o,
                                                                                      variant:
                                                                                        Z(
                                                                                          `nqYh41WA9`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      Wq3TdOL6Y:
                                                                                        Ns(i),
                                                                                    }
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                }
                                                              ),
                                                            },
                                                            n
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(C.div, {
                                              className: `framer-1xculcj`,
                                              children: /*#__PURE__*/ _(xe, {
                                                children: /*#__PURE__*/ _(Fs, {
                                                  query: qs(),
                                                  children: (e, t, n) =>
                                                    /*#__PURE__*/ _(p, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            EQtUZjKlv: e,
                                                            GEnNpt0Iw: t,
                                                            id: n,
                                                            ilYZL2LIm: r,
                                                            kIllSH8oL: i,
                                                            NY1JAN3Dg: a,
                                                            okl2KJaEX: o,
                                                            RcjclLkIy: s,
                                                          },
                                                          c
                                                        ) => {
                                                          ((s ??= ``),
                                                            (o ??= ``),
                                                            (a ??= ``),
                                                            (r ??= ``),
                                                            (t ??= ``));
                                                          let l = Gs(s);
                                                          return /*#__PURE__*/ _(
                                                            E,
                                                            {
                                                              id: `BdUqzXc_K-${n}`,
                                                              children: /*#__PURE__*/ _(
                                                                Ce.Provider,
                                                                {
                                                                  value: { GEnNpt0Iw: t },
                                                                  children: /*#__PURE__*/ _(C.div, {
                                                                    className: `framer-7ca0oa`,
                                                                    children:
                                                                      l !== !1 &&
                                                                      /*#__PURE__*/ _(F, {
                                                                        links: [
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                GEnNpt0Iw: t,
                                                                              },
                                                                              webPageId: `bSiIVuvYs`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                        ],
                                                                        children: (t) =>
                                                                          /*#__PURE__*/ _(R, {
                                                                            height: 324,
                                                                            width: `1360px`,
                                                                            children:
                                                                              /*#__PURE__*/ _(I, {
                                                                                className: `framer-rh5jgl-container`,
                                                                                "data-framer-name": `02`,
                                                                                inComponentSlot: !0,
                                                                                name: `02`,
                                                                                nodeId: `kXvmirFSS`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `augiA20Il`,
                                                                                children:
                                                                                  /*#__PURE__*/ _(
                                                                                    Ba,
                                                                                    {
                                                                                      height: `100%`,
                                                                                      id: `kXvmirFSS`,
                                                                                      kJVrTF5u9:
                                                                                        t[0],
                                                                                      layoutId: `kXvmirFSS`,
                                                                                      ltrwyz8e3: s,
                                                                                      name: `02`,
                                                                                      NGDhrhKmB: r,
                                                                                      P2tXBGhUM:
                                                                                        Ns(e),
                                                                                      QFGEtggyA: a,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      TGxii02c7: o,
                                                                                      variant:
                                                                                        Z(
                                                                                          `nqYh41WA9`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      Wq3TdOL6Y:
                                                                                        Ns(i),
                                                                                    }
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                }
                                                              ),
                                                            },
                                                            n
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(C.div, {
                                              className: `framer-1ebgsoi`,
                                              children: /*#__PURE__*/ _(xe, {
                                                children: /*#__PURE__*/ _(Fs, {
                                                  query: Js(),
                                                  children: (e, t, n) =>
                                                    /*#__PURE__*/ _(p, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            EQtUZjKlv: e,
                                                            GEnNpt0Iw: t,
                                                            id: n,
                                                            ilYZL2LIm: r,
                                                            kIllSH8oL: i,
                                                            NY1JAN3Dg: a,
                                                            okl2KJaEX: o,
                                                            RcjclLkIy: s,
                                                          },
                                                          c
                                                        ) => {
                                                          ((s ??= ``),
                                                            (o ??= ``),
                                                            (a ??= ``),
                                                            (r ??= ``),
                                                            (t ??= ``));
                                                          let l = Gs(s);
                                                          return /*#__PURE__*/ _(
                                                            E,
                                                            {
                                                              id: `M5y1Ffhhb-${n}`,
                                                              children: /*#__PURE__*/ _(
                                                                Ce.Provider,
                                                                {
                                                                  value: { GEnNpt0Iw: t },
                                                                  children: /*#__PURE__*/ _(C.div, {
                                                                    className: `framer-gceet3`,
                                                                    children:
                                                                      l !== !1 &&
                                                                      /*#__PURE__*/ _(F, {
                                                                        links: [
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                GEnNpt0Iw: t,
                                                                              },
                                                                              webPageId: `bSiIVuvYs`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                        ],
                                                                        children: (t) =>
                                                                          /*#__PURE__*/ _(R, {
                                                                            height: 324,
                                                                            width: `1360px`,
                                                                            children:
                                                                              /*#__PURE__*/ _(I, {
                                                                                className: `framer-2k8gtm-container`,
                                                                                "data-framer-name": `03`,
                                                                                inComponentSlot: !0,
                                                                                name: `03`,
                                                                                nodeId: `u58K432VX`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `augiA20Il`,
                                                                                children:
                                                                                  /*#__PURE__*/ _(
                                                                                    Ba,
                                                                                    {
                                                                                      height: `100%`,
                                                                                      id: `u58K432VX`,
                                                                                      kJVrTF5u9:
                                                                                        t[0],
                                                                                      layoutId: `u58K432VX`,
                                                                                      ltrwyz8e3: s,
                                                                                      name: `03`,
                                                                                      NGDhrhKmB: r,
                                                                                      P2tXBGhUM:
                                                                                        Ns(e),
                                                                                      QFGEtggyA: a,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      TGxii02c7: o,
                                                                                      variant:
                                                                                        Z(
                                                                                          `nqYh41WA9`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      Wq3TdOL6Y:
                                                                                        Ns(i),
                                                                                    }
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                }
                                                              ),
                                                            },
                                                            n
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(C.div, {
                                              className: `framer-5lfmgx`,
                                              children: /*#__PURE__*/ _(xe, {
                                                children: /*#__PURE__*/ _(Fs, {
                                                  query: Ys(),
                                                  children: (e, t, n) =>
                                                    /*#__PURE__*/ _(p, {
                                                      children: e?.map(
                                                        (
                                                          {
                                                            EQtUZjKlv: e,
                                                            GEnNpt0Iw: t,
                                                            id: n,
                                                            ilYZL2LIm: r,
                                                            kIllSH8oL: i,
                                                            NY1JAN3Dg: a,
                                                            okl2KJaEX: o,
                                                            RcjclLkIy: s,
                                                          },
                                                          c
                                                        ) => {
                                                          ((s ??= ``),
                                                            (o ??= ``),
                                                            (a ??= ``),
                                                            (r ??= ``),
                                                            (t ??= ``));
                                                          let l = Gs(s);
                                                          return /*#__PURE__*/ _(
                                                            E,
                                                            {
                                                              id: `jCtiafYTs-${n}`,
                                                              children: /*#__PURE__*/ _(
                                                                Ce.Provider,
                                                                {
                                                                  value: { GEnNpt0Iw: t },
                                                                  children: /*#__PURE__*/ _(C.div, {
                                                                    className: `framer-12o8c74`,
                                                                    children:
                                                                      l !== !1 &&
                                                                      /*#__PURE__*/ _(F, {
                                                                        links: [
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                GEnNpt0Iw: t,
                                                                              },
                                                                              webPageId: `bSiIVuvYs`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                        ],
                                                                        children: (t) =>
                                                                          /*#__PURE__*/ _(R, {
                                                                            height: 324,
                                                                            width: `1360px`,
                                                                            children:
                                                                              /*#__PURE__*/ _(I, {
                                                                                className: `framer-1u0n2f9-container`,
                                                                                "data-framer-name": `04`,
                                                                                inComponentSlot: !0,
                                                                                name: `04`,
                                                                                nodeId: `jyoFJ1dzn`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `augiA20Il`,
                                                                                children:
                                                                                  /*#__PURE__*/ _(
                                                                                    Ba,
                                                                                    {
                                                                                      height: `100%`,
                                                                                      id: `jyoFJ1dzn`,
                                                                                      kJVrTF5u9:
                                                                                        t[0],
                                                                                      layoutId: `jyoFJ1dzn`,
                                                                                      ltrwyz8e3: s,
                                                                                      name: `04`,
                                                                                      NGDhrhKmB: r,
                                                                                      P2tXBGhUM:
                                                                                        Ns(e),
                                                                                      QFGEtggyA: a,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      TGxii02c7: o,
                                                                                      variant:
                                                                                        Z(
                                                                                          `nqYh41WA9`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      Wq3TdOL6Y:
                                                                                        Ns(i),
                                                                                    }
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                }
                                                              ),
                                                            },
                                                            n
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          ],
                                          startFrom: 0,
                                          style: { height: `100%`, width: `100%` },
                                          transitionControl: {
                                            damping: 40,
                                            delay: 0,
                                            mass: 1,
                                            stiffness: 200,
                                            type: `spring`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  /*#__PURE__*/ g(Ro, {
                                    __framer__animate: { transition: hs },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: Ss,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1wedl7s`,
                                    "data-border": !0,
                                    "data-framer-name": `Help Line`,
                                    children: [
                                      /*#__PURE__*/ g(Ro, {
                                        __framer__animate: { transition: _s },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: Cs,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-13lsdsg`,
                                        "data-framer-name": `Info`,
                                        children: [
                                          /*#__PURE__*/ g(`div`, {
                                            className: `framer-3pnntc`,
                                            "data-framer-name": `Avatar`,
                                            children: [
                                              /*#__PURE__*/ _(R, {
                                                height: 50,
                                                children: /*#__PURE__*/ _(I, {
                                                  className: `framer-y2e09m-container`,
                                                  nodeId: `v3yAei1Z6`,
                                                  scopeId: `augiA20Il`,
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 120,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/hhiqAWN8uopSow2Pn5F5PWR0lNM.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `v3yAei1Z6`,
                                                    layoutId: `v3yAei1Z6`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`S7N1QrU7l`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              /*#__PURE__*/ _(R, {
                                                height: 50,
                                                children: /*#__PURE__*/ _(I, {
                                                  className: `framer-lv1pcr-container`,
                                                  nodeId: `l5aKD7nWK`,
                                                  scopeId: `augiA20Il`,
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 120,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/0jxLgyu1KT3iisfQG2TUjYiR02E.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `l5aKD7nWK`,
                                                    layoutId: `l5aKD7nWK`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`S7N1QrU7l`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ g(`div`, {
                                            className: `framer-16a08qh`,
                                            "data-framer-name": `Title`,
                                            children: [
                                              /*#__PURE__*/ _(M, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ _(i, {
                                                  children: /*#__PURE__*/ _(`h5`, {
                                                    className: `framer-styles-preset-1f8or04`,
                                                    "data-styles-preset": `GzMbxD0G0`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                    },
                                                    children: `Open a conversation`,
                                                  }),
                                                }),
                                                className: `framer-1xr6ood`,
                                                "data-framer-name": `Pre Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              /*#__PURE__*/ _(M, {
                                                __fromCanvasComponent: !0,
                                                children: /*#__PURE__*/ _(i, {
                                                  children: /*#__PURE__*/ _(`p`, {
                                                    className: `framer-styles-preset-gf9yid`,
                                                    "data-styles-preset": `XorWCRDBg`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                                                    },
                                                    children: `Contact us to explore solutions tailored to your needs.`,
                                                  }),
                                                }),
                                                className: `framer-5nridj`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ _(F, {
                                        links: [
                                          {
                                            href: { webPageId: `UUF_p9mVZ` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `UUF_p9mVZ` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `UUF_p9mVZ` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ _(R, {
                                            height: 52,
                                            children: /*#__PURE__*/ _(Io, {
                                              __framer__animate: { transition: ws },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: Ts,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-gi0sdt-container`,
                                              nodeId: `mx0jIZR80`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    gr8i9ifqK: e[2],
                                                    variant: Z(`oP3WJd3dc`),
                                                  },
                                                  V9c8RUPbD: {
                                                    gr8i9ifqK: e[1],
                                                    variant: Z(`oP3WJd3dc`),
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(G, {
                                                  gr8i9ifqK: e[0],
                                                  height: `100%`,
                                                  id: `mx0jIZR80`,
                                                  layoutId: `mx0jIZR80`,
                                                  LkRCOsI08: `Contact us now`,
                                                  variant: Z(`J5IGQfKo3`),
                                                  width: `100%`,
                                                  xgHJht2Sv: !1,
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              oe() &&
                                /*#__PURE__*/ _(`div`, {
                                  className: `framer-1343r7 hidden-72rtr7`,
                                  children: /*#__PURE__*/ _(xe, {
                                    children: /*#__PURE__*/ _(Fs, {
                                      query: Xs(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ _(p, {
                                          children: e?.map(
                                            (
                                              {
                                                EQtUZjKlv: e,
                                                GEnNpt0Iw: t,
                                                id: n,
                                                ilYZL2LIm: r,
                                                kIllSH8oL: i,
                                                NY1JAN3Dg: a,
                                                okl2KJaEX: o,
                                                RcjclLkIy: s,
                                              },
                                              c
                                            ) => (
                                              (s ??= ``),
                                              (o ??= ``),
                                              (a ??= ``),
                                              (r ??= ``),
                                              (t ??= ``),
                                              /*#__PURE__*/ _(
                                                E,
                                                {
                                                  id: `jO6Gg7cEr-${n}`,
                                                  children: /*#__PURE__*/ _(Ce.Provider, {
                                                    value: { GEnNpt0Iw: t },
                                                    children: /*#__PURE__*/ _(`div`, {
                                                      className: `framer-1fsmtj9`,
                                                      children: /*#__PURE__*/ _(F, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { GEnNpt0Iw: t },
                                                              webPageId: `bSiIVuvYs`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { GEnNpt0Iw: t },
                                                              webPageId: `bSiIVuvYs`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { GEnNpt0Iw: t },
                                                              webPageId: `bSiIVuvYs`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (t) =>
                                                          /*#__PURE__*/ _(U, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              ecJfk_H5I: {
                                                                width: `max(min(${l?.width || `100vw`}, 1360px) - 32px, 50px)`,
                                                              },
                                                              V9c8RUPbD: {
                                                                width: `max(min(${l?.width || `100vw`}, 1360px) - 60px, 50px)`,
                                                              },
                                                            },
                                                            children: /*#__PURE__*/ _(R, {
                                                              height: 323,
                                                              children: /*#__PURE__*/ _(I, {
                                                                className: `framer-18asjo-container`,
                                                                nodeId: `i7fOLZ6Tl`,
                                                                scopeId: `augiA20Il`,
                                                                children: /*#__PURE__*/ _(U, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    ecJfk_H5I: {
                                                                      kJVrTF5u9: t[2],
                                                                      variant: Z(`u92gFu2i4`),
                                                                    },
                                                                    V9c8RUPbD: {
                                                                      kJVrTF5u9: t[1],
                                                                      variant: Z(`taQ36ybFO`),
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ _(Ba, {
                                                                    height: `100%`,
                                                                    id: `i7fOLZ6Tl`,
                                                                    kJVrTF5u9: t[0],
                                                                    layoutId: `i7fOLZ6Tl`,
                                                                    ltrwyz8e3: s,
                                                                    NGDhrhKmB: r,
                                                                    P2tXBGhUM: Ns(e),
                                                                    QFGEtggyA: a,
                                                                    style: { width: `100%` },
                                                                    TGxii02c7: o,
                                                                    variant: Z(`nqYh41WA9`),
                                                                    width: `100%`,
                                                                    Wq3TdOL6Y: Ns(i),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                n
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ g(`section`, {
                          className: `framer-15n658r`,
                          "data-framer-name": `Why Choose`,
                          children: [
                            /*#__PURE__*/ g(Yo, {
                              __framer__animate: { transition: Es },
                              __framer__animateOnce: !0,
                              __framer__enter: Q,
                              __framer__exit: Ds,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-etrmyl`,
                              tickerEffectAlign: `center`,
                              tickerEffectDirectionModifier: `default`,
                              tickerEffectDraggable: !0,
                              tickerEffectEnabled: !0,
                              tickerEffectGap: 20,
                              tickerEffectHoverModifier: 0,
                              tickerEffectOverflow: `visible`,
                              tickerEffectPosition: `relative`,
                              tickerEffectStackDirection: `row`,
                              tickerEffectVelocity: 20,
                              children: [
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-1fjeunk-container`,
                                        nodeId: `QgAYrnzGT`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `QgAYrnzGT`,
                                            layoutId: `QgAYrnzGT`,
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-1c9i7x2-container`,
                                        nodeId: `PoiyF8lKU`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `PoiyF8lKU`,
                                            layoutId: `PoiyF8lKU`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 93,
                                                src: `../../assets/images/BvZomeQDc5TuXtVugasI3vjA.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-1g3omv0-container`,
                                        nodeId: `abZ0YRLoF`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `abZ0YRLoF`,
                                            layoutId: `abZ0YRLoF`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 99,
                                                src: `../../assets/images/BAmFSi2zDMhpaE7hI1HjoHTKUM.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-cevtwj-container`,
                                        nodeId: `RI76JFqNK`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `RI76JFqNK`,
                                            layoutId: `RI76JFqNK`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 88,
                                                src: `../../assets/images/e5YBm1OqZwwtrOjfApIJrIomdM.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-fypnu3-container`,
                                        nodeId: `wdQIHtmz5`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `wdQIHtmz5`,
                                            layoutId: `wdQIHtmz5`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 26,
                                                pixelWidth: 108,
                                                src: `../../assets/images/509cFwvGZfkVPdYW7zVHR7EYWt0.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-17emh5c-container`,
                                        nodeId: `Okz_rMhMC`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `Okz_rMhMC`,
                                            layoutId: `Okz_rMhMC`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 34,
                                                pixelWidth: 109,
                                                src: `../../assets/images/beRZrWDYxb5i7Y1Z00iFBVzwAog.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-1ymrmay-container`,
                                        nodeId: `fb4ePx2dM`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `fb4ePx2dM`,
                                            layoutId: `fb4ePx2dM`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 40,
                                                pixelWidth: 91,
                                                src: `../../assets/images/Jq1zwerPuAxxeeU8AdM3nowkc2Q.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-11xxbvi-container`,
                                        nodeId: `v6JuZAiOF`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `v6JuZAiOF`,
                                            layoutId: `v6JuZAiOF`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 24,
                                                pixelWidth: 115,
                                                src: `../../assets/images/wiofWjcMmYrLE1oQSPB7XuGaoQE.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ _(pe, {
                                  children: /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: { ecJfk_H5I: { height: 94 } },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 126,
                                      children: /*#__PURE__*/ _(I, {
                                        className: `framer-1u4d7kk-container`,
                                        nodeId: `I3IbO04JM`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: { ecJfk_H5I: { style: { height: `100%` } } },
                                          children: /*#__PURE__*/ _(Ke, {
                                            height: `100%`,
                                            id: `I3IbO04JM`,
                                            layoutId: `I3IbO04JM`,
                                            qeYLOypnx: $(
                                              {
                                                pixelHeight: 20,
                                                pixelWidth: 90,
                                                src: `../../assets/images/3Cxx7iwvWPeS07lOqbP4uN0ugVw.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _(L, {
                              background: {
                                alt: `Why Choose Image`,
                                fit: `fill`,
                                pixelHeight: 830,
                                pixelWidth: 1920,
                                sizes: l?.width || `100vw`,
                                src: `../../assets/images/dsj12aJvaxo1dBAmFrN0EOQzvA.webp`,
                                srcSet: `../../assets/images/dsj12aJvaxo1dBAmFrN0EOQzvA-8b6622.webp 512w,../../assets/images/dsj12aJvaxo1dBAmFrN0EOQzvA-5b64cb.webp 1024w,../../assets/images/dsj12aJvaxo1dBAmFrN0EOQzvA.webp 1920w`,
                              },
                              className: `framer-8ihoz8`,
                              "data-framer-name": `Why Choose Info`,
                              children: /*#__PURE__*/ _(`div`, {
                                className: `framer-gtlo6b`,
                                "data-framer-name": `Container`,
                                children: /*#__PURE__*/ g(Ro, {
                                  __framer__animate: { transition: us },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Q,
                                  __framer__exit: xs,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-c7mbdk`,
                                  "data-border": !0,
                                  "data-framer-name": `Content`,
                                  children: [
                                    /*#__PURE__*/ _(Fo, {
                                      __framer__animate: { transition: fs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: ys,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ _(i, {
                                        children: /*#__PURE__*/ _(`h2`, {
                                          className: `framer-styles-preset-11zt07t`,
                                          "data-styles-preset": `mbODXwEBO`,
                                          style: {
                                            "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                          },
                                          children: `Manufacturing solutions you can count on`,
                                        }),
                                      }),
                                      className: `framer-2p9p5l`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ g(Ro, {
                                      __framer__animate: { transition: hs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: Ss,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-16sgi5w`,
                                      "data-framer-name": `List`,
                                      children: [
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-kvr4k4-container`,
                                              nodeId: `Ye8aDjEQF`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `Ye8aDjEQF`,
                                                layoutId: `Ye8aDjEQF`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `Manual & automated assembly`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-bwl3d-container`,
                                              nodeId: `d0jIqVu3p`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `d0jIqVu3p`,
                                                layoutId: `d0jIqVu3p`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `Certified quality assurance`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-1wb9plz-container`,
                                              nodeId: `otjbuw8i0`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `otjbuw8i0`,
                                                layoutId: `otjbuw8i0`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `On-time delivery`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-a9x14m-container`,
                                              nodeId: `utBksoNX0`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `utBksoNX0`,
                                                layoutId: `utBksoNX0`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `End-to-end solutions`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-1c9jch7-container`,
                                              nodeId: `g6qQc15eU`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `g6qQc15eU`,
                                                layoutId: `g6qQc15eU`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `Advanced technology`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 540px) - 60px)`,
                                            },
                                          },
                                          children: /*#__PURE__*/ _(R, {
                                            height: 17,
                                            width: `calc(min(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px), 540px) - 100px)`,
                                            children: /*#__PURE__*/ _(I, {
                                              className: `framer-geinv7-container`,
                                              nodeId: `cDPapW8iS`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ _(Y, {
                                                height: `100%`,
                                                id: `cDPapW8iS`,
                                                layoutId: `cDPapW8iS`,
                                                style: { width: `100%` },
                                                TzoAmWk5W: `Customer-centric spproach`,
                                                variant: Z(`aug10VDJu`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ _(F, {
                                      links: [
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `cw4t799ht` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ _(R, {
                                          height: 52,
                                          children: /*#__PURE__*/ _(Io, {
                                            __framer__animate: { transition: _s },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: Cs,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-oa8fph-container`,
                                            nodeId: `Xk3P_u7Ga`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ _(U, {
                                              breakpoint: x,
                                              overrides: {
                                                ecJfk_H5I: {
                                                  gr8i9ifqK: e[2],
                                                  variant: Z(`Ag3jLliLD`),
                                                },
                                                V9c8RUPbD: {
                                                  gr8i9ifqK: e[1],
                                                  variant: Z(`Ag3jLliLD`),
                                                },
                                              },
                                              children: /*#__PURE__*/ _(G, {
                                                gr8i9ifqK: e[0],
                                                height: `100%`,
                                                id: `Xk3P_u7Ga`,
                                                layoutId: `Xk3P_u7Ga`,
                                                LkRCOsI08: `Our Capabilities`,
                                                variant: Z(`egt0_wuli`),
                                                width: `100%`,
                                                xgHJht2Sv: !1,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ g(Ro, {
                                      __framer__animate: { transition: ws },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: Ts,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1ud8hp3`,
                                      "data-framer-name": `Image/Text`,
                                      children: [
                                        /*#__PURE__*/ g(`div`, {
                                          className: `framer-50gmf4`,
                                          "data-framer-name": `Image`,
                                          children: [
                                            /*#__PURE__*/ _(R, {
                                              height: 50,
                                              children: /*#__PURE__*/ _(I, {
                                                className: `framer-19whix6-container`,
                                                nodeId: `j2uJg2ntH`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 60,
                                                        pixelWidth: 60,
                                                        src: `../../assets/images/kw6yViedj38QNGYyV8wILtG0yM.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `j2uJg2ntH`,
                                                    layoutId: `j2uJg2ntH`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(R, {
                                              height: 50,
                                              children: /*#__PURE__*/ _(I, {
                                                className: `framer-1nf6ppc-container`,
                                                nodeId: `CTT72Ysx_`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 60,
                                                        pixelWidth: 60,
                                                        src: `../../assets/images/kSra5gb12DmT0d9ga9gXczlbbm4.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `CTT72Ysx_`,
                                                    layoutId: `CTT72Ysx_`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(R, {
                                              height: 50,
                                              children: /*#__PURE__*/ _(I, {
                                                className: `framer-ok4qf-container`,
                                                nodeId: `xyoTp6Lhf`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 60,
                                                        pixelWidth: 60,
                                                        src: `../../assets/images/M0npgVMUn8ZRRzR5Yumeg170mo.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `xyoTp6Lhf`,
                                                    layoutId: `xyoTp6Lhf`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ _(R, {
                                              height: 50,
                                              children: /*#__PURE__*/ _(I, {
                                                className: `framer-1kheooj-container`,
                                                nodeId: `vJnhz_Eb1`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ _(U, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    ecJfk_H5I: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ _(Ie, {
                                                    aEbvs76M6: $(
                                                      {
                                                        pixelHeight: 60,
                                                        pixelWidth: 60,
                                                        src: `../../assets/images/6i5vOQgN6XtXD6yWyD6yQkmNxM.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `vJnhz_Eb1`,
                                                    layoutId: `vJnhz_Eb1`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ g(`div`, {
                                          className: `framer-10cbhxq`,
                                          "data-framer-name": `Rating Info`,
                                          children: [
                                            /*#__PURE__*/ _(L, {
                                              background: {
                                                alt: `Rating Image`,
                                                fit: `fit`,
                                                pixelHeight: 14,
                                                pixelWidth: 95,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `96px`,
                                                src: `../../assets/images/tCvC9GAJnRLLsN0vOz4hjIvKuU.svg`,
                                              },
                                              className: `framer-167hgew`,
                                              fitImageDimension: `height`,
                                            }),
                                            /*#__PURE__*/ _(M, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ _(i, {
                                                children: /*#__PURE__*/ _(`p`, {
                                                  className: `framer-styles-preset-15frtqy`,
                                                  "data-styles-preset": `P89o9sRK1`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Happy clients worldwide`,
                                                }),
                                              }),
                                              className: `framer-7dwg7w`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `framer-7k0ab7`,
                          "data-framer-name": `Testimonial`,
                          children: /*#__PURE__*/ g(`div`, {
                            className: `framer-1xqe2zl`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-kztx58`,
                                "data-framer-name": `Top`,
                                children: [
                                  /*#__PURE__*/ _(R, {
                                    height: 33,
                                    children: /*#__PURE__*/ _(Io, {
                                      __framer__animate: { transition: ss },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: bs,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1dq9y62-container`,
                                      nodeId: `lK6dr4ITe`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ _(gt, {
                                        height: `100%`,
                                        id: `lK6dr4ITe`,
                                        layoutId: `lK6dr4ITe`,
                                        RX1q43PHo: `Build on trust`,
                                        variant: Z(`hi1tTl8yF`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ _(Fo, {
                                    __framer__animate: { transition: us },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: xs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: /*#__PURE__*/ _(i, {
                                      children: /*#__PURE__*/ g(`h2`, {
                                        className: `framer-styles-preset-2r53jr`,
                                        "data-styles-preset": `v03SSkN8P`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                        },
                                        children: [
                                          `Trusted by `,
                                          /*#__PURE__*/ _(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                            },
                                            children: `clients`,
                                          }),
                                          `, proven by results`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-rp4xlm`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-sdkc21`,
                                "data-framer-name": `Bottom`,
                                children: [
                                  /*#__PURE__*/ _(U, {
                                    breakpoint: x,
                                    overrides: {
                                      ecJfk_H5I: {
                                        width: `calc(min(max(${l?.width || `100vw`}, 1px), 1880px) - 32px)`,
                                      },
                                      V9c8RUPbD: {
                                        width: `calc(min(max(${l?.width || `100vw`}, 1px), 1880px) - 60px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ _(R, {
                                      height: 494,
                                      width: `min(max((min(max(${l?.width || `100vw`}, 1px), 1880px) - 80px) / 2, 1px), 600px)`,
                                      children: /*#__PURE__*/ _(Io, {
                                        __framer__animate: { transition: fs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: ys,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-affhqb-container`,
                                        nodeId: `lndFT0IrQ`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ _(U, {
                                          breakpoint: x,
                                          overrides: {
                                            ecJfk_H5I: {
                                              style: { width: `100%` },
                                              variant: Z(`WQ1xzXXq7`),
                                            },
                                            V9c8RUPbD: { style: { width: `100%` } },
                                          },
                                          children: /*#__PURE__*/ _(_i, {
                                            AYDvo4x_3: `Their precision engineering and attention to detail exceeded our expectations. From prototyping to delivery, the entire process was seamless and professional.`,
                                            b7QmGeWjC: `Procurement Manager`,
                                            BcmyJu68n: `Operations Manager`,
                                            COUeMXyAq: `Sofia Ramirez`,
                                            cQ5qBV9Qo: `Project Coordinator at Stellar Industries`,
                                            height: `100%`,
                                            id: `lndFT0IrQ`,
                                            JsFD0M9Am: `I was impressed by their professionalism and attention to detail. Communication was clear, and the final product exceeded our expectations.`,
                                            layoutId: `lndFT0IrQ`,
                                            mTKmyEice: `Marketing Lead at BrightWave Tech`,
                                            o4uJBiqrn: `John Matthews`,
                                            QI2E_V7XK: `The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.`,
                                            style: { maxWidth: `100%`, width: `100%` },
                                            SzFPWGX0i: `The precision and efficiency they demonstrated made the entire process effortless. I highly recommend them for any technical project.`,
                                            tUrrVs_VX: `The level of professionalism and commitment to quality was exceptional. Every detail was meticulously handled, making our collaboration stress-free.`,
                                            variant: Z(`TSrBstCza`),
                                            width: `100%`,
                                            X4gLdF6fY: `Product Designer`,
                                            Ydtgst8YJ: `Emily Carter`,
                                            Z023RuVYP: `Ethan Brooks`,
                                            ZXEDRpSP1: `Liam Thompson`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ g(`div`, {
                                    className: `framer-160qs1h`,
                                    "data-framer-name": `Content`,
                                    children: [
                                      /*#__PURE__*/ g(`div`, {
                                        className: `framer-b98yor`,
                                        "data-framer-name": `Left`,
                                        children: [
                                          /*#__PURE__*/ g(Ro, {
                                            __framer__animate: { transition: hs },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: Ss,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-235arx`,
                                            "data-framer-name": `Testimonial Image`,
                                            children: [
                                              /*#__PURE__*/ _(`div`, {
                                                className: `framer-1gt7k9q`,
                                                "data-framer-name": `Overlay`,
                                              }),
                                              /*#__PURE__*/ _(U, {
                                                breakpoint: x,
                                                overrides: {
                                                  ecJfk_H5I: {
                                                    background: {
                                                      alt: `Testimonial Image`,
                                                      fit: `fill`,
                                                      pixelHeight: 278,
                                                      pixelWidth: 524,
                                                      sizes: `calc(min(max(${l?.width || `100vw`}, 1px), 1880px) - 32px)`,
                                                      src: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp`,
                                                      srcSet: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA.webp 512w,../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp 524w`,
                                                    },
                                                  },
                                                  V9c8RUPbD: {
                                                    background: {
                                                      alt: `Testimonial Image`,
                                                      fit: `fill`,
                                                      pixelHeight: 278,
                                                      pixelWidth: 524,
                                                      sizes: `max((min(max(${l?.width || `100vw`}, 1px), 1880px) - 80px) / 2, 50px)`,
                                                      src: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp`,
                                                      srcSet: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA.webp 512w,../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp 524w`,
                                                    },
                                                  },
                                                },
                                                children: /*#__PURE__*/ _(L, {
                                                  background: {
                                                    alt: `Testimonial Image`,
                                                    fit: `fill`,
                                                    pixelHeight: 278,
                                                    pixelWidth: 524,
                                                    sizes: `max((max((min(max(${l?.width || `100vw`}, 1px), 1880px) - 80px) / 2, 1px) - 20px) / 2, 1px)`,
                                                    src: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp`,
                                                    srcSet: `../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA.webp 512w,../../assets/images/ODZEjYwyIfvC94vWt4y8MLWCcWA-e8acf8.webp 524w`,
                                                  },
                                                  className: `framer-ic8s6o`,
                                                }),
                                              }),
                                              /*#__PURE__*/ g(`div`, {
                                                className: `framer-ireh2z`,
                                                "data-framer-name": `Info`,
                                                children: [
                                                  /*#__PURE__*/ _(M, {
                                                    __fromCanvasComponent: !0,
                                                    children: /*#__PURE__*/ _(i, {
                                                      children: /*#__PURE__*/ _(`p`, {
                                                        className: `framer-styles-preset-15frtqy`,
                                                        "data-styles-preset": `P89o9sRK1`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                        },
                                                        children: `// 2005-2K26 //`,
                                                      }),
                                                    }),
                                                    className: `framer-17fp2hk`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  /*#__PURE__*/ _(L, {
                                                    background: {
                                                      alt: `Brand Logo`,
                                                      fit: `fit`,
                                                      pixelHeight: 23,
                                                      pixelWidth: 182,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `138px`,
                                                      src: `../../assets/images/AuQv3uSGymx5ndcnUbStUXjOHr8.svg`,
                                                    },
                                                    className: `framer-1x38204`,
                                                    fitImageDimension: `height`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /*#__PURE__*/ g(Ro, {
                                            __framer__animate: { transition: _s },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Q,
                                            __framer__exit: Cs,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-c4u56o`,
                                            "data-framer-name": `Counter Card`,
                                            children: [
                                              /*#__PURE__*/ g(`div`, {
                                                className: `framer-1rpvgli`,
                                                "data-framer-name": `Left`,
                                                children: [
                                                  /*#__PURE__*/ _(R, {
                                                    children: /*#__PURE__*/ _(I, {
                                                      className: `framer-h9kgkp-container`,
                                                      isAuthoredByUser: !0,
                                                      nodeId: `AxV12JIVf`,
                                                      scopeId: `augiA20Il`,
                                                      children: /*#__PURE__*/ _(He, {
                                                        animation: {
                                                          replay: !0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0.45,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            type: `tween`,
                                                          },
                                                          trigger: `layerInView`,
                                                        },
                                                        commas: !0,
                                                        decimals: 0,
                                                        display: {
                                                          monospace: !1,
                                                          slashedZeros: !1,
                                                        },
                                                        end: 98,
                                                        font: {
                                                          fontFamily: `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                          fontSize: `42px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 600,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        fontColor: {
                                                          angle: 180,
                                                          color: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                          endColor: `rgb(255, 255, 255)`,
                                                          mode: `solid`,
                                                          startColor: `rgb(0, 0, 0)`,
                                                        },
                                                        height: `100%`,
                                                        id: `AxV12JIVf`,
                                                        layoutId: `AxV12JIVf`,
                                                        prefix: ``,
                                                        start: 0,
                                                        style: { width: `100%` },
                                                        suffix: `%`,
                                                        textSelect: !0,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  k() &&
                                                    /*#__PURE__*/ _(M, {
                                                      __fromCanvasComponent: !0,
                                                      children: /*#__PURE__*/ _(i, {
                                                        children: /*#__PURE__*/ _(`p`, {
                                                          className: `framer-styles-preset-gf9yid`,
                                                          "data-styles-preset": `XorWCRDBg`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                          },
                                                          children: `On-Time delivery rate`,
                                                        }),
                                                      }),
                                                      className: `framer-1r8bwq4 hidden-1ewydtq`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  A() &&
                                                    /*#__PURE__*/ _(M, {
                                                      __fromCanvasComponent: !0,
                                                      children: /*#__PURE__*/ _(i, {
                                                        children: /*#__PURE__*/ _(`p`, {
                                                          className: `framer-styles-preset-gf9yid`,
                                                          "data-styles-preset": `XorWCRDBg`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                          },
                                                          children: `On-Time delivery rate`,
                                                        }),
                                                      }),
                                                      className: `framer-1d59d0i hidden-72rtr7 hidden-gfjczm`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                ],
                                              }),
                                              /*#__PURE__*/ g(`div`, {
                                                className: `framer-1d1fwye`,
                                                "data-framer-name": `Right`,
                                                children: [
                                                  /*#__PURE__*/ _(R, {
                                                    children: /*#__PURE__*/ _(I, {
                                                      className: `framer-1ne1zn4-container`,
                                                      isAuthoredByUser: !0,
                                                      nodeId: `ieWyEsigK`,
                                                      scopeId: `augiA20Il`,
                                                      children: /*#__PURE__*/ _(He, {
                                                        animation: {
                                                          replay: !0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0.45,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            type: `tween`,
                                                          },
                                                          trigger: `layerInView`,
                                                        },
                                                        commas: !0,
                                                        decimals: 0,
                                                        display: {
                                                          monospace: !1,
                                                          slashedZeros: !1,
                                                        },
                                                        end: 50,
                                                        font: {
                                                          fontFamily: `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                          fontSize: `42px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 600,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        fontColor: {
                                                          angle: 180,
                                                          color: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                          endColor: `rgb(255, 255, 255)`,
                                                          mode: `solid`,
                                                          startColor: `rgb(0, 0, 0)`,
                                                        },
                                                        height: `100%`,
                                                        id: `ieWyEsigK`,
                                                        layoutId: `ieWyEsigK`,
                                                        prefix: ``,
                                                        start: 0,
                                                        style: { width: `100%` },
                                                        suffix: `+`,
                                                        textSelect: !0,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  /*#__PURE__*/ _(M, {
                                                    __fromCanvasComponent: !0,
                                                    children: /*#__PURE__*/ _(i, {
                                                      children: /*#__PURE__*/ _(`p`, {
                                                        className: `framer-styles-preset-gf9yid`,
                                                        "data-styles-preset": `XorWCRDBg`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                        },
                                                        children: `Skilled professionals`,
                                                      }),
                                                    }),
                                                    className: `framer-17zd5up`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ _(`div`, {
                                        className: `framer-1vkw957`,
                                        "data-framer-name": `Right`,
                                        children: /*#__PURE__*/ g(Ro, {
                                          __framer__animate: { transition: Es },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: Ds,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1xdpl01`,
                                          "data-framer-name": `Support Info`,
                                          children: [
                                            /*#__PURE__*/ _(Ho, {
                                              __framer__animate: { transition: Os },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: ks,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                pixelHeight: 51,
                                                pixelWidth: 61,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `60px`,
                                                src: `../../assets/images/FGYb0twhclDCcsFEJAwhaibZnNE.svg`,
                                              },
                                              className: `framer-7eo9ga`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                            }),
                                            /*#__PURE__*/ g(Ro, {
                                              __framer__animate: { transition: As },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Q,
                                              __framer__exit: js,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1lqs3mf`,
                                              "data-framer-name": `Content`,
                                              children: [
                                                /*#__PURE__*/ _(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ _(i, {
                                                    children: /*#__PURE__*/ _(`h4`, {
                                                      className: `framer-styles-preset-1f8or04`,
                                                      "data-styles-preset": `GzMbxD0G0`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                      },
                                                      children: `Need help choosing the right product?`,
                                                    }),
                                                  }),
                                                  className: `framer-117vz54`,
                                                  "data-framer-name": `Title`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ _(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ _(i, {
                                                    children: /*#__PURE__*/ _(`p`, {
                                                      className: `framer-styles-preset-gf9yid`,
                                                      "data-styles-preset": `XorWCRDBg`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                      },
                                                      children: `Always ready with guidance, product details, and after-sales support.`,
                                                    }),
                                                  }),
                                                  className: `framer-xqemak`,
                                                  "data-framer-name": `Description`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ _(F, {
                                              links: [
                                                {
                                                  href: { webPageId: `UUF_p9mVZ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `UUF_p9mVZ` },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: { webPageId: `UUF_p9mVZ` },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (e) =>
                                                /*#__PURE__*/ _(R, {
                                                  height: 52,
                                                  children: /*#__PURE__*/ _(Io, {
                                                    __framer__animate: { transition: Zs },
                                                    __framer__animateOnce: !0,
                                                    __framer__enter: Q,
                                                    __framer__exit: Qs,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-1mdopqx-container`,
                                                    nodeId: `w5wLjtNFE`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: /*#__PURE__*/ _(U, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        ecJfk_H5I: {
                                                          gr8i9ifqK: e[2],
                                                          variant: Z(`N7uhFy2RI`),
                                                        },
                                                        V9c8RUPbD: {
                                                          gr8i9ifqK: e[1],
                                                          variant: Z(`N7uhFy2RI`),
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ _(G, {
                                                        gr8i9ifqK: e[0],
                                                        height: `100%`,
                                                        id: `w5wLjtNFE`,
                                                        layoutId: `w5wLjtNFE`,
                                                        LkRCOsI08: `Contact Support`,
                                                        variant: Z(`pWspeyDyb`),
                                                        width: `100%`,
                                                        xgHJht2Sv: !1,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                            /*#__PURE__*/ _(L, {
                                              background: {
                                                alt: `Shadow Image`,
                                                fit: `fit`,
                                                pixelHeight: 401,
                                                pixelWidth: 401,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `232px`,
                                                src: `../../assets/images/l71ppjhZwGKbKAI3hXw1jc50PBw.svg`,
                                              },
                                              className: `framer-d98a0m`,
                                              "data-framer-name": `Shadow`,
                                              fitImageDimension: `height`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ _(`section`, {
                          className: `framer-1ndwbvg`,
                          "data-framer-name": `Blog`,
                          children: /*#__PURE__*/ g(`div`, {
                            className: `framer-15kxlw2`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ g(`div`, {
                                className: `framer-1jtagaf`,
                                "data-framer-name": `Top`,
                                children: [
                                  /*#__PURE__*/ g(`div`, {
                                    className: `framer-1dx5qdn`,
                                    "data-framer-name": `Title/Badge`,
                                    children: [
                                      /*#__PURE__*/ _(R, {
                                        height: 33,
                                        children: /*#__PURE__*/ _(Io, {
                                          __framer__animate: { transition: ss },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: bs,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-11i2fpr-container`,
                                          nodeId: `G8QqAQDlX`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ _(gt, {
                                            height: `100%`,
                                            id: `G8QqAQDlX`,
                                            layoutId: `G8QqAQDlX`,
                                            RX1q43PHo: `Insights & Article`,
                                            variant: Z(`hi1tTl8yF`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ _(Fo, {
                                        __framer__animate: { transition: us },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__exit: xs,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: /*#__PURE__*/ _(i, {
                                          children: /*#__PURE__*/ g(`h2`, {
                                            className: `framer-styles-preset-2r53jr`,
                                            "data-styles-preset": `v03SSkN8P`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                            },
                                            children: [
                                              `Latest from our `,
                                              /*#__PURE__*/ _(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                },
                                                children: `blog`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-11cb9q3`,
                                        "data-framer-name": `Title`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ _(F, {
                                    links: [
                                      {
                                        href: { webPageId: `Jy642OCMC` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Jy642OCMC` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Jy642OCMC` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ _(R, {
                                        height: 52,
                                        children: /*#__PURE__*/ _(Io, {
                                          __framer__animate: { transition: fs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: ys,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1mabagl-container`,
                                          nodeId: `NXCpoyUUH`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ _(U, {
                                            breakpoint: x,
                                            overrides: {
                                              ecJfk_H5I: {
                                                gr8i9ifqK: e[2],
                                                variant: Z(`oP3WJd3dc`),
                                              },
                                              V9c8RUPbD: {
                                                gr8i9ifqK: e[1],
                                                variant: Z(`oP3WJd3dc`),
                                              },
                                            },
                                            children: /*#__PURE__*/ _(G, {
                                              gr8i9ifqK: e[0],
                                              height: `100%`,
                                              id: `NXCpoyUUH`,
                                              layoutId: `NXCpoyUUH`,
                                              LkRCOsI08: `View all blogs`,
                                              variant: Z(`J5IGQfKo3`),
                                              width: `100%`,
                                              xgHJht2Sv: !1,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ _(`div`, {
                                className: `framer-1o2e1qp`,
                                "data-framer-name": `Bottom`,
                                children: /*#__PURE__*/ _(`div`, {
                                  className: `framer-1ji74g7`,
                                  children: /*#__PURE__*/ _(xe, {
                                    children: /*#__PURE__*/ _(Fs, {
                                      query: ec(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ _(p, {
                                          children: e?.map(
                                            (
                                              { b0IRHKgVb: e, CqxXSwKeM: t, id: n, je6JvlZZ8: r },
                                              i
                                            ) => (
                                              (e ??= ``),
                                              (r ??= ``),
                                              /*#__PURE__*/ _(
                                                E,
                                                {
                                                  id: `WT8cChdH7-${n}`,
                                                  children: /*#__PURE__*/ _(Ce.Provider, {
                                                    value: { je6JvlZZ8: r },
                                                    children: /*#__PURE__*/ _(`div`, {
                                                      className: `framer-3cvssi`,
                                                      children: /*#__PURE__*/ _(F, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { je6JvlZZ8: r },
                                                              webPageId: `qXUyfUzHH`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { je6JvlZZ8: r },
                                                              webPageId: `qXUyfUzHH`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { je6JvlZZ8: r },
                                                              webPageId: `qXUyfUzHH`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (n) =>
                                                          /*#__PURE__*/ _(U, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              ecJfk_H5I: {
                                                                height: 553,
                                                                width: `max(max(max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 32px, 1px), 50px), 1px)`,
                                                              },
                                                            },
                                                            children: /*#__PURE__*/ _(R, {
                                                              height: 0,
                                                              width: `max(max((max(min(max(${l?.width || `100vw`}, 1px), 1360px) - 60px, 1px) - 60px) / 3, 50px), 1px)`,
                                                              children: /*#__PURE__*/ _(Io, {
                                                                __framer__animate: {
                                                                  transition: $s(ss, i * 0.1),
                                                                },
                                                                __framer__animateOnce: !0,
                                                                __framer__enter: Q,
                                                                __framer__exit: bs,
                                                                __framer__styleAppearEffectEnabled:
                                                                  !0,
                                                                __framer__threshold: 0,
                                                                __perspectiveFX: !1,
                                                                __targetOpacity: 1,
                                                                className: `framer-6irung-container`,
                                                                nodeId: `cwcfyj9Qp`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `augiA20Il`,
                                                                children: /*#__PURE__*/ _(U, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    ecJfk_H5I: {
                                                                      GoiPb5LP9: n[2],
                                                                      style: { width: `100%` },
                                                                      variant: Z(`hWM89qj0G`),
                                                                    },
                                                                    V9c8RUPbD: {
                                                                      GoiPb5LP9: n[1],
                                                                      variant: Z(`hWM89qj0G`),
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ _(Rr, {
                                                                    GoiPb5LP9: n[0],
                                                                    height: `100%`,
                                                                    id: `cwcfyj9Qp`,
                                                                    jn6f0OKFO: e,
                                                                    layoutId: `cwcfyj9Qp`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    U8DtyHtUS: Ns(t),
                                                                    variant: Z(`NEnlwlRlK`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                n
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _(R, {
                      children: /*#__PURE__*/ _(I, {
                        className: `framer-vx6hsw-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: T,
                        nodeId: `F59bN1TZd`,
                        scopeId: `augiA20Il`,
                        children: /*#__PURE__*/ _(We, {
                          height: `100%`,
                          id: `F59bN1TZd`,
                          intensity: 25,
                          layoutId: `F59bN1TZd`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ _(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ac = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kYqNX.framer-lux5qc, .framer-kYqNX .framer-lux5qc { display: block; }`,
        `.framer-kYqNX.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-kYqNX .framer-vmlhsw, .framer-kYqNX .framer-105e3re { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1u51rf3 { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-eucpn4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; max-width: 1880px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kYqNX .framer-carzw6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-12cpr2a { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-bzotf3-container, .framer-kYqNX .framer-1p4ykg8-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kYqNX .framer-jqhpro { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kYqNX .framer-vn8858 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 400px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-147b85o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kYqNX .framer-1hwx51r, .framer-kYqNX .framer-1dpooo4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kYqNX .framer-jc53wk, .framer-kYqNX .framer-1w3hnhg, .framer-kYqNX .framer-yg964b, .framer-kYqNX .framer-1ewxh3m, .framer-kYqNX .framer-108epe0, .framer-kYqNX .framer-1lbk2ez, .framer-kYqNX .framer-8738b5, .framer-kYqNX .framer-1rievit, .framer-kYqNX .framer-rp4xlm, .framer-kYqNX .framer-11cb9q3 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1ilib8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kYqNX .framer-1dhe386, .framer-kYqNX .framer-5kwgms { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kYqNX .framer-1jyqp51-container, .framer-kYqNX .framer-segap6-container, .framer-kYqNX .framer-8y5fwl-container, .framer-kYqNX .framer-2nlw3i-container, .framer-kYqNX .framer-1ok8beb-container, .framer-kYqNX .framer-gyhdp9-container, .framer-kYqNX .framer-4gdpz7-container, .framer-kYqNX .framer-m1q0dm-container, .framer-kYqNX .framer-y2e09m-container, .framer-kYqNX .framer-lv1pcr-container, .framer-kYqNX .framer-gi0sdt-container, .framer-kYqNX .framer-1fjeunk-container, .framer-kYqNX .framer-1c9i7x2-container, .framer-kYqNX .framer-1g3omv0-container, .framer-kYqNX .framer-cevtwj-container, .framer-kYqNX .framer-fypnu3-container, .framer-kYqNX .framer-17emh5c-container, .framer-kYqNX .framer-1ymrmay-container, .framer-kYqNX .framer-11xxbvi-container, .framer-kYqNX .framer-1u4d7kk-container, .framer-kYqNX .framer-oa8fph-container, .framer-kYqNX .framer-1dq9y62-container, .framer-kYqNX .framer-1mdopqx-container, .framer-kYqNX .framer-11i2fpr-container, .framer-kYqNX .framer-1mabagl-container, .framer-kYqNX .framer-vx6hsw-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-kYqNX .framer-1cbnq60 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px 30px 0px 30px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; }`,
        `.framer-kYqNX .framer-103bnyl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1600px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-kYqNX .framer-yimy06, .framer-kYqNX .framer-48fhju, .framer-kYqNX .framer-pnr1hz, .framer-kYqNX .framer-139t8uu, .framer-kYqNX .framer-1e55581, .framer-kYqNX .framer-1ho1l7, .framer-kYqNX .framer-s13ie4, .framer-kYqNX .framer-16ptz1e, .framer-kYqNX .framer-1fyqe6m, .framer-kYqNX .framer-5q1ve8, .framer-kYqNX .framer-1te0z64, .framer-kYqNX .framer-14lsd7j, .framer-kYqNX .framer-1twpzvy, .framer-kYqNX .framer-1r46f6n, .framer-kYqNX .framer-g0lk6n { --border-bottom-width: 1px; --border-color: var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, #191919); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; opacity: 0.12; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-12sz93g-container, .framer-kYqNX .framer-1j75b1i-container, .framer-kYqNX .framer-1ke9s5w-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-kYqNX .framer-pstkpi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1fuhlt9-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100.46875% / 2); width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1i1fdp5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 3; }`,
        `.framer-kYqNX .framer-1p7mgi0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 500px; overflow: visible; padding: 300px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-3kgzg6-container { flex: none; height: auto; max-width: 250px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1ri1odl { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1j1gpev { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kYqNX .framer-1pexz6o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kYqNX .framer-1hnd7cz { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-btkbjl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1t88ijs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 10px 0px 0px; position: relative; width: min-content; }`,
        `.framer-kYqNX .framer-fu5vmo-container, .framer-kYqNX .framer-czg48l-container, .framer-kYqNX .framer-s88jy0-container, .framer-kYqNX .framer-zcsros-container, .framer-kYqNX .framer-1l5x3l0-container, .framer-kYqNX .framer-10hpy5y-container, .framer-kYqNX .framer-19whix6-container, .framer-kYqNX .framer-1nf6ppc-container, .framer-kYqNX .framer-ok4qf-container, .framer-kYqNX .framer-1kheooj-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-kYqNX .framer-pxdb72 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 200px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kYqNX .framer-n6mlh1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1ary702, .framer-kYqNX .framer-1jtagaf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1qu3668 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-mx9euk { --border-bottom-width: 1px; --border-color: var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, #151515); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 430px; justify-content: center; overflow: visible; padding: 70px 30px 70px 30px; position: relative; width: 430px; }`,
        `.framer-kYqNX .framer-g77xq8, .framer-kYqNX .framer-163ddmt { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 94px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kYqNX .framer-nh6ocy, .framer-kYqNX .framer-wjd73x, .framer-kYqNX .framer-60n2uu, .framer-kYqNX .framer-bpatlz, .framer-kYqNX .framer-1vpx60d { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kYqNX .framer-1mgk4br, .framer-kYqNX .framer-ffo7yh, .framer-kYqNX .framer-1xr6ood, .framer-kYqNX .framer-5nridj, .framer-kYqNX .framer-2p9p5l, .framer-kYqNX .framer-1r8bwq4, .framer-kYqNX .framer-1d59d0i, .framer-kYqNX .framer-17zd5up { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-nhw6iw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-13sht8f, .framer-kYqNX .framer-hotfb5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-kYqNX .framer-cp4ey8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-kYqNX .framer-1ubr94r { align-content: center; align-items: center; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 430px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 430px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kYqNX .framer-41hx6f { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kYqNX .framer-1luk9d5 { --border-bottom-width: 1px; --border-color: var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, #f66234); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, #c8370b) 0%, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 100%); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 430px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 70px 30px 70px 30px; position: relative; width: 430px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kYqNX .framer-1rk9172 { -webkit-user-select: none; bottom: -1px; flex: none; height: 90px; left: 50%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; transform: translateX(-50%); user-select: none; width: auto; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-kYqNX .framer-17t0rn4, .framer-kYqNX .framer-1blo66z, .framer-kYqNX .framer-mihuor { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px 30px 0px 30px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; }`,
        `.framer-kYqNX .framer-1neivhm, .framer-kYqNX .framer-1hfzguf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-kYqNX .framer-1488cms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-mfke0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1880px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1r2rk8u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-knlv5f, .framer-kYqNX .framer-1dx5qdn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1gwb5ga { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-19uzsdt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-157djwm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px 30px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 100px; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-hy24f, .framer-kYqNX .framer-101wqtz, .framer-kYqNX .framer-1l8k3f5, .framer-kYqNX .framer-ky45eq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1vvijkq-container, .framer-kYqNX .framer-fjrvse-container, .framer-kYqNX .framer-1mlf0zu-container, .framer-kYqNX .framer-2qicb4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,
        `.framer-kYqNX .framer-1eae6fj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px 30px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 220px; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1x67vrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px 30px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 340px; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-btjull { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px 30px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 460px; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1ftznop { flex: none; height: 400px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-mrdxho-container, .framer-kYqNX .framer-lkvk6m-container, .framer-kYqNX .framer-18asjo-container, .framer-kYqNX .framer-kvr4k4-container, .framer-kYqNX .framer-bwl3d-container, .framer-kYqNX .framer-1wb9plz-container, .framer-kYqNX .framer-a9x14m-container, .framer-kYqNX .framer-1c9jch7-container, .framer-kYqNX .framer-geinv7-container, .framer-kYqNX .framer-h9kgkp-container, .framer-kYqNX .framer-1ne1zn4-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-18fz3xm { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 371px; overflow: visible; padding: 0px; pointer-events: none; position: relative; user-select: none; width: 100%; }`,
        `.framer-kYqNX .framer-14diyer { -webkit-filter: blur(30px); bottom: -110px; filter: blur(30px); flex: none; left: -100px; overflow: visible; position: absolute; right: -100px; top: -64px; z-index: 1; }`,
        `.framer-kYqNX .framer-fksdu4 { align-content: center; align-items: center; background-color: var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, #191919); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-9vgxvy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1eg3bbb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-x78bqz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1sxt1ag { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 380px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1m8d1lk { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-ksd5sk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-1so711d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1880px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-9558q9 { display: grid; flex: none; gap: 0px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-q32052-container, .framer-kYqNX .framer-ri2mtv-container, .framer-kYqNX .framer-1jcdmf2-container, .framer-kYqNX .framer-1wg1e9h-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-fiyrp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-pm4y9d-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1e7f2sr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 0; }`,
        `.framer-kYqNX .framer-lvuppf, .framer-kYqNX .framer-mh2c9p, .framer-kYqNX .framer-101tmof, .framer-kYqNX .framer-1ekxoji, .framer-kYqNX .framer-1wo6xe8 { --border-bottom-width: 1px; --border-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; opacity: 0.15; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-19x11f6 { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-13v6e3a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-kYqNX .framer-1xlzbcy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-sow2sm { -webkit-user-select: none; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: auto; left: 80px; opacity: 0.9; overflow: visible; position: absolute; top: 60px; user-select: none; width: 110px; z-index: 1; }`,
        `.framer-kYqNX .framer-kpz6eo { -webkit-user-select: none; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: auto; opacity: 0.9; overflow: visible; position: absolute; right: 60px; top: 80px; user-select: none; width: 130px; z-index: 1; }`,
        `.framer-kYqNX .framer-1wtemke { -webkit-user-select: none; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: auto; left: 30px; opacity: 0.9; overflow: visible; position: absolute; top: 206px; user-select: none; width: 100px; z-index: 1; }`,
        `.framer-kYqNX .framer-1ppm0zu { -webkit-user-select: none; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; bottom: 30px; flex: none; height: auto; opacity: 0.9; overflow: visible; position: absolute; right: 150px; user-select: none; width: 100px; z-index: 1; }`,
        `.framer-kYqNX .framer-vm8mnq { -webkit-user-select: none; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; bottom: 40px; flex: none; height: auto; left: 60px; opacity: 0.9; overflow: visible; position: absolute; user-select: none; width: 120px; z-index: 1; }`,
        `.framer-kYqNX .framer-7zpxri { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-ifktsj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-kYqNX .framer-1an9v5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-13bf870 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-st1i50-container { flex: none; height: 324px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-11q6kml { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 330px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1360px; }`,
        `.framer-kYqNX .framer-1vlog02, .framer-kYqNX .framer-7ca0oa, .framer-kYqNX .framer-gceet3, .framer-kYqNX .framer-12o8c74 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1vht6jl-container { flex: 1 0 0px; height: 330px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1xculcj, .framer-kYqNX .framer-1ebgsoi, .framer-kYqNX .framer-5lfmgx { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 330px; justify-content: center; padding: 0px; position: relative; width: 1360px; }`,
        `.framer-kYqNX .framer-rh5jgl-container { flex: none; height: 324px; position: relative; width: 1360px; }`,
        `.framer-kYqNX .framer-2k8gtm-container, .framer-kYqNX .framer-1u0n2f9-container { flex: 1 0 0px; height: 324px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1wedl7s { --border-bottom-width: 0px; --border-color: var(--token-41dbab4b-4d8a-40dc-a562-4b7709d86f82, rgba(92, 92, 92, 0.2)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-13lsdsg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-3pnntc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 0px; position: relative; width: min-content; }`,
        `.framer-kYqNX .framer-16a08qh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1343r7 { display: grid; flex: none; gap: 40px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1fsmtj9 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-15n658r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-etrmyl { align-content: center; align-items: center; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; cursor: ew-resize; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-8ihoz8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 140px 0px 140px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-gtlo6b { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-c7mbdk { --border-bottom-width: 1px; --border-color: var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(5px); align-content: flex-start; align-items: flex-start; backdrop-filter: blur(5px); background-color: var(--token-5193ac17-06d0-41c0-8684-9ecb585b5e26, rgba(21, 21, 21, 0.6)); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 540px; overflow: visible; padding: 50px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-16sgi5w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1ud8hp3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-50gmf4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kYqNX .framer-10cbhxq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-167hgew { flex: none; height: auto; overflow: visible; position: relative; width: 96px; }`,
        `.framer-kYqNX .framer-7dwg7w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kYqNX .framer-7k0ab7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1xqe2zl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1880px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-kztx58 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-sdkc21 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-affhqb-container { flex: 1 0 0px; height: auto; max-width: 600px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-160qs1h { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-b98yor { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-235arx { align-content: center; align-items: center; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kYqNX .framer-1gt7k9q { -webkit-user-select: none; background-color: var(--token-5193ac17-06d0-41c0-8684-9ecb585b5e26, rgba(21, 21, 21, 0.6)); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: 100%; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 2; }`,
        `.framer-kYqNX .framer-ic8s6o { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 100% / 2); z-index: 1; }`,
        `.framer-kYqNX .framer-ireh2z { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-kYqNX .framer-17fp2hk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-kYqNX .framer-1x38204 { flex: none; height: auto; overflow: visible; position: relative; width: 138px; z-index: 1; }`,
        `.framer-kYqNX .framer-c4u56o { align-content: flex-start; align-items: flex-start; background-color: var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, #c8370b); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kYqNX .framer-1rpvgli, .framer-kYqNX .framer-1d1fwye { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1vkw957 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1xdpl01 { align-content: flex-start; align-items: flex-start; background-color: var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, #151515); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-7eo9ga { flex: none; height: auto; overflow: visible; position: relative; width: 60px; }`,
        `.framer-kYqNX .framer-1lqs3mf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-117vz54, .framer-kYqNX .framer-xqemak { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-kYqNX .framer-d98a0m { -webkit-filter: blur(80px); -webkit-user-select: none; filter: blur(80px); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: -61px; top: -75px; user-select: none; width: 232px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-kYqNX .framer-1ndwbvg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-15kxlw2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-1o2e1qp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-1ji74g7 { display: grid; flex: 1 0 0px; gap: 30px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kYqNX .framer-3cvssi { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kYqNX .framer-6irung-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        ...Mt,
        ...ft,
        ...it,
        ...Bt,
        ...ct,
        ...et,
        ...It,
        `.framer-kYqNX[data-border="true"]::after, .framer-kYqNX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kYqNX.framer-72rtr7 { width: 810px; } .framer-kYqNX .framer-1u51rf3 { padding: 160px 0px 50px 0px; } .framer-kYqNX .framer-carzw6 { gap: 30px; } .framer-kYqNX .framer-pstkpi, .framer-kYqNX .framer-1ri1odl, .framer-kYqNX .framer-1488cms, .framer-kYqNX .framer-19x11f6, .framer-kYqNX .framer-7zpxri, .framer-kYqNX .framer-7k0ab7 { padding: 140px 0px 140px 0px; } .framer-kYqNX .framer-1p7mgi0 { padding: 100px 0px 0px 0px; } .framer-kYqNX .framer-1pexz6o { gap: 60px; } .framer-kYqNX .framer-mx9euk, .framer-kYqNX .framer-1ubr94r { height: 350px; width: 350px; } .framer-kYqNX .framer-1luk9d5 { height: 350px; padding: 60px 20px 60px 20px; width: 350px; } .framer-kYqNX .framer-1gwb5ga { flex: none; width: min-content; } .framer-kYqNX .framer-157djwm, .framer-kYqNX .framer-1eae6fj, .framer-kYqNX .framer-1x67vrh, .framer-kYqNX .framer-btjull { position: relative; top: unset; } .framer-kYqNX .framer-18fz3xm { min-height: 230px; } .framer-kYqNX .framer-14diyer { bottom: -88px; left: -80px; right: -80px; top: -40px; } .framer-kYqNX .framer-fksdu4 { padding: 120px 0px 120px 0px; } .framer-kYqNX .framer-1sxt1ag { max-width: 370px; } .framer-kYqNX .framer-ksd5sk { padding: 120px 0px 0px 0px; } .framer-kYqNX .framer-9558q9 { gap: 40px 30px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-kYqNX .framer-1xlzbcy { max-width: unset; order: 0; } .framer-kYqNX .framer-lkvk6m-container, .framer-kYqNX .framer-1343r7 { order: 1; } .framer-kYqNX .framer-1an9v5g { max-width: 600px; order: 0; } .framer-kYqNX .framer-13bf870 { order: 2; } .framer-kYqNX .framer-sdkc21 { flex-direction: column; } .framer-kYqNX .framer-affhqb-container { flex: none; max-width: unset; width: 100%; } .framer-kYqNX .framer-160qs1h { align-content: unset; align-items: unset; align-self: unset; display: grid; flex: none; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; width: 100%; } .framer-kYqNX .framer-b98yor, .framer-kYqNX .framer-1vkw957 { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-kYqNX .framer-c4u56o { flex: none; height: min-content; } .framer-kYqNX .framer-1xdpl01 { flex: none; height: min-content; min-height: 100%; } .framer-kYqNX .framer-1lqs3mf { padding: 50px 0px 50px 0px; } .framer-kYqNX .framer-1ndwbvg { padding: 0px 0px 140px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-kYqNX.framer-72rtr7 { width: 390px; } .framer-kYqNX .framer-1u51rf3 { padding: 100px 0px 40px 0px; } .framer-kYqNX .framer-eucpn4 { gap: 80px; padding: 0px 16px 0px 16px; } .framer-kYqNX .framer-carzw6 { flex-direction: column; gap: 20px; } .framer-kYqNX .framer-12cpr2a, .framer-kYqNX .framer-vn8858, .framer-kYqNX .framer-n6mlh1, .framer-kYqNX .framer-knlv5f, .framer-kYqNX .framer-13lsdsg, .framer-kYqNX .framer-10cbhxq, .framer-kYqNX .framer-1dx5qdn { flex: none; width: 100%; } .framer-kYqNX .framer-147b85o, .framer-kYqNX .framer-1lqs3mf { gap: 16px; } .framer-kYqNX .framer-1cbnq60, .framer-kYqNX .framer-17t0rn4, .framer-kYqNX .framer-1so711d, .framer-kYqNX .framer-1blo66z, .framer-kYqNX .framer-mihuor, .framer-kYqNX .framer-gtlo6b { padding: 0px 16px 0px 16px; } .framer-kYqNX .framer-pstkpi, .framer-kYqNX .framer-fksdu4, .framer-kYqNX .framer-19x11f6, .framer-kYqNX .framer-7zpxri, .framer-kYqNX .framer-8ihoz8, .framer-kYqNX .framer-7k0ab7 { padding: 100px 0px 100px 0px; } .framer-kYqNX .framer-1p7mgi0 { padding: 80px 0px 0px 0px; } .framer-kYqNX .framer-1ri1odl { gap: 80px; padding: 100px 0px 100px 0px; } .framer-kYqNX .framer-1j1gpev, .framer-kYqNX .framer-mfke0b, .framer-kYqNX .framer-9vgxvy, .framer-kYqNX .framer-13v6e3a, .framer-kYqNX .framer-ifktsj, .framer-kYqNX .framer-1xqe2zl, .framer-kYqNX .framer-15kxlw2 { gap: 40px; padding: 0px 16px 0px 16px; } .framer-kYqNX .framer-1pexz6o { flex-direction: column; gap: 40px; } .framer-kYqNX .framer-1hnd7cz { flex: none; gap: 16px; width: 100%; } .framer-kYqNX .framer-pxdb72 { max-width: unset; } .framer-kYqNX .framer-1ary702, .framer-kYqNX .framer-1wedl7s, .framer-kYqNX .framer-1jtagaf { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-kYqNX .framer-mx9euk, .framer-kYqNX .framer-1ubr94r { height: 300px; max-width: 300px; width: 300px; } .framer-kYqNX .framer-1luk9d5 { height: 300px; max-width: 300px; padding: 60px 20px 60px 20px; width: 300px; } .framer-kYqNX .framer-1rk9172 { height: 65px; } .framer-kYqNX .framer-1488cms { gap: 40px; padding: 100px 0px 100px 0px; } .framer-kYqNX .framer-1r2rk8u { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 40px; } .framer-kYqNX .framer-1gwb5ga { flex: none; justify-content: flex-start; width: 100%; } .framer-kYqNX .framer-157djwm, .framer-kYqNX .framer-1eae6fj, .framer-kYqNX .framer-1x67vrh, .framer-kYqNX .framer-btjull { position: relative; top: unset; } .framer-kYqNX .framer-1mlf0zu-container { order: 0; } .framer-kYqNX .framer-18fz3xm { min-height: 80px; } .framer-kYqNX .framer-14diyer { bottom: -83px; left: -80px; right: -80px; top: -34px; } .framer-kYqNX .framer-x78bqz { flex-direction: column; gap: 16px; justify-content: center; } .framer-kYqNX .framer-1sxt1ag { flex: none; gap: 10px; max-width: unset; width: 100%; } .framer-kYqNX .framer-ksd5sk { padding: 100px 0px 0px 0px; } .framer-kYqNX .framer-9558q9 { gap: 40px 30px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-kYqNX .framer-q32052-container, .framer-kYqNX .framer-ri2mtv-container, .framer-kYqNX .framer-1jcdmf2-container, .framer-kYqNX .framer-1wg1e9h-container { height: auto; max-width: 100%; } .framer-kYqNX .framer-fiyrp9 { padding: 40px 0px 0px 0px; } .framer-kYqNX .framer-1xlzbcy { max-width: unset; order: 0; } .framer-kYqNX .framer-lkvk6m-container { order: 1; } .framer-kYqNX .framer-1an9v5g { max-width: 600px; order: 0; } .framer-kYqNX .framer-13bf870 { order: 2; } .framer-kYqNX .framer-1343r7 { gap: 50px 30px; order: 1; } .framer-kYqNX .framer-1fjeunk-container, .framer-kYqNX .framer-1c9i7x2-container, .framer-kYqNX .framer-1g3omv0-container, .framer-kYqNX .framer-cevtwj-container, .framer-kYqNX .framer-fypnu3-container, .framer-kYqNX .framer-17emh5c-container, .framer-kYqNX .framer-1ymrmay-container, .framer-kYqNX .framer-11xxbvi-container, .framer-kYqNX .framer-1u4d7kk-container { height: 94px; } .framer-kYqNX .framer-c7mbdk { padding: 30px; } .framer-kYqNX .framer-1ud8hp3 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px 20px; } .framer-kYqNX .framer-sdkc21 { flex-direction: column; } .framer-kYqNX .framer-affhqb-container { flex: none; max-width: unset; width: 100%; } .framer-kYqNX .framer-160qs1h { align-self: unset; flex: none; flex-direction: column; height: min-content; width: 100%; } .framer-kYqNX .framer-b98yor, .framer-kYqNX .framer-1vkw957 { flex: none; height: min-content; width: 100%; } .framer-kYqNX .framer-235arx { flex: none; height: min-content; padding: 70px; } .framer-kYqNX .framer-1gt7k9q { bottom: 0px; height: unset; } .framer-kYqNX .framer-ic8s6o { top: 0px; } .framer-kYqNX .framer-c4u56o { flex: none; height: min-content; } .framer-kYqNX .framer-1xdpl01 { flex: none; gap: 30px; height: min-content; justify-content: center; } .framer-kYqNX .framer-1ndwbvg { padding: 0px 0px 100px 0px; } .framer-kYqNX .framer-1ji74g7 { gap: 30px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-kYqNX .framer-3cvssi { height: min-content; } .framer-kYqNX .framer-6irung-container { height: auto; }}`,
      ]),
      (oc = Ee(ic, ac, `framer-kYqNX`)),
      (oc.displayName = `Home`),
      (oc.defaultProps = { height: 13621, width: 1200 }),
      le(
        oc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Mona Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Mona Sans`,
                url: `../../assets/fonts/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9Y41P6zHtY.woff2`,
                weight: `600`,
              },
            ],
          },
          ...Eo,
          ...Ao,
          ...jo,
          ...Mo,
          ...No,
          ...Po,
          ...Lo,
          ...zo,
          ...Bo,
          ...Vo,
          ...Uo,
          ...Wo,
          ...Go,
          ...Ko,
          ...qo,
          ...Jo,
          ...Xo,
          ...Zo,
          ...Qo,
          ...$o,
          ...es,
          ...W(Nt),
          ...W(pt),
          ...W(at),
          ...W(Vt),
          ...W(lt),
          ...W(tt),
          ...W(Lt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (oc.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = oe.get(Ps(), n),
            i = oe.get(Is(), n),
            a = oe.get(Ls(), n),
            o = oe.get(Rs(), n),
            s = oe.get(Ks(), n),
            c = oe.get(qs(), n),
            l = oe.get(Js(), n),
            u = oe.get(Ys(), n),
            d = oe.get(Xs(), n),
            f = oe.get(ec(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            a.preload(),
            o.preload(),
            s.preload(),
            c.preload(),
            l.preload(),
            u.preload(),
            d.preload(),
            f.preload(),
            z(gt, {}, t),
            z(G, {}, t),
            z(Ii, {}, t),
            z(vt, {}, t),
            z(Be, {}, t),
            z(ei, {}, t),
            z(Ie, {}, t),
            z(Qe, {}, t),
            z(bt, {}, t),
            z(io, {}, t),
            z(Sa, {}, t),
            z(Ke, {}, t),
            z(Y, {}, t),
            z(_i, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(wo, {}, t)));
            })(),
            (async () => {
              let e = (await i.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(wo, {}, t)));
            })(),
            (async () => {
              let e = (await a.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(wo, {}, t)));
            })(),
            (async () => {
              let e = (await o.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(wo, {}, t)));
            })(),
            (async () => {
              let e = (await s.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Ba, {}, t)));
            })(),
            (async () => {
              let e = (await c.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Ba, {}, t)));
            })(),
            (async () => {
              let e = (await l.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Ba, {}, t)));
            })(),
            (async () => {
              let e = (await u.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Ba, {}, t)));
            })(),
            (async () => {
              let e = (await d.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Ba, {}, t)));
            })(),
            (async () => {
              let e = (await f.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Rr, {}, t)));
            })(),
          ]);
        },
      }),
      (sc = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerResponsiveScreen: `true`,
              framerScrollSections: `{"lGZHRSmRF":{"pattern":":lGZHRSmRF","name":"about"}}`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"V9c8RUPbD":{"layout":["fixed","auto"]},"ecJfk_H5I":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `13621`,
              framerLayoutTemplateFlowEffect: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
cc();
export { sc as __FramerMetadata__, oc as default, rs as queryParamNames };
//# sourceMappingURL=FOW8SSS_LVaw2_IZG7cBovFT5IbXvVm8zdDUsvGaPyU.qqBpXrmg.mjs.map
