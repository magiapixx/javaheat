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
import { T as d, i as f, o as p, t as m } from "./motion.BoJ_50qN.mjs";
import {
  $ as h,
  B as te,
  C as g,
  Ct as _,
  D as v,
  E as y,
  Et as b,
  K as x,
  L as S,
  Ot as ne,
  S as C,
  _t as re,
  a as w,
  c as ie,
  ct as ae,
  dt as oe,
  f as T,
  ft as se,
  ht as E,
  i as D,
  j as O,
  k,
  l as A,
  m as ce,
  mt as j,
  o as M,
  t as le,
  u as N,
  v as ue,
  vt as de,
  wt as P,
  xt as fe,
  y as F,
  yt as pe,
  z as I,
} from "./framer.DGJFnpg_.mjs";
import { i as me, r as he } from "./shared-lib.C0OaH8ZN.mjs";
import { n as ge, t as L } from "./iy216z1H2.RkE08bQ8.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./XorWCRDBg.Cyw4W0eA.mjs";
import { n as xe, t as R } from "./q98WlWaa9.DeV4Bwei.mjs";
import { n as Se, t as Ce } from "./t0GRKkwHB.4mSMwzSd.mjs";
import { i as we, t as Te } from "./n0JwbvZ2A.BJNPcq3v.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./lR3sdILUN.CtI7Sz3I.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./v03SSkN8P.ClDd94vB.mjs";
import { n as Pe, t as Fe } from "./eQxvO6BYV.D1qwZj_a.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./skOo1vlpp.w5U5s6CS.mjs";
import { n as Be, t as Ve } from "./odtZZsRvg.DIYrl3f7.mjs";
import { n as He, r as Ue } from "./cw4t799ht.BGKBOVGT.mjs";
function We(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge, Ke, qe, Je, Ye, z, Xe, Ze, Qe, $e, et, tt, nt, rt, B;
function it() {
  return (it = e(() => {
    (u(),
      x(),
      m(),
      r(),
      Ie(),
      _e(),
      (Ge = { NJzDlnehj: { hover: !0 } }),
      (Ke = [`NJzDlnehj`, `MykOLFXBX`, `IYKxke7dl`]),
      (qe = `framer-91px0`),
      (Je = {
        IYKxke7dl: `framer-v-ctv9s0`,
        MykOLFXBX: `framer-v-10cbs4h`,
        NJzDlnehj: `framer-v-1qi829m`,
      }),
      (Ye = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Xe = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ze = ({ value: e, children: t }) => {
        let r = o(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(p.Provider, { value: a, children: t });
      }),
      (Qe = { Desktop: `NJzDlnehj`, Phone: `IYKxke7dl`, Tablet: `MykOLFXBX` }),
      ($e = d.create(t)),
      (et = ({
        description: e,
        height: t,
        id: n,
        link: r,
        thumbnail: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        i4qnpAWPv: r ?? s.i4qnpAWPv,
        ki5rSc1Jn:
          e ??
          s.ki5rSc1Jn ??
          `Complete product assembly services with quality testing and packaging solutions.`,
        MCjJ_V3Sa: i ??
          s.MCjJ_V3Sa ?? {
            alt: `Service Image`,
            pixelHeight: 800,
            pixelWidth: 1400,
            src: `../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp`,
            srcSet: `../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA-87ff81.webp 512w,../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA-7acbbe.webp 1024w,../../assets/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp 1400w`,
          },
        variant: Qe[s.variant] ?? s.variant ?? `NJzDlnehj`,
        xad_ANQ_c: a ?? s.xad_ANQ_c ?? `Product assembly`,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (nt = /*#__PURE__*/ l(function (e, n) {
        let r = i(null),
          a = n ?? r,
          o = ee(),
          { activeLocale: l, setLocale: u } = re(),
          p = ae(),
          {
            style: m,
            className: h,
            layoutId: v,
            variant: y,
            MCjJ_V3Sa: b,
            xad_ANQ_c: x,
            ki5rSc1Jn: S,
            i4qnpAWPv: ne,
            ...C
          } = et(e),
          {
            baseVariant: w,
            classNames: ie,
            clearLoadingGesture: oe,
            gestureHandlers: se,
            gestureVariant: E,
            isLoading: D,
            setGestureState: O,
            setVariant: A,
            variants: j,
          } = _({
            cycleOrder: Ke,
            defaultVariant: `NJzDlnehj`,
            enabledGestures: Ge,
            ref: a,
            variant: y,
            variantClassNames: Je,
          }),
          M = tt(e, j),
          le = k(qe, ze, be),
          N = z(b),
          ue = z(S);
        return /*#__PURE__*/ c(f, {
          id: v ?? o,
          children: /*#__PURE__*/ c($e, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ c(Ze, {
              value: Ye,
              children: /*#__PURE__*/ c(ce, {
                href: ne,
                motionChild: !0,
                nodeId: `NJzDlnehj`,
                openInNewTab: !1,
                scopeId: `lZiFA7YUy`,
                smoothScroll: !0,
                children: /*#__PURE__*/ s(d.a, {
                  ...C,
                  ...se,
                  className: `${k(le, `framer-1qi829m`, h, ie)} framer-1bw2gmd`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `NJzDlnehj`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...m,
                  },
                  ...We(
                    {
                      "NJzDlnehj-hover": { "data-framer-name": void 0 },
                      IYKxke7dl: { "data-framer-name": `Phone` },
                      MykOLFXBX: { "data-framer-name": `Tablet` },
                    },
                    w,
                    E
                  ),
                  children: [
                    /*#__PURE__*/ c(d.div, {
                      className: `framer-17qiwc0`,
                      "data-framer-name": `Icon`,
                      layoutDependency: M,
                      layoutId: `lZ64E4r76`,
                      style: {
                        backgroundColor: `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        opacity: 0,
                      },
                      variants: { "NJzDlnehj-hover": { opacity: 1 } },
                      children: /*#__PURE__*/ c(T, {
                        background: {
                          alt: `Button Icon`,
                          fit: `fit`,
                          loading: te((p?.y || 0) + 34 + 13.5),
                          pixelHeight: 12,
                          pixelWidth: 15,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: `16px`,
                          src: `../../assets/images/oGA3Ox4BPGz3tO6GnljsxjI6A.svg`,
                        },
                        className: `framer-1i8u903`,
                        "data-framer-name": `Image`,
                        fitImageDimension: `height`,
                        layoutDependency: M,
                        layoutId: `cyoytyfTK`,
                        style: {
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                          rotate: -10,
                          scale: 1,
                        },
                        variants: { "NJzDlnehj-hover": { rotate: -45, scale: 1.05 } },
                      }),
                    }),
                    N !== !1 &&
                      /*#__PURE__*/ c(d.div, {
                        className: `framer-43vsca`,
                        "data-framer-name": `Image`,
                        layoutDependency: M,
                        layoutId: `tpS4WmjHs`,
                        style: {
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                        children: /*#__PURE__*/ c(T, {
                          background: {
                            alt: `Service Image`,
                            fit: `fill`,
                            loading: te((p?.y || 0) + 20 + 0 + 0),
                            pixelHeight: 800,
                            pixelWidth: 1400,
                            sizes: `max(${p?.width || `100vw`} - 40px, 1px)`,
                            ...Xe(b),
                          },
                          className: `framer-awy9oi`,
                          "data-framer-name": `Image`,
                          fitImageDimension: `height`,
                          layoutDependency: M,
                          layoutId: `y4FWIhm40`,
                          style: { scale: 1 },
                          variants: { "NJzDlnehj-hover": { scale: 1.05 } },
                        }),
                      }),
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-n6fczg`,
                      "data-framer-name": `Info`,
                      layoutDependency: M,
                      layoutId: `pnt2LPrGc`,
                      children: [
                        /*#__PURE__*/ c(g, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(t, {
                            children: /*#__PURE__*/ c(d.h2, {
                              className: `framer-styles-preset-gvpqeb`,
                              "data-styles-preset": `skOo1vlpp`,
                              style: {
                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                              },
                              children: `Product assembly`,
                            }),
                          }),
                          className: `framer-1kblfze`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `wubLVubyU`,
                          style: {
                            "--extracted-1of0zx5": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        ue !== !1 &&
                          /*#__PURE__*/ c(g, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(t, {
                              children: /*#__PURE__*/ c(d.p, {
                                className: `framer-styles-preset-gf9yid`,
                                "data-styles-preset": `XorWCRDBg`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92)))`,
                                },
                                children: `Complete product assembly services with quality testing and packaging solutions.`,
                              }),
                            }),
                            className: `framer-pei2bc`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `cQ7MEl4j4`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, rgb(92, 92, 92))`,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
      (rt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-91px0.framer-1bw2gmd, .framer-91px0 .framer-1bw2gmd { display: block; }`,
        `.framer-91px0.framer-1qi829m { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; text-decoration: none; width: 446px; }`,
        `.framer-91px0 .framer-17qiwc0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 34px; top: 34px; width: 40px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-91px0 .framer-1i8u903 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-91px0 .framer-43vsca { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-91px0 .framer-awy9oi { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-91px0 .framer-n6fczg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-91px0 .framer-1kblfze { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-91px0 .framer-pei2bc { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-91px0.framer-v-10cbs4h.framer-1qi829m { cursor: unset; gap: 16px; }`,
        `.framer-91px0.framer-v-ctv9s0.framer-1qi829m { cursor: unset; gap: 10px; }`,
        ...Le,
        ...ve,
      ]),
      (B = P(nt, rt, `framer-91px0`)),
      (B.displayName = `Service Card`),
      (B.defaultProps = { height: 374, width: 446 }),
      v(B, {
        variant: {
          options: [`NJzDlnehj`, `MykOLFXBX`, `IYKxke7dl`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        MCjJ_V3Sa: {
          __defaultAssetReference: `data:framer/asset-reference,YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp?originalFilename=Service+Image+%286%29.webp&width=1400&height=800`,
          __vekterDefault: {
            alt: `Service Image`,
            assetReference: `data:framer/asset-reference,YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp?originalFilename=Service+Image+%286%29.webp&width=1400&height=800`,
          },
          description: `Recommended size 1400px X 800px`,
          title: `Thumbnail`,
          type: M.ResponsiveImage,
        },
        xad_ANQ_c: {
          defaultValue: `Product assembly`,
          displayTextArea: !0,
          title: `Title`,
          type: M.String,
        },
        onxad_ANQ_cChange: { changes: `xad_ANQ_c`, type: M.ChangeHandler },
        ki5rSc1Jn: {
          defaultValue: `Complete product assembly services with quality testing and packaging solutions.`,
          displayTextArea: !0,
          title: `Description`,
          type: M.String,
        },
        onki5rSc1JnChange: { changes: `ki5rSc1Jn`, type: M.ChangeHandler },
        i4qnpAWPv: { title: `Link`, type: M.Link },
      }),
      y(
        B,
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
          ...I(Re),
          ...I(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var at,
  ot,
  V,
  st,
  ct,
  lt,
  H,
  ut,
  U,
  dt,
  ft,
  pt,
  W,
  mt,
  ht,
  gt,
  _t,
  G,
  vt,
  yt,
  K,
  bt,
  q,
  xt,
  J,
  Y,
  St,
  X,
  Z,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Q,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  $,
  Bt;
function Vt() {
  return (Vt = e(() => {
    (u(),
      x(),
      m(),
      r(),
      me(),
      Pe(),
      ge(),
      it(),
      Be(),
      xe(),
      Se(),
      we(),
      Ee(),
      Ae(),
      _e(),
      He(),
      (at = ne(g)),
      (ot = S(B)),
      (V = b(w)),
      (st = S(L)),
      (ct = S(Ce)),
      (lt = S(R)),
      (H = b(g)),
      (ut = S(Ve)),
      (U = b(d.label)),
      (dt = S(Fe)),
      (ft = S(he)),
      (pt = {
        h_mg_9o7a: `(min-width: 810px) and (max-width: 1199.98px)`,
        kI5q3oJP2: `(min-width: 1200px)`,
        Wmbxfp9Yu: `(max-width: 809.98px)`,
      }),
      (W = () => typeof document < `u`),
      (mt = []),
      (ht = `framer-xnms8`),
      (gt = {
        h_mg_9o7a: `framer-v-6wsa21`,
        kI5q3oJP2: `framer-v-13ee0ic`,
        Wmbxfp9Yu: `framer-v-1qf5quh`,
      }),
      (_t = (e, t, n) => (e && t ? `position` : n)),
      (G = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (vt = {
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
      (yt = {
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
      (bt = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
      (q = {
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
      (xt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Y = () => ({
        from: { alias: `UASgYIhB6`, data: Te, type: `Collection` },
        select: [
          { collection: `UASgYIhB6`, name: `Io3xnY3qJ`, type: `Identifier` },
          { collection: `UASgYIhB6`, name: `IAu1rJT3C`, type: `Identifier` },
          { collection: `UASgYIhB6`, name: `tsXG2nqrK`, type: `Identifier` },
          { collection: `UASgYIhB6`, name: `NPodIY0by`, type: `Identifier` },
          { collection: `UASgYIhB6`, name: `id`, type: `Identifier` },
        ],
      })),
      (St = ({ query: e, pageSize: t, children: n }) => {
        let { paginatedQuery: r, paginationInfo: i, loadMore: a } = E(e, t, `UASgYIhB6`);
        return n(pe(r), i, a);
      }),
      (X = { delay: 0.15, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Z = {
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
      (Ct = { delay: 0.05, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (wt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ct,
        x: 0,
        y: 40,
      }),
      (Tt = { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Et = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Tt,
        x: 0,
        y: 40,
      }),
      (Dt = { delay: 0.1, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ot = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Dt,
        x: 0,
        y: 40,
      }),
      (kt = { delay: 0.2, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (At = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: kt,
        x: 0,
        y: 40,
      }),
      (jt = { delay: 0.25, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Mt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: jt,
        x: 0,
        y: 40,
      }),
      (Nt = { delay: 0.3, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Pt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Nt,
        x: 0,
        y: 40,
      }),
      (Q = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Ft = { Desktop: `kI5q3oJP2`, Phone: `Wmbxfp9Yu`, Tablet: `h_mg_9o7a` }),
      (It = ({ value: e }) =>
        j()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Lt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ft[r.variant] ?? r.variant ?? `kI5q3oJP2`,
      })),
      (Rt = /*#__PURE__*/ l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          m = ee(),
          { activeLocale: h, setLocale: te } = re(),
          _ = ae(),
          { style: v, className: y, layoutId: b, variant: x, ...S } = Lt(e),
          ne = n(() => Ue({}, h), [h]);
        de(ne);
        let [E, O] = se(x, pt, !1),
          ce = k(ht, ke, Ne, be),
          j = o(N)?.isLayoutTemplate,
          M = !!o(p)?.transition?.layout,
          P = _t(j, M);
        fe();
        let pe = () => !W() || E !== `Wmbxfp9Yu`,
          I = () => !W() || ![`h_mg_9o7a`, `Wmbxfp9Yu`].includes(E);
        return (
          oe({}),
          /*#__PURE__*/ c(N.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Ft,
              primaryVariantId: `kI5q3oJP2`,
              variantClassNames: gt,
            },
            children: /*#__PURE__*/ s(f, {
              id: b ?? m,
              children: [
                /*#__PURE__*/ c(It, {
                  value: `html body { background: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246)); }`,
                }),
                /*#__PURE__*/ s(d.div, {
                  ...S,
                  className: k(ce, `framer-13ee0ic`, y),
                  ref: u,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ s(d.main, {
                      className: `framer-3lzpp`,
                      "data-framer-name": `Main`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ s(`div`, {
                          className: `framer-1uoh1kt`,
                          "data-framer-name": `Hero/Service`,
                          children: [
                            /*#__PURE__*/ c(`section`, {
                              className: `framer-1um8zlw`,
                              "data-framer-name": `Hero`,
                              children: /*#__PURE__*/ c(`div`, {
                                className: `framer-9kjpek`,
                                "data-framer-name": `Container`,
                                children: /*#__PURE__*/ c(at, {
                                  __fromCanvasComponent: !0,
                                  animate: vt,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`h1`, {
                                      className: `framer-styles-preset-891qt7`,
                                      "data-styles-preset": `lR3sdILUN`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                      },
                                      children: `Our services`,
                                    }),
                                  }),
                                  className: `framer-1tab98k`,
                                  "data-framer-appear-id": `1tab98k`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  initial: yt,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ c(`section`, {
                              className: `framer-t0x2ki`,
                              "data-framer-name": `Service`,
                              children: /*#__PURE__*/ s(`div`, {
                                className: `framer-1dqjmja`,
                                "data-framer-name": `Container`,
                                children: [
                                  /*#__PURE__*/ c(`div`, {
                                    className: `framer-cqpy99`,
                                    "data-framer-name": `Service`,
                                    children: /*#__PURE__*/ c(le, {
                                      children: /*#__PURE__*/ c(St, {
                                        pageSize: 6,
                                        query: Y(),
                                        children: (e, t, n) =>
                                          /*#__PURE__*/ c(a, {
                                            children: e?.map(
                                              (
                                                {
                                                  IAu1rJT3C: e,
                                                  id: t,
                                                  Io3xnY3qJ: n,
                                                  NPodIY0by: r,
                                                  tsXG2nqrK: i,
                                                },
                                                a
                                              ) => (
                                                (e ??= ``),
                                                (i ??= ``),
                                                (r ??= ``),
                                                /*#__PURE__*/ c(
                                                  f,
                                                  {
                                                    id: `UASgYIhB6-${t}`,
                                                    children: /*#__PURE__*/ c(ue.Provider, {
                                                      value: { NPodIY0by: r },
                                                      children: /*#__PURE__*/ c(`div`, {
                                                        className: `framer-1ltj3r3`,
                                                        "data-framer-name": `Service`,
                                                        children: /*#__PURE__*/ c(C, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: r },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: r },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { NPodIY0by: r },
                                                                webPageId: `LC6KZ5P6V`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            /*#__PURE__*/ c(F, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                Wmbxfp9Yu: {
                                                                  height: 374,
                                                                  width: `max(min(${_?.width || `100vw`}, 1360px) - 32px, 50px)`,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ c(D, {
                                                                width: `max((min(${_?.width || `100vw`}, 1360px) - 120px) / 3, 50px)`,
                                                                children: /*#__PURE__*/ c(V, {
                                                                  __framer__animate: {
                                                                    transition: bt(
                                                                      G,
                                                                      (a % 6) * 0.1
                                                                    ),
                                                                  },
                                                                  __framer__animateOnce: !0,
                                                                  __framer__enter: K,
                                                                  __framer__exit: q,
                                                                  __framer__styleAppearEffectEnabled:
                                                                    !0,
                                                                  __framer__threshold: 0,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  className: `framer-y1c92l-container`,
                                                                  "data-framer-name": `Service Card`,
                                                                  name: `Service Card`,
                                                                  nodeId: `ADxW4NHaK`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `cw4t799ht`,
                                                                  children: /*#__PURE__*/ c(F, {
                                                                    breakpoint: E,
                                                                    overrides: {
                                                                      h_mg_9o7a: {
                                                                        i4qnpAWPv: t[1],
                                                                        variant: J(`MykOLFXBX`),
                                                                      },
                                                                      Wmbxfp9Yu: {
                                                                        i4qnpAWPv: t[2],
                                                                        style: { width: `100%` },
                                                                        variant: J(`IYKxke7dl`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ c(B, {
                                                                      height: `100%`,
                                                                      i4qnpAWPv: t[0],
                                                                      id: `ADxW4NHaK`,
                                                                      ki5rSc1Jn: i,
                                                                      layoutId: `ADxW4NHaK`,
                                                                      MCjJ_V3Sa: xt(n),
                                                                      name: `Service Card`,
                                                                      style: {
                                                                        height: `100%`,
                                                                        width: `100%`,
                                                                      },
                                                                      variant: J(`NJzDlnehj`),
                                                                      width: `100%`,
                                                                      xad_ANQ_c: e,
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
                                  /*#__PURE__*/ c(C, {
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
                                      /*#__PURE__*/ c(F, {
                                        breakpoint: E,
                                        overrides: {
                                          Wmbxfp9Yu: {
                                            width: `calc(min(${_?.width || `100vw`}, 1360px) - 32px)`,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(D, {
                                          height: 196,
                                          width: `calc(min(${_?.width || `100vw`}, 1360px) - 60px)`,
                                          children: /*#__PURE__*/ c(V, {
                                            __framer__animate: { transition: X },
                                            __framer__animateOnce: !0,
                                            __framer__enter: K,
                                            __framer__exit: Z,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1tv4ghm-container`,
                                            nodeId: `ciwoAdK8t`,
                                            rendersWithMotion: !0,
                                            scopeId: `cw4t799ht`,
                                            children: /*#__PURE__*/ c(F, {
                                              breakpoint: E,
                                              overrides: {
                                                h_mg_9o7a: {
                                                  variant: J(`SDRL6ENgf`),
                                                  Y9FG_7OXx: e[1],
                                                },
                                                Wmbxfp9Yu: {
                                                  variant: J(`fMopB7F65`),
                                                  Y9FG_7OXx: e[2],
                                                },
                                              },
                                              children: /*#__PURE__*/ c(L, {
                                                F9Alxl5fC: !1,
                                                height: `100%`,
                                                id: `ciwoAdK8t`,
                                                layoutId: `ciwoAdK8t`,
                                                oW2m16Ewg: `Ready to start your next project?`,
                                                PrYHp3zjy: `Schedule now`,
                                                style: { width: `100%` },
                                                variant: J(`phecyeq0O`),
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
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1hpbno`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-1a8200y`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-19n75jq`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-17bc9u1`,
                                      "data-border": !0,
                                      "data-framer-name": `Divider`,
                                    }),
                                    pe() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-x9qnrr hidden-1qf5quh`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    I() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1cmfdvj hidden-6wsa21 hidden-1qf5quh`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                    I() &&
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-yf5tra hidden-6wsa21 hidden-1qf5quh`,
                                        "data-border": !0,
                                        "data-framer-name": `Divider`,
                                      }),
                                  ],
                                }),
                                /*#__PURE__*/ c(D, {
                                  width: _?.width || `100vw`,
                                  children: /*#__PURE__*/ c(w, {
                                    className: `framer-56ujzb-container`,
                                    nodeId: `v6DFVqzh6`,
                                    scopeId: `cw4t799ht`,
                                    children: /*#__PURE__*/ c(Ce, {
                                      height: `100%`,
                                      id: `v6DFVqzh6`,
                                      layoutId: `v6DFVqzh6`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(`section`, {
                          className: `framer-1h1weji`,
                          "data-framer-name": `FAQ`,
                          children: /*#__PURE__*/ s(`div`, {
                            className: `framer-1mylbkx`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-1b5qm5b`,
                                "data-framer-name": `Title`,
                                children: [
                                  /*#__PURE__*/ c(D, {
                                    height: 33,
                                    children: /*#__PURE__*/ c(V, {
                                      __framer__animate: { transition: G },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-yx0b6w-container`,
                                      nodeId: `aQpYwMht5`,
                                      rendersWithMotion: !0,
                                      scopeId: `cw4t799ht`,
                                      children: /*#__PURE__*/ c(R, {
                                        height: `100%`,
                                        id: `aQpYwMht5`,
                                        layoutId: `aQpYwMht5`,
                                        RX1q43PHo: `Common questions`,
                                        variant: J(`R_XotlKFx`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(H, {
                                    __framer__animate: { transition: Ct },
                                    __framer__animateOnce: !0,
                                    __framer__enter: K,
                                    __framer__exit: wt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ c(`h2`, {
                                        className: `framer-styles-preset-2r53jr`,
                                        "data-styles-preset": `v03SSkN8P`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
                                        },
                                        children: `Frequently asked questions`,
                                      }),
                                    }),
                                    className: `framer-26t5p1`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(F, {
                                breakpoint: E,
                                overrides: {
                                  h_mg_9o7a: {
                                    width: `calc(max(${_?.width || `100vw`}, 1px) - 60px)`,
                                  },
                                  Wmbxfp9Yu: {
                                    width: `calc(min(max(${_?.width || `100vw`}, 1px), 700px) - 32px)`,
                                  },
                                },
                                children: /*#__PURE__*/ c(D, {
                                  height: 529,
                                  width: `calc(min(max(${_?.width || `100vw`}, 1px), 700px) - 60px)`,
                                  children: /*#__PURE__*/ c(w, {
                                    className: `framer-iaqsix-container`,
                                    nodeId: `aPpwWvvUo`,
                                    scopeId: `cw4t799ht`,
                                    children: /*#__PURE__*/ c(F, {
                                      breakpoint: E,
                                      overrides: { Wmbxfp9Yu: { variant: J(`pRSLt0Egw`) } },
                                      children: /*#__PURE__*/ c(Ve, {
                                        b4SsUX5KX: `What industries do you serve?`,
                                        dEttHLsTV: `We manufacture a wide range of products, from small precision components to complex multi-part assemblies. we support both custom designs and standardized manufacturing requirements.`,
                                        EhbejgmRr: `We provide end-to-end manufacturing solutions, including component sourcing, product assembly, quality inspection, and final packaging.`,
                                        EisVrTbLM: `We serve multiple industries, including automotive, electronics, consumer goods, industrial equipment, delivering reliable manufacturing to industry-specific needs.`,
                                        height: `100%`,
                                        iaIGDRm4S: `Quality is ensured through strict process controls, standardized procedures. Each product is tested to meet performance, safety, and compliance standards before delivery.`,
                                        id: `aPpwWvvUo`,
                                        jsWR8UOqJ: `What manufacturing services do you provide?`,
                                        kdhQJPREY: `What types of products can you manufacture?`,
                                        layoutId: `aPpwWvvUo`,
                                        Lv_PyAI3e: `How do you maintain quality throughout production?`,
                                        style: { width: `100%` },
                                        t5JaPvIJM: `Yes, our flexible assembly processes allow us to efficiently handle both small prototype batches and large-scale production runs.`,
                                        t6PZ4bslh: `Can you manage low and high-volume production?`,
                                        variant: J(`LIrXe0_hJ`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ s(`section`, {
                          className: `framer-s6iiod`,
                          "data-framer-name": `Contact CTA`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-11lw4d3`,
                              "data-framer-name": `Container`,
                              children: [
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-m001s4`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    /*#__PURE__*/ c(D, {
                                      height: 33,
                                      children: /*#__PURE__*/ c(V, {
                                        __framer__animate: { transition: G },
                                        __framer__animateOnce: !0,
                                        __framer__enter: K,
                                        __framer__exit: q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-x1tdbi-container`,
                                        nodeId: `q3MfErzlg`,
                                        rendersWithMotion: !0,
                                        scopeId: `cw4t799ht`,
                                        children: /*#__PURE__*/ c(R, {
                                          height: `100%`,
                                          id: `q3MfErzlg`,
                                          layoutId: `q3MfErzlg`,
                                          RX1q43PHo: `Get in touch`,
                                          variant: J(`q30NCeu6K`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ c(H, {
                                      __framer__animate: { transition: Tt },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__exit: Et,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: /*#__PURE__*/ c(t, {
                                        children: /*#__PURE__*/ s(`h2`, {
                                          className: `framer-styles-preset-2r53jr`,
                                          "data-styles-preset": `v03SSkN8P`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                          },
                                          children: [
                                            `Start your `,
                                            /*#__PURE__*/ c(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                              },
                                              children: `precision`,
                                            }),
                                            ` manufacturing journey`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-16h2fq1`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ c(ie, {
                                  action: `https://api.framer.com/forms/v1/forms/e3909667-538a-4455-b154-c6b41fb37f0f/submit`,
                                  className: `framer-11nzn0q`,
                                  nodeId: `rma8u_lpX`,
                                  children: (e) =>
                                    /*#__PURE__*/ s(a, {
                                      children: [
                                        /*#__PURE__*/ s(U, {
                                          __framer__animate: { transition: Dt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__exit: Ot,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1l0oup9`,
                                          "data-framer-name": `Name`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Name*`,
                                                }),
                                              }),
                                              className: `framer-1orh4fy`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(A, {
                                              className: `framer-1nnmwk`,
                                              inputName: `Name`,
                                              placeholder: `Enter your name`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ s(U, {
                                          __framer__animate: { transition: X },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__exit: Z,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1mojvk2`,
                                          "data-framer-name": `Email`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Email*`,
                                                }),
                                              }),
                                              className: `framer-bxju4w`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(A, {
                                              className: `framer-xv5gfx`,
                                              inputName: `Email`,
                                              placeholder: `Enter your email`,
                                              required: !0,
                                              type: `email`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ s(U, {
                                          __framer__animate: { transition: kt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__exit: At,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1fm9x40`,
                                          "data-framer-name": `Inquiry`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Inquiry`,
                                                }),
                                              }),
                                              className: `framer-m6mrhr`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(A, {
                                              className: `framer-dnea77`,
                                              inputName: `Inqury`,
                                              placeholder: `Enter inquiry details`,
                                              required: !1,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ s(U, {
                                          __framer__animate: { transition: jt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__exit: Mt,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-8kvd6y`,
                                          "data-framer-name": `Message`,
                                          children: [
                                            /*#__PURE__*/ c(g, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ c(t, {
                                                children: /*#__PURE__*/ c(`p`, {
                                                  className: `framer-styles-preset-gf9yid`,
                                                  "data-styles-preset": `XorWCRDBg`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Message`,
                                                }),
                                              }),
                                              className: `framer-q8hhgo`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ c(A, {
                                              className: `framer-x4ybz`,
                                              inputName: `Message`,
                                              placeholder: `Tell us about your project`,
                                              type: `textarea`,
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ c(D, {
                                          height: 39,
                                          children: /*#__PURE__*/ c(V, {
                                            __framer__animate: { transition: Nt },
                                            __framer__animateOnce: !0,
                                            __framer__enter: K,
                                            __framer__exit: Pt,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1aidtjm-container`,
                                            nodeId: `LMpK9XLB4`,
                                            rendersWithMotion: !0,
                                            scopeId: `cw4t799ht`,
                                            children: /*#__PURE__*/ c(F, {
                                              breakpoint: E,
                                              overrides: {
                                                h_mg_9o7a: {
                                                  variant: Q(
                                                    e,
                                                    {
                                                      error: `owBSx32k4`,
                                                      incomplete: `ClvYSc8lX`,
                                                      pending: `ZmGBQ2dxB`,
                                                      success: `IFQxxrxzl`,
                                                    },
                                                    J(`ZmGBQ2dxB`)
                                                  ),
                                                },
                                                Wmbxfp9Yu: {
                                                  variant: Q(
                                                    e,
                                                    {
                                                      error: `owBSx32k4`,
                                                      incomplete: `ClvYSc8lX`,
                                                      pending: `ZmGBQ2dxB`,
                                                      success: `IFQxxrxzl`,
                                                    },
                                                    J(`ZmGBQ2dxB`)
                                                  ),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(Fe, {
                                                height: `100%`,
                                                id: `LMpK9XLB4`,
                                                kdgzJfDTS: `Send your details`,
                                                layoutId: `LMpK9XLB4`,
                                                type: `submit`,
                                                variant: Q(
                                                  e,
                                                  {
                                                    error: `owBSx32k4`,
                                                    incomplete: `ClvYSc8lX`,
                                                    pending: `KDwZBxwgB`,
                                                    success: `IFQxxrxzl`,
                                                  },
                                                  J(`KDwZBxwgB`)
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-fp9tzg`,
                              "data-framer-name": `BG Item`,
                              children: [
                                /*#__PURE__*/ c(T, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    pixelHeight: 762,
                                    pixelWidth: 1920,
                                    sizes: _?.width || `100vw`,
                                    src: `../../assets/images/HGoWXuKQ5hBiKKFhFkh2bKhBOjE.webp`,
                                    srcSet: `https://framerusercontent.com/images/HGoWXuKQ5hBiKKFhFkh2bKhBOjE.webp?scale-down-to=512&width=1920&height=762 512w,https://framerusercontent.com/images/HGoWXuKQ5hBiKKFhFkh2bKhBOjE.webp?scale-down-to=1024&width=1920&height=762 1024w,../../assets/images/HGoWXuKQ5hBiKKFhFkh2bKhBOjE.webp 1920w`,
                                  },
                                  className: `framer-y88ojo`,
                                  "data-framer-name": `BG Image`,
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-xwava1`,
                                  "data-framer-name": `BG Overlay`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(D, {
                      children: /*#__PURE__*/ c(w, {
                        className: `framer-dtcyfx-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: P,
                        nodeId: `aRBwjrNaE`,
                        scopeId: `cw4t799ht`,
                        children: /*#__PURE__*/ c(he, {
                          height: `100%`,
                          id: `aRBwjrNaE`,
                          intensity: 25,
                          layoutId: `aRBwjrNaE`,
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
      (zt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-xnms8.framer-atq2u1, .framer-xnms8 .framer-atq2u1 { display: block; }`,
        `.framer-xnms8.framer-13ee0ic { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-xnms8 .framer-3lzpp, .framer-xnms8 .framer-1uoh1kt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1um8zlw { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 180px 0px 100px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-xnms8 .framer-9kjpek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1360px; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-xnms8 .framer-1tab98k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-xnms8 .framer-t0x2ki { align-content: center; align-items: center; background-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1dqjmja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1360px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-cqpy99 { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-xnms8 .framer-1ltj3r3 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: 100%; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-y1c92l-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-xnms8 .framer-1tv4ghm-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,
        `.framer-xnms8 .framer-1hpbno { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px 30px 0px 30px; pointer-events: none; position: absolute; top: calc(49.96525364836694% - 100.20847810979848% / 2); user-select: none; width: 100%; }`,
        `.framer-xnms8 .framer-1a8200y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1600px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-xnms8 .framer-19n75jq, .framer-xnms8 .framer-17bc9u1, .framer-xnms8 .framer-x9qnrr, .framer-xnms8 .framer-1cmfdvj, .framer-xnms8 .framer-yf5tra { --border-bottom-width: 1px; --border-color: var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, #191919); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; opacity: 0.12; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-xnms8 .framer-56ujzb-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-xnms8 .framer-1h1weji { align-content: center; align-items: center; background-color: var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-xnms8 .framer-1mylbkx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; }`,
        `.framer-xnms8 .framer-1b5qm5b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-yx0b6w-container, .framer-xnms8 .framer-x1tdbi-container, .framer-xnms8 .framer-dtcyfx-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-xnms8 .framer-26t5p1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-iaqsix-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-s6iiod { align-content: center; align-items: center; background-color: var(--token-d95eaf67-fb04-4bd1-b9e3-229e9e2eed16, #5c5c5c); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-11lw4d3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-xnms8 .framer-m001s4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-16h2fq1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 900px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-11nzn0q { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: grid; flex: none; gap: 20px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(3, min-content); height: min-content; justify-content: center; max-width: 760px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1l0oup9 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1orh4fy, .framer-xnms8 .framer-bxju4w, .framer-xnms8 .framer-m6mrhr, .framer-xnms8 .framer-q8hhgo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-xnms8 .framer-1nnmwk { --framer-input-background: var(--token-2fa075ef-1418-469d-a2f0-db5136e88649, rgba(21, 21, 21, 0.1)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, #f66234); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.45s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); --framer-input-font-family: "Geist"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-1cfa1028-d059-4d2f-855e-0a9aef694eda, #d1d1d1); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1mojvk2 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-xv5gfx, .framer-xnms8 .framer-dnea77 { --framer-input-background: var(--token-2fa075ef-1418-469d-a2f0-db5136e88649, rgba(21, 21, 21, 0.1)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, #f66234); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.45s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); --framer-input-font-family: "Geist"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-1cfa1028-d059-4d2f-855e-0a9aef694eda, rgba(209, 209, 209, 0.7)); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1fm9x40 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: auto; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-8kvd6y { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: auto; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-xnms8 .framer-x4ybz { --framer-input-background: var(--token-2fa075ef-1418-469d-a2f0-db5136e88649, rgba(21, 21, 21, 0.1)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-8a340fdb-6130-4c0f-a9c3-a3cb5b6bd529, rgba(92, 92, 92, 0.5)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-666ee170-5b9f-47c6-ad35-b710c5db9fc5, #f66234); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.45s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, #f6f6f6); --framer-input-font-family: "Geist"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-1cfa1028-d059-4d2f-855e-0a9aef694eda, rgba(209, 209, 209, 0.7)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); flex: none; height: auto; min-height: 120px; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-1aidtjm-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: fit-content; }`,
        `.framer-xnms8 .framer-fp9tzg { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }`,
        `.framer-xnms8 .framer-y88ojo { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; }`,
        `.framer-xnms8 .framer-xwava1 { background-color: var(--token-e172eefe-fa79-4b58-b004-11668c5910f9, rgba(21, 21, 21, 0.85)); flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        ...De,
        ...je,
        ...ve,
        `.framer-xnms8[data-border="true"]::after, .framer-xnms8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-xnms8.framer-13ee0ic { width: 810px; } .framer-xnms8 .framer-1um8zlw { padding: 130px 0px 50px 0px; } .framer-xnms8 .framer-t0x2ki { padding: 0px 0px 140px 0px; } .framer-xnms8 .framer-1h1weji, .framer-xnms8 .framer-s6iiod { padding: 140px 0px 140px 0px; } .framer-xnms8 .framer-1mylbkx { max-width: unset; }}`,
        `@media (max-width: 809.98px) { .framer-xnms8.framer-13ee0ic { width: 390px; } .framer-xnms8 .framer-1um8zlw { padding: 100px 0px 50px 0px; } .framer-xnms8 .framer-9kjpek, .framer-xnms8 .framer-1dqjmja, .framer-xnms8 .framer-1hpbno { padding: 0px 16px 0px 16px; } .framer-xnms8 .framer-t0x2ki { gap: 40px; padding: 0px 0px 100px 0px; } .framer-xnms8 .framer-cqpy99 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-xnms8 .framer-1ltj3r3 { height: min-content; } .framer-xnms8 .framer-y1c92l-container { height: auto; } .framer-xnms8 .framer-1h1weji, .framer-xnms8 .framer-s6iiod { padding: 100px 0px 100px 0px; } .framer-xnms8 .framer-1mylbkx, .framer-xnms8 .framer-11lw4d3 { gap: 40px; padding: 0px 16px 0px 16px; } .framer-xnms8 .framer-m001s4 { gap: 16px; } .framer-xnms8 .framer-1l0oup9, .framer-xnms8 .framer-1mojvk2 { grid-column: span 2; }}`,
      ]),
      ($ = P(Rt, zt, `framer-xnms8`)),
      ($.displayName = `Service`),
      ($.defaultProps = { height: 4613, width: 1200 }),
      y(
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
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ot,
          ...st,
          ...ct,
          ...lt,
          ...ut,
          ...dt,
          ...ft,
          ...I(Oe),
          ...I(Me),
          ...I(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = h.get(Y(), n);
          return Promise.allSettled([
            r.preload(),
            O(L, {}, t),
            O(Ce, {}, t),
            O(R, {}, t),
            O(Ve, {}, t),
            O(Fe, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => O(B, {}, t)));
            })(),
          ]);
        },
      }),
      (Bt = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framercw4t799ht`,
            slots: [],
            annotations: {
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `4613`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerScrollSections: `false`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"h_mg_9o7a":{"layout":["fixed","auto"]},"Wmbxfp9Yu":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1200`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Vt();
export { Bt as __FramerMetadata__, $ as default, mt as queryParamNames };
//# sourceMappingURL=BShEkwSNE7rSscrfNlfwUWmp3G5VLdM45601Ozt2maQ.CbcS_uGV.mjs.map
