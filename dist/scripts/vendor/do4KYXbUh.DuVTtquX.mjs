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
  Ct as ne,
  D as h,
  E as g,
  K as _,
  L as v,
  _t as re,
  ct as y,
  f as ie,
  gt as ae,
  i as oe,
  j as b,
  k as x,
  m as se,
  o as S,
  w as ce,
  wt as C,
  z as w,
} from "./framer.DGJFnpg_.mjs";
import { i as T, n as E, r as D, t as le } from "./P89o9sRK1.DNBvNxpc.mjs";
import { i as O, n as k, r as ue, t as de } from "./prOpMcG3Y.2F0Qj1qz.mjs";
import { n as A, t as j } from "./GRYfLB066.1cR48V0E.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      _(),
      f(),
      r(),
      T(),
      O(),
      A(),
      (N = v(j)),
      (P = { PsSiYvF_R: { hover: !0 }, qFi91vvtx: { hover: !0 } }),
      (F = [`qFi91vvtx`, `PsSiYvF_R`, `pKVTQjL86`, `yg1GdlOax`, `EeIVeKqaU`, `pWBTNdtQc`]),
      (I = `framer-oeEkg`),
      (L = {
        EeIVeKqaU: `framer-v-zwht8r`,
        pKVTQjL86: `framer-v-fm4sjc`,
        PsSiYvF_R: `framer-v-1jbu3hd`,
        pWBTNdtQc: `framer-v-rjtdsv`,
        qFi91vvtx: `framer-v-1ubn1sz`,
        yg1GdlOax: `framer-v-1moedhg`,
      }),
      (R = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (B = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (V = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (H = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (U = { dateStyle: `medium`, timeZone: `UTC` }),
      (W = (e, t) => H(e, U, t)),
      (G = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (K = {
        "Default - Desktop": `qFi91vvtx`,
        "Default - Phone": `EeIVeKqaU`,
        "Default - Tablet": `pKVTQjL86`,
        "Featured - Desktop": `PsSiYvF_R`,
        "Featured - Phone": `pWBTNdtQc`,
        "Featured - Tablet": `yg1GdlOax`,
      }),
      (q = u.create(t)),
      (J = ({
        category: e,
        date: t,
        featured: n,
        height: r,
        id: i,
        link: a,
        thumbnail: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        eyITiAkMW: o ??
          l.eyITiAkMW ?? {
            alt: `Blog Image`,
            pixelHeight: 720,
            pixelWidth: 700,
            src: `../../assets/images/u48JppC0L67MN952GwxQr0v8uY8.webp`,
            srcSet: `../../assets/images/u48JppC0L67MN952GwxQr0v8uY8.webp 700w`,
          },
        UD46Kgu4s: e ?? l.UD46Kgu4s ?? `Smart manufacturing`,
        uQ5LuDesw: s ?? l.uQ5LuDesw ?? `Breakthroughs powering manufacturing efficiency`,
        variant: K[l.variant] ?? l.variant ?? `qFi91vvtx`,
        xFC31DRfh: a ?? l.xFC31DRfh,
        xN0KQFmva: t ?? l.xN0KQFmva ?? `2025-11-01T00:00:00.000Z`,
        z94YR92Xt: n ?? l.z94YR92Xt,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = ee(),
          { activeLocale: l, setLocale: d } = re(),
          f = y(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            eyITiAkMW: b,
            uQ5LuDesw: S,
            UD46Kgu4s: C,
            xN0KQFmva: w,
            z94YR92Xt: T,
            xFC31DRfh: E,
            ...D
          } = J(e),
          {
            baseVariant: O,
            classNames: k,
            clearLoadingGesture: ue,
            gestureHandlers: A,
            gestureVariant: N,
            isLoading: H,
            setGestureState: U,
            setVariant: K,
            variants: X,
          } = ne({
            cycleOrder: F,
            defaultVariant: `qFi91vvtx`,
            enabledGestures: P,
            ref: a,
            variant: v,
            variantClassNames: L,
          }),
          Z = Y(e, X),
          Q = x(I, le, de),
          $ = z(b),
          fe = z(C),
          pe = z(w),
          me = ae(),
          he = W(w, me);
        return /*#__PURE__*/ s(te, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(q, {
            animate: X,
            initial: !1,
            children: /*#__PURE__*/ s(G, {
              value: R,
              children: /*#__PURE__*/ s(se, {
                href: E,
                motionChild: !0,
                nodeId: `qFi91vvtx`,
                openInNewTab: !1,
                scopeId: `do4KYXbUh`,
                smoothScroll: !1,
                children: /*#__PURE__*/ o(u.a, {
                  ...D,
                  ...A,
                  className: `${x(Q, `framer-1ubn1sz`, g, k)} framer-1diokt`,
                  "data-framer-name": `Default - Desktop`,
                  layoutDependency: Z,
                  layoutId: `qFi91vvtx`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-71144d8d-4529-4860-981a-d29a15eaec3d, rgb(246, 246, 246))`,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...h,
                  },
                  ...M(
                    {
                      "PsSiYvF_R-hover": { "data-framer-name": void 0 },
                      "qFi91vvtx-hover": { "data-framer-name": void 0 },
                      EeIVeKqaU: { "data-framer-name": `Default - Phone` },
                      pKVTQjL86: { "data-framer-name": `Default - Tablet` },
                      PsSiYvF_R: { "data-framer-name": `Featured - Desktop` },
                      pWBTNdtQc: { "data-framer-name": `Featured - Phone` },
                      yg1GdlOax: { "data-framer-name": `Featured - Tablet` },
                    },
                    O,
                    N
                  ),
                  children: [
                    $ !== !1 &&
                      /*#__PURE__*/ o(u.div, {
                        className: `framer-t7uaac`,
                        "data-framer-name": `Image`,
                        layoutDependency: Z,
                        layoutId: `pDRi68qwP`,
                        style: {
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        children: [
                          T !== !1 &&
                            /*#__PURE__*/ s(u.div, {
                              className: `framer-1q4uabi`,
                              "data-framer-name": `Featured Badge`,
                              layoutDependency: Z,
                              layoutId: `LLSsPgnf5`,
                              style: {
                                backgroundColor: `var(--token-f34a8341-d076-4cc4-bf03-b456a5c6c7ab, rgb(200, 55, 11))`,
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                              },
                              children: /*#__PURE__*/ s(m, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(u.p, {
                                    className: `framer-styles-preset-15frtqy`,
                                    "data-styles-preset": `P89o9sRK1`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255)))`,
                                    },
                                    children: `Featured`,
                                  }),
                                }),
                                className: `framer-ljph9h`,
                                "data-framer-name": `Featured`,
                                fonts: [`Inter`],
                                layoutDependency: Z,
                                layoutId: `DH8Zs0w8A`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-dd099603-6b15-4e84-a91d-b97cf84361af, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          /*#__PURE__*/ s(ie, {
                            background: {
                              alt: `Blog Image`,
                              fit: `fill`,
                              pixelHeight: 720,
                              pixelWidth: 700,
                              sizes: `max(${f?.width || `100vw`} - 32px, 1px)`,
                              ...B(b),
                            },
                            className: `framer-xkj31c`,
                            "data-border": !0,
                            "data-framer-name": `Image`,
                            fitImageDimension: `height`,
                            layoutDependency: Z,
                            layoutId: `LM6DOlhdI`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-c9461aee-312e-42d9-817a-d2c51b00fe24, rgba(200, 55, 11, 0))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              scale: 1,
                            },
                            variants: {
                              "PsSiYvF_R-hover": { scale: 1.05 },
                              "qFi91vvtx-hover": { scale: 1.05 },
                            },
                            ...M(
                              {
                                pKVTQjL86: {
                                  background: {
                                    alt: `Blog Image`,
                                    fit: `fill`,
                                    loading: p((f?.y || 0) + 16 + 0 + 0),
                                    pixelHeight: 720,
                                    pixelWidth: 700,
                                    sizes: `max(${f?.width || `100vw`} - 32px, 1px)`,
                                    ...B(b),
                                  },
                                },
                                yg1GdlOax: {
                                  background: {
                                    alt: `Blog Image`,
                                    fit: `fill`,
                                    loading: p((f?.y || 0) + 16 + 117.4 + 0),
                                    pixelHeight: 720,
                                    pixelWidth: 700,
                                    sizes: `max(${f?.width || `100vw`} - 32px, 1px)`,
                                    ...B(b),
                                  },
                                },
                              },
                              O,
                              N
                            ),
                          }),
                        ],
                      }),
                    /*#__PURE__*/ o(u.div, {
                      className: `framer-o8fiq2`,
                      "data-framer-name": `Info`,
                      layoutDependency: Z,
                      layoutId: `j5LZksxSo`,
                      children: [
                        /*#__PURE__*/ o(u.div, {
                          className: `framer-98l0zj`,
                          "data-framer-name": `Inner Info`,
                          layoutDependency: Z,
                          layoutId: `tkfAEeo73`,
                          children: [
                            fe !== !1 &&
                              /*#__PURE__*/ s(oe, {
                                height: 29,
                                ...M(
                                  {
                                    pKVTQjL86: { y: (f?.y || 0) + 16 + 0 + 0 + 0 + 0 + 28.9 },
                                    yg1GdlOax: { y: (f?.y || 0) + 16 + 0 + 0 + 0 + 0 + 32.9 },
                                  },
                                  O,
                                  N
                                ),
                                children: /*#__PURE__*/ s(ce, {
                                  className: `framer-1m65k72-container`,
                                  layoutDependency: Z,
                                  layoutId: `SuVP5ZXqb-container`,
                                  nodeId: `SuVP5ZXqb`,
                                  rendersWithMotion: !0,
                                  scopeId: `do4KYXbUh`,
                                  children: /*#__PURE__*/ s(j, {
                                    height: `100%`,
                                    id: `SuVP5ZXqb`,
                                    layoutId: `SuVP5ZXqb`,
                                    variant: V(`Qc5Z9fZHw`),
                                    vOUUEJJrj: C,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            pe !== !1 &&
                              /*#__PURE__*/ s(m, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(u.p, {
                                    className: `framer-styles-preset-15frtqy`,
                                    "data-styles-preset": `P89o9sRK1`,
                                    style: {
                                      "--framer-text-alignment": `right`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25)))`,
                                    },
                                    children: `Nov 1, 2025`,
                                  }),
                                }),
                                className: `framer-fma7ng`,
                                "data-framer-name": `Date`,
                                fonts: [`Inter`],
                                layoutDependency: Z,
                                layoutId: `g9eTj4UDd`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25))`,
                                },
                                text: /*#__PURE__*/ s(`time`, { dateTime: w, children: he }),
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...M(
                                  {
                                    EeIVeKqaU: {
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.p, {
                                          className: `framer-styles-preset-15frtqy`,
                                          "data-styles-preset": `P89o9sRK1`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-43308922-21a3-4cea-bd3b-98fdc7007811, rgb(25, 25, 25)))`,
                                          },
                                          children: `Nov 1, 2025`,
                                        }),
                                      }),
                                    },
                                  },
                                  O,
                                  N
                                ),
                              }),
                          ],
                        }),
                        /*#__PURE__*/ s(m, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(u.h2, {
                              className: `framer-styles-preset-1yngv0g`,
                              "data-styles-preset": `prOpMcG3Y`,
                              style: {
                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21)))`,
                              },
                              children: `Breakthroughs powering manufacturing efficiency`,
                            }),
                          }),
                          className: `framer-a6go8v`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: Z,
                          layoutId: `qyi6nT4Dc`,
                          style: {
                            "--extracted-1of0zx5": `var(--token-43b469ce-b401-42e9-acb2-b8858a02bef4, rgb(21, 21, 21))`,
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
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-oeEkg.framer-1diokt, .framer-oeEkg .framer-1diokt { display: block; }`,
        `.framer-oeEkg.framer-1ubn1sz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; text-decoration: none; width: 397px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-oeEkg .framer-t7uaac { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-oeEkg .framer-1q4uabi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px; position: absolute; right: 16px; top: 16px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-oeEkg .framer-ljph9h, .framer-oeEkg .framer-fma7ng { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-oeEkg .framer-xkj31c { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-oeEkg .framer-o8fiq2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oeEkg .framer-98l0zj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oeEkg .framer-1m65k72-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-oeEkg .framer-a6go8v { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-oeEkg.framer-v-1jbu3hd .framer-t7uaac, .framer-oeEkg.framer-v-fm4sjc .framer-fma7ng, .framer-oeEkg.framer-v-1moedhg .framer-t7uaac, .framer-oeEkg.framer-v-zwht8r .framer-fma7ng, .framer-oeEkg.framer-v-rjtdsv .framer-t7uaac { order: 1; }`,
        `.framer-oeEkg.framer-v-1jbu3hd .framer-o8fiq2, .framer-oeEkg.framer-v-fm4sjc .framer-1m65k72-container, .framer-oeEkg.framer-v-zwht8r .framer-1m65k72-container, .framer-oeEkg.framer-v-rjtdsv .framer-o8fiq2 { order: 0; }`,
        `.framer-oeEkg.framer-v-fm4sjc.framer-1ubn1sz, .framer-oeEkg.framer-v-zwht8r.framer-1ubn1sz, .framer-oeEkg.framer-v-rjtdsv.framer-1ubn1sz { cursor: unset; gap: 16px; }`,
        `.framer-oeEkg.framer-v-fm4sjc .framer-o8fiq2 { gap: 20px; }`,
        `.framer-oeEkg.framer-v-fm4sjc .framer-98l0zj { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 6px 20px; justify-content: center; }`,
        `.framer-oeEkg.framer-v-1moedhg.framer-1ubn1sz { cursor: unset; }`,
        `.framer-oeEkg.framer-v-1moedhg .framer-o8fiq2 { gap: 20px; order: 0; }`,
        `.framer-oeEkg.framer-v-1moedhg .framer-98l0zj { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px 10px; justify-content: center; }`,
        ...E,
        ...k,
        `.framer-oeEkg[data-border="true"]::after, .framer-oeEkg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = C(X, Z, `framer-oeEkg`)),
      (Q.displayName = `Blog Card`),
      (Q.defaultProps = { height: 509, width: 397 }),
      h(Q, {
        variant: {
          options: [`qFi91vvtx`, `PsSiYvF_R`, `pKVTQjL86`, `yg1GdlOax`, `EeIVeKqaU`, `pWBTNdtQc`],
          optionTitles: [
            `Default - Desktop`,
            `Featured - Desktop`,
            `Default - Tablet`,
            `Featured - Tablet`,
            `Default - Phone`,
            `Featured - Phone`,
          ],
          title: `Variant`,
          type: S.Enum,
        },
        eyITiAkMW: {
          __defaultAssetReference: `data:framer/asset-reference,u48JppC0L67MN952GwxQr0v8uY8.webp?originalFilename=image+1.webp&width=700&height=720`,
          __vekterDefault: {
            alt: `Blog Image`,
            assetReference: `data:framer/asset-reference,u48JppC0L67MN952GwxQr0v8uY8.webp?originalFilename=image+1.webp&width=700&height=720`,
          },
          description: `Recommended size 700px X 720px`,
          title: `Thumbnail`,
          type: S.ResponsiveImage,
        },
        uQ5LuDesw: {
          defaultValue: `Breakthroughs powering manufacturing efficiency`,
          displayTextArea: !0,
          title: `Title`,
          type: S.String,
        },
        onuQ5LuDeswChange: { changes: `uQ5LuDesw`, type: S.ChangeHandler },
        UD46Kgu4s: {
          defaultValue: `Smart manufacturing`,
          displayTextArea: !0,
          title: `Category`,
          type: S.String,
        },
        onUD46Kgu4sChange: { changes: `UD46Kgu4s`, type: S.ChangeHandler },
        xN0KQFmva: { defaultValue: `2025-11-01T00:00:00.000Z`, title: `Date`, type: S.Date },
        onxN0KQFmvaChange: { changes: `xN0KQFmva`, type: S.ChangeHandler },
        z94YR92Xt: { defaultValue: !1, title: `Featured?`, type: S.Boolean },
        onz94YR92XtChange: { changes: `z94YR92Xt`, type: S.ChangeHandler },
        xFC31DRfh: { title: `Link`, type: S.Link },
      }),
      g(
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
          ...N,
          ...w(D),
          ...w(ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(j, {}, t)])) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=do4KYXbUh.DuVTtquX.mjs.map
