import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as ee,
} from "./react.DfujhmXs.mjs";
import { T as te, i as ne, o as re, t as d } from "./motion.BoJ_50qN.mjs";
import {
  C as f,
  E as ie,
  Et as p,
  K as m,
  L as h,
  Ot as ae,
  S as oe,
  _t as se,
  a as g,
  ct as ce,
  dt as le,
  ft as ue,
  ht as _,
  i as v,
  k as y,
  mt as b,
  st as de,
  t as fe,
  u as x,
  v as pe,
  vt as me,
  wt as S,
  xt as he,
  y as C,
  yt as w,
  z as ge,
} from "./framer.DGJFnpg_.mjs";
import { i as T, r as E } from "./shared-lib.C0OaH8ZN.mjs";
import { n as _e, t as D } from "./t0GRKkwHB.4mSMwzSd.mjs";
import { i as O, t as k } from "./zBTWiSfRK.CBeXZjSN.mjs";
import { i as A, n as j, r as M, t as ve } from "./lR3sdILUN.CtI7Sz3I.mjs";
import { n as N, t as P } from "./zk2k_vuc_.Ctfk4hXK.mjs";
import { n as F, t as I } from "./vYZRaGVcX.CgT4L3ri.mjs";
import { n as ye, r as be } from "./B7oZ2fVBR.DoJSZJgQ.mjs";
var L,
  R,
  xe,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  Se,
  q,
  Ce,
  we,
  Te,
  Ee,
  De,
  J,
  Y,
  X,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Z,
  Ne,
  Q,
  Pe;
