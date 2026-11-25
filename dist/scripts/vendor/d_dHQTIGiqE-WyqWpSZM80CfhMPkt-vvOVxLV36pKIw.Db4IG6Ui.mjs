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
import { T as d, i as te, o as f, t as p } from "./motion.BoJ_50qN.mjs";
import {
  At as m,
  B as h,
  C as g,
  Ct as _,
  D as v,
  E as y,
  Et as b,
  K as x,
  L as S,
  Ot as C,
  S as w,
  T as ne,
  _t as re,
  a as T,
  bt as E,
  ct as ie,
  dt as D,
  f as O,
  ft as ae,
  i as k,
  j as A,
  k as j,
  m as oe,
  mt as se,
  o as M,
  st as ce,
  t as le,
  u as N,
  v as ue,
  vt as P,
  w as F,
  wt as I,
  xt as de,
  y as L,
  yt as fe,
  z as R,
} from "./framer.DGJFnpg_.mjs";
import {
  c as pe,
  d as me,
  f as he,
  g as ge,
  h as _e,
  l as ve,
  m as ye,
  p as be,
  s as xe,
  u as Se,
} from "./toplevel-deps.XDVeXK4X.mjs";
import {
  a as Ce,
  c as we,
  i as Te,
  n as Ee,
  o as De,
  r as Oe,
  s as ke,
  t as Ae,
} from "./NumberAnimator.Bo2em_sU.mjs";
import { i as z, r as je } from "./shared-lib.C0OaH8ZN.mjs";
import { n as Me, t as B } from "./ac59bCYp4.C7MwWm7Z.mjs";
import { i as V, n as Ne, r as Pe, t as H } from "./GzMbxD0G0.KqlKB3xq.mjs";
import { i as Fe, n as U, r as W, t as Ie } from "./XorWCRDBg.Cyw4W0eA.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./P89o9sRK1.DNBvNxpc.mjs";
import { n as Ve, t as He } from "./q98WlWaa9.DeV4Bwei.mjs";
import { n as Ue, t as We } from "./t0GRKkwHB.4mSMwzSd.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./mOcxLNaxt.D2yYFsej.mjs";
import { i as Ye, t as Xe } from "./n0JwbvZ2A.BJNPcq3v.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./lR3sdILUN.CtI7Sz3I.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./v03SSkN8P.ClDd94vB.mjs";
import { i as at, n as ot, r as st, t as ct } from "./prOpMcG3Y.2F0Qj1qz.mjs";
import { n as lt, r as ut } from "./L_B7D5dU4.XbmT02uC.mjs";
function dt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, G;
function St() {
  return (St = e(() => {
    (u(),
      x(),
      p(),
      r(),
      (ft = [`WFhvN93wo`, `rn4WWMal3`]),
      (pt = `framer-aEclA`),
      (mt = { rn4WWMal3: `framer-v-r8yt9q`, WFhvN93wo: `framer-v-1rppl19` }),
      (ht = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (gt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (_t = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: t });
      }),
      (vt = d.create(t)),
      (yt = { Desktop: `WFhvN93wo`, Phone: `rn4WWMal3` }),
      (bt = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        iTy8vocQT: t ??
          a.iTy8vocQT ?? {
            alt: `Social Icon`,
            pixelHeight: 19,
            pixelWidth: 20,
            src: `../../assets/images/l3q80acDADHl93IrlqOvSvXkKU.svg`,
          },
        MMNaNFsRM: r ?? a.MMNaNFsRM,
        variant: yt[a.variant] ?? a.variant ?? `WFhvN93wo`,
      })),
      (xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = I(
        /* @__PURE__ */ l(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: s } = re(),
            l = ie(),
            {
              style: u,
              className: f,
              layoutId: p,
              variant: m,
              iTy8vocQT: g,
              MMNaNFsRM: v,
              ...y
            } = bt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ne,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = _({
              cycleOrder: ft,
              defaultVariant: `WFhvN93wo`,
              ref: r,
              variant: m,
              variantClassNames: mt,
            }),
            ae = xt(e, D),
            k = j(pt);
          return /*#__PURE__*/ c(te, {
            id: p ?? a,
            children: /*#__PURE__*/ c(vt, {
              animate: D,
              initial: !1,
              children: /*#__PURE__*/ c(_t, {
                value: ht,
                children: /*#__PURE__*/ c(oe, {
                  href: v,
                  motionChild: !0,
                  nodeId: `WFhvN93wo`,
                  openInNewTab: !0,
                  scopeId: `J2DrXIkdI`,
                  smoothScroll: !0,
                  children: /*#__PURE__*/ c(d.a, {
                    ...y,
                    ...C,
                    "aria-label": `Social Icon`,
                    className: `${j(k, `framer-1rppl19`, f, x)} framer-1yxhif9`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: ae,
                    layoutId: `WFhvN93wo`,
                    ref: r,
                    style: { ...u },
                    ...dt({ rn4WWMal3: { "data-framer-name": `Phone` } }, b, w),
                    children: /*#__PURE__*/ c(O, {
                      background: {
                        alt: `Social Icon`,
                        fit: `fit`,
                        loading: h((l?.y || 0) + (0 + ((l?.height || 20) - 0 - 20) / 2)),
                        pixelHeight: 19,
                        pixelWidth: 20,
                        sizes: `20px`,
                        ...gt(g),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-ha3xfz`,
                      "data-framer-name": `Image`,
                      layoutDependency: ae,
                      layoutId: `r55VILSRs`,
                      ...dt(
                        {
                          rn4WWMal3: {
                            background: {
                              alt: `Social Icon`,
                              fit: `fit`,
                              loading: h((l?.y || 0) + (0 + ((l?.height || 16) - 0 - 16) / 2)),
                              pixelHeight: 19,
                              pixelWidth: 20,
                              sizes: `16px`,
                              ...gt(g),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        b,
                        w
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-aEclA.framer-1yxhif9, .framer-aEclA .framer-1yxhif9 { display: block; }`,
          `.framer-aEclA.framer-1rppl19 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-aEclA .framer-ha3xfz { flex: none; height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-aEclA.framer-v-r8yt9q .framer-ha3xfz { height: 16px; width: 16px; }`,
        ],
        `framer-aEclA`
      )),
      (G.displayName = `Social Icon`),
      (G.defaultProps = { height: 20, width: 20 }),
      v(G, {
        variant: {
          options: [`WFhvN93wo`, `rn4WWMal3`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        iTy8vocQT: {
          __defaultAssetReference: `data:framer/asset-reference,l3q80acDADHl93IrlqOvSvXkKU.svg?originalFilename=social+icon+%281%29.svg&width=20&height=19`,
          __vekterDefault: {
            alt: `Social Icon`,
            assetReference: `data:framer/asset-reference,l3q80acDADHl93IrlqOvSvXkKU.svg?originalFilename=social+icon+%281%29.svg&width=20&height=19`,
          },
          title: `Icon`,
          type: M.ResponsiveImage,
        },
        MMNaNFsRM: { title: `Link`, type: M.Link },
      }),
      y(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, K;
function Rt() {
  return (Rt = e(() => {
    (u(),
      x(),
      p(),
      r(),
      ye(),
      Se(),
      St(),
      (wt = S(G)),
      (Tt = [`gltYN45Yc`, `bXpmfRXwq`]),
      (Et = `framer-KtWat`),
      (Dt = { bXpmfRXwq: `framer-v-ff1qsm`, gltYN45Yc: `framer-v-qyk42a` }),
      (Ot = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (kt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (At = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (jt = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: t });
      }),
      (Mt = d.create(t)),
      (Nt = { Desktop: `gltYN45Yc`, Phone: `bXpmfRXwq` }),
      (Pt = ({
        click: e,
        height: t,
        id: n,
        instagramLink: r,
        jobPosition: i,
        linkedinLink: a,
        mouseEnter: o,
        name1: s,
        twitterLink: c,
        width: l,
        ...u
      }) => ({
        ...u,
        GYrv1OZ3Z: e ?? u.GYrv1OZ3Z,
        LWFcMJB5T: s ?? u.LWFcMJB5T ?? `James Anderson`,
        mqYegVoDQ: r ?? u.mqYegVoDQ,
        Na6yyfFgt: c ?? u.Na6yyfFgt,
        Ob4rX22Fa: a ?? u.Ob4rX22Fa,
        tJtpv4WHB: o ?? u.tJtpv4WHB,
        variant: Nt[u.variant] ?? u.variant ?? `gltYN45Yc`,
        VS06xWdHs: i ?? u.VS06xWdHs ?? `Head of Operations`,
      })),
      (Ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (It = /*#__PURE__*/ l(function (e, n) {
        let r = i(null),
          a = n ?? r,
          o = ee(),
          { activeLocale: l, setLocale: u } = re(),
          f = ie(),
          {
            style: p,
            className: m,
            layoutId: h,
            variant: v,
            LWFcMJB5T: y,
            VS06xWdHs: b,
            Na6yyfFgt: x,
            mqYegVoDQ: S,
            Ob4rX22Fa: C,
            GYrv1OZ3Z: w,
            tJtpv4WHB: ne,
            ...T
          } = Pt(e),
          {
            baseVariant: E,
            classNames: D,
            clearLoadingGesture: O,
            gestureHandlers: ae,
            gestureVariant: A,
            isLoading: oe,
            setGestureState: se,
            setVariant: M,
            variants: le,
          } = _({
            cycleOrder: Tt,
            defaultVariant: `gltYN45Yc`,
            ref: a,
            variant: v,
            variantClassNames: Dt,
          }),
          N = Ft(e, le),
          { activeVariantCallback: ue, delay: P } = ce(E),
          I = ue(async (...e) => {
            if ((se({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
          }),
          de = ue(async (...e) => {
            if ((se({ isHovered: !0 }), ne && (await ne(...e)) === !1)) return !1;
          }),
          L = j(Et, me, xe);
        return /*#__PURE__*/ c(te, {
          id: h ?? o,
          children: /*#__PURE__*/ c(Mt, {
            animate: le,
            initial: !1,
            children: /*#__PURE__*/ c(jt, {
              value: Ot,
              children: /*#__PURE__*/ s(d.div, {
                ...T,
                ...ae,
                className: j(L, `framer-qyk42a`, m, D),
                "data-border": !0,
                "data-framer-name": `Desktop`,
                "data-highlight": !0,
                layoutDependency: N,
                layoutId: `gltYN45Yc`,
                onMouseEnter: de,
                onTap: I,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-41dbab4b-4d8a-40dc-a562-4b7709d86f82, rgba(92, 92, 92, 0.2))`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  ...p,
                },
                ...Ct({ bXpmfRXwq: { "data-framer-name": `Phone` } }, E, A),
                children: [
                  /*#__PURE__*/ c(g, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(t, {
                      children: /*#__PURE__*/ c(d.h3, {
                        className: `framer-styles-preset-1f8or04`,
                        "data-styles-preset": `GzMbxD0G0`,
                        style: {
                          "--framer-text-alignment": `left`,
                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                        },
                        children: `James anderson`,
                      }),
                    }),
                    className: `framer-pgllr8`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: N,
                    layoutId: `X8tyKBC9w`,
                    style: {
                      "--extracted-a0htzi": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    },
                    text: y,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ c(g, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(t, {
                      children: /*#__PURE__*/ c(d.p, {
                        className: `framer-styles-preset-gf9yid`,
                        "data-styles-preset": `XorWCRDBg`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                        },
                        children: `Head of operations`,
                      }),
                    }),
                    className: `framer-10x6cy0`,
                    "data-framer-name": `Job Position`,
                    fonts: [`Inter`],
                    layoutDependency: N,
                    layoutId: `NR5owE2qX`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                    },
                    text: b,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ s(d.div, {
                    className: `framer-ye2qr1`,
                    "data-framer-name": `Social`,
                    layoutDependency: N,
                    layoutId: `ds5p2G_vI`,
                    children: [
                      /*#__PURE__*/ c(k, {
                        height: 20,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 30 - 20) / 2) + 0,
                        ...Ct(
                          {
                            bXpmfRXwq: {
                              y: (f?.y || 0) + (0 + ((f?.height || 200) - 20 - 20) / 2) + 0,
                            },
                          },
                          E,
                          A
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-4x0qzw-container`,
                          layoutDependency: N,
                          layoutId: `NfEB5gCon-container`,
                          nodeId: `NfEB5gCon`,
                          rendersWithMotion: !0,
                          scopeId: `Nk_FAgVCC`,
                          children: /*#__PURE__*/ c(G, {
                            height: `100%`,
                            id: `NfEB5gCon`,
                            layoutId: `NfEB5gCon`,
                            MMNaNFsRM: x,
                            variant: kt(`WFhvN93wo`),
                            width: `100%`,
                            ...Ct({ bXpmfRXwq: { variant: kt(`rn4WWMal3`) } }, E, A),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 20,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 30 - 20) / 2) + 0,
                        ...Ct(
                          {
                            bXpmfRXwq: {
                              y: (f?.y || 0) + (0 + ((f?.height || 200) - 20 - 20) / 2) + 0,
                            },
                          },
                          E,
                          A
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-1nb8so6-container`,
                          layoutDependency: N,
                          layoutId: `sftqOBN1P-container`,
                          nodeId: `sftqOBN1P`,
                          rendersWithMotion: !0,
                          scopeId: `Nk_FAgVCC`,
                          children: /*#__PURE__*/ c(G, {
                            height: `100%`,
                            id: `sftqOBN1P`,
                            iTy8vocQT: At(
                              {
                                pixelHeight: 20,
                                pixelWidth: 20,
                                src: `../../assets/images/spnWwCJurVDrlIL32LVdxmS14RU.svg`,
                              },
                              `Social Icon`
                            ),
                            layoutId: `sftqOBN1P`,
                            MMNaNFsRM: S,
                            variant: kt(`WFhvN93wo`),
                            width: `100%`,
                            ...Ct({ bXpmfRXwq: { variant: kt(`rn4WWMal3`) } }, E, A),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 20,
                        y: (f?.y || 0) + (0 + ((f?.height || 200) - 30 - 20) / 2) + 0,
                        ...Ct(
                          {
                            bXpmfRXwq: {
                              y: (f?.y || 0) + (0 + ((f?.height || 200) - 20 - 20) / 2) + 0,
                            },
                          },
                          E,
                          A
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-f8gqlq-container`,
                          layoutDependency: N,
                          layoutId: `luXNRAxC4-container`,
                          nodeId: `luXNRAxC4`,
                          rendersWithMotion: !0,
                          scopeId: `Nk_FAgVCC`,
                          children: /*#__PURE__*/ c(G, {
                            height: `100%`,
                            id: `luXNRAxC4`,
                            iTy8vocQT: At(
                              {
                                pixelHeight: 20,
                                pixelWidth: 20,
                                src: `../../assets/images/P8gS9X0oBCIMhynqQXOgVkYk8g.svg`,
                              },
                              `Social Icon`
                            ),
                            layoutId: `luXNRAxC4`,
                            MMNaNFsRM: C,
                            variant: kt(`WFhvN93wo`),
                            width: `100%`,
                            ...Ct({ bXpmfRXwq: { variant: kt(`rn4WWMal3`) } }, E, A),
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
      (Lt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-KtWat.framer-1v0gvt5, .framer-KtWat .framer-1v0gvt5 { display: block; }`,
        `.framer-KtWat.framer-qyk42a { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 30px 0px; position: relative; width: 675px; }`,
        `.framer-KtWat .framer-pgllr8, .framer-KtWat .framer-10x6cy0 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-KtWat .framer-ye2qr1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-KtWat .framer-4x0qzw-container, .framer-KtWat .framer-1nb8so6-container, .framer-KtWat .framer-f8gqlq-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-KtWat.framer-v-ff1qsm.framer-qyk42a { padding: 0px 0px 20px 0px; }`,
        `.framer-KtWat.framer-v-ff1qsm .framer-ye2qr1 { gap: 16px; justify-content: flex-end; }`,
        ...he,
        ...pe,
        `.framer-KtWat[data-border="true"]::after, .framer-KtWat [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = I(It, Lt, `framer-KtWat`)),
      (K.displayName = `Team List Card`),
      (K.defaultProps = { height: 92, width: 675 }),
      v(K, {
        variant: {
          options: [`gltYN45Yc`, `bXpmfRXwq`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        LWFcMJB5T: {
          defaultValue: `James Anderson`,
          displayTextArea: !0,
          title: `Name`,
          type: M.String,
        },
        VS06xWdHs: {
          defaultValue: `Head of Operations`,
          displayTextArea: !0,
          title: `Job Position`,
          type: M.String,
        },
        Na6yyfFgt: { title: `Twitter Link`, type: M.Link },
        mqYegVoDQ: { title: `Instagram Link`, type: M.Link },
        Ob4rX22Fa: { title: `Linkedin Link`, type: M.Link },
        GYrv1OZ3Z: { title: `Click`, type: M.EventHandler },
        tJtpv4WHB: { title: `Mouse Enter`, type: M.EventHandler },
      }),
      y(
        K,
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
          ...wt,
          ...R(be),
          ...R(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  J,
  Zt,
  Qt,
  Y,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn;
function fn() {
  return (fn = e(() => {
    (u(),
      x(),
      p(),
      r(),
      tt(),
      Rt(),
      Ve(),
      (zt = S(He)),
      (Bt = b(F)),
      (Vt = b(g)),
      (Ht = b(O)),
      (Ut = S(K)),
      (Wt = b(d.div)),
      (Gt = [
        `p8zDq3nWW`,
        `GpQkDummB`,
        `xx_Gk7DtD`,
        `OwRLGPWUd`,
        `kYazwL2YL`,
        `zgtEI7BjG`,
        `KzUynYfGW`,
        `RLt17Urel`,
        `SZ4Boe2b3`,
        `JLPY8iH5h`,
        `WUWwAwv7M`,
        `I8Yfqfu3F`,
        `neuMIYdJw`,
        `ePGKIfxYC`,
      ]),
      (Kt = `framer-2oPFY`),
      (qt = {
        ePGKIfxYC: `framer-v-yqbuom`,
        GpQkDummB: `framer-v-6xalsk`,
        I8Yfqfu3F: `framer-v-10krv3z`,
        JLPY8iH5h: `framer-v-4t9xxa`,
        kYazwL2YL: `framer-v-re2tcg`,
        KzUynYfGW: `framer-v-1vprhqc`,
        neuMIYdJw: `framer-v-vpou1a`,
        OwRLGPWUd: `framer-v-42f6b8`,
        p8zDq3nWW: `framer-v-1okehr0`,
        RLt17Urel: `framer-v-dptskb`,
        SZ4Boe2b3: `framer-v-1w5pido`,
        WUWwAwv7M: `framer-v-pdf1sl`,
        xx_Gk7DtD: `framer-v-1t1hmax`,
        zgtEI7BjG: `framer-v-1f2pxou`,
      }),
      (Jt = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Yt = {
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
      (Xt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Jt,
        x: 0,
        y: 40,
      }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Zt = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Qt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Zt,
        x: 0,
        y: 40,
      }),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($t = { delay: 0.1, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (en = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: $t,
        x: 0,
        y: 40,
      }),
      (tn = { delay: 0.15, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (nn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: tn,
        x: 0,
        y: 40,
      }),
      (rn = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: t });
      }),
      (an = {
        "01 - Desktop": `p8zDq3nWW`,
        "01 - Phone": `RLt17Urel`,
        "02 - Desktop": `GpQkDummB`,
        "02 - Phone": `SZ4Boe2b3`,
        "03 - Desktop": `xx_Gk7DtD`,
        "03 - Phone": `JLPY8iH5h`,
        "04 - Desktop": `OwRLGPWUd`,
        "04 - Phone": `WUWwAwv7M`,
        "05 - Desktop": `kYazwL2YL`,
        "05 - Phone": `I8Yfqfu3F`,
        "06 - Desktop": `zgtEI7BjG`,
        "06 - Phone": `neuMIYdJw`,
        "07 - Desktop": `KzUynYfGW`,
        "07 - Phone": `ePGKIfxYC`,
      }),
      (on = d.create(t)),
      (sn = ({
        _01InstagramLink: e,
        _01JobTitle: t,
        _01LinkedinLink: n,
        _01Name: r,
        _01Thumbnail: i,
        _01XLink: a,
        _02InstagramLink: o,
        _02JobTitle: s,
        _02LinkedinLink: c,
        _02Name: l,
        _02Thumbnail: u,
        _02XLink: ee,
        _03InstagramLink: d,
        _03JobTitle: te,
        _03LinkedinLink: f,
        _03Name: p,
        _03Thumbnail: m,
        _03XLink: h,
        _04InstagramLink: g,
        _04JobTitle: _,
        _04LinkedinLink: v,
        _04Name: y,
        _04Thumbnail: b,
        _04XLink: x,
        _05InstagramLink: S,
        _05JobTitle: C,
        _05LinkedinLink: w,
        _05Name: ne,
        _05Thumbnail: re,
        _05XLink: T,
        _06InstagramLink: E,
        _06JobTitle: ie,
        _06LinkedinLink: D,
        _06Name: O,
        _06Thumbnail: ae,
        _06XLink: k,
        _07InstagramLink: A,
        _07JobTitle: j,
        _07LinkedinLink: oe,
        _07Name: se,
        _07Thumbnail: M,
        _07XLink: ce,
        height: le,
        id: N,
        width: ue,
        ...P
      }) => ({
        ...P,
        bOKVK4bH6: E ?? P.bOKVK4bH6,
        DblFvRTbz: se ?? P.DblFvRTbz ?? `Emily Carter`,
        DQLmSsTYZ: f ?? P.DQLmSsTYZ,
        EsAeZmLKs: i ??
          P.EsAeZmLKs ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `../../assets/images/BjTZQFymcpHSgksc1eBpdyQecFU.png`,
          },
        f2FC2377t: s ?? P.f2FC2377t ?? `Lead CNC Engineer`,
        fe0NROijv: g ?? P.fe0NROijv,
        ffTIi3kJ0: e ?? P.ffTIi3kJ0,
        gPebXhpzN: O ?? P.gPebXhpzN ?? `William Carter`,
        hkGEf3Yvb: ie ?? P.hkGEf3Yvb ?? `Project Manager`,
        I6oyPgQla: ne ?? P.I6oyPgQla ?? `Sophie Walker`,
        jfVQaz9NS: v ?? P.jfVQaz9NS,
        lCCI1qpfj: l ?? P.lCCI1qpfj ?? `Michael Turner`,
        LHvBDJE7i: o ?? P.LHvBDJE7i,
        lHwOp8BbO: ee ?? P.lHwOp8BbO,
        lyhgwzFlT: y ?? P.lyhgwzFlT ?? `William Harris`,
        M1PkOzurC: C ?? P.M1PkOzurC ?? `Client Relations Manager`,
        MDDdU1dOE: w ?? P.MDDdU1dOE,
        MMIDTZzOA: k ?? P.MMIDTZzOA,
        OA1rzT2HR: t ?? P.OA1rzT2HR ?? `Head of Operations`,
        OUKoqOumu: u ??
          P.OUKoqOumu ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/qTuV70aeyTCkmvsuhIomCd4lY0g.png?width=400&height=430`,
          },
        P3zSSbwoi: b ??
          P.P3zSSbwoi ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/v3WFh4snNYDCRdfBs7x3FYfIqo.png?width=400&height=430`,
          },
        PxdB2KQ4i: T ?? P.PxdB2KQ4i,
        QSLRQhU5V: p ?? P.QSLRQhU5V ?? `Olivia Bennett`,
        REaZziTTM: re ??
          P.REaZziTTM ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/XyS8LhHvNa6sPETu4MMuRLpFx0.png?width=400&height=430`,
          },
        rnt1CS1md: a ?? P.rnt1CS1md,
        SsaG6JFX5: x ?? P.SsaG6JFX5,
        tgFDuMYHv: m ??
          P.tgFDuMYHv ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/SYSfCXwaCCPhb00BIp9f4XtX0VY.png?width=400&height=430`,
          },
        U8qMsR622: A ?? P.U8qMsR622,
        variant: an[P.variant] ?? P.variant ?? `p8zDq3nWW`,
        VjBWcugib: ae ??
          P.VjBWcugib ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/S35AT6r8wSa3sUbuQe2pTd6wRE.png?width=400&height=430`,
          },
        vPHddDkEl: M ??
          P.vPHddDkEl ?? {
            alt: `Team Image`,
            pixelHeight: 430,
            pixelWidth: 400,
            src: `https://framerusercontent.com/images/mPnXvNY9pQpvrTYtd7Y2RPFR4PY.png?width=400&height=430`,
          },
        vvoDOO9mD: ce ?? P.vvoDOO9mD,
        VVWgnVnvV: te ?? P.VVWgnVnvV ?? `Quality Manager`,
        wUR9lLs6m: h ?? P.wUR9lLs6m,
        WxAdo_aeS: j ?? P.WxAdo_aeS ?? `Operations Specialist`,
        x2xWZAdx_: r ?? P.x2xWZAdx_ ?? `James Anderson`,
        XAyUVTqh0: n ?? P.XAyUVTqh0,
        Xp7c0pb8d: _ ?? P.Xp7c0pb8d ?? `Production Supervisor`,
        xxfB5NzNH: D ?? P.xxfB5NzNH,
        Y3sDatdbv: d ?? P.Y3sDatdbv,
        yB0umIzb1: S ?? P.yB0umIzb1,
        YMxElff61: c ?? P.YMxElff61,
        YSKDgYJwl: oe ?? P.YSKDgYJwl,
      })),
      (cn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ln = /*#__PURE__*/ l(function (e, n) {
        let r = i(null),
          a = n ?? r,
          o = ee(),
          { activeLocale: l, setLocale: u } = re(),
          f = ie(),
          {
            style: p,
            className: m,
            layoutId: g,
            variant: v,
            x2xWZAdx_: y,
            OA1rzT2HR: b,
            EsAeZmLKs: x,
            rnt1CS1md: S,
            ffTIi3kJ0: C,
            XAyUVTqh0: w,
            lCCI1qpfj: ne,
            f2FC2377t: T,
            OUKoqOumu: E,
            lHwOp8BbO: D,
            LHvBDJE7i: O,
            YMxElff61: ae,
            QSLRQhU5V: A,
            VVWgnVnvV: oe,
            tgFDuMYHv: se,
            wUR9lLs6m: M,
            Y3sDatdbv: le,
            DQLmSsTYZ: N,
            lyhgwzFlT: ue,
            Xp7c0pb8d: P,
            P3zSSbwoi: I,
            SsaG6JFX5: de,
            fe0NROijv: L,
            jfVQaz9NS: fe,
            I6oyPgQla: R,
            M1PkOzurC: pe,
            REaZziTTM: me,
            PxdB2KQ4i: he,
            yB0umIzb1: ge,
            MDDdU1dOE: _e,
            gPebXhpzN: ve,
            hkGEf3Yvb: ye,
            VjBWcugib: be,
            MMIDTZzOA: xe,
            bOKVK4bH6: Se,
            xxfB5NzNH: Ce,
            DblFvRTbz: we,
            WxAdo_aeS: Te,
            vPHddDkEl: Ee,
            vvoDOO9mD: De,
            U8qMsR622: Oe,
            YSKDgYJwl: ke,
            ...Ae
          } = sn(e),
          {
            baseVariant: z,
            classNames: je,
            clearLoadingGesture: Me,
            gestureHandlers: B,
            gestureVariant: V,
            isLoading: Ne,
            setGestureState: Pe,
            setVariant: H,
            variants: Fe,
          } = _({
            cycleOrder: Gt,
            defaultVariant: `p8zDq3nWW`,
            ref: a,
            variant: v,
            variantClassNames: qt,
          }),
          U = cn(e, Fe),
          { activeVariantCallback: W, delay: Ie } = ce(z),
          Le = W(async (...e) => {
            H(`p8zDq3nWW`);
          }),
          Re = W(async (...e) => {
            H(`GpQkDummB`);
          }),
          ze = W(async (...e) => {
            H(`xx_Gk7DtD`);
          }),
          Be = W(async (...e) => {
            H(`OwRLGPWUd`);
          }),
          Ve = W(async (...e) => {
            H(`kYazwL2YL`);
          }),
          Ue = W(async (...e) => {
            H(`zgtEI7BjG`);
          }),
          We = W(async (...e) => {
            H(`KzUynYfGW`);
          }),
          Ge = j(Kt, it),
          Ke = () =>
            ![
              `RLt17Urel`,
              `SZ4Boe2b3`,
              `JLPY8iH5h`,
              `WUWwAwv7M`,
              `I8Yfqfu3F`,
              `neuMIYdJw`,
              `ePGKIfxYC`,
            ].includes(z);
        return /*#__PURE__*/ c(te, {
          id: g ?? o,
          children: /*#__PURE__*/ c(on, {
            animate: Fe,
            initial: !1,
            children: /*#__PURE__*/ c(rn, {
              value: Jt,
              children: /*#__PURE__*/ s(d.div, {
                ...Ae,
                ...B,
                className: j(Ge, `framer-1okehr0`, m, je),
                "data-framer-name": `01 - Desktop`,
                layoutDependency: U,
                layoutId: `p8zDq3nWW`,
                ref: a,
                style: { ...p },
                ...q(
                  {
                    ePGKIfxYC: { "data-framer-name": `07 - Phone` },
                    GpQkDummB: { "data-framer-name": `02 - Desktop` },
                    I8Yfqfu3F: { "data-framer-name": `05 - Phone` },
                    JLPY8iH5h: { "data-framer-name": `03 - Phone` },
                    kYazwL2YL: { "data-framer-name": `05 - Desktop` },
                    KzUynYfGW: { "data-framer-name": `07 - Desktop` },
                    neuMIYdJw: { "data-framer-name": `06 - Phone` },
                    OwRLGPWUd: { "data-framer-name": `04 - Desktop` },
                    RLt17Urel: { "data-framer-name": `01 - Phone` },
                    SZ4Boe2b3: { "data-framer-name": `02 - Phone` },
                    WUWwAwv7M: { "data-framer-name": `04 - Phone` },
                    xx_Gk7DtD: { "data-framer-name": `03 - Desktop` },
                    zgtEI7BjG: { "data-framer-name": `06 - Desktop` },
                  },
                  z,
                  V
                ),
                children: [
                  /*#__PURE__*/ s(d.div, {
                    className: `framer-6ytqub`,
                    "data-framer-name": `Left`,
                    layoutDependency: U,
                    layoutId: `ydvaAAKYf`,
                    children: [
                      /*#__PURE__*/ s(d.div, {
                        className: `framer-maw3m5`,
                        "data-framer-name": `Top`,
                        layoutDependency: U,
                        layoutId: `OzCaMKy1h`,
                        children: [
                          /*#__PURE__*/ c(k, {
                            height: 33,
                            y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0,
                            ...q(
                              {
                                ePGKIfxYC: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                I8Yfqfu3F: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                JLPY8iH5h: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                neuMIYdJw: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                RLt17Urel: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                SZ4Boe2b3: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                                WUWwAwv7M: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 },
                              },
                              z,
                              V
                            ),
                            children: /*#__PURE__*/ c(Bt, {
                              __framer__animate: { transition: Jt },
                              __framer__animateOnce: !0,
                              __framer__enter: Yt,
                              __framer__exit: Xt,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-17zr5bf-container`,
                              layoutDependency: U,
                              layoutId: `NbLyN6fHx-container`,
                              nodeId: `NbLyN6fHx`,
                              rendersWithMotion: !0,
                              scopeId: `A8NMqtmp3`,
                              children: /*#__PURE__*/ c(He, {
                                height: `100%`,
                                id: `NbLyN6fHx`,
                                layoutId: `NbLyN6fHx`,
                                RX1q43PHo: `Meet our experts`,
                                variant: J(`R_XotlKFx`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          /*#__PURE__*/ c(Vt, {
                            __framer__animate: { transition: Zt },
                            __framer__animateOnce: !0,
                            __framer__enter: Yt,
                            __framer__exit: Qt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            children: /*#__PURE__*/ c(t, {
                              children: /*#__PURE__*/ s(d.h2, {
                                className: `framer-styles-preset-2r53jr`,
                                "data-styles-preset": `v03SSkN8P`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                                },
                                children: [
                                  `Leaders in `,
                                  /*#__PURE__*/ c(d.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-1qn201a, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11)))`,
                                    },
                                    children: `precision`,
                                  }),
                                  ` work`,
                                ],
                              }),
                            }),
                            className: `framer-1elhhis`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: U,
                            layoutId: `n__4mJNKE`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                              "--extracted-1qn201a": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      Ke() &&
                        /*#__PURE__*/ c(Ht, {
                          __framer__animate: { transition: $t },
                          __framer__animateOnce: !0,
                          __framer__enter: Yt,
                          __framer__exit: en,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          background: {
                            alt: `Team Image`,
                            fit: `fill`,
                            loading: h((f?.y || 0) + 0 + 0 + 172.8),
                            pixelHeight: 430,
                            pixelWidth: 400,
                            sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                            ...Y(x),
                          },
                          className: `framer-1h6z4im`,
                          "data-framer-name": `Image`,
                          fitImageDimension: `height`,
                          layoutDependency: U,
                          layoutId: `AB92XyBFK`,
                          style: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          ...q(
                            {
                              GpQkDummB: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(E),
                                },
                              },
                              kYazwL2YL: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(me),
                                },
                              },
                              KzUynYfGW: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(Ee),
                                },
                              },
                              OwRLGPWUd: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(I),
                                },
                              },
                              xx_Gk7DtD: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(se),
                                },
                              },
                              zgtEI7BjG: {
                                background: {
                                  alt: `Team Image`,
                                  fit: `fill`,
                                  loading: h((f?.y || 0) + 0 + 0 + 172.8),
                                  pixelHeight: 430,
                                  pixelWidth: 400,
                                  sizes: `min(max((${f?.width || `100vw`} - 60px) * 0.375, 1px), 300px)`,
                                  ...Y(be),
                                },
                              },
                            },
                            z,
                            V
                          ),
                        }),
                    ],
                  }),
                  /*#__PURE__*/ s(Wt, {
                    __framer__animate: { transition: tn },
                    __framer__animateOnce: !0,
                    __framer__enter: Yt,
                    __framer__exit: nn,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `framer-5hjnku`,
                    "data-framer-name": `Right`,
                    layoutDependency: U,
                    layoutId: `GGp5xqE_I`,
                    children: [
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 0,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 0,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-bxpq08-container`,
                          layoutDependency: U,
                          layoutId: `T38J3MxQh-container`,
                          nodeId: `T38J3MxQh`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 1 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            GpQkDummB: { opacity: 0.4 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            kYazwL2YL: { opacity: 0.4 },
                            KzUynYfGW: { opacity: 0.4 },
                            neuMIYdJw: { opacity: 1 },
                            OwRLGPWUd: { opacity: 0.4 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                            xx_Gk7DtD: { opacity: 0.4 },
                            zgtEI7BjG: { opacity: 0.4 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `T38J3MxQh`,
                            layoutId: `T38J3MxQh`,
                            LWFcMJB5T: y,
                            mqYegVoDQ: C,
                            Na6yyfFgt: S,
                            Ob4rX22Fa: w,
                            style: { width: `100%` },
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: b,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                GpQkDummB: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                                I8Yfqfu3F: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                JLPY8iH5h: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                kYazwL2YL: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                                KzUynYfGW: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                                neuMIYdJw: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                OwRLGPWUd: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                WUWwAwv7M: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                xx_Gk7DtD: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                                zgtEI7BjG: { GYrv1OZ3Z: void 0, tJtpv4WHB: Le },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 122,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 122,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-1yi4zvb-container`,
                          layoutDependency: U,
                          layoutId: `VZBmgJCXQ-container`,
                          nodeId: `VZBmgJCXQ`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            GpQkDummB: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `VZBmgJCXQ`,
                            layoutId: `VZBmgJCXQ`,
                            LWFcMJB5T: ne,
                            mqYegVoDQ: O,
                            Na6yyfFgt: D,
                            Ob4rX22Fa: ae,
                            style: { width: `100%` },
                            tJtpv4WHB: Re,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: T,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                I8Yfqfu3F: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                neuMIYdJw: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 244,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 244,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-djdwn5-container`,
                          layoutDependency: U,
                          layoutId: `cbRFpKXVC-container`,
                          nodeId: `cbRFpKXVC`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                            xx_Gk7DtD: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `cbRFpKXVC`,
                            layoutId: `cbRFpKXVC`,
                            LWFcMJB5T: A,
                            mqYegVoDQ: le,
                            Na6yyfFgt: M,
                            Ob4rX22Fa: N,
                            style: { width: `100%` },
                            tJtpv4WHB: ze,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: oe,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                I8Yfqfu3F: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                neuMIYdJw: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 366,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 366,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-1jqhqqu-container`,
                          layoutDependency: U,
                          layoutId: `x_Pgn7vcW-container`,
                          nodeId: `x_Pgn7vcW`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            OwRLGPWUd: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `x_Pgn7vcW`,
                            layoutId: `x_Pgn7vcW`,
                            LWFcMJB5T: ue,
                            mqYegVoDQ: L,
                            Na6yyfFgt: de,
                            Ob4rX22Fa: fe,
                            style: { width: `100%` },
                            tJtpv4WHB: Be,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: P,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                I8Yfqfu3F: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                kYazwL2YL: { GYrv1OZ3Z: void 0 },
                                KzUynYfGW: { GYrv1OZ3Z: void 0 },
                                neuMIYdJw: {
                                  GYrv1OZ3Z: void 0,
                                  tJtpv4WHB: void 0,
                                  variant: J(`bXpmfRXwq`),
                                },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                zgtEI7BjG: { GYrv1OZ3Z: void 0 },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 488,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 488,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-b3dfpt-container`,
                          layoutDependency: U,
                          layoutId: `EsOsBkn5k-container`,
                          nodeId: `EsOsBkn5k`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            kYazwL2YL: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `EsOsBkn5k`,
                            layoutId: `EsOsBkn5k`,
                            LWFcMJB5T: R,
                            mqYegVoDQ: ge,
                            Na6yyfFgt: he,
                            Ob4rX22Fa: _e,
                            style: { width: `100%` },
                            tJtpv4WHB: Ve,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: pe,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                I8Yfqfu3F: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                neuMIYdJw: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 610,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 610,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-5618ds-container`,
                          layoutDependency: U,
                          layoutId: `RsxlMzxAi-container`,
                          nodeId: `RsxlMzxAi`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                            zgtEI7BjG: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `RsxlMzxAi`,
                            layoutId: `RsxlMzxAi`,
                            LWFcMJB5T: ve,
                            mqYegVoDQ: Se,
                            Na6yyfFgt: xe,
                            Ob4rX22Fa: Ce,
                            style: { width: `100%` },
                            tJtpv4WHB: Ue,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: ye,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                I8Yfqfu3F: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                neuMIYdJw: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                              },
                              z,
                              V
                            ),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(k, {
                        height: 92,
                        width: `max((${f?.width || `100vw`} - 60px) / 1.6, 1px)`,
                        y: (f?.y || 0) + 0 + 0 + 732,
                        ...q(
                          {
                            ePGKIfxYC: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            I8Yfqfu3F: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            JLPY8iH5h: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            neuMIYdJw: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            RLt17Urel: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            SZ4Boe2b3: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                            WUWwAwv7M: {
                              width: f?.width || `100vw`,
                              y: (f?.y || 0) + 0 + 172.8 + 0 + 732,
                            },
                          },
                          z,
                          V
                        ),
                        children: /*#__PURE__*/ c(F, {
                          className: `framer-ur760i-container`,
                          layoutDependency: U,
                          layoutId: `wwYKtL4Ew-container`,
                          nodeId: `wwYKtL4Ew`,
                          rendersWithMotion: !0,
                          scopeId: `A8NMqtmp3`,
                          style: { opacity: 0.4 },
                          variants: {
                            ePGKIfxYC: { opacity: 1 },
                            I8Yfqfu3F: { opacity: 1 },
                            JLPY8iH5h: { opacity: 1 },
                            KzUynYfGW: { opacity: 1 },
                            neuMIYdJw: { opacity: 1 },
                            RLt17Urel: { opacity: 1 },
                            SZ4Boe2b3: { opacity: 1 },
                            WUWwAwv7M: { opacity: 1 },
                          },
                          children: /*#__PURE__*/ c(K, {
                            height: `100%`,
                            id: `wwYKtL4Ew`,
                            layoutId: `wwYKtL4Ew`,
                            LWFcMJB5T: we,
                            mqYegVoDQ: Oe,
                            Na6yyfFgt: De,
                            Ob4rX22Fa: ke,
                            style: { width: `100%` },
                            tJtpv4WHB: We,
                            variant: J(`gltYN45Yc`),
                            VS06xWdHs: Te,
                            width: `100%`,
                            ...q(
                              {
                                ePGKIfxYC: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                I8Yfqfu3F: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                JLPY8iH5h: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                neuMIYdJw: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                RLt17Urel: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                SZ4Boe2b3: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                                WUWwAwv7M: { tJtpv4WHB: void 0, variant: J(`bXpmfRXwq`) },
                              },
                              z,
                              V
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
      (un = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2oPFY.framer-qjotj6, .framer-2oPFY .framer-qjotj6 { display: block; }`,
        `.framer-2oPFY.framer-1okehr0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1140px; }`,
        `.framer-2oPFY .framer-6ytqub { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.6 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-2oPFY .framer-maw3m5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2oPFY .framer-17zr5bf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-2oPFY .framer-1elhhis { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2oPFY .framer-1h6z4im { flex: none; height: auto; max-width: 300px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-2oPFY .framer-5hjnku { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-2oPFY .framer-bxpq08-container, .framer-2oPFY .framer-1yi4zvb-container, .framer-2oPFY .framer-djdwn5-container, .framer-2oPFY .framer-1jqhqqu-container, .framer-2oPFY .framer-b3dfpt-container, .framer-2oPFY .framer-5618ds-container, .framer-2oPFY .framer-ur760i-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2oPFY.framer-v-dptskb.framer-1okehr0, .framer-2oPFY.framer-v-1w5pido.framer-1okehr0, .framer-2oPFY.framer-v-4t9xxa.framer-1okehr0, .framer-2oPFY.framer-v-pdf1sl.framer-1okehr0, .framer-2oPFY.framer-v-10krv3z.framer-1okehr0, .framer-2oPFY.framer-v-vpou1a.framer-1okehr0, .framer-2oPFY.framer-v-yqbuom.framer-1okehr0 { flex-direction: column; width: 810px; }`,
        `.framer-2oPFY.framer-v-dptskb .framer-6ytqub, .framer-2oPFY.framer-v-1w5pido .framer-6ytqub, .framer-2oPFY.framer-v-4t9xxa .framer-6ytqub, .framer-2oPFY.framer-v-pdf1sl .framer-6ytqub, .framer-2oPFY.framer-v-10krv3z .framer-6ytqub, .framer-2oPFY.framer-v-vpou1a .framer-6ytqub, .framer-2oPFY.framer-v-yqbuom .framer-6ytqub { flex: none; gap: 40px; width: 100%; }`,
        `.framer-2oPFY.framer-v-dptskb .framer-5hjnku, .framer-2oPFY.framer-v-1w5pido .framer-5hjnku, .framer-2oPFY.framer-v-4t9xxa .framer-5hjnku, .framer-2oPFY.framer-v-pdf1sl .framer-5hjnku, .framer-2oPFY.framer-v-10krv3z .framer-5hjnku, .framer-2oPFY.framer-v-vpou1a .framer-5hjnku, .framer-2oPFY.framer-v-yqbuom .framer-5hjnku { flex: none; width: 100%; }`,
        ...nt,
      ]),
      (dn = I(ln, un, `framer-2oPFY`)),
      (dn.displayName = `Team Card`),
      (dn.defaultProps = { height: 636, width: 1140 }),
      v(dn, {
        variant: {
          options: [
            `p8zDq3nWW`,
            `GpQkDummB`,
            `xx_Gk7DtD`,
            `OwRLGPWUd`,
            `kYazwL2YL`,
            `zgtEI7BjG`,
            `KzUynYfGW`,
            `RLt17Urel`,
            `SZ4Boe2b3`,
            `JLPY8iH5h`,
            `WUWwAwv7M`,
            `I8Yfqfu3F`,
            `neuMIYdJw`,
            `ePGKIfxYC`,
          ],
          optionTitles: [
            `01 - Desktop`,
            `02 - Desktop`,
            `03 - Desktop`,
            `04 - Desktop`,
            `05 - Desktop`,
            `06 - Desktop`,
            `07 - Desktop`,
            `01 - Phone`,
            `02 - Phone`,
            `03 - Phone`,
            `04 - Phone`,
            `05 - Phone`,
            `06 - Phone`,
            `07 - Phone`,
          ],
          title: `Variant`,
          type: M.Enum,
        },
        x2xWZAdx_: {
          defaultValue: `James Anderson`,
          displayTextArea: !0,
          title: `01 Name`,
          type: M.String,
        },
        onx2xWZAdx_Change: { changes: `x2xWZAdx_`, type: M.ChangeHandler },
        OA1rzT2HR: {
          defaultValue: `Head of Operations`,
          displayTextArea: !0,
          title: `01 Job Title`,
          type: M.String,
        },
        onOA1rzT2HRChange: { changes: `OA1rzT2HR`, type: M.ChangeHandler },
        EsAeZmLKs: {
          __defaultAssetReference: `data:framer/asset-reference,BjTZQFymcpHSgksc1eBpdyQecFU.png?originalFilename=Team+Members+%283%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,BjTZQFymcpHSgksc1eBpdyQecFU.png?originalFilename=Team+Members+%283%29.png&width=400&height=430`,
          },
          description: `Recommended size 400px X 430px`,
          title: `01 Thumbnail`,
          type: M.ResponsiveImage,
        },
        rnt1CS1md: { title: `01 X Link`, type: M.Link },
        ffTIi3kJ0: { title: `01 Instagram Link`, type: M.Link },
        XAyUVTqh0: { title: `01 Linkedin Link`, type: M.Link },
        lCCI1qpfj: {
          defaultValue: `Michael Turner`,
          displayTextArea: !0,
          title: `02 Name`,
          type: M.String,
        },
        onlCCI1qpfjChange: { changes: `lCCI1qpfj`, type: M.ChangeHandler },
        f2FC2377t: {
          defaultValue: `Lead CNC Engineer`,
          displayTextArea: !0,
          title: `02 Job Title`,
          type: M.String,
        },
        onf2FC2377tChange: { changes: `f2FC2377t`, type: M.ChangeHandler },
        OUKoqOumu: {
          __defaultAssetReference: `data:framer/asset-reference,qTuV70aeyTCkmvsuhIomCd4lY0g.png?originalFilename=Team+Members+%285%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,qTuV70aeyTCkmvsuhIomCd4lY0g.png?originalFilename=Team+Members+%285%29.png&width=400&height=430`,
          },
          title: `02 Thumbnail`,
          type: M.ResponsiveImage,
        },
        lHwOp8BbO: { title: `02 X Link`, type: M.Link },
        LHvBDJE7i: { title: `02 Instagram Link`, type: M.Link },
        YMxElff61: { title: `02 Linkedin Link`, type: M.Link },
        QSLRQhU5V: {
          defaultValue: `Olivia Bennett`,
          displayTextArea: !0,
          title: `03 Name`,
          type: M.String,
        },
        onQSLRQhU5VChange: { changes: `QSLRQhU5V`, type: M.ChangeHandler },
        VVWgnVnvV: {
          defaultValue: `Quality Manager`,
          displayTextArea: !0,
          title: `03 Job Title`,
          type: M.String,
        },
        onVVWgnVnvVChange: { changes: `VVWgnVnvV`, type: M.ChangeHandler },
        tgFDuMYHv: {
          __defaultAssetReference: `data:framer/asset-reference,SYSfCXwaCCPhb00BIp9f4XtX0VY.png?originalFilename=Team+Members+%282%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,SYSfCXwaCCPhb00BIp9f4XtX0VY.png?originalFilename=Team+Members+%282%29.png&width=400&height=430`,
          },
          title: `03 Thumbnail`,
          type: M.ResponsiveImage,
        },
        wUR9lLs6m: { title: `03 X Link`, type: M.Link },
        Y3sDatdbv: { title: `03 Instagram Link`, type: M.Link },
        DQLmSsTYZ: { title: `03 Linkedin Link`, type: M.Link },
        lyhgwzFlT: {
          defaultValue: `William Harris`,
          displayTextArea: !0,
          title: `04 Name`,
          type: M.String,
        },
        onlyhgwzFlTChange: { changes: `lyhgwzFlT`, type: M.ChangeHandler },
        Xp7c0pb8d: {
          defaultValue: `Production Supervisor`,
          displayTextArea: !0,
          title: `04 Job Title`,
          type: M.String,
        },
        onXp7c0pb8dChange: { changes: `Xp7c0pb8d`, type: M.ChangeHandler },
        P3zSSbwoi: {
          __defaultAssetReference: `data:framer/asset-reference,v3WFh4snNYDCRdfBs7x3FYfIqo.png?originalFilename=Team+Members+%287%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,v3WFh4snNYDCRdfBs7x3FYfIqo.png?originalFilename=Team+Members+%287%29.png&width=400&height=430`,
          },
          title: `04 Thumbnail`,
          type: M.ResponsiveImage,
        },
        SsaG6JFX5: { title: `04 X Link`, type: M.Link },
        fe0NROijv: { title: `04 Instagram Link`, type: M.Link },
        jfVQaz9NS: { title: `04 Linkedin Link`, type: M.Link },
        I6oyPgQla: {
          defaultValue: `Sophie Walker`,
          displayTextArea: !0,
          title: `05 Name`,
          type: M.String,
        },
        onI6oyPgQlaChange: { changes: `I6oyPgQla`, type: M.ChangeHandler },
        M1PkOzurC: {
          defaultValue: `Client Relations Manager`,
          displayTextArea: !0,
          title: `05 Job Title`,
          type: M.String,
        },
        onM1PkOzurCChange: { changes: `M1PkOzurC`, type: M.ChangeHandler },
        REaZziTTM: {
          __defaultAssetReference: `data:framer/asset-reference,XyS8LhHvNa6sPETu4MMuRLpFx0.png?originalFilename=Team+Members+%284%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,XyS8LhHvNa6sPETu4MMuRLpFx0.png?originalFilename=Team+Members+%284%29.png&width=400&height=430`,
          },
          title: `05 Thumbnail`,
          type: M.ResponsiveImage,
        },
        PxdB2KQ4i: { title: `05 X Link`, type: M.Link },
        yB0umIzb1: { title: `05 Instagram Link`, type: M.Link },
        MDDdU1dOE: { title: `05 Linkedin Link`, type: M.Link },
        gPebXhpzN: {
          defaultValue: `William Carter`,
          displayTextArea: !0,
          title: `06 Name`,
          type: M.String,
        },
        ongPebXhpzNChange: { changes: `gPebXhpzN`, type: M.ChangeHandler },
        hkGEf3Yvb: {
          defaultValue: `Project Manager`,
          displayTextArea: !0,
          title: `06 Job Title`,
          type: M.String,
        },
        onhkGEf3YvbChange: { changes: `hkGEf3Yvb`, type: M.ChangeHandler },
        VjBWcugib: {
          __defaultAssetReference: `data:framer/asset-reference,S35AT6r8wSa3sUbuQe2pTd6wRE.png?originalFilename=Team+Members+%286%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,S35AT6r8wSa3sUbuQe2pTd6wRE.png?originalFilename=Team+Members+%286%29.png&width=400&height=430`,
          },
          title: `06 Thumbnail`,
          type: M.ResponsiveImage,
        },
        MMIDTZzOA: { title: `06 X Link`, type: M.Link },
        bOKVK4bH6: { title: `06 Instagram Link`, type: M.Link },
        xxfB5NzNH: { title: `06 Linkedin Link`, type: M.Link },
        DblFvRTbz: {
          defaultValue: `Emily Carter`,
          displayTextArea: !0,
          title: `07 Name`,
          type: M.String,
        },
        onDblFvRTbzChange: { changes: `DblFvRTbz`, type: M.ChangeHandler },
        WxAdo_aeS: {
          defaultValue: `Operations Specialist`,
          displayTextArea: !0,
          title: `07 Job Title`,
          type: M.String,
        },
        onWxAdo_aeSChange: { changes: `WxAdo_aeS`, type: M.ChangeHandler },
        vPHddDkEl: {
          __defaultAssetReference: `data:framer/asset-reference,mPnXvNY9pQpvrTYtd7Y2RPFR4PY.png?originalFilename=Team+Members+%281%29.png&width=400&height=430`,
          __vekterDefault: {
            alt: `Team Image`,
            assetReference: `data:framer/asset-reference,mPnXvNY9pQpvrTYtd7Y2RPFR4PY.png?originalFilename=Team+Members+%281%29.png&width=400&height=430`,
          },
          title: `07 Thumbnail`,
          type: M.ResponsiveImage,
        },
        vvoDOO9mD: { title: `07 X Link`, type: M.Link },
        U8qMsR622: { title: `07 Instagram Link`, type: M.Link },
        YSKDgYJwl: { title: `07 Linkedin Link`, type: M.Link },
      }),
      y(
        dn,
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
          ...zt,
          ...Ut,
          ...R(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (dn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([A(He, {}, t), A(K, {}, t)])),
      }));
  }))();
}
function pn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn;
function On() {
  return (On = e(() => {
    (u(),
      x(),
      p(),
      r(),
      Se(),
      (mn = { G76WoWzRu: { hover: !0 } }),
      (hn = [`G76WoWzRu`, `DfVZQfIfw`, `SfKdPdEvH`]),
      (gn = `framer-UvKwh`),
      (_n = {
        DfVZQfIfw: `framer-v-735dcc`,
        G76WoWzRu: `framer-v-es89y6`,
        SfKdPdEvH: `framer-v-17dxtsz`,
      }),
      (vn = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (yn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (bn = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: t });
      }),
      (xn = d.create(t)),
      (Sn = { Desktop: `G76WoWzRu`, Phone: `SfKdPdEvH`, Tablet: `DfVZQfIfw` }),
      (Cn = ({ height: e, icon: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        B2WNaV5sd: r ?? o.B2WNaV5sd,
        nOfgbJpAf: i ?? o.nOfgbJpAf ?? `Product assembly`,
        TLC1c3xPP: t ??
          o.TLC1c3xPP ?? {
            alt: `Arrow Icon`,
            pixelHeight: 15,
            pixelWidth: 18,
            src: `../../assets/images/C067T0b40PEMy72olb4imb09wQ.svg`,
          },
        variant: Sn[o.variant] ?? o.variant ?? `G76WoWzRu`,
      })),
      (wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Tn = /*#__PURE__*/ l(function (e, n) {
        let r = i(null),
          a = n ?? r,
          o = ee(),
          { activeLocale: l, setLocale: u } = re(),
          f = ie(),
          {
            style: p,
            className: m,
            layoutId: v,
            variant: y,
            nOfgbJpAf: b,
            TLC1c3xPP: x,
            B2WNaV5sd: S,
            ...C
          } = Cn(e),
          {
            baseVariant: w,
            classNames: ne,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: ae,
            setGestureState: k,
            setVariant: A,
            variants: se,
          } = _({
            cycleOrder: hn,
            defaultVariant: `G76WoWzRu`,
            enabledGestures: mn,
            ref: a,
            variant: y,
            variantClassNames: _n,
          }),
          M = wn(e, se),
          ce = j(gn, xe);
        return /*#__PURE__*/ c(te, {
          id: v ?? o,
          children: /*#__PURE__*/ c(xn, {
            animate: se,
            initial: !1,
            children: /*#__PURE__*/ c(bn, {
              value: vn,
              children: /*#__PURE__*/ c(oe, {
                href: S,
                motionChild: !0,
                nodeId: `G76WoWzRu`,
                openInNewTab: !1,
                scopeId: `XZb4BXTNR`,
                smoothScroll: !0,
                children: /*#__PURE__*/ s(d.a, {
                  ...C,
                  ...E,
                  className: `${j(ce, `framer-es89y6`, m, ne)} framer-1ftjy4i`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `G76WoWzRu`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-79ab7225-42eb-4a86-ad64-3b3241d197f9, rgb(209, 209, 209))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...p,
                  },
                  variants: {
                    "G76WoWzRu-hover": {
                      "--border-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                    },
                  },
                  ...pn(
                    {
                      "G76WoWzRu-hover": { "data-framer-name": void 0 },
                      DfVZQfIfw: { "data-framer-name": `Tablet` },
                      SfKdPdEvH: { "data-framer-name": `Phone` },
                    },
                    w,
                    D
                  ),
                  children: [
                    /*#__PURE__*/ c(g, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(t, {
                        children: /*#__PURE__*/ c(d.p, {
                          className: `framer-styles-preset-gf9yid`,
                          "data-styles-preset": `XorWCRDBg`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                          },
                          children: `Product assembly`,
                        }),
                      }),
                      className: `framer-jsjm53`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `JRmG2aR5f`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                      },
                      text: b,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ c(d.div, {
                      className: `framer-yanoli`,
                      "data-framer-name": `Icon`,
                      layoutDependency: M,
                      layoutId: `BAsuVpnAh`,
                      children: /*#__PURE__*/ c(O, {
                        background: {
                          alt: `Arrow Icon`,
                          fit: `fit`,
                          loading: h((f?.y || 0) + 16 + 2),
                          pixelHeight: 15,
                          pixelWidth: 18,
                          sizes: `17px`,
                          ...yn(x),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-kqiu2a`,
                        layoutDependency: M,
                        layoutId: `oAeYFOY5E`,
                        ...pn(
                          {
                            SfKdPdEvH: {
                              background: {
                                alt: `Arrow Icon`,
                                fit: `fit`,
                                loading: h((f?.y || 0) + 10 + 2),
                                pixelHeight: 15,
                                pixelWidth: 18,
                                sizes: `17px`,
                                ...yn(x),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                          },
                          w,
                          D
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (En = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-UvKwh.framer-1ftjy4i, .framer-UvKwh .framer-1ftjy4i { display: block; }`,
        `.framer-UvKwh.framer-es89y6 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 0px 16px 0px; position: relative; text-decoration: none; width: 200px; }`,
        `.framer-UvKwh .framer-jsjm53 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-UvKwh .framer-yanoli { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-UvKwh .framer-kqiu2a { flex: none; height: 18px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 17px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-UvKwh.framer-v-735dcc.framer-es89y6 { cursor: unset; }`,
        `.framer-UvKwh.framer-v-17dxtsz.framer-es89y6 { cursor: unset; padding: 10px 0px 10px 0px; }`,
        ...pe,
        `.framer-UvKwh[data-border="true"]::after, .framer-UvKwh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Dn = I(Tn, En, `framer-UvKwh`)),
      (Dn.displayName = `Service List Card`),
      (Dn.defaultProps = { height: 54, width: 200 }),
      v(Dn, {
        variant: {
          options: [`G76WoWzRu`, `DfVZQfIfw`, `SfKdPdEvH`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        nOfgbJpAf: {
          defaultValue: `Product assembly`,
          displayTextArea: !0,
          title: `Title`,
          type: M.String,
        },
        TLC1c3xPP: {
          __defaultAssetReference: `data:framer/asset-reference,C067T0b40PEMy72olb4imb09wQ.svg?originalFilename=Link+Arrow.svg&width=18&height=15`,
          __vekterDefault: {
            alt: `Arrow Icon`,
            assetReference: `data:framer/asset-reference,C067T0b40PEMy72olb4imb09wQ.svg?originalFilename=Link+Arrow.svg&width=18&height=15`,
          },
          title: `Icon`,
          type: M.ResponsiveImage,
        },
        B2WNaV5sd: { title: `Link`, type: M.Link },
      }),
      y(
        Dn,
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
          ...R(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  X,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  Z,
  tr,
  nr,
  rr,
  ir,
  Q,
  ar,
  or,
  sr,
  cr,
  $,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr;
function Cr() {
  return (Cr = e(() => {
    (u(),
      x(),
      p(),
      r(),
      we(),
      z(),
      fn(),
      Me(),
      ge(),
      De(),
      Te(),
      Ve(),
      Ue(),
      On(),
      Ee(),
      Ye(),
      V(),
      Ze(),
      Ge(),
      Le(),
      at(),
      tt(),
      Fe(),
      lt(),
      (kn = S(He)),
      (An = C(T)),
      (jn = C(g)),
      (Mn = S(Ce)),
      (Nn = C(d.div)),
      (Pn = S(We)),
      (Fn = b(g)),
      (In = S(_e)),
      (Ln = S(ke)),
      (X = b(d.div)),
      (Rn = m(d.div)),
      (zn = S(Dn)),
      (Bn = b(T)),
      (Vn = S(B)),
      (Hn = S(Ae)),
      (Un = S(Oe)),
      (Wn = S(dn)),
      (Gn = S(je)),
      (Kn = {
        kOoRlikFh: `(max-width: 809.98px)`,
        oGWSTAMdf: `(min-width: 1200px)`,
        ZC8CooFVc: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (qn = () => typeof document < `u`),
      (Jn = []),
      (Yn = `framer-1XNuX`),
      (Xn = {
        kOoRlikFh: `framer-v-lttcpw`,
        oGWSTAMdf: `framer-v-17h5tgm`,
        ZC8CooFVc: `framer-v-rocrlx`,
      }),
      (Zn = (e, t, n) => (e && t ? `position` : n)),
      (Qn = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      ($n = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qn,
        x: 0,
        y: 0,
      }),
      (er = {
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
      (tr = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (nr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: tr,
        x: 0,
        y: 0,
      }),
      (rr = { delay: 0.1, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ir = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: rr,
        x: 0,
        y: 0,
      }),
      (Q = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (ar = { delay: 0.15, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (or = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ar,
        x: 0,
        y: 0,
      }),
      (sr = { delay: 0.2, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (cr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: sr,
        x: 0,
        y: 0,
      }),
      ($ = {
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
      (lr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Qn,
        x: 0,
        y: 40,
      }),
      (ur = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: tr,
        x: 0,
        y: 40,
      }),
      (dr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: rr,
        x: 0,
        y: 40,
      }),
      (fr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ar,
        x: 0,
        y: 40,
      }),
      (pr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: sr,
        x: 0,
        y: 40,
      }),
      (mr = () => ({
        from: { alias: `hBjHmkbm7`, data: Xe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 4 },
        select: [
          { collection: `hBjHmkbm7`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `hBjHmkbm7`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `hBjHmkbm7`, name: `id`, type: `Identifier` },
        ],
      })),
      (hr = ({ query: e, pageSize: t, children: n }) => n(fe(e))),
      (gr = ({ value: e }) =>
        se()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (_r = { Desktop: `oGWSTAMdf`, Phone: `kOoRlikFh`, Tablet: `ZC8CooFVc` }),
      (vr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: _r[r.variant] ?? r.variant ?? `oGWSTAMdf`,
      })),
      (yr = /*#__PURE__*/ l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          p = ee(),
          { activeLocale: m, setLocale: h } = re(),
          _ = ie(),
          { style: v, className: y, layoutId: b, variant: x, ...S } = vr(e),
          C = n(() => ut({}, m), [m]);
        P(C);
        let [A, oe] = ae(x, Kn, !1),
          se = j(Yn, et, Be, Ie, it, ct, H, Je),
          M = o(N)?.isLayoutTemplate,
          ce = !!o(f)?.transition?.layout,
          F = Zn(M, ce),
          I = () => !qn() || A !== `kOoRlikFh`,
          fe = () => !qn() || ![`ZC8CooFVc`, `kOoRlikFh`].includes(A);
        de();
        let R = E(`kHn4h2prn`),
          pe = i(null);
        return (
          D({}),
          /*#__PURE__*/ c(N.Provider, {
            value: { primaryVariantId: `oGWSTAMdf`, variantClassNames: Xn },
            children: /*#__PURE__*/ s(te, {
              id: b ?? p,
              children: [
                /*#__PURE__*/ c(gr, {
                  value: `html body { background: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ s(d.div, {
                  ...S,
                  className: j(se, `framer-17h5tgm`, y),
                  ref: u,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ s(d.main, {
                      className: `framer-10ioq77`,
                      "data-framer-name": `Main`,
                      layout: F,
                      children: [
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-sg1uyd`,
                          "data-framer-name": `Hero`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1czb5ho`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-ug24t1`,
                                  "data-framer-name": `Title/Badge`,
                                  children: [
                                    /*#__PURE__*/ c(k, {
                                      height: 33,
                                      children: /*#__PURE__*/ c(An, {
                                        animate: $n,
                                        className: `framer-g9jujs-container`,
                                        "data-framer-appear-id": `g9jujs`,
                                        initial: er,
                                        nodeId: `m9n41R1MX`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(He, {
                                          height: `100%`,
                                          id: `m9n41R1MX`,
                                          layoutId: `m9n41R1MX`,
                                          RX1q43PHo: `Who we are`,
                                          variant: Z(`hi1tTl8yF`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ c(jn, {
                                      __fromCanvasComponent: !0,
                                      animate: nr,
                                      children: /*#__PURE__*/ c(t, {
                                        children: /*#__PURE__*/ c(`h1`, {
                                          className: `framer-styles-preset-891qt7`,
                                          "data-styles-preset": `lR3sdILUN`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: `About us`,
                                        }),
                                      }),
                                      className: `framer-wvs9qy`,
                                      "data-framer-appear-id": `wvs9qy`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      initial: er,
                                      optimized: !0,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-70hkf0`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-psjgwf`,
                                      "data-framer-name": `Image/Text`,
                                      children: [
                                        /*#__PURE__*/ s(Nn, {
                                          animate: ir,
                                          className: `framer-8321lf`,
                                          "data-framer-appear-id": `8321lf`,
                                          "data-framer-name": `Image`,
                                          initial: er,
                                          optimized: !0,
                                          children: [
                                            /*#__PURE__*/ c(k, {
                                              height: 50,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-15lnkjm-container`,
                                                nodeId: `GhRwlH7F6`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ c(Ce, {
                                                    height: `100%`,
                                                    id: `GhRwlH7F6`,
                                                    layoutId: `GhRwlH7F6`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ c(k, {
                                              height: 50,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-9zcmxm-container`,
                                                nodeId: `Y9CeIOELT`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ c(Ce, {
                                                    aEbvs76M6: Q(
                                                      {
                                                        pixelHeight: 121,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `Y9CeIOELT`,
                                                    layoutId: `Y9CeIOELT`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ c(k, {
                                              height: 50,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-lpc3wx-container`,
                                                nodeId: `mHsUb7HmB`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ c(Ce, {
                                                    aEbvs76M6: Q(
                                                      {
                                                        pixelHeight: 121,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `mHsUb7HmB`,
                                                    layoutId: `mHsUb7HmB`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ c(k, {
                                              height: 50,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-yify3-container`,
                                                nodeId: `bnkIqgTCC`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: { variant: Z(`BIRbV3LAU`) },
                                                  },
                                                  children: /*#__PURE__*/ c(Ce, {
                                                    aEbvs76M6: Q(
                                                      {
                                                        pixelHeight: 121,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/crOykN7l4AlMK9acNXCVRzJmcg.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `bnkIqgTCC`,
                                                    layoutId: `bnkIqgTCC`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`Yh1RI_Dm8`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ c(k, {
                                              height: 50,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-115r9dh-container`,
                                                nodeId: `DzRMbiIKz`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: { variant: Z(`x7NfOy7ak`) },
                                                  },
                                                  children: /*#__PURE__*/ c(Ce, {
                                                    aEbvs76M6: Q(
                                                      {
                                                        pixelHeight: 121,
                                                        pixelWidth: 120,
                                                        src: `../../assets/images/crOykN7l4AlMK9acNXCVRzJmcg.png`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `DzRMbiIKz`,
                                                    layoutId: `DzRMbiIKz`,
                                                    N1uOc8q4J: `10+`,
                                                    variant: Z(`VJjIj4IuP`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: {
                                            kOoRlikFh: {
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-15frtqy`,
                                                  "data-styles-preset": `P89o9sRK1`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                                  },
                                                  children: `Team of passionate professionals`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: /*#__PURE__*/ c(jn, {
                                            __fromCanvasComponent: !0,
                                            animate: or,
                                            children: /*#__PURE__*/ c(t, {
                                              children: /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-15frtqy`,
                                                "data-styles-preset": `P89o9sRK1`,
                                                style: {
                                                  "--framer-text-color": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                                },
                                                children: `Team of passionate professionals`,
                                              }),
                                            }),
                                            className: `framer-1sxux0k`,
                                            "data-framer-appear-id": `1sxux0k`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            initial: er,
                                            optimized: !0,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ c(L, {
                                      breakpoint: A,
                                      overrides: {
                                        kOoRlikFh: {
                                          children: /*#__PURE__*/ c(t, {
                                            children: /*#__PURE__*/ c(`p`, {
                                              className: `framer-styles-preset-15frtqy`,
                                              "data-styles-preset": `P89o9sRK1`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                              },
                                              children: `21.0278° N, 105.8342° E`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: /*#__PURE__*/ c(jn, {
                                        __fromCanvasComponent: !0,
                                        animate: cr,
                                        children: /*#__PURE__*/ c(t, {
                                          children: /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-15frtqy`,
                                            "data-styles-preset": `P89o9sRK1`,
                                            style: {
                                              "--framer-text-alignment": `right`,
                                              "--framer-text-color": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                            },
                                            children: `21.0278° N, 105.8342° E`,
                                          }),
                                        }),
                                        className: `framer-1m4tvi9`,
                                        "data-framer-appear-id": `1m4tvi9`,
                                        "data-framer-name": `Text`,
                                        fonts: [`Inter`],
                                        initial: er,
                                        optimized: !0,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-gnocja`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-146qeth`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-l05xqe`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-4flx8c`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    I() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-6l5gh8 hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    fe() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-egrqce hidden-rocrlx hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    fe() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-rpljbt hidden-rocrlx hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ c(L, {
                                  breakpoint: A,
                                  overrides: {
                                    kOoRlikFh: { height: 555 },
                                    ZC8CooFVc: { height: 465 },
                                  },
                                  children: /*#__PURE__*/ c(k, {
                                    height: 535,
                                    width: _?.width || `100vw`,
                                    children: /*#__PURE__*/ c(T, {
                                      className: `framer-1rji7ly-container`,
                                      nodeId: `g4U1wEecV`,
                                      scopeId: `L_B7D5dU4`,
                                      children: /*#__PURE__*/ c(We, {
                                        height: `100%`,
                                        id: `g4U1wEecV`,
                                        layoutId: `g4U1wEecV`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(O, {
                              background: {
                                alt: `Shadow`,
                                fit: `fit`,
                                pixelHeight: 653,
                                pixelWidth: 959,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `514px`,
                                src: `../../assets/images/E1jDGOHVkZTgyaHsMEICwHZGjKw.png`,
                                srcSet: `https://framerusercontent.com/images/E1jDGOHVkZTgyaHsMEICwHZGjKw.png?scale-down-to=512&width=959&height=653 512w,../../assets/images/E1jDGOHVkZTgyaHsMEICwHZGjKw.png 959w`,
                              },
                              className: `framer-nx7ghb`,
                              "data-framer-name": `BG Shadow`,
                              fitImageDimension: `height`,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-19jt8ba`,
                          "data-framer-name": `About Image`,
                          children: [
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-1djq6vg`,
                              "data-framer-name": `Left`,
                              children: /*#__PURE__*/ c(L, {
                                breakpoint: A,
                                overrides: {
                                  kOoRlikFh: {
                                    background: {
                                      alt: `About Image`,
                                      fit: `fill`,
                                      pixelHeight: 586,
                                      pixelWidth: 1337,
                                      sizes: `max(${_?.width || `100vw`}, 1px)`,
                                      src: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586`,
                                      srcSet: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?scale-down-to=512&width=1337&height=586 512w,../../assets/images/mDHvYwwBgzNKsz6p2whfEEbek.png 1024w,https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586 1337w`,
                                    },
                                    fitImageDimension: `height`,
                                  },
                                  ZC8CooFVc: {
                                    background: {
                                      alt: `About Image`,
                                      fit: `fill`,
                                      pixelHeight: 586,
                                      pixelWidth: 1337,
                                      sizes: `max(${_?.width || `100vw`} / 2, 1px)`,
                                      src: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586`,
                                      srcSet: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?scale-down-to=512&width=1337&height=586 512w,../../assets/images/mDHvYwwBgzNKsz6p2whfEEbek.png 1024w,https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586 1337w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ c(O, {
                                  background: {
                                    alt: `About Image`,
                                    fit: `fill`,
                                    pixelHeight: 586,
                                    pixelWidth: 1337,
                                    sizes: `max(${_?.width || `100vw`} / 1.76, 1px)`,
                                    src: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586`,
                                    srcSet: `https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?scale-down-to=512&width=1337&height=586 512w,../../assets/images/mDHvYwwBgzNKsz6p2whfEEbek.png 1024w,https://framerusercontent.com/images/mDHvYwwBgzNKsz6p2whfEEbek.png?width=1337&height=586 1337w`,
                                  },
                                  className: `framer-15c0oh7`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1al0hf7`,
                              "data-framer-name": `Right`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-syzbzk`,
                                  "data-framer-name": `Info`,
                                  children: [
                                    /*#__PURE__*/ c(Fn, {
                                      __framer__animate: { transition: Qn },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: lr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ c(t, {
                                        children: /*#__PURE__*/ c(`p`, {
                                          className: `framer-styles-preset-gf9yid`,
                                          "data-styles-preset": `XorWCRDBg`,
                                          style: {
                                            "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                          },
                                          children: `We are a team dedicated to precision engineering, delivering solutions that shape industries worldwide. Our journey is defined by trust, quality, and a commitment to excellence in every project.`,
                                        }),
                                      }),
                                      className: `framer-1b7txde`,
                                      "data-framer-name": `Description`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ s(X, {
                                      __framer__animate: { transition: tr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: ur,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1jjzy4j`,
                                      "data-framer-name": `Button`,
                                      children: [
                                        /*#__PURE__*/ c(w, {
                                          links: [
                                            {
                                              href: { hash: `:kHn4h2prn`, webPageId: `L_B7D5dU4` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:kHn4h2prn`, webPageId: `L_B7D5dU4` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:kHn4h2prn`, webPageId: `L_B7D5dU4` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            /*#__PURE__*/ c(k, {
                                              height: 52,
                                              children: /*#__PURE__*/ c(T, {
                                                className: `framer-mvrl4c-container`,
                                                nodeId: `MJC8LGXqW`,
                                                scopeId: `L_B7D5dU4`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: A,
                                                  overrides: {
                                                    kOoRlikFh: {
                                                      gr8i9ifqK: e[2],
                                                      variant: Z(`oP3WJd3dc`),
                                                    },
                                                    ZC8CooFVc: {
                                                      gr8i9ifqK: e[1],
                                                      variant: Z(`oP3WJd3dc`),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ c(_e, {
                                                    gr8i9ifqK: e[0],
                                                    height: `100%`,
                                                    id: `MJC8LGXqW`,
                                                    layoutId: `MJC8LGXqW`,
                                                    LkRCOsI08: `Meet our team`,
                                                    variant: Z(`J5IGQfKo3`),
                                                    width: `100%`,
                                                    xgHJht2Sv: !1,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        /*#__PURE__*/ c(k, {
                                          children: /*#__PURE__*/ c(T, {
                                            className: `framer-1q5kww3-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `NCK1U1I2C`,
                                            scopeId: `L_B7D5dU4`,
                                            children: /*#__PURE__*/ c(L, {
                                              breakpoint: A,
                                              overrides: {
                                                kOoRlikFh: {
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
                                                    image: Q(
                                                      {
                                                        pixelHeight: 17,
                                                        pixelWidth: 18,
                                                        src: `../../assets/images/ItS5wD1diL5d9iGGVUNZKXQ84.svg`,
                                                      },
                                                      `Icon`
                                                    ),
                                                    size: 16,
                                                    type: `Custom`,
                                                  },
                                                },
                                                ZC8CooFVc: { hoverOptions: void 0 },
                                              },
                                              children: /*#__PURE__*/ c(ke, {
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
                                                  image: Q(
                                                    {
                                                      pixelHeight: 17,
                                                      pixelWidth: 18,
                                                      src: `../../assets/images/ItS5wD1diL5d9iGGVUNZKXQ84.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                  size: 18,
                                                  type: `Custom`,
                                                },
                                                id: `NCK1U1I2C`,
                                                layoutId: `NCK1U1I2C`,
                                                srcFile: `https://framerusercontent.com/assets/v9AJ9QDAVxlfeZvrmT5L6X1m3I.pdf`,
                                                srcType: `Upload`,
                                                srcURL: ``,
                                                styleOptions: {
                                                  backgroundColor: `var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0))`,
                                                  borderRadius: 0,
                                                  color: `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
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
                                /*#__PURE__*/ c(L, {
                                  breakpoint: A,
                                  overrides: { kOoRlikFh: { tickerEffectGap: `10px` } },
                                  children: /*#__PURE__*/ s(Rn, {
                                    className: `framer-13vikz6`,
                                    tickerEffectAlign: `center`,
                                    tickerEffectDirectionModifier: `default`,
                                    tickerEffectDraggable: !0,
                                    tickerEffectEnabled: !0,
                                    tickerEffectGap: `20px`,
                                    tickerEffectHoverModifier: 0,
                                    tickerEffectOverflow: `visible`,
                                    tickerEffectPosition: `relative`,
                                    tickerEffectStackDirection: `row`,
                                    tickerEffectVelocity: 40,
                                    children: [
                                      /*#__PURE__*/ c(ne, {
                                        children: /*#__PURE__*/ c(g, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ c(t, {
                                            children: /*#__PURE__*/ c(`h2`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-color": `var(--token-9cb335c7-d9b7-4f24-bc71-dcc64f0aa310, rgba(255, 255, 255, 0.3))`,
                                              },
                                              children: `2005 SINCE`,
                                            }),
                                          }),
                                          className: `framer-ecduki`,
                                          "data-framer-name": `Title`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(ne, {
                                        children: /*#__PURE__*/ c(g, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ c(t, {
                                            children: /*#__PURE__*/ c(`h2`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-color": `var(--token-9cb335c7-d9b7-4f24-bc71-dcc64f0aa310, rgba(255, 255, 255, 0.3))`,
                                              },
                                              children: `-`,
                                            }),
                                          }),
                                          className: `framer-1j5nu8b`,
                                          "data-framer-name": `Dash`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(ne, {
                                        children: /*#__PURE__*/ c(g, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ c(t, {
                                            children: /*#__PURE__*/ c(`h2`, {
                                              className: `framer-styles-preset-891qt7`,
                                              "data-styles-preset": `lR3sdILUN`,
                                              style: {
                                                "--framer-text-color": `var(--token-9cb335c7-d9b7-4f24-bc71-dcc64f0aa310, rgba(255, 255, 255, 0.3))`,
                                              },
                                              children: `2005 SINCE -`,
                                            }),
                                          }),
                                          className: `framer-11enxsf`,
                                          "data-framer-name": `Title`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-1n0u5xp`,
                          "data-framer-name": `About`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-owfw97`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-1417pff`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    /*#__PURE__*/ c(X, {
                                      __framer__animate: { transition: Qn },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: lr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1v0ih3n`,
                                      "data-framer-name": `Badge`,
                                      children: /*#__PURE__*/ c(k, {
                                        height: 33,
                                        children: /*#__PURE__*/ c(T, {
                                          className: `framer-co2le4-container`,
                                          nodeId: `RrxC6cr70`,
                                          scopeId: `L_B7D5dU4`,
                                          children: /*#__PURE__*/ c(He, {
                                            height: `100%`,
                                            id: `RrxC6cr70`,
                                            layoutId: `RrxC6cr70`,
                                            RX1q43PHo: `Our journey`,
                                            variant: Z(`hi1tTl8yF`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ c(Fn, {
                                      __framer__animate: { transition: tr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: ur,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ c(t, {
                                        children: /*#__PURE__*/ s(`h2`, {
                                          className: `framer-styles-preset-2r53jr`,
                                          "data-styles-preset": `v03SSkN8P`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: [
                                            `Engineering trust and `,
                                            /*#__PURE__*/ c(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: `quality`,
                                            }),
                                            ` through years of manufacturing experience`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-46phky`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-1tosnt`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    /*#__PURE__*/ s(X, {
                                      __framer__animate: { transition: rr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: dr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-10rt9oc`,
                                      "data-framer-name": `Left`,
                                      children: [
                                        /*#__PURE__*/ c(`div`, {
                                          className: `framer-8ujudx`,
                                          "data-framer-name": `Overlay`,
                                        }),
                                        /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: {
                                            kOoRlikFh: {
                                              background: {
                                                alt: `Avatar`,
                                                fit: `fill`,
                                                pixelHeight: 286,
                                                pixelWidth: 251,
                                                sizes: `min(min(max(${_?.width || `100vw`}, 1px), 1360px) - 32px, 358px)`,
                                                src: `../../assets/images/tMMHEgy6P890uvZi1pvQn1Tco.png`,
                                              },
                                            },
                                            ZC8CooFVc: {
                                              background: {
                                                alt: `Avatar`,
                                                fit: `fill`,
                                                pixelHeight: 286,
                                                pixelWidth: 251,
                                                sizes: `calc((min(max(${_?.width || `100vw`}, 1px), 1360px) - 60px) * 0.4)`,
                                                src: `../../assets/images/tMMHEgy6P890uvZi1pvQn1Tco.png`,
                                              },
                                            },
                                          },
                                          children: /*#__PURE__*/ c(O, {
                                            background: {
                                              alt: `Avatar`,
                                              fit: `fill`,
                                              pixelHeight: 286,
                                              pixelWidth: 251,
                                              sizes: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 120px) / 3.5, 1px)`,
                                              src: `../../assets/images/tMMHEgy6P890uvZi1pvQn1Tco.png`,
                                            },
                                            className: `framer-ajbw45`,
                                            "data-framer-name": `Image`,
                                          }),
                                        }),
                                        /*#__PURE__*/ s(`div`, {
                                          className: `framer-net0kr`,
                                          "data-framer-name": `Content`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`h3`, {
                                                  className: `framer-styles-preset-1yngv0g`,
                                                  "data-styles-preset": `prOpMcG3Y`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Michael Bennett`,
                                                }),
                                              }),
                                              className: `framer-jr88y0`,
                                              "data-framer-name": `Name`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-e6ffea26-4f32-4dda-82ce-5911ab5ba2c5, rgb(167, 163, 162))`,
                                                  },
                                                  children: `Founder & CEO`,
                                                }),
                                              }),
                                              className: `framer-d9j7ek`,
                                              "data-framer-name": `Job Position`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-oviwd`,
                                      "data-framer-name": `Right`,
                                      children: [
                                        /*#__PURE__*/ s(X, {
                                          __framer__animate: { transition: ar },
                                          __framer__animateOnce: !0,
                                          __framer__enter: $,
                                          __framer__exit: fr,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-k7c64r`,
                                          "data-framer-name": `Left`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`h4`, {
                                                  className: `framer-styles-preset-1f8or04`,
                                                  "data-styles-preset": `GzMbxD0G0`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                  },
                                                  children: `Our story`,
                                                }),
                                              }),
                                              className: `framer-fzx6lu`,
                                              "data-framer-name": `Title`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ s(`div`, {
                                              className: `framer-1jitdlm`,
                                              "data-framer-name": `Description`,
                                              children: [
                                                /*#__PURE__*/ c(g, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ c(t, {
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      className: `framer-styles-preset-gf9yid`,
                                                      "data-styles-preset": `XorWCRDBg`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                                                      },
                                                      children: `We started with a vision to redefine manufacturing standards and provide solutions that industries can rely on. Over the years, we have grown into a team of skilled professionals equipped with cutting-edge technology, serving clients across diverse sectors and geographies.`,
                                                    }),
                                                  }),
                                                  className: `framer-fofviq`,
                                                  "data-framer-name": `Description`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ c(g, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ c(t, {
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      className: `framer-styles-preset-gf9yid`,
                                                      "data-styles-preset": `XorWCRDBg`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                                                      },
                                                      children: `What drives us is not just producing components, but delivering value — ensuring every part we manufacture contributes to our client’s success. Our commitment to quality, timely delivery, and innovation has helped us establish long-term partnerships with leading businesses worldwide`,
                                                    }),
                                                  }),
                                                  className: `framer-ibihy8`,
                                                  "data-framer-name": `Description`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ s(X, {
                                          __framer__animate: { transition: sr },
                                          __framer__animateOnce: !0,
                                          __framer__enter: $,
                                          __framer__exit: pr,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-12jqn`,
                                          "data-framer-name": `Right`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`h5`, {
                                                  className: `framer-styles-preset-1f8or04`,
                                                  "data-styles-preset": `GzMbxD0G0`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                                  },
                                                  children: `Our capabilities`,
                                                }),
                                              }),
                                              className: `framer-1nixmb1`,
                                              "data-framer-name": `Title`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(`div`, {
                                              className: `framer-191c1dl`,
                                              "data-framer-name": `Description`,
                                              children: /*#__PURE__*/ c(`div`, {
                                                className: `framer-1xzjcvr`,
                                                children: /*#__PURE__*/ c(le, {
                                                  children: /*#__PURE__*/ c(hr, {
                                                    query: mr(),
                                                    children: (e, t, n) =>
                                                      /*#__PURE__*/ c(a, {
                                                        children: e?.map(
                                                          (
                                                            { IAu1rJT3C: e, id: t, NPodIY0by: n },
                                                            r
                                                          ) => (
                                                            (e ??= ``),
                                                            (n ??= ``),
                                                            /*#__PURE__*/ c(
                                                              te,
                                                              {
                                                                id: `hBjHmkbm7-${t}`,
                                                                children: /*#__PURE__*/ c(
                                                                  ue.Provider,
                                                                  {
                                                                    value: { NPodIY0by: n },
                                                                    children: /*#__PURE__*/ c(
                                                                      `div`,
                                                                      {
                                                                        className: `framer-b49jzf`,
                                                                        children: /*#__PURE__*/ c(
                                                                          w,
                                                                          {
                                                                            links: [
                                                                              {
                                                                                href: {
                                                                                  pathVariables: {
                                                                                    NPodIY0by: n,
                                                                                  },
                                                                                  webPageId: `LC6KZ5P6V`,
                                                                                },
                                                                                implicitPathVariables:
                                                                                  void 0,
                                                                              },
                                                                              {
                                                                                href: {
                                                                                  pathVariables: {
                                                                                    NPodIY0by: n,
                                                                                  },
                                                                                  webPageId: `LC6KZ5P6V`,
                                                                                },
                                                                                implicitPathVariables:
                                                                                  void 0,
                                                                              },
                                                                              {
                                                                                href: {
                                                                                  pathVariables: {
                                                                                    NPodIY0by: n,
                                                                                  },
                                                                                  webPageId: `LC6KZ5P6V`,
                                                                                },
                                                                                implicitPathVariables:
                                                                                  void 0,
                                                                              },
                                                                            ],
                                                                            children: (t) =>
                                                                              /*#__PURE__*/ c(L, {
                                                                                breakpoint: A,
                                                                                overrides: {
                                                                                  kOoRlikFh: {
                                                                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1360px) - 32px, 1px)`,
                                                                                  },
                                                                                  ZC8CooFVc: {
                                                                                    width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 110px) / 2, 1px)`,
                                                                                  },
                                                                                },
                                                                                children:
                                                                                  /*#__PURE__*/ c(
                                                                                    k,
                                                                                    {
                                                                                      height: 54,
                                                                                      width: `max((max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 120px) / 1.4, 1px) - 60px) / 2, 1px)`,
                                                                                      children:
                                                                                        /*#__PURE__*/ c(
                                                                                          T,
                                                                                          {
                                                                                            className: `framer-18obo22-container`,
                                                                                            nodeId: `a0XSCjFr5`,
                                                                                            scopeId: `L_B7D5dU4`,
                                                                                            children:
                                                                                              /*#__PURE__*/ c(
                                                                                                L,
                                                                                                {
                                                                                                  breakpoint:
                                                                                                    A,
                                                                                                  overrides:
                                                                                                    {
                                                                                                      kOoRlikFh:
                                                                                                        {
                                                                                                          B2WNaV5sd:
                                                                                                            t[2],
                                                                                                          variant:
                                                                                                            Z(
                                                                                                              `SfKdPdEvH`
                                                                                                            ),
                                                                                                        },
                                                                                                      ZC8CooFVc:
                                                                                                        {
                                                                                                          B2WNaV5sd:
                                                                                                            t[1],
                                                                                                          variant:
                                                                                                            Z(
                                                                                                              `DfVZQfIfw`
                                                                                                            ),
                                                                                                        },
                                                                                                    },
                                                                                                  children:
                                                                                                    /*#__PURE__*/ c(
                                                                                                      Dn,
                                                                                                      {
                                                                                                        B2WNaV5sd:
                                                                                                          t[0],
                                                                                                        height: `100%`,
                                                                                                        id: `a0XSCjFr5`,
                                                                                                        layoutId: `a0XSCjFr5`,
                                                                                                        nOfgbJpAf:
                                                                                                          e,
                                                                                                        style:
                                                                                                          {
                                                                                                            width: `100%`,
                                                                                                          },
                                                                                                        variant:
                                                                                                          Z(
                                                                                                            `G76WoWzRu`
                                                                                                          ),
                                                                                                        width: `100%`,
                                                                                                      }
                                                                                                    ),
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                              }),
                                                                          }
                                                                        ),
                                                                      }
                                                                    ),
                                                                  }
                                                                ),
                                                              },
                                                              t
                                                            )
                                                          )
                                                        ),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            /*#__PURE__*/ c(w, {
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
                                                /*#__PURE__*/ c(k, {
                                                  height: 52,
                                                  children: /*#__PURE__*/ c(T, {
                                                    className: `framer-w7hxf0-container`,
                                                    nodeId: `SjuWcY0Ni`,
                                                    scopeId: `L_B7D5dU4`,
                                                    children: /*#__PURE__*/ c(L, {
                                                      breakpoint: A,
                                                      overrides: {
                                                        kOoRlikFh: {
                                                          gr8i9ifqK: e[2],
                                                          variant: Z(`oP3WJd3dc`),
                                                        },
                                                        ZC8CooFVc: {
                                                          gr8i9ifqK: e[1],
                                                          variant: Z(`oP3WJd3dc`),
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ c(_e, {
                                                        gr8i9ifqK: e[0],
                                                        height: `100%`,
                                                        id: `SjuWcY0Ni`,
                                                        layoutId: `SjuWcY0Ni`,
                                                        LkRCOsI08: `View all capabilities`,
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
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1yu5aqa`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-1r74pct`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-13v18fh`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-9xgvt9`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    I() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1tgtb2l hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    fe() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-ob2fs hidden-rocrlx hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    fe() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1rzkcx9 hidden-rocrlx hidden-lttcpw`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ c(L, {
                                  breakpoint: A,
                                  overrides: {
                                    kOoRlikFh: { height: 1332 },
                                    ZC8CooFVc: { height: 1226.2 },
                                  },
                                  children: /*#__PURE__*/ c(k, {
                                    height: 999.4,
                                    width: _?.width || `100vw`,
                                    children: /*#__PURE__*/ c(T, {
                                      className: `framer-10fxpqa-container`,
                                      nodeId: `V8GtBZoxj`,
                                      scopeId: `L_B7D5dU4`,
                                      children: /*#__PURE__*/ c(We, {
                                        height: `100%`,
                                        id: `V8GtBZoxj`,
                                        layoutId: `V8GtBZoxj`,
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
                          className: `framer-1h0d0cr`,
                          "data-framer-name": `Client`,
                          children: /*#__PURE__*/ s(`div`, {
                            className: `framer-1psoxz2`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-vix9pv`,
                                "data-framer-name": `Top`,
                                children: [
                                  /*#__PURE__*/ c(k, {
                                    height: 33,
                                    children: /*#__PURE__*/ c(Bn, {
                                      __framer__animate: { transition: Qn },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: lr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-n4c0y9-container`,
                                      nodeId: `hYZokc_Ce`,
                                      rendersWithMotion: !0,
                                      scopeId: `L_B7D5dU4`,
                                      children: /*#__PURE__*/ c(He, {
                                        height: `100%`,
                                        id: `hYZokc_Ce`,
                                        layoutId: `hYZokc_Ce`,
                                        RX1q43PHo: `Our clients`,
                                        variant: Z(`R_XotlKFx`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(Fn, {
                                    __framer__animate: { transition: tr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: $,
                                    __framer__exit: ur,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ s(`h2`, {
                                        className: `framer-styles-preset-2r53jr`,
                                        "data-styles-preset": `v03SSkN8P`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                        },
                                        children: [
                                          `Trusted by `,
                                          /*#__PURE__*/ c(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                            },
                                            children: `industry`,
                                          }),
                                          ` leaders`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-a9318k`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(X, {
                                __framer__animate: { transition: rr },
                                __framer__animateOnce: !0,
                                __framer__enter: $,
                                __framer__exit: dr,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-16vto94`,
                                "data-framer-name": `Center`,
                                children: [
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-12f3ihy-container`,
                                        nodeId: `tB0mZgtae`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `tB0mZgtae`,
                                            layoutId: `tB0mZgtae`,
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1jre6j2-container`,
                                        nodeId: `tbpNAqhdj`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `tbpNAqhdj`,
                                            layoutId: `tbpNAqhdj`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 93,
                                                src: `../../assets/images/BvZomeQDc5TuXtVugasI3vjA.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1ddqyh1-container`,
                                        nodeId: `PIT2zRPQD`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `PIT2zRPQD`,
                                            layoutId: `PIT2zRPQD`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 99,
                                                src: `../../assets/images/BAmFSi2zDMhpaE7hI1HjoHTKUM.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-u6zt9c-container`,
                                        nodeId: `Xeq8Zik6b`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `Xeq8Zik6b`,
                                            layoutId: `Xeq8Zik6b`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 88,
                                                src: `../../assets/images/e5YBm1OqZwwtrOjfApIJrIomdM.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1y29vi3-container`,
                                        nodeId: `o6UlANScg`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `o6UlANScg`,
                                            layoutId: `o6UlANScg`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 26,
                                                pixelWidth: 108,
                                                src: `../../assets/images/509cFwvGZfkVPdYW7zVHR7EYWt0.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1ncw7i0-container`,
                                        nodeId: `ALN9fzisr`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `ALN9fzisr`,
                                            layoutId: `ALN9fzisr`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 34,
                                                pixelWidth: 109,
                                                src: `../../assets/images/beRZrWDYxb5i7Y1Z00iFBVzwAog.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-t0r8x9-container`,
                                        nodeId: `Ome8hwpcg`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `Ome8hwpcg`,
                                            layoutId: `Ome8hwpcg`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 40,
                                                pixelWidth: 91,
                                                src: `../../assets/images/Jq1zwerPuAxxeeU8AdM3nowkc2Q.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1w0xzfz-container`,
                                        nodeId: `EICVNhre_`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `EICVNhre_`,
                                            layoutId: `EICVNhre_`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 24,
                                                pixelWidth: 115,
                                                src: `../../assets/images/wiofWjcMmYrLE1oQSPB7XuGaoQE.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-13l0whe-container`,
                                        nodeId: `JRxiAS9sm`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `JRxiAS9sm`,
                                            layoutId: `JRxiAS9sm`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 20,
                                                pixelWidth: 90,
                                                src: `../../assets/images/3Cxx7iwvWPeS07lOqbP4uN0ugVw.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 52px) / 2, 50px)`,
                                      },
                                      ZC8CooFVc: {
                                        width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 150px) / 4, 50px)`,
                                      },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 126,
                                      width: `max((min(max(${_?.width || `100vw`}, 1px), 1360px) - 180px) / 5, 50px)`,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-1aboibe-container`,
                                        nodeId: `nzrQMkKY7`,
                                        scopeId: `L_B7D5dU4`,
                                        children: /*#__PURE__*/ c(L, {
                                          breakpoint: A,
                                          overrides: { kOoRlikFh: { variant: Z(`UsusRl9Ip`) } },
                                          children: /*#__PURE__*/ c(B, {
                                            height: `100%`,
                                            id: `nzrQMkKY7`,
                                            layoutId: `nzrQMkKY7`,
                                            qeYLOypnx: Q(
                                              {
                                                pixelHeight: 26,
                                                pixelWidth: 104,
                                                src: `../../assets/images/dxvFJfI99FFNZlbLN3YUGgrns.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                            style: { width: `100%` },
                                            variant: Z(`fr0cVp952`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(X, {
                                __framer__animate: { transition: ar },
                                __framer__animateOnce: !0,
                                __framer__enter: $,
                                __framer__exit: fr,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1xqa19y`,
                                "data-framer-name": `Divider`,
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-r9eztz`,
                                "data-framer-name": `Bottom`,
                                children: [
                                  /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: {
                                        children: /*#__PURE__*/ c(t, {
                                          children: /*#__PURE__*/ s(`h3`, {
                                            className: `framer-styles-preset-1f8or04`,
                                            "data-styles-preset": `GzMbxD0G0`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                            },
                                            children: [
                                              /*#__PURE__*/ c(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                },
                                                children: `20 Years`,
                                              }),
                                              ` of manufacturing excellence & recognition`,
                                            ],
                                          }),
                                        }),
                                      },
                                      ZC8CooFVc: {
                                        children: /*#__PURE__*/ c(t, {
                                          children: /*#__PURE__*/ s(`h3`, {
                                            className: `framer-styles-preset-1f8or04`,
                                            "data-styles-preset": `GzMbxD0G0`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                            },
                                            children: [
                                              /*#__PURE__*/ c(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                                },
                                                children: `20 Years`,
                                              }),
                                              ` of manufacturing excellence & recognition`,
                                            ],
                                          }),
                                        }),
                                      },
                                    },
                                    children: /*#__PURE__*/ c(Fn, {
                                      __framer__animate: { transition: ar },
                                      __framer__animateOnce: !0,
                                      __framer__enter: $,
                                      __framer__exit: fr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ c(t, {
                                        children: /*#__PURE__*/ s(`h3`, {
                                          className: `framer-styles-preset-1f8or04`,
                                          "data-styles-preset": `GzMbxD0G0`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                          },
                                          children: [
                                            /*#__PURE__*/ c(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: `20 Years`,
                                            }),
                                            ` of manufacturing excellence & recognition`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-78dijp`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ s(X, {
                                    __framer__animate: { transition: sr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: $,
                                    __framer__exit: pr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-18s8xds`,
                                    "data-framer-name": `Images`,
                                    children: [
                                      /*#__PURE__*/ c(L, {
                                        breakpoint: A,
                                        overrides: {
                                          kOoRlikFh: {
                                            background: {
                                              alt: `Award Image`,
                                              fit: `fit`,
                                              pixelHeight: 120,
                                              pixelWidth: 94,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `60px`,
                                              src: `../../assets/images/jFkGEvPLEoapc7YoPWhJXClio4.svg`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ c(O, {
                                          background: {
                                            alt: `Award Image`,
                                            fit: `fit`,
                                            pixelHeight: 120,
                                            pixelWidth: 94,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `100px`,
                                            src: `../../assets/images/jFkGEvPLEoapc7YoPWhJXClio4.svg`,
                                          },
                                          className: `framer-19cct6s`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(L, {
                                        breakpoint: A,
                                        overrides: {
                                          kOoRlikFh: {
                                            background: {
                                              alt: `Award Image`,
                                              fit: `fit`,
                                              pixelHeight: 92,
                                              pixelWidth: 93,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `60px`,
                                              src: `../../assets/images/7eTjJUHqbS33vmBMcDh6fM.svg`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ c(O, {
                                          background: {
                                            alt: `Award Image`,
                                            fit: `fit`,
                                            pixelHeight: 92,
                                            pixelWidth: 93,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `100px`,
                                            src: `../../assets/images/7eTjJUHqbS33vmBMcDh6fM.svg`,
                                          },
                                          className: `framer-1enw822`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(L, {
                                        breakpoint: A,
                                        overrides: {
                                          kOoRlikFh: {
                                            background: {
                                              alt: `Award Image`,
                                              fit: `fit`,
                                              pixelHeight: 100,
                                              pixelWidth: 101,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `60px`,
                                              src: `../../assets/images/i2s9yVp0vrkUoxFshyb83YP7rLQ.svg`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ c(O, {
                                          background: {
                                            alt: `Award Image`,
                                            fit: `fit`,
                                            pixelHeight: 100,
                                            pixelWidth: 101,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `100px`,
                                            src: `../../assets/images/i2s9yVp0vrkUoxFshyb83YP7rLQ.svg`,
                                          },
                                          className: `framer-13eh59b`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(L, {
                                        breakpoint: A,
                                        overrides: {
                                          kOoRlikFh: {
                                            background: {
                                              alt: `Award Image`,
                                              fit: `fit`,
                                              pixelHeight: 92,
                                              pixelWidth: 93,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `60px`,
                                              src: `../../assets/images/lpYhgv5O2CxYUdTZVZ2uj7Cvnwk.svg`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ c(O, {
                                          background: {
                                            alt: `Award Image`,
                                            fit: `fit`,
                                            pixelHeight: 92,
                                            pixelWidth: 93,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `100px`,
                                            src: `../../assets/images/lpYhgv5O2CxYUdTZVZ2uj7Cvnwk.svg`,
                                          },
                                          className: `framer-1sm5d5e`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-1yo5a1s`,
                          "data-framer-name": `Video`,
                          children: [
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-y3ue0d`,
                              "data-framer-name": `Container`,
                              children: /*#__PURE__*/ s(`div`, {
                                className: `framer-1aemxrk`,
                                "data-framer-name": `Content`,
                                children: [
                                  /*#__PURE__*/ s(X, {
                                    __framer__animate: { transition: Qn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: $,
                                    __framer__exit: lr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-17hnocy`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-nmbfp8`,
                                        "data-framer-name": `Divider`,
                                      }),
                                      /*#__PURE__*/ c(g, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ c(t, {
                                          children: /*#__PURE__*/ c(`h2`, {
                                            className: `framer-styles-preset-1b4mdza`,
                                            "data-styles-preset": `mOcxLNaxt`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                            },
                                            children: `Delivering quality across industries and borders.`,
                                          }),
                                        }),
                                        className: `framer-df1xm9`,
                                        "data-framer-name": `Title`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ s(X, {
                                    __framer__animate: { transition: tr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: $,
                                    __framer__exit: ur,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-bog4q8`,
                                    "data-framer-name": `Bottom`,
                                    children: [
                                      /*#__PURE__*/ c(k, {
                                        children: /*#__PURE__*/ c(T, {
                                          className: `framer-k6mnpv-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `Au9yFPW2k`,
                                          scopeId: `L_B7D5dU4`,
                                          children: /*#__PURE__*/ c(L, {
                                            breakpoint: A,
                                            overrides: {
                                              kOoRlikFh: {
                                                font: {
                                                  fontFamily: `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                  fontSize: `34px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `0em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                              ZC8CooFVc: {
                                                font: {
                                                  fontFamily: `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                  fontSize: `38px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `0em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                            },
                                            children: /*#__PURE__*/ c(Ae, {
                                              animation: {
                                                replay: !0,
                                                transition: {
                                                  damping: 60,
                                                  delay: 0,
                                                  mass: 1,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                trigger: `layerInView`,
                                              },
                                              commas: !0,
                                              decimals: 0,
                                              display: { monospace: !1, slashedZeros: !1 },
                                              end: 5e4,
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
                                              id: `Au9yFPW2k`,
                                              layoutId: `Au9yFPW2k`,
                                              prefix: ``,
                                              start: 0,
                                              suffix: `+`,
                                              textSelect: !0,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(g, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ c(t, {
                                          children: /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-gf9yid`,
                                            "data-styles-preset": `XorWCRDBg`,
                                            style: {
                                              "--framer-text-alignment": `right`,
                                              "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                            },
                                            children: `Global delivery. Precision assured`,
                                          }),
                                        }),
                                        className: `framer-817jvs`,
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
                            /*#__PURE__*/ c(L, {
                              breakpoint: A,
                              overrides: {
                                kOoRlikFh: { height: 698.4 },
                                ZC8CooFVc: { height: 858.4 },
                              },
                              children: /*#__PURE__*/ c(k, {
                                height: 1078.4,
                                width: _?.width || `100vw`,
                                children: /*#__PURE__*/ c(T, {
                                  className: `framer-ex596h-container`,
                                  nodeId: `u0JP2RaAo`,
                                  scopeId: `L_B7D5dU4`,
                                  children: /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: { kOoRlikFh: { variant: Z(`b_Xr33rnP`) } },
                                    children: /*#__PURE__*/ c(Oe, {
                                      gdyota7So: Q(
                                        {
                                          pixelHeight: 720,
                                          pixelWidth: 1280,
                                          src: `../../assets/images/8IiqYflAr9b6itpgL9QSXPm2lg.jpg`,
                                          srcSet: `https://framerusercontent.com/images/8IiqYflAr9b6itpgL9QSXPm2lg.jpg?scale-down-to=512&width=1280&height=720 512w,https://framerusercontent.com/images/8IiqYflAr9b6itpgL9QSXPm2lg.jpg?scale-down-to=1024&width=1280&height=720 1024w,../../assets/images/8IiqYflAr9b6itpgL9QSXPm2lg.jpg 1280w`,
                                        },
                                        `Video Poster`
                                      ),
                                      height: `100%`,
                                      id: `u0JP2RaAo`,
                                      layoutId: `u0JP2RaAo`,
                                      NLj7J7yRX: `../../assets/misc/Kdu7w5zgvRbsgMwof1IryZkkJI.mp4`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`GWgO0_eD_`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`section`, {
                          className: `framer-1qm9yvq`,
                          "data-framer-name": `Team`,
                          id: R,
                          ref: pe,
                          children: /*#__PURE__*/ c(`div`, {
                            className: `framer-su2328`,
                            "data-framer-name": `Container`,
                            children: /*#__PURE__*/ c(L, {
                              breakpoint: A,
                              overrides: {
                                kOoRlikFh: {
                                  width: `max(min(max(${_?.width || `100vw`}, 1px), 1360px) - 32px, 1px)`,
                                },
                              },
                              children: /*#__PURE__*/ c(k, {
                                height: 636,
                                width: `max(min(max(${_?.width || `100vw`}, 1px), 1360px) - 60px, 1px)`,
                                children: /*#__PURE__*/ c(T, {
                                  className: `framer-1ad28xs-container`,
                                  nodeId: `HCeAh88nr`,
                                  scopeId: `L_B7D5dU4`,
                                  children: /*#__PURE__*/ c(L, {
                                    breakpoint: A,
                                    overrides: {
                                      kOoRlikFh: { variant: Z(`RLt17Urel`) },
                                      ZC8CooFVc: { variant: Z(`RLt17Urel`) },
                                    },
                                    children: /*#__PURE__*/ c(dn, {
                                      bOKVK4bH6: `https://www.instagram.com/`,
                                      DblFvRTbz: `Emily Carter`,
                                      DQLmSsTYZ: `https://www.linkedin.com/`,
                                      f2FC2377t: `Lead CNC Engineer`,
                                      fe0NROijv: `https://www.instagram.com/`,
                                      ffTIi3kJ0: `https://www.instagram.com/`,
                                      gPebXhpzN: `William Carter`,
                                      height: `100%`,
                                      hkGEf3Yvb: `Project Manager`,
                                      I6oyPgQla: `Sophie Walker`,
                                      id: `HCeAh88nr`,
                                      jfVQaz9NS: `https://www.linkedin.com/`,
                                      layoutId: `HCeAh88nr`,
                                      lCCI1qpfj: `Michael Turner`,
                                      LHvBDJE7i: `https://www.instagram.com/`,
                                      lHwOp8BbO: `https://x.com/`,
                                      lyhgwzFlT: `William Harris`,
                                      M1PkOzurC: `Client Relations Manager`,
                                      MDDdU1dOE: `https://www.linkedin.com/`,
                                      MMIDTZzOA: `https://x.com/`,
                                      OA1rzT2HR: `Head of Operations`,
                                      PxdB2KQ4i: `https://x.com/`,
                                      QSLRQhU5V: `Olivia Bennett`,
                                      rnt1CS1md: `https://x.com/`,
                                      SsaG6JFX5: `https://x.com/`,
                                      style: { width: `100%` },
                                      U8qMsR622: `https://www.instagram.com/`,
                                      variant: Z(`p8zDq3nWW`),
                                      vvoDOO9mD: `https://x.com/`,
                                      VVWgnVnvV: `Quality Manager`,
                                      width: `100%`,
                                      wUR9lLs6m: `https://x.com/`,
                                      WxAdo_aeS: `Operations Specialist`,
                                      x2xWZAdx_: `James Anderson`,
                                      XAyUVTqh0: `https://www.linkedin.com/`,
                                      Xp7c0pb8d: `Production Supervisor`,
                                      xxfB5NzNH: `https://www.linkedin.com/`,
                                      Y3sDatdbv: `https://www.instagram.com/`,
                                      yB0umIzb1: `https://www.instagram.com/`,
                                      YMxElff61: `https://www.linkedin.com/`,
                                      YSKDgYJwl: `https://www.linkedin.com/`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(k, {
                      children: /*#__PURE__*/ c(T, {
                        className: `framer-1obc5sd-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: F,
                        nodeId: `E05i6nA_9`,
                        scopeId: `L_B7D5dU4`,
                        children: /*#__PURE__*/ c(je, {
                          height: `100%`,
                          id: `E05i6nA_9`,
                          intensity: 25,
                          layoutId: `E05i6nA_9`,
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
      (br = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-1XNuX.framer-yjb0y7, .framer-1XNuX .framer-yjb0y7 { display: block; }`,
        `.framer-1XNuX.framer-17h5tgm { align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-1XNuX .framer-10ioq77 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-sg1uyd { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1czb5ho { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1880px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-1XNuX .framer-ug24t1, .framer-1XNuX .framer-vix9pv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-g9jujs-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1XNuX .framer-wvs9qy { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1XNuX .framer-70hkf0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-psjgwf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-8321lf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 10px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1XNuX .framer-15lnkjm-container, .framer-1XNuX .framer-9zcmxm-container, .framer-1XNuX .framer-lpc3wx-container, .framer-1XNuX .framer-yify3-container, .framer-1XNuX .framer-115r9dh-container, .framer-1XNuX .framer-1q5kww3-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-1XNuX .framer-1sxux0k { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 200px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1XNuX .framer-1m4tvi9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-1XNuX .framer-gnocja, .framer-1XNuX .framer-1yu5aqa { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px 30px 0px 30px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; }`,
        `.framer-1XNuX .framer-146qeth { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1600px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-1XNuX .framer-l05xqe, .framer-1XNuX .framer-4flx8c, .framer-1XNuX .framer-6l5gh8, .framer-1XNuX .framer-egrqce, .framer-1XNuX .framer-rpljbt, .framer-1XNuX .framer-13v18fh, .framer-1XNuX .framer-9xgvt9, .framer-1XNuX .framer-1tgtb2l, .framer-1XNuX .framer-ob2fs, .framer-1XNuX .framer-1rzkcx9 { --border-bottom-width: 1px; --border-color: var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, #191919); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; opacity: 0.12; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1rji7ly-container, .framer-1XNuX .framer-10fxpqa-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-1XNuX .framer-nx7ghb { -webkit-user-select: none; bottom: -196px; flex: none; height: auto; overflow: visible; pointer-events: none; position: absolute; right: -177px; user-select: none; width: 514px; z-index: 1; }`,
        `.framer-1XNuX .framer-19jt8ba { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1djq6vg { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-15c0oh7 { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1al0hf7 { align-content: center; align-items: center; background: linear-gradient(317deg, var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, #c8370b) 0%, var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, rgb(246, 98, 52)) 100%); display: flex; flex: 0.76 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 280px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-syzbzk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1b7txde { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1jjzy4j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-mvrl4c-container, .framer-1XNuX .framer-co2le4-container, .framer-1XNuX .framer-w7hxf0-container, .framer-1XNuX .framer-n4c0y9-container, .framer-1XNuX .framer-k6mnpv-container, .framer-1XNuX .framer-1obc5sd-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-1XNuX .framer-13vikz6, .framer-1XNuX .framer-17hnocy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-ecduki, .framer-1XNuX .framer-1j5nu8b, .framer-1XNuX .framer-11enxsf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-1XNuX .framer-1n0u5xp { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-owfw97 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1417pff { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1v0ih3n { align-content: center; align-items: center; display: flex; flex: 0.4 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-46phky { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1tosnt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-1XNuX .framer-10rt9oc { align-content: center; align-items: center; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: 0.4 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-1XNuX .framer-8ujudx { -webkit-user-select: none; background: linear-gradient(180deg, var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0)) 0%, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)) 100%); bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 2; }`,
        `.framer-1XNuX .framer-ajbw45 { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-1XNuX .framer-net0kr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 280px 20px 20px 20px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-1XNuX .framer-jr88y0, .framer-1XNuX .framer-d9j7ek, .framer-1XNuX .framer-fzx6lu, .framer-1XNuX .framer-fofviq, .framer-1XNuX .framer-ibihy8, .framer-1XNuX .framer-1nixmb1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-1XNuX .framer-oviwd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-k7c64r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1jitdlm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-12jqn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-191c1dl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1xzjcvr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-b49jzf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-18obo22-container, .framer-1XNuX .framer-1ad28xs-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-1r74pct { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-1XNuX .framer-1h0d0cr, .framer-1XNuX .framer-1yo5a1s, .framer-1XNuX .framer-1qm9yvq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1psoxz2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-a9318k, .framer-1XNuX .framer-817jvs { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-16vto94 { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(5, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-12f3ihy-container, .framer-1XNuX .framer-1jre6j2-container, .framer-1XNuX .framer-1ddqyh1-container, .framer-1XNuX .framer-u6zt9c-container, .framer-1XNuX .framer-1y29vi3-container, .framer-1XNuX .framer-1ncw7i0-container, .framer-1XNuX .framer-t0r8x9-container, .framer-1XNuX .framer-1w0xzfz-container, .framer-1XNuX .framer-13l0whe-container, .framer-1XNuX .framer-1aboibe-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-1xqa19y { background-color: var(--token-79ab7225-42eb-4a86-ad64-3b3241d197f9, #d1d1d1); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-r9eztz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-78dijp { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 428px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-18s8xds { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-19cct6s, .framer-1XNuX .framer-1enw822, .framer-1XNuX .framer-13eh59b, .framer-1XNuX .framer-1sm5d5e { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-1XNuX .framer-y3ue0d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 3; }`,
        `.framer-1XNuX .framer-1aemxrk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-nmbfp8 { align-self: stretch; background-color: var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, #f66234); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 2px; }`,
        `.framer-1XNuX .framer-df1xm9 { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 600px; position: relative; width: 1px; }`,
        `.framer-1XNuX .framer-bog4q8 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 10px 0px; position: relative; width: 100%; }`,
        `.framer-1XNuX .framer-ex596h-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-1XNuX .framer-su2328 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        ...Qe,
        ...Re,
        ...U,
        ...nt,
        ...ot,
        ...Ne,
        ...Ke,
        `.framer-1XNuX[data-border="true"]::after, .framer-1XNuX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-1XNuX.framer-17h5tgm { width: 810px; } .framer-1XNuX .framer-sg1uyd { padding: 130px 0px 50px 0px; } .framer-1XNuX .framer-1czb5ho { gap: 80px; } .framer-1XNuX .framer-1al0hf7 { flex: 1 0 0px; } .framer-1XNuX .framer-1n0u5xp, .framer-1XNuX .framer-1h0d0cr, .framer-1XNuX .framer-1yo5a1s, .framer-1XNuX .framer-1qm9yvq { padding: 140px 0px 140px 0px; } .framer-1XNuX .framer-1tosnt { flex-direction: column; gap: 50px; } .framer-1XNuX .framer-10rt9oc { flex: none; width: 40%; } .framer-1XNuX .framer-oviwd { flex: none; gap: 50px; width: 100%; } .framer-1XNuX .framer-16vto94 { grid-template-columns: repeat(4, minmax(50px, 1fr)); } .framer-1XNuX .framer-r9eztz { flex-direction: column; gap: 30px; justify-content: center; } .framer-1XNuX .framer-78dijp { flex: none; width: 100%; } .framer-1XNuX .framer-18s8xds { flex: none; justify-content: center; width: 100%; } .framer-1XNuX .framer-1aemxrk { gap: 200px; } .framer-1XNuX .framer-df1xm9 { max-width: 800px; }}`,
        `@media (max-width: 809.98px) { .framer-1XNuX.framer-17h5tgm { width: 390px; } .framer-1XNuX .framer-sg1uyd { padding: 100px 0px 50px 0px; } .framer-1XNuX .framer-1czb5ho { align-content: center; align-items: center; gap: 40px; padding: 0px 16px 0px 16px; } .framer-1XNuX .framer-70hkf0, .framer-1XNuX .framer-1417pff { flex-direction: column; gap: 16px; } .framer-1XNuX .framer-psjgwf { flex: none; flex-direction: column; gap: 10px; justify-content: center; width: 100%; } .framer-1XNuX .framer-1sxux0k { flex: none; max-width: unset; width: 100%; } .framer-1XNuX .framer-1m4tvi9, .framer-1XNuX .framer-46phky { flex: none; width: 100%; } .framer-1XNuX .framer-gnocja, .framer-1XNuX .framer-1yu5aqa, .framer-1XNuX .framer-y3ue0d, .framer-1XNuX .framer-su2328 { padding: 0px 16px 0px 16px; } .framer-1XNuX .framer-19jt8ba { flex-direction: column; } .framer-1XNuX .framer-1djq6vg { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-1XNuX .framer-15c0oh7 { height: auto; } .framer-1XNuX .framer-1al0hf7 { flex: none; gap: 40px; width: 100%; } .framer-1XNuX .framer-syzbzk { padding: 16px; } .framer-1XNuX .framer-1jjzy4j { gap: 20px 30px; } .framer-1XNuX .framer-13vikz6 { gap: 10px; } .framer-1XNuX .framer-1n0u5xp, .framer-1XNuX .framer-1h0d0cr, .framer-1XNuX .framer-1yo5a1s, .framer-1XNuX .framer-1qm9yvq { padding: 100px 0px 100px 0px; } .framer-1XNuX .framer-owfw97, .framer-1XNuX .framer-1psoxz2 { gap: 40px; padding: 0px 16px 0px 16px; } .framer-1XNuX .framer-1v0ih3n { flex: none; width: 40%; } .framer-1XNuX .framer-1tosnt { flex-direction: column; gap: 40px; } .framer-1XNuX .framer-10rt9oc { flex: none; max-width: 358px; width: 100%; } .framer-1XNuX .framer-oviwd { flex: none; flex-direction: column; gap: 40px; width: 100%; } .framer-1XNuX .framer-k7c64r, .framer-1XNuX .framer-12jqn { flex: none; gap: 20px; width: 100%; } .framer-1XNuX .framer-16vto94 { gap: 20px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(5, min-content); } .framer-1XNuX .framer-r9eztz { flex-direction: column; gap: 40px; justify-content: center; } .framer-1XNuX .framer-78dijp { flex: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-1XNuX .framer-18s8xds { flex: none; justify-content: center; width: 100%; } .framer-1XNuX .framer-19cct6s, .framer-1XNuX .framer-1enw822, .framer-1XNuX .framer-13eh59b, .framer-1XNuX .framer-1sm5d5e { width: 60px; } .framer-1XNuX .framer-1aemxrk { gap: 100px; } .framer-1XNuX .framer-17hnocy { gap: 16px; } .framer-1XNuX .framer-df1xm9 { max-width: 800px; } .framer-1XNuX .framer-bog4q8 { padding: 0px 0px 30px 0px; }}`,
      ]),
      (xr = I(yr, br, `framer-1XNuX`)),
      (xr.displayName = `Page`),
      (xr.defaultProps = { height: 5923, width: 1200 }),
      y(
        xr,
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
          ...kn,
          ...Mn,
          ...Pn,
          ...In,
          ...Ln,
          ...zn,
          ...Vn,
          ...Hn,
          ...Un,
          ...Wn,
          ...Gn,
          ...R($e),
          ...R(ze),
          ...R(W),
          ...R(rt),
          ...R(st),
          ...R(Pe),
          ...R(qe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Sr = {
        exports: {
          urlVariableNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerL_B7D5dU4`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerIntrinsicHeight: `5923`,
              framerScrollSections: `{"kHn4h2prn":{"pattern":":kHn4h2prn","name":"team"}}`,
              framerAutoSizeImages: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ZC8CooFVc":{"layout":["fixed","auto"]},"kOoRlikFh":{"layout":["fixed","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1200`,
              framerLayoutTemplateFlowEffect: `true`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Cr();
export { Sr as __FramerMetadata__, xr as default, Jn as urlVariableNames };
//# sourceMappingURL=d_dHQTIGiqE-WyqWpSZM80CfhMPkt-vvOVxLV36pKIw.Db4IG6Ui.mjs.map
