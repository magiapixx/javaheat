import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as ee,
} from "./react.DfujhmXs.mjs";
import { T as u, i as te, o as d, t as f } from "./motion.BoJ_50qN.mjs";
import {
  B as p,
  C as m,
  Ct as h,
  D as g,
  E as _,
  Et as v,
  K as y,
  L as b,
  Ot as x,
  S as ne,
  _t as re,
  a as S,
  ct as ie,
  dt as ae,
  f as C,
  ft as w,
  i as T,
  k as E,
  mt as oe,
  o as D,
  u as se,
  vt as O,
  w as ce,
  wt as k,
  xt as le,
  y as A,
  z as j,
} from "./framer.DGJFnpg_.mjs";
import { c as M, g as N, h as P, l as ue, s as de, u as fe } from "./toplevel-deps.XDVeXK4X.mjs";
import { i as pe, r as me } from "./shared-lib.C0OaH8ZN.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./l__4UHlzt.74k9u9BQ.mjs";
import { n as ye, t as be } from "./q98WlWaa9.DeV4Bwei.mjs";
import { n as xe, t as F } from "./UKogvHbQu.CY3gQZfl.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./v03SSkN8P.ClDd94vB.mjs";
import { n as Ee, r as De } from "./Xs_UfQc0Y.Cq8eZf_C.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oe, ke, Ae, je, Me, L, Ne, Pe, Fe, Ie, Le, Re, ze, R;
function Be() {
  return (Be = e(() => {
    (l(),
      y(),
      f(),
      r(),
      he(),
      fe(),
      N(),
      (Oe = b(P)),
      (ke = [`JCI5tWpbL`, `aXsAzIiXA`, `cj3UnIwEr`]),
      (Ae = `framer-tlF26`),
      (je = {
        aXsAzIiXA: `framer-v-b0r735`,
        cj3UnIwEr: `framer-v-zogc8f`,
        JCI5tWpbL: `framer-v-1slm1sf`,
      }),
      (Me = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (L = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ne = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (Pe = u.create(t)),
      (Fe = { Desktop: `JCI5tWpbL`, Phone: `cj3UnIwEr`, Tablet: `aXsAzIiXA` }),
      (Ie = ({ buttonTitle: e, description: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        bWLJyVUTC: e ?? o.bWLJyVUTC ?? `Request a demo`,
        kdOJ3qLZQ: i ?? o.kdOJ3qLZQ ?? `Custom order inquiry`,
        variant: Fe[o.variant] ?? o.variant ?? `JCI5tWpbL`,
        yqSNsrHQ9:
          t ??
          o.yqSNsrHQ9 ??
          `Looking for a product we don’t offer yet? Send us your custom specifications and we will take it forward from there.`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Re = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = ee(),
          { activeLocale: l, setLocale: d } = re(),
          f = ie(),
          {
            style: g,
            className: _,
            layoutId: v,
            variant: y,
            kdOJ3qLZQ: b,
            yqSNsrHQ9: x,
            bWLJyVUTC: S,
            ...ae
          } = Ie(e),
          {
            baseVariant: w,
            classNames: oe,
            clearLoadingGesture: D,
            gestureHandlers: se,
            gestureVariant: O,
            isLoading: k,
            setGestureState: A,
            setVariant: j,
            variants: M,
          } = h({
            cycleOrder: ke,
            defaultVariant: `JCI5tWpbL`,
            ref: a,
            variant: y,
            variantClassNames: je,
          }),
          N = Le(e, M),
          ue = E(Ae, ve, de);
        return (
          le(),
          /*#__PURE__*/ s(te, {
            id: v ?? c,
            children: /*#__PURE__*/ s(Pe, {
              animate: M,
              initial: !1,
              children: /*#__PURE__*/ s(Ne, {
                value: Me,
                children: /*#__PURE__*/ s(u.div, {
                  ...ae,
                  ...se,
                  className: E(ue, `framer-1slm1sf`, _, oe),
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `JCI5tWpbL`,
                  ref: a,
                  style: { ...g },
                  ...I(
                    {
                      aXsAzIiXA: { "data-framer-name": `Tablet` },
                      cj3UnIwEr: { "data-framer-name": `Phone` },
                    },
                    w,
                    O
                  ),
                  children: /*#__PURE__*/ s(u.div, {
                    className: `framer-q7h13j`,
                    "data-framer-name": `Container`,
                    layoutDependency: N,
                    layoutId: `EcF5pRxba`,
                    style: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    children: /*#__PURE__*/ o(C, {
                      background: {
                        alt: `CTA BG`,
                        fit: `fill`,
                        loading: p((f?.y || 0) + (0 + ((f?.height || 200) - 0 - 236) / 2) + 0),
                        pixelHeight: 178,
                        pixelWidth: 1078,
                        sizes: `max(min(max(${f?.width || `100vw`}, 1px), 1100px), 1px)`,
                        src: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png`,
                        srcSet: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-90d48d.png 512w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-915c04.png 1024w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png 1078w`,
                      },
                      className: `framer-19w6t93`,
                      "data-framer-name": `Content`,
                      layoutDependency: N,
                      layoutId: `ce2BL0paq`,
                      style: {
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                      },
                      ...I(
                        {
                          cj3UnIwEr: {
                            background: {
                              alt: `CTA BG`,
                              fit: `fill`,
                              loading: p(
                                (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 308) / 2) + 0
                              ),
                              pixelHeight: 178,
                              pixelWidth: 1078,
                              sizes: `max(${f?.width || `100vw`}, 1px)`,
                              src: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png`,
                              srcSet: `../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-90d48d.png 512w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4-915c04.png 1024w,../../assets/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png 1078w`,
                            },
                          },
                        },
                        w,
                        O
                      ),
                      children: [
                        /*#__PURE__*/ o(u.div, {
                          className: `framer-1qd9l6q`,
                          "data-framer-name": `Info`,
                          layoutDependency: N,
                          layoutId: `e7lyMhuoA`,
                          children: [
                            /*#__PURE__*/ s(m, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(u.h3, {
                                  className: `framer-styles-preset-ujbs82`,
                                  "data-styles-preset": `l__4UHlzt`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                  },
                                  children: `Custom order inquiry`,
                                }),
                              }),
                              className: `framer-ut6r8p`,
                              "data-framer-name": `Title`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `YKbWPC7RY`,
                              style: {
                                "--extracted-a0htzi": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(m, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(u.p, {
                                  className: `framer-styles-preset-gf9yid`,
                                  "data-styles-preset": `XorWCRDBg`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                  },
                                  children: `Looking for a product we don’t offer yet? Send us your custom specifications and we will take it forward from there.`,
                                }),
                              }),
                              className: `framer-6dtl74`,
                              "data-framer-name": `Description`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `oJzNOTU7z`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ s(ne, {
                          links: [
                            { href: { webPageId: `UUF_p9mVZ` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `UUF_p9mVZ` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `UUF_p9mVZ` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ s(T, {
                              height: 52,
                              y: (f?.y || 0) + (0 + ((f?.height || 200) - 0 - 236) / 2) + 0 + 92,
                              ...I(
                                {
                                  cj3UnIwEr: {
                                    y:
                                      (f?.y || 0) +
                                      (0 + ((f?.height || 200) - 0 - 308) / 2) +
                                      0 +
                                      30 +
                                      196,
                                  },
                                },
                                w,
                                O
                              ),
                              children: /*#__PURE__*/ s(ce, {
                                className: `framer-13uw0jm-container`,
                                layoutDependency: N,
                                layoutId: `yh2V02gLE-container`,
                                nodeId: `yh2V02gLE`,
                                rendersWithMotion: !0,
                                scopeId: `o6wxtS524`,
                                children: /*#__PURE__*/ s(P, {
                                  gr8i9ifqK: e[0],
                                  height: `100%`,
                                  id: `yh2V02gLE`,
                                  layoutId: `yh2V02gLE`,
                                  LkRCOsI08: S,
                                  variant: L(`pWspeyDyb`),
                                  width: `100%`,
                                  xgHJht2Sv: !1,
                                  ...I(
                                    {
                                      aXsAzIiXA: { gr8i9ifqK: e[1], variant: L(`N7uhFy2RI`) },
                                      cj3UnIwEr: { gr8i9ifqK: e[2], variant: L(`N7uhFy2RI`) },
                                    },
                                    w,
                                    O
                                  ),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      })),
      (ze = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-tlF26.framer-17wbuv9, .framer-tlF26 .framer-17wbuv9 { display: block; }`,
        `.framer-tlF26.framer-1slm1sf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-tlF26 .framer-q7h13j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1100px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-tlF26 .framer-19w6t93 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1px; }`,
        `.framer-tlF26 .framer-1qd9l6q { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-tlF26 .framer-ut6r8p { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tlF26 .framer-6dtl74 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-tlF26 .framer-13uw0jm-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-tlF26.framer-v-b0r735.framer-1slm1sf { width: 810px; }`,
        `.framer-tlF26.framer-v-zogc8f.framer-1slm1sf { width: 390px; }`,
        `.framer-tlF26.framer-v-zogc8f .framer-q7h13j { max-width: unset; }`,
        `.framer-tlF26.framer-v-zogc8f .framer-19w6t93 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; }`,
        `.framer-tlF26.framer-v-zogc8f .framer-1qd9l6q { flex: none; width: 100%; }`,
        ...ge,
        ...M,
      ]),
      (R = k(Re, ze, `framer-tlF26`)),
      (R.displayName = `Product CTA`),
      (R.defaultProps = { height: 171, width: 1200 }),
      g(R, {
        variant: {
          options: [`JCI5tWpbL`, `aXsAzIiXA`, `cj3UnIwEr`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: D.Enum,
        },
        kdOJ3qLZQ: {
          defaultValue: `Custom order inquiry`,
          displayTextArea: !0,
          title: `Title`,
          type: D.String,
        },
        yqSNsrHQ9: {
          defaultValue: `Looking for a product we don’t offer yet? Send us your custom specifications and we will take it forward from there.`,
          displayTextArea: !0,
          title: `Description`,
          type: D.String,
        },
        bWLJyVUTC: {
          defaultValue: `Request a demo`,
          displayTextArea: !0,
          title: `Button Title`,
          type: D.String,
        },
      }),
      _(
        R,
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
          ...Oe,
          ...j(_e),
          ...j(ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Ve,
  z,
  He,
  Ue,
  We,
  B,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  V,
  Qe,
  H,
  U,
  W,
  $e,
  G,
  et,
  K,
  tt,
  nt,
  q,
  rt,
  J,
  it,
  Y,
  at,
  X,
  ot,
  Z,
  st,
  Q,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  $,
  gt;
function _t() {
  return (_t = e(() => {
    (l(),
      y(),
      f(),
      r(),
      pe(),
      N(),
      Be(),
      ye(),
      xe(),
      Se(),
      Ee(),
      (Ve = b(be)),
      (z = x(S)),
      (He = x(m)),
      (Ue = b(P)),
      (We = b(F)),
      (B = v(S)),
      (Ge = b(R)),
      (Ke = b(me)),
      (qe = {
        d8t14yTiP: `(min-width: 1200px)`,
        El_X3mCT7: `(max-width: 809.98px)`,
        lyJb9wBPb: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Je = []),
      (Ye = `framer-ts4BH`),
      (Xe = {
        d8t14yTiP: `framer-v-10h56ed`,
        El_X3mCT7: `framer-v-15nmz0`,
        lyJb9wBPb: `framer-v-1qwhu3y`,
      }),
      (Ze = (e, t, n) => (e && t ? `position` : n)),
      (V = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Qe = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 0,
      }),
      (H = {
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
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (W = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      ($e = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: W,
        x: 0,
        y: 0,
      }),
      (G = { delay: 0.1, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (et = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (K = {
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
      (tt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 40,
      }),
      (nt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: W,
        x: 0,
        y: 40,
      }),
      (q = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (rt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 40,
      }),
      (J = { delay: 0.15, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (it = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: 40,
      }),
      (Y = { delay: 0.2, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (at = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 40,
      }),
      (X = { delay: 0.25, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ot = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: X,
        x: 0,
        y: 40,
      }),
      (Z = { delay: 0.3, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (st = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Z,
        x: 0,
        y: 40,
      }),
      (Q = { delay: 0.35, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ct = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Q,
        x: 0,
        y: 40,
      }),
      (lt = { delay: 0.4, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ut = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: lt,
        x: 0,
        y: 40,
      }),
      (dt = ({ value: e }) =>
        oe()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ft = { Desktop: `d8t14yTiP`, Phone: `El_X3mCT7`, Tablet: `lyJb9wBPb` }),
      (pt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ft[r.variant] ?? r.variant ?? `d8t14yTiP`,
      })),
      (mt = /*#__PURE__*/ c(function (e, r) {
        let c = i(null),
          l = r ?? c,
          f = ee(),
          { activeLocale: p, setLocale: m } = re(),
          h = ie(),
          { style: g, className: _, layoutId: v, variant: y, ...b } = pt(e),
          x = n(() => De({}, p), [p]);
        O(x);
        let [C, oe] = w(y, qe, !1),
          D = E(Ye, Te),
          ce = a(se)?.isLayoutTemplate,
          k = !!a(d)?.transition?.layout,
          j = Ze(ce, k);
        return (
          le(),
          ae({}),
          /*#__PURE__*/ s(se.Provider, {
            value: { primaryVariantId: `d8t14yTiP`, variantClassNames: Xe },
            children: /*#__PURE__*/ o(te, {
              id: v ?? f,
              children: [
                /*#__PURE__*/ s(dt, {
                  value: `html body { background: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ o(u.div, {
                  ...b,
                  className: E(D, `framer-10h56ed`, _),
                  ref: l,
                  style: { ...g },
                  children: [
                    /*#__PURE__*/ s(u.main, {
                      className: `framer-1pod6uo`,
                      "data-framer-name": `Main`,
                      layout: j,
                      children: /*#__PURE__*/ s(`section`, {
                        className: `framer-2ee3af`,
                        "data-framer-name": `Product`,
                        children: /*#__PURE__*/ o(`div`, {
                          className: `framer-1q22rp3`,
                          "data-framer-name": `Container`,
                          children: [
                            /*#__PURE__*/ o(`div`, {
                              className: `framer-1qcic1s`,
                              "data-framer-name": `Top`,
                              children: [
                                /*#__PURE__*/ o(`div`, {
                                  className: `framer-1snm8ft`,
                                  "data-framer-name": `Info`,
                                  children: [
                                    /*#__PURE__*/ s(A, {
                                      breakpoint: C,
                                      overrides: {
                                        El_X3mCT7: {
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            110 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        lyJb9wBPb: {
                                          y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 0 + 0 + 0 + 0 + 0,
                                        },
                                      },
                                      children: /*#__PURE__*/ s(T, {
                                        height: 33,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 0 + 0 + 0 + 0 + 0,
                                        children: /*#__PURE__*/ s(z, {
                                          animate: Qe,
                                          className: `framer-d1vhk-container`,
                                          "data-framer-appear-id": `d1vhk`,
                                          initial: H,
                                          nodeId: `inzXHNzMB`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `Xs_UfQc0Y`,
                                          children: /*#__PURE__*/ s(be, {
                                            height: `100%`,
                                            id: `inzXHNzMB`,
                                            layoutId: `inzXHNzMB`,
                                            RX1q43PHo: `What we manufacture`,
                                            variant: U(`R_XotlKFx`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ s(He, {
                                      __fromCanvasComponent: !0,
                                      animate: $e,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ o(`h1`, {
                                          className: `framer-styles-preset-2r53jr`,
                                          "data-styles-preset": `v03SSkN8P`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: [
                                            `Innovative `,
                                            /*#__PURE__*/ s(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: `products`,
                                            }),
                                            ` across all sectors`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-misrgz`,
                                      "data-framer-appear-id": `misrgz`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      initial: H,
                                      optimized: !0,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ s(ne, {
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
                                    /*#__PURE__*/ s(A, {
                                      breakpoint: C,
                                      overrides: {
                                        El_X3mCT7: {
                                          y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 0 + 0 + 142.8,
                                        },
                                        lyJb9wBPb: {
                                          y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 0 + 0 + 64.8,
                                        },
                                      },
                                      children: /*#__PURE__*/ s(T, {
                                        height: 52,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 0 + 0 + 64.8,
                                        children: /*#__PURE__*/ s(z, {
                                          animate: et,
                                          className: `framer-28hdee-container`,
                                          "data-framer-appear-id": `28hdee`,
                                          initial: H,
                                          nodeId: `bfT9POxvk`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `Xs_UfQc0Y`,
                                          children: /*#__PURE__*/ s(A, {
                                            breakpoint: C,
                                            overrides: {
                                              El_X3mCT7: {
                                                gr8i9ifqK: e[2],
                                                variant: U(`oP3WJd3dc`),
                                              },
                                              lyJb9wBPb: {
                                                gr8i9ifqK: e[1],
                                                variant: U(`oP3WJd3dc`),
                                              },
                                            },
                                            children: /*#__PURE__*/ s(P, {
                                              gr8i9ifqK: e[0],
                                              height: `100%`,
                                              id: `bfT9POxvk`,
                                              layoutId: `bfT9POxvk`,
                                              LkRCOsI08: `Contact now`,
                                              variant: U(`J5IGQfKo3`),
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
                            /*#__PURE__*/ o(`div`, {
                              className: `framer-jzsjk2`,
                              "data-framer-name": `Grid`,
                              children: [
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 0,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 0,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: V },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: tt,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1lbs3ua-container`,
                                      nodeId: `lQ2enRzKI`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `CNC machining`,
                                        dNgBprfRM: `Aluminum gear housing`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `lQ2enRzKI`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `lQ2enRzKI`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Custom dimensions up to 500mm`,
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Aluminum 6061 / 7075`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 476,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 0,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: W },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: nt,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-2amdoz-container`,
                                      nodeId: `KT20UhTzS`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Injection molding`,
                                        dNgBprfRM: `Custom plastic enclosures`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `KT20UhTzS`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `KT20UhTzS`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Varies – custom moldable`,
                                        ri2CipoBl: q(
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
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 952,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 0,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: G },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: rt,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-bhd9a0-container`,
                                      nodeId: `dUP1lxtuC`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Sheet metal fabrication & Assembly`,
                                        dNgBprfRM: `Electrical control panels`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `dUP1lxtuC`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `dUP1lxtuC`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Small to full-scale cabinets`,
                                        ri2CipoBl: q(
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
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 1428,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 476,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 0,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: J },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: it,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-vbm3nk-container`,
                                      nodeId: `PFMV_Bd4E`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Turning & Grinding`,
                                        dNgBprfRM: `Precision shaft assemblies`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `PFMV_Bd4E`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `PFMV_Bd4E`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Up to 1200mm`,
                                        ri2CipoBl: q(
                                          {
                                            pixelHeight: 300,
                                            pixelWidth: 525,
                                            src: `../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0-20cfc1.webp`,
                                            srcSet: `../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0.webp 512w,../../assets/images/OE2OcltN5LzFLAcVdLYTaSeJAz0-20cfc1.webp 525w`,
                                          },
                                          `Product Image`
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Alloy Steel, Stainless steel`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 1904,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 476,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 476,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: at,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1b1ue22-container`,
                                      nodeId: `GyP94ZQsR`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Sheet Metal fabrication & Assembly`,
                                        dNgBprfRM: `Power distribution boards`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `GyP94ZQsR`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `GyP94ZQsR`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Small to large-scale units`,
                                        ri2CipoBl: q(
                                          {
                                            pixelHeight: 300,
                                            pixelWidth: 525,
                                            src: `https://framerusercontent.com/images/DSUqcPuC0Wbf9FB8FtFGK7UduaE.png?width=525&height=300`,
                                            srcSet: `../../assets/images/DSUqcPuC0Wbf9FB8FtFGK7UduaE.png 512w,https://framerusercontent.com/images/DSUqcPuC0Wbf9FB8FtFGK7UduaE.png?width=525&height=300 525w`,
                                          },
                                          `Product Image`
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Mild Steel, Stainless steel`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 2380,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 476,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 476,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: X },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: ot,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-6rbwnx-container`,
                                      nodeId: `IVwexnSoM`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Metal fabrication & Assembly`,
                                        dNgBprfRM: `Copper busbar systems`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `IVwexnSoM`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `IVwexnSoM`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Medium to large`,
                                        ri2CipoBl: q(
                                          {
                                            pixelHeight: 300,
                                            pixelWidth: 525,
                                            src: `https://framerusercontent.com/images/4560Nm2Yq4SWX2dVOgnj81DI8.png?width=525&height=300`,
                                            srcSet: `../../assets/images/4560Nm2Yq4SWX2dVOgnj81DI8.png 512w,https://framerusercontent.com/images/4560Nm2Yq4SWX2dVOgnj81DI8.png?width=525&height=300 525w`,
                                          },
                                          `Product Image`
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Copper / Aluminum busbars`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 2856,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 952,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 476,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: Z },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: st,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-ih5x2j-container`,
                                      nodeId: `PXy8RFzB9`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Laser cutting & Welding`,
                                        dNgBprfRM: `Stainless steel junction boxes`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `PXy8RFzB9`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `PXy8RFzB9`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Small to medium`,
                                        ri2CipoBl: q(
                                          {
                                            pixelHeight: 300,
                                            pixelWidth: 525,
                                            src: `https://framerusercontent.com/images/1EWgeCvTDXA23YiiHqs1qzEi7bg.png?width=525&height=300`,
                                            srcSet: `../../assets/images/1EWgeCvTDXA23YiiHqs1qzEi7bg.png 512w,https://framerusercontent.com/images/1EWgeCvTDXA23YiiHqs1qzEi7bg.png?width=525&height=300 525w`,
                                          },
                                          `Product Image`
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Stainless steel 304 / 316`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ s(A, {
                                  breakpoint: C,
                                  overrides: {
                                    El_X3mCT7: {
                                      width: `max(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 234.8 + 0 + 3332,
                                    },
                                    lyJb9wBPb: {
                                      width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 120px) / 3, 50px)`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 176.8 + 0 + 952,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(T, {
                                    height: 446,
                                    width: `max((min(max(${h?.width || `100vw`}, 1px), 1880px) - 150px) / 4, 50px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 176.8 + 0 + 476,
                                    children: /*#__PURE__*/ s(B, {
                                      __framer__animate: { transition: Q },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: ct,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1lg41q9-container`,
                                      nodeId: `omdKRbgeX`,
                                      rendersWithMotion: !0,
                                      scopeId: `Xs_UfQc0Y`,
                                      children: /*#__PURE__*/ s(F, {
                                        AQl38ID5_: `Precision CNC machining`,
                                        dNgBprfRM: `Titanium sensor housings`,
                                        DOp5yuQBX: `Capability`,
                                        height: `100%`,
                                        id: `omdKRbgeX`,
                                        kkAbNmXqq: `Size range`,
                                        layoutId: `omdKRbgeX`,
                                        NtHhGC6fK: `Material`,
                                        ohPaHrIBH: `Small`,
                                        ri2CipoBl: q(
                                          {
                                            pixelHeight: 300,
                                            pixelWidth: 525,
                                            src: `https://framerusercontent.com/images/Wf46UcxadCEe8zTWfHu8IjWaeLo.png?width=525&height=300`,
                                            srcSet: `../../assets/images/Wf46UcxadCEe8zTWfHu8IjWaeLo.png 512w,https://framerusercontent.com/images/Wf46UcxadCEe8zTWfHu8IjWaeLo.png?width=525&height=300 525w`,
                                          },
                                          `Product Image`
                                        ),
                                        style: { height: `100%`, width: `100%` },
                                        Ut0DO6nSR: `Titanium alloy`,
                                        variant: U(`ESei9rRJt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(A, {
                              breakpoint: C,
                              overrides: {
                                El_X3mCT7: {
                                  width: `calc(min(max(${h?.width || `100vw`}, 1px), 1880px) - 32px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 0 + 110 + 0 + 4052.8,
                                },
                                lyJb9wBPb: { y: (h?.y || 0) + 0 + 0 + 0 + 130 + 0 + 1634.8 },
                              },
                              children: /*#__PURE__*/ s(T, {
                                height: 171,
                                width: `calc(min(max(${h?.width || `100vw`}, 1px), 1880px) - 60px)`,
                                y: (h?.y || 0) + 0 + 0 + 0 + 180 + 0 + 1158.8,
                                children: /*#__PURE__*/ s(B, {
                                  __framer__animate: { transition: lt },
                                  __framer__animateOnce: !0,
                                  __framer__enter: K,
                                  __framer__exit: ut,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-njzdow-container`,
                                  nodeId: `QBM6YKV_e`,
                                  rendersWithMotion: !0,
                                  scopeId: `Xs_UfQc0Y`,
                                  children: /*#__PURE__*/ s(A, {
                                    breakpoint: C,
                                    overrides: {
                                      El_X3mCT7: { variant: U(`cj3UnIwEr`) },
                                      lyJb9wBPb: { variant: U(`aXsAzIiXA`) },
                                    },
                                    children: /*#__PURE__*/ s(R, {
                                      bWLJyVUTC: `Send request`,
                                      height: `100%`,
                                      id: `QBM6YKV_e`,
                                      kdOJ3qLZQ: `Custom order inquiry`,
                                      layoutId: `QBM6YKV_e`,
                                      style: { width: `100%` },
                                      variant: U(`JCI5tWpbL`),
                                      width: `100%`,
                                      yqSNsrHQ9: `Looking for a product we don’t offer yet? Send us your custom specifications and we will take it forward from there.`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ s(T, {
                      children: /*#__PURE__*/ s(S, {
                        className: `framer-l2y6gm-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: j,
                        nodeId: `lBOKRe9Zu`,
                        scopeId: `Xs_UfQc0Y`,
                        children: /*#__PURE__*/ s(me, {
                          height: `100%`,
                          id: `lBOKRe9Zu`,
                          intensity: 25,
                          layoutId: `lBOKRe9Zu`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ht = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ts4BH.framer-rdmio0, .framer-ts4BH .framer-rdmio0 { display: block; }`,
        `.framer-ts4BH.framer-10h56ed { align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ts4BH .framer-1pod6uo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ts4BH .framer-2ee3af { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 180px 0px 200px 0px; position: relative; width: 1px; }`,
        `.framer-ts4BH .framer-1q22rp3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1880px; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-ts4BH .framer-1qcic1s { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ts4BH .framer-1snm8ft { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ts4BH .framer-d1vhk-container, .framer-ts4BH .framer-28hdee-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ts4BH .framer-misrgz { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ts4BH .framer-jzsjk2 { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ts4BH .framer-1lbs3ua-container, .framer-ts4BH .framer-2amdoz-container, .framer-ts4BH .framer-bhd9a0-container, .framer-ts4BH .framer-vbm3nk-container, .framer-ts4BH .framer-1b1ue22-container, .framer-ts4BH .framer-6rbwnx-container, .framer-ts4BH .framer-ih5x2j-container, .framer-ts4BH .framer-1lg41q9-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-ts4BH .framer-njzdow-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ts4BH .framer-l2y6gm-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...Ce,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ts4BH.framer-10h56ed { width: 810px; } .framer-ts4BH .framer-2ee3af { padding: 130px 0px 140px 0px; } .framer-ts4BH .framer-jzsjk2 { grid-template-columns: repeat(3, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-ts4BH.framer-10h56ed { width: 390px; } .framer-ts4BH .framer-1pod6uo { flex-direction: column; } .framer-ts4BH .framer-2ee3af { flex: none; padding: 110px 0px 100px 0px; width: 100%; } .framer-ts4BH .framer-1q22rp3 { gap: 40px; padding: 0px 16px 0px 16px; } .framer-ts4BH .framer-1qcic1s { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; } .framer-ts4BH .framer-1snm8ft { flex: none; gap: 16px; width: 100%; } .framer-ts4BH .framer-jzsjk2 { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ]),
      ($ = k(mt, ht, `framer-ts4BH`)),
      ($.displayName = `Page`),
      ($.defaultProps = { height: 2569, width: 1200 }),
      _(
        $,
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
          ...Ve,
          ...Ue,
          ...We,
          ...Ge,
          ...Ke,
          ...j(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (gt = {
        exports: {
          urlVariableNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerXs_UfQc0Y`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `2569`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lyJb9wBPb":{"layout":["fixed","auto"]},"El_X3mCT7":{"layout":["fixed","auto"]}}}`,
              framerScrollSections: `false`,
              framerResponsiveScreen: `true`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
_t();
export { gt as __FramerMetadata__, $ as default, Je as urlVariableNames };
//# sourceMappingURL=uoliLsEXuWEmLGF8juKjSL8De5HM_aNygIceWbKtxEQ.CLsCOSBv.mjs.map