function $() {
  return ($ = e(() => {
    (u(),
      m(),
      d(),
      r(),
      T(),
      _e(),
      F(),
      N(),
      O(),
      A(),
      ye(),
      (L = ae(f)),
      (R = h(D)),
      (xe = h(I)),
      (z = p(g)),
      (B = h(P)),
      (V = h(E)),
      (H = {
        JDikbV602: `(max-width: 809.98px)`,
        KraIJUyyi: `(min-width: 1200px)`,
        puG7qJnBf: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (U = () => typeof document < `u`),
      (W = []),
      (G = `framer-M9aiU`),
      (K = {
        JDikbV602: `framer-v-1gzzrzz`,
        KraIJUyyi: `framer-v-rc31rb`,
        puG7qJnBf: `framer-v-bgbaha`,
      }),
      (Se = (e, t, n) => (e && t ? `position` : n)),
      (q = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ce = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
        x: 0,
        y: 0,
      }),
      (we = {
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
      (Te = {
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
      (Ee = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
      (De = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
        x: 0,
        y: 40,
      }),
      (J = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = (e, t, n) =>
        e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
      (Oe = () => ({
        from: { alias: `S7zBPi4OI`, data: k, type: `Collection` },
        select: [
          { collection: `S7zBPi4OI`, name: `kIllSH8oL`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `RcjclLkIy`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `EhZw2oGPC`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `NY1JAN3Dg`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `ilYZL2LIm`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `EQtUZjKlv`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `GEnNpt0Iw`, type: `Identifier` },
          { collection: `S7zBPi4OI`, name: `id`, type: `Identifier` },
        ],
      })),
      (ke = ({ query: e, pageSize: t, children: n }) => {
        let { paginatedQuery: r, paginationInfo: i, loadMore: a } = _(e, t, `S7zBPi4OI`);
        return n(w(r), i, a);
      }),
      (Ae = ({ value: e }) =>
        b()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (je = { Desktop: `KraIJUyyi`, Phone: `JDikbV602`, Tablet: `puG7qJnBf` }),
      (Me = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: je[r.variant] ?? r.variant ?? `KraIJUyyi`,
      })),
      (Z = /*#__PURE__*/ l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          d = ee(),
          { activeLocale: f, setLocale: ie } = se(),
          p = ce(),
          { style: m, className: h, layoutId: ae, variant: _, ...b } = Me(e),
          S = n(() => be({}, f), [f]);
        me(S);
        let [w, ge] = ue(_, H, !1),
          { activeVariantCallback: T, delay: _e } = de(void 0),
          O = ({ loadMore: e }) =>
            T(async (...t) => {
              e();
            }),
          k = y(G, ve),
          A = o(x)?.isLayoutTemplate,
          j = !!o(re)?.transition?.layout,
          M = Se(A, j),
          N = () => !U() || w !== `JDikbV602`,
          F = () => !U() || ![`puG7qJnBf`, `JDikbV602`].includes(w);
        return (
          he(),
          le({}),
          /*#__PURE__*/ c(x.Provider, {
            value: { primaryVariantId: `KraIJUyyi`, variantClassNames: K },
            children: /*#__PURE__*/ s(ne, {
              id: ae ?? d,
              children: [
                /*#__PURE__*/ c(Ae, {
                  value: `html body { background: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ s(te.div, {
                  ...b,
                  className: y(k, `framer-rc31rb`, h),
                  ref: u,
                  style: { ...m },
                  children: [
                    /*#__PURE__*/ s(te.main, {
                      className: `framer-fza1u3`,
                      "data-framer-name": `Main`,
                      layout: M,
                      children: [
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-m2qocd`,
                          "data-framer-name": `Hero`,
                          children: [
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-2h0jq1`,
                              "data-framer-name": `Container`,
                              children: /*#__PURE__*/ c(C, {
                                breakpoint: w,
                                overrides: {
                                  JDikbV602: {
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ c(`h1`, {
                                        className: `framer-styles-preset-891qt7`,
                                        "data-styles-preset": `lR3sdILUN`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                        },
                                        children: `Our case studies `,
                                      }),
                                    }),
                                  },
                                },
                                children: /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  animate: Ce,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`h1`, {
                                      className: `framer-styles-preset-891qt7`,
                                      "data-styles-preset": `lR3sdILUN`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                      },
                                      children: `Our case studies`,
                                    }),
                                  }),
                                  className: `framer-wn5odh`,
                                  "data-framer-appear-id": `wn5odh`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  initial: we,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1luqxv5`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-18016t5`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-vpydw6`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-wsoa7n`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    N() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-zv6ufa hidden-1gzzrzz`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    F() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-2k06pn hidden-bgbaha hidden-1gzzrzz`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    F() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-4ojq94 hidden-bgbaha hidden-1gzzrzz`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ c(C, {
                                  breakpoint: w,
                                  overrides: {
                                    JDikbV602: { height: 222 },
                                    puG7qJnBf: { height: 252 },
                                  },
                                  children: /*#__PURE__*/ c(v, {
                                    height: 352,
                                    width: p?.width || `100vw`,
                                    children: /*#__PURE__*/ c(g, {
                                      className: `framer-1b4iyvs-container`,
                                      nodeId: `GJL03gOUu`,
                                      scopeId: `B7oZ2fVBR`,
                                      children: /*#__PURE__*/ c(D, {
                                        height: `100%`,
                                        id: `GJL03gOUu`,
                                        layoutId: `GJL03gOUu`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`section`, {
                          className: `framer-1vpfpkl`,
                          "data-framer-name": `Case Study Detail`,
                          children: /*#__PURE__*/ c(`div`, {
                            className: `framer-n7q8r3`,
                            "data-framer-name": `Container`,
                            children: /*#__PURE__*/ c(`div`, {
                              className: `framer-1eg4690`,
                              children: /*#__PURE__*/ c(fe, {
                                children: /*#__PURE__*/ c(ke, {
                                  pageSize: 4,
                                  query: Oe(),
                                  children: (e, t, n) =>
                                    /*#__PURE__*/ s(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              EhZw2oGPC: e,
                                              EQtUZjKlv: t,
                                              GEnNpt0Iw: n,
                                              id: r,
                                              ilYZL2LIm: i,
                                              kIllSH8oL: a,
                                              NY1JAN3Dg: o,
                                              RcjclLkIy: s,
                                            },
                                            l
                                          ) => (
                                            (s ??= ``),
                                            (e ??= ``),
                                            (o ??= ``),
                                            (i ??= ``),
                                            (n ??= ``),
                                            /*#__PURE__*/ c(
                                              ne,
                                              {
                                                id: `S7zBPi4OI-${r}`,
                                                children: /*#__PURE__*/ c(pe.Provider, {
                                                  value: { GEnNpt0Iw: n },
                                                  children: /*#__PURE__*/ c(`div`, {
                                                    className: `framer-1rze846`,
                                                    children: /*#__PURE__*/ c(oe, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { GEnNpt0Iw: n },
                                                            webPageId: `bSiIVuvYs`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { GEnNpt0Iw: n },
                                                            webPageId: `bSiIVuvYs`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { GEnNpt0Iw: n },
                                                            webPageId: `bSiIVuvYs`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        /*#__PURE__*/ c(C, {
                                                          breakpoint: w,
                                                          overrides: {
                                                            JDikbV602: {
                                                              height: 280,
                                                              width: `max(min(max(${p?.width || `100vw`}, 1px), 1360px) - 32px, 50px)`,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ c(v, {
                                                            width: `max((min(max(${p?.width || `100vw`}, 1px), 1360px) - 90px) / 2, 50px)`,
                                                            children: /*#__PURE__*/ c(z, {
                                                              __framer__animate: {
                                                                transition: Ee(q, (l % 4) * 0.1),
                                                              },
                                                              __framer__animateOnce: !0,
                                                              __framer__enter: Te,
                                                              __framer__exit: De,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-1fb0qrk-container`,
                                                              nodeId: `SYMNbAdtW`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `B7oZ2fVBR`,
                                                              children: /*#__PURE__*/ c(C, {
                                                                breakpoint: w,
                                                                overrides: {
                                                                  JDikbV602: {
                                                                    enmW0lZlE: n[2],
                                                                    style: { width: `100%` },
                                                                    variant: Y(`SHNqLHdNg`),
                                                                  },
                                                                  puG7qJnBf: {
                                                                    enmW0lZlE: n[1],
                                                                    variant: Y(`FtbjFRTO3`),
                                                                  },
                                                                },
                                                                children: /*#__PURE__*/ c(I, {
                                                                  cIx_IJNIR: J(a),
                                                                  enmW0lZlE: n[0],
                                                                  gwO5NAlgC: e,
                                                                  height: `100%`,
                                                                  id: `SYMNbAdtW`,
                                                                  layoutId: `SYMNbAdtW`,
                                                                  na1mgkHQT: i,
                                                                  OrhXXid_A: J(t),
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                  swALXvpK7: o,
                                                                  swJLO07rV: s,
                                                                  variant: Y(`fXTT0XQVd`),
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
                                              r
                                            )
                                          )
                                        ),
                                        /*#__PURE__*/ c(v, {
                                          height: 40,
                                          children: /*#__PURE__*/ c(g, {
                                            className: `framer-1m34q90-container`,
                                            nodeId: `PCQKQICPG`,
                                            scopeId: `B7oZ2fVBR`,
                                            children: /*#__PURE__*/ c(C, {
                                              breakpoint: w,
                                              overrides: {
                                                JDikbV602: {
                                                  variant: X(
                                                    t,
                                                    { disabled: `m3ANS7lXw`, loading: `XiJFaMxJs` },
                                                    Y(`XiJFaMxJs`)
                                                  ),
                                                },
                                                puG7qJnBf: {
                                                  variant: X(
                                                    t,
                                                    { disabled: `m3ANS7lXw`, loading: `XiJFaMxJs` },
                                                    Y(`XiJFaMxJs`)
                                                  ),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(P, {
                                                height: `100%`,
                                                id: `PCQKQICPG`,
                                                layoutId: `PCQKQICPG`,
                                                variant: X(
                                                  t,
                                                  { disabled: `m3ANS7lXw`, loading: `oaVyXD_VX` },
                                                  Y(`pApV0HJIQ`)
                                                ),
                                                width: `100%`,
                                                Wld3NDzSj: O({ loadMore: n }),
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
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(v, {
                      children: /*#__PURE__*/ c(g, {
                        className: `framer-q68yf9-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `cFafREWbB`,
                        scopeId: `B7oZ2fVBR`,
                        children: /*#__PURE__*/ c(E, {
                          height: `100%`,
                          id: `cFafREWbB`,
                          intensity: 25,
                          layoutId: `cFafREWbB`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Ne = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-M9aiU.framer-9m2vlz, .framer-M9aiU .framer-9m2vlz { display: block; }`,
        `.framer-M9aiU.framer-rc31rb { align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-M9aiU .framer-fza1u3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-M9aiU .framer-m2qocd { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-M9aiU .framer-2h0jq1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-M9aiU .framer-wn5odh { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-M9aiU .framer-1luqxv5 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px 30px 0px 30px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; }`,
        `.framer-M9aiU .framer-18016t5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1600px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-M9aiU .framer-vpydw6, .framer-M9aiU .framer-wsoa7n, .framer-M9aiU .framer-zv6ufa, .framer-M9aiU .framer-2k06pn, .framer-M9aiU .framer-4ojq94 { --border-bottom-width: 1px; --border-color: var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, #191919); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; opacity: 0.12; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-M9aiU .framer-1b4iyvs-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-M9aiU .framer-1vpfpkl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-M9aiU .framer-n7q8r3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1360px; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-M9aiU .framer-1eg4690 { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-M9aiU .framer-1rze846 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: 100%; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-M9aiU .framer-1fb0qrk-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-M9aiU .framer-1m34q90-container { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        `.framer-M9aiU .framer-q68yf9-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...j,
        `.framer-M9aiU[data-border="true"]::after, .framer-M9aiU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-M9aiU.framer-rc31rb { width: 810px; } .framer-M9aiU .framer-m2qocd { padding: 130px 0px 50px 0px; } .framer-M9aiU .framer-1vpfpkl { padding: 140px 0px 140px 0px; } .framer-M9aiU .framer-1eg4690 { padding: 0px 0px 110px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-M9aiU.framer-rc31rb { width: 390px; } .framer-M9aiU .framer-m2qocd { padding: 100px 0px 50px 0px; } .framer-M9aiU .framer-2h0jq1, .framer-M9aiU .framer-1luqxv5, .framer-M9aiU .framer-n7q8r3 { padding: 0px 16px 0px 16px; } .framer-M9aiU .framer-1vpfpkl { padding: 100px 0px 100px 0px; } .framer-M9aiU .framer-1eg4690 { grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 0px 0px 100px 0px; } .framer-M9aiU .framer-1rze846 { height: min-content; } .framer-M9aiU .framer-1fb0qrk-container { height: auto; }}`,
      ]),
      (Q = S(Z, Ne, `framer-M9aiU`)),
      (Q.displayName = `Case Study`),
      (Q.defaultProps = { height: 2194, width: 1200 }),
      ie(
        Q,
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
          ...R,
          ...xe,
          ...B,
          ...V,
          ...ge(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Pe = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          urlVariableNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerB7oZ2fVBR`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1200`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `2194`,
              framerAcceptsLayoutTemplate: `true`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerScrollSections: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"puG7qJnBf":{"layout":["fixed","auto"]},"JDikbV602":{"layout":["fixed","auto"]}}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Pe as __FramerMetadata__, Q as default, W as urlVariableNames };
//# sourceMappingURL=Bn4LVculHE3WIcTCRFTlr30HPEhDtO-6ukCDHaqDorU.CrfmgrTU.mjs.map
